// @ts-nocheck
import filterlist from "../../modules/filterlist";

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "filterlist"
});

class iamFilterlist extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    :host {
      margin-bottom: 3rem;
      display:block;
    }
    </style>
    <div class="form-control__wrapper">
      <label for="search" class="visually-hidden">Search</label>
      <span class="suffix" role="presentation"><slot name="icon"></slot></span>
      <input name="search" id="search" type="text" class="form-control" autocomplete="off">
    </div>
    <div class="list__wrapper">
      <slot></slot>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    const maxHeights = {
      "small": "12.5rem",
      "medium": "25rem",
      "large": "37.5rem"
    }

    let maxHeightClass = (this.hasAttribute('data-max-height') && maxHeights[this.getAttribute('data-max-height')] ? 'list__wrapper--'+this.getAttribute('data-max-height') : '');

    this.shadowRoot.querySelector('.list__wrapper').classList.add(maxHeightClass);

    if(!this.querySelector('i.fa-search'))
      this.innerHTML += '<i class="fa fa-light fa-search" aria-hidden="true" slot="icon"></i>';

    filterlist(this.querySelector('ul'),this.shadowRoot.querySelector('#search'));
  }
}

export default iamFilterlist;