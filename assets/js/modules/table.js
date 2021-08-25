function table(tableElement) {

  if(typeof tableElement != "object")
    return false;

  const tbody = tableElement.querySelector('tbody');
  const storedData = tbody.cloneNode(true);
  const sortedEvent = new Event('updated');
  const filteredEvent = new Event('filtered');

  const sortTable = function(sortBy,sort){

    // Create an array from the table rows, the index created is then used to sort the array
    let tableArr = [];
    Array.from(tbody.querySelectorAll('tr')).forEach((tableRow, index) => {
      const dataRow = {
        index: tableRow.querySelector('td[data-label="'+sortBy+'"]').textContent,
        row: tableRow
      }
      tableArr.push(dataRow);
    });

    // Sort array
    tableArr.sort((a, b) => (a.index > b.index) ? 1 : -1)

    // Reverse if descending
    if(sort == "descending")
      tableArr = tableArr.reverse();

    // Create a string to return and populate the tbody
    let strTbody = '';
    tableArr.forEach((tableRow, index) => {
      strTbody += tableRow.row.outerHTML;
    });
    tbody.innerHTML = strTbody;

    // Dispatch the sortable event
    tableElement.dispatchEvent(sortedEvent);
  }

  const createFilterForm = function(count){

    // Create wrapper div
    const form = document.createElement("div");
    form.classList.add('table__filters');
    form.classList.add('row');
    form.classList.add('pt-1');
    form.classList.add('pb-3');

    // Create the filter options array
    const filterColumns = Array.from(tableElement.querySelectorAll('th[data-filterable]'));

    // Populate a list of searchable terms from the cells of the columns that could be used as a filter
    let searchableTerms = {};
    filterColumns.forEach((columnHeading, index) => {
      Array.from(tableElement.querySelectorAll('td[data-label="'+columnHeading.textContent+'"]')).forEach((label, index) => {

        searchableTerms[label.textContent] = label.textContent;
      });
    });

    // Create the form
    const randID = Math.random().toString(36).substr(2, 9); // Random to make sure IDs created are unique
    const filterTitle = filterColumns.length == 1 ? "Filter by "+filterColumns[0].textContent : "Filter"; // Update title if only one filter is chosen
    const checkboxClass = filterColumns.length == 1 ? "d-none" : "d-sm-flex"; // Hide controls when only one filter is chosen

    form.innerHTML = `<div class="col-sm-6 col-md-4 pb-3">
  <div class="form-control__wrapper form-control-inline">
    <label for="${randID}_filter">${filterTitle}:</label>
    <input type="search" name="${randID}_filter" id="${randID}_filter" class="form-control" placeholder="" list="${randID}_list" />
  </div>
  <datalist id="${randID}_list">
    ${Object.keys(searchableTerms).map(term => `<option value="${term}"></option>`).join("")}
  </datalist>
</div>
<div class="col-md-8 align-items-center pb-3 ${checkboxClass}">
  ${`<span class="pe-3 text-nowrap">Filter by: </span>` + filterColumns.map(column => `<div class="form-check pe-3"><input class="form-check-input" type="checkbox" id="${randID}_${column.textContent.replace(' ','_').toLowerCase()}" checked="checked" /><label class="form-check-label text-nowrap" for="${randID}_${column.textContent.replace(' ','_').toLowerCase()}">${column.textContent}</label></div>`).join("")}
</div>`;

    // Add before the actual table
    tableElement.prepend(form)
  }

  const filterTable = function(searchTerm){

    // Create an array of rows that match the search term
    let tableArr = [];
    Array.from(storedData.querySelectorAll('tr')).forEach((tableRow, index) => {

      // We want one long search string per row including each filterable table cell
      let rowSearchString = '';
      Array.from(tableElement.querySelectorAll('[type="checkbox"]:checked + label')).forEach((label, index) => {
        rowSearchString += tableRow.querySelector('td[data-label="'+label.textContent+'"]').textContent+' | ';
      });

      // Check if the table row search string contains the search term
      if(rowSearchString.indexOf(searchTerm) >= 0){

        const dataRow = { row: tableRow }
        tableArr.push(dataRow);
      }
    });

    // Create a string to return and populate the tbody
    let strTbody = '';
    tableArr.forEach((tableRow, index) => {
      strTbody += tableRow.row.outerHTML;
    });
    tbody.innerHTML = strTbody;

    // Dispatch the filter event.
    tableElement.dispatchEvent(filteredEvent);
  }

  // Declare event handlers
  tableElement.addEventListener('click', function(e){
    for (var target = e.target; target && target != this; target = target.parentNode) {
      if (target.matches('[data-sortable]')) { 

        // Get current sort order
        let sort = target.getAttribute('aria-sort') == "ascending" ? "descending" : "ascending";

        // unset sort attributes
        Array.from(tableElement.querySelectorAll('[data-sortable]')).forEach((col, index) => {
          col.setAttribute('aria-sort','none');
        });

        // Set the sort order attribute
        target.setAttribute('aria-sort', sort);

        // Save the sort options on the table element so that it can be re-sorted later
        tableElement.setAttribute('data-sort', sort);
        tableElement.setAttribute('data-sortBy', target.textContent);

        // Sort the table
        sortTable(target.textContent, sort);

        break;
      }
    }
  }, false);

  // On page load check if the table should be pre-sorted, if so trigger a click
  if(tableElement.getAttribute('data-sortBy')){

    let sort = tableElement.getAttribute('data-sort') == "ascending" ? "descending" : "ascending";

    Array.from(tableElement.querySelectorAll('[data-sortable]')).forEach((col, index) => {
      if(col.textContent == tableElement.getAttribute('data-sortBy')){
        col.setAttribute('aria-sort',sort)
        col.click();
      }
    });
  }

  // On page load check if filters are needed
  if(Array.from(tableElement.querySelectorAll('[data-filterable]')).length){

    // Create the filter options
    createFilterForm(tableElement,Array.from(tableElement.querySelectorAll('[data-filterable]')).length);

    // Add event handlers for the filter options
    tableElement.addEventListener('keyup', function(e){
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('input[type="search"]')) {

          const searchTerm = target.value;
          filterTable(searchTerm)
        }
      }
    });

    tableElement.addEventListener('change', function(e){
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('input[type="search"]')) {

          const searchTerm = target.value;
          filterTable(searchTerm)
        }
      }
    });

    tableElement.addEventListener('change', function(e){
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('input[type="checkbox"]')) {

          const searchTerm = tableElement.querySelector('input[type="search"]').value;
          filterTable(searchTerm)
        }
      }
    });
  }

  // Watch for the filterable event and re-sort the tbody
  tableElement.addEventListener('filtered', function (e) { 
    
    if(tableElement.getAttribute('data-sortBy') && tableElement.getAttribute('data-sort'))
      sortTable(tableElement.getAttribute('data-sortBy'), tableElement.getAttribute('data-sort'));
  }, false);
}

export default table