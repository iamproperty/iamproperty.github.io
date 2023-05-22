// @ts-nocheck
class iamCard extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/card.css";`;

    if(this.querySelector('.icon'))
      this.classList.add('card--has-icon');

    let classList = this.classList.toString();

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="card ${classList}">
      ${this.hasAttribute('data-image') ? `<div class="card__head"><img src="${this.getAttribute('data-image')}" alt="" loading="lazy" /></div>` : ''}
      <div class="card__body">
      ${this.classList.contains('card--filter') && this.hasAttribute('data-total') ? `<div class="card__total">${this.getAttribute('data-total')}</div>` : ''}
      ${this.hasAttribute('data-illustration') ? `<div class="card__illustration"><img src="${this.getAttribute('data-illustration')}" alt="" loading="lazy" /></div>` : ''}
        <slot></slot>
      </div>
      ${this.hasAttribute('data-cta') ? `<div class="card__footer"><span class="link">${this.getAttribute('data-cta')}</span></div>` : ''}
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {
    
    
  }

  static get observedAttributes() {
    return ["data-total","class"];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "data-total": {
        this.shadowRoot.querySelector('.card__total').innerHTML = newVal;
        break;
      }
      case "class": {
        let classList = this.classList.toString();
            
        if(this.querySelector('.icon'))
          classList += ' card--has-icon';

        this.shadowRoot.querySelector('.card').setAttribute('class',`card ${classList}`);
        break;
      }
    }

  }
}

export default iamCard;