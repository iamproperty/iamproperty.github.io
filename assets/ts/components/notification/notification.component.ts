import setupNotification, { closeNotification } from '../../modules/notification';

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'Notification',
});

class iamNotification extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css')
      ? document.body.getAttribute('data-core-css')
      : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/notification.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/components/notification.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('data-css') ? `${this.getAttribute('data-css')}` : ``}
    </style>

    <div class="notification">
      <div class="notification__icon"><slot name="icon"></slot></div>
      <div class="notification__inner"><div class="notification__text"><slot></slot></div><div class="notification__btns"><slot name="btns"></slot></div></div>
      <div class="notification__dismiss"></div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('notificationHolder'))
      document.head.insertAdjacentHTML('beforeend', `<style id="notificationHolder">${loadExtraCSS}</style>`);
  }

  connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const wrapper = this;
    const defaultStatusBG = this.hasAttribute('data-type') ? 'white' : 'info';
    const statusBG = this.hasAttribute('data-status') ? this.getAttribute('data-status') : defaultStatusBG;

    if (this.hasAttribute('data-type')) this.classList.add(`bg-${statusBG}`);
    else {
      this.classList.add(`colour-${statusBG}`);
    }

    if (!this.querySelector('i')) {
      switch (statusBG) {
        case 'danger':
          this.insertAdjacentHTML(
            'beforeend',
            '<i class="fa-solid fa-circle-exclamation" aria-hidden="true" slot="icon"></i>'
          );
          break;
        case 'warning':
          this.insertAdjacentHTML(
            'beforeend',
            '<i class="fa-solid fa-triangle-exclamation" aria-hidden="true" slot="icon"></i>'
          );
          break;
        case 'success':
          this.insertAdjacentHTML(
            'beforeend',
            '<i class="fa-solid fa-check-circle" aria-hidden="true" slot="icon"></i>'
          );
          break;
        default:
          this.insertAdjacentHTML(
            'beforeend',
            '<i class="fa-solid fa-circle-info" aria-hidden="true" slot="icon"></i>'
          );
      }
    }

    const buttons = this.querySelectorAll('a,button');

    Array.from(buttons).forEach((button) => {
      button.setAttribute('slot', 'btns');
      button.classList.add('link');
    });

    if (buttons.length || this.hasAttribute('data-dismiss')) {
      this.classList.add('notification--dismissable');
    }

    if (!buttons.length) {
      this.shadowRoot?.querySelector('.notification__btns')?.classList.add('empty');
    } else {
      this.shadowRoot?.querySelector('.notification__btns')?.classList.remove('empty');
    }

    if (this.hasAttribute('data-dismiss')) {
      this.shadowRoot.querySelector('.notification__dismiss')?.innerHTML =
        `<button data-dismiss-button part="dismiss-btn">Dismiss</button>`;

      this.shadowRoot.querySelector('.notification__dismiss [data-dismiss-button]').addEventListener(
        'click',
        function () {
          closeNotification(wrapper);
        },
        false
      );
    }

    setupNotification(this);
  }
}

export default iamNotification;
