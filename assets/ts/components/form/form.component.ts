import { trackComponent, trackComponentRegistered } from '../_global';
import { searchAjax, filterList, setTag } from '../../modules/dropdown';

trackComponentRegistered('iam-tag');

class iamForm extends HTMLElement {
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

  checkConditions = (conditions):boolean => {

    let meetsCondition = true;

    JSON.parse(conditions).forEach((condition) => {
      if(this.querySelector(`#${condition['if']}`).value != condition['equals'])
        meetsCondition = false;
    });

    return meetsCondition;
  }

  showIf = ():void => {

    Array.from(this.querySelectorAll('[data-show-if]')).forEach((element) => {

      if(!this.checkConditions(element.getAttribute('data-show-if')))
        element.classList.add('d-none');
      else 
        element.classList.remove('d-none');

    });
  }

  hideIf = ():void => {

    Array.from(this.querySelectorAll('[data-hide-if]')).forEach((element) => {

      if(this.checkConditions(element.getAttribute('data-hide-if')))
        element.classList.add('d-none');
      else 
        element.classList.remove('d-none');

    });
  }

  disabledIf = ():void => {

    Array.from(this.querySelectorAll('[data-disabled-if]')).forEach((element) => {

      if(this.checkConditions(element.getAttribute('data-disabled-if')))
        element.setAttribute('disabled','disabled');
      else 
        element.removeAttribute('disabled');

    });
  }

  enabledIf = ():void => {

    Array.from(this.querySelectorAll('[data-enabled-if]')).forEach((element) => {

      if(!this.checkConditions(element.getAttribute('data-enabled-if')))
        element.setAttribute('disabled','disabled');
      else 
        element.removeAttribute('disabled');

    });
  }

  requiredIf = ():void => {

    Array.from(this.querySelectorAll('[data-required-if]')).forEach((element) => {

      if(this.checkConditions(element.getAttribute('data-required-if')))
        element.setAttribute('required','required');
      else
        element.removeAttribute('required');

    });
  }

  readonlyIf = ():void => {

    Array.from(this.querySelectorAll('[data-readonly-if]')).forEach((element) => {

      if(this.checkConditions(element.getAttribute('data-readonly-if')))
        element.setAttribute('readonly','readonly');
      else
        element.removeAttribute('readonly');

    });
  }

  connectedCallback(): void {

    const form = this.querySelector('form');

    if(!form)
      return false;

    form.setAttribute('novalidate','true');

    // Form validation
    form.addEventListener('submit', (e) => {

      form.classList.add('was-validated');

      if (!this.isFormValid(form)) {

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

    this.showIf();
    this.hideIf();
    this.disabledIf();
    this.enabledIf();
    this.requiredIf();
    this.readonlyIf();
    

    form.addEventListener('change', () => {

      this.showIf();
      this.hideIf();
      this.disabledIf();
      this.enabledIf();
      this.requiredIf();
      this.readonlyIf();

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

export default iamForm;
