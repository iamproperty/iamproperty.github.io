/** 
 * Global helper functions to help maintain and enhance framework elements.
 * @module Helpers 
 */

/**
 * Add global classes used by the CSS and later JavaScript.
 * @param {HTMLElement} body Dom element, this doesn't have to be the body but it is recommended.
 */
 const addBodyClasses = (body) => {
  
  body.classList.add("js-enabled");

  if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
    
    body.classList.add("ie");
  }

  return null
}

/**
 * Check if an element contains certain elements that needs enhancing with the JavaScript helpers, it is recommended to do this on the page body after the dom is loaded. Elements that are loaded via ajax should also run this function. 
 * @param {HTMLElement} element Dom element, this doesn't have to be the body but it is recommended.
 */
const checkElements = (element) => {

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
const tableWrap = (table) => {
  
  if(!table.parentNode.classList.contains('table__wrapper')){

    const tableHTML = table.outerHTML;

    table.outerHTML = `<div class="table__wrapper">${tableHTML}</div>`;
  }
}

/**
 * Creates data attributes to be used by the CSS for mobile views.
 * @param {HTMLElement} table Dom table element
 */
const tableStacked = (table) => {

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

export {
  addBodyClasses,
  checkElements,
  tableWrap,
  tableStacked
}