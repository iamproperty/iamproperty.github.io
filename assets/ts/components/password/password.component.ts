import { trackComponentRegistered } from '../_global';
import hibpCheck from '../../vendor/hibp.js';

trackComponentRegistered('iam-password');

class iamPassword extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/password.component.css";`;


    const template = document.createElement('template');
    template.innerHTML = `
      <style>
      ${loadCSS}
      </style>
      <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous">
      <div class="wrapper">
        <slot></slot>
        <button type="button" class="suffix fa-solid fa-eye-slash" data-alt-class="suffix fa-solid fa-eye" aria-hidden="true"><span class="visually-hidden">Show password</span></button>
      </div>
      <span class="pwd-checker"></span>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

  
    const input = this.querySelector('input');

    const buttonEle = this.shadowRoot.querySelector('button')
    const pwdChecker = this.shadowRoot?.querySelector('.pwd-checker')

    // Switch icon and input type
    buttonEle.addEventListener('click', (event) => {
      const currentType = input.type;

      const newType = currentType === 'password' ? 'text' : 'password';
      const isPasswordType = currentType === 'password';

      input.setAttribute('type', newType);
      input.setAttribute('data-password-type', isPasswordType);

      if (buttonEle.hasAttribute('data-alt-class')) {
        const newClass = buttonEle.getAttribute('data-alt-class');
        buttonEle.setAttribute('data-alt-class', buttonEle.getAttribute('class'));
        buttonEle.setAttribute('class', newClass);
      }
    });


    
    input.addEventListener('input', (event) => {
    

      const password = input.value;
      const minChars = input.hasAttribute('minlength') ? input.getAttribute('minlength') : 12;

      let strength = 1;
      const strengthName = ['Very weak', 'Weak', 'Average', 'Strong', 'Very strong'];
      let extraMsg = '';

      //has number
      if (password.match(/(?=.*[0-9])/)) strength += 1;
      // has special character
      if (password.match(/(?=.*[!,%,&,#,$,^,*,?,_,~,<,>,])/)) strength += 1;
      // has lowercase alpha
      if (password.match(/(?=.*[a-z])/)) strength += 1;
      // has uppercase alpha
      if (password.match(/(?=.*[A-Z])/)) strength += 1;

      if (password.length < minChars) {
        strength = 1;
        extraMsg = `(must be at least ${minChars} characters.)`;
      }

      // if the strength is above weak and above the minimum length do some kind of api call to check if its in a list of passwords

      if (strength >= 3) {
        hibpCheck(password, input);

        input.addEventListener('hibpCheck', function (event) {
          checkhibpCheck(event, input);
        });

        function checkhibpCheck(event, input): void {
          console.log(event.detail);
          if (event.detail) {
            // found
            strength = 3;
            extraMsg = `(this password is very common)`;
            
            pwdChecker.innerHTML = `Password strength: ${strengthName[strength - 1]} ${extraMsg}`;
          } 

          input.removeEventListener('hibpCheck', checkhibpCheck); // Succeeds
        } 
      }
      
      if (strength <= 3) pwdChecker.classList.add('invalid-feedback');
      else pwdChecker.classList.remove('invalid-feedback');

      pwdChecker.setAttribute('data-strength', strength);
      pwdChecker.innerHTML = `Password strength: ${strengthName[strength - 1]} ${extraMsg}`;
      
    });
    
  }
}

export default iamPassword;
