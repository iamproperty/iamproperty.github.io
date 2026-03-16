import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-rating');

class iamRating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/rating.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>

    ${loadCSS}
    </style>
    <div class="wrapper">
      <input name="rating-component" type="range" />
    </div>
    <slot></slot>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    const wrapper = this.shadowRoot?.querySelector('.wrapper');
    const rating = this.shadowRoot?.querySelector('input');
    const input = this.querySelector('input[type="number"],input[type="range"],select');

    if(!input)
      return false;

    wrapper?.classList.add('show');
    input?.classList.add('visually-hidden');
    input?.setAttribute('tabindex',"-1");

    rating?.setAttribute('min', input?.hasAttribute('min') ? input?.getAttribute('min') : '0');
    rating?.setAttribute('max', input?.hasAttribute('max') ? input?.getAttribute('max') : '5');
    rating?.setAttribute('step', input?.hasAttribute('step') ? input?.getAttribute('step') : '1');

    if(input?.hasAttribute('disabled')){
      rating?.setAttribute('disabled', 'disabled');
    }
    
    rating.value = input.value ? input.value : rating?.getAttribute('min');

    rating?.addEventListener('input', () => {

      input.value = rating.value;

      const changeEvent = new Event('change');
      input.dispatchEvent(changeEvent);
      const inputEvent = new Event('input');
      input.dispatchEvent(inputEvent);
    });

    input?.addEventListener('input', () => {

      rating.value = input.value;
    });

    /* Watch for any changes to the inputs attributes */
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if(mutation.type == "attributes"){
          rating?.setAttribute(mutation.attributeName, input?.getAttribute(mutation.attributeName));
        }
      });
    });

    observer.observe(input, {
      attributes: true,
      childList: false,
      subtree: false,
    });


  }
}

export default iamRating;
