
class iamDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/dashboard.component.css";`;
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="wrapper">
    <slot></slot>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    console.log('hello');
  }

  static get observedAttributes(): Array<string> {
    return ['data-selected'];
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {
    switch (attrName) {
      case 'data-selected': {



        break;
      }
    }
  }
}

export default iamDashboard;
