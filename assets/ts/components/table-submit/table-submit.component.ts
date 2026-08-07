import { setupBasicTable, findForm, setupExpandedTable, setupSubmitTable, paginateTable } from '../../modules/table';
import iamMenu from '../menu/menu.component';

class iamTableSubmit extends HTMLElement {
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
    if (!document.getElementById('tableSingleExtras') && !document.getElementById('tableExtras')) {
      document.head.insertAdjacentHTML('beforeend', `<style id="tableSingleExtras">${loadExtraCSS}</style>`);
    }
  }

  connectedCallback(): void {
    const params = new URLSearchParams(window.location.search);

    const pagination = this.shadowRoot.querySelector('iam-pagination');
    const table = this.querySelector('table');
    const form = findForm(this, table);
    const actionbar = this.querySelector('iam-actionbar');

    if (params.has('page')) this.setAttribute('data-page', params.get('page'));
    if (params.has('show')) this.setAttribute('data-show', params.get('show'));

    if (params.has('page')) pagination.setAttribute('data-page', params.get('page'));
    if (params.has('show')) pagination.setAttribute('data-show', params.get('show'));

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    if (!window.customElements.get(`iam-menu`)) window.customElements.define(`iam-menu`, iamMenu);

    setupBasicTable(this, table, form, pagination);

    setupExpandedTable(this, table, form, pagination);

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
}

export default iamTableSubmit;
