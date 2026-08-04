import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-bone');

class iamBone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
    <div class="wrapper">
      <slot></slot>
    </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {}
}

export default iamBone;
