

export const createWidgets = (wrapper: HTMLElement, items: HTMLElement[]): [HTMLElement[], HTMLElement[]] => {

  const widgets: HTMLElement[] = [];
  const widgetRows: HTMLElement[] = [];

  // Clear the wrapper before adding new widget rows
  wrapper.innerHTML = '';

  // Loop through each item and create a corresponding widget and row if necessary
  items.forEach((item,index) => {

    // Create the widget which will then be given the controls to re-order and resize within the dashboard
    const widget = document.createElement('div');
    widget.classList.add('admin-panel', 'widget');
    widget.setAttribute('draggable', 'true');

    // Create a slot for the shadow widget
    const widgetSlot = document.createElement('slot');
    widgetSlot.setAttribute('name', `widget-${index}`);

    // Update the pages slot to match the shadow widget slot name
    item.setAttribute('slot', `widget-${index}`);
    item.className = '';

    // Move the page widget title into the shadow widget
    const title = item.querySelector('h2');
    if(title) {
      widget.insertBefore(title.cloneNode(true), widget.firstChild);
      title.classList.add('d-none');
    }

    // Either create a new row or append to an existing row
    const currentWidgetRow = wrapper.querySelector('.widget-row:last-child');

    currentWidgetRow?.setAttribute('data-column-count', (parseInt(currentWidgetRow?.getAttribute('data-column-count') ?? '0') + 4).toString());

    let widgetRow = currentWidgetRow ?? document.createElement('div');
    if(!currentWidgetRow || currentWidgetRow.getAttribute('data-column-count') === '12') {
      const newWidgetRow = document.createElement('div');
      newWidgetRow.classList.add('widget-row', 'sub-grid');


      wrapper.appendChild(newWidgetRow);

      // Make sure we use the new widget row for subsequent appends
      widgetRow = newWidgetRow;
    }

    // Append to shadow dom
    widget.appendChild(widgetSlot);
    widgetRow.appendChild(widget);
    widgets.push(widget);
    if(!widgetRows.includes(widgetRow)) {
      widgetRows.push(widgetRow);
    }
  });

  return [widgets, widgetRows];
};


export const attachDragEventsToRows = (wrapper: HTMLElement, rows: HTMLElement[]): void => {

  rows.forEach(widgetRow => {
    widgetRow.addEventListener('dragover', event => {
      event.preventDefault();
    });
    widgetRow.addEventListener('drop', event => {
      event.preventDefault();

      const dragId = event.dataTransfer?.getData('text/plain');
      if(dragId !== undefined) {
        const draggedItem = wrapper.querySelector(`[data-drag-id="${dragId}"]`);
        if(draggedItem) {
          widgetRow.appendChild(draggedItem);
        }
      }
    });
  });
}

export const attachDragEvents = (wrapper: HTMLElement, items: HTMLElement[]): void => {

  items.forEach((item, index) => {
    item.setAttribute('draggable', 'true');

    item.addEventListener('dragstart', event => {

      item.setAttribute('data-drag-id', index.toString());
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
        const draggedItem = wrapper.querySelector(`[data-drag-id="${dragId}"]`);
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

};

export const attachResizeEvents = (wrapper: HTMLElement, items: HTMLElement[]): void => {

  let activeWidget: HTMLElement | null = null;
  const columnWidth = wrapper?.offsetWidth ? wrapper.offsetWidth / 12 : 0;

/*
  const resizeObserver = new ResizeObserver(entries => {
    for(const entry of entries) {
      if(entry.target instanceof HTMLElement) {

        console.log(items);
      }
    wrapper.addEventListener('dragover', event => {
  });

*/


  items.forEach(item => {

    item.addEventListener('mousedown', event => {
      activeWidget = item;

      console.log('Widget interaction started:', item);
      wrapper?.setAttribute('data-interacting', 'true');

      items.forEach((innerItem, index) => {

        if(innerItem !== item) {
          innerItem.style.setProperty('width', innerItem.offsetWidth + 'px');
          innerItem.removeAttribute('data-resizing');
        }

      });

      // disable the previous selection or interaction
      items.forEach(w => w.removeAttribute('data-resizing'));
      item.setAttribute('data-resizing', 'true');
    });

    item.addEventListener('mou', event => {
      activeWidget = item;

      console.log('Widget interaction started:', item);
      wrapper?.setAttribute('data-interacting', 'true');

      items.forEach((innerItem, index) => {

        if(innerItem !== item) {
          innerItem.style.setProperty('width', innerItem.offsetWidth + 'px');
          innerItem.removeAttribute('data-resizing');
        }

      });

      // disable the previous selection or interaction
      items.forEach(w => w.removeAttribute('data-resizing'));
      item.setAttribute('data-resizing', 'true');
    });


    //resizeObserver.observe(item);
  });


  wrapper.addEventListener('mouseup', event => {

    // Reset the active widget since the mouse is released
    activeWidget = null;

    items.forEach((widget, index) => {

      widget.removeAttribute('data-resizing');

      const width = widget.offsetWidth;

      let col = Math.round(width / columnWidth);
      if(col < 3) col = 3;
      if(col > 12) col = 12;
      widget.style.setProperty('--col-span', col);
      // Remove the width set
      widget.style.width = '';

/*
      const height = widget.offsetHeight;
      //console.log('Height:', height);
      if(height > 400) {
        widget.classList.add('widget-lg');
      }
      else  {
        widget.classList.remove('widget-lg');
      }

      widget.style.height = '';
      */
    });

    // Clear the data attributes used as flags for interaction and resizing
    setTimeout(() => {
      wrapper?.removeAttribute('data-interacting');
      wrapper?.removeAttribute('data-resizing');
    }, 10);
  });


};
