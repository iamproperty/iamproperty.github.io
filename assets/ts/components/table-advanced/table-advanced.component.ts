import { TableData, type TableRecord, type RowKey, type DataColumn } from '../../modules/table-data';
import { readHeaderColumns } from '../../modules/table-data-columns';
import { TableDataView } from '../../modules/table-data-view';
import {
  tableHTML,
  findForm,
  findActionbar,
  setupBasicTable,
  setupExpandedTable,
  setupAdvancedTable,
} from '../../modules/table';

class iamTableAdvanced extends HTMLElement {
  // Store records and selection independently of rendered rows.
  private dataModel = new TableData();
  // Manage the mounted rows and their event listeners.
  private dataView: TableDataView | null = null;
  // Read the original header configuration once.
  private headerColumns: DataColumn[] | null = null;

  private configureDataColumns(columns: DataColumn[]): void {
    const configuredColumns = columns.length
      ? columns.map((column, index) => ({ ...this.headerColumns?.[index], ...column }))
      : this.headerColumns || [];
    this.dataModel.configureColumns(configuredColumns);
  }

  // Replace records, retain valid selections and render the current page.
  setData(records: TableRecord[], options: { rowKey?: RowKey; columns?: DataColumn[] } = {}): void {
    if (!this.hasAttribute('data-backed')) throw new Error('Set data-backed before mounting this table.');
    this.dataModel.replace(records, options.rowKey);
    if (options.columns) this.configureDataColumns(options.columns);
    if (this.dataView) {
      this.dataView.render();
      this.dataView.selectionChanged();
    }
  }

  // Return selected original records across all pages.
  getSelectedRecords(): TableRecord[] {
    return this.dataModel.selectedRecords();
  }

  // Return a copy of the selected IDs.
  getSelectedIds(): Array<string | number> {
    return [...this.dataModel.selected];
  }

  // Select all matching records without clearing existing selections.
  selectAll(): void {
    if (this.dataView) this.dataView.selectAll();
    else this.dataModel.selectAll();
  }

  // Clear selection across all pages and filters.
  clearSelection(): void {
    if (this.dataView) this.dataView.clearSelection();
    else this.dataModel.clear();
  }

  // Apply an application filter alongside header filters; null clears it.
  setFilter(predicate: ((record: TableRecord) => boolean) | null): void {
    this.dataModel.filter(predicate);
    this.setAttribute('data-page', '1');
    this.dataView?.render();
  }

  // Apply a comparator; null restores the original order.
  setSort(comparator: ((a: TableRecord, b: TableRecord) => number) | null): void {
    this.dataModel.sort(comparator);
    this.setAttribute('data-page', '1');
    this.dataView?.render();
  }

  // Remove listeners while retaining data for reconnection.
  disconnectedCallback(): void {
    this.dataView?.disconnect();
    this.dataView = null;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/table-advanced.component.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/components/table-advanced.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */ `
      <style>
        ${loadCSS}

        ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
      </style>
      ${tableHTML}
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('tableAdvancedExtras')) {
      document.querySelectorAll('#tableBasicExtras, #tableExtras').forEach((el) => el.remove());
      document.head.insertAdjacentHTML('beforeend', `<style id="tableAdvancedExtras">${loadExtraCSS}</style>`);
    }
  }

  connectedCallback(): void {
    // Data-backed mode renders one page; existing HTML tables use the setup below.
    if (this.hasAttribute('data-backed')) {
      if (this.headerColumns === null) {
        this.headerColumns = readHeaderColumns(this.querySelector('table'));
        this.configureDataColumns(this.dataModel.columns);
      }
      this.dataView?.disconnect();
      this.dataView = new TableDataView(this, this.dataModel);
      this.dataView.render();
      return;
    }

    const pagination = this.querySelector('iam-pagination') || this.shadowRoot.querySelector('iam-pagination');
    const table = this.querySelector('table');
    const form = findForm(this, table);
    const actionbar = findActionbar(this, form);
    const savedTableBody = table.querySelector('tbody').cloneNode(true); // Used for the sort functionality to reset the table to its original state

    actionbar?.setAttribute('slot', 'before');
    setupBasicTable(this, table, pagination, form);
    setupExpandedTable(this, table, actionbar, form);
    setupAdvancedTable(
      this,
      table,
      actionbar,
      pagination,
      form,
      savedTableBody
    ); /* pagination and sorting is handled by the basic and expanded table setup functions */
  }
}

export default iamTableAdvanced;
