import { trackComponent, trackComponentRegistered } from '../_global';
import { cardHTML, setupCard } from '../../modules/card.module';

trackComponentRegistered('iam-card');

class iamCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/card.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>
    ${cardHTML}
    <slot name="primary-action"></slot>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const cardComponent = this;
    const cardBody = cardComponent.shadowRoot.querySelector('.card__body');

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    if (!window.customElements.get(`iam-menu`)) {
      import(/* @vite-ignore */ `${assetLocation}/js/components/menu/menu.component.js`)
        .then((module) => {
          window.customElements.define(`iam-menu`, module.default);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    setupCard(cardComponent);

    // Add Illustration HTML
    if (cardComponent.hasAttribute('data-illustration')) {
      cardBody.insertAdjacentHTML(
        'afterbegin',
        `<div class="card__illustration"><img src="${this.getAttribute('data-illustration')}" alt="" loading="lazy" /></div>`
      );
    }

    // Add class that shows the right arrow icon
    if (!cardComponent.querySelector('[slot="btns"]') && !cardComponent.querySelector('[slot="secondary"]')) {
      cardComponent.classList.add('show-icon');
    }

    // Secondary buttons and actions

    // Add the dialog wrapper HTML
    if (cardComponent.querySelector('[slot="btns"]')) {
      cardComponent.shadowRoot.innerHTML += `<div class="menu__wrapper">
      <button class="btn btn-secondary btn-compact fa-ellipsis-vertical m-0" popovertarget="actions" style="anchor-name: --anchor-el;" title="Further actions" type="button">Open further actions</button>
      <iam-menu class="dialog--fix dialog--list" id="actions" style="position-anchor: --anchor-el;" popover>
        <slot name="btns"></slot>
      </iam-menu>
    </div>`;

      // safari and firefox anchor fix for cards
      if (!CSS.supports('top', 'anchor(top)')) {
        const actionButton = this.shadowRoot?.querySelector('[popovertarget="actions"]');
        const actionPopover = this.shadowRoot?.querySelector('[popover]');

        actionButton?.addEventListener('click', (event) => {
          this.style.setProperty('overflow', 'visible');
          this.style.setProperty('z-index', '999999');

          const viewportOffset = actionButton.getBoundingClientRect();
          const top = viewportOffset.top;
          const left = viewportOffset.left;

          actionPopover.style.setProperty('display', 'block');
          actionPopover.style.setProperty('top', top + 'px');
          actionPopover.style.setProperty('left', left - 100 + 'px');
        });

        document.addEventListener('scroll', (event) => {
          actionPopover.style.setProperty('display', 'none');
        });
      }
    }

    // Make sure slotted buttons and links have correct button classes
    Array.from(cardComponent.querySelectorAll('[slot="btns"]')).forEach((button) => {
      button.classList.add('btn');
      button.classList.add('btn-action');
    });

    // Hide the default hover and focus states when interacting with the checkbox, dialog wrapper or secondary button
    if (cardComponent.querySelector('[slot="checkbox"],[slot="secondary"]')) {
      const element = cardComponent.querySelector('[slot="checkbox"],[slot="secondary"]');

      element.addEventListener('mouseenter', () => {
        cardComponent.classList.add('prevent-hover');
      });

      element.addEventListener('mouseleave', () => {
        cardComponent.classList.remove('prevent-hover');
      });
    }

    if (cardComponent.shadowRoot.querySelector('.menu__wrapper')) {
      const element = cardComponent.shadowRoot.querySelector('.menu__wrapper');

      element.addEventListener('mouseenter', () => {
        cardComponent.classList.add('prevent-hover');
      });

      element.addEventListener('mouseleave', () => {
        cardComponent.classList.remove('prevent-hover');
      });
    }

    // Dispatch events of selecting checkboxes
    const checkbox = cardComponent.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          const customEvent = new CustomEvent('select-card', {
            detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') },
          });
          cardComponent.dispatchEvent(customEvent);
        } else {
          const customEvent = new CustomEvent('unselect-card', {
            detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') },
          });
          cardComponent.dispatchEvent(customEvent);
        }
      });
    }

    // Dispatch events of click onto secondary buttons
    const secondaryBtn = cardComponent.querySelector('[slot="secondary"]');
    if (secondaryBtn) {
      secondaryBtn.addEventListener('click', () => {
        const customEvent = new CustomEvent('secondary-button-clicked', {
          detail: { Title: secondaryBtn.getAttribute('title') },
        });
        cardComponent.dispatchEvent(customEvent);
      });
    }

    // Dispatch events of click onto action buttons
    const actionBtns = cardComponent.querySelectorAll('[slot="btns"]');
    Array.from(actionBtns).forEach((button) => {
      button.addEventListener('click', () => {
        const customEvent = new CustomEvent('action-button-clicked', {
          detail: { Title: button.getAttribute('title') },
        });
        cardComponent.dispatchEvent(customEvent);
      });
    });

    trackComponent(cardComponent, 'iam-card', [
      'select-card',
      'unselect-card',
      'secondary-button-clicked',
      'action-button-clicked',
    ]);
  }

  static get observedAttributes(): any {
    return ['data-image'];
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {
    switch (attrName) {
      case 'data-total': {
        if (this.shadowRoot.querySelector('.card__total'))
          this.shadowRoot.querySelector('.card__total').innerHTML = newVal;
        break;
      }
      case 'data-image': {
        if (oldVal != newVal) {
          const cardHeadImg = this.shadowRoot.querySelector('.card__head img');

          if (cardHeadImg) cardHeadImg.setAttribute('src', newVal);
        }
        break;
      }
    }
  }
}

export default iamCard;
