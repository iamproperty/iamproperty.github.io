const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM, VirtualConsole } = require('jsdom');

const root = path.resolve(__dirname, '../..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const loader = read('assets/js/apps/insights-loader.app.min.js');
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
  );

// Public HTML transport contract, independent of the Looker implementation.
// Keep encoded tbody rows, rich cell content and hidden business metadata.
function sourceTable(w) {
  const table = w.document.createElement('table');
  table.innerHTML =
    '<thead><tr><th data-label="Property" data-field-type="string">Property</th><th data-label="Price" data-field-type="number" data-value-format-name="gbp_0">Price</th><th data-label="Branch" data-field-type="string">Branch</th></tr></thead><tbody></tbody>';
  const rows = Array.from({ length: 5000 }, (_, index) => {
    const branch = index % 2 ? 'South' : 'North';
    return `<tr data-udprn="${index}" data-branch="${branch}" data-latitude="54" data-longitude="-1"><td data-label="Property" data-original-value="${escape(`Property ${index} & One`)}"><span class="drillable-item"><a href="/drill/${index}">${escape(`Property ${index} & One`)}</a></span></td><td data-label="Price" data-field-type="number" data-value-format-name="gbp_0" data-original-value="${100000 + index}">${100000 + index}</td><td data-label="Branch">${branch}</td></tr>`;
  }).join('');
  table.tBodies[0].setAttribute('data-html', rows);
  return table;
}

function environment() {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (error) => {
    // jsdom cannot parse all of the existing nested component CSS. This suite
    // checks data/events/DOM contracts; browser layout remains a manual check.
    if (!error.message.includes('Could not parse CSS stylesheet')) errors.push(error);
  });
  const dom = new JSDOM('<!doctype html><body><div id="vis"></div></body>', {
    runScripts: 'outside-only',
    virtualConsole,
    url: 'https://insights.test/visualizations/sandbox/render/one_hub_prod',
  });
  const window = dom.window;
  window.ResizeObserver = class {
    observe() {}
    disconnect() {}
  };
  window.CSS = { supports: () => true, escape: (value) => value };
  window.HTMLElement.prototype.scrollTo = () => {};
  const popovers = new WeakSet();
  const toggle = (element, newState) => {
    const event = new window.Event('toggle');
    Object.defineProperty(event, 'newState', { value: newState });
    element.dispatchEvent(event);
  };
  window.HTMLElement.prototype.showPopover = function () {
    assert.equal(this.isConnected, true);
    popovers.add(this);
    toggle(this, 'open');
  };
  window.HTMLElement.prototype.hidePopover = function () {
    if (popovers.delete(this)) toggle(this, 'closed');
  };
  window.HTMLDialogElement.prototype.showModal = function () {
    throw new Error('Table filters must use a non-modal popover');
  };
  window.HTMLDialogElement.prototype.close = function () {
    this.open = false;
  };
  const messages = [];
  window.postMessage = (message) => messages.push(message);
  return { dom, window, errors, messages };
}
const tick = async () => {
  for (let index = 0; index < 5; index++) await Promise.resolve();
};

async function rendererScenario({ deniedStorage }) {
  const { dom, window: w, errors, messages } = environment();
  try {
    if (deniedStorage)
      Object.defineProperty(w, 'localStorage', {
        get() {
          throw new w.DOMException('Sandbox denies storage', 'SecurityError');
        },
      });
    let maps = 0;
    w.customElements.define(
      'iam-map',
      class extends w.HTMLElement {
        constructor() {
          super();
          maps++;
        }
        setData(value) {
          this.data = value;
        }
      }
    );
    w.eval(loader);
    w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
    // Loading components must not install or wrap a Looker registry.
    assert.equal(w.looker, undefined);
    const element = w.document.querySelector('#vis');
    const app = w.document.createElement('iam-app-insights');
    let ready = 0;
    app.addEventListener('component-loaded', () => ready++);
    for (const type of ['insight-action', 'table-filtered'])
      app.addEventListener(type, (event) => messages.push({ type, detail: event.detail }));
    element.append(app);
    app.append(sourceTable(w));
    await tick();
    const host = app.shadowRoot.querySelector('iam-table-data');
    assert.equal(ready, 1);
    assert.equal(host.getRecords().length, 5000);
    assert.equal(host.querySelectorAll('tbody tr').length, 50);
    assert.equal(app.getAttribute('data-view'), 'split');
    assert.ok(maps > 0);
    assert.equal(app.shadowRoot.querySelector('iam-map').data.features.length, 5000);
    app.dispatchEvent(
      new w.CustomEvent('top-window-details', {
        detail: {
          actions: [
            { action: 'export-table-data', label: 'Export' },
            { action: 'create-print-campaign', label: 'Print' },
          ],
          properties: { 'title-column': 'Property', 'branch-column': 'branch', 'cta-url-structure': '/record/:udprn' },
          customisation: [{ label: 'Branch', isVisible: false }],
        },
      })
    );
    host.selectAll();
    assert.equal(host.getSelectedRecords().length, 5000);
    assert.equal(host.querySelector('[data-action="create-print-campaign"]').disabled, true);
    host.querySelector('[data-action="export-table-data"]').click();
    let action = messages.findLast((message) => message.type === 'insight-action');
    assert.equal(action.detail.properties.length, 5000);
    assert.equal(action.detail.properties[4999].udprn, '4999');
    assert.equal(action.detail.properties[4999].columns.Price, '£104,999');
    assert.equal('id' in action.detail.properties[4999], false, 'Internal row ID must not leak into actions');
    host.querySelector('iam-pagination').dispatchEvent(new w.CustomEvent('update-page', { detail: { page: 2 } }));
    assert.equal(host.querySelector('tbody tr').dataset.udprn, '50');
    assert.equal(host.querySelector('tbody input').checked, true);
    assert.equal(host.querySelector('tbody td[data-label="Branch"]').classList.contains('d-none'), true);
    assert.equal(host.querySelector('tbody [data-cta]').getAttribute('href'), '/record/50');
    const source = app.querySelector('table');
    source.tHead.rows[0].cells[0].setAttribute('data-filters', '[{"type":"text","operator":"contains"}]');
    // A real header change rebuilds the snapshot; an identical source update reuses it.
    app.createComponent(app, source, 'source-update');
    const filteredHost = app.shadowRoot.querySelector('iam-table-data');
    filteredHost.selectAll();
    filteredHost.querySelector('[data-filter-btn]').click();
    const dialog = filteredHost.querySelector('dialog');
    dialog.querySelector('input').value = 'Property 4999';
    dialog.querySelector('[data-filter-update]').click();
    const filter = messages.findLast((message) => message.type === 'table-filtered');
    assert.equal(filter.detail.rowCount, 1);
    assert.equal(filter.detail.filters[0].column, 'Property');
    assert.equal(filter.detail.filters[0].value, 'Property 4999');
    assert.equal(app.shadowRoot.querySelector('iam-map').data.features.length, 1);
    filteredHost.querySelector('[data-action="export-table-data"]').click();
    action = messages.findLast((message) => message.type === 'insight-action');
    assert.equal(action.detail.properties.length, 1);
    assert.equal(action.detail.properties[0].udprn, '4999');
    const selectedBefore = filteredHost.getSelectedRecords().length;
    app.createComponent(app, source, 'source-update');
    assert.equal(app.shadowRoot.querySelector('iam-table-data'), filteredHost);
    assert.equal(filteredHost.getSelectedRecords().length, selectedBefore);
    // Disconnect observers/listeners, then reconnect without duplicate forwarding.
    app.remove();
    const readyBefore = ready;
    source.tBodies[0].setAttribute('data-html', '');
    await tick();
    assert.equal(ready, readyBefore);
    element.append(app);
    await tick();
    assert.equal(app.shadowRoot.querySelector('iam-table-data').getRecords().length, 0);
    // Switching from an empty data-backed result to unsupported markup must
    // restore legacy empty-state/view behaviour rather than retain inline state.
    source.tBodies[0].setAttribute('data-html', '<tr><td colspan="3">Merged result</td></tr>');
    await tick();
    assert.ok(app.shadowRoot.querySelector('iam-table-advanced'));
    assert.equal(app.shadowRoot.querySelector('iam-table-data'), null);
    assert.equal(app.shadowRoot.querySelector('.empty-state').style.display, '');
    assert.equal(app.getAttribute('data-view'), 'list');
    assert.equal(app.shadowRoot.querySelector('#view-controls').classList.contains('d-none'), true);
    const beforeReset = messages.filter((message) => message.type === 'insight-action').length;
    app.dispatchEvent(new w.CustomEvent('table-customisation-reset'));
    assert.equal(messages.filter((message) => message.type === 'insight-action').length, beforeReset + 1);
    assert.deepEqual(
      errors.map((error) => error.cause?.stack || error.detail?.stack || error.stack),
      []
    );
    console.log(
      `PASS: HTML adapter, storage ${deniedStorage ? 'denied' : 'allowed'}; 5,000 records, 50 rows, maps, full/filtered actions, paging, customisation and reconnect`
    );
  } finally {
    await new Promise((resolve) => setImmediate(resolve));
    dom.window.close();
  }
}

function inlineFilters() {
  const { dom, window: w, errors } = environment();
  try {
    w.eval(loader);
    w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
    const host = w.document.createElement('iam-table-data');
    host.setAttribute('data-selectall', '');
    const records = Array.from({ length: 5000 }, (_, id) => ({
      id,
      name: `Property ${id}`,
      price: 100000 + id,
      date: id % 2 ? '2026-01-02' : '2026-01-01',
      branch: id % 2 ? 'South' : 'North',
    }));
    host.setData(records, {
      rowKey: 'id',
      columns: [
        { key: 'name', label: 'Property', filters: true },
        { key: 'price', label: 'Price', format: 'price', filters: [{ type: 'price' }] },
        { key: 'date', label: 'Date', format: 'date', filters: [{ type: 'date' }] },
        { key: 'branch', label: 'Branch', filters: [{ type: 'select', options: ['North', 'South'] }] },
      ],
    });
    w.document.body.append(host);
    assert.equal(host.querySelectorAll('tbody tr').length, 50);
    assert.equal(host.querySelector('datalist'), null, 'Do not build suggestion lists during initial setup');
    const open = (index) => {
      host.querySelector(`[data-filter-btn][data-column-index="${index}"]`).click();
      return host.querySelector('dialog');
    };
    let dialog = open(0);
    assert.equal(dialog.classList.contains('dialog--inline-filter'), true);
    assert.equal(dialog.getAttribute('popover'), 'auto');
    assert.equal(dialog.querySelector('form'), null, 'Sandboxed filters must not create forms');
    assert.equal(dialog.querySelector('[data-filter-update]').type, 'button');
    assert.equal(dialog.open, false, 'Popover must not activate modal dialog behaviour');
    assert.equal(dialog.querySelector('h2'), null);
    const input = dialog.querySelector('input');
    assert.equal(input.list.options.length, 5000);
    assert.ok(Array.from(input.list.options).some((option) => option.value === 'Property 4999'));
    assert.equal(w.document.activeElement, input);
    assert.equal(host.querySelector('[data-filter-btn]').getAttribute('aria-expanded'), 'true');
    input.value = 'Property 4999';
    dialog.querySelector('[data-filter-update]').click();
    assert.equal(host.getMatchingRecords().length, 1);
    assert.equal(host.querySelector('dialog'), null);
    assert.equal(w.document.activeElement, host.querySelector('[data-filter-btn]'));
    dialog = open(0);
    assert.equal(
      dialog.querySelector('input').list.options.length,
      5000,
      'Suggestions must include filtered-out records'
    );
    Array.from(dialog.querySelectorAll('button'))
      .find((button) => button.textContent === 'Reset')
      .click();
    assert.equal(host.getMatchingRecords().length, 5000);
    dialog = open(0);
    const enterInput = dialog.querySelector('input');
    enterInput.value = 'Property 4999';
    enterInput.dispatchEvent(new w.KeyboardEvent('keyup', { key: 'Enter', bubbles: true, isComposing: true }));
    assert.equal(host.getMatchingRecords().length, 5000, 'IME confirmation must not apply a filter');
    enterInput.dispatchEvent(new w.KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
    assert.equal(host.getMatchingRecords().length, 1, 'Enter applies without a native form submission');
    dialog = open(0);
    Array.from(dialog.querySelectorAll('button'))
      .find((button) => button.textContent === 'Reset')
      .click();
    dialog = open(1);
    const operator = dialog.querySelector('[data-operator]');
    operator.value = 'between';
    operator.dispatchEvent(new w.Event('change'));
    const [from, to] = dialog.querySelectorAll('input');
    assert.ok(Array.from(from.list.options).some((option) => option.value === '104999'));
    from.value = '100000';
    from.dispatchEvent(new w.Event('input'));
    to.value = '99999';
    dialog.querySelector('[data-filter-update]').click();
    assert.equal(host.querySelector('dialog'), dialog, 'Invalid ranges keep the filter open');
    assert.ok(to.validationMessage);
    assert.equal(host.getMatchingRecords().length, 5000);
    to.value = '100002';
    to.dispatchEvent(new w.Event('input'));
    dialog.querySelector('[data-filter-update]').click();
    assert.equal(host.getMatchingRecords().length, 3);
    dialog = open(2);
    assert.equal(dialog.querySelector('datalist'), null);
    assert.equal(dialog.querySelector('input').type, 'date');
    dialog.querySelector('input').value = '2026-01-02';
    dialog.querySelector('[data-filter-update]').click();
    assert.equal(host.getMatchingRecords().length, 1);
    dialog = open(3);
    const choices = dialog.querySelector('select:not([data-operator])');
    assert.deepEqual(
      Array.from(choices.options, (option) => option.value),
      ['', 'North', 'South']
    );
    choices.value = 'South';
    dialog.querySelector('[data-filter-update]').click();
    assert.equal(host.getMatchingRecords()[0].id, 1);
    dialog = open(0);
    dialog.hidePopover();
    assert.equal(host.querySelector('dialog'), null, 'Light dismissal removes controls without applying changes');
    assert.equal(host.getMatchingRecords().length, 1);
    dialog = open(0);
    host.querySelector('[data-filter-btn]').click();
    assert.equal(host.querySelector('dialog'), null, 'Clicking the same heading closes its filter');
    dialog = open(0);
    const replacement = open(1);
    assert.equal(dialog.isConnected, false);
    assert.equal(host.querySelectorAll('.dialog--inline-filter').length, 1);
    const pagination = host.querySelector('iam-pagination') || host.shadowRoot.querySelector('iam-pagination');
    pagination.dispatchEvent(new w.CustomEvent('update-page', { detail: { page: 1 } }));
    assert.equal(replacement.isConnected, false, 'Rendering a different page must remove stale anchored controls');
    dialog = open(0);
    host.remove();
    assert.equal(dialog.isConnected, false);
    assert.deepEqual(
      errors.map((error) => error.cause?.stack || error.stack),
      []
    );
    console.log(
      'PASS: non-modal anchored filters, all-record suggestions, reset, numeric/date/select filters, ranges and dismissal'
    );
  } finally {
    dom.window.close();
  }
}

function legacyTableIndexing() {
  const { dom, window: w, errors } = environment();
  try {
    w.eval(loader);
    w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
    const table = w.document.createElement('iam-table-advanced');
    assert.equal(typeof table.setData, 'undefined', 'Legacy component must not expose the record renderer API');
    table.setAttribute('data-selectall', '');
    table.innerHTML =
      '<iam-actionbar data-selectall></iam-actionbar><table><thead><tr><th data-sort>Property</th></tr></thead><tbody><tr data-index="41"><td>One</td></tr><tr><td>Two</td></tr></tbody></table>';
    w.document.body.append(table);
    assert.equal(table.querySelectorAll('tbody input[type="checkbox"]').length, 2);
    assert.equal(table.querySelector('tbody tr').getAttribute('data-index'), '41');
    assert.equal(table.querySelectorAll('tbody tr')[1].getAttribute('data-index'), '2');
    assert.deepEqual(
      errors.map((error) => error.cause?.stack || error.detail?.stack || error.stack),
      []
    );
    console.log('PASS: legacy sortable HTML table retains stable row indices and selection controls');
  } finally {
    dom.window.close();
  }
}

function paginationReconnect() {
  const { dom, window: w, errors } = environment();
  try {
    w.eval(loader);
    w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
    const pagination = w.document.createElement('iam-pagination');
    pagination.setAttribute('data-total', '150');
    pagination.setAttribute('data-show', '50');
    pagination.setAttribute('data-increment', '50');
    w.document.body.append(pagination);
    const more = pagination.shadowRoot.querySelector('.load-more');
    more.click();
    more.click();
    assert.equal(pagination.getAttribute('data-show'), '150');
    assert.equal(more.classList.contains('d-none'), true);
    pagination.setAttribute('data-total', '200');
    assert.equal(more.classList.contains('d-none'), false);
    pagination.remove();
    w.document.body.append(pagination);
    more.click();
    assert.equal(pagination.getAttribute('data-show'), '200', 'Reconnection must not duplicate click handlers');
    assert.deepEqual(
      errors.map((error) => error.message),
      []
    );
    console.log('PASS: pagination load-more, refreshed totals and reconnect');
  } finally {
    dom.window.close();
  }
}

(async () => {
  inlineFilters();
  legacyTableIndexing();
  paginationReconnect();
  await rendererScenario({ deniedStorage: false });
  await rendererScenario({ deniedStorage: true });
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
