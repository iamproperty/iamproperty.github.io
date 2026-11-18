const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM, VirtualConsole } = require('jsdom');

const root = path.resolve(__dirname, '../..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const original = read('assets/looker/fixtures/one_hub_prod.original.js');
const loader = read('assets/js/apps/insights-loader.app.min.js');
const production = read('assets/js/apps/insights-looker.app.min.js');
const escape = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char]
  );

// Contract fixture for the standard Looker text/null/drill wrappers observed in
// htmlForCell. Custom HTML deliberately exercises the isolated parsing fallback.
const htmlForCell = (cell) => {
  let content = cell.html || escape(cell.value === null ? '∅' : cell.rendered || cell.value);
  if (!cell.html && cell.value === null) content = `<span class='null'>${content}</span>`;
  if (cell.links?.length && !cell.html) content = `<a href='#drillmenu' target='_self'>${content}</a>`;
  return (
    `<span class='drillable-item' data-links='${escape(JSON.stringify(cell.links))}' data-context='' data-add-filter-json=''>` +
    `<span class='drillable-item-content'>${content}</span></span>`
  );
};

const fields = [
  { name: 'address', label_short: 'Property', type: 'string' },
  { name: 'price', label_short: 'Price', type: 'number', value_format_name: 'gbp_0' },
  { name: 'branch', label_short: 'Branch', type: 'string' },
];
const hidden = [
  { name: 'id', label_short: 'UDPRN', type: 'string' },
  { name: 'branchKey', label_short: 'Branch', type: 'string' },
  { name: 'geo', type: 'location' },
];
const data = Array.from({ length: 5000 }, (_, index) => ({
  address: { value: `Property ${index} & One`, links: [{ url: `/drill/${index}`, label: 'Details' }] },
  price: { value: 100000 + index },
  branch: { value: index % 2 ? 'South' : 'North' },
  id: { value: String(index) },
  branchKey: { value: index % 2 ? 'South' : 'North' },
  geo: { value: '54,-1' },
}));
const config = { query_fields: { dimensions: [...fields, ...hidden] }, sortable_columns_state: '[]' };
const query = { fields: { dimension_like: fields, measure_like: [] }, applied_filters: {} };

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
  window.HTMLElement.prototype.hidePopover = () => {};
  window.HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
  };
  window.HTMLDialogElement.prototype.close = function () {
    this.open = false;
  };
  window.LookerCharts = { Utils: { htmlForCell } };
  const messages = [];
  window.postMessage = (message) => messages.push(message);
  return { dom, window, errors, messages };
}
const tick = async () => {
  for (let index = 0; index < 5; index++) await Promise.resolve();
};

async function rendererScenario({ compatibility, deniedStorage }) {
  const { dom, window: w, errors, messages } = environment();
  try {
    if (compatibility) {
      w.__iamInsightsDataBacked = true;
      w.__iamInsightsOptimisePayload = true;
    }
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
    // The dependency loader runs before Looker creates its registry and loads
    // the visualisation. This also covers the compatibility hook's late install.
    w.eval(loader);
    let definition;
    w.looker = {
      plugins: {
        visualizations: {
          add(value) {
            definition = value;
          },
        },
      },
    };
    w.document.dispatchEvent(new w.CustomEvent('customVisualizationFrameReady'));
    w.eval(compatibility ? original : production);
    w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
    definition.trigger = () => {};
    const element = w.document.querySelector('#vis');
    definition.create(element, {});
    const app = element.querySelector('iam-app-insights');
    if (!compatibility) {
      assert.equal(app.hasAttribute('data-backed'), true, 'Production entry must activate data mode itself');
      assert.equal(w.__iamInsightsDataBacked, undefined);
      assert.equal(w.__iamInsightsOptimisePayload, undefined);
    }
    let ready = 0;
    app.addEventListener('component-loaded', () => ready++);
    let done = 0;
    definition.updateAsync(data, element, config, query, {}, () => done++);
    definition.updateAsync(data, element, config, query, {}, () => done++);
    await tick();
    const host = app.shadowRoot.querySelector('iam-table-advanced');
    assert.equal(done, 2);
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
    const filteredHost = app.shadowRoot.querySelector('iam-table-advanced');
    filteredHost.selectAll();
    filteredHost.querySelector('[data-filter-btn]').click();
    const dialog = filteredHost.querySelector('dialog');
    dialog.querySelector('input').value = 'Property 4999';
    dialog.querySelector('form').dispatchEvent(new w.Event('submit', { cancelable: true }));
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
    assert.equal(app.shadowRoot.querySelector('iam-table-advanced'), filteredHost);
    assert.equal(filteredHost.getSelectedRecords().length, selectedBefore);
    // Disconnect observers/listeners, then reconnect without duplicate forwarding.
    app.remove();
    const readyBefore = ready;
    source.tBodies[0].setAttribute('data-html', '');
    await tick();
    assert.equal(ready, readyBefore);
    element.append(app);
    await tick();
    assert.equal(app.shadowRoot.querySelector('iam-table-advanced').getRecords().length, 0);
    const beforeReset = messages.filter((message) => message.type === 'insight-action').length;
    app.dispatchEvent(new w.CustomEvent('table-customisation-reset'));
    assert.equal(messages.filter((message) => message.type === 'insight-action').length, beforeReset + 1);
    assert.deepEqual(
      errors.map((error) => error.cause?.stack || error.detail?.stack || error.stack),
      []
    );
    console.log(
      `PASS: ${compatibility ? 'compatibility hook' : 'direct production entry'}, storage ${deniedStorage ? 'denied' : 'allowed'}; 5,000 records, 50 rows, maps, full/filtered actions, paging, customisation and reconnect`
    );
  } finally {
    await new Promise((resolve) => setImmediate(resolve));
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

function payloadParity() {
  const fixtureFields = Array.from({ length: 8 }, (_, index) => ({ name: `field${index}`, type: 'string' }));
  const fixtureData = Array.from({ length: 5000 }, (_, index) =>
    Object.fromEntries([
      ...fixtureFields.map((field, column) => [
        field.name,
        column === 7 && index % 10 === 0
          ? { value: index, html: `<strong>Custom ${index}</strong>` }
          : column === 0
            ? { value: `A & B ${index}`, links: [{ url: `/drill/${index}` }] }
            : column === 3 && index % 3 === 0
              ? { value: null }
              : { value: `Value ${index + column}` },
      ]),
      ['id', { value: `ID "${index}" & <metadata>` }],
      ['geo', { value: '54,-1' }],
    ])
  );
  const fixtureConfig = { query_fields: { dimensions: [...fixtureFields, ...hidden] }, sortable_columns_state: '[]' };
  const fixtureQuery = { fields: { dimension_like: fixtureFields }, applied_filters: {} };
  const results = [];
  for (const script of [original, production]) {
    const { dom, window: w, errors } = environment();
    try {
      let definition;
      w.looker = {
        plugins: {
          visualizations: {
            add(value) {
              definition = value;
            },
          },
        },
      };
      w.eval(script);
      definition.trigger = () => {};
      const element = w.document.querySelector('#vis');
      definition.create(element, {});
      let parses = 0;
      const descriptor = Object.getOwnPropertyDescriptor(w.Element.prototype, 'innerHTML');
      Object.defineProperty(w.Element.prototype, 'innerHTML', {
        ...descriptor,
        set(value) {
          if (this.tagName === 'TD') parses++;
          descriptor.set.call(this, value);
        },
      });
      definition.updateAsync(fixtureData, element, fixtureConfig, fixtureQuery, {}, () => {});
      definition.updateAsync(fixtureData, element, fixtureConfig, fixtureQuery, {}, () => {});
      const markup = element.querySelector('tbody').getAttribute('data-html');
      const decoded = new w.DOMParser().parseFromString(`<table><tbody>${markup}</tbody></table>`, 'text/html');
      results.push({ rows: Array.from(decoded.querySelector('tbody').rows, (row) => row.outerHTML), parses });
      assert.deepEqual(
        errors.map((error) => error.cause?.stack || error.detail?.stack || error.stack),
        []
      );
    } finally {
      dom.window.close();
    }
  }
  assert.deepEqual(
    results[1].rows,
    results[0].rows,
    'Cell markup, drill attributes, nulls and business metadata must match'
  );
  assert.equal(results[0].parses, 40000);
  assert.equal(results[1].parses, 500);
  console.log('PASS: 40,000-cell payload parity; per-cell HTML parses 40,000 -> 500 (500 custom HTML cells)');
}

(async () => {
  paginationReconnect();
  payloadParity();
  await rendererScenario({ compatibility: false, deniedStorage: false });
  await rendererScenario({ compatibility: false, deniedStorage: true });
  await rendererScenario({ compatibility: true, deniedStorage: true });
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
