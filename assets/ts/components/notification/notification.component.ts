// @ts-nocheck
//import createPaginationButttons from "../../modules/pagination";

class iamNotification extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/notification.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>

    <div class="notification">
      <div class="notification__icon"><slot name="icon"></slot></div>
      <div class="notification__text"><slot></slot></div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }

	connectedCallback() {

    const statusBG = this.hasAttribute('data-status') ? this.getAttribute('data-status') : 'white'

    this.classList.add(`bg-${statusBG}`);


    switch(statusBG) {
      case 'danger':
        this.innerHTML += '<i class="fa-light fa-circle-exclamation" aria-hidden="true" slot="icon"></i>';
        break;
      case 'warning':
        this.innerHTML += '<i class="fa-light fa-triangle-exclamation" aria-hidden="true" slot="icon"></i>';
        break;
      case 'success':
        this.innerHTML += '<i class="fa-regular fa-check-circle" aria-hidden="true" slot="icon"></i>';
        break;
      default:
        this.innerHTML += '<i class="fa-light fa-circle-exclamation" aria-hidden="true" slot="icon"></i>';
    }


  }
}

export default iamNotification;