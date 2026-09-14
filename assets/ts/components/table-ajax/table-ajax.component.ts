import {
  tableHTML,
  setupBasicTable,
  findForm,
  findActionbar,
  setupExpandedTable,
  setupAdvancedTable,
  setupAjaxTable,
} from '../../modules/table';

class iamTableAjax extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/table-ajax.component.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/components/table-ajax.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
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
    const params = new URLSearchParams(window.location.search);

    const pagination = this.shadowRoot.querySelector('iam-pagination');
    const table = this.querySelector('table');
    const form = findForm(this, table);
    const actionbar = findActionbar(this, form);

    const savedTableBody = table.querySelector('tbody').cloneNode(true); // Used for the sort functionality to reset the table to its original state

    if (params.has('page')) this.setAttribute('data-page', params.get('page'));
    if (params.has('show')) this.setAttribute('data-show', params.get('show'));

    if (params.has('page')) pagination.setAttribute('data-page', params.get('page'));
    if (params.has('show')) pagination.setAttribute('data-show', params.get('show'));

    actionbar?.setAttribute('slot', 'before');
    setupBasicTable(this, table, pagination, form);
    setupExpandedTable(this, table, form, actionbar);
    setupAdvancedTable(this, table, pagination, form, savedTableBody); /* pagination and sorting is handled by the basic and expanded table setup functions */

    setupAjaxTable(this, table, pagination, form);
  }
}


export default iamTableAjax;
