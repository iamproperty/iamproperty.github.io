import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import createAppliedFilters from './applied-filters.ts';

installTestDom();

describe('Applied filters module', () => {
  it('creates a filter tag for an initial text input value', () => {
    const container = createElement('iam-applied-filters');
    const filters = createElement('div');
    const input = createElement('input', {
      name: 'search',
      value: 'auction',
      dataFilterText: 'Search $value',
    });

    append(container, input);
    createAppliedFilters(container, filters);

    expect(filters.children.length === 1);
    expect(filters.children[0].getAttribute('data-name') === 'search');
    expect(filters.children[0].innerHTML === 'Search auction');
  });
});
