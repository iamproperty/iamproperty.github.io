import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-skeleton');

class iamSkeleton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/skeleton.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */`
      <style>
      ${loadCSS}
      </style>
      <slot></slot>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    
    
    if(this.querySelector('.card'))
      this.classList.add('hasCard');

    if(this.querySelector('.btn'))
      this.classList.add('hasBtn');

    if(this.querySelector('.tag'))
      this.classList.add('hasTag');

    if(this.querySelector('.badge'))
      this.classList.add('hasBadge');

    if(this.querySelector('.spinner'))
      this.classList.add('hasSpinner');
  }
}

export default iamSkeleton;
