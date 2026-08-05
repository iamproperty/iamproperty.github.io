import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { filterTheList } from './filterlist.ts';

const { window } = installTestDom();

describe('Filter list module', () => {
  it('filters list items and records the search term', () => {
    window.dataLayer = [];
    const list = createElement('ul');
    const one = createElement('li', {}, 'Alpha');
    const two = createElement('li', {}, 'Beta');
    append(list, one, two);

    filterTheList(list, 'alp');

    expect(!one.classList.contains('d-none'));
    expect(two.classList.contains('d-none'));
    expect(window.dataLayer[0].event === 'Filtered list');
  });
});
