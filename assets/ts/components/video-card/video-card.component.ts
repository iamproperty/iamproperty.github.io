// @ts-nocheck
import {trackComponent, trackComponentRegistered} from "../_global";

trackComponentRegistered("iam-video-card");

class iamVideoCard extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/video-card.component.css";`;
    
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="card__body" part="body">
      <slot name="badges"></slot>
      <slot></slot>
    </div>
    <div class="card__footer" part="footer">
      <slot name="footer"></slot>
    </div>
    <div class="card__video" part="video">
      <span part="video__button"></span>
    </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {
    
    const cardComponent = this;
    const orginalTable =  cardComponent.querySelector('table');
    const chart = cardComponent.shadowRoot.querySelector('.chart');



    
    trackComponent(cardComponent,"iam-barchart",[]);
  }

  static get observedAttributes() {
    return [];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "data-image": {

        if(oldVal != newVal){

          // Update image src
        }
        break;
      }
    }

  }
}

export default iamVideoCard;