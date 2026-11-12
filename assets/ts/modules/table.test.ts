import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { addSelectboxes, fixTableCells, setFixedCellsViaHeaders } from './table.ts';

installTestDom();

describe('Table fixed columns', () => {
  it('measures before writing, preserves row offsets and skips unchanged resize writes', () => {
    const table = createElement('table');
    const rows = [createElement('tr'), createElement('tr')];
    const cells = rows.map((row) => {
      table.appendChild(row);
      return [0, 1, 2, 3].map((index) => {
        const cell = createElement('td', { class: index === 0 || index === 2 ? 'td--fixed' : '' });
        row.appendChild(cell);
        return cell;
      });
    });
    let width = 40;
    let writes = 0;
    const operations: string[] = [];
    cells.flat().forEach((cell) => {
      Object.defineProperty(cell, 'offsetWidth', {
        get: (): number => {
          operations.push('read');
          return cell.parentNode === rows[0] ? width : width + 10;
        },
      });
      const setProperty = cell.style.setProperty.bind(cell.style);
      cell.style.setProperty = (name, value): void => {
        operations.push('write');
        writes++;
        setProperty(name, value);
      };
    });
    const originalObserver = globalThis.ResizeObserver;
    let resize: () => void = (): void => {};
    globalThis.ResizeObserver = class {
      constructor(callback) { resize = callback; }
      observe(): void {}
    } as typeof ResizeObserver;
    try {
      setFixedCellsViaHeaders(table);
      expect(operations.lastIndexOf('read') < operations.indexOf('write'));
      expect(cells[0].map((cell) => cell.style.getPropertyValue('--left-offset')).join() === '0px,40px,40px,80px');
      expect(cells[1].map((cell) => cell.style.getPropertyValue('--left-offset')).join() === '0px,50px,50px,100px');
      expect(cells[1][3].dataset.previousColWidths === '100');
      const initialWrites = writes;
      resize();
      expect(writes === initialWrites);
      width = 60;
      operations.length = 0;
      resize();
      expect(operations.lastIndexOf('read') < operations.indexOf('write'));
      expect(cells[0][3].style.getPropertyValue('--left-offset') === '120px');
      expect(cells[1][3].style.getPropertyValue('--left-offset') === '140px');
    } finally {
      globalThis.ResizeObserver = originalObserver;
    }
  });
});


describe('Table cell formatting', () => {
  it('reads each header once and preserves labels, formats, classes and statuses', () => {
    const table = createElement('table');
    const thead = createElement('thead');
    const headRow = createElement('tr');
    const heading = createElement('th', { dataTdClass: 'status-cell', dataFormat: 'capitalise', class: 'd-none' });
    const label = createElement('span', { class: 'th__content' }, 'Status');
    heading.appendChild(label);
    headRow.appendChild(heading);
    thead.appendChild(headRow);
    table.appendChild(thead);
    const tbody = createElement('tbody');
    table.appendChild(tbody);
    const cells = ['pending', 'complete', 'other'].map((value) => {
      const row = createElement('tr');
      const cell = createElement('td', {}, value);
      row.appendChild(cell);
      // A surplus cell must remain untouched when it has no matching heading.
      row.appendChild(createElement('td', {}, 'Unconfigured'));
      tbody.appendChild(row);
      return cell;
    });
    let headerReads = 0;
    const querySelector = heading.querySelector.bind(heading);
    heading.querySelector = (selector): ReturnType<typeof querySelector> => {
      headerReads++;
      return querySelector(selector);
    };
    fixTableCells(table);
    expect(headerReads === 1);
    cells.forEach((cell, index) => {
      expect(cell.getAttribute('data-label') === 'Status');
      expect(cell.classList.contains('status-cell') && cell.classList.contains('d-none'));
      expect(cell.getAttribute('data-format') === 'capitalise');
      expect(cell.getAttribute('data-original-value') === ['pending', 'complete', 'other'][index]);
      expect(cell.textContent === ['Pending', 'Complete', 'Other'][index]);
      expect(!cell.nextElementSibling.hasAttribute('data-label'));
    });
    expect(cells[0].getAttribute('data-content') === 'pending');
    expect(cells[1].getAttribute('data-content') === 'complete');
    expect(!cells[2].hasAttribute('data-content'));
  });
});


describe('Table row selection setup', () => {
  it('preserves selection placement, initial state, labels and existing controls', () => {
    const component = createElement('iam-table-advanced', { dataSelectall: '' });
    const table = createElement('table');
    const thead = createElement('thead');
    const heading = createElement('tr');
    const expandHeading = createElement('th', { class: 'expand-button-heading' });
    heading.appendChild(expandHeading);
    thead.appendChild(heading);
    table.appendChild(thead);
    const tbody = createElement('tbody');
    table.appendChild(tbody);
    const rows = [createElement('tr', { dataSelected: '' }), createElement('tr'), createElement('tr')];
    const expand = createElement('td', { class: 'td--expand' });
    rows[0].appendChild(expand);
    const existing = createElement('td', { class: 'selectrow' });
    rows[2].appendChild(existing);
    rows.forEach((row) => {
      row.appendChild(createElement('td', {}, 'Property'));
      tbody.appendChild(row);
    });
    addSelectboxes(component, table);
    const selected = rows[0].querySelector('.selectrow');
    const unselected = rows[1].querySelector('.selectrow');
    expect(expandHeading.nextElementSibling.classList.contains('selectrow-heading'));
    expect(expand.nextElementSibling === selected);
    expect(rows[1].firstChild === unselected);
    expect(selected.querySelector('input').hasAttribute('checked'));
    expect(!unselected.querySelector('input').hasAttribute('checked'));
    const ids = [selected, unselected].map((cell) => {
      const input = cell.querySelector('input');
      expect(input.getAttribute('type') === 'checkbox' && input.getAttribute('name') === 'row');
      expect(cell.querySelector('label').getAttribute('for') === input.getAttribute('id'));
      expect(cell.querySelector('span').textContent === 'Select row');
      return input.getAttribute('id');
    });
    expect(ids[0] !== ids[1]);
    expect(rows.map((row) => row.getAttribute('data-index')).join() === '1,2,3');
    addSelectboxes(component, table);
    expect(heading.querySelectorAll('.selectrow-heading').length === 1);
    expect(rows.every((row) => row.querySelectorAll('.selectrow').length === 1));
    expect(rows[0].querySelector('.selectrow') === selected);
    expect(rows[2].querySelector('.selectrow') === existing);
  });

  it('leaves tables without data-selectall untouched', () => {
    const component = createElement('iam-table-advanced');
    const table = createElement('table');
    const before = table.outerHTML;
    addSelectboxes(component, table);
    expect(table.outerHTML === before);
  });
});
