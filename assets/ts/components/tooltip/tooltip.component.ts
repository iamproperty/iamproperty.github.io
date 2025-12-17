import { trackComponent, trackComponentRegistered } from '../_global';


trackComponentRegistered('iam-tooltip');

class iamTooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/tooltip.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <span class="tooltip__anchor"><slot></slot></span>
    <span class="tooltip__content"></span>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    const contentWrapper = this.shadowRoot?.querySelector('.tooltip__content');

    contentWrapper?.innerHTML = this.getAttribute('title');

    //const id = this.getAttribute('id');

    //this.setAttribute('popover','auto');

    //const button = document.querySelector(`[popovertarget="${id}"]`);
    

    //this.style.setProperty("position-anchor","--button");

  }
}

export default iamTooltip;
