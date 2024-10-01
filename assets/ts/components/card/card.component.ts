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

    if(this.querySelector('*:not(.badge):not(small):not(.btn):not(button) > [class*="fa-"]:not(.btn)'))
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
      ${this.createCardConent()}
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    // insert extra CSS
    if(!document.getElementById('cardGlobal'))
      document.head.insertAdjacentHTML('beforeend',`<style id="cardGlobal">${loadExtraCSS}</style>`);
  }

  const createCardConent () {

    // TODO split this out a bit
    return `${this.hasAttribute('data-image') || this.hasAttribute('data-record') ? `<div class="card__head">${this.hasAttribute('data-image') ? `<img src="${this.getAttribute('data-image')}" alt="" loading="lazy" />` : ``} <div class="card__badges"><slot name="badges"></slot></div></div>` : ''}
    <div class="card__body" part="body">
    ${!this.hasAttribute('data-image') && this.querySelector('[slot="badges"]') && this.querySelector('[slot="checkbox"]') ? `<div class="card__badges card__badges--inline"><slot name="badges"></slot></div>` : ''}
    ${!this.hasAttribute('data-image') && !this.hasAttribute('data-record') && this.querySelector('[slot="badges"]') ? `<div class="card__badges"><slot name="badges"></slot></div>` : ''}
    ${this.hasAttribute('data-illustration') ? `<div class="card__illustration"><img src="${this.getAttribute('data-illustration')}" alt="" loading="lazy" /></div>` : ''}
      <slot></slot>
    ${this.hasAttribute('data-total') ? `<div class="card__total">${this.getAttribute('data-total')}</div>` : ''}
    </div>
    ${this.hasAttribute('data-add-link') ? `<button class="btn btn-compact btn-secondary fa-plus">Add property</button>` : ''}
    <slot name="checkbox"></slot>
    <slot name="primary-action"></slot>
    <div class="dialog__wrapper d-none">
      <button class="btn btn-secondary btn-compact fa-ellipsis-vertical" popovertarget="actions" title="${this.hasAttribute('data-menu-title') ? this.getAttribute('data-menu-title') : 'Further actions'}">Lorum ipsum</button>
      <dialog class="dialog--fix dialog--list" id="actions" popover>
        <slot name="actions"></slot>
      </dialog>
    </div>
    <div class="card__footer" part="footer">
      <slot name="footer"></slot>
      <slot name="btns"></slot>
      ${this.hasAttribute('data-cta') ? `<span class="link d-inline-block pt-0 mb-0">${this.getAttribute('data-cta')}</span>` : ''}
    </div>`;
  }

	connectedCallback() {
    this.classList.add('loaded');

    // Mimic clicking the parent node so the focus and target events can be on the card
    const component = this;
    const parentNode = component.parentNode.closest('a, button, label, router-link');
    const card = this.shadowRoot.querySelector('.card')
    const btnCompact =  this.shadowRoot.querySelector('.btn-compact');
    const recordType = this.hasAttribute('data-record') ? this.getAttribute('data-record') : '';


    // Add the actions slot to the buttons and links to move them into a dialog warpper
    const actionsWrapper = this.shadowRoot.querySelector('.dialog__wrapper');
    let buttons = component.querySelectorAll('button[slot="actions"],a[slot="actions"]');
    if(buttons.length){

      const actionsWrapper = this.shadowRoot.querySelector('.dialog__wrapper');
      const actionsDialog = this.shadowRoot.querySelector('.dialog__wrapper dialog');
      const actionsBtn = actionsWrapper.querySelector('button');

      actionsWrapper.classList.remove('d-none');

      Array.from(buttons).forEach((button,index)=>{

        button.classList.add('btn');
        button.classList.add('btn-action');
      });
    }
    else {
      actionsWrapper.remove();
    }

    /* 
      If the parentNode is actually just a div, 
      we don't want to look for anything or add events 
    */
    if (!parentNode) {
      return false;
    }

    if(parentNode)
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
    return ["data-total","class","data-image"];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "data-total": {
        if(this.shadowRoot.querySelector('.card__total'))
          this.shadowRoot.querySelector('.card__total').innerHTML = newVal;
        break;
      }
      case "class": {

        if(oldVal != newVal){
          let classList = this.classList.toString();
              
          if(this.querySelector('*:not(.badge):not(small):not(.btn):not(button) > [class*="fa-"]:not(.btn)'))
            classList += ' card--has-icon';

          this.shadowRoot.querySelector('.card').setAttribute('class',`card ${classList}`);

          this.shadowRoot.querySelector('.card').innerHTML = this.createCardConent();
        }

        break;
      }
      case "data-image": {

        if(oldVal != newVal){

          this.shadowRoot.querySelector('.card').innerHTML = this.createCardConent();
        }
        break;
      }
    }

  }
}

export default iamCard;