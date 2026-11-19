const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { spawn } = require('node:child_process');

// Native browser regression for the allow-forms restriction that jsdom does not
// implement. Use an isolated profile, local assets and no signed-in browser.
const root = path.resolve(__dirname, '../..');
const candidates = [
  process.env.CHROME_BIN,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  ...['PROGRAMFILES', 'PROGRAMFILES(X86)', 'LOCALAPPDATA'].map(
    (key) => process.env[key] && path.join(process.env[key], 'Google/Chrome/Application/chrome.exe')
  ),
].filter(Boolean);
const binary = candidates.find((file) => fs.existsSync(file));
if (!binary) throw new Error('Chrome is required for this test. Set CHROME_BIN to its executable.');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'insights-sandbox-'));
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://localhost');
    const relative = url.pathname.slice(1);
    const file = path.resolve(root, relative);
    const allowed =
      relative === 'tests/insights/sandbox.html' ||
      relative === 'assets/js/apps/insights-loader.app.min.js' ||
      relative.startsWith('assets/css/');
    if (!allowed || !file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      response.writeHead(404);
      response.end();
      return;
    }
    response.setHeader(
      'Content-Type',
      file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : 'text/html'
    );
    response.end(fs.readFileSync(file));
  });
  let chrome, socket;
  const pending = new Map();
  try {
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    chrome = spawn(
      binary,
      [
        '--headless',
        '--disable-gpu',
        '--no-first-run',
        '--disable-background-networking',
        '--remote-debugging-port=0',
        '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1',
        '--user-data-dir=' + profile,
        'about:blank',
      ],
      { stdio: 'ignore' }
    );
    chrome.on('error', (error) => {
      console.error(error);
    });
    const portFile = path.join(profile, 'DevToolsActivePort');
    for (let index = 0; !fs.existsSync(portFile) && index < 100; index++) await delay(100);
    assert.ok(fs.existsSync(portFile), 'Chrome did not open its debugging endpoint');
    const debugPort = fs.readFileSync(portFile, 'utf8').split('\n')[0];
    const version = await (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).json();
    socket = new WebSocket(version.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      socket.addEventListener('open', resolve, { once: true });
      socket.addEventListener('error', reject, { once: true });
    });
    let id = 0;
    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      const task = pending.get(message.id);
      if (task) {
        pending.delete(message.id);
        clearTimeout(task.timer);
        message.error ? task.reject(new Error(message.error.message)) : task.resolve(message.result);
      }
    });
    const send = (method, params = {}, sessionId) =>
      new Promise((resolve, reject) => {
        const requestId = ++id;
        const timer = setTimeout(() => {
          pending.delete(requestId);
          reject(new Error('CDP timeout: ' + method));
        }, 10000);
        pending.set(requestId, { resolve, reject, timer });
        socket.send(JSON.stringify({ id: requestId, method, params, ...(sessionId ? { sessionId } : {}) }));
      });
    const { targetId } = await send('Target.createTarget', {
      url: `http://127.0.0.1:${server.address().port}/tests/insights/sandbox.html`,
    });
    const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
    const command = (method, params) => send(method, params, sessionId);
    const evaluate = async (expression) =>
      (await command('Runtime.evaluate', { expression, returnByValue: true })).result.value;
    let result;
    for (let index = 0; index < 100; index++) {
      result = await evaluate('document.body?.dataset.testResult');
      if (result) break;
      await delay(100);
    }
    assert.ok(result, 'Sandbox fixture did not report a result');
    result = JSON.parse(result);
    assert.equal(result.state, 'ready-for-enter', JSON.stringify(result));
    assert.equal(await evaluate("document.querySelector('iframe').getAttribute('sandbox')"), 'allow-scripts');
    await command('Page.bringToFront');
    // Headless Windows may have no OS-focused window. Emulate page focus before
    // sending native input; coordinate clicks can instead dismiss the popover
    // when platform fonts or asynchronous styles change its position.
    await command('Emulation.setFocusEmulationEnabled', { enabled: true });
    await evaluate("document.querySelector('iframe').contentWindow.postMessage('focus-filter-input', '*')");
    for (let index = 0; index < 50; index++) {
      result = JSON.parse(await evaluate('document.body.dataset.testResult'));
      if (result.state !== 'ready-for-enter') break;
      await delay(100);
    }
    assert.equal(result.state, 'input-focused', JSON.stringify(result));
    assert.equal(result.focused, true, JSON.stringify(result));
    for (const type of ['keyDown', 'keyUp'])
      await command('Input.dispatchKeyEvent', {
        type,
        key: 'Enter',
        code: 'Enter',
        windowsVirtualKeyCode: 13,
        nativeVirtualKeyCode: process.platform === 'darwin' ? 36 : 13,
      });
    for (let index = 0; index < 50; index++) {
      result = JSON.parse(await evaluate('document.body.dataset.testResult'));
      if (result.state !== 'input-focused') break;
      await delay(100);
    }
    assert.equal(result.state, 'passed', JSON.stringify(result));
    console.log(
      'PASS: native Chrome sandbox (allow-scripts only), Update, Reset and trusted Enter filtering without allow-forms; applied-filter chip removal and native rich-text fallback'
    );
    await send('Browser.close');
  } finally {
    for (const task of pending.values()) clearTimeout(task.timer);
    socket?.close();
    chrome?.kill();
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
    for (let attempt = 0; attempt < 20; attempt++) {
      try {
        fs.rmSync(profile, { recursive: true, force: true });
        break;
      } catch {
        await delay(100);
      }
    }
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
