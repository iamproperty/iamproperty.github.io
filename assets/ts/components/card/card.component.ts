// @ts-nocheck

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "Card"
});


class iamCard extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    if(this.querySelector('[class*="fa-"]'))
      this.classList.add('card--has-icon');

    let classList = this.classList.toString();
    
    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets'
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/card.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/components/card.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous">
    <div class="card ${classList}" tabindex="0" part="card">
      ${this.hasAttribute('data-image') ? `<div class="card__head"><img src="${this.getAttribute('data-image')}" alt="" loading="lazy" /><div class="card__badges"><slot name="badges"></slot></div></div>` : ''}
      <div class="card__body">
      ${!this.hasAttribute('data-image') ? `<div class="card__badges"><slot name="badges"></slot></div>` : ''}
      ${this.hasAttribute('data-illustration') ? `<div class="card__illustration"><img src="${this.getAttribute('data-illustration')}" alt="" loading="lazy" /></div>` : ''}
        <slot></slot>
      ${this.hasAttribute('data-total') ? `<div class="card__total">${this.getAttribute('data-total')}</div>` : ''}
      </div>
      ${this.hasAttribute('data-add-link') ? `<button class="btn btn-compact btn-secondary fa-plus">Add property</button>` : ''}
      <slot name="checkbox"></slot>
      <div class="card__footer">
        <slot name="footer"></slot>
        ${this.hasAttribute('data-cta') ? `<span class="link d-inline-block pt-0 mb-0">${this.getAttribute('data-cta')}</span>` : ''}
      </div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    // insert extra CSS
    if(!document.getElementById('cardGlobal'))
      document.head.insertAdjacentHTML('beforeend',`<style id="cardGlobal">${loadExtraCSS}</style>`);
  }

	connectedCallback() {

    this.classList.add('loaded');
    
    // Mimic clicking the parent node so the focus and target events can be on the card
    const parentNode = this.parentNode.closest('a, button, label')
    const card = this.shadowRoot.querySelector('.card')
    const btnCompact =  this.shadowRoot.querySelector('.btn-compact');

    parentNode.setAttribute('tabindex','-1');
    

    if(parentNode.matches('label[for]')){

      let isChecked = document.getElementById(parentNode.getAttribute('for')).checked;
        
      if(isChecked)
        card.classList.add('checked');
      else
        card.classList.remove('checked');
    }

    // Click event down
    this.addEventListener('click', (event) => {

      let clickEvent = new Event('click');
      card.dispatchEvent(clickEvent);
    });

    card.addEventListener('click', (event) => {

      if(parentNode.matches('label[for]')){

        event.stopPropagation();
        event.preventDefault();

        const input = document.getElementById(parentNode.getAttribute('for'))

        const inputName = input.getAttribute('name');
        const inputID = input.getAttribute('id');

        // Mimic radio button functionality
        const inputs = Array.from(document.querySelectorAll(`[name="${inputName}"][type="radio"]:not([id="${inputID}"])`));
        inputs.forEach((input, index) => {
          
          const otherCard = document.querySelector(`[for="${input.getAttribute('id')}"] iam-card`);
          
          otherCard.dispatchEvent(new Event('inactive'));
        });

        parentNode.click();
        let isChecked = input.checked
          
        if(isChecked)
          card.classList.add('checked');
        else
          card.classList.remove('checked');

      }
    });

    this.addEventListener('inactive', (event) => {
      card.classList.remove('checked');
    });

    card.addEventListener('keydown', (event) => {

      switch(event.keyCode)
      {
          case 32:
          case 13:
            if(parentNode.matches('label[for]')){

              event.stopPropagation();
              event.preventDefault();
      
              const input = document.getElementById(parentNode.getAttribute('for'))
      
              const inputName = input.getAttribute('name');
              const inputID = input.getAttribute('id');
      
              const inputs = Array.from(document.querySelectorAll(`[name="${inputName}"]:not([id="${inputID}"])`));
          
              inputs.forEach((input, index) => {
                
                const otherCard = document.querySelector(`[for="${input.getAttribute('id')}"] iam-card`);
                
                otherCard.dispatchEvent(new Event('inactive'));
              });
      
              parentNode.click();
              let isChecked = input.checked
                
              if(isChecked)
                card.classList.add('checked');
              else
                card.classList.remove('checked');
      
            }
            else {
              parentNode.click();
            }
              break;
          default:
              break;
      }
    });

    if(btnCompact){

      let addLocation = this.getAttribute('data-add-link');

      btnCompact.addEventListener('click', (event) => {

          event.stopPropagation();
          event.preventDefault();
          window.location = addLocation;
      });
    }
  }

  static get observedAttributes() {
    return ["data-total","class"];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "data-total": {
        if(this.shadowRoot.querySelector('.card__total'))
          this.shadowRoot.querySelector('.card__total').innerHTML = newVal;
        break;
      }
      case "class": {
        let classList = this.classList.toString();
            
        if(this.querySelector('[class*="fa-"]'))
          classList += ' card--has-icon';

        this.shadowRoot.querySelector('.card').setAttribute('class',`card ${classList}`);
        break;
      }
    }

  }
}

export default iamCard;