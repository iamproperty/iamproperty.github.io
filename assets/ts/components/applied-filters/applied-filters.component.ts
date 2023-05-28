// @ts-nocheck
import createAppliedFilters from "../../modules/applied-filters";

const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets'
const loadCSS = `@import "${assetLocation}/css/components/applied-filters.css";`;

class iamAppliedFilters extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    let classList = this.classList.toString();
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="applied-filters ${classList}"></div>
    <slot></slot>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    createAppliedFilters(this,this.shadowRoot.querySelector('.applied-filters'));
  }
}

export default iamAppliedFilters;