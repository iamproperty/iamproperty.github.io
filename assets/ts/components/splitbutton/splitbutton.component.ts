// @ts-nocheck

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'splitbutton',
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
    const loadCSS = `@import "${assetLocation}/css/components/splitbutton.component.css";`;

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
        <button class="btn btn-split">
          <i class="fa fa-angle-down fa-light"></i>
        </button>
        <div class="split-menu">
          <slot name="menu-item">

          </slot>
        </div>
      </div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const dropdown = this.shadowRoot.querySelector('.split-menu');
    const splitBtn = this.shadowRoot.querySelector('.btn-split')
    const html = document.querySelector('html');
    const mainButton = this.querySelector('.btn');

    // if (mainButton.disabled) {
    //   splitBtn.disabled = true;
    // }

    splitBtn.className = `btn btn-${this.getAttribute('variant') || 'primary'}`;

    if (mainButton.disabled) {
      splitBtn.disabled = true;
    }

    if (mainButton.classList.contains('btn-sm')) {
      console.log('hit if');
      splitBtn.classList.add('btn-sm');
    }

    splitBtn.addEventListener('click', function() {
      if (!dropdown.classList.contains('open')) {
        dropdown.classList.add('open');
      } else {
        dropdown.classList.remove('open');
      }
    });

    splitBtn.addEventListener('click', function(event) {
      event.stopPropagation(event);
    });

    html.addEventListener('click', function() {
      if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
      }
    });
  }
}

export default iamSplitButton;
