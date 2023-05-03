// @ts-nocheck
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

  // Dialogs/modals
  document.addEventListener('click', (event) => {

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-modal]')){

      const button = event.target.closest('[data-modal]');
      const modalID = button.getAttribute('data-modal');
      const dialog = document.querySelector(`dialog#${modalID}`);
      
      // Create close button is needed
      if(!dialog.querySelector(':scope > form:first-child'))
        dialog.innerHTML = `<form><button class="dialog__close" formmethod="dialog">Close</button></form>${dialog.innerHTML}`;

      dialog.showModal();
    };

    if (event && event.target instanceof HTMLElement && event.target.closest('dialog[open]')){
      const dialog = event.target.closest('dialog[open]');
      const dialogDimensions = dialog.getBoundingClientRect()
      if (event.clientX < dialogDimensions.left || event.clientX > dialogDimensions.right || event.clientY < dialogDimensions.top || event.clientY > dialogDimensions.bottom) {
        dialog.close()
      }
    }
  });

  return null
}

/**
 * Check if an element contains certain elements that needs enhancing with the JavaScript helpers, it is recommended to do this on the page body after the dom is loaded. Elements that are loaded via ajax should also run this function. 
 * @param {HTMLElement} element Dom element, this doesn't have to be the body but it is recommended.
 */
export const checkElements = (element) => {

  // Tables
  Array.from(element.querySelectorAll('table')).forEach((table, index) => {

    tableStacked(table);
    tableWrap(table);
  });
}

/**
 * Wrap tables with a table wrapper div to help maintain its responsive design.
 * @param {HTMLElement} table Dom table element
 */
export const tableWrap = (table) => {
  
  if(!table.parentNode.classList.contains('table__wrapper')){

    const tableHTML = table.outerHTML;

    table.outerHTML = `<div class="table__wrapper">${tableHTML}</div>`;
  }
}

/**
 * Creates data attributes to be used by the CSS for mobile views.
 * @param {HTMLElement} table Dom table element
 */
export const tableStacked = (table) => {

  const colHeadings = Array.from(table.querySelectorAll('thead th'));
  const colRows = Array.from(table.querySelectorAll('tbody tr'));

  colRows.forEach((row, index) => {

    const cells = Array.from(row.querySelectorAll('th, td'));
    
    cells.forEach((cell, cellIndex) => {

      const heading = colHeadings[cellIndex];
      if(typeof heading != "undefined"){

        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = heading.innerHTML;
        let headingText = tempDiv.textContent || tempDiv.innerText || "";
        cell.setAttribute('data-label',headingText);
      }
    });
  });
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
