import { createWidgets, attachDragEvents, attachDragEventsToRows, attachResizeEvents } from '../../modules/widgets';
class iamDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/dashboard.component.css";`;
    const template = document.createElement('template');
    template.innerHTML = /* HTML */`
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
        <!-- Initial widget row template, will be dynamically updated and split into multiple rows by JavaScript -->
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
    const slottedItems = Array.from(this.querySelectorAll('[slot="widget"]')) as HTMLElement[];
    const widgetWrapper = this.shadowRoot.querySelector('#widgetWrapper');

    const [widgets, widgetRows] = createWidgets(widgetWrapper, slottedItems);

    console.log('widgets:', widgets);
    console.log('widgetRows:', widgetRows);

    attachDragEventsToRows(widgetWrapper, widgetRows);
    attachDragEvents(widgetWrapper, widgets);

    attachResizeEvents(widgetWrapper, widgets);

    console.log('hey')
    /*


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
