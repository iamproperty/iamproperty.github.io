import { activeFilter, comparableValue, filterOperators } from './table-data-columns';
import { TableData, type DataColumn, type DataFilter, type RowId } from './table-data';

const priceFormatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });
const dateFormatter = new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC' });
let nextTableId = 0;

// Render the current page and connect controls to the data model.
export class TableDataView {
  private abort = new AbortController();
  private syncing = false;
  private table: HTMLTableElement;
  private pagination: HTMLElement | null;
  private actionbar: HTMLElement | null;
  private visibleIds: RowId[] = [];
  private checkboxPrefix = `table-data-${++nextTableId}`;
  private selectAllInput: HTMLInputElement | null = null;
  private filterDialog: HTMLDialogElement | null = null;
  private get columns(): DataColumn[] {
    return this.data.columns;
  }

  constructor(
    private host: HTMLElement,
    readonly data: TableData
  ) {
    this.table = host.querySelector('table') || host.appendChild(document.createElement('table'));
    this.pagination = host.querySelector('iam-pagination') || host.shadowRoot!.querySelector('iam-pagination');
    this.actionbar = host.querySelector('iam-actionbar');
    if (!this.actionbar && host.id) {
      this.actionbar =
        Array.from(document.querySelectorAll<HTMLElement>('iam-actionbar[data-for]')).find(
          (bar) => bar.getAttribute('data-for') === host.id
        ) || null;
    }
    if (this.actionbar && host.contains(this.actionbar)) this.actionbar.setAttribute('slot', 'before');
    host.classList.add('table--component', 'table--fullwidth');
    const params = new URLSearchParams(window.location.search);
    if (!host.hasAttribute('data-show')) host.setAttribute('data-show', params.get('show') || '50');
    if (!host.hasAttribute('data-page')) host.setAttribute('data-page', params.get('page') || '1');
    const options = { signal: this.abort.signal };
    this.pagination?.addEventListener(
      'update-page',
      ((event: CustomEvent) => {
        if (this.syncing) return;
        host.setAttribute('data-page', String(event.detail.page));
        this.render();
        this.emit('update-page', { page: Number(host.getAttribute('data-page')) });
      }) as EventListener,
      options
    );
    this.pagination?.addEventListener(
      'update-show',
      ((event: CustomEvent) => {
        if (this.syncing) return;
        host.setAttribute('data-show', String(event.detail.show));
        host.setAttribute('data-page', '1');
        this.render();
        this.emit('update-show', { show: Number(host.getAttribute('data-show')) });
      }) as EventListener,
      options
    );
    this.table.addEventListener(
      'click',
      (event) => {
        const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button[data-column-index]');
        if (!button) return;
        const index = Number(button.dataset.columnIndex);
        const column = this.columns[index];
        if (button.hasAttribute('data-sort-btn')) {
          this.data.cycleColumnSort(column.key);
          this.host.setAttribute('data-page', '1');
          this.render();
          this.table.querySelector<HTMLButtonElement>(`button[data-sort-btn][data-column-index="${index}"]`)?.focus();
          this.emit('sort-by-heading', {
            heading: column.label ?? column.key,
            ref: column.key,
            sortBy: this.data.columnSort?.direction || null,
          });
        } else if (button.hasAttribute('data-filter-btn')) {
          this.openFilter(column, index);
        }
      },
      options
    );
    this.table.addEventListener(
      'change',
      (event) => {
        const input = event.target as HTMLInputElement;
        if (input === this.selectAllInput) {
          if (input.checked) this.selectAll();
          else this.clearSelection();
          return;
        }
        if (!input.matches('input[data-record-index]')) return;
        const index = Number(input.dataset.recordIndex);
        const id = this.visibleIds[index];
        this.data.select(id, input.checked);
        this.syncSelection();
        this.emit('row-selected', { rowId: id, checked: input.checked });
        this.selectionChanged();
      },
      options
    );
    this.actionbar?.addEventListener(
      'selected',
      ((event: CustomEvent) => {
        if (!this.syncing && event.detail.selected === 'all') this.selectAll();
      }) as EventListener,
      options
    );
    this.actionbar?.addEventListener(
      'none-selected',
      () => {
        if (!this.syncing) this.clearSelection();
      },
      options
    );
  }

  disconnect(): void {
    this.filterDialog?.remove();
    this.filterDialog = null;
    this.abort.abort();
  }

  selectAll(): void {
    this.data.selectAll();
    this.syncSelection();
    this.emit('all-rows-selected');
    this.selectionChanged();
  }

  clearSelection(): void {
    this.data.clear();
    this.syncSelection();
    this.emit('all-rows-unselected');
    this.selectionChanged();
  }

  private emit(name: string, detail: object = {}): void {
    this.host.dispatchEvent(new CustomEvent(name, { detail }));
  }

  selectionChanged(): void {
    // Consumers retrieve full objects on demand, not on every checkbox change.
    this.emit('selection-change', { selectedCount: this.data.selected.size });
  }

  private syncSelection(): void {
    const all =
      this.data.matching.length > 0 &&
      this.data.matching.every((record) => this.data.selected.has(this.data.id(record)));
    if (this.selectAllInput) {
      this.selectAllInput.checked = all;
      this.selectAllInput.indeterminate =
        !all && this.data.matching.some((record) => this.data.selected.has(this.data.id(record)));
      this.selectAllInput.disabled = this.data.matching.length === 0;
    }
    this.table.querySelectorAll<HTMLInputElement>('input[data-record-index]').forEach((input) => {
      input.checked = this.data.selected.has(this.visibleIds[Number(input.dataset.recordIndex)]);
    });
    this.syncing = true;
    try {
      this.actionbar?.setAttribute('data-selected', all ? 'all' : String(this.data.selected.size));
    } finally {
      this.syncing = false;
    }
  }

  render(): void {
    const positiveInt = (value: string | null, fallback: number): number => {
      const number = Number(value);
      return Number.isSafeInteger(number) && number > 0 ? number : fallback;
    };
    const size = positiveInt(this.host.getAttribute('data-show'), 50);
    const page = Math.min(
      positiveInt(this.host.getAttribute('data-page'), 1),
      Math.max(1, Math.ceil(this.data.matching.length / size))
    );
    const selectable = this.host.hasAttribute('data-selectall') || !!this.actionbar?.hasAttribute('data-selectall');
    const head = document.createElement('thead');
    const headingRow = head.insertRow();
    this.selectAllInput = null;
    if (selectable) {
      const th = document.createElement('th');
      th.className = 'selectrow selectrow-heading';
      this.selectAllInput = this.checkbox(th, `${this.checkboxPrefix}-all`, 'Select all matching records');
      headingRow.append(th);
    }
    this.columns.forEach((column, index) => {
      const th = document.createElement('th');
      th.scope = 'col';
      const label = document.createElement('span');
      label.className = 'th__content';
      label.textContent = column.label ?? column.key;
      th.append(label);
      th.dataset.key = column.key;
      if (column.sort) {
        th.setAttribute('data-sort', '');
        const direction = this.data.columnSort?.key === column.key ? this.data.columnSort.direction : null;
        th.setAttribute('aria-sort', direction === 'asc' ? 'ascending' : direction === 'desc' ? 'descending' : 'none');
        if (direction) th.dataset.orderBy = direction;
        const next =
          direction === 'asc' ? 'Sort descending' : direction === 'desc' ? 'Remove sorting' : 'Sort ascending';
        th.append(
          this.headerButton(
            index,
            'sort',
            `${next}: ${label.textContent}`,
            direction === 'asc' ? 'fa-arrow-up' : direction === 'desc' ? 'fa-arrow-down' : 'fa-arrow-down-arrow-up'
          )
        );
      }
      if (column.filters) {
        const filters = this.data.columnFilters.get(column.key) || [];
        const active = filters.some(activeFilter);
        th.dataset.filters = JSON.stringify(filters);
        if (active) th.setAttribute('data-filtered', '');
        const button = this.headerButton(
          index,
          'filter',
          `Filter ${label.textContent}${active ? ' (active)' : ''}`,
          'fa-filter'
        );
        button.setAttribute('aria-haspopup', 'dialog');
        if (active) button.classList.add('active');
        th.append(button);
      }
      headingRow.append(th);
    });
    const body = document.createElement('tbody');
    const records = this.data.page(page, size);
    this.visibleIds = records.map((record) => this.data.id(record));
    records.forEach((record, index) => {
      const row = body.insertRow();
      row.className = 'show';
      row.dataset.rowId = String(this.visibleIds[index]);
      if (selectable) {
        const cell = row.insertCell();
        cell.className = 'selectrow';
        const input = this.checkbox(cell, `${this.checkboxPrefix}-${index}`, 'Select row');
        input.dataset.recordIndex = String(index);
      }
      this.columns.forEach((column) => {
        const cell = row.insertCell();
        cell.dataset.label = column.label ?? column.key;
        const output = column.render ? column.render(record) : record[column.key];
        if (output instanceof Node) cell.append(output);
        else if (!column.render && column.format === 'price' && comparableValue(output, 'price') !== null) {
          cell.textContent = priceFormatter.format(Number(comparableValue(output, 'price')));
        } else if (!column.render && column.format === 'date' && comparableValue(output, 'date') !== null) {
          cell.textContent = dateFormatter.format(Number(comparableValue(output, 'date')));
        } else cell.textContent = output == null ? '' : String(output);
      });
    });
    if (!records.length) {
      const row = body.insertRow();
      row.className = 'show';
      const cell = row.insertCell();
      cell.colSpan = Math.max(1, this.columns.length + Number(selectable));
      cell.textContent = this.host.getAttribute('data-empty-msg') || 'No results found';
    }
    // Preserve caption/footer, while committing just the new header and current page.
    this.table.tHead?.remove();
    Array.from(this.table.tBodies).forEach((tbody) => tbody.remove());
    this.table.append(head, body);
    this.syncing = true;
    try {
      this.host.setAttribute('data-total', String(this.data.matching.length));
      this.host.setAttribute('data-page', String(page));
      this.host.setAttribute('data-show', String(size));
      this.pagination?.setAttribute('data-minimal', 'true');
      this.pagination?.setAttribute('data-total', String(this.data.matching.length));
      this.pagination?.setAttribute('data-show', String(size));
      this.pagination?.setAttribute('data-increment', String(size));
      this.pagination?.setAttribute('data-page', String(page));
    } finally {
      this.syncing = false;
    }
    this.syncSelection();
  }

  private headerButton(index: number, type: 'sort' | 'filter', label: string, icon: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-action m-0';
    button.dataset.columnIndex = String(index);
    button.setAttribute(`data-${type}-btn`, '');
    button.title = label;
    button.setAttribute('aria-label', label);
    const glyph = document.createElement('i');
    glyph.className = `fa-solid ${icon} m-0`;
    glyph.setAttribute('aria-hidden', 'true');
    button.append(glyph);
    return button;
  }

  // Build filter controls on demand and apply them to the full dataset.
  private openFilter(column: DataColumn, index: number): void {
    this.filterDialog?.remove();
    const dialog = document.createElement('dialog');
    this.filterDialog = dialog;
    dialog.setAttribute('aria-label', `Filter ${column.label ?? column.key}`);
    const title = document.createElement('h2');
    title.className = 'h4';
    title.textContent = `Filter ${column.label ?? column.key}`;
    dialog.append(title);
    const form = document.createElement('form');
    const definitions = this.data.columnFilters.get(column.key) || [{ type: 'text' }];
    const controls: Array<{
      filter: DataFilter;
      operator: HTMLSelectElement;
      first: HTMLInputElement | HTMLSelectElement;
      second: HTMLInputElement;
    }> = [];
    definitions.forEach((filter) => {
      const fieldset = document.createElement('fieldset');
      const type = filter.type || 'text';
      const operator = document.createElement('select');
      filterOperators(type).forEach((value) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value.charAt(0).toUpperCase() + value.slice(1);
        operator.append(option);
      });
      operator.value = (filter.operator || filterOperators(type)[0]).toLowerCase();
      const addLabel = (text: string, input: HTMLElement): HTMLLabelElement => {
        const label = document.createElement('label');
        label.append(document.createTextNode(text), input);
        fieldset.append(label);
        return label;
      };
      addLabel('Operator', operator);
      const first = document.createElement(type === 'select' ? 'select' : 'input');
      if (first instanceof HTMLSelectElement) {
        const options = filter.options || [
          ...new Set(this.data.records.map((record) => String(record[column.key] ?? ''))),
        ];
        ['', ...options.filter((value) => String(value) !== '')].forEach((value) => {
          const option = document.createElement('option');
          option.value = String(value);
          option.textContent = value === '' ? 'Any value' : String(value);
          first.append(option);
        });
      } else {
        first.type = type === 'date' ? 'date' : type === 'number' || type === 'price' ? 'number' : 'text';
        first.step = 'any';
      }
      const second = document.createElement('input');
      second.type = type === 'date' ? 'date' : type === 'number' || type === 'price' ? 'number' : 'text';
      second.step = 'any';
      const inputValue = (value: unknown): string => {
        if (value == null || value === '') return '';
        if (type === 'date') {
          const date = comparableValue(value, type);
          return date === null ? '' : new Date(Number(date)).toISOString().slice(0, 10);
        }
        if (type === 'number' || type === 'price') return String(comparableValue(value, type) ?? '');
        return String(value);
      };
      const values =
        operator.value === 'between'
          ? Array.isArray(filter.value)
            ? filter.value
            : String(filter.value ?? '').split(',')
          : [filter.value];
      first.value = inputValue(values[0]);
      second.value = inputValue(values[1]);
      addLabel('Value', first);
      const secondLabel = addLabel('To', second);
      const updateRange = (): void => {
        secondLabel.hidden = operator.value !== 'between';
        second.required = operator.value === 'between' && first.value !== '';
        second.setCustomValidity('');
      };
      operator.addEventListener('change', updateRange);
      first.addEventListener('input', updateRange);
      second.addEventListener('input', () => second.setCustomValidity(''));
      updateRange();
      controls.push({ filter, operator, first, second });
      form.append(fieldset);
    });
    const close = (): void => {
      dialog.close();
      dialog.remove();
      this.filterDialog = null;
      this.table.querySelector<HTMLButtonElement>(`button[data-filter-btn][data-column-index="${index}"]`)?.focus();
    };
    const apply = (filters: DataFilter[]): void => {
      this.data.setColumnFilters(column.key, filters);
      this.host.setAttribute('data-page', '1');
      this.render();
      close();
      this.emit('filters-updated', { column: column.key, filters, rowCount: this.data.matching.length });
    };
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      for (const control of controls) {
        if (control.operator.value === 'between' && control.first.value !== '') {
          const from = comparableValue(control.first.value, control.filter.type);
          const to = comparableValue(control.second.value, control.filter.type);
          if (from === null || to === null || from > to) {
            control.second.setCustomValidity('Enter an end value greater than or equal to the start value.');
            control.second.reportValidity();
            return;
          }
        }
      }
      apply(
        controls.map(({ filter, operator, first, second }) => ({
          ...filter,
          operator: operator.value,
          value: first.value === '' ? null : operator.value === 'between' ? [first.value, second.value] : first.value,
        }))
      );
    });
    const buttons = document.createElement('div');
    buttons.className = 'btn-group';
    ['Update', 'Reset', 'Cancel'].forEach((text) => {
      const button = document.createElement('button');
      button.type = text === 'Update' ? 'submit' : 'button';
      button.className = 'btn btn-action';
      button.textContent = text;
      if (text === 'Reset')
        button.addEventListener('click', () => apply(definitions.map((filter) => ({ ...filter, value: null }))));
      if (text === 'Cancel') button.addEventListener('click', close);
      buttons.append(button);
    });
    form.append(buttons);
    dialog.append(form);
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      close();
    });
    this.host.append(dialog);
    dialog.showModal();
  }

  private checkbox(cell: HTMLElement, id: string, text: string): HTMLInputElement {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    const label = document.createElement('label');
    label.htmlFor = id;
    const span = document.createElement('span');
    span.className = 'visually-hidden';
    span.textContent = text;
    label.append(span);
    cell.append(input, label);
    return input;
  }
}
