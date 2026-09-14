import {
  tableHTML,
  findForm,
  setupBasicTable,
  setupExpandedTable,
  findActionbar,
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
    ${tableHTML}
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('tableExtras') && !document.getElementById('tableAdvancedExtras')) {
      document.querySelectorAll('#tableBasicExtras').forEach((el) => el.remove());
      document.head.insertAdjacentHTML('beforeend', `<style id="tableExtras">${loadExtraCSS}</style>`);
    }
  }

  connectedCallback(): void {

    const pagination = this.shadowRoot.querySelector('iam-pagination');
    const table = this.querySelector('table');
    const form = findForm(this, table);
    const actionbar = findActionbar(this, form);

    actionbar?.setAttribute('slot', 'before');
    setupBasicTable(this, table, pagination, form);
    setupExpandedTable(this, table, form, actionbar);

    // For when the table contents is updated with an ajax call
    this.addEventListener('update-table', (event) => {
      setupBasicTable(this, table, pagination, form);
      setupExpandedTable(this, table, form, actionbar);
    });
  }
}

export default iamTableBasic;
