// @ts-nocheck
import { zeroPad, isNumeric, ucfirst } from "./helpers";

// Basic functionality needed
export const addDataAttributes = (table) => {

  const colHeadings = Array.from(table.querySelectorAll('thead th'));
  const colRows = Array.from(table.querySelectorAll('tbody tr'));

  colRows.forEach((row, index) => {

    const cells = Array.from(row.querySelectorAll('th, td'));
    const statuses = ['Low','Medium','High','N/A','Pending','Verified','Incomplete','Completed','Requires approval'];
    
    cells.forEach((cell, cellIndex) => {

      const heading = colHeadings[cellIndex];
      if(typeof heading != "undefined"){

        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = heading.innerHTML;
        let headingText = tempDiv.textContent || tempDiv.innerText || "";
        cell.setAttribute('data-label',headingText);

        if(statuses.includes(cell.textContent.trim())){
          cell.setAttribute('data-content',cell.textContent.trim());
        }
      }
    });
  });
}

export const getLargestLastColWidth = (table) => {
 
  let largestWidth = 0;

  Array.from(table.querySelectorAll('tr')).forEach((row, index) => {

    let htmlStyles = window.getComputedStyle(document.querySelector('html'));
    let lastColChild = row.querySelector(':scope > *:last-child > *:first-child');

    if(lastColChild){

      let responsiveWidth = lastColChild.offsetWidth/parseFloat(htmlStyles.fontSize);
      responsiveWidth += 1.5;
      largestWidth = largestWidth > responsiveWidth ? largestWidth : responsiveWidth;
    }

    let rowHeight = row.offsetHeight/parseFloat(htmlStyles.fontSize);
    row.style.setProperty("--row-height", `${rowHeight}rem`);
  });

  return largestWidth;
}

export const createMobileButton = (table) => {

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {
    let firstCol = row.querySelector(':scope > :is(td,th):first-child');
    let colContent = firstCol.textContent;
    firstCol.innerHTML =`<span class="td__content">${colContent}</span><button type="button" class="d-none">${colContent}</button>`;
  });
}

export const addTableEventListeners = (table) => {

  table.addEventListener('click', (event) => {

    if (event && event.target instanceof HTMLElement && event.target.closest('tr > :is(td,th):first-child button')){

      let firstCol = event.target.closest('tr > :is(td,th):first-child button');
      let tableRow = firstCol.parentNode.closest('tr');

      if(tableRow.getAttribute('data-view') == "full")
        tableRow.setAttribute('data-view','default');
      else
        tableRow.setAttribute('data-view','full');

      firstCol.blur();
    };
  });
}

// Filters
export const createSearchDataList = (table, form) => {

  let searchInput = form.querySelector('[data-search]');

  if(!searchInput)
    return false;

  const searchID = searchInput.getAttribute('id');
  const searchableColumns = searchInput.getAttribute('data-search').split(',');
  let inputWrapper = searchInput.parentNode;

  let searchableTerms = {};
  searchableColumns.forEach((columnHeading, index) => {

    Array.from(table.querySelectorAll('td[data-label="'+columnHeading.trim()+'"]')).forEach((td, index) => {

      if(td.querySelector('.td__content'))
        searchableTerms[td.querySelector('.td__content').textContent] = td.querySelector('.td__content').textContent;
      else
        searchableTerms[td.textContent] = td.textContent;
    });
  });

  searchInput.setAttribute('list',`${searchID}_list`);
  searchInput.setAttribute('autocomplete','off');

  if(!inputWrapper.querySelector('datalist'))
    inputWrapper.innerHTML += `<datalist id="${searchID}_list"></datalist>`;
  
  inputWrapper.querySelector('datalist').innerHTML = `${Object.keys(searchableTerms).map(term => `<option value="${term}"></option>`).join("")}`;
}

export const addFilterEventListeners = (table, form, pagination, savedTableBody) => {

  var timer;
  form.addEventListener('keyup', (event) => {

    clearTimeout(timer);

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-search]') && event.target.closest('[data-search]').value.length >= 3){

      timer = setTimeout(function(){ 
        filterTable(table, form, pagination); 
        createPaginationButttons(table, form, pagination);
      }, 1000);
    };
  });

  form.addEventListener('change', (event) => {

    clearTimeout(timer);
    
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-sort]')){
      
      sortTable(table, form, savedTableBody);
      filterTable(table, form, pagination);
      createPaginationButttons(table, form, pagination)
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-search]')){
        
      filterTable(table, form, pagination);
      createPaginationButttons(table, form, pagination);
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-filter]') && !event.target.closest('form dialog')){
      
      filterTable(table, form, pagination);
      createPaginationButttons(table, form, pagination);
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-show]')){
        
      filterTable(table, form, pagination);
      createPaginationButttons(table, form, pagination);
    }

  });


  form.addEventListener('click', (event) => {

    clearTimeout(timer);
    
    if (event && event.target instanceof HTMLElement && event.target.closest('dialog button:not([type="button"])')){
      
      let button = event.target.closest('dialog button:not([type="button"])');
      let modal = button.closest('dialog');

      modal.close();
    }

    // Prevent the form from submitting
    if (event && event.target instanceof HTMLElement && event.target.closest('.dialog__close')){
      
      event.preventDefault();
      event.stopPropagation();
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-clear]')){
      
      form.reset();
      filterTable(table, form, pagination);
      createPaginationButttons(table, form, pagination);
    }
  });

  form.addEventListener('submit', (event) => {

    clearTimeout(timer);

    event.preventDefault();

    filterTable(table, form, pagination);
    createPaginationButttons(table, form, pagination)
  });
}

export const sortTable = (table, form, savedTableBody) => {

  if(form.getAttribute('data-ajax')){
    return false;
  }

  let tbody = table.querySelector('tbody');
  let select = form.querySelector('[data-sort]');
  let selectedOption = select.querySelector(`option:nth-child(${select.selectedIndex + 1})`);

  let sortBy = selectedOption.getAttribute('data-sort');
  let order = selectedOption.getAttribute('data-order');

  if(!sortBy){
    
    tbody.innerHTML = savedTableBody.innerHTML;
    return false;
  }

  let orderArray = [];
  if(!['asc','desc','descending'].includes(order)){
    orderArray = order.split(',');
  }

  // Create an array from the table rows, the index created is then used to sort the array
  let tableArr = [];
  Array.from(tbody.querySelectorAll('tr')).forEach((tableRow, index) => {

    let rowIndex = tableRow.querySelector('td[data-label="'+sortBy+'"], th[data-label="'+sortBy+'"]').textContent.trim();

    // If a predefined order set replace the search term with an ordered numeric value so it can be sorted
    if(orderArray.length && orderArray.includes(rowIndex)){
      rowIndex = orderArray.indexOf(rowIndex);
    }

    if(isNumeric(rowIndex))
      rowIndex = zeroPad(rowIndex,10)

    const dataRow = {
      index: rowIndex,
      row: tableRow
    }
    tableArr.push(dataRow);
  });

  // Sort array alphabetically
  tableArr.sort((a, b) => (a.index > b.index) ? 1 : -1)

  // Reverse if descending
  if(order == "descending" || order == "desc")
    tableArr = tableArr.reverse();

  // Create a string to return and populate the tbody
  let strTbody = '';
  tableArr.forEach((tableRow, index) => {
    strTbody += tableRow.row.outerHTML;
  });
  tbody.innerHTML = strTbody;
}

export const filterTable = (table, form, pagination) => {

  table.classList.remove('table--filtered');

  if(form.getAttribute('data-ajax')){
    loadAjaxTable(table, form, pagination);

    return false;
  }

  let filters = [];
  let searches = [];
  let matched = 0;
  let page = form.querySelector('[data-pagination]') ? parseInt(form.querySelector('[data-pagination]').value) : 1;
  let showRows = form.querySelector('[data-show]') ? parseInt(form.querySelector('[data-show]').value) : 15;

  // Filter
  let filterInputs = Array.from(form.querySelectorAll('[data-filter]'));

  filterInputs.forEach((filterInput, index) => {

    // Ignore uncked radio inputs
    if(filterInput.type == 'radio' && !filterInput.checked){
      return;
    }

    if(filterInput.type == 'checkbox' && !filterInput.checked){
      return;
    }

    if(filterInput.getAttribute('data-filter') == "multi"){


      for (const [key, value] of Object.entries(JSON.parse(filterInput.value))) {
        filters.push({'column':`${key}`,'value':`${value}`});
      }
    }
    else {
      
      filters.push({'column':`${filterInput.getAttribute('data-filter')}`,'value':`${filterInput.value}`});
    }

  });

  // Add search columns too
  if(form.querySelector('[data-search]')){
    let searchInput = form.querySelector('[data-search]');
    let searchColumns = form.querySelector('[data-search]').getAttribute('data-search').split(',');

    searchColumns.forEach((column, index) => {

      searches.push({'column':`${column.trim()}`,'value':`${searchInput.value}`});
    });
  }

  // Stop function if no filters identified
  if(!searches.length && !filters.length)
    return false;
  
  table.classList.add('table--filtered');

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {

    row.classList.remove('filtered--match');
    row.classList.remove('filtered--show');

    let isMatched = filters.length == 0 ? true : false;
    let isSearched = searches.length > 0 && searches[0].value.length >= 3 ? false : true;

    filters.forEach((filter, index) => {

      let filterTd = row.querySelector(`[data-label="${filter.column}"]`)

      if(filterTd && filterTd.textContent.toLowerCase().includes(filter.value.toLowerCase())){
        isMatched = true;
      }
    });

    searches.forEach((search, index) => {

      let searchTd = row.querySelector(`[data-label="${search.column}"]`)
      if(searchTd && search.value.length >= 3 && searchTd.textContent.toLowerCase().includes(search.value.toLowerCase())){
        isSearched = true;
      }
    });

    // You pass all the filters ass the class back
    if(isMatched && isSearched){
      
      matched++;

      row.classList.add('filtered--matched');
      // pagination bit 
      if(Math.ceil(matched/showRows) == parseInt(page))
        row.classList.add('filtered--show');
    }
  });

  if(pagination){
    
    pagination.setAttribute('data-page',page);
    pagination.setAttribute('data-pages',Math.ceil(matched/showRows));
    pagination.setAttribute('data-total',matched);
    pagination.setAttribute('data-show',showRows);
  }
}

export const populateDataQueries = (table,form) => {

  const dataQueries = Array.from(form.querySelectorAll('[data-query]'));

  dataQueries.forEach((queryElement, index) => {

    let query = queryElement.getAttribute('data-query');
    let numberOfMatchedRows: 0;

    if(query == 'total'){
      numberOfMatchedRows = table.classList.contains('table--filtered') ? table.querySelectorAll('tbody tr.filtered--matched').length : table.querySelectorAll('tbody tr').length;
    }
    else if(query.includes(' && ')){

      let queries = query.split(' && ');

      numberOfMatchedRows = Array.from(table.querySelectorAll(`tbody tr`)).filter(function(row){

        let matched = true;

        for (const [index, value] of Object.entries(queries)) {
          
          let queryParts = value.split(' == ');

          if(!row.querySelector(`td[data-label="${queryParts[0]}"]`) || row.querySelector(`td[data-label="${queryParts[0]}"]`).textContent != `${queryParts[1]}`)
            matched = false;
        }

        return matched;

      }).length;
    }
    else {

      let queryParts = query.split(' == ');

      numberOfMatchedRows = Array.from(table.querySelectorAll(`tbody td[data-label="${queryParts[0]}"]`)).filter(function(element){
        return element.textContent === queryParts[1];
      }).length;
    }

    queryElement.innerHTML = numberOfMatchedRows;
  });
}

// Pagination
export const createPaginationButttons = function(table, form, pagination){
  
  if(!pagination.getAttribute('data-pages'))
    return false;

  if(!pagination.getAttribute('data-page'))
  pagination.setAttribute('data-page', 1);

  let currentPage = pagination.getAttribute('data-page');
  let numberPages = pagination.getAttribute('data-pages');
  let numberRows = pagination.getAttribute('data-total');
  let showRows = pagination.getAttribute('data-show');
  let addRows = pagination.getAttribute('data-increment');

  if(numberPages <= 1){
    
    pagination.innerHTML = '';
    return false;
  }
  
  let strButtons = '';

  for (let i = 1; i <= numberPages; i++) {

    if(i == currentPage)
      strButtons += `<li class="page-item active" aria-current="page"><span class="page-link">${i}</span></li>`;
    else
      strButtons += `<li class="page-item"><button class="page-link" data-page="${i}">${i}</button></li>`;
  }

  pagination.innerHTML = `<ul class="pagination mb-3 d-none d-sm-flex">
    ${currentPage == 1 ? `<li class="page-item disabled"><span class="page-link">Previous</span></li>` : `<li class="page-item"><button class="page-link" data-page="${parseInt(currentPage)-1}">Previous</button></li>`}
    ${strButtons}
    ${currentPage == numberPages ? `<li class="page-item disabled"><span class="page-link">Next</span></li>` : `<li class="page-item"><button class="page-link" data-page="${parseInt(currentPage)+1}">Next</button></li>`}
  </ul>`;
  pagination.innerHTML += `<div class="d-sm-none">
  <span>You've viewed ${showRows} of ${numberRows} results</span>
  <button type="button" data-show="${parseInt(showRows)+parseInt(addRows)}">Load more results</button>
  </div>`;
}

export const addPaginationEventListeners = function(table, form, wrapper){

  wrapper.addEventListener('click', (event) => {

    if (event && event.target instanceof HTMLElement && event.target.closest('button[data-page]')){
      
      let paginationInput = form.querySelector('[data-pagination]');
      let newPage = event.target.closest('button[data-page]').getAttribute('data-page');
      paginationInput.value = newPage;

      form.dispatchEvent(new Event("submit"));
      wrapper.setAttribute('data-page', newPage);
      createPaginationButttons(table, form, wrapper);

      const url = new URL(location);
      url.searchParams.set("page", newPage);
      history.pushState({'type':'pagination','form':form.getAttribute('id'),'page':newPage}, "", url)
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-show]')){

      let showInput = form.querySelector('[data-show]');
      let showRows = event.target.closest('[data-show]').getAttribute('data-show');
      showInput.value = showRows;

      form.dispatchEvent(new Event("submit"));
      wrapper.setAttribute('data-show', showRows);
    }
  });
}

// Export CSV Data
export const addExportEventListeners = (button, table) => {

  if(!button)
    return false;

  button.addEventListener('click', (event) => {
    exportAsCSV(table);
  });
}

export const exportAsCSV = function(table){

  var csvData = [];
  // Get each row data
  var rows = table.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {

    // Get each column data
    var cols = rows[i].querySelectorAll('td,th');

    // Stores each csv row data
    var csvRow = [];
    for (var j = 0; j < cols.length; j++) {

      // Get the text data of each cell of a row and push it to csvrow
      csvRow.push(`"${cols[j].textContent}"`);
    }

    // Combine each column value with comma
    csvData.push(csvRow.join(","));
  }

  // Combine each row data with new line character
  csvData = csvData.join('\n');
  
  // Create CSV file object and feed our csvData into it
  let CSVFile = new Blob([csvData], {
    type: "text/csv"
  });

  // Create to temporary link to initiate download process
  var tempLink = document.createElement('a');
  tempLink.download = "export.csv";
  var url = window.URL.createObjectURL(CSVFile);
  tempLink.href = url;

  // This link should not be displayed
  tempLink.style.display = "none";
  document.body.appendChild(tempLink);

  // Automatically click the link to trigger download
  tempLink.click();
  document.body.removeChild(tempLink);
}

// After table is loaded
export const makeTableFunctional = function(table, form, pagination, wrapper){

  createMobileButton(table);
  addDataAttributes(table);
  populateDataQueries(table, form);
  
  // Work out the largest width of the CTA's in the last column
  if(wrapper && wrapper.classList.contains('table--cta')){

    const largestWidth = getLargestLastColWidth(table);
    wrapper.style.setProperty("--cta-width", `${largestWidth}rem`);
  }
}

export const loadAjaxTable = function (table, form, pagination, wrapper){

  const resolvePath = (object, path, defaultValue) => path.split(/[\.\[\]\'\"]/).filter(p => p).reduce((o, p) => o ? o[p] : defaultValue, object);

  let queryString = new URLSearchParams(new FormData(form)).toString();
  let columns = table.querySelectorAll('thead tr th');
  let tbody = table.querySelector('tbody');

  fetch(form.getAttribute('data-ajax')+'?'+queryString, {
    method: 'get',
    credentials: 'same-origin',
    //signal: controller.signal,
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  }).then((response) => response.json()).then((response) => {

    if (response.data) {

      tbody.innerHTML = '';

      response.data.forEach((row, index) => {

        var table_row = document.createElement('tr');

        columns.forEach((col, index) => {

          let cellOutput = '';
          var table_cell  = document.createElement('td');
          // Add some data to help with the mobile layout design
          table_cell.setAttribute('data-label',col.innerText);

          if(col.getAttribute('data-output')){
            var cellTemplate = col.getAttribute('data-output');
            // Use a regex to replace {var} with actual values from the json data
            cellOutput = cellTemplate.replace( new RegExp(/{(.*?)}/,"gm"), function(matched){ return resolvePath(row, matched.replace('{','').replace('}','')); });
          }

          if(col.hasAttribute('data-format')){
            cellOutput = formatCell(col.getAttribute('data-format'),cellOutput);
          }

          table_cell.innerHTML = cellOutput;
          table_row.appendChild(table_cell)
        });

        tbody.appendChild(table_row)
          
      });

      createSearchDataList(table, form)
      // Add data to the pagination 
      makeTableFunctional(table, form, pagination, wrapper);

      pagination.setAttribute('data-total', (response.meta.total ? response.meta.total : 1));
      pagination.setAttribute('data-page', (response.meta.current_page ? response.meta.current_page : 1));
      pagination.setAttribute('data-pages', Math.ceil(pagination.getAttribute('data-total') / pagination.getAttribute('data-show')));

      createPaginationButttons(table, form, pagination);

      if(response.data.length == 0){
        tbody.innerHTML = '<tr><td colspan="100%"><span class="h4 m-0">No results found</span></td></tr>';
      }
      
    }
    else {
      tbody.innerHTML = '<tr><td colspan="100%"><span class="h6 m-0">Error loading table</span></td></tr>';
    }

  });
}

export const formatCell = (format, cellOutput) => {

  switch (format) {
    case 'date':
      cellOutput = new Date(cellOutput).toLocaleDateString('en-gb', { year:"numeric", month:"long", day: "numeric"});
    break;
    case 'capitalise':
      cellOutput = ucfirst(cellOutput);
    break;
  }
  
  return cellOutput;
}