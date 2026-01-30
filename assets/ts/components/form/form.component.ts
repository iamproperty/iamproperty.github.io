import { trackComponent, trackComponentRegistered } from '../_global';
import { searchAjax, filterList, setTag } from '../../modules/dropdown';

trackComponentRegistered('iam-tag');

class iamTag extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
    <div class="wrapper">
      <slot></slot>
    </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  isFormValid(form):boolean {

    if (form.querySelector(':invalid'))
      return false;

    if (form.querySelector('.pwd-checker[data-strength="1"]') || form.querySelector('.pwd-checker[data-strength="2"]'))
      return false;

    if (form.querySelector('iam-multiselect[data-is-required][data-error]'))
      return false;

    return true;
  };

  connectedCallback(): void {

    const form = this.querySelector('form');

    if(!form)
      return false;

    form.setAttribute('novalidate','true');

    // Form validation
    form.addEventListener('submit', (e) => {

      form.classList.add('was-validated');

      if (!this.isFormValid(form)) {

      console.log('hey2');

        e.preventDefault();
        form?.querySelector('input:invalid')?.scrollIntoView();
      }
    });


    // conditional reveal required fields
    Array.from(form.querySelectorAll('.conditional [required]')).forEach((input) => {

      input.setAttribute('data-conditional-required','true');
      input.removeAttribute('required');
    });

    // conditional reveal required fields (for fields inside of components like the address lookup)
    Array.from(form.querySelectorAll('.conditional [data-required]')).forEach((input) => {

      input.setAttribute('data-conditional-data-required','true');
      input.removeAttribute('data-required');
    });

    form.addEventListener('change', () => {


      Array.from(form.querySelectorAll('.conditional [data-conditional-required], .conditional [data-conditional-data-required]')).forEach((input) => {

        input.removeAttribute('required');
        input.removeAttribute('data-required');
      });


      Array.from(form.querySelectorAll('.conditional [data-conditional-required]')).forEach((input) => {

        const conditionalStyles = window.getComputedStyle(input.closest('.conditional'));

        if(conditionalStyles.getPropertyValue("display") == 'block')
          input.setAttribute('required', 'required');
      });

      Array.from(form.querySelectorAll('.conditional [data-conditional-data-required]')).forEach((input) => {

        const conditionalStyles = window.getComputedStyle(input.closest('.conditional'));

        if(conditionalStyles.getPropertyValue("display") == 'block')
          input.setAttribute('data-required', 'true');
      });
    });
  }
}

export default iamTag;
