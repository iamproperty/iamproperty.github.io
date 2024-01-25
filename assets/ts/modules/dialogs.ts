// @ts-nocheck
import { createEmbed } from "./youtubevideo"; 

const extendDialogs = (body) => {

  Array.from(body.querySelectorAll('dialog[open]')).forEach((dialog, index) => {

    let parent = dialog.closest('.dialog__wrapper');

    if(!parent){
        
      dialog.removeAttribute('open');
      dialog.showModal();
      dialog.focus();

      createDialog(dialog);
    }
  });

  // Dialogs/modals
  body.addEventListener('click', (event) => {

    if(event.target.tagName == 'IAM-ACTIONBAR')
      return false;

    // Modal
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-modal]')){

      const button = event.target.closest('[data-modal]');
      const modalID = button.hasAttribute('data-modal') ? button.getAttribute('data-modal') : button.getAttribute('data-filter');
      const dialog = document.querySelector(`dialog#${modalID}`);
      
      createDialog(dialog);

      // Open the modal!
      dialog.showModal();
      dialog.focus();

      let firstWidth = dialog.offsetWidth;
      dialog.setAttribute('style',`max-width: ${firstWidth}px;`);

      // When the modal is opened we want to make sure any duplicate checkboxes are matching the originals
      Array.from(dialog.querySelectorAll('[data-duplicate]')).forEach((element,index) => {
        
        const id = element.getAttribute('data-duplicate');
        const originalInput = document.getElementById(id);

        if(element.checked != originalInput.checked){

          element.checked = originalInput.checked;
          let changeEvent = new Event('change');
          element.dispatchEvent(changeEvent);
        }
      });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "event": "openModal",
        "id": modalID
      });
    };
  
    // Close modal
    if (event && event.target instanceof HTMLElement && event.target.closest('button.dialog__close')){
      const dialog = event.target.closest('dialog[open]');

      event.preventDefault();
      dialog.close()
      
      // Remove active class from exiting active buttons
      Array.from(document.querySelectorAll('.dialog__wrapper > button')).forEach((btnElement,index) => {
        btnElement.classList.remove('active');
      });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "event": "closeModal",
        "id": dialog.getAttribute('id')
      });
    }

    // Track default close buttons
    if (event && event.target instanceof HTMLElement && event.target.closest('button[formmethod="dialog"]')){
      const dialog = event.target.closest('dialog[open]');

      // Remove active class from exiting active buttons
      Array.from(document.querySelectorAll('.dialog__wrapper > button')).forEach((btnElement,index) => {
        btnElement.classList.remove('active');
      });
      
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "event": "closeModal",
        "id": dialog.getAttribute('id')
      });
    }
    
    // Close the modal when clicked on the backdrop
    if (event && event.target instanceof HTMLElement && event.target.closest('dialog[open]')){
      let dialog = event.target.closest('dialog[open]');

      // Small fix to make sure the dialog isn't a dialog inside of a dialog.
      var style = window.getComputedStyle(dialog);
      if(style.display === 'contents')
        dialog = dialog.parentNode.closest('dialog[open]');
      
      // Dont allow the backdrop to be clicked when transactional
      if(!dialog.classList.contains('dialog--transactional') && !dialog.classList.contains('dialog--acknowledgement')){

        const dialogDimensions = dialog.getBoundingClientRect()

        if (event.clientX < dialogDimensions.left || event.clientX > dialogDimensions.right || event.clientY < dialogDimensions.top || event.clientY > dialogDimensions.bottom) {

          if(!event.target.closest('input[type="radio"]')) // Weird bug when interacting with radio input fields within dialogs cuases it to close
            dialog.close()
          
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            "event": "closeModal",
            "id": dialog.getAttribute('id')
          });
        }
      }
    }

    // Popover
    if (event && event.target instanceof HTMLElement && event.target.closest('.dialog__wrapper > button')){

      
    event.stopPropagation();

      let btn = event.target.closest('.dialog__wrapper > button');
      let parent = event.target.closest('.dialog__wrapper > button').parentNode;
      let dataEvent = "openPopover"
      let popover = parent.querySelector(':scope > dialog');
      
      if(document.querySelector('*:not([data-keep-open]) > dialog[open]') && document.querySelector('*:not([data-keep-open]) > dialog[open]') != popover)
        document.querySelector('*:not([data-keep-open]) > dialog[open]').close();

      // Remove active class from exiting active buttons
      Array.from(document.querySelectorAll('.dialog__wrapper > button')).forEach((btnElement,index) => {
        btnElement.removeAttribute('aria-expanded');
      });

      if(popover.hasAttribute('open')){
        
        popover.close();
        dataEvent = "closePopover"

        popover.removeAttribute('style');
        btn.removeAttribute('aria-expanded');
      }
      else {
        
        popover.show();
        btn.setAttribute('aria-expanded', true);

        var position = btn.getBoundingClientRect();
        let topOffset = position.top;
        let leftOffset = position.left;

        if(btn.closest('iam-table')){

          let container = btn.closest('iam-table').parentNode.getBoundingClientRect();

          topOffset -= container.top;
          leftOffset -= container.left;
        }

        if(popover.classList.contains('dialog--fix')){
          popover.setAttribute('style',`position:fixed;top: ${topOffset}px; left: ${leftOffset}px; margin: 3rem 0 0 0;`)
        }
      }
      
      // When the dialog is fixed it could dip under the viewport
      // Lets check the dimensions and transform it to appear above
      let boundingRec = popover.getBoundingClientRect();
      let popoverBottom = boundingRec.bottom - window.scrollY;
      let windowPos = window.innerHeight - window.scrollY;
      if(popoverBottom > windowPos){

        let currentStyle = popover.hasAttribute('style') ? popover.getAttribute('style')+' ' : '';
        popover.setAttribute('style',currentStyle+`transform: translate(0, calc(-100% - 4rem))`);

        // Check that the dialog doesn't go over the top of the page
        boundingRec = popover.getBoundingClientRect();
        let popoverTop = boundingRec.top - window.scrollY;

        if(popoverTop < 100)
          popover.removeAttribute('style');
      }

      window.dataLayer = window.dataLayer || [];
      
      window.dataLayer.push({
        "event": dataEvent,
        "id": btn.textContent
      });
    };

    // Close popovers when clicked away
    if (event && event.target instanceof HTMLElement && !event.target.closest('dialog[open]') && !event.target.closest('.dialog__wrapper > button')){
      
      if(document.querySelector('.dialog__wrapper:not([data-keep-open]) > dialog[open]'))
        document.querySelector('.dialog__wrapper:not([data-keep-open]) > dialog[open]').close();

      Array.from(document.querySelectorAll('.dialog__wrapper:not([data-keep-open]) > button')).forEach((btnElement,index) => {
        btnElement.removeAttribute('aria-expanded');
      });
    }
  });

  return null
}

export const createDialog = (dialog) => { 

  // Create the video embed
  let videoButton = dialog.querySelector('.youtube-embed a');
  if (videoButton){
    createEmbed(videoButton)
  }

  // Multi dialog
  if(dialog.classList.contains('dialog--multi') && !dialog.querySelector(':scope > .steps')) {
    createMultiFormDialog(dialog);
  }

  // If you are using Vue eevents and bindings its recommended to add in the .mh-lg div manually to the dialog
  if(!dialog.querySelector(':scope > .mh-lg') && !dialog.classList.contains('dialog--multi')){
    dialog.innerHTML = `<div class="mh-lg">${dialog.innerHTML}</div>`;

    let dialogContent = dialog.querySelector('.mh-lg');
    let titleElement = dialog.querySelector('.mh-lg :is(.h1,.h2,.h3,.h4,.h5,.h6)');

    if(titleElement){
        
      let optionalElement = titleElement.previousSibling;

      dialogContent.before(titleElement);
      
      if(optionalElement)
        titleElement.before(optionalElement);
    }
  }

  // Create close button is needed
  if(!dialog.querySelector(':scope > button:first-child'))
    dialog.insertAdjacentHTML('afterbegin', `<button class="dialog__close">Close</button>`);

}

export const createMultiFormDialog = (dialog) => {

  let buttons = "";
  let fieldsets = Array.from(dialog.querySelectorAll('fieldset[data-title]'));
  let form = dialog.querySelector('form');

  fieldsets.forEach((fieldset,index) => {
    buttons += `<button data-title="${fieldset.getAttribute('data-title')}" type="button" class="${index == 0 ? "active":""}" tabindex="-1">${fieldset.getAttribute('data-title')}</button>`;

    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add('btn--wrapper');
    fieldset.appendChild(btnWrapper);
    
    if(index != 0)
      btnWrapper.innerHTML += `<button data-title="${fieldsets[index-1].getAttribute('data-title')}" class="btn btn-secondary mb-0" data-previous type="button">Previous</button>`;

    if(index != fieldsets.length - 1)
      btnWrapper.innerHTML += `<button data-title="${fieldsets[index+1].getAttribute('data-title')}" class="btn btn-primary mb-0" data-next type="button">Next</button>`;

    // Last fieldset
    if(index == fieldsets.length - 1){
      if(form && form.querySelector(':scope > button[type="submit"]')){

        let existingButton = form.querySelector(':scope > button[type="submit"]');
        existingButton.classList.add('mb-0')

        btnWrapper.insertAdjacentElement('beforeend',existingButton);
      }
      else
        btnWrapper.innerHTML += `<button data-title="${fieldsets[index].getAttribute('data-title')}" class="btn btn-primary mb-0" data-next type="submit">Submit</button>`;
    }  
  });

  dialog.insertAdjacentHTML('afterbegin',`<div class="steps bg-primary">${buttons}</div>`);


  // Open the fieldset with an error inside
  let validatedFieldsets = Array.from(dialog.querySelectorAll('fieldset.was-validated'));
  for (let i = 0; i < validatedFieldsets.length; i++) {

    let fieldset = validatedFieldsets[i];
    let fieldsetID = fieldset.getAttribute('data-title');
    
    if(fieldset.querySelector('.is-invalid')){

      Array.from(dialog.querySelectorAll(`[data-title="${fieldsetID}"]`)).forEach((element, index) => {

        element.classList.add('active');
      });

      break;
    }
    else {

      Array.from(dialog.querySelectorAll(`[data-title="${fieldsetID}"]`)).forEach((element, index) => {

        element.classList.add('valid');
      });
    }
  }

  // Prevent the bubble messages
  dialog.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
    };
  })(), true);


  function validateFieldset(button){

    const currentFieldset = dialog.querySelector(`fieldset.active`) ? dialog.querySelector(`fieldset.active`) : dialog.querySelector(`fieldset[data-title]`);
    const currentFieldsetID = currentFieldset.getAttribute('data-title');
    let isFieldsetValid = true;

    currentFieldset.classList.add('was-validated');

    Array.from(currentFieldset.querySelectorAll('input')).forEach((input, index) => {

      if (!input.checkValidity())
        isFieldsetValid = false;
    });

    // If valid mode to next field set
    if(!isFieldsetValid){

      Array.from(dialog.querySelectorAll(`[data-title="${currentFieldsetID}"]`)).forEach((element, index) => {

        element.classList.remove('valid');
      });
    }
    else {

      Array.from(dialog.querySelectorAll(`[data-title="${currentFieldsetID}"]`)).forEach((element, index) => {

        element.classList.add('valid');
      });
    }

    // Allow the previous button to navigate
    if(isFieldsetValid || !button.hasAttribute('data-next')){

      const fieldset = dialog.querySelector(`fieldset[data-title="${button.getAttribute('data-title')}"]`);
      const step = dialog.querySelector(`.steps button[data-title="${button.getAttribute('data-title')}"]`);

      Array.from(dialog.querySelectorAll('button')).forEach((button, index) => {
        button.classList.remove('active');
      });
      Array.from(dialog.querySelectorAll('fieldset')).forEach((button, index) => {
        button.classList.remove('active');
      });

      step.classList.add('active');
      fieldset.classList.add('active');
    }


    let fieldsetCount = Array.from(dialog.querySelectorAll(`fieldset`)).length;
    let validFieldsetCount = Array.from(dialog.querySelectorAll(`fieldset.valid`)).length;

    // update the progress bar
    dialog.style.setProperty('--progress', `${(validFieldsetCount/(fieldsetCount - 1) * 100)}%`);
  }

  // remove error messages from server
  dialog.addEventListener('keydown', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('button')){

      const button = event.target.closest('button');

      if(event.keyCode == 13 && button.getAttribute('type') != "submit"){
        
        event.preventDefault();
        validateFieldset(button);
      }

    }

    if (event && event.target instanceof HTMLElement && event.target.closest('input')){
      const input = event.target.closest('input');

      input.classList.remove('is-invalid');

      if(event.keyCode == 13){
        
        event.preventDefault();
      }
    }
  });


  dialog.addEventListener('click', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('button[type="submit"]')){
      
      const form = event.target.closest('form');
      form.classList.add('was-validated');
    }
    else if (event && event.target instanceof HTMLElement && event.target.closest('button[data-title]')){

      const button = event.target.closest('button[data-title]');
      validateFieldset(button);
    };
    return null
  });
}

export default extendDialogs;