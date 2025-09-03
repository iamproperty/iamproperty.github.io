import { trackComponent, trackComponentRegistered } from '../_global';


trackComponentRegistered('iam-word-count');

class iamCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/word-count.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>

    ${loadCSS}
    </style>
    <slot></slot>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    const input = this.querySelector('input,textarea,select');
    let span = this.querySelector('[data-count]');

    if (!span) {
      span = document.createElement('span');
      this.append(span);
    }

    console.log(input.value.split(' ').length);

    if(this.hasAttribute('data-character'))
      span.setAttribute('data-count', input.value ? input.value.length : '0');
    else
      span.setAttribute('data-count', input.value ? input.value.split(' ').length : '0');
      


    const maxlength = this.getAttribute('data-max');
    this.style.setProperty('--maxlength', maxlength);
    span.setAttribute('data-max', this.getAttribute('data-max'));





    input.addEventListener('input', (event) => {
      
      if (this.hasAttribute('data-max') && span && this.hasAttribute('data-character')) {

        input?.setAttribute('maxlength', this.getAttribute('data-max'));
        span.setAttribute('data-count', input?.value.length);
      }
      else if (this.hasAttribute('data-max') && span) {

        if(input?.value.split(' ').length >= this.getAttribute('data-max')){
          event?.preventDefault();
          input?.setAttribute('maxlength', input?.value.length);
        }
        else {
          input?.removeAttribute('maxlength');
        }

        span.setAttribute('data-count', input?.value.split(' ').length);
        span.setAttribute('data-max', this.getAttribute('data-max'));
      }

    });


/*

    // maxlength counter init
    Array.from(document.querySelectorAll('input[maxlength],textarea[maxlength]')).forEach((input) => {
      const wrapper = input.parentElement;
      setMaxlengthVars(input, wrapper);
    });



const wrapper = input.parentElement;
  const maxlength = input.getAttribute('maxlength');

  wrapper.style.setProperty('--maxlength', maxlength);

  let span = input.nextElementSibling;

  if (!span || (span && span.classList.contains('invalid-feedback'))) {
    span = document.createElement('span');
    wrapper.insertBefore(span, input.nextSibling);
  }
 v
  span.setAttribute('data-count', input.value.length);


*/



  }

}

export default iamCard;
