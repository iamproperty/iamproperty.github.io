// @ts-nocheck
export const createTabsLinks = function(tabsElement: Element) {

  const details = tabsElement.querySelectorAll(':scope > details');
  const detailsORLinks = tabsElement.querySelectorAll(':scope > details, :scope > a');
  let summaries = tabsElement.querySelectorAll(':scope > details > summary');
  let tabLinks = tabsElement.querySelector(':scope > .tabs__links');

  if(tabsElement.shadowRoot && tabsElement.shadowRoot.querySelector('.tabs__links'))
    tabLinks = tabsElement.shadowRoot.querySelector('.tabs__links');

  if(!tabLinks){
    tabLinks = document.createElement('div');
    tabLinks.classList.add('tabs__links');

    let tabLinksWrapper = document.createElement('div');
    tabLinksWrapper.classList.add('tabs__links__wrapper');
    
    tabLinksWrapper.prepend(tabLinks);
    tabsElement.prepend(tabLinksWrapper);
  }

  // Create the tab buttons from the summary titles
  let tabindex = 0;
  detailsORLinks.forEach((element, index) => {
  
    let button = document.createElement('button');
    
    if(element.matches('details')){

      let summary = element.querySelector(':scope > summary');
      let isDisabled = summary.classList.contains('disabled')

      summary.classList.add('visually-hidden');

      if (element.hasAttribute('id'))
        button.setAttribute('data-id',`${element.getAttribute('id')}`);

      if (element.hasAttribute('open')) {
        button.setAttribute('aria-pressed',true);
      }
      button.innerHTML = `${summary.innerText}`;
      button.classList.add('link');
      button.setAttribute('data-index',tabindex);
      element.setAttribute('tabindex','-1');

      if (isDisabled) {
        button.classList.add('disabled')
      }

      tabindex++;
    }
    else if(element.matches('a')){

      button = element;      
    }

    button.classList.add('link');
    tabLinks.appendChild(button);
  });

}

export const setTabsEventHandlers = function(tabsElement: Element){

  let details = tabsElement.querySelectorAll(':scope > details');
  let summaries = tabsElement.querySelectorAll(':scope > details > summary');
  let buttons = tabsElement.querySelectorAll(':scope .tabs__links > button');

  if(tabsElement.shadowRoot)
    buttons = tabsElement.shadowRoot.querySelectorAll('.tabs__links > button');

  // Set the on click for the tab buttons, these will open the details box it matches too
  buttons.forEach((button) => {

    button.addEventListener("click", (e) => {
      e.preventDefault();

      if (button.classList.contains('disabled'))
        return false

      buttons.forEach((buttonLoopItem) => {
        let buttonPressed = buttonLoopItem == button ? true : false;
        buttonLoopItem.setAttribute('aria-pressed', buttonPressed);
      });

      details.forEach((detail, detailsIndex) => {
        let detailsOpen = button.getAttribute('data-index') == detailsIndex ? true : false;

        if(detailsOpen)
          detail.setAttribute('open', detailsOpen);
        else
          detail.removeAttribute('open')
      });
      
      // Data layer Open Event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "event": "openTab",
        "tabTitle": button.textContent
      });
    });

  });
  
  // Make sure we dont loose existing summary functionality
  summaries.forEach((summary, index) => { 
    summary.addEventListener("click", (e) => {

      e.preventDefault();
      buttons[index].click();
    });
  });

}

export const openFirstTab = function(tabsElement: Element){

  if(!tabsElement.querySelector(':scope > details'))
    return false;

  let details = tabsElement.querySelectorAll(':scope > details');
  let buttons = tabsElement.shadowRoot.querySelectorAll('.tabs__links > button');


  if(location.hash && tabsElement.shadowRoot.querySelector(`.tabs__links [data-id="${location.hash.replace('#','')}"]`)){
    
    tabsElement.shadowRoot.querySelector(`[data-id="${location.hash.replace('#','')}"]`).setAttribute('aria-pressed',true);
    tabsElement.querySelector(`details[id="${location.hash.replace('#','')}"]`).setAttribute('open',true);
  }
  else if(!tabsElement.querySelector(`details[open]`)) {

    details[0].setAttribute('open',true);
    buttons[0].setAttribute('aria-pressed',true);
  }

}

const tabs = function(tabsElement: Element){
  createTabsLinks(tabsElement);
  setTabsEventHandlers(tabsElement);
  openFirstTab(tabsElement);
}

export default tabs