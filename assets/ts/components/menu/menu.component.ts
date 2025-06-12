class iamMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/menu.component.css";`;

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

  connectedCallback(): void {
    const menuID = this.hasAttribute('id') ? this.getAttribute('id') : false;
    const menuButton = document.querySelector(`[popovertarget="${menuID}"]`);

    const topLevelmenuItems = this.querySelectorAll(':scope > a, :scope > button, :scope > details > summary');
    const menuItems = this.querySelectorAll('a, button');
    const subMenus = this.querySelectorAll('details');

    let subNextIndex;
    let subPrevIndex;

    // Set the needed CSS styles to connect the ID attribute to the anchor name
    if (menuID && menuButton) {
      this.setAttribute('role', 'menu');
      this.style['position-anchor'] = `--${menuID}`;

      menuButton?.setAttribute('aria-haspopup', 'true');
      menuButton?.style['anchor-name'] = `--${menuID}`;
      menuButton?.setAttribute('aria-controls', menuID);
    }

    menuItems.forEach((item, index) => {
      item.setAttribute('role', 'menuitem');
      item.setAttribute('tabindex', '0');

      if (index == 0) {
        item.setAttribute('autofocus', true);
      }
    });

    this.addEventListener('keydown', (event) => {
      if (event && event.target instanceof HTMLElement && event.target.closest('a, button, summary')) {
        const activeItem = document.activeElement;
        const prevIndex = Array.from(topLevelmenuItems).indexOf(activeItem) - 1;
        const nextIndex = Array.from(topLevelmenuItems).indexOf(activeItem) + 1;

        switch (
          event.keyCode // change to event.key to key to use the above variable
        ) {
          case 27: // Esc
            if (activeItem.closest('details')) {
              event.stopPropagation();
              event.preventDefault();
              activeItem.closest('details').removeAttribute('open');
              activeItem.closest('details').querySelector(':scope summary').focus();
            } else {
              event.stopPropagation();
              menuButton.focus();
            }

            break;
          case 32: // Space
          case 13: // Enter
            break;
          case 35: // end
            event.stopPropagation();
            event.preventDefault();

            this.querySelector('details[open]').removeAttribute('open');
            Array.from(menuItems)[menuItems.length - 1].focus();

            break;
          case 36: // home
            event.stopPropagation();
            event.preventDefault();

            this.querySelector('details[open]').removeAttribute('open');
            Array.from(menuItems)[0].focus();

            break;
          case 38: // up
            event.stopPropagation();
            event.preventDefault();

            if (Array.from(topLevelmenuItems).indexOf(activeItem) > -1) {
              if (Array.from(topLevelmenuItems)[prevIndex] != undefined)
                Array.from(topLevelmenuItems)[prevIndex].focus();
              else Array.from(topLevelmenuItems)[topLevelmenuItems.length - 1].focus();
            } else if (activeItem.closest('details')) {
              const subMenuItems = activeItem
                .closest('details')
                .querySelectorAll('a, button, :scope details > summary');
              subPrevIndex = Array.from(subMenuItems).indexOf(activeItem) - 1;

              if (Array.from(subMenuItems)[subPrevIndex] != undefined) Array.from(subMenuItems)[subPrevIndex].focus();
              else Array.from(subMenuItems)[subMenuItems.length - 1].focus();
            }

            break;
          case 40: // down
            event.stopPropagation();
            event.preventDefault();

            if (Array.from(topLevelmenuItems).indexOf(activeItem) > -1) {
              if (Array.from(topLevelmenuItems)[nextIndex] != undefined)
                Array.from(topLevelmenuItems)[nextIndex].focus();
              else Array.from(topLevelmenuItems)[0].focus();
            } else if (activeItem.closest('details')) {
              const subMenuItems = activeItem
                .closest('details')
                .querySelectorAll('a, button, :scope details > summary');
              subNextIndex = Array.from(subMenuItems).indexOf(activeItem) + 1;

              if (Array.from(subMenuItems)[subNextIndex] != undefined) Array.from(subMenuItems)[subNextIndex].focus();
              else Array.from(subMenuItems)[0].focus();
            }

            break;
        }
      }
    });

    this.addEventListener('toggle', (e) => {
      const updateEvent = new CustomEvent(e.newState, { detail: { id: this.getAttribute('id'), target: e.target } });
      this.dispatchEvent(updateEvent);

      if (this.hasAttribute('popover-open')) {
        e.preventDefault();
        this.removeAttribute('popover-open');
        this.hidePopover();
      }

      if(this.matches(':popover-open') && document.querySelector(`[popovertarget="${this.getAttribute('id')}"]`)){

        document.querySelector(`[popovertarget="${this.getAttribute('id')}"]`)?.setAttribute('aria-pressed','true');
        document.querySelector(`[popovertarget="${this.getAttribute('id')}"]`)?.classList.add('active');
      }
      else {

        document.querySelector(`[popovertarget="${this.getAttribute('id')}"]`)?.removeAttribute('aria-pressed');
        document.querySelector(`[popovertarget="${this.getAttribute('id')}"]`)?.classList.remove('active');
      }
    });

    this.addEventListener('click', (event) => {
      if (
        event &&
        event.target instanceof HTMLElement &&
        event.target.closest('button:has(+ iam-menu:not([popover]))')
      ) {
        const button = event.target.closest('button:has(+ iam-menu)');

        button?.classList.toggle('open');
      } else if (event && event.target instanceof HTMLElement && event.target.closest('button.selectable')) {
        const button = event.target.closest('button.selectable');
        if (this.hasAttribute('multiple')) {
          button.classList.toggle('selected');
        } else if (button?.classList.contains('selected')) {
          this.querySelectorAll('.selected').forEach((item) => {
            item.classList.remove('selected');
          });
        } else {
          this.querySelectorAll('.selected').forEach((item) => {
            item.classList.remove('selected');
          });
          button.classList.add('selected');
        }
      }
    });

    // safari and firefox anchor fix for cards
    if (!CSS.supports('top', 'anchor(top)')) {
      document.addEventListener('click', (event) => {
        if (event.originalTarget && event.originalTarget.matches('[popovertarget]')) {
          const button = event.originalTarget;
          const popoverID = button.getAttribute('popovertarget');
          const popover = document.getElementById(popoverID);

          const viewportOffset = button.getBoundingClientRect();
          const top = viewportOffset.top;
          const left = viewportOffset.left;

          popover.style.setProperty('top', top + 'px');
          popover.style.setProperty('left', left + button.clientWidth + 'px');
        }
      });
    }
  }
}

export default iamMenu;
