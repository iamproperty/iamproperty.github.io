import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { setFixedCellsViaHeaders } from './table.ts';

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
