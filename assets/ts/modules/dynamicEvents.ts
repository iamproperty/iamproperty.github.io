// @ts-nocheck

// Create the event listeners 
const createDynamicEvents = () => {

  // Change event
  document.addEventListener('change', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-change-events]'))
      splitEvents(event.target,event.target.closest('[data-change-events]').getAttribute('data-change-events'));
  });
  document.addEventListener('keyup', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-change-events]'))
      splitEvents(event.target,event.target.closest('[data-change-events]').getAttribute('data-change-events'));
  });

  // Click event
  document.addEventListener('click', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-click-events]'))
      splitEvents(event.target,event.target.closest('[data-click-events]').getAttribute('data-click-events'));
  });
};

// Parse the JSON and trigger the events, this may be singular or multiple set of events
const splitEvents = (element,events) => {

  // an empty events will trigger looking up the dom chain for 
  if(!events){
    events = element.parentNode.getAttribute('data-change-events');
  }
  
  // If still empty bail out
  if(!events)
    return false;

  // Split out each event
  Array.from(JSON.parse(events)).forEach((event, index) => {
    checkConditions(element,event);
  });
};
    
const checkConditions = (element,event) => {

  if("matches" in event){
    if(event['matches'] == 'any')
      runEvent(element,event,'if');
    else if(element.value == event.matches)
      runEvent(element,event,'if');
    else
      runEvent(element,event,'else');
    
    return false;
  }
  else if("in-list" in event){

    // Pass the matched datalist element instead of the triggered element
    let match = document.querySelector(`${event['in-list']} option[value="${element.value}"]`);

    if(document.querySelector(`${event['in-list']} option[value="${element.value}"]`)){

      runEvent(match,event,'if');
    }
    else
      runEvent(match,event,'else');

    return false;
  }
  else if("event" in event){
    runEvent(element,event,'event');
  }
};

const runEvent = (element,event,eventType) => {

  if(eventType in event == false)
    return false;

  switch (event[eventType]){
    case "hide":

      let hideElement =  document.querySelector(event['target'])
      hideElement.classList.add('js-hide');

      Array.from(hideElement.querySelectorAll('[data-required]')).forEach((input, index) => {
        
          input.removeAttribute('required');
      });
      break;
    case "show":

      let showElement =  document.querySelector(event['target'])
      showElement.classList.remove('js-hide');

      Array.from(showElement.querySelectorAll('[data-required]')).forEach((input, index) => {
        
        if(!input.closest('.js-hide'))
          input.setAttribute('required','true');
      });
      break;
    case "populate-form":
      populateForm(element,event);
      break;
    case "setAttribute":
      document.querySelector(`${event['target']}`).setAttribute(event['attribute'],event['value']);
      break;
    case "removeAttribute":
      document.querySelector(`${event['target']}`).removeAttribute(event['attribute']);
      break;
    case "updateValue":
      document.querySelector(`${event['target']}`).value = event['value'] ? event['value'] : "";
      
      let changeEvent = new Event('change');
      document.querySelector(`${event['target']}`).dispatchEvent(changeEvent);
      break;
    default:
      break;
  }
}

const populateForm = function (element,event) {
  
  let values = JSON.parse(element.getAttribute('data-values'));
  let form = document.querySelector(event['target']);

  Object.keys(values).forEach((field, index) => {

    if(document.getElementById(field) && document.getElementById(field).tagName == "SPAN")
      document.getElementById(field).innerHTML = values[field];
    
    if(form.querySelector(`input[name="${field}"][type="radio"][value="${values[field]}"]`)){
      
      Array.from(form.querySelectorAll(`input[name="${field}"][type="radio"]`)).forEach(function(input,index){
        input.disabled = true;
      });

      form.querySelector(`input[name="${field}"][type="radio"][value="${values[field]}"]`).checked = true;
      form.querySelector(`input[name="${field}"][type="radio"][value="${values[field]}"]`).disabled = false;
    }
    else if(form.querySelector(`input[name="${field}"]`)){
      form.querySelector(`input[name="${field}"]`).value = values[field];
      form.querySelector(`input[name="${field}"]`).setAttribute('readonly','true');
    }
  });
}

export default createDynamicEvents;