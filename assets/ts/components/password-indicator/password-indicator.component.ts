import { trackComponentRegistered } from '../_global';
import passwordIndicator from '../../modules/password-indicator';

trackComponentRegistered('iam-password-indicator');

class iamPasswordIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
     <slot></slot>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
  
    passwordIndicator(this);
  }
}

export default iamPasswordIndicator;
