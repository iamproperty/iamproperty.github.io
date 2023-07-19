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

  let nav = document.querySelector('nav');
  if(nav) {
    let navHeight = nav.offsetHeight;
    document.querySelector('body').style.setProperty("--nav-height", `${navHeight}px`);

    function outputsize() {

      navHeight = nav.offsetHeight;
      document.querySelector('body').style.setProperty("--nav-height", `${navHeight}px`);
    }
    
    new ResizeObserver(outputsize).observe(nav);
  }
  else {
    document.querySelector('body').style.setProperty("--nav-height", `0px`);
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

    if(event && event.state.type && event.state.type == "pagination"){
      let form = document.querySelector(`#${event.state.form}`);
      let pageInput = document.querySelector(`#${event.state.form} [data-pagination]`);
      
      if(pageInput)
        pageInput.value = event.state.page;
      else
        form.innerHTML += `<input name="page" type="hidden" data-pagination="true" value="${event.state.page}" />`
      
      form.dispatchEvent(new Event("submit"));
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

export const numberOfDays = function(startDateString:string,endDateString:string){

  let convertStart = startDateString.split('/');
  let convertEnd = endDateString.split('/');
  let dateStart:any = new Date(convertStart[1]+'/'+convertStart[0]+'/'+convertStart[2]);
  let dateEnd:any = new Date(convertEnd[1]+'/'+convertEnd[0]+'/'+convertEnd[2]);

  if(dateStart == "Invalid Date")
    throw "Start date is not a valid date"

  if(dateEnd == "Invalid Date")
    throw "End date is not a valid date"

  // To calculate the time difference of two dates
  let diffTime = dateEnd.getTime() - dateStart.getTime();
  let numberOfDays = (diffTime / (1000 * 3600 * 24) + 1);

  if(numberOfDays < 0)
    throw "The start date should be before the end date";
  
  return numberOfDays;
}
