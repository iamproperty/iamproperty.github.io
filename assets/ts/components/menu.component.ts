// @ts-nocheck
class iamMenu extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const loadCSS = `@import "/assets/css/components/menu.component.css";`; // For local development
    const template = document.createElement('template');

    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="menu--inner" part="inner">
      <slot></slot>
    </div>`;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {
    
    const menuComponent = this;
    const menuID = menuComponent.hasAttribute('id') ? menuComponent.getAttribute('id') : false;
    const menuButton = document.querySelector(`[popovertarget="${menuID}"]`);

    const menuInner = menuComponent.shadowRoot.querySelector('.menu--inner');
    const topLevelmenuItems = menuComponent.querySelectorAll(':scope > a, :scope > button, :scope > details > summary');
    const menuItems = menuComponent.querySelectorAll('a, button');
    const subMenus = menuComponent.querySelectorAll('details');

    let subNextIndex;
    let subPrevIndex;

    // Set the needed CSS styles to connect the ID attribute to the anchor name
    if(menuID && menuButton){

      menuInner?.setAttribute('role','menu');
      menuComponent.style['position-anchor'] = `--${menuID}`;

      menuButton?.setAttribute('aria-haspopup','true');
      menuButton?.style['anchor-name'] = `--${menuID}`;
      menuButton?.setAttribute('aria-controls', menuID);
    
      subMenus.forEach((item,index) => {
        
        item.setAttribute('role','menu');
      });

      menuItems.forEach((item,index) => {
        
        item.setAttribute('role','menuitem');
        item.setAttribute('tabindex','0');

        if(index == 0){
          item.setAttribute('autofocus', true);
        }
      });

      menuComponent.addEventListener('keydown', (event) => {

        if (event && event.target instanceof HTMLElement && event.target.closest('a, button, summary')){

          const activeItem = document.activeElement;
          let prevIndex = Array.from(topLevelmenuItems).indexOf(activeItem) - 1;
          let nextIndex = Array.from(topLevelmenuItems).indexOf(activeItem) + 1;

          switch (event.keyCode) { // change to event.key to key to use the above variable
            case 27: // Esc

              if(activeItem.closest('details')){

                event.stopPropagation();
                event.preventDefault();
                activeItem.closest('details').removeAttribute('open');
                activeItem.closest('details').querySelector(':scope summary').focus();
              }
              else {
                
                event.stopPropagation();
                menuButton.focus();
              }

              break; 
            case 32: // Space
            case 13: // Enter

              if(activeItem.matches('summary') && !activeItem.parentElement.matches('details[open]')){

                activeItem.parentElement.setAttribute('open',true);
                let subMenuItems = activeItem.closest('details').querySelectorAll('a, button, :scope details > summary');
                Array.from(subMenuItems)[0].focus();
              }

              break;            
            case 35: // end
                
              event.stopPropagation();
              event.preventDefault();

              menuComponent.querySelector('details[open]').removeAttribute('open');
              Array.from(menuItems)[menuItems.length-1].focus();

              break;
            case 36: // home
                
              event.stopPropagation();
              event.preventDefault();

              menuComponent.querySelector('details[open]').removeAttribute('open');
              Array.from(menuItems)[0].focus();

              break;
            case 38: // up
                    
                event.stopPropagation();
                event.preventDefault();
  
                if(Array.from(topLevelmenuItems).indexOf(activeItem) > -1){
                    
                  if(Array.from(topLevelmenuItems)[prevIndex] != undefined)
                    Array.from(topLevelmenuItems)[prevIndex].focus();
                  else
                    Array.from(topLevelmenuItems)[topLevelmenuItems.length-1].focus();
                }
                else if(activeItem.closest('details'))  {
  
                  let subMenuItems = activeItem.closest('details').querySelectorAll('a, button, :scope details > summary');
                  subPrevIndex = Array.from(subMenuItems).indexOf(activeItem) - 1;
  
                  if(Array.from(subMenuItems)[subPrevIndex] != undefined)
                    Array.from(subMenuItems)[subPrevIndex].focus();
                  else
                    Array.from(subMenuItems)[subMenuItems.length-1].focus();  
                }

              break;
            case 40: // down
                  
              event.stopPropagation();
              event.preventDefault();

              if(Array.from(topLevelmenuItems).indexOf(activeItem) > -1){
                  
                if(Array.from(topLevelmenuItems)[nextIndex] != undefined)
                  Array.from(topLevelmenuItems)[nextIndex].focus();
                else
                  Array.from(topLevelmenuItems)[0].focus();
              }
              else if(activeItem.closest('details')) {

                let subMenuItems = activeItem.closest('details').querySelectorAll('a, button, :scope details > summary');
                subNextIndex = Array.from(subMenuItems).indexOf(activeItem) + 1;

                if(Array.from(subMenuItems)[subNextIndex] != undefined)
                  Array.from(subMenuItems)[subNextIndex].focus();
                else
                  Array.from(subMenuItems)[0].focus();  
              }

              break;            
          }
        }
      });
    }

    // insert extra CSS to help style inline details and summary items to allow collapsible sub menus
    if(menuComponent.querySelector('details') && !document.getElementById('menuGlobalStyles'))
      document.head.insertAdjacentHTML('beforeend',`<style id="menuGlobalStyles">
iam-menu details > * {
  background: unset !important;
  border: unset !important;
  color: inherit!important;
  font-weight: inherit!important;
  font-family: inherit!important;
  font-size: 1rem!important;
  display: block!important;
  margin: var(--menu-item-margin, 0 0 0.25rem 0)!important;
  padding: var(--menu-item-padding, 0)!important;
  width: var(--menu-item-width, 100%)!important;
  text-align: var(--menu-item-text-align, left)!important;
  cursor: var(--menu-item-cursor, pointer)!important;
}
iam-menu details > *:after,
iam-menu details > *:not(summary):before {
  display: none!important;
}
iam-menu details :is(button,a) {
  padding-inline-start: var(--menu-dialog-offset,1rem)!important;
}
iam-menu details :is(button,a):last-child {
  margin-block-end: var(--menu-dialog-offset,1rem)!important;
}
iam-menu details summary {
  padding: 0 !important;
  margin: var(--menu-item-margin, 0 0 0.25rem 0)!important;
}
iam-menu details summary:before {
  text-align: center;
  display: inline-block!important;
  vertical-align: bottom;
  float: right;
  color: inherit;
  height: 1em;
  width: 1em;
}

iam-menu details summary[class*="fa-"]:before {
  font-family: var(--fa-font-family, "Font Awesome 6 Pro");
}

iam-menu details summary:not([class*="fa-"]:before {
  --icon-arrow: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'%3e%3cpath d='M6.5,2l9,9-9,9' style='fill:none;stroke:%23000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px'/%3e%3c/svg%3e");  
  
  content: ""!important;
  height: 1.2rem;
  width: 1.2rem;
  background: var(--colour-primary-theme);
  mask-image: var(--icon, var(--icon-arrow));
  mask-size: 50%;
  mask-repeat: no-repeat;
  mask-position: 50% 50%;
  -webkit-mask-image: var(--icon, var(--icon-arrow));
  -webkit-mask-size: 50%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: 50% 50%;
  z-index: 2;
  display: inline-block;
  vertical-align: bottom;
  float: right;
  rotate: 90deg;
  color: inherit;
}
</style>`);

  }
}

export default iamMenu;