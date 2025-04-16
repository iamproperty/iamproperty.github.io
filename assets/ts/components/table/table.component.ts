import {
  moveAttributesToComponents,
  findForm,
  setupBasicTable,
  setupAdvancedTable,
  paginateRows,
  setupNoSubmitTable,
  setupSubmitTable,
  setupAjaxTable,
  loadAjaxTable,
  paginateTable,
} from '../../modules/table';

class iamTableBasic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/table.component.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/components/table.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}

    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="table__container">
      <slot name="before"></slot>
      <div class="table--cta">
        <div class="table__wrapper">
          <slot></slot>
        </div>
      </div>
      <iam-pagination part="pagination" class="pagination--table" ></iam-pagination>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('tableExtras')) {
      document.head.insertAdjacentHTML('beforeend', `<style id="tableExtras">${loadExtraCSS}</style>`);
    }
  }

  connectedCallback(): void {
    const pagination = this.shadowRoot.querySelector('iam-pagination');
    const table = this.querySelector('table');

    const form = findForm(this, table);

    const savedTableBody = table.querySelector('tbody').cloneNode(true);

    moveAttributesToComponents(this);

    setupBasicTable(this, table, form, pagination);
    setupAdvancedTable(this, table, form, pagination);

    if (this.hasAttribute('data-submit')) {
      setupSubmitTable(this, table, form, pagination);
      paginateTable(this, table, form, pagination, () => {
        form.submit();
      });
    } else if (this.hasAttribute('data-no-submit') || this.hasAttribute('data-nosubmit')) {
      setupNoSubmitTable(this, table, form, pagination, savedTableBody);
      paginateTable(this, table, form, pagination, () => {
        paginateRows(this);
      });
    } else if (this.hasAttribute('data-ajax')) {
      setupAjaxTable(this, table, form, pagination);
      paginateTable(this, table, form, pagination, () => {
        loadAjaxTable(this, table, form, pagination);
      });
    } else {
      paginateRows(this);
      paginateTable(this, table, form, pagination, () => {
        paginateRows(this);
      });
    }
  }
}

export default iamTableBasic;
