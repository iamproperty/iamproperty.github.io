// @ts-nocheck
import tabs from "../../modules/tabs";

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "tabs"
});

class iamTabs extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/tabs.css";`;
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    ${loadCSS}
    
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="tabs">
      <div class="tabs__links"></div>
      <slot></slot>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    tabs(this);
  }
}

export default iamTabs;