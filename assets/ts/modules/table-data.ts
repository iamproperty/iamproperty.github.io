import { activeFilter, compareColumn, matchesColumnFilter } from './table-data-columns';
export type TableRecord = Record<string, unknown>;
export type RowId = string | number;
export type RowKey = string | ((record: TableRecord) => RowId);
export interface DataFilter {
  type?: 'text' | 'date' | 'price' | 'number' | 'select';
  operator?: string;
  value?: string | number | Array<string | number> | null;
  options?: Array<string | number>;
}

export interface DataColumn {
  key: string;
  label?: string;
  sort?: boolean;
  filters?: boolean | DataFilter[];
  format?: 'text' | 'date' | 'price' | 'number';
  // Return a DOM node for rich content. Plain values are always rendered as text.
  render?: (record: TableRecord) => Node | string | number | null;
}

/** Data and selection never depend on which rows are mounted in the DOM. */
export class TableData {
  records: TableRecord[] = [];
  matching: TableRecord[] = [];
  selected = new Set<RowId>();
  private byId = new Map<RowId, TableRecord>();
  private rowKey: RowKey = 'id';
  columns: DataColumn[] = [];
  columnFilters = new Map<string, DataFilter[]>();
  columnSort: { key: string; direction: 'asc' | 'desc' } | null = null;
  private predicate: ((record: TableRecord) => boolean) | null = null;
  private comparator: ((a: TableRecord, b: TableRecord) => number) | null = null;

  id(record: TableRecord): RowId {
    return (typeof this.rowKey === 'function' ? this.rowKey(record) : record[this.rowKey]) as RowId;
  }

  replace(records: TableRecord[], rowKey: RowKey = this.rowKey): void {
    const byId = new Map<RowId, TableRecord>();
    for (const record of records) {
      const id = typeof rowKey === 'function' ? rowKey(record) : record[rowKey];
      if (
        (typeof id !== 'string' && typeof id !== 'number') ||
        id === '' ||
        (typeof id === 'number' && !Number.isFinite(id))
      ) {
        throw new Error('Data-backed tables require a non-empty string or finite number ID for every record.');
      }
      if (byId.has(id)) throw new Error(`Duplicate table record ID: ${id}`);
      byId.set(id, record);
    }
    this.rowKey = rowKey;
    this.records = records.slice();
    this.byId = byId;
    this.selected = new Set([...this.selected].filter((id) => byId.has(id)));
    this.refresh();
  }

  filter(predicate: ((record: TableRecord) => boolean) | null): void {
    this.predicate = predicate;
    this.refresh();
  }

  configureColumns(columns: DataColumn[]): void {
    this.columns = columns;
    const filters = new Map<string, DataFilter[]>();
    columns.forEach((column) => {
      if (!column.filters) return;
      const defaults =
        Array.isArray(column.filters) && column.filters.length ? column.filters : [{ type: column.format || 'text' }];
      filters.set(column.key, this.columnFilters.get(column.key) || defaults.map((filter) => ({ ...filter })));
    });
    this.columnFilters = filters;
    if (this.columnSort && !columns.some((column) => column.key === this.columnSort!.key && column.sort)) {
      this.columnSort = null;
    }
    this.refresh();
  }

  setColumnFilters(key: string, filters: DataFilter[]): void {
    this.columnFilters.set(
      key,
      filters.map((filter) => ({ ...filter }))
    );
    this.refresh();
  }

  cycleColumnSort(key: string): void {
    this.comparator = null;
    if (this.columnSort?.key !== key) this.columnSort = { key, direction: 'asc' };
    else if (this.columnSort.direction === 'asc') this.columnSort.direction = 'desc';
    else this.columnSort = null;
    this.refresh();
  }

  sort(comparator: ((a: TableRecord, b: TableRecord) => number) | null): void {
    this.columnSort = null;
    this.comparator = comparator;
    this.refresh();
  }

  private refresh(): void {
    this.matching = this.predicate ? this.records.filter(this.predicate) : this.records.slice();
    // Inactive header controls must not add a full-dataset filter pass on load.
    const activeColumns = [...this.columnFilters]
      .map(([key, filters]) => ({ key, filters: filters.filter(activeFilter) }))
      .filter(({ filters }) => filters.length > 0);
    if (activeColumns.length) {
      this.matching = this.matching.filter((record) =>
        activeColumns.every(({ key, filters }) => filters.every((filter) => matchesColumnFilter(record[key], filter)))
      );
    }
    const column = this.columns.find((column) => column.key === this.columnSort?.key);
    if (column && this.columnSort) this.matching.sort(compareColumn(column, this.columnSort.direction));
    else if (this.comparator) this.matching.sort(this.comparator);
  }

  page(page: number, size: number): TableRecord[] {
    return this.matching.slice((page - 1) * size, page * size);
  }

  select(id: RowId, checked: boolean): void {
    if (!this.byId.has(id)) return;
    if (checked) this.selected.add(id);
    else this.selected.delete(id);
  }

  selectAll(): void {
    this.matching.forEach((record) => this.selected.add(this.id(record)));
  }

  clear(): void {
    this.selected.clear();
  }

  selectedRecords(): TableRecord[] {
    return [...this.selected].map((id) => this.byId.get(id)!);
  }
}
