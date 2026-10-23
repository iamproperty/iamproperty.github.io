import type { DataColumn, DataFilter, TableRecord } from './table-data';

export const filterOperators = (type = 'text'): string[] => {
  if (type === 'select') return ['equals', 'does not equal'];
  if (type === 'date') return ['equals', 'does not equal', 'before', 'after', 'between'];
  if (type === 'number' || type === 'price')
    return ['equals', 'does not equal', 'less than', 'greater than', 'between'];
  return ['contains', 'does not contain', 'equals', 'does not equal', 'begins with', 'ends with'];
};

export const activeFilter = (filter: DataFilter): boolean =>
  filter.value !== undefined && filter.value !== null && filter.value !== '';

// Compare underlying values, never rendered HTML. Accept ISO dates and UK display dates.
export const comparableValue = (value: unknown, type = 'text'): string | number | null => {
  if (value == null || String(value).trim() === '') return null;
  if (type === 'number' || type === 'price') {
    const number = Number(String(value).replace(/[£,$%\s]/g, ''));
    return Number.isFinite(number) ? number : null;
  }
  if (type === 'date') {
    const text = String(value).trim();
    const uk = text.match(/^(\d{1,2})[/.](\d{1,2})[/.](\d{4})$/);
    const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})(?:$|T)/);
    if (uk || iso) {
      const year = Number(uk ? uk[3] : iso![1]);
      const month = Number(uk ? uk[2] : iso![2]);
      const day = Number(uk ? uk[1] : iso![3]);
      const date = new Date(Date.UTC(year, month - 1, day));
      return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
        ? date.getTime()
        : null;
    }
    if (value instanceof Date && Number.isFinite(value.getTime())) {
      return Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
    }
    return null;
  }
  return String(value).trim().toLocaleLowerCase();
};

export const matchesColumnFilter = (value: unknown, filter: DataFilter): boolean => {
  if (!activeFilter(filter)) return true;
  const type = filter.type || 'text';
  const operator = (filter.operator || filterOperators(type)[0]).toLowerCase();
  const actual = comparableValue(value, type);
  if (actual === null) return false;
  if (operator === 'between') {
    const bounds = Array.isArray(filter.value) ? filter.value : String(filter.value).split(',');
    if (bounds.length !== 2) return false;
    const from = comparableValue(bounds[0], type);
    const to = comparableValue(bounds[1], type);
    return from !== null && to !== null && actual >= from && actual <= to;
  }
  const expected = comparableValue(filter.value, type);
  if (expected === null) return false;
  switch (operator) {
    case 'equals':
      return actual === expected;
    case 'does not equal':
      return actual !== expected;
    case 'contains':
      return String(actual).includes(String(expected));
    case 'does not contain':
      return !String(actual).includes(String(expected));
    case 'begins with':
      return String(actual).startsWith(String(expected));
    case 'ends with':
      return String(actual).endsWith(String(expected));
    case 'before':
    case 'less than':
      return actual < expected;
    case 'after':
    case 'greater than':
      return actual > expected;
    default:
      return false;
  }
};

export const compareColumn = (
  column: DataColumn,
  direction: 'asc' | 'desc'
): ((a: TableRecord, b: TableRecord) => number) => {
  const type = column.format || (Array.isArray(column.filters) ? column.filters[0]?.type : undefined) || 'text';
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  return (a, b): number => {
    const left = comparableValue(a[column.key], type);
    const right = comparableValue(b[column.key], type);
    // Empty/invalid values stay at the end in both directions.
    if (left === null) return right === null ? 0 : 1;
    if (right === null) return -1;
    const result =
      typeof left === 'number' && typeof right === 'number'
        ? left - right
        : collator.compare(String(left), String(right));
    return direction === 'asc' ? result : -result;
  };
};

/** Read the existing th API once, before the view replaces the header. */
export const readHeaderColumns = (table: HTMLTableElement | null): DataColumn[] =>
  Array.from(table?.querySelectorAll<HTMLTableCellElement>('thead th') || []).map((heading) => {
    const column: DataColumn = {
      key: heading.dataset.key || heading.dataset.ref || heading.textContent?.trim() || '',
      label: heading.textContent?.trim(),
    };
    if (heading.hasAttribute('data-sort')) column.sort = true;
    if (heading.hasAttribute('data-format')) column.format = heading.dataset.format as DataColumn['format'];
    if (heading.hasAttribute('data-filters')) {
      const value = heading.dataset.filters;
      column.filters = value ? JSON.parse(value) : true;
      if (column.filters !== true && !Array.isArray(column.filters)) {
        throw new Error('data-filters must be an array of filter definitions.');
      }
    }
    return column;
  });
