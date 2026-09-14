import { trackComponent } from '../_global';
import { cardHTML, setupCard } from '../../modules/card.module';
import iamMenu from '../menu/menu.component';

type CardSelectionDetail = {
  'Card value': string;
  'input name': string | null;
};

type CardButtonDetail = {
  Title: string | null;
};

const getAssetLocation = (): string => document.body.getAttribute('data-assets-location') || '/assets';

class iamCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const assetLocation = getAssetLocation();
    const loadCSS = `@import "${assetLocation}/css/components/card.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>
    ${cardHTML}
    <slot name="link"></slot>
    <slot name="primary-action"></slot>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    const shadowRoot = this.shadowRoot;
    const cardBody = shadowRoot?.querySelector<HTMLDivElement>('.card__body');

    if (!shadowRoot) return;

    if (!window.customElements.get(`iam-menu`)) window.customElements.define(`iam-menu`, iamMenu);

    setupCard(this);

    // Add Illustration HTML
    if (this.hasAttribute('data-illustration')) {
      cardBody?.insertAdjacentHTML(
        'afterbegin',
        `<div class="card__illustration"><img src="${this.getAttribute('data-illustration')}" alt="" loading="lazy" /></div>`
      );
    }

    // Add class that shows the right arrow icon
    if (
      !this.querySelector('[slot="btns"]') &&
      !this.querySelector('[slot="secondary"]') &&
      !this.classList.contains('card--article') &&
      !this.closest('.carousel--article-cards')
    ) {
      this.classList.add('show-icon');
    }

    // Secondary buttons and actions

    // Add the dialog wrapper HTML
    if (this.querySelector('[slot="btns"]')) {
      const menuTemplate = document.createElement('template');
      menuTemplate.innerHTML = `<div class="menu__wrapper">
      <button class="btn btn-secondary btn-compact fa-ellipsis-vertical m-0" popovertarget="actions" style="anchor-name: --anchor-el;" title="Further actions" type="button">Open further actions</button>
      <iam-menu class="dialog--fix dialog--list" id="actions" style="position-anchor: --anchor-el;" popover>
        <slot name="btns"></slot>
      </iam-menu>
    </div>`;
      shadowRoot.appendChild(menuTemplate.content.cloneNode(true));

      // safari and firefox anchor fix for cards
      if (typeof CSS === 'undefined' || !CSS.supports('top', 'anchor(top)')) {
        const actionButton = shadowRoot.querySelector<HTMLButtonElement>('[popovertarget="actions"]');
        const actionPopover = shadowRoot.querySelector<HTMLElement>('[popover]');

        actionButton?.addEventListener('click', () => {
          this.style.setProperty('overflow', 'visible');
          this.style.setProperty('z-index', '999999');

          const viewportOffset = actionButton.getBoundingClientRect();
          const top = viewportOffset.top;
          const left = viewportOffset.left;

          actionPopover?.style.setProperty('display', 'block');
          actionPopover?.style.setProperty('top', top + 'px');
          actionPopover?.style.setProperty('left', left - 100 + 'px');
        });

        document.addEventListener('scroll', () => {
          actionPopover?.style.setProperty('display', 'none');
        });
      }
    }

    // Make sure slotted buttons and links have correct button classes
    this.querySelectorAll<HTMLElement>('[slot="btns"]').forEach((button) => {
      button.classList.add('btn');
      button.classList.add('btn-action');
    });

    // Hide the default hover and focus states when interacting with the checkbox, dialog wrapper or secondary button
    const preventHoverElement = this.querySelector<HTMLElement>('[slot="checkbox"],[slot="secondary"]');

    if (preventHoverElement) {
      preventHoverElement.addEventListener('mouseenter', () => {
        this.classList.add('prevent-hover');
      });

      preventHoverElement.addEventListener('mouseleave', () => {
        this.classList.remove('prevent-hover');
      });
    }

    const menuWrapper = shadowRoot.querySelector<HTMLElement>('.menu__wrapper');

    if (menuWrapper) {
      menuWrapper.addEventListener('mouseenter', () => {
        this.classList.add('prevent-hover');
      });

      menuWrapper.addEventListener('mouseleave', () => {
        this.classList.remove('prevent-hover');
      });
    }

    // Dispatch events of selecting checkboxes
    const checkbox = this.querySelector<HTMLInputElement>('input[type="checkbox"]');
    if (checkbox) {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          const customEvent = new CustomEvent<CardSelectionDetail>('select-card', {
            detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') },
          });
          this.dispatchEvent(customEvent);
        } else {
          const customEvent = new CustomEvent<CardSelectionDetail>('unselect-card', {
            detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') },
          });
          this.dispatchEvent(customEvent);
        }
      });
    }

    // Dispatch events of click onto secondary buttons
    const secondaryBtn = this.querySelector<HTMLElement>('[slot="secondary"]');
    if (secondaryBtn) {
      secondaryBtn.addEventListener('click', () => {
        const customEvent = new CustomEvent<CardButtonDetail>('secondary-button-clicked', {
          detail: { Title: secondaryBtn.getAttribute('title') },
        });
        this.dispatchEvent(customEvent);
      });
    }

    // Dispatch events of click onto action buttons
    this.querySelectorAll<HTMLElement>('[slot="btns"]').forEach((button) => {
      button.addEventListener('click', () => {
        const customEvent = new CustomEvent<CardButtonDetail>('action-button-clicked', {
          detail: { Title: button.getAttribute('title') },
        });
        this.dispatchEvent(customEvent);
      });
    });

    if (this.querySelector('[slot="link"]')) this.classList.add('hasLink');

    trackComponent(this, 'iam-card', [
      'select-card',
      'unselect-card',
      'secondary-button-clicked',
      'action-button-clicked',
    ]);
  }

  static get observedAttributes(): string[] {
    return ['data-image'];
  }

  attributeChangedCallback(attrName: string, oldVal: string | null, newVal: string | null): void {
    const shadowRoot = this.shadowRoot;

    if (!shadowRoot) return;

    switch (attrName) {
      case 'data-total': {
        const cardTotal = shadowRoot.querySelector<HTMLDivElement>('.card__total');

        if (cardTotal) cardTotal.innerHTML = newVal || '';
        break;
      }
      case 'data-image': {
        if (oldVal != newVal) {
          const cardHeadImg = shadowRoot.querySelector<HTMLImageElement>('.card__head img');

          if (cardHeadImg) cardHeadImg.setAttribute('src', newVal || '');
        }
        break;
      }
    }
  }
}

export default iamCard;
