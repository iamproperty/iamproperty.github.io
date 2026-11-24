import { cleanFilterValues, fixTableCells } from './table';
import { readHeaderColumns, filterOperators } from './table-data-columns';
import type { DataColumn, TableRecord } from './table-data';
import { readMapTableData } from './map-data';

type DataTable = HTMLElement & {
  setData(records: TableRecord[], options: { rowKey: string; columns: DataColumn[] }): void;
  getMatchingRecords(): TableRecord[];
  getSelectedRecords(): TableRecord[];
};

type InsightsOwner = HTMLElement & {
  rowlimit: number;
  createActionButtons(component: HTMLElement, actions: unknown[]): void;
  createCustomisationButton(component: HTMLElement, customisation: unknown): void;
  createCTAs(component: HTMLElement, url: string, text: string, table?: HTMLTableElement): void;
};

// Keep the map opt-out independent of the renderer so HTML fallback honours it too.
export const insightsMapDisabled = (owner: HTMLElement): boolean =>
  owner.hasAttribute('data-disable-map') ||
  (window as Window & { __iamInsightsMapDisabled?: boolean }).__iamInsightsMapDisabled === true;

export interface InsightsRecord extends TableRecord {
  // Snapshot-local identity never leaves the renderer. Source row order is not a business ID.
  id: number;
  source: HTMLTableRowElement;
  cells: HTMLTableCellElement[];
  exportText?: string[];
}

export interface InsightsSnapshot {
  table: HTMLTableElement;
  records: InsightsRecord[];
  columns: DataColumn[];
  headings: HTMLTableCellElement[];
}

// Only inline text whose rendering is independent of layout can be exported
// without mounting source rows. Keep complex/visibility-dependent cells on the
// HTML renderer, whose native innerText preserves their established behaviour.
const inlineTextTags = new Set([
  'A',
  'ABBR',
  'B',
  'BDI',
  'BDO',
  'CITE',
  'CODE',
  'DEL',
  'EM',
  'I',
  'INS',
  'KBD',
  'MARK',
  'S',
  'SAMP',
  'SMALL',
  'SPAN',
  'STRONG',
  'SUB',
  'SUP',
  'TIME',
  'U',
  'VAR',
]);
const lookerTextClasses = new Set([
  'drillable-item',
  'drillable-item-content',
  'drillable-item-icon-wrapper',
  'drill-menu-bauble',
  'null',
]);
export const insightCellExportText = (cell: HTMLTableCellElement): string | null => {
  if (cell.hasAttribute('style') || cell.hasAttribute('hidden')) return null;
  const elements = Array.from(cell.querySelectorAll<HTMLElement>('*'));
  if (
    elements.some(
      (element) =>
        !inlineTextTags.has(element.tagName) ||
        element.hasAttribute('hidden') ||
        element.hasAttribute('style') ||
        (element.getAttribute('class') || '').split(/\s+/).some((name) => name && !lookerTextClasses.has(name))
    )
  )
    return null;
  // CSS text transformations on the cell itself also require the native path.
  if (
    (cell.getAttribute('class') || '')
      .split(/\s+/)
      .some((name) => name && !['td--fixed', 'text-nowrap', 'text-truncate'].includes(name))
  )
    return null;
  return (cell.textContent || '').replace(/[ \t\r\n\f]+/g, ' ').trim();
};

// Parse in an inert document: custom elements in 5,000 source rows must not mount.
// The source supplied by Looker is never modified.
export const readInsightsSnapshot = (markup: string): InsightsSnapshot => {
  const parsed = new DOMParser().parseFromString(markup, 'text/html');
  const base = parsed.createElement('base');
  base.href = document.baseURI;
  parsed.head.prepend(base);
  const table = parsed.querySelector('table');
  if (!table || table.tHead?.rows.length !== 1 || table.querySelector('tbody table, [rowspan], [colspan], tfoot')) {
    throw new Error('Insights data mode requires a single header and rectangular body.');
  }
  table.querySelectorAll('script').forEach((script) => script.remove());
  const headings = Array.from(table.tHead.rows[0].cells);
  if (!headings.length) throw new Error('Insights data mode requires column headings.');
  const rows = Array.from(table.tBodies).flatMap((body) => Array.from(body.rows));
  if (
    rows.some((row) => row.cells.length !== headings.length || row.querySelector('input, select, textarea, button'))
  ) {
    throw new Error('Insights data mode cannot adapt interactive or uneven source rows.');
  }
  headings.forEach((heading, index) => {
    heading.dataset.key = `column-${index}`;
    if (['date', 'date_date'].includes(heading.dataset.fieldType || '')) heading.dataset.format = 'date';
    if (heading.dataset.fieldType === 'number') heading.dataset.format = 'number';
    if (heading.dataset.valueFormatName === 'gbp_0') heading.dataset.format = 'price';
  });
  const columns = readHeaderColumns(table);
  columns.forEach((column) => {
    if (!Array.isArray(column.filters)) return;
    column.filters = cleanFilterValues(column.filters);
    column.filters.forEach((filter) => {
      if (filter.type && !['text', 'date', 'price', 'number', 'select'].includes(filter.type)) {
        throw new Error('Unsupported Insights filter type.');
      }
      if (filter.operator && !filterOperators(filter.type).includes(filter.operator.toLowerCase())) {
        throw new Error('Unsupported Insights filter operator.');
      }
    });
  });
  // Preserve the same formatting and status metadata as the existing HTML renderer.
  fixTableCells(table);
  const records = rows.map((source, id): InsightsRecord => {
    const cells = Array.from(source.cells);
    const record: InsightsRecord = { id, source, cells, exportText: [] };
    cells.forEach((cell, index) => {
      if (cell.dataset.originalValue === '∅' || cell.textContent?.trim() === '∅') cell.textContent = '';
      const text = insightCellExportText(cell);
      if (text === null) throw new Error('Insights rich-cell export requires the HTML renderer.');
      record.exportText!.push(text);
      record[columns[index].key] =
        cell.dataset.originalValue === '∅' ? null : (cell.dataset.originalValue ?? cell.textContent?.trim() ?? '');
    });
    return record;
  });
  columns.forEach((column, index) => {
    column.render = (record): Node => {
      const fragment = document.createDocumentFragment();
      (record as InsightsRecord).cells[index].childNodes.forEach((node) => {
        fragment.append(document.importNode(node, true));
      });
      return fragment;
    };
  });
  return { table, records, columns, headings };
};

// Keep the established action contract; never export renderer IDs or DOM references.
export const insightActionProperties = (records: InsightsRecord[]): object[] =>
  records.map(({ source, cells, exportText }) => {
    const columns: Record<string, string> = {};
    cells.forEach((cell, index) => {
      const label = cell.dataset.label;
      if (label) columns[label] = exportText?.[index] ?? cell.textContent?.trim() ?? '';
    });
    return { ...source.dataset, columns };
  });

export class InsightsDataController {
  readonly host: DataTable;
  private configuration = '';
  private properties: Record<string, string> = {};
  private abort = new AbortController();
  private fixedObserver: ResizeObserver;

  constructor(
    private owner: InsightsOwner,
    readonly snapshot: InsightsSnapshot
  ) {
    const root = owner.shadowRoot!;
    const host = document.createElement('iam-table-data') as DataTable;
    this.host = host;
    host.setAttribute('data-selectall', '');
    host.setAttribute('data-selection-matching', '');
    host.innerHTML =
      '<iam-actionbar slot="before" data-selectall data-disable-responsive></iam-actionbar><iam-pagination slot="pagination" data-page-jump="true" data-per-page="true" data-item-count="true"></iam-pagination>';
    const table = document.importNode(snapshot.table.cloneNode(false), false) as HTMLTableElement;
    table.id = 'properties-table';
    host.append(table);
    host.setData(snapshot.records, { rowKey: 'id', columns: snapshot.columns });
    const options = { signal: this.abort.signal };
    host.addEventListener('table-rendered', () => this.decorate(), options);
    host.addEventListener('selection-change', () => this.selectionChanged(), options);
    host.addEventListener(
      'filters-updated',
      ((event: CustomEvent) => {
        this.refreshMap();
        this.selectionChanged();
        owner.dispatchEvent(
          new CustomEvent('table-filtered', {
            detail: {
              ...event.detail,
              // Preserve the flat filter contract consumed by the Hub.
              filters: Array.from(host.querySelectorAll<HTMLElement>('th[data-filters]')).flatMap((heading) =>
                JSON.parse(heading.dataset.filters || '[]')
                  .filter((filter) => filter.value !== null && filter.value !== undefined && filter.value !== '')
                  .map((filter) => ({
                    column: heading.dataset.label,
                    ...filter,
                    value: Array.isArray(filter.value) ? filter.value.join(',') : filter.value,
                  }))
              ),
              reload: snapshot.records.length >= owner.rowlimit,
            },
          })
        );
      }) as EventListener,
      options
    );
    host.querySelector('iam-actionbar')!.addEventListener(
      'click',
      (event) => {
        const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button[data-action]');
        if (!button || button.disabled) return;
        const properties = insightActionProperties(this.selected());
        //button.disabled = true;
        owner.dispatchEvent(
          new CustomEvent('insight-action', {
            detail: { action: button.dataset.action, properties },
            bubbles: true,
            composed: true,
          })
        );
      },
      options
    );
    root.querySelector('#table-wrapper')!.replaceChildren(host);
    this.fixedObserver = new ResizeObserver(() => this.fixedOffsets());
    this.fixedObserver.observe(table);
    const controls = root.querySelector('#view-controls')!;
    const hasMap =
      !insightsMapDisabled(owner) &&
      snapshot.records.some(
        ({ source }) => source.hasAttribute('data-latitude') && source.hasAttribute('data-longitude')
      );
    controls.classList.toggle('d-none', !hasMap);
    if (!hasMap) owner.setAttribute('data-view', 'list');
    if (hasMap && !owner.hasAttribute('data-view')) {
      owner.setAttribute('data-view', 'split');
      const input = controls.querySelector<HTMLInputElement>('[value="split"]');
      if (input) input.checked = true;
    }
    controls.addEventListener(
      'change',
      (event) => {
        const input = event.target as HTMLInputElement;
        if (input.name === 'view') {
          owner.setAttribute('data-view', input.value);
          this.height();
        }
      },
      options
    );
    ['table-customisation-saved', 'table-customisation-reset'].forEach((name) => {
      owner.addEventListener(
        name,
        () =>
          queueMicrotask(() => {
            if (this.host.isConnected) this.refreshMap();
          }),
        options
      );
    });
    this.refreshMap();
  }

  disconnect(): void {
    this.abort.abort();
    this.fixedObserver.disconnect();
    // The legacy fallback controls its empty state with CSS, not this inline override.
    this.owner.shadowRoot?.querySelector<HTMLElement>('.empty-state')?.style.removeProperty('display');
  }

  private selected(): InsightsRecord[] {
    const matching = new Set(this.host.getMatchingRecords());
    return this.host.getSelectedRecords().filter((record) => matching.has(record)) as InsightsRecord[];
  }

  private selectionChanged(): void {
    const branch = this.properties['branch-column'];
    const branches = new Set(
      this.selected()
        .map(({ source, cells }) => {
          if (!branch) return null;
          return (
            source.getAttribute(`data-${branch}`) ??
            cells.find((cell) => cell.dataset.label === branch)?.textContent?.trim() ??
            null
          );
        })
        .filter((value) => value !== null)
    );
    const multiple = branches.size > 1;
    this.owner.shadowRoot!.querySelector('#branch-notification')?.classList.toggle('d-none', !multiple);
    const button = this.host.querySelector<HTMLButtonElement>('[data-action="create-print-campaign"]');
    if (button) button.disabled = multiple;
    this.height();
  }

  configure(detail: { properties?: Record<string, string>; actions?: unknown[]; customisation?: unknown }): void {
    const key = JSON.stringify(detail);
    if (key === this.configuration) return;
    this.configuration = key;
    this.properties = detail.properties || {};
    if (this.properties.class) this.owner.classList.add(this.properties.class);
    this.owner.createActionButtons(this.owner, detail.actions || []);
    const title = this.properties['title-column'];
    this.snapshot.records.forEach(({ source, cells }) => {
      cells.forEach((cell) => {
        if (cell.dataset.label === title) {
          cell.setAttribute('data-popup-title', 'true');
          source.dataset.actionTitle = cell.querySelector('.td__content')?.textContent || cell.textContent || '';
        }
      });
    });
    this.owner.createCTAs(
      this.owner,
      this.properties['cta-url-structure'],
      this.properties['cta-text'],
      this.snapshot.table
    );
    // Refresh only the mounted page after metadata changes.
    this.host.setData(this.snapshot.records, { rowKey: 'id', columns: this.snapshot.columns });
    this.owner.createCustomisationButton(this.owner, detail.customisation);
    this.selectionChanged();
    this.refreshMap();
  }

  private decorate(): void {
    const rows = this.host.querySelectorAll<HTMLTableRowElement>('tbody tr[data-row-id]');
    rows.forEach((row) => {
      const record = this.snapshot.records[Number(row.dataset.rowId)];
      Array.from(record.source.attributes).forEach(({ name, value }) => {
        if (!['class', 'data-row-id'].includes(name)) row.setAttribute(name, value);
      });
      record.source.classList.forEach((name) => {
        if (!['filtered', 'd-none'].includes(name)) row.classList.add(name);
      });
      record.cells.forEach((source, index) => {
        const cell = row.cells[index + 1];
        Array.from(source.attributes).forEach(({ name, value }) => cell.setAttribute(name, value));
        if (source.dataset.label === 'Property') cell.classList.add('td--fixed');
        else cell.title = source.dataset.label || '';
      });
    });
    this.snapshot.headings.forEach((source, index) => {
      const heading = this.host.querySelector('thead tr')!.children[index + 1];
      Array.from(source.attributes).forEach(({ name, value }) => {
        // Filtering/sorting state belongs to the live model.
        if (!['data-filters', 'data-filtered', 'aria-sort', 'data-order-by'].includes(name))
          heading.setAttribute(name, value);
      });
      heading.setAttribute('data-label', this.snapshot.columns[index].label || '');
      if (this.snapshot.columns[index].label === 'Property') heading.classList.add('th--fixed');
    });
    this.host.querySelector('thead .selectrow')?.classList.add('th--fixed');
    this.host.querySelectorAll('tbody .selectrow').forEach((cell) => cell.classList.add('td--fixed'));
    this.owner.createCTAs(this.owner, this.properties['cta-url-structure'], this.properties['cta-text']);
    const count = this.host.getMatchingRecords().length;
    const root = this.owner.shadowRoot!;
    root.querySelector('#count')!.textContent = `Showing ${count}`;
    const countText = root.querySelector('#count-text')!;
    countText.textContent =
      count === 1 ? 'property' : count < this.owner.rowlimit ? 'properties' : 'of properties available';
    if (count >= this.owner.rowlimit) {
      const tooltip = document.createElement('iam-tooltip');
      tooltip.title = 'Some properties may not be in your initial view and we recommend filtering to reveal them.';
      tooltip.innerHTML = '<i class="fa-solid fa-circle-info" slot="icon"></i>';
      countText.append(' ', tooltip);
    }
    // Data view's empty placeholder keeps the filter headings mounted.
    root.querySelector<HTMLElement>('.empty-state')!.style.display = count ? 'none' : 'block';
    if (!count) this.host.querySelector('tbody tr')?.setAttribute('hidden', '');
    queueMicrotask(() => {
      if (this.host.isConnected) this.fixedOffsets();
    });
    this.height();
  }

  private fixedOffsets(): void {
    // Measure once per header, then apply offsets without per-row layout reads.
    const headings = Array.from(this.host.querySelectorAll<HTMLElement>('thead th'));
    let left = 0;
    const offsets = headings.map((heading) => {
      const value = left;
      if (heading.classList.contains('th--fixed')) left += heading.offsetWidth;
      return `${value}px`;
    });
    this.host.querySelectorAll<HTMLTableRowElement>('tr').forEach((row) => {
      Array.from(row.cells).forEach((cell, index) => cell.style.setProperty('--left-offset', offsets[index] || '0px'));
    });
  }

  private refreshMap(): void {
    const wrapper = this.owner.shadowRoot!.querySelector('#map-wrapper')!;
    if (insightsMapDisabled(this.owner)) {
      wrapper.replaceChildren();
      return;
    }
    const matching = new Set(this.host.getMatchingRecords());
    const hidden = new Set(
      Array.from(this.host.querySelectorAll<HTMLElement>('thead th.d-none')).map((heading) => heading.dataset.label)
    );
    this.snapshot.records.forEach((record) => {
      record.source.classList.toggle('filtered', !matching.has(record));
      record.cells.forEach((cell) => cell.classList.toggle('d-none', hidden.has(cell.dataset.label)));
    });
    const data = readMapTableData(this.snapshot.table);
    if (!data.pinCount) {
      wrapper.replaceChildren();
      return;
    }
    const map = document.createElement('iam-map') as HTMLElement & {
      setData(value: ReturnType<typeof readMapTableData>): void;
    };
    map.setAttribute('data-for', 'properties-table');
    map.setData(data);
    wrapper.replaceChildren(map);
  }

  ready(): void {
    const branches = [
      ...new Set(
        this.snapshot.records
          .filter(({ source }) => source.hasAttribute('data-branch'))
          .map(({ source }) => source.dataset.branch || '')
      ),
    ];
    this.owner.dispatchEvent(
      new CustomEvent('component-loaded', { detail: { height: this.owner.offsetHeight, branches } })
    );
    this.height();
  }

  private height(): void {
    this.owner.dispatchEvent(new CustomEvent('update-height', { detail: { height: this.owner.offsetHeight } }));
  }
}
