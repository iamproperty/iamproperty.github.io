import { trackComponent, trackComponentRegistered } from '../_global';


trackComponentRegistered('iam-popover');

class iamPopover extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/popover.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div>
    <slot></slot>
    </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    const id = this.getAttribute('id');
    const button = document.querySelector(`[popovertarget="${id}"]`);
    
    this.setAttribute('popover','auto');


    button?.addEventListener('click',() => {

      if(this.matches(':popover-open')){
        button.removeAttribute('aria-pressed');
      }
      else {
        
        button.setAttribute('aria-pressed','true');
      }
    });
  }
}

export default iamPopover;
