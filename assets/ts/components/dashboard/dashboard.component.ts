
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
        <div id="startup-widget-row" class="widget-row sub-grid">
          <slot name="widget"></slot>
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

    const pageWidgets = this.querySelectorAll('div[slot="widget"]');

    let widgets = [];
    const widgetWrapper = this.shadowRoot.querySelector('#widgetWrapper');

    widgetWrapper.innerHTML = '';

    pageWidgets.forEach((widget,index) => {

      // Create the widget which will then be given the controls to re-order and resize within the dashboard
      const shadowWidget = document.createElement('div');
      shadowWidget.classList.add('admin-panel');
      shadowWidget.setAttribute('draggable', 'true');

      // Create a slot for the shadow widget
      const shadowWidgetSlot = document.createElement('slot');
      shadowWidgetSlot.setAttribute('name', `widget-${index}`);

      // Update the pages slot to match the shadow widget slot name
      widget.setAttribute('slot', `widget-${index}`);
      widget.className = '';

      // Move the page widget title into the shadow widget
      const title = widget.querySelector('h2');
      if(title) {
        shadowWidget.insertBefore(title.cloneNode(true), shadowWidget.firstChild);
        title.classList.add('d-none');
      }

      // Either create a new row or append to an existing row

      const currentWidgetRow = widgetWrapper.querySelector('.widget-row:last-child');

      currentWidgetRow?.setAttribute('data-column-count', (parseInt(currentWidgetRow?.getAttribute('data-column-count') ?? '0') + 4).toString());

      let widgetRow = currentWidgetRow ?? document.createElement('div');
      if(!currentWidgetRow || currentWidgetRow.getAttribute('data-column-count') === '12') {
        const newWidgetRow = document.createElement('div');
        newWidgetRow.classList.add('widget-row', 'sub-grid');

        newWidgetRow.addEventListener('dragover', event => {
          event.preventDefault();
        });
        newWidgetRow.addEventListener('drop', event => {
          event.preventDefault();

        console.log('drop into row');
          const dragId = event.dataTransfer?.getData('text/plain');
          if(dragId !== undefined) {
            const draggedItem = dragItems[parseInt(dragId)];
            if(draggedItem) {
              newWidgetRow.appendChild(draggedItem);
            }
          }
        });


        widgetWrapper.appendChild(newWidgetRow);

        // Make sure we use the new widget row for subsequent appends
        widgetRow = newWidgetRow;
      }


      // Append to shadow dom
      shadowWidget.appendChild(shadowWidgetSlot);
      widgetRow.appendChild(shadowWidget);
    });


    const dragItems = widgetWrapper.querySelectorAll('.admin-panel');
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
        event.stopPropagation();
        event.stopImmediatePropagation();
        console.log('drop onto item');
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



    /*
    const dragItems = this.querySelectorAll('div[slot^="widget-"]');




    const widgetContainer = this.shadowRoot.querySelector('slot[name="widget"]');

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

    let activeWidget: HTMLElement | null = null;

    const resizeObserver = new ResizeObserver(entries => {
      for(const entry of entries) {
        if(entry.target instanceof HTMLElement) {

          widgets.forEach((widget, index) => {
            widget.classList.remove('widget-sm','widget-md','widget-lg');
          });
        }
      }
    });


    widgets.forEach((widget, index) => {


      widget.setAttribute('draggable', 'true');
      widget.setAttribute('data-index', index.toString());

      const startingWidth = widget.offsetWidth;
      widget.setAttribute('data-resizing', 'true');
      widget.setAttribute('data-starting-width', startingWidth.toString());

      widget.style.setProperty('width', startingWidth + 'px');


      widget.addEventListener('mousedown', event => {
        activeWidget = widget;

        console.log('Widget interaction started:', widget);
        widgetContainer?.setAttribute('data-interacting', 'true');

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

      // check when the widget is being resized

      // use a resizze observer to track changes in widget size

      resizeObserver.observe(widget);

    });

    widgetContainer.addEventListener('dragover', event => {
      event.preventDefault();
    });

    widgetContainer.addEventListener('mouseup', event => {
      activeWidget = null;

      const columnWidth = widgetContainer?.offsetWidth ? widgetContainer.offsetWidth / 12 : 0;

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


      // Clear the data attributes used as flags for interaction and resizing

      setTimeout(() => {
        widgetContainer?.removeAttribute('data-interacting');
        widgetContainer?.removeAttribute('data-resizing');
      }, 10);

    });

    */
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
