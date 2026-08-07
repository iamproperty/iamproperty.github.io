import {
  moveAttributesToComponents,
  findForm,
  setupBasicTable,
  setupExpandedTable,
  paginateRows,
  setupNoSubmitTable,
  setupAjaxTable,
  loadAjaxTable,
  paginateTable,
} from '../../modules/table';
import iamMenu from '../menu/menu.component';

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
    const params = new URLSearchParams(window.location.search);

    const pagination = this.shadowRoot.querySelector('iam-pagination');
    const table = this.querySelector('table');

    const form = findForm(this, table);

    const savedTableBody = table.querySelector('tbody').cloneNode(true);

    if (params.has('page')) this.setAttribute('data-page', params.get('page'));
    if (params.has('show')) this.setAttribute('data-show', params.get('show'));

    if (params.has('page')) pagination.setAttribute('data-page', params.get('page'));
    if (params.has('show')) pagination.setAttribute('data-show', params.get('show'));

    moveAttributesToComponents(this);

    setupBasicTable(this, table, form, pagination);
    setupExpandedTable(this, table, form, pagination, savedTableBody);

    if (this.hasAttribute('data-submit') && form) {

      form.setAttribute('method', 'get');

      if (actionbar) {
        actionbar.addEventListener('change', (event) => {
          form.submit();
        });
      }

      paginateTable(this, table, form, pagination, () => {
        form.submit();
      });
    }

    if (this.hasAttribute('data-ajax')) {
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


    pagination.addEventListener('update-show', (event) => {
      const show = event.detail.show;

      const updateEvent = new CustomEvent('update-show', { detail: { show: show } });
      this.dispatchEvent(updateEvent);

      updateAttributes(this, pagination);
    });

    pagination.addEventListener('update-page', (event) => {
      const page = event.detail.page;

      const updateEvent = new CustomEvent('update-page', { detail: { page: page } });
      this.dispatchEvent(updateEvent);

      updateAttributes(this, pagination);
    });

    // For when the table contents is updated with an ajax call
    this.addEventListener('update-table', (event) => {
      setupBasicTable(this, table, form, pagination);
      setupExpandedTable(this, table, form, pagination, savedTableBody);
    });
  }
}

export default iamTableBasic;
