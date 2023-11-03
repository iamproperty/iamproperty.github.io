// @ts-nocheck
const extendInputs = (body) => {

  document.addEventListener("load", function() {

    // maxlength counter init
    Array.from(document.querySelectorAll('input')).forEach((input,index) => {
      let wrapper = input.parentElement;
      setMaxlengthVars(input,wrapper);
    });
  });

  body.addEventListener('input', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('input,textarea,select')){

      const input = event.target.closest('input,textarea,select');
      const wrapper = input.parentElement;

      // Output the color hex
      if(input.hasAttribute('type') && input.getAttribute('type') == 'color')
        input.nextElementSibling.value = input.value;

      if(input.hasAttribute('maxlength') && input.nextElementSibling)
        input.nextElementSibling.setAttribute("data-count", input.value.length);
    }
  });

  body.addEventListener('change', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('select')){

      const select = event.target.closest('select');


      if(select.hasAttribute('data-change-type') && select.hasAttribute('data-input')){

        const input = document.getElementById(select.getAttribute('data-input'));
        const newType = select.value;
        changeType(input,newType);
      }
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('dialog [type="radio"]')){

      const dialog = event.target.closest('dialog');
      const radio = event.target.closest('dialog [type="radio"]');

      Array.from(dialog.querySelectorAll('[type="radio"][autofocus]')).forEach((input,index) => {
        input.removeAttribute('autofocus');
      });

      Array.from(dialog.querySelectorAll('[type="radio"]:checked')).forEach((input,index) => {
        input.setAttribute('autofocus',true);
      });
    }
  });

  body.addEventListener('click', (event) => {

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-change-type][data-input]:not(select)')){

      const button = event.target.closest('[data-change-type]');
      const input = document.getElementById(button.getAttribute('data-input'));
      const newType = button.getAttribute('data-change-type');
      button.setAttribute('data-change-type',input.getAttribute('type'));

      changeType(input,newType);

      if(button.hasAttribute('data-alt-class')){
        const newClass = button.getAttribute('data-alt-class');
        button.setAttribute('data-alt-class',button.getAttribute('class'));
        button.setAttribute('class',newClass);
      }
    }
  });
}

export const setMaxlengthVars = (input) => {
  let wrapper = input.parentElement;
  let maxlength = input.getAttribute('maxlength')
  
  wrapper.style.setProperty("--maxlength", maxlength);


  let span = input.nextElementSibling;

  if(!span || (span && span.classList.contains('invalid-feedback'))){

    span = document.createElement('span');
    wrapper.insertBefore(span, input.nextSibling);
  }

  span.setAttribute('data-count',input.value.length);
}

export const changeType = (input,type) => {

  input.setAttribute('type',type);
}

export default extendInputs;