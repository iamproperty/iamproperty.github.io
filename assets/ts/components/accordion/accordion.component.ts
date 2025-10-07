import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-accordion');

class iamAccordion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = /* HTML */ `
      <style>

        :host {
          margin-bottom: 2.5rem;
          display: block;
        }

        ::slotted(details) {
          --border-radius: 0 !important;
          padding-bottom: 0 !important;
        }
      </style>
      <slot></slot>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const accordionComponent = this;

    trackComponent(accordionComponent, 'iam-accordion', ['accordion-item-closed', 'accordion-item-opened']);

    const details: NodeListOf<HTMLElement> = this.querySelectorAll(':scope > details');

    if (!this.classList.contains('accordion--keep-open')) {
      // Add the toggle listeners.
      details.forEach((targetDetail) => {
        targetDetail.addEventListener('toggle', () => {
          // Close all the details that are not targetDetail.
          details.forEach((detail) => {
            if (detail !== targetDetail && targetDetail.hasAttribute('open')) {
              detail.removeAttribute('open');
            }
          });
        });
      });
    }

    // Fire tracking events
    details.forEach((targetDetail) => {
      const summaryEle = targetDetail.querySelector('summary');
      const summaryText = summaryEle?.innerText;

      targetDetail.addEventListener('toggle', () => {
        if (targetDetail?.hasAttribute('open')) {
          itemInteractionEvent('accordion-item-opened', summaryText);
        } else {
          itemInteractionEvent('accordion-item-closed', summaryText);
        }
      });
    });

    const itemInteractionEvent = function (eventName: string, itemSummary: string): void {
      const customEvent = new CustomEvent(eventName, {
        detail: {
          title: itemSummary,
        },
      });

      accordionComponent.dispatchEvent(customEvent);
    };
  }
}

export default iamAccordion;
