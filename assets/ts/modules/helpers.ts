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
    const detail = document.querySelector(`detail${hash}`);

    if(label instanceof HTMLElement)
      label.click();
    else if(summary instanceof HTMLElement)
      summary.click();
    else if(dialog instanceof HTMLElement)
      dialog.showModal();
    else if(detail instanceof HTMLElement)
      detail.addAttribute('open');
  }

  if(location.hash)
    checkElements(location.hash);

  window.addEventListener('hashchange', function() { checkElements(location.hash); }, false);

  addEventListener("popstate", (event) => {

    if(event && event.state && event.state.type && event.state.type == "pagination"){
      let form = document.querySelector(`#${event.state.form}`);
      let pageInput = document.querySelector(`#${event.state.form} [data-pagination]`);
      
      if(pageInput)
        pageInput.value = event.state.page;
      else
        form.innerHTML += `<input name="page" type="hidden" data-pagination="true" value="${event.state.page}" />`
      
      form.dispatchEvent(new Event("submit"));
    }
  });

  document.addEventListener("submit", (event) => {

    if (event && event.target instanceof HTMLElement && event.target.matches('form')){

      let form = event.target;

      // Reset password types
      Array.from(form.querySelectorAll('[data-password-type]')).forEach((input,index) => {
        input.setAttribute('type','password');
      });

      if(form.querySelector(':invalid') || form.querySelector('.pwd-checker[data-strength="1"]') || form.querySelector('.pwd-checker[data-strength="2"]')){
        
        form.classList.add('was-validated');
        event.preventDefault();
      }
    }

  });

  document.addEventListener("keydown", (e) => {

    if(e.key === "Escape") {
      
      if(document.querySelector('.dialog--transactional[open], .dialog--acknowledgement[open]')){
        e.preventDefault();
        e.stopPropagation();
      }
    }
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

// Used to get values from nested json objects
export const resolvePath = (object, path, defaultValue) => path.split(/[\.\[\]\'\"]/).filter(p => p).reduce((o, p) => o ? o[p] : defaultValue, object);


export const isTraversable = o => Array.isArray(o) || o !== null && ['function', 'object'].includes(typeof o);