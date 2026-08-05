const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ts = require('typescript');

const moduleCache = new Map();

const readdirSync = (p, a = []) => {
  if (fs.statSync(p).isDirectory()) {
    fs.readdirSync(p).map((f) => readdirSync(a[a.push(path.join(p, f)) - 1], a));
  }

  return a;
};

const getTestFiles = () =>
  readdirSync('./assets/ts').filter((file) => file.endsWith('test.ts') && !file.endsWith(`${path.sep}test.ts`));

const resolveLocalModule = (request, parentFile) => {
  const base = path.resolve(path.dirname(parentFile), request);
  const ext = path.extname(base);
  const candidates = [];

  if (ext) {
    candidates.push(base);

    if (ext === '.js') {
      candidates.push(base.replace(/\.js$/, '.ts'));
    }
  } else {
    candidates.push(base);
    candidates.push(`${base}.ts`);
    candidates.push(`${base}.js`);
    candidates.push(`${base}.mjs`);
    candidates.push(path.join(base, 'index.ts'));
    candidates.push(path.join(base, 'index.js'));
  }

  const resolved = candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());

  if (!resolved) {
    throw new Error(`Cannot resolve ${request} from ${parentFile}`);
  }

  return resolved;
};

const createRequire = (parentFile) => (request) => {
  if (request.includes('js-cookie')) {
    return { default: { get: () => '' }, get: () => '' };
  }

  if (request === 'prettier') {
    return { doc: {} };
  }

  if (request.startsWith('.') || request.startsWith('/')) {
    return loadModule(resolveLocalModule(request, parentFile));
  }

  return require(request);
};

const loadModule = (filename) => {
  const resolvedFilename = path.resolve(filename);

  if (moduleCache.has(resolvedFilename)) {
    return moduleCache.get(resolvedFilename).exports;
  }

  const source = fs.readFileSync(resolvedFilename, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: resolvedFilename,
  }).outputText;

  const module = { exports: {} };
  moduleCache.set(resolvedFilename, module);

  const wrapper = vm.runInThisContext(
    `(function(exports, require, module, __filename, __dirname) {\n${transpiled}\n})`,
    { filename: resolvedFilename }
  );

  wrapper(module.exports, createRequire(resolvedFilename), module, resolvedFilename, path.dirname(resolvedFilename));

  return module.exports;
};

const runTestFile = async (file) => {
  console.log(`Run tests found in ${file}`);
  loadModule(file);

  if (globalThis.__unitTestPromises?.length) {
    await Promise.all(globalThis.__unitTestPromises);
    globalThis.__unitTestPromises = [];
  }
};

(async () => {
  for (const file of getTestFiles()) {
    await runTestFile(file);
  }

  if (process.exitCode) {
    process.exit(process.exitCode);
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
