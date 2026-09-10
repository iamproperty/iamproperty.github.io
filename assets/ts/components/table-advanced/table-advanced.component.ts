import {
  setupBasicTable,
  paginateRows,
  findForm,
  paginateTable,
  setupExpandedTable,
  setupAdvancedTable,
} from '../../modules/table';

class iamTableAdvanced extends HTMLElement {
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
      <slot name="before"></slot><!-- For the actionbar -->
      <div class="table--cta">
        <div class="table__wrapper">
          <slot></slot>
        </div>
      </div>
      <iam-pagination part="pagination" class="pagination--table"></iam-pagination>
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

    setupBasicTable(this, table, form, pagination);

    paginateTable(this, table, form, pagination, () => {
      paginateRows(this);
    });
  }
}

export default iamTableAdvanced;
