import { tableHTML, setupBasicTable, findForm, } from '../../modules/table';

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
    ${tableHTML}
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('tableBasicExtras') && !document.getElementById('tableExtras') && !document.getElementById('tableAdvancedExtras')) {
      document.head.insertAdjacentHTML('beforeend', `<style id="tableBasicExtras">${loadExtraCSS}</style>`);
    }
  }

  connectedCallback(): void {
    const pagination = this.shadowRoot.querySelector('iam-pagination');
    const table = this.querySelector('table');
    const form = findForm(this, table);

    setupBasicTable(this, table, pagination, form);
  }
}

export default iamTableBasic;
