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


const passwordIndicator = function (element: Element): void {
  changeType(element)
};

export default passwordIndicator;

