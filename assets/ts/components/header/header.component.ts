// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'header',
});

class iamHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/header.css";`;

    const template = document.createElement('template');
    template.innerHTML = /*HTML*/`
    <style>
    ${loadCSS}
    </style>
    <div class="header-banner">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 776.72 776.73" class="gradient-background">
        <defs>
          <style>
            .cls-1 {
              fill: url(#linear-gradient-2);
              opacity: .15;
            }

            .cls-2 {
              fill: url(#linear-gradient-3);
              opacity: .2;
            }

            .cls-3 {
              fill: url(#linear-gradient);
              opacity: .1;
            }
          </style>
          <linearGradient id="linear-gradient" x1="113.75" y1="113.75" x2="662.98" y2="662.98" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#54ffff" stop-opacity="0"/>
            <stop offset="1" stop-color="#54ffff"/>
          </linearGradient>
          <linearGradient id="linear-gradient-2" x1="610.21" y1="166.51" x2="166.51" y2="610.21" xlink:href="#linear-gradient"/>
          <linearGradient id="linear-gradient-3" x1="388.36" y1="177.95" x2="388.36" y2="598.78" xlink:href="#linear-gradient"/>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <path class="cls-3" d="M113.75,662.98c151.66,151.67,397.56,151.66,549.23,0,151.67-151.67,151.66-397.56,0-549.23-151.67-151.66-397.56-151.66-549.23,0-151.66,151.67-151.66,397.56,0,549.23"/>
            <path class="cls-1" d="M74.62,388.36c0,173.27,140.47,313.74,313.74,313.74s313.74-140.47,313.74-313.74S561.64,74.62,388.36,74.62,74.62,215.09,74.62,388.36"/>
            <path class="cls-2" d="M239.58,239.58c-82.17,82.17-82.17,215.4,0,297.57,82.17,82.17,215.4,82.17,297.57,0,82.17-82.17,82.17-215.4,0-297.57-82.17-82.17-215.4-82.17-297.57,0"/>
          </g>
        </g>
      </svg>
      <picture>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" lazy="" />
      </picture>
      <div class="container">
        <slot></slot>
        <slot name="badge"></slot>
        <slot name="panel" class="admin-panel"></slot>
      </div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    this.classList.add('bg-primary');

    const picture = this.shadowRoot.querySelector('picture');
    const source = this.shadowRoot.querySelector('picture img');

    if (this.hasAttribute('image')) source.setAttribute('src', this.getAttribute('image'));
    else picture.remove();

    if(this.querySelector('[slot="panel"]'))
      this.classList.add('has-panel');
  }
}

export default iamHeader;
