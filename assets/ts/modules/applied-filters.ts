function createAppliedFilters(container, filters): void {

  const dialog = container.closest('dialog');

  const addFilterButton = (filters, input, setFilter = false): void | boolean => {
    let shouldRemoveFilter = false;
    let inputName = input.getAttribute('name');

    if (!inputName) {
      return false;
    }

    if (inputName.includes('[]')) {
      inputName = inputName.replace('[]', `[${input.value}]`);
    }

    let filter = filters.querySelector(`[data-name="${inputName}"]`);

    if (filter && input.getAttribute('type') == 'checkbox') shouldRemoveFilter = !input.checked ? true : false;

    const filterText = input.getAttribute('data-filter-text');

    if (!filter) {
      filter = document.createElement('button');
      filters.appendChild(filter);
    }

    filter.setAttribute('type', 'button');
    filter.classList.add('filter');
    filter.classList.add('tag');

    if (!setFilter) filter.classList.add('tag--not-set');

    filter.setAttribute('data-name', inputName);

    filter.innerHTML = filterText.replace('$value', input.value);

    // If the value
    if (!input.value || shouldRemoveFilter) filter.remove();

    // If input has an ancestor with data-filter and all of inputs in that parent have been filled in then we need to transform the filter
    if (input.parentNode.closest('[data-filter-text]')) {
      const parent = input.parentNode.closest('[data-filter-text]');
      let allValuesSet = true;
      inputName = '';

      parent.querySelectorAll('input').forEach((element, index) => {
        const name = element.getAttribute('name');

        // create a joined inputname for the parent filter
        inputName += `${index != 0 ? ',' : ''}${name}`;

        if (filters.querySelector(`[data-name="${name}"]`)) filters.querySelector(`[data-name="${name}"]`).remove();

        if (element.value) {
          const childFilter = document.createElement('button');
          childFilter.setAttribute('type', 'button');
          childFilter.classList.add('filter');
          childFilter.classList.add('tag');

          if (!setFilter) filter.classList.add('tag--not-set');

          childFilter.setAttribute('data-name', name);
          childFilter.innerHTML = filterText.replace('$value', element.value);
          filters.appendChild(childFilter);
        } else allValuesSet = false;
      });

      if (filters.querySelector(`[data-name="${inputName}"]`))
        filters.querySelector(`[data-name="${inputName}"]`).remove();

      if (allValuesSet) {
        let newFilterText = parent.getAttribute('data-filter-text');
        parent.querySelectorAll('input').forEach((element, index) => {
          const name = element.getAttribute('name');

          // Remove all the child filter tags
          if (filters.querySelector(`[data-name="${name}"]`)) filters.querySelector(`[data-name="${name}"]`).remove();

          newFilterText = newFilterText.replace(`$${index + 1}`, element.value);
        });

        const parentFilter = document.createElement('button');
        parentFilter.setAttribute('type', 'button');
        parentFilter.classList.add('filter');
        parentFilter.classList.add('tag');

        if (!setFilter) filter.classList.add('tag--not-set');

        parentFilter.setAttribute('data-name', inputName);
        parentFilter.innerHTML = newFilterText;
        filters.appendChild(parentFilter);
      }
    }
  };

  const checkForChecked = (setFilter = false) => {

    filters.innerHTML = '';
    Array.from(
      container.querySelectorAll('input:is([type="checkbox"],[type="radio"]):checked, input:not([type="checkbox"], [type="radio"])')
    ).forEach((input) => {
      addFilterButton(filters, input, setFilter);
    });
  };
  // Check for which inputs have been set, setting true sets the filter as set (blue)
  checkForChecked(true);

  // Create the main event listener for the component watching for inputs to change

  Array.from(container.querySelectorAll('input[data-filter-text]')).forEach((input) => {
    
    input.addEventListener('change', function (event) { 
      
      const setFilter = container.closest('dialog') ? false : true;

      if (!container.hasAttribute('data-keep-same') && !container.querySelector('dialog')) 
        addFilterButton(filters, input, setFilter);

      if(setFilter){
        
        const event = new CustomEvent('update');
        container.parentElement.closest('iam-applied-filters')?.dispatchEvent(event);
      }
    });
  });


  const filterClicked = (filter) => {

    if(!filter?.hasAttribute('data-name'))
      return false;

    const names = filter.getAttribute('data-name').split(',');

    for (let t = 0; t < names.length; t++) {
      const name = names[t];
      let selector = `[name="${name}"]`;

      if (name.match(/\[(.*)\]/)) {
        //const newName = name.replace(/\[(.*)\]/, `[]`);
        const value = name.replace(/.*\[(.*)\]/, `$1`);
        selector = `[value="${value}"]`;
      }

      const inputs = container.querySelectorAll(selector);

      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        if (input.getAttribute('type') != 'radio' && input.getAttribute('type') != 'checkbox') {
          input.value = '';
        } else {
          input.checked = false;
        }

        const changeEvent = new CustomEvent('change');
        input?.dispatchEvent(changeEvent);
      }
    }

    filter.remove();
    checkForChecked();
  };





  filters.addEventListener(
    'click',
    function (event) {
      if (event && event.target instanceof HTMLElement && event.target.closest('.filter')) {
        const filter = event.target.closest('.filter');
        const filterName = filter.getAttribute('data-name');

        filterClicked(filter);

        const clickedEvent = new CustomEvent('filter-clicked',{'detail':filterName });
        container.dispatchEvent(clickedEvent);

        // If you clicked on the filter on the parent component we want to tell the child component which filter to copy
        if(container.querySelector('dialog iam-applied-filters')) {
          const event = new CustomEvent('filter',{'detail':filterName });
          container.querySelector('dialog iam-applied-filters').dispatchEvent(event);
        }
      }
    },
    false
  );

  // Listen for 
  container.addEventListener('filter', (e) => {

    const filter = container.shadowRoot.querySelector(`[data-name="${e.detail}"]`);

    filterClicked(filter);
  });

  container.addEventListener('set-filters', (e) => {

    checkForChecked(true);
  });

  if(dialog){
    const primaryButton = container.querySelector('.btn-primary') ? container.querySelector('.btn-primary') : container.shadowRoot.querySelector('.btn-primary');
    // Force the filters inside of the dialog to effect the filters above
    primaryButton?.addEventListener('click', (e) => {

      const event = new CustomEvent('update');
      const submitEvent = new CustomEvent('submit');

      container.dispatchEvent(submitEvent);
      
      if(container.parentElement.closest('iam-applied-filters'))
        container.parentElement.closest('iam-applied-filters').dispatchEvent(event);

      if(container.parentElement && container.parentElement.closest('iam-applied-filters') && !container.parentElement.closest('iam-applied-filters').closest('dialog')){

        const event = new CustomEvent('set-filters');
        container.parentElement.closest('iam-applied-filters').dispatchEvent(event);
      }


      checkForChecked(true);

      if(!container.querySelector('.btn-primary').hasAttribute('command')){
        
        dialog.close();
        const event = new Event('close');
        dialog.dispatchEvent(event);
      }

    });
  }
}

export default createAppliedFilters;
