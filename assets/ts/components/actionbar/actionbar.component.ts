// @ts-nocheck
import extendDialogs from "../../modules/dialogs";

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "action bar"
});


function setSelectAllInput(element, value){

  if(element && value == "all"){
            
    element.querySelector('input').indeterminate = false;
    element.querySelector('input').checked = true;
    element.querySelector('label').textContent = `Select all`;
  }
  else if(element && value == 0){

    element.querySelector('input').indeterminate = false;
    element.querySelector('input').checked = false;
    element.querySelector('label').textContent = `Select all`;
  }
  else if(element && value){

    element.querySelector('input').indeterminate = true;
    element.querySelector('input').checked = false;
    element.querySelector('label').textContent = `${value} item${value > 1 ? 's' : ''} selected`;
  }
  else if(element){
    
    element.querySelector('input').checked = false;
    element.querySelector('input').indeterminate = false;
    element.querySelector('label').textContent = `Select all`;
  }
}

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
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous">
    <div class="actionbar__wrapper">
      <div class="actionbar">
        <div class="safe-area">
          <slot></slot>
          <div class="body">
            <div class="dialog__wrapper dialog__wrapper--right dialog-overflow d-none show">
              <button class="btn btn-secondary btn-compact fa-ellipsis-vertical m-0">More actions</button>
              <dialog>
                <slot name="overflow"></slot>
                <slot name="menu"></slot>
              </dialog>
            </div>
            <button class="btn btn-secondary btn-compact btn-sm fa-search m-0" data-search="">Search</button>
          </div>
        </div>
      </div>
      <div class="actionbar--selected">
        <div class="safe-area">
          <slot name="selected"></slot>
          <div class="body">
            <div class="dialog__wrapper dialog__wrapper--right dialog-overflow d-none show">
              <button class="btn btn-secondary btn-compact fa-ellipsis-vertical m-0">More actions</button>
              <dialog>
                <slot name="selected-overflow"></slot>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <div class="actionbar--search">
        <button data-search class="btn btn-compact fa-xmark btn-secondary m-0" >Close</button>

        <div class="search-wrapper">
          <label for="search" class="visually-hidden">Input field label</label>
          <button class="suffix"><i class="fa-regular fa-search"></i></button>
          <input type="text" id="search" name="search" required="">
        </div>

      </div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    const actionbarWrapper = this.shadowRoot.querySelector('.actionbar__wrapper');

    // #region select all
    if(this.hasAttribute('data-selectall')){

      actionbarWrapper.insertAdjacentHTML( 'afterbegin', `<div class="selectall"><input type="checkbox" name="selectall" id="selectall"><label for="selectall" class="m-0">Select all</label></div>` );

      let selectAll = this.shadowRoot.querySelector('.selectall');

      if(this.hasAttribute('data-selected')){
        setSelectAllInput(selectAll, this.getAttribute('data-selected'));
      }

      selectAll.addEventListener('change', (event) => {

        if (event && event.target instanceof HTMLElement && event.target.closest('input')){
          
          if(event.target.closest('input').checked)
            this.setAttribute('data-selected','all');
          else 
            this.setAttribute('data-selected',0);
        }
  
      });

    }
    // #endregion


    // #region switchviews
    if(this.hasAttribute('data-switchviews')){

      let btns = '';

      let viewList = this.getAttribute('data-switchviews').split(',');

      viewList.forEach((view,index) => {

        let icon = 'fa-grid-2';

        if(view == "list")
          icon = 'fa-grip-lines';
        else if(view == "small")
          icon = 'fa-bars';

        btns += `<button class="btn btn-action btn-compact mb-0 fa-regular ${icon}">${view}</button>`;
      });


      actionbarWrapper.insertAdjacentHTML( 'afterbegin', `<div class="views m-0">${btns}</div>` );

      let views = this.shadowRoot.querySelector('.views');


      views.addEventListener('click', (event) => {

        if (event && event.target instanceof HTMLElement && event.target.closest('.btn-action')){
          
          let btn = event.target.closest('.btn-action');

          this.setAttribute('data-view',btn.textContent);
        }
  
      });
      

    }
    // #endregion

    // #region search
    const searchBar = this.shadowRoot.querySelector('.actionbar--search');

    if(this.hasAttribute('data-search') && this.getAttribute('data-search') == 'show')
      searchBar.classList.add('show');

    this.shadowRoot.addEventListener('click', (event) => {

      if (event && event.target instanceof HTMLElement && event.target.closest('button[data-search]')){
        searchBar.classList.toggle('show');
      }
    });

    searchBar.addEventListener('keyup', (event) => {

      const keyupEvent = new CustomEvent("search-keyup", { detail: { search: searchBar.querySelector('input').value } });
      this.dispatchEvent(keyupEvent);
    });

    searchBar.addEventListener('change', (event) => {

      const changeEvent = new CustomEvent("search-change", { detail: { search: searchBar.querySelector('input').value } });
      this.dispatchEvent(changeEvent);
    });
    searchBar.addEventListener('click', (event) => {

      if (event && event.target instanceof HTMLElement && event.target.closest('button.suffix')){
          
        const submitEvent = new CustomEvent("search-submit", { detail: { search: searchBar.querySelector('input').value } });
        this.dispatchEvent(submitEvent);
      }
    });
    // #endregion




    let that = this;



    Array.from(this.shadowRoot.querySelectorAll('.body')).forEach((element,index) => {
          
      extendDialogs(element);
    });

    
    function hideButtons () {

      const wrapperWidth = actionbarWrapper.scrollWidth;
      const screenWidth = document.documentElement.scrollWidth;


      let safeAreaWidth = 750;
      let elementMargin = 16;


      // We need to modify the widths to mimic the CSS's scaling functionality
      let modifier = 1;
      if (screenWidth >= 992 && screenWidth <= 1280){
        modifier = screenWidth/1280;
      }
      else if (screenWidth >= 576 && screenWidth <= 1280) {
        modifier = screenWidth/768;
      }
      else if (screenWidth < 576) {
        modifier = screenWidth/375;
      }

      // Work out the safe sapce width depending upon the wrappers width and modifier 
      if (wrapperWidth >= 992 && wrapperWidth <= 1280){
        safeAreaWidth = safeAreaWidth*modifier;
      }
      else if (wrapperWidth >= 576 && wrapperWidth <= 1280) {
        safeAreaWidth = 450*modifier;
      }
      else if (wrapperWidth < 576) {
        safeAreaWidth = 210*modifier;
      }

      elementMargin = elementMargin*modifier;


      // If the wrapper width is small we want to reduce the btn sizes
      if (wrapperWidth < 576) {
        
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

      Array.from(that.querySelectorAll('[slot]')).forEach((element,index) => {

        if(element.getAttribute("slot") == "overflow")
          element.removeAttribute('slot');

        if(element.getAttribute("slot") == "selected-overflow")
          element.setAttribute('slot','selected');
      });

      Array.from(that.querySelectorAll('.show')).forEach((element,index) => {

       element.classList.remove('show');
      });


      // Foreach safe area lets check what elements are slotted in them and if they need an overflow
      Array.from(that.shadowRoot.querySelectorAll('.safe-area')).forEach((element,index) => {
      
        let overflowSlot = "overflow"

        if(element.querySelector('slot').hasAttribute('name') && element.querySelector('slot').getAttribute('name') == "selected")
          overflowSlot = "selected-overflow";

        let elements = element.querySelector('slot').assignedElements();
        let tempWidth = 44*modifier; 

        if(that.hasAttribute('data-search'))
          tempWidth += 44*modifier;
  

        for (let i = 0; i < elements.length; i++) {

          if(!elements[i].classList.contains('btn-action') && !elements[i].classList.contains('dialog__wrapper')){
  
            tempWidth += elements[i].offsetWidth;
            tempWidth += elementMargin;
          }
        }
  
        for (let i = 0; i < elements.length; i++) {
  
          if(elements[i].classList.contains('dialog__wrapper')){
  
            elements[i].classList.add('show');

            tempWidth += elements[i].offsetWidth;
            tempWidth += (elementMargin/2);
  
            if(tempWidth - (elementMargin/2) > safeAreaWidth){
                
              elements[i].classList.remove('show');
              break;
            }
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

      let overflowDialog = element.querySelector('.dialog-overflow');

      if(overflowDialog)
          overflowDialog.classList.add('d-none');

        for (let i = 0; i < elements.length; i++) {
  
          if(elements[i].classList.contains('btn-action') || elements[i].classList.contains('dialog__wrapper')){
            if (!elements[i].classList.contains('show')){

              elements[i].setAttribute('slot',overflowSlot);

              if(overflowDialog)
                overflowDialog.classList.remove('d-none');
            }
          }
        }

      });
  

    }

    hideButtons();
    new ResizeObserver(hideButtons).observe(actionbarWrapper)

  }

  static get observedAttributes() {
    return ["data-selected"];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {

    switch (attrName) {
      case "data-selected": {

        let selectAll = this.shadowRoot.querySelector('.selectall');
        
        if(selectAll)
          setSelectAllInput(selectAll, newVal);

          const event = new CustomEvent("selected", { detail: { selected: newVal } });

          this.dispatchEvent(event);
        
        break;
      }
    }

  }


}

export default iamActionbar;