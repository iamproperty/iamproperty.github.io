import { trackComponent, trackComponentRegistered } from '../_global';


trackComponentRegistered('iam-tooltip');

class iamTooltip extends HTMLElement {
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
    <slot></slot>
    <div class="tooltip__anchor">
    </div>
    <div class="tooltip__content" id="tooltip"></div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {


    const contentWrapper = this.shadowRoot?.querySelector('.tooltip__content');
    const anchor = this.shadowRoot?.querySelector('.tooltip__anchor');

    if(this.hasAttribute('data-heading'))
      contentWrapper?.innerHTML += `<strong>${this.getAttribute('data-heading')}</strong>`;

    contentWrapper?.innerHTML += this.getAttribute('title');


    this.removeAttribute('title');

    contentWrapper?.setAttribute('popover', 'auto');

    this?.addEventListener('mouseenter', (event) => {
      
        contentWrapper.showPopover();
    });
    this?.addEventListener('mouseleave', (event) => {

      if(!contentWrapper?.classList.contains('show-popover'))
        contentWrapper.hidePopover();
    });


    // Check if th component sets the tooltip open by default
    if(this.classList.contains('show-popover')){
      contentWrapper?.classList.add('show-popover');
      
      contentWrapper?.setAttribute('popover', 'manual'); // Switch popover type first before showing popover
      contentWrapper.showPopover();
    }

    this?.addEventListener('click', (event) => {
      
      contentWrapper?.classList.toggle('show-popover');

      if(contentWrapper?.classList.contains('show-popover')){
        
        contentWrapper?.setAttribute('popover', 'manual'); // Switch popover type first before showing popover
        contentWrapper.showPopover();
      }
      else {
        
        contentWrapper?.setAttribute('popover', 'auto');
        contentWrapper.hidePopover();
      }
    });

    // Used for documentation
    this?.parentNode?.addEventListener('update', (event) => {
      contentWrapper?.setAttribute('popover', 'auto');
      contentWrapper.hidePopover();

      setTimeout(() => {
          
        contentWrapper?.classList.add('show-popover');
        
        contentWrapper?.setAttribute('popover', 'manual'); // Switch popover type first before showing popover
        contentWrapper.showPopover();

      }, 100);
    });
  }
}

export default iamTooltip;
