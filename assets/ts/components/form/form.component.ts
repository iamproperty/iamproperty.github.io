import { trackComponentRegistered } from '../_global';
import {
  isFormValid,
  showIf,
  hideIf,
  disabledIf,
  enabledIf,
  requiredIf,
  readonlyIf,
  writeIf,
  emptyIf,
  limitCheckboxes
} from '../../modules/form';

trackComponentRegistered('iam-form');

class iamForm extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
    <div class="wrapper">
      <slot></slot>
    </div>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    const form = this.querySelector<HTMLFormElement>('form');

    if(!form)
      return;

    form.setAttribute('novalidate','true');

    // Form validation
    form.addEventListener('submit', (event) => {

      form.classList.add('was-validated');

      if (!isFormValid(form)) {

        event.preventDefault();
        form.querySelector<HTMLInputElement>('input:invalid')?.scrollIntoView();
      }
    });

    // conditional reveal required fields
    form.querySelectorAll<HTMLElement>('.conditional [required]').forEach((input) => {

      input.setAttribute('data-conditional-required','true');
      input.removeAttribute('required');
    });

    // conditional reveal required fields (for fields inside of components like the address lookup)
    form.querySelectorAll<HTMLElement>('.conditional [data-required]').forEach((input) => {

      input.setAttribute('data-conditional-data-required','true');
      input.removeAttribute('data-required');
    });

    showIf(this);
    hideIf(this);
    disabledIf(this);
    enabledIf(this);
    requiredIf(this);
    readonlyIf(this);
    writeIf(this);
    emptyIf(this);
    limitCheckboxes(null, this);

    form.addEventListener('change', (event) => {

      showIf(this);
      hideIf(this);
      disabledIf(this);
      enabledIf(this);
      requiredIf(this);
      readonlyIf(this);
      writeIf(this);
      emptyIf(this);
      limitCheckboxes(event, form);

      form.querySelectorAll<HTMLElement>('.conditional [data-conditional-required], .conditional [data-conditional-data-required]').forEach((input) => {

        input.removeAttribute('required');
        input.removeAttribute('data-required');
      });


      form.querySelectorAll<HTMLElement>('.conditional [data-conditional-required]').forEach((input) => {

        const conditionalElement = input.closest<HTMLElement>('.conditional');
        if(!conditionalElement) return;

        const conditionalStyles = window.getComputedStyle(conditionalElement);

        if(conditionalStyles.getPropertyValue("display") == 'block')
          input.setAttribute('required', 'required');
      });

      form.querySelectorAll<HTMLElement>('.conditional [data-conditional-data-required]').forEach((input) => {

        const conditionalElement = input.closest<HTMLElement>('.conditional');
        if(!conditionalElement) return;

        const conditionalStyles = window.getComputedStyle(conditionalElement);

        if(conditionalStyles.getPropertyValue("display") == 'block')
          input.setAttribute('data-required', 'true');
      });
    });
  }
}

export default iamForm;
