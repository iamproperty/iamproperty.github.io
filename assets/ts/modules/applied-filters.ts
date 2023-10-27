// @ts-nocheck
function createAppliedFilters(container,filters) {


  function addFilterButton (filters, input){

    let shouldRemoveFilter = false;
    let inputName = input.getAttribute('name');
    
    if(inputName.includes('[]'))
      inputName = inputName.replace('[]',`[${input.value}]`);

    let filter = filters.querySelector(`[data-name="${inputName}"]`);

    if(filter && input.getAttribute('type') == 'checkbox')
      shouldRemoveFilter = !input.checked ? true : false;

    let filterText = input.getAttribute('data-filter-text');
    
    if(!filter) {
      filter = document.createElement('button');
      filters.appendChild(filter);
    }
    
    filter.setAttribute('type','button')
    filter.classList.add('filter');
    filter.setAttribute('data-name',inputName);

    filter.innerHTML = filterText.replace('$value', input.value);

    // If the value
    if(!input.value || shouldRemoveFilter)
      filter.remove();



    // If input has an ancestor with data-filter and all of inputs in that parent have been filled in then we need to transform the filter
    if(input.parentNode.closest('[data-filter-text]')){
      let parent = input.parentNode.closest('[data-filter-text]');
      let allValuesSet = true;
      inputName = "";

      parent.querySelectorAll('input').forEach((element,index) => {

        let name = element.getAttribute('name');

        // create a joined inputname for the parent filter
        inputName += `${index!=0?',':''}${name}`;

        if(filters.querySelector(`[data-name="${name}"]`))
          filters.querySelector(`[data-name="${name}"]`).remove();

        if(element.value){

          let childFilter = document.createElement('button');
          childFilter.setAttribute('type','button')
          childFilter.classList.add('filter');
          childFilter.setAttribute('data-name',name);
          childFilter.innerHTML = filterText.replace('$value', element.value);
          filters.appendChild(childFilter);
        }
        else
          allValuesSet = false;
      });

      if(filters.querySelector(`[data-name="${inputName}"]`))
        filters.querySelector(`[data-name="${inputName}"]`).remove();

      if(allValuesSet){

        let newFilterText = parent.getAttribute('data-filter-text');
        parent.querySelectorAll('input').forEach((element,index) => {
          
          let name = element.getAttribute('name');

          // Remove all the child filter tags
          if(filters.querySelector(`[data-name="${name}"]`))
            filters.querySelector(`[data-name="${name}"]`).remove();

          newFilterText = newFilterText.replace(`$${index+1}`,element.value);
        });

        let parentFilter = document.createElement('button');
        parentFilter.setAttribute('type','button')
        parentFilter.classList.add('filter');
        parentFilter.setAttribute('data-name',inputName);
        parentFilter.innerHTML = newFilterText;
        filters.appendChild(parentFilter);
      }


    }

  }

  // check for inputs on load
  Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).forEach((input, index) => {
    addFilterButton(filters, input)
  });


  // check for change in displayed inputs
  Array.from(container.querySelectorAll('input[data-filter-text]')).forEach((input, index) => {

    input.addEventListener('change', function(event){

      addFilterButton(filters, input);
      event.stopPropagation(); // Don't allow the below event handler to trigger
    });
  });

  // Some change event aren't getting triggered above so this event listener on the container will pick them up. This happens with input in modals
  container.addEventListener('change', function(event){

    if (event && event.target instanceof HTMLElement && event.target.closest('input[data-filter-text]')){
      let input = event.target.closest('input[data-filter-text]');
      addFilterButton(filters, input);
    }
  });

  filters.addEventListener('click', function(event){

    if (event && event.target instanceof HTMLElement && event.target.closest('.filter')){
      let filter = event.target.closest('.filter');
      let names = filter.getAttribute('data-name').split(',')

      for(var t=0;t<names.length;t++){
        let name = names[t];
        let selector = `[name="${name}"]`;

        if(name.match(/\[(.*)\]/)){
          let newName = name.replace(/\[(.*)\]/,`[]`);
          let value = name.replace(/.*\[(.*)\]/,`$1`);
          selector = `[value="${value}"]`;
        }

        let inputs = container.querySelectorAll(selector);

        for(var i=0;i<inputs.length;i++){
          let input = inputs[i];


          if(input.getAttribute('type') != 'radio' && input.getAttribute('type') != 'checkbox')
            input.value = "";
          else {
            input.checked = false;

            var event = new Event('force');
            if(!container.hasAttribute('data-nosubmit'))
              input.closest('form').dispatchEvent(event);
          }
        }
      }

      filter.remove();
    }

  }, false);


}

export default createAppliedFilters;