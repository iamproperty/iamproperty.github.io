// @ts-nocheck
import { createEmbed } from "./youtubevideo"; 

/** 
 * Global helper functions to help maintain and enhance framework elements.
 * @module Helpers 
 */

/**
 * Add global classes used by the CSS and later JavaScript.
 * @param {HTMLElement} body Dom element, this doesn't have to be the body but it is recommended.
 */
export const addBodyClasses = (body) => {
  
  body.classList.add("js-enabled");

  if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
    
    body.classList.add("ie");
  }

  return null
}

/**
 * Add global events.
 * @param {HTMLElement} body Dom element, this doesn't have to be the body but it is recommended.
 */
export const addGlobalEvents = (body) => {
  
  const checkElements = function(hash){

    const label = document.querySelector(`label[for="${hash.replace('#','')}"]`);
    const summary = document.querySelector(hash+' summary');
    const dialog = document.querySelector(`dialog${hash}`);

    if(label instanceof HTMLElement)
      label.click();
    else if(summary instanceof HTMLElement)
      summary.click();
    else if(dialog instanceof HTMLElement)
      dialog.showModal();
  }

  if(location.hash)
    checkElements(location.hash);

  window.addEventListener('hashchange', function() { checkElements(location.hash); }, false);

  addEventListener("popstate", (event) => {

    if(event.state.type == "pagination"){
      let form = document.querySelector(`#${event.state.form}`);
      let pageInput = document.querySelector(`#${event.state.form} [data-pagination]`);
      
      if(pageInput)
        pageInput.value = event.state.page;
      else
        form.innerHTML += `<input name="page" type="hidden" data-pagination="true" value="${event.state.page}" />`
      
      form.dispatchEvent(new Event("submit"));
    }
  });

  // Dialogs/modals
  document.addEventListener('click', (event) => {

    // Modal
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-modal]')){

      const button = event.target.closest('[data-modal]');
      const modalID = button.hasAttribute('data-modal') ? button.getAttribute('data-modal') : button.getAttribute('data-filter');
      const dialog = document.querySelector(`dialog#${modalID}`);
      
      // Create close button is needed
      dialog.innerHTML = `<button class="dialog__close">Close</button>${dialog.innerHTML}`;
      
      let videoButton = dialog.querySelector('.youtube-embed a');

      if (videoButton){
        createEmbed(videoButton)
      }

      dialog.showModal();

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
        
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "event": "closeModal",
        "id": dialog.getAttribute('id')
      });
    }
    
    if (event && event.target instanceof HTMLElement && event.target.closest('dialog[open]')){
      const dialog = event.target.closest('dialog[open]');
      const dialogDimensions = dialog.getBoundingClientRect()
      if (event.clientX < dialogDimensions.left || event.clientX > dialogDimensions.right || event.clientY < dialogDimensions.top || event.clientY > dialogDimensions.bottom) {
        dialog.close()
        
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          "event": "closeModal",
          "id": dialog.getAttribute('id')
        });
      }
    }

    // Popover
    if (event && event.target instanceof HTMLElement && event.target.closest('.dialog__wrapper > button')){

      // Close existing open popover

      let btn = event.target.closest('.dialog__wrapper > button');
      let parent = event.target.closest('.dialog__wrapper > button').parentNode;
      let dataEvent = "openPopover"
      let popover = parent.querySelector(':scope > dialog');
      

      if(document.querySelector('dialog[open]') && document.querySelector('dialog[open]') != popover)
        document.querySelector('dialog[open]').close();


      if(popover.hasAttribute('open')){
        
        popover.close();
        dataEvent = "closePopover"

        popover.removeAttribute('style');
      }
      else {
        popover.show();

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
        

      window.dataLayer = window.dataLayer || [];
      
      window.dataLayer.push({
        "event": dataEvent,
        "id": btn.textContent
      });
    };
  });

  return null
}

export const isNumeric = function(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export const zeroPad = (num, places) => String(num).padStart(places, '0')

export const ucfirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)
export const ucwords = (str) => str.split(' ').map(s => ucfirst(s)).join(' ')
export const unsnake = (str) => str.replace(/_/g, ' ')
export const snake = (str) => str.replace(/ /g, '_')
export const safeID = function(str){

  str = str.toLowerCase();
  str = snake(str);
  str = str.replace(/\W/g,'');

  return str;
}