import hibpCheck from '../vendor/hibp.js';

export const changeType = function (element: Element): void {
    const buttonEle = element.querySelector('button')
    const associatedInput = element?.parentNode?.querySelector('input');

    element.addEventListener('click', (event) => {
      const currentType = associatedInput.type;

      const newType = currentType === 'password' ? 'text' : 'password';
      const isPasswordType = currentType === 'password';

      associatedInput.setAttribute('type', newType);
      associatedInput.setAttribute('data-password-type', isPasswordType);

      if (element.hasAttribute('data-alt-class')) {
        const newClass = element.getAttribute('data-alt-class');
        element.setAttribute('data-alt-class', buttonEle.getAttribute('class'));
        buttonEle.setAttribute('class', newClass);
      }
    
    });
}


export const checkPWDStrength = (input, check = 'no'): void => {
  const pwdChecker = document.getElementById(input.getAttribute('data-strength-checker'));
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

  if (strength >= 3 && check == 'no') {
    hibpCheck(password, input);

    input.addEventListener('hibpCheck', function (event) {
      checkhibpCheck(event, input);
    });

    function checkhibpCheck(event, input): void {
      if (event.detail) {
        // found
        checkPWDStrength(input, 'danger');
      } else {
        // not found
        checkPWDStrength(input, 'success');
      }

      input.removeEventListener('hibpCheck', checkhibpCheck); // Succeeds
    }
  } else if (strength >= 3 && check == 'danger') {
    strength = 3;
    extraMsg = `(this password is very common)`;
  }

  if (pwdChecker) {
    if (strength <= 3) pwdChecker.classList.add('invalid-feedback');
    else pwdChecker.classList.remove('invalid-feedback');

    pwdChecker.setAttribute('data-strength', strength);
    pwdChecker.innerHTML = `Password strength: ${strengthName[strength - 1]} ${extraMsg}`;
  }
};

