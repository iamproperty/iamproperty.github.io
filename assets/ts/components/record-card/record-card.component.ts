// @ts-nocheck
import { trackComponent, trackComponentRegistered } from '../_global';
import { cardHTML, setupCard } from '../../modules/card.module';

trackComponentRegistered('iam-record-card');

class iamRecordCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/record-card.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>
    ${cardHTML}
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback() {
    const cardComponent = this;
    const cardHead = cardComponent.shadowRoot.querySelector('.card__head');
    setupCard(cardComponent);

    Array.from(cardComponent.querySelectorAll(':scope > *:not([slot])')).forEach((element, index) => {
      element.setAttribute('slot', 'details');
    });

    if (cardComponent.hasAttribute('data-avatar')) {
      cardHead.innerHTML += `<img src="${cardComponent.getAttribute('data-avatar')}" alt="" loading="lazy" class="card__avatar" part="avatar" />`;
    }

    trackComponent(cardComponent, 'iam-record-card', []);
  }

  static get observedAttributes() {
    return ['data-image'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case 'data-image': {
        if (oldVal != newVal) {
          const cardHeadImg = this.shadowRoot.querySelector('.card__head img');

          if (cardHeadImg) cardHeadImg.setAttribute('src', newVal);
        }
        break;
      }
      case 'data-avatar': {
        if (oldVal != newVal) {
          const cardHeadImg = this.shadowRoot.querySelector('.card__avatar');

          if (cardHeadImg) cardHeadImg.setAttribute('src', newVal);
        }
        break;
      }
    }
  }
}

export default iamRecordCard;
