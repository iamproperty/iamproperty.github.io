import iamMenu from '../menu/menu.component';

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'split-button',
});

class iamSplitButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css')
      ? document.body.getAttribute('data-core-css')
      : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/split-button.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="split-button">
      <slot></slot>
      <div class="dropdown">
        <button class="btn btn-split" part="dropdown" popovertarget="actions" style="anchor-name: --anchor-el;" title="Further actions">
          <i class="fa fa-angle-down fa-light"></i>
        </button>

        <iam-menu id="actions" style="position-anchor: --anchor-el;" popover>
          <slot name="menu-item">

          </slot>
        </iam-menu>

      </div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    const dropdown = this.shadowRoot.querySelector('.split-menu');
    const splitBtn = this.shadowRoot.querySelector('.btn-split');
    const html = document.querySelector('html');
    const mainButton = this.querySelector('.btn');

    if (!window.customElements.get(`iam-menu`)) window.customElements.define(`iam-menu`, iamMenu);

    splitBtn.className = `${mainButton.className} btn-split`;

    if (mainButton.disabled) {
      splitBtn.disabled = true;
    }

    if (mainButton.classList.contains('btn-sm')) {
      splitBtn.classList.add('btn-sm');
    }
  }
}

export default iamSplitButton;
