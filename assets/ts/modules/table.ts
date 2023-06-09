// @ts-nocheck
import { zeroPad, isNumeric, ucfirst } from "./helpers";
import createPaginationButttons from "./pagination";

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

        if(heading.hasAttribute('data-td-class'))
          cell.setAttribute('class',heading.getAttribute('data-td-class'))

        if(heading.hasAttribute('data-format')){
          cell.setAttribute('data-format',heading.getAttribute('data-format'))
          cell.innerHTML = formatCell('date',cell.textContent.trim()); //Make sure date format is consistent
        }

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

  if(table.closest('.table--fullwidth'))
    return false;

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {
    let firstCol = row.querySelector(':scope > :is(td,th):first-child');
    let colContent = firstCol.textContent;

    if(colContent != "")
      firstCol.innerHTML =`<span class="td__content">${colContent}</span><button type="button" class="d-none">${colContent}</button>`;
    else {
        
      let secondCol = row.querySelector(':scope > :is(td,th):nth-child(2)');
      let secondColContent = secondCol.textContent;
      secondCol.innerHTML =`<span class="td__content">${secondColContent}</span><button type="button" class="d-none">${secondColContent}</button>`;
    }
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

export const addFilterEventListeners = (table, form, pagination, wrapper, savedTableBody) => {

  var timer;

  // Check what conditions are set on the table to see what the form actions are
  let formSubmit = function(){
      
    if(form.hasAttribute('data-ajax'))
      loadAjaxTable(table, form, pagination,wrapper);
    else if(form.hasAttribute('data-submit'))
      form.submit();
    else {
      filterTable(table, form, wrapper);
      createPaginationButttons(wrapper,pagination);
      populateDataQueries(table,form);
    }
  }

  form.addEventListener('keyup', (event) => {

    clearTimeout(timer);

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-search]')){

      timer = setTimeout(function(){
        formSubmit();
      }, 500);
    };
  });

  form.addEventListener('change', (event) => {

    clearTimeout(timer);
    
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-sort]')){
      
      if(!form.hasAttribute('data-submit'))
        sortTable(table, form, savedTableBody);

      formSubmit();
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-search]')){
        
      formSubmit();
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-filter]') && event.target.closest('form .dialog__wrapper > dialog')){
      
      formSubmit();
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-filter]') && !event.target.closest('form dialog')){
      
      formSubmit();
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-show]')){
        
      formSubmit();
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

      if(!form.hasAttribute('data-submit'))
        sortTable(table, form, savedTableBody);

      formSubmit();
    }
  });

  form.addEventListener('submit', (event) => {

    clearTimeout(timer);

    if(!form.hasAttribute('data-submit'))
      event.preventDefault();

    formSubmit();
  });

  form.addEventListener('force', (event) => {

    formSubmit();
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
  let format = selectedOption.getAttribute('data-format');

  if(!sortBy){
    
    tbody.innerHTML = savedTableBody.innerHTML;
    addDataAttributes(table);
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

    // If the sort format is date then lets transform the index to a sortable date (this is never displayed)
    if(format && format == "date")
      rowIndex = new Date(rowIndex);
    
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

export const filterTable = (table, form, wrapper) => {

  table.classList.remove('table--filtered');

  let filters = [];
  let searches = [];
  let matched = 0;
  let page = form.querySelector('[data-pagination]') ? parseInt(form.querySelector('[data-pagination]').value) : 1;
  let showRows = form.querySelector('[data-show]') ? parseInt(form.querySelector('[data-show]').value) : 15;

  // Reset
  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {
    row.classList.remove('filtered');
    row.classList.remove('filtered--matched');
    row.classList.remove('filtered--show');
    
    row.removeAttribute('data-filtered-by');
  });

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
        filters[filterInput.getAttribute('data-filter')].push(value);
      }
    }
    else if (filterInput.value) {

      if(!filters[filterInput.getAttribute('data-filter')])
        filters[filterInput.getAttribute('data-filter')] = new Array();

      filters[filterInput.getAttribute('data-filter')].push(filterInput.value);
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

  //Display the filter count
  Array.from(form.querySelectorAll('[data-filter-count]')).forEach((element, index) => {
    element.innerHTML = '';
  });

  if(filters.length) {
      
    Array.from(form.querySelectorAll('[data-filter-count]')).forEach((element, index) => {
      element.innerHTML += `(${filters.length})`;
    });
  }

  // Stop function if no filters identified
  if(!Object.keys(searches).length && !Object.keys(filters).length)
    return false;
  
  table.classList.add('table--filtered');


  // Filter the table

  for (const [key, filterValue] of Object.entries(filters)) {
    
    Array.from(table.querySelectorAll('tbody tr:not(.filtered)')).forEach((row, index) => {

      let isMatched = false;
      filterValue.forEach((filter, index) => {

        let filterTd = row.querySelector(`[data-label="${key}"]`)

        // Dynamic values
        if(filter && filter == "$today")
          filter = formatCell('date', new Date());
        else if(filter && filter == "$yesterday"){

          let yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          filter = formatCell('date', yesterday);
        }
        else if(filter && (filter == "$thisWeek" || filter == "$lastWeek")){

          let today = new Date();
          let mondayThisWeek = new Date(today.setDate(today.getDate() - (today.getDay()-1)));
          let sundayThisWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7));
          let checkDate = new Date(filterTd.textContent.toLowerCase());

          today.setHours(0, 0, 0, 0);
          mondayThisWeek.setHours(0, 0, 0, 0);
          sundayThisWeek.setHours(0, 0, 0, 0);
          checkDate.setHours(0, 0, 0, 0);

          if(filter == "$thisWeek"){
            isMatched = (checkDate >= mondayThisWeek && checkDate <= sundayThisWeek);
          }
          else {
            let mondayLastWeek = new Date(mondayThisWeek.setDate(mondayThisWeek.getDate() - 7));
            let sundayLastWeek = new Date(sundayThisWeek.setDate(sundayThisWeek.getDate() - 7));

            mondayLastWeek.setHours(0, 0, 0, 0);
            sundayLastWeek.setHours(0, 0, 0, 0);

            isMatched = (checkDate >= mondayLastWeek && checkDate <= sundayLastWeek);
          }
        }
        else if(filter && filter == "$thisMonth"){

          let today = new Date(), year = today.getFullYear(), month = today.getMonth();

          var firstDayMonth = new Date(year, month, 1);
          var lastDayMonth = new Date(year, month + 1, 0);
          let checkDate = new Date(filterTd.textContent.toLowerCase());

          firstDayMonth.setHours(0, 0, 0, 0);
          lastDayMonth.setHours(0, 0, 0, 0);
          checkDate.setHours(0, 0, 0, 0);

          isMatched = (checkDate >= firstDayMonth && checkDate <= lastDayMonth);
        }
        else if(filter && filter == "$lastMonth"){

          let today = new Date(), year = today.getFullYear(), month = today.getMonth();

          var firstDayLastMonth = new Date(year, month - 1, 1);
          var lastDayLastMonth = new Date(year, month, 0);
          let checkDate = new Date(filterTd.textContent.toLowerCase());

          firstDayLastMonth.setHours(0, 0, 0, 0);
          lastDayLastMonth.setHours(0, 0, 0, 0);
          checkDate.setHours(0, 0, 0, 0);

          isMatched = (checkDate >= firstDayLastMonth && checkDate <= lastDayLastMonth);
        }
        
        if(filterTd && filterTd.textContent.toLowerCase().includes(filter.toLowerCase())){
          isMatched = true;
        }

      });

      if(!isMatched){

        row.classList.add('filtered');
        row.setAttribute('data-filtered-by',key)
      }
    
    });
  }
  // Search whats left of the table after filtering
  Array.from(table.querySelectorAll('tbody tr:not(.filtered)')).forEach((row, index) => {
    
    let isSearched = searches.length > 0 && searches[0].value.length >= 3 ? false : true;
      
    searches.forEach((search, index) => {

      let searchTd = row.querySelector(`[data-label="${search.column}"]`);

      if(searchTd && search.value.length >= 3 && searchTd.textContent.toLowerCase().includes(search.value.toLowerCase())){
        isSearched = true;
      }

    });

    if(!isSearched)
      row.classList.add('filtered');
  });

  // Work out what to display after pagination
  Array.from(table.querySelectorAll('tbody tr:not(.filtered')).forEach((row, index) => {

    matched++;

    row.classList.add('filtered--matched');
    // pagination bit 
    if(Math.ceil(matched/showRows) == parseInt(page))
      row.classList.add('filtered--show');
  });

  if(wrapper){
    wrapper.setAttribute('data-page',page);
    wrapper.setAttribute('data-pages',Math.ceil(matched/showRows));
    wrapper.setAttribute('data-total',matched);
    wrapper.setAttribute('data-show',showRows);
  }

}

export const populateDataQueries = (table,form) => {

  const dataQueries = Array.from(form.querySelectorAll('[data-query]'));

  dataQueries.forEach((queryElement, index) => {

    let query = queryElement.getAttribute('data-query');
    let numberOfMatchedRows: 0;

    if(query == 'total'){
      numberOfMatchedRows = table.classList.contains('table--filtered') ? table.querySelectorAll('tbody tr').length : table.querySelectorAll('tbody tr').length;
    }
    else if(!query.includes(' == ') && query.includes(' & ')){

      let queries = query.split(' & ');
      let selector = '';

      queries.forEach(element => {
        selector += `:not([data-filtered-by="${element}"])`;
      });
      
      numberOfMatchedRows = Array.from(table.querySelectorAll(`tbody tr${selector}`)).length;
    }
    else if(!query.includes(' == ')){

      numberOfMatchedRows = Array.from(table.querySelectorAll(`tbody tr:not([data-filtered-by="${query}"])`)).length;
    }
    else if(query.includes(' && ')){

      let queries = query.split(' && ');

      numberOfMatchedRows = Array.from(table.querySelectorAll(`tbody tr:not(.filtered)`)).filter(function(row){

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
      numberOfMatchedRows = Array.from(table.querySelectorAll(`tbody tr.filtered--matched td[data-label="${queryParts[0]}"], tbody tr[data-filtered-by="${queryParts[0]}"] td[data-label="${queryParts[0]}"]`)).filter(function(element){
        return element.textContent === queryParts[1];
      }).length;
    }

    if(queryElement.hasAttribute('data-total'))
      queryElement.setAttribute('data-total', numberOfMatchedRows);
    else
      queryElement.innerHTML = numberOfMatchedRows;
  });
}

// Pagination
export const addPaginationEventListeners = function(table, form, pagination, wrapper){

  pagination.addEventListener('click', (event) => {

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-page]')){
      
      event.preventDefault();

      let paginationInput = form.querySelector('[data-pagination]');
      let newPage = event.target.closest('[data-page]').getAttribute('data-page');
      paginationInput.value = newPage;
      wrapper.setAttribute('data-page', newPage);
      form.dispatchEvent(new Event("submit"));

      const url = new URL(location);
      url.searchParams.set("page", newPage);
      history.pushState({'type':'pagination','form':form.getAttribute('id'),'page':newPage}, "", url)
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-show]')){

      event.preventDefault();
      let showInput = form.querySelector('[data-show]');
      let showRows = event.target.closest('[data-show]').getAttribute('data-show');
      showInput.value = showRows;
      wrapper.setAttribute('data-show', showRows);
      form.dispatchEvent(new Event("submit"));
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

  fetch(form.getAttribute('data-ajax'), {
    method: 'get',
    credentials: 'same-origin',
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

      wrapper.setAttribute('data-total', (response.meta.total ? response.meta.total : 1));
      wrapper.setAttribute('data-page', (response.meta.current_page ? response.meta.current_page : 1));
      wrapper.setAttribute('data-pages', Math.ceil(wrapper.getAttribute('data-total') / wrapper.getAttribute('data-show')));

      createPaginationButttons(wrapper, pagination);

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
      cellOutput = new Date(cellOutput).toLocaleDateString('en-gb', { year:"2-digit", month:"long", day: "numeric"});
    break;
    case 'capitalise':
      cellOutput = ucfirst(cellOutput);
    break;
  }
  
  return cellOutput;
}