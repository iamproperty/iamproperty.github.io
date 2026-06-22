import {
  setupBasicTable,
  findForm,
  setupAdvancedTable,
  setupNoSubmitTable,
  setupDraggableTable,
  paginateRows,
  paginateTable,
  updateAttributes
} from '../../modules/table';
import iamMenu from '../menu/menu.component';

class iamTableDraggable extends HTMLElement {
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
      <iam-pagination part="pagination" class="pagination--table" ${this.hasAttribute('data-page') ? `data-page="${this.getAttribute('data-page')}"` : ''} ></iam-pagination>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    const extraStylesId = 'tableDraggableExtras';
    const existingExtraStyles = document.getElementById(extraStylesId);

    if (existingExtraStyles) {
      existingExtraStyles.textContent = loadExtraCSS;
    } else {
      document.head.insertAdjacentHTML('beforeend', `<style id="${extraStylesId}">${loadExtraCSS}</style>`);
    }
  }

  connectedCallback(): void {
    const pagination = this.shadowRoot.querySelector('iam-pagination');
    const table = this.querySelector('table');

    let savedTableBody = table.querySelector('tbody').cloneNode(true);

    const form = findForm(this, table);

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    if (!window.customElements.get(`iam-menu`)) window.customElements.define(`iam-menu`, iamMenu);

    setupBasicTable(this, table, form, pagination);
    setupAdvancedTable(this, table);
    setupNoSubmitTable(this, table, form, pagination, savedTableBody);
    setupDraggableTable(this, table, savedTableBody);


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
      savedTableBody = table.querySelector('tbody').cloneNode(true);

      setupBasicTable(this, table, form, pagination);
      setupAdvancedTable(this, table);
      setupNoSubmitTable(this, table, form, pagination, savedTableBody);
      setupDraggableTable(this, table, savedTableBody);
    });

  }
  /*
  static get observedAttributes(): any {
    return ['data-total', 'data-page', 'data-show'];
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {
    const pagination = this.shadowRoot.querySelector('iam-pagination');

    switch (attrName) {
      case 'data-total': {
        if (oldVal != newVal) {
          pagination.setAttribute('data-total', newVal);
          paginateRows(this);
        }
        break;
      }
      case 'data-show': {
        if (oldVal != newVal) {
          pagination.setAttribute('data-show', newVal);
          paginateRows(this);
        }
        break;
      }
      case 'data-page': {
        if (oldVal != newVal) {
          pagination.setAttribute('data-page', newVal);
          paginateRows(this);
        }
        break;
      }
    }
  }
    */
}

export default iamTableDraggable;
