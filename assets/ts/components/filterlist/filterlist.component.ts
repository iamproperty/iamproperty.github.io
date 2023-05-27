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

    if(!this.querySelector('i.fa-search'))
      this.innerHTML += '<i class="fa fa-light fa-search" aria-hidden="true" slot="icon"></i>';

    const maxHeights = {
      "small": "12.5rem",
      "medium": "25rem",
      "large": "37.5rem"
    }

    let maxHeight = (this.hasAttribute('data-max-height') ? maxHeights[this.getAttribute('data-max-height')] : 'none');

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    .list__wrapper {
      max-height: ${maxHeight};
      overflow-x: hidden;
      overflow-y: auto;
    }
    :host {
      margin-bottom: 3rem;
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

    filterlist(this.querySelector('ul'),this.shadowRoot.querySelector('#search'));
  }
}

export default iamFilterlist;