/* eslint-disable */

import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { addDataAttributes, formatCell, sortTableByValues } from './table.ts';

installTestDom();

const makeTable = () => {
  const table = createElement('table');
  const thead = createElement('thead');
  const headRow = createElement('tr');
  const tbody = createElement('tbody');

  append(thead, append(headRow, createElement('th', {}, 'Name'), createElement('th', {}, 'Score')));
  append(
    tbody,
    append(
      createElement('tr'),
      createElement('td', { dataLabel: 'Name' }, 'Bravo'),
      createElement('td', { dataLabel: 'Score' }, '2')
    ),
    append(
      createElement('tr'),
      createElement('td', { dataLabel: 'Name' }, 'Alpha'),
      createElement('td', { dataLabel: 'Score' }, '10')
    )
  );
  append(table, thead, tbody);

  return { table, tbody };
};

describe('Table module', () => {
  it('formats and sorts table data', () => {
    const { table, tbody } = makeTable();

    sortTableByValues(table, 'Score', 'asc');

    expect(formatCell('capitalise', 'alpha') === 'Alpha');
    expect(tbody.innerHTML.indexOf('2') < tbody.innerHTML.indexOf('10'));
  });

  it('adds data labels and content markers to table cells', () => {
    const table = createElement('table');
    const thead = createElement('thead');
    const headRow = createElement('tr');
    const statusHeading = createElement('th', {}, 'Status');
    const dateHeading = createElement('th', { dataFormat: 'capitalise' }, 'Name');
    const tbody = createElement('tbody');
    const row = createElement('tr');
    append(headRow, statusHeading, dateHeading);
    append(thead, headRow);
    append(row, createElement('td', {}, 'Complete'), createElement('td', {}, 'alpha'));
    append(tbody, row);
    append(table, thead, tbody);

    addDataAttributes(table);

    expect(row.children[0].getAttribute('data-label') === 'Status');
    expect(row.children[0].getAttribute('data-content') === 'complete');
    expect(row.children[1].innerHTML === 'Alpha');
  });
});
