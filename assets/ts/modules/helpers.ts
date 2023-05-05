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
  
  if(location.hash && document.querySelector(location.hash+':not([open]) summary')) {

    const summary = document.querySelector(location.hash+' summary');

    if (summary instanceof HTMLElement) 
      summary.click();
  }

  window.addEventListener('hashchange', function() {

    const hash = location.hash.replace('#','');
    const label = document.querySelector(`label[for="${hash}"]`);
    const summary = document.querySelector(location.hash+' summary');

    if(label instanceof HTMLElement)
      label.click();
    else if(summary instanceof HTMLElement)
      summary.click();
    
  }, false);

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
