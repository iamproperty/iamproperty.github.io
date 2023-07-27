// @ts-nocheck
import { createEmbed } from "./youtubevideo"; 

const extendDialogs = (body) => {

  // Dialogs/modals
  body.addEventListener('click', (event) => {

    // Modal
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-modal]')){

      const button = event.target.closest('[data-modal]');
      const modalID = button.hasAttribute('data-modal') ? button.getAttribute('data-modal') : button.getAttribute('data-filter');
      const dialog = document.querySelector(`dialog#${modalID}`);
      
      createDialog(dialog);

      
      // Prevent the user from escaping the model when transactional
      if(dialog.querySelector(':scope > .mh-lg > form:last-child > button:last-child, :scope > .mh-lg > button:last-child') && !dialog.classList.contains('dialog--multi')) {
        dialog.addEventListener("cancel", (e) => {
          e.preventDefault();
        });        
      }

      // Create the video embed
      let videoButton = dialog.querySelector('.youtube-embed a');
      if (videoButton){
        createEmbed(videoButton)
      }

      // Open the modal!
      dialog.showModal();
      dialog.focus();

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
      const dialog = event.target.closest('dialog[open]');
      
      // Dont allow the backdrop to be clicked when transactional
      if(!dialog.querySelector(':scope > .mh-lg > form:last-child > button:last-child, :scope > .mh-lg > button:last-child') || dialog.classList.contains('dialog--multi')){

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

      let btn = event.target.closest('.dialog__wrapper > button');
      let parent = event.target.closest('.dialog__wrapper > button').parentNode;
      let dataEvent = "openPopover"
      let popover = parent.querySelector(':scope > dialog');
      
      if(document.querySelector('dialog[open]') && document.querySelector('dialog[open]') != popover)
        document.querySelector('dialog[open]').close();

      // Remove active class from exiting active buttons
      Array.from(document.querySelectorAll('.dialog__wrapper > button')).forEach((btnElement,index) => {
        btnElement.classList.remove('active');
      });

      if(popover.hasAttribute('open')){
        
        popover.close();
        dataEvent = "closePopover"

        popover.removeAttribute('style');
        btn.classList.remove('active');
      }
      else {
        
        popover.show();
        btn.classList.add('active');
      
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

        let currentStyle = popover.getAttribute('style');

        popover.setAttribute('style',currentStyle+`transform: translate(0, calc(-100% - 4rem))`);
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
        btnElement.classList.remove('active');
      });
    }
  });

  return null
}

export const createDialog = (dialog) => {

  // Multi dialog
  if(dialog.classList.contains('dialog--multi') && !dialog.querySelector(':scope > .steps')) {
    createMultiFormDialog(dialog);
  }

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
    dialog.innerHTML = `<button class="dialog__close">Close</button>${dialog.innerHTML}`;

}

const createMultiFormDialog = (dialog) => {
  let buttons = "";
  let fieldsets = Array.from(dialog.querySelectorAll('fieldset[data-title]'));
  fieldsets.forEach((fieldset,index) => {
    buttons += `<button data-title="${fieldset.getAttribute('data-title')}" type="button" class="${index == 0 ? "active":""}">${fieldset.getAttribute('data-title')}</button>`;

    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add('btn--wrapper');
    fieldset.appendChild(btnWrapper);
    

    if(index != 0)
      btnWrapper.innerHTML += `<button data-title="${fieldsets[index-1].getAttribute('data-title')}" class="btn btn-secondary mb-0" type="button">Previous</button>`;

    if(index != fieldsets.length - 1)
      btnWrapper.innerHTML += `<button data-title="${fieldsets[index+1].getAttribute('data-title')}" class="btn btn-primary mb-0" type="button">Next</button>`;

    if(index == fieldsets.length - 1)
      btnWrapper.innerHTML += `<button class="btn btn-primary mb-0">Submit</button>`;
  });

  dialog.innerHTML = `<div class="steps bg-primary">${buttons}</div>${dialog.innerHTML}`;


  dialog.addEventListener('click', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('button[data-title]')){
      const button = event.target.closest('button[data-title]');
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
    };
    return null
  });
}

export default extendDialogs;