// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'banner',
});

class iamBentoGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/banner.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="wrapper">
      <slot></slot>
      <div class="banner__btns"><slot name="buttons"></slot><button class="btn btn-tertiary" id="dismiss">Dismiss</button></div>
      
    </div>
    <div class="banner__img">
      <picture>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" lazy="" />
      </picture>
    </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    const dismissBtn = this.shadowRoot?.querySelector('#dismiss');
    const bgImg = this.shadowRoot?.querySelector('.banner__img img');

    dismissBtn?.addEventListener('click', () => {
      this.remove();
    });

    if (this.hasAttribute('data-image')) bgImg?.setAttribute('src', this.getAttribute('data-image'));
  }
}

export default iamBentoGrid;
