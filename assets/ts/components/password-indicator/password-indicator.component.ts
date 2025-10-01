import { trackComponentRegistered } from '../_global';
import passwordIndicator from '../../modules/password-indicator';

trackComponentRegistered('iam-password-indicator');

class iamPasswordIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css')
      ? document.body.getAttribute('data-core-css')
      : `${assetLocation}/css/core.min.css`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    </style>
     <slot></slot>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
  
    passwordIndicator(this);
  }
}

export default iamPasswordIndicator;
