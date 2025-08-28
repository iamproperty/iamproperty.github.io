import { trackComponent, trackComponentRegistered } from '../_global';
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
      <button type="button" class="suffix fa-solid fa-eye-slash" data-alt-class="suffix fa-solid fa-eye" data-change-type="text" data-input="password" aria-hidden="true"><span class="visually-hidden">Show password</span></button>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    /* const milestoneComponent = this;

    trackComponent(milestoneComponent, 'iam-milestone', [
      'milestone-item-closed', 
      'milestone-item-opened',
    ]);
 */
    passwordIndicator(this);
  }
}

export default iamPasswordIndicator;
