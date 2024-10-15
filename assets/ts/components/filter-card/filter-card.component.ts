// @ts-nocheck
import {trackComponent, trackComponentRegistered} from "../_global";
import {cardHTML,setupCard} from "../../modules/card.module";

trackComponentRegistered("iam-filter-card");

class iamFilerCard extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/filter-card.component.css";`;
    
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    ${cardHTML}
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	async connectedCallback() {

    const cardComponent = this;
    const cardHead =  cardComponent.shadowRoot.querySelector('.card__head');

    setupCard(cardComponent);

    trackComponent(cardComponent,"iam-video-card",['play-video','close-video']);
  }

  static get observedAttributes() {
    return ["data-image"];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "data-image": {

        if(oldVal != newVal){

          const cardHeadImg = this.shadowRoot.querySelector('.card__head img');

          if(cardHeadImg)
            cardHeadImg.setAttribute('src',newVal);
        }
        break;
      }
    }

  }
}

export default iamFilerCard;