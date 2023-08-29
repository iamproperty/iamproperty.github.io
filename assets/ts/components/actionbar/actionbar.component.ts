// @ts-nocheck
//import accordion from "../../modules/accordion";

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "action bar"
});

class iamActionbar extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    
    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets'
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/actionbar.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="actionbar__wrapper">
      <div class="actionbar">
        <div class="safe-area"><slot></slot></div>
      </div>
      <div class="actionbar--selected">
        <div class="safe-area"><slot name="selected"></slot></div>
      </div>
      <div class="actionbar--search">
        <button data-search>Close</button>


        <div class="search-wrapper">
          <label for="search" class="visually-hidden">Input field label</label>
          <button class="suffix"><i class="fa-search"></i></button>
          <input type="text" id="search" name="search" required="">
        </div>

      </div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    const actionbarWrapper = this.shadowRoot.querySelector('.actionbar__wrapper');

    if(this.hasAttribute('data-selectall')){

      actionbarWrapper.insertAdjacentHTML( 'afterbegin', `<div class="selectall"><input type="checkbox" name="selectall" id="selectall"><label for="selectall" class="m-0">Select all</label></div>` );
    }

    const searchBar = this.shadowRoot.querySelector('.actionbar--search');

    this.addEventListener('click', (event) => {

      // Modal
      if (event && event.target instanceof HTMLElement && event.target.closest('[data-search]')){

        searchBar.classList.add('show');
      }

    });
    this.shadowRoot.addEventListener('click', (event) => {

      // Modal
      if (event && event.target instanceof HTMLElement && event.target.closest('[data-search]')){

        searchBar.classList.remove('show');
      }

    });

    let that = this;
    
    function hideButtons () {


      console.log;
      const screenWidth = document.documentElement.scrollWidth;
      let safeAreaWidth = 750;
      let elementMargin = 16;
      let modifier = 1;


      if (document.documentElement.scrollWidth >= 992 && screenWidth <= 1280){

        modifier = screenWidth/1280;
        safeAreaWidth = safeAreaWidth*modifier;
      }
      else if (document.documentElement.scrollWidth >= 576 && screenWidth <= 1280) {
        modifier = screenWidth/768;
        safeAreaWidth = 450*modifier;
      }
      else if (document.documentElement.scrollWidth < 576) {
        modifier = screenWidth/375;
        safeAreaWidth = 210*modifier;
      }

      elementMargin = elementMargin*modifier;



      if (document.documentElement.scrollWidth < 576) {
        
        Array.from(that.querySelectorAll(':scope > .btn:not(.js-updated)')).forEach((element,index) => {

          element.className = element.className.replace(' btn-compact',' _btn-compact');
          element.classList.add('btn-compact');
          element.classList.add('js-updated');
        });

      }
      else {

        Array.from(that.querySelectorAll(':scope > .btn.js-updated')).forEach((element,index) => {
          
          element.classList.remove('btn-compact');
          element.classList.remove('js-updated');

          element.className = element.className.replace(' _btn-compact',' btn-compact');
        });

      }

      Array.from(that.shadowRoot.querySelectorAll('.safe-area')).forEach((element,index) => {
      
        let elements = element.querySelector('slot').assignedElements();
        let tempWidth = 0; 
  
        for (let i = 0; i < elements.length; i++) {
  
          if(!elements[i].classList.contains('btn-action')){
  
            tempWidth += elements[i].offsetWidth;
            tempWidth += elementMargin;
          }
        }
  
        for (let i = 0; i < elements.length; i++) {
  
          if(elements[i].classList.contains('btn-action')){
  
            elements[i].classList.add('show');
            tempWidth += elements[i].offsetWidth;
            tempWidth += (elementMargin/2);
  
            if(tempWidth - (elementMargin/2) > safeAreaWidth){
              
            elements[i].classList.remove('show');
            break;
            }
          }
        }

      });
  

    }

    hideButtons();
    new ResizeObserver(hideButtons).observe(actionbarWrapper)




    
  }
}

export default iamActionbar;