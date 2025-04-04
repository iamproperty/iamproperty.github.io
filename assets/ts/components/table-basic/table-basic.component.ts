import { setupBasicTable, paginateRows, findForm, paginateTable } from '../../modules/table';

class iamTableBasic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/table.component.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/components/table-basic.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}

    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="table__container" part="container">
      <slot name="before"></slot>
      <div class="table--cta">
        <div class="table__wrapper" part="wrapper">
          <slot></slot>
        </div>
      </div>
      <iam-pagination part="pagination" class="pagination--table" ${this.hasAttribute('data-page') ? `data-page="${this.getAttribute('data-page')}"` : ''} ></iam-pagination>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (
      !document.getElementById('tableBasicExtras') &&
      !document.getElementById('tableSingleExtras') &&
      !document.getElementById('tableExtras')
    ) {
      document.head.insertAdjacentHTML('beforeend', `<style id="tableBasicExtras">${loadExtraCSS}</style>`);
    }
  }

  connectedCallback(): void {
    const pagination = this.shadowRoot.querySelector('iam-pagination');
    const table = this.querySelector('table');
    const form = findForm(this, table);

    setupBasicTable(this, table, form, pagination);

    paginateTable(this, table, form, pagination, () => {
      paginateRows(component);
    });
  }
}

export default iamTableBasic;
