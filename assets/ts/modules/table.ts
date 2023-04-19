// @ts-nocheck
import { zeroPad, isNumeric } from "./helpers";

function table(tableElement) {

  if(typeof tableElement != "object")
    return false;

  const thead = tableElement.querySelector('thead');
  const tbody = tableElement.querySelector('tbody');
  const storedData = tbody.cloneNode(true);
  const sortedEvent = new Event('sorted');
  const filteredEvent = new Event('filtered');
  const reorderedEvent = new Event('reordered');
  const randID = 'table_'+Math.random().toString(36).substr(2, 9); // Random to make sure IDs created are unique
  let draggedRow;

  tableElement.setAttribute('id',randID)

  // #region Sortable
  const sortTable = function(sortBy,sort){

    // Create an array from the table rows, the index created is then used to sort the array
    let tableArr = [];
    Array.from(tbody.querySelectorAll('tr')).forEach((tableRow, index) => {

      let rowIndex = tableRow.querySelector('td[data-label="'+sortBy+'"], th[data-label="'+sortBy+'"]').textContent;

      if(isNumeric(rowIndex))
        rowIndex = zeroPad(rowIndex,10)

      const dataRow = {
        index: rowIndex,
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

        Array.from(tableElement.querySelectorAll('tr[draggable]')).forEach((tableRow, index) => {

          tableRow.removeAttribute('draggable');
        });
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

  // #endregion Sortable

  // #region Filters
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
    const filterTitle = filterColumns.length == 1 ? "Filter by "+filterColumns[0].textContent : "Filter"; // Update title if only one filter is chosen
    const checkboxClass = filterColumns.length == 1 ? "d-none" : "d-sm-flex"; // Hide controls when only one filter is chosen

    form.innerHTML = `<div class="col-sm-6 col-md-4 pb-3">
  <div class="form-control__wrapper form-control-inline mb-0">
    <label for="${randID}_filter" class="form-label">${filterTitle}:</label>
    <input type="search" name="${randID}_filter" id="${randID}_filter" class="form-control form-control-sm" placeholder="" list="${randID}_list" />
  </div>
  <datalist id="${randID}_list">
    ${Object.keys(searchableTerms).map(term => `<option value="${term}"></option>`).join("")}
  </datalist>
</div>
<div class="col-md-8 align-items-center pb-3 ${checkboxClass}">
  ${`<span class="pe-3 text-nowrap h5 mb-0">Filter by: </span>` + filterColumns.map(column => `<div class="form-check pe-3 mt-0 mb-0"><input class="form-check-input" type="checkbox" id="${randID}_${column.textContent.replace(' ','_').toLowerCase()}" checked="checked" /><label class="form-check-label text-nowrap" for="${randID}_${column.textContent.replace(' ','_').toLowerCase()}">${column.textContent}</label></div>`).join("")}
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

  const createFilterList = function(){

    // Check which options are checked
    let filterOptions = [];
    Array.from(tableElement.querySelectorAll('[type="checkbox"]:checked + label')).forEach((label, index) => {
      filterOptions.push(label.textContent);
    });

    // Build up the list of searchable terms
    let searchableTerms = [];
    filterOptions.forEach((option, index) => {
      Array.from(tableElement.querySelectorAll('td[data-label="'+option+'"]')).forEach((label, index) => {
        searchableTerms[label.textContent] = label.textContent;
      });
    });

    // Rebuild the list
    let dataList = tableElement.querySelector('datalist');
    dataList.innerHTML = Object.keys(searchableTerms).map(term => `<option value="${term}"></option>`).join("");
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
          createFilterList()
        }
      }
    });
  }
  // #endregion Filters

  // #region Pagination
  const paginateRows = function(show, page){

    // Create some inline CSS to control what is viewed on the table, unline the filters we are just hiding the rable rows not removing them from the DOM.
    let style = document.getElementById(randID+'_style');

    if(style == null){
      style = document.createElement("style");
      style.setAttribute('id',randID+'_style')
    }

    const startShowing = (show*(page-1))+1;
    const stopShowing = show*(page);

    style.innerHTML = `
    #${randID} tbody tr {
      display: none;
    }
    #${randID} tbody tr:nth-child(${startShowing}),
    #${randID} tbody tr:nth-child(${startShowing}) ~ tr{
      display: block;
    }
    @media screen and (min-width: 36em) {
      #${randID} tbody tr:nth-child(${startShowing}),
      #${randID} tbody tr:nth-child(${startShowing}) ~ tr{
        display: table-row;
      }
    }
    #${randID} tbody tr:nth-child(${stopShowing}) ~ tr{
      display: none;
    }
    `;

    tableElement.append(style);
  }

  // On page load check if the table should be paginated
  if(tableElement.getAttribute('data-show')){

    const show = parseInt(tableElement.getAttribute('data-show'));
    const page = parseInt(tableElement.getAttribute('data-page')) ? parseInt(tableElement.getAttribute('data-page')) : 1;
    const totalRows = tableElement.querySelectorAll('tbody tr').length;

    if(show < totalRows){
      paginateRows(show,page);
      createPaginationForm(randID,tableElement,show,page,totalRows);
      createPaginationButttons(randID,tableElement,show,page,totalRows);

      tableElement.addEventListener('change', function(e){
        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('.table__pagination input[type="number"]')) {

            paginateRows(target.value,page);
            createPaginationButttons(randID,tableElement,target.value,page,totalRows);
            tableElement.setAttribute('data-show',target.value)
          }
        }
      });

      tableElement.addEventListener('click', function(e){
        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('.page-item:not(.active):not(.disabled) .page-link')) {

            paginateRows(tableElement.getAttribute('data-show'),target.getAttribute('data-page'));
            createPaginationButttons(randID,tableElement,tableElement.getAttribute('data-show'),target.getAttribute('data-page'),totalRows);
          }
        }
      }, false);

      tableElement.addEventListener('change', function(e){
        for (var target = e.target; target && target != this; target = target.parentNode) {
          if (target.matches('.table__pagination select')) {

            paginateRows(tableElement.getAttribute('data-show'),target.value);
            createPaginationButttons(randID,tableElement,tableElement.getAttribute('data-show'),target.value,totalRows);
          }
        }
      });
    }
  }
  // #endregion Pagination

  // #region Reorderable
  // Set the row thats being dragged and copy the row
  function setDraggedRow(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    draggedRow = e.target;
    e.target.classList.add('tr--dragging');
  }

  // Create the order column and event handler for rows
  const setReorderRows = function(){

    Array.from(tbody.querySelectorAll('tr')).forEach((tableRow, index) => {

      // Create column if not already created
      if(tableRow.querySelector('[data-label="Order"]') == null){

        const orderColumn = document.createElement('th');
        orderColumn.innerHTML = index + 1;
        orderColumn.setAttribute('data-label','Order');
        tableRow.prepend(orderColumn);
      }

      // Make draggable
      tableRow.setAttribute('id',randID+'_row_'+(index+1));
      tableRow.setAttribute('data-order',index+1);
      tableRow.setAttribute('draggable','true');
      tableRow.addEventListener("dragstart", setDraggedRow);
    });
  }

  if(tableElement.getAttribute('data-reorder') && tableElement.getAttribute('data-reorder') != "false"){

    // Add column heading
    const orderHeading = document.createElement('th');
    orderHeading.innerHTML = 'Order';
    orderHeading.title = 'Click here to enable re-ordering via drag and drop';
    orderHeading.classList.add('table-order-reset');
    thead.querySelector('tr').prepend(orderHeading);

    setReorderRows();

    // Reset order button
    tableElement.addEventListener('click', function(e){
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('.table-order-reset')) {

          // unset sort attributes
          Array.from(tableElement.querySelectorAll('[data-sortable]')).forEach((col, index) => {
            col.setAttribute('aria-sort','none');
          });

          // Save the sort options on the table element so that it can be re-sorted later
          tableElement.removeAttribute('data-sort');
          tableElement.removeAttribute('data-sortBy');

          // Sort the table
          sortTable('Order', 'ascending');

          Array.from(tableElement.querySelectorAll('tbody tr')).forEach((tableRow, index) => {

            tableRow.setAttribute('draggable','true');
          });

          break;
        }
      }
    }, false);


    document.addEventListener("dragover", function( e ) {
      // prevent default to allow drop
      e.preventDefault();
    }, false);

    document.addEventListener("dragenter", function( e ) {
      // prevent default to allow drop
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";

      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('[data-reorder] tbody tr')) {

          target.classList.add('tr--dropable')
        }
      }
    }, false);

    document.addEventListener("dragleave", function( e ) {
      // prevent default to allow drop
      e.preventDefault();
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('[data-reorder] tbody tr')) {

          target.classList.remove('tr--dropable')
        }
      }
    }, false);

    document.addEventListener("drop", function(e) {

      e.preventDefault();

      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('[data-reorder] tbody tr')) {

          if(target.parentNode != null && draggedRow.parentNode != null && target != draggedRow){

            draggedRow.parentNode.removeChild( draggedRow );

            if(draggedRow.getAttribute('data-order') > target.getAttribute('data-order'))
              target.parentNode.insertBefore(draggedRow, target);
            else
              target.parentNode.insertBefore(draggedRow, target.nextElementSibling);

            // Re label the rows
            Array.from(tbody.querySelectorAll('tr')).forEach((tableRowOrder, index) => {
              tableRowOrder.classList.remove('tr--dragging')
              tableRowOrder.classList.remove('tr--dropable')
              tableRowOrder.querySelector('th').innerHTML = index + 1;
              tableRowOrder.setAttribute('data-order',index+1);
            });

            tableElement.dispatchEvent(reorderedEvent);
          }
          break;
        }
      }
    }, false);

  }
  // #endregion Reorderable

  // Watch for the filterable event and re-sort the tbody
  tableElement.addEventListener('filtered', function (e) {

    if(tableElement.getAttribute('data-sortBy') && tableElement.getAttribute('data-sort'))
      sortTable(tableElement.getAttribute('data-sortBy'), tableElement.getAttribute('data-sort'));

    if(tableElement.getAttribute('data-show')){

      const show = parseInt(tableElement.getAttribute('data-show'));
      const totalRows = tableElement.querySelectorAll('tbody tr').length;
      const tablePagination = tableElement.querySelector('.table__pagination');

      if(tablePagination != null)
        tablePagination.remove();

      if(show < totalRows){

        paginateRows(show,1);
        createPaginationForm(randID,tableElement,show,1,totalRows);
        createPaginationButttons(randID,tableElement,show,1,totalRows);
      }
    }

    if(tableElement.getAttribute('data-reorder')){

      setReorderRows();
    }
  }, false);

  tableElement.addEventListener('sorted', function (e) {

    if(tableElement.getAttribute('data-reorder')){

      setReorderRows();
    }
  }, false);

  tableElement.addEventListener('populated', function (e) {

    var tableFilter = tableElement.querySelector('.table__filters')
    tableFilter.remove();

    var tablePagination = tableElement.querySelector('.table__pagination')
    tablePagination.remove();

    var newTable = tableElement.cloneNode(true);
    tableElement.parentNode.replaceChild(newTable, tableElement);

    table(newTable);
  }, false);
}

export const createPaginationForm = function(randID,tableElement,show,page,totalRows){

  const form = document.createElement("div");
  form.classList.add('table__pagination');
  form.classList.add('row');
  form.classList.add('pt-3');
  form.classList.add('pb-3');

  // Create the form and create a container div to hold the pagination buttons
  form.innerHTML = `<div class="col mw-fit-content mb-3">
<div class="form-control__wrapper form-control-inline mb-0">
  <label for="${randID}_showing" class="form-label">Showing:</label>
  <input type="number" name="${randID}_showing" id="${randID}_showing" class="form-control form-control-sm showing-input-field" placeholder="" list="${randID}_pagination" value="${show}" min="1" max="${totalRows}" />
</div>
<datalist id="${randID}_pagination">
<option value="5">5</option>
${totalRows > 10 ? `<option value="10">10</option>` : ''}
${totalRows > 20 ? `<option value="20">20</option>` : ''}
<option value="${totalRows}">${totalRows}</option>
</datalist>
</div>
<div class="col mw-fit-content me-auto d-flex align-items-center mb-3"><span class="label">per page</span></div>
<div class="col mw-fit-content d-sm-flex justify-content-end align-items-center" id="${randID}_paginationBtns"></div>`;

  // Add after the actual table
  tableElement.append(form)
}

export const createPaginationButttons = function(randID,tableElement,show,page,totalRows){

  const paginationButtonsWrapper = document.getElementById(randID+'_paginationBtns')

  if(paginationButtonsWrapper == null)
    return false;

  const numberPages = Math.ceil(totalRows / show)

  if(numberPages == 1){ // Remore the buttons or dont display any if we dont need them
    paginationButtonsWrapper.innerHTML = '';
  }
  else if(numberPages < 5){ // If less than 5 pages (which fits comfortably on mobile) we display buttons

    let strButtons = '';

    for (let i = 1; i <= numberPages; i++) {

      if(i == page)
        strButtons += `<li class="page-item active" aria-current="page"><span class="page-link">${i}</span></li>`;
      else
        strButtons += `<li class="page-item"><button class="page-link" data-page="${i}">${i}</button></li>`;
    }

    paginationButtonsWrapper.innerHTML = `<span class="pe-2 mb-3">Page: </span><ul class="pagination mb-3">
      ${page == 1 ? `<li class="page-item disabled"><span class="page-link">Previous</span></li>` : `<li class="page-item"><button class="page-link" data-page="${parseInt(page)-1}">Previous</button></li>`}
      ${strButtons}
      ${page == numberPages ? `<li class="page-item disabled"><span class="page-link">Next</span></li>` : `<li class="page-item"><button class="page-link" data-page="${parseInt(page)+1}">Next</button></li>`}
    </ul>`;

  }
  else { // If more than 5 lets show a select field instead so that we dont have loads and loads of buttons

    let strOptions = '';

    for (let i = 1; i <= numberPages; i++) {

      if(i == page)
        strOptions += `<option value="${i}" selected>Page ${i}</option>`;
      else
        strOptions += `<option value="${i}">Page ${i}</option>`;
    }

    paginationButtonsWrapper.innerHTML = `
<div class="form-control__wrapper page-number mb-2">
<select class="form-select">
${strOptions}
</select>
</div>
    `;
  }
}

export default table
