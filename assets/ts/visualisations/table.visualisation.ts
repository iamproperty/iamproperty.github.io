class iamVisTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/visualisation/table.visualisation.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/visualisation/table.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */`
    <style>
    ${loadCSS}
    </style>
    <slot></slot>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('VisTableGlobal'))
      document.head.insertAdjacentHTML('beforeend', `<style id="VisTableGlobal">${loadExtraCSS}</style>`);
  }

  connectedCallback(): void {
    console.log('hello');
  }
}

if (!window.customElements.get(`iam-vis-table`))
  window.customElements.define(`iam-vis-table`, iamVisTable);
