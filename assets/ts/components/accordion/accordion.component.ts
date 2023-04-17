// @ts-nocheck
import accordion from "../../modules/accordion";

const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets'

const template = document.createElement('template');
template.innerHTML = `
<style>
@import "${assetLocation}/css/core.min.css";
@import "${assetLocation}/css/components/header.css";
</style>
<div class="accordion">
  <slot></slot>
</div>
`;

class iamAccordion extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    accordion(this);

    // Load in the component CSS into the root so we can style the content of the component
    this.insertAdjacentHTML("beforebegin", `<link rel="stylesheet" href="${assetLocation}/css/components/accordion.css">`)
  }
}

export default iamAccordion;