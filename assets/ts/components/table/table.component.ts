// @ts-nocheck
import {addDataAttributes,getLargestLastColWidth,createMobileButton,addTableEventListeners} from "../../modules/table";

class iamTable extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';

    const isSticky = this.classList.contains('table--sticky');
    let classList = this.classList.toString();

    classList = classList.replace('table--sticky','');

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    </style>
    ${isSticky ? '<div class="table--sticky">' : ''}
    <div class="table__wrapper ${classList}">
      <slot></slot>
    </div>
    ${isSticky ? '</div>' : ''}
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    const table = this.querySelector('table');

    // Create a button in the first column
    createMobileButton(table);
    
    addTableEventListeners(table);

    // Setup the mobile titles
    addDataAttributes(table);

    // Work out the largest width of the CTA's in the last column
    if(this.classList.contains('table--sticky')){

      const largestWidth = getLargestLastColWidth(table);
      this.style.setProperty("--cta-width", `${largestWidth}rem`);
    }
  }
}

export default iamTable;