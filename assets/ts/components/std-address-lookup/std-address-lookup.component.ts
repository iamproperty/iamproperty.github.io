import iamAddressLookup from '../../../js/components/address-lookup/address-lookup.component.min.js';

// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'STD Address Lookup',
});

class iamSTDAddressLookup extends HTMLElement {
  constructor() {
    super();
    /*
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
    <iam-address-lookup>
      <slot></slot>
    </iam-address-lookup>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    */
  }

  connectedCallback(): void {

    if (!window.customElements.get(`iam-address-lookup`)) window.customElements.define(`iam-address-lookup`, iamAddressLookup);

    this.innerHTML = `<iam-address-lookup>
    <label>Address line 1 <input name="address" type="text" data-required /></label>
    <label>Address line 2 <input name="address" type="text" data-required /></label>
    <label>Address line 3 <input name="address" type="text" data-required /></label>
    </iam-address-lookup>
    `
  }
}

export default iamSTDAddressLookup;
