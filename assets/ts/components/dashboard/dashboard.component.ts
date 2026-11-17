
class iamDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/dashboard.component.css";`;
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="container wrapper sub-grid" part="wrapper">
      <slot name="title"></slot>
      <slot name="button"></slot>
      <slot name="search"></slot>
      <div id="insight-wrapper">
        <slot name="insight"></slot>
      </div>
      <div id="widgetWrapper">

        <div class="widget-row" data-row="1">
          <slot name="widget" class="sub-grid"></slot>
        </div>
        <div class="widget-row" data-row="2">
          <slot name="widget2" class="sub-grid"></slot>
        </div>
        <div class="widget-row" data-row="3">
          <slot name="widget3" class="sub-grid"></slot>
        </div>
      </div>
      <slot></slot>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }



  connectedCallback(): void {


    // #region fix carousel slot
    const slot = this.shadowRoot.querySelector("slot[name='insight']");
    const elements = slot.assignedElements({ flatten: true });

    elements.forEach((el) => {
      el.removeAttribute('slot');
      slot?.insertAdjacentElement('afterend', el);
    });
    slot.remove();

    const insightWrapper = this.shadowRoot.querySelector("div#insight-wrapper");

    if (insightWrapper) {

      const carousel = document.createElement('iam-carousel');
      carousel.setAttribute('data-smcols', '2');
      carousel.setAttribute('data-mdcols', '4');
      carousel.setAttribute('data-lgcols', '4');
      while (insightWrapper.firstChild) {
        carousel.appendChild(insightWrapper.firstChild);
      }
      insightWrapper.appendChild(carousel);
    }
    // #endregion



    // #region widgets

    const dragItems = this.querySelectorAll('.admin-panel[slot="widget"], .admin-panel[slot="widget2"], .admin-panel[slot="widget3"], hr[slot="widget"], hr[slot="widget2"], hr[slot="widget3"]');
    const widgets = this.querySelectorAll('.admin-panel[slot="widget"], .admin-panel[slot="widget2"], .admin-panel[slot="widget3"]');
    const rules = this.querySelectorAll('hr[slot="widget"], hr[slot="widget2"], hr[slot="widget3"]');
    const widgetContainer = this.shadowRoot.querySelector('slot[name="widget"], slot[name="widget2"], slot[name="widget3"]');

    dragItems.forEach((item, index) => {
      item.setAttribute('draggable', 'true');

      item.addEventListener('dragstart', event => {

        item.setAttribute('drag-id', index.toString());
        event.dataTransfer?.setData('text/plain', index.toString());
      });

      item.addEventListener('dragover', event => {
        event.preventDefault();
      });

      item.addEventListener('drop', event => {

        event.preventDefault();
        const dragId = event.dataTransfer?.getData('text/plain');


        if(dragId !== undefined) {
          const parent = item.parentNode;
          const draggedItem = dragItems[parseInt(dragId)];
          if(parent) {
            // if the dragged widget is already the sibling of the target widget, do nothing
            if(draggedItem.nextSibling && draggedItem.nextSibling === item) {

              parent.insertBefore(item, draggedItem);
            }
            else if(draggedItem && draggedItem !== item) {

              parent.insertBefore(draggedItem, item);
            }
          }
        }

      });
    });

    const widgetRows = this.querySelectorAll('.widget-row');

    widgetRows.forEach((row, index) => {
      row.addEventListener('dragover', event => {
        event.preventDefault();
        console.log('Dragging over row:', row.getAttribute('data-row'));
      });
      row.addEventListener('drop', event => {
        event.preventDefault();

        console.log('Dropped on row:', row.getAttribute('data-row'));
        event.stopImmediatePropagation();
        event.stopPropagation();


        const dragId = event.dataTransfer?.getData('text/plain');

        if(dragId !== undefined) {

          const draggedItem = dragItems[parseInt(dragId)];

          console.log(row.getAttribute('data-row'));
          console.log(draggedItem);

        }
      });

    });

    let interacting = false;

    widgets.forEach((widget, index) => {


      widget.setAttribute('draggable', 'true');

      widget.setAttribute('data-index', index);

      let resizeTimeout;
      const startingWidth = widget.offsetWidth;
      widget.setAttribute('data-resizing', 'true');

      widget.setAttribute('data-starting-width', startingWidth.toString());

      widget.style.setProperty('width', startingWidth + 'px');


      widget.addEventListener('mousedown', event => {

        interacting = true;

        widgets.forEach((innerWidget, index) => {

          if(innerWidget !== widget) {
            innerWidget.style.setProperty('width', innerWidget.offsetWidth + 'px');
            innerWidget.removeAttribute('data-resizing');
          }

        });

        // disable the previous selection or interaction
        widgets.forEach(w => w.removeAttribute('data-resizing'));
        widget.setAttribute('data-resizing', 'true');
      });

    });

    widgetContainer.addEventListener('dragover', event => {
      event.preventDefault();
    });

    this.addEventListener('mouseup', event => {
      interacting = false;


      const columnWidth = widgetContainer.offsetWidth / 12;
      widgets.forEach((widget, index) => {


        widget.removeAttribute('data-resizing');

        const width = widget.offsetWidth;


        //console.log(index, width);

        let col = Math.round(width / columnWidth);
        if(col < 3) col = 3;
        if(col > 12) col = 12;
        widget.style.setProperty('--col-span', col);
        // Remove the width set
        widget.style.width = '';

        widget.classList.remove('widget-sm','widget-md','widget-lg');

        const height = widget.offsetHeight;
        //console.log('Height:', height);
        if(height > 400) {
          widget.classList.add('widget-lg');
        }
        else  {
          widget.classList.remove('widget-lg');
        }

        widget.style.height = '';

      });
    });

    // #endregion widgets
  }

  static get observedAttributes(): Array<string> {
    return ['data-selected'];
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {
    switch (attrName) {
      case 'data-selected': {



        break;
      }
    }
  }
}

export default iamDashboard;
