import iamNav from '../nav/nav.component';

class iamNavStandalone extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/nav-standalone.component.css";`;
    //const loadExtraCSS = `@import "${assetLocation}/css/components/nav.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */ `
      <style class="styles">
        ${loadCSS}
      </style>

      <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous" />
      <div class="wrapper">
        <iam-nav class="iam-nav">
          <slot></slot>
          <slot name="account"></slot>
          <slot name="secondary"></slot>
        </iam-nav>
      </div>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('navGlobal'))
      document.head.insertAdjacentHTML('beforeend', `<style id="navGlobal">${loadExtraCSS}</style>`);
  }

  connectedCallback(): void {
    if (!window.customElements.get(`iam-nav`)) window.customElements.define(`iam-nav`, iamNav);

    const wrapper = this.shadowRoot.querySelector('.wrapper');

    wrapper?.innerHTML = `<iam-nav class="iam-nav">${this.innerHTML}</iam-nav>`;

    const iamNavElement = wrapper?.querySelector(':scope > iam-nav');

    if (iamNavElement.querySelector('[slot="secondary"]')) {
      iamNavElement.classList.add('has-secondary');
    }

    wrapper?.addEventListener('change', (e) => {
      const event = new CustomEvent('change', e);
      this.dispatchEvent(event);
    });

    wrapper?.addEventListener('click', (e) => {
      console.log(e);
      const event = new CustomEvent('click', e);
      this.dispatchEvent(event);
    });
  }
}

export default iamNavStandalone;
