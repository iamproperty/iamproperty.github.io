// @ts-nocheck

// Create the event listeners 
const createDynamicEvents = () => {

  // Change event
  document.addEventListener('change', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-change-events]'))
      readMatches(event.target,event.target.closest('[data-change-events]').getAttribute('data-change-events'));
  });
  document.addEventListener('change', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-change-events]'))
      readMatches(event.target,event.target.closest('[data-change-events]').getAttribute('data-change-events'));
  });
  document.addEventListener('keyup', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-change-events]'))
      readMatches(event.target,event.target.closest('[data-change-events]').getAttribute('data-change-events'));
  });

  // Click event
  document.addEventListener('click', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-click-events]'))
      readMatches(event.target,event.target.closest('[data-click-events]').getAttribute('data-click-events'));
  });
};

// Parse the JSON and trigger the events, this may be singular or multiple set of events
const readMatches = (element,events) => {

  // an empty events will trigger looking up the dom chain for 
  if(!events){
    events = element.parentNode.getAttribute('data-change-events');
  }
  
  // If still empty bail out
  if(!events)
    return false;

  // Split out each event
  Array.from(JSON.parse(events)).forEach((event, index) => {
    checkMatch(element,event);
  });
};
    
const checkMatch = (element,event) => {

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
    if(document.querySelector(`${event['in-list']} option[value="${element.value}"]`)){
      let match = document.querySelector(`${event['in-list']} option[value="${element.value}"]`);
      runEvent(element,event,'if',match);
    }
    else
      runEvent(element,event,'else');

    return false;
  }
  else if("event" in event){
    runEvent(element,event,'event');
  }
};

const runEvent = (element,event,eventType,match) => {

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
      populateForm(element,event,match);
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

const populateForm = function (element,event,match) {
  
  let response = JSON.parse(match.getAttribute('data-values'));
  let form = document.querySelector(event['target']);

  Object.keys(response).forEach((field, index) => {

    if(document.getElementById(field) && document.getElementById(field).tagName == "SPAN")
      document.getElementById(field).innerHTML = response[field];
    
    if(form.querySelector(`input[name="${field}"][type="radio"][value="${response[field]}"]`)){
      
      Array.from(form.querySelectorAll(`input[name="${field}"][type="radio"]`)).forEach(function(input,index){
        input.disabled = true;
      });

      form.querySelector(`input[name="${field}"][type="radio"][value="${response[field]}"]`).checked = true;
      form.querySelector(`input[name="${field}"][type="radio"][value="${response[field]}"]`).disabled = false;
    }
    else if(form.querySelector(`input[name="${field}"]`)){
      form.querySelector(`input[name="${field}"]`).value = response[field];
      form.querySelector(`input[name="${field}"]`).setAttribute('readonly','true');
    }
  });
}

export default createDynamicEvents;