import { trackComponent, trackComponentRegistered } from '../_global';
import { cardHTML, setupCard } from '../../modules/card.module';

trackComponentRegistered('iam-filter-card');

class iamFilerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/filter-card.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>
    ${cardHTML}
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const cardComponent = this;

    setupCard(cardComponent);

    // Dispatch events of selecting checkboxes
    const checkbox = cardComponent.parentElement.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          const customEvent = new CustomEvent('select-card', {
            detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') },
          });
          cardComponent.dispatchEvent(customEvent);
          cardComponent.classList.add('active');
        } else {
          const customEvent = new CustomEvent('unselect-card', {
            detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') },
          });
          cardComponent.dispatchEvent(customEvent);
          cardComponent.classList.remove('active');
        }
      });
    }

    if (cardComponent.parentElement.matches('button')) {
      const button = cardComponent.parentElement;

      button.addEventListener('click', () => {
        if (!cardComponent.classList.contains('active')) {
          const customEvent = new CustomEvent('select-card', {
            detail: { 'button name': button.getAttribute('name') },
          });
          cardComponent.dispatchEvent(customEvent);
          cardComponent.classList.add('active');
        } else {
          const customEvent = new CustomEvent('unselect-card', {
            detail: { 'button name': button.getAttribute('name') },
          });
          cardComponent.dispatchEvent(customEvent);
          cardComponent.classList.remove('active');
        }
      });
    }

    trackComponent(cardComponent, 'iam-filter-card', ['select-card', 'unselect-card']);
  }
}

export default iamFilerCard;
