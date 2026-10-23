import { describe, expect, it } from './test';
import { TableData } from './table-data';
import { comparableValue, matchesColumnFilter, readHeaderColumns } from './table-data-columns';
import { createElement, installTestDom } from './test-dom';

installTestDom();

describe('Data-backed column filtering and sorting', () => {
  it('compares typed numbers, prices and dates, including zero and inclusive ranges', () => {
    expect(matchesColumnFilter('£1,200.50', { type: 'price', operator: 'greater than', value: '1000' }));
    expect(matchesColumnFilter(0, { type: 'number', operator: 'equals', value: '0' }));
    expect(!matchesColumnFilter('', { type: 'number', operator: 'equals', value: '0' }));
    expect(matchesColumnFilter(11, { type: 'number', operator: 'between', value: ['2', '11'] }));
    expect(!matchesColumnFilter(12, { type: 'number', operator: 'between', value: ['2', '11'] }));
    expect(!matchesColumnFilter(12, { type: 'number', operator: 'between', value: ['2', ''] }));
    expect(matchesColumnFilter('2026-10-22T13:30:00Z', { type: 'date', operator: 'equals', value: '22/10/2026' }));
    expect(matchesColumnFilter('22.10.2026', { type: 'date', operator: 'between', value: '2026-10-01,2026-10-22' }));
    expect(!matchesColumnFilter('2026-10-23', { type: 'date', operator: 'before', value: '2026-10-22' }));
    expect(comparableValue('31/02/2026', 'date') === null);
    expect(comparableValue('unknown', 'number') === null);
  });

  it('supports case-insensitive text operators and inactive filters', () => {
    expect(matchesColumnFilter('Newcastle Branch', { type: 'text', value: 'NEWCASTLE' }));
    expect(matchesColumnFilter('Newcastle Branch', { operator: 'begins with', value: 'new' }));
    expect(matchesColumnFilter('Newcastle Branch', { operator: 'ends with', value: 'branch' }));
    expect(matchesColumnFilter('Newcastle Branch', { operator: 'does not contain', value: 'London' }));
    expect(matchesColumnFilter('Newcastle', { operator: 'does not equal', value: 'London' }));
    expect(matchesColumnFilter('anything', { value: null }));
  });

  it('combines column filters with application filtering across all 5,000 records', () => {
    const data = new TableData();
    data.replace(Array.from({ length: 5000 }, (_, id) => ({ id, weeks: id % 20, branch: id % 2 ? 'North' : 'South' })));
    data.configureColumns([
      { key: 'weeks', sort: true, filters: [{ type: 'number', operator: 'equals', value: '11' }] },
      { key: 'branch', filters: true },
    ]);
    expect(data.matching.length === 250);
    data.selectAll();
    data.setColumnFilters('branch', [{ type: 'text', operator: 'equals', value: 'South' }]);
    expect(data.matching.length === 0);
    expect(data.selected.size === 250);
    data.setColumnFilters('branch', [{ type: 'text', value: null }]);
    data.filter((record) => Number(record.id) > 2500);
    expect(data.matching.length === 125);
    data.filter(null);
    expect(data.matching.length === 250);
    data.configureColumns([...data.columns]);
    expect(data.matching.length === 250);
    expect(data.page(1, 50).length === 50);
  });

  it('cycles typed sorting and restores original order without losing selection', () => {
    const data = new TableData();
    data.replace([
      { id: 1, price: '£100' },
      { id: 2, price: '£9' },
      { id: 3, price: null },
    ]);
    data.configureColumns([{ key: 'price', sort: true, format: 'price' }]);
    data.select(1, true);
    data.cycleColumnSort('price');
    expect(data.matching.map((record) => record.id).join() === '2,1,3');
    data.cycleColumnSort('price');
    expect(data.matching.map((record) => record.id).join() === '1,2,3');
    data.cycleColumnSort('price');
    expect(data.columnSort === null);
    expect(data.selected.has(1));
    data.cycleColumnSort('price');
    data.sort(null);
    expect(data.columnSort === null && data.matching[0].id === 1);
  });

  it('sorts date columns chronologically rather than by their display text', () => {
    const data = new TableData();
    data.replace([
      { id: 1, date: '01/11/2026' },
      { id: 2, date: '22/10/2026' },
    ]);
    data.configureColumns([{ key: 'date', sort: true, filters: [{ type: 'date' }] }]);
    data.cycleColumnSort('date');
    expect(data.matching[0].id === 2);
  });

  it('reads existing header attributes and explicit record keys', () => {
    const table = createElement('table');
    const head = createElement('thead');
    const row = createElement('tr');
    const definitions = [
      { key: 'property', label: 'Property', filters: '[{"type":"text"}]' },
      { key: 'listed', label: 'Date listed', filters: '[{"type":"date"}]', format: 'date' },
      { key: 'branch', label: 'Branch', filters: '' },
      { key: 'weeks', label: 'Weeks', filters: '[{"type":"number","operator":"equals","value":"11"}]' },
    ];
    definitions.forEach((definition) => {
      const heading = createElement('th');
      heading.textContent = definition.label;
      heading.setAttribute('data-key', definition.key);
      heading.setAttribute('data-sort', '');
      heading.setAttribute('data-filters', definition.filters);
      if (definition.format) heading.setAttribute('data-format', definition.format);
      row.appendChild(heading);
    });
    head.appendChild(row);
    table.appendChild(head);
    const columns = readHeaderColumns(table);
    expect(columns.length === 4);
    expect(columns[0].key === 'property' && columns[0].sort === true);
    expect(columns[1].format === 'date');
    expect(columns[2].filters === true);
    expect(Array.isArray(columns[3].filters) && columns[3].filters[0].value === '11');
  });
});
