import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import search, { datalistSelectOption, filterDatalist } from './search.ts';

installTestDom();

if (typeof globalThis.CustomEvent === 'undefined') {
  globalThis.CustomEvent = class extends Event {
    detail;

    constructor(type, options = {}) {
      super(type, options);
      this.detail = options.detail;
    }
  };
}

describe('Search module', () => {
  it('fetches GET results, builds datalist options and filters them by the search term', async () => {
    let requestedUrl = '';
    let requestedOptions;

    globalThis.fetch = (url, options) => {
      requestedUrl = url;
      requestedOptions = options;

      return Promise.resolve({
        json: () =>
          Promise.resolve({
            data: [
              { value: 'alpha-id', label: 'Alpha\nTeam' },
              { id: 'beta-id', title: 'Beta Team' },
            ],
          }),
      });
    };

    const component = createElement('iam-search', { dataUrl: '/results' });
    const input = createElement('input', { name: 'q', value: 'alpha & beta' });
    const datalist = createElement('datalist');
    append(component, input, datalist);

    await search(component, datalist, 'alpha');

    expect(requestedUrl === '/results?q=alpha%20%26%20beta');
    expect(requestedOptions.method === 'GET');
    expect(datalist.options.length === 2);
    expect(datalist.options[0].value === 'alpha-id');
    expect(datalist.options[0].textContent === 'Alpha, Team');
    expect(!datalist.options[0].classList.contains('js-hide'));
    expect(datalist.options[1].classList.contains('js-hide'));
  });

  it('posts form values and renders grouped response options with custom schemas', async () => {
    let requestedUrl = '';
    let requestedOptions;

    globalThis.fetch = (url, options) => {
      requestedUrl = url;
      requestedOptions = options;

      return Promise.resolve({
        json: () =>
          Promise.resolve({
            results: {
              groups: {
                Products: [{ code: 'eco', name: 'Ecosystem' }],
                Learning: [{ code: 'guide', name: 'Guide' }],
              },
            },
          }),
      });
    };

    const component = createElement('iam-search', {
      dataDisplaySchema: 'name',
      dataMethod: 'POST',
      dataSchema: 'results.groups',
      dataUrl: '/lookup',
      dataValueSchema: 'code',
    });
    const input = createElement('input', { name: 'market', value: 'auction' });
    const select = createElement('select', { name: 'status', value: 'active' });
    const datalist = createElement('datalist');
    append(component, input, select, datalist);

    await search(component, datalist, 'guide');

    expect(requestedUrl === '/lookup');
    expect(requestedOptions.method === 'POST');
    expect(requestedOptions.body === '{"market":"auction","status":"active"}');
    expect(datalist.options.length === 2);
    expect(datalist.options[0].value === 'eco');
    expect(datalist.options[0].textContent === 'Products: Ecosystem');
    expect(datalist.options[0].classList.contains('js-hide'));
    expect(datalist.options[1].textContent === 'Learning: Guide');
    expect(!datalist.options[1].classList.contains('js-hide'));
  });

  it('filters datalist options using visible text before value', () => {
    const datalist = createElement('datalist');
    const visibleMatch = createElement('option', { value: 'hidden-value' }, 'Matching label');
    const valueMatch = createElement('option', { value: 'value match' });
    const noMatch = createElement('option', { value: 'elsewhere' }, 'Different label');
    append(datalist, visibleMatch, valueMatch, noMatch);

    filterDatalist(datalist, 'match');

    expect(!visibleMatch.classList.contains('js-hide'));
    expect(!valueMatch.classList.contains('js-hide'));
    expect(noMatch.classList.contains('js-hide'));
  });

  it('selects a datalist option, stores alternate values and dispatches selection details', () => {
    const component = createElement('iam-search');
    const input = createElement('input', { name: 'product' });
    const datalist = createElement('datalist');
    const inactiveOption = createElement('option', { value: 'inactive-id' }, 'Inactive');
    const option = createElement('option', { dataUrl: '/products/alpha', value: 'alpha-id' }, 'Alpha');
    let selectedDetail;

    component.addEventListener('option-selected', (event) => {
      selectedDetail = event.detail;
    });

    append(datalist, inactiveOption, option);
    append(component, input, datalist);

    datalistSelectOption(component, input, option);

    expect(input.value === 'Alpha');
    expect(input.getAttribute('data-value') === 'Alpha');
    expect(input.getAttribute('placeholder') === 'Alpha');
    expect(component.innerHTML.includes('name="productAlt" value="alpha-id"'));
    expect(option.classList.contains('active'));
    expect(!inactiveOption.classList.contains('active'));
    expect(selectedDetail.title === 'Alpha');
    expect(selectedDetail.value === 'alpha-id');
    expect(selectedDetail.url === '/products/alpha');
  });
});
