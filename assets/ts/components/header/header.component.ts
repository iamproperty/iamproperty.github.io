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
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="header-banner">
      <picture>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" lazy="" />
      </picture>
      <div class="container">
        <slot></slot>
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
  }
}

export default iamHeader;
