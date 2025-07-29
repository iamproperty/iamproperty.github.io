import advancedSelect from '../../modules/advanced-select';
import { safeID, resolvePath, isTraversable } from '../../modules/helpers';

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'Advanced select',
});

class iamAdvancedSelect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css')
      ? document.body.getAttribute('data-core-css')
      : `${assetLocation}/css/core.min.css`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    input {
      background: red;
    }
    input:not(.is-invalid):not(:invalid) {
      background: none!important;
    }
    .optional-text {
      display: none;
    } 
    .js-hide {
      display: none !important;
    }
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous" />
    <slot></slot>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    // Clone original input field, re-name and use for display purposes
    const inputField = this.querySelector('input');
    const displayInputField = inputField.cloneNode();
    displayInputField.setAttribute('name', `${inputField.getAttribute('name')}Alt`);
    inputField.removeAttribute('data-change-events');
    displayInputField.removeAttribute('id');
    let datalist = this.querySelector('datalist');

    inputField.after(displayInputField);

    // Hide original input field
    inputField.setAttribute('type', 'hidden');

    // if data list does not exist then create one and append
    if (!datalist) {
      datalist = document.createElement('datalist');
      const listID = safeID('list');
      datalist.setAttribute('id', listID);
      searchWrapper.appendChild(datalist);

      displayInputField.setAttribute('list', listID);
    }

    advancedSelect(this, displayInputField, datalist);
  }
}

export default iamAdvancedSelect;
