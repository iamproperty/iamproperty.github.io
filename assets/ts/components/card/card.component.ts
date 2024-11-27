// @ts-nocheck
import {trackComponent, trackComponentRegistered} from "../_global";
import {cardHTML,setupCard} from "../../modules/card.module";

trackComponentRegistered("iam-card");

class iamCard extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/card.component.css";`;
    
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    ${cardHTML}
    <slot name="primary-action"></slot>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  
	async connectedCallback() {

    const cardComponent = this;
    const cardHead =  cardComponent.shadowRoot.querySelector('.card__head');
    const cardBody =  cardComponent.shadowRoot.querySelector('.card__body');
    const cardMenu =  cardComponent.shadowRoot.querySelector('.dialog__wrapper');
    const btn =  cardComponent.shadowRoot.querySelector('.dialog__wrapper button');

    setupCard(cardComponent);

    // Add Illustration HTML
    if(cardComponent.hasAttribute('data-illustration')){
      cardBody.insertAdjacentHTML('afterbegin',`<div class="card__illustration"><img src="${this.getAttribute('data-illustration')}" alt="" loading="lazy" /></div>`)
    }

    // Add class that shows the right arrow icon
    if(!cardComponent.querySelector('[slot="btns"]') && !cardComponent.querySelector('[slot="secondary"]')){
      cardComponent.classList.add('show-icon');
    }

    // Secondary buttons and actions

    // Add the dialog wrapper HTML
    if(cardComponent.querySelector('[slot="btns"]')){

      cardComponent.shadowRoot.innerHTML += `<div class="dialog__wrapper">
      <button class="btn btn-secondary btn-compact fa-ellipsis-vertical" popovertarget="actions" title="Further actions" type="button">Open further actions</button>
      <div class="dialog--fix dialog--list" id="actions" popover>
        <slot name="btns"></slot>
      </div>
    </div>`;
    }
      
    // Make sure slotted buttons and links have correct button classes
    Array.from(cardComponent.querySelectorAll('[slot="btns"]')).forEach((button,index)=>{

      button.classList.add('btn');
      button.classList.add('btn-action');
    });

    // Hide the default hover and focus states when interacting with the checkbox, dialog wrapper or secondary button
    if(cardComponent.querySelector('[slot="checkbox"],[slot="secondary"]')){

      const element = cardComponent.querySelector('[slot="checkbox"],[slot="secondary"]');

      element.addEventListener('mouseenter', (event) => {
        cardComponent.classList.add('prevent-hover');
      });

      element.addEventListener('mouseleave', (event) => {
        cardComponent.classList.remove('prevent-hover');
      });
    }

    if(cardComponent.shadowRoot.querySelector('.dialog__wrapper')){

      const element = cardComponent.shadowRoot.querySelector('.dialog__wrapper');

      element.addEventListener('mouseenter', (event) => {
        cardComponent.classList.add('prevent-hover');
      });

      element.addEventListener('mouseleave', (event) => {
        cardComponent.classList.remove('prevent-hover');
      });
    }

    // Dispatch events of selecting checkboxes
    const checkbox = cardComponent.querySelector('input[type="checkbox"]');
    if(checkbox){
      checkbox.addEventListener('change', (event) => {


        if(checkbox.checked){
          const customEvent = new CustomEvent("select-card", { detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') } });
          cardComponent.dispatchEvent(customEvent);
        }
        else {
    
          const customEvent = new CustomEvent("unselect-card", { detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') } });
          cardComponent.dispatchEvent(customEvent);
        }
      });
    }

    // Dispatch events of click onto secondary buttons
    const secondaryBtn = cardComponent.querySelector('[slot="secondary"]');
    if(secondaryBtn){
      secondaryBtn.addEventListener('click', (event) => {

        const customEvent = new CustomEvent("secondary-button-clicked", { detail: { 'Title': secondaryBtn.getAttribute('title') } });
        cardComponent.dispatchEvent(customEvent);
      });
    }

    // Dispatch events of click onto action buttons
    const actionBtns = cardComponent.querySelectorAll('[slot="btns"]');
    Array.from(actionBtns).forEach((button,index)=>{

      button.addEventListener('click', (event) => {

        const customEvent = new CustomEvent("action-button-clicked", { detail: { 'Title': button.getAttribute('title') } });
        cardComponent.dispatchEvent(customEvent);
      });
    });


    trackComponent(cardComponent,"iam-card",['select-card','unselect-card','secondary-button-clicked','action-button-clicked']);
  }

  static get observedAttributes() {
    return ["data-image"];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "data-total": {
        if(this.shadowRoot.querySelector('.card__total'))
          this.shadowRoot.querySelector('.card__total').innerHTML = newVal;
        break;
      }
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

export default iamCard;