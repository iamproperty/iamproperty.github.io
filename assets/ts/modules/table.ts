// @ts-nocheck
import { zeroPad, isNumeric, ucfirst, resolvePath } from "./helpers";

// Basic functionality needed
export const addDataAttributes = (table) => {

  const colHeadings = Array.from(table.querySelectorAll('thead th'));
  const colRows = Array.from(table.querySelectorAll('tbody tr'));

  colRows.forEach((row, index) => {

    const cells = Array.from(row.querySelectorAll('th, td'));
    const statuses = ['0','low','medium','high','unknown','n/a','pending','verified','due','overdue','incomplete','complete','completed','approval required','upcoming','requires approval','to do','on track','not started','warning','error'];
    
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
          cell.innerHTML = formatCell(heading.getAttribute('data-format'),cell.textContent.trim()); //Make sure date format is consistent
        }

        if(statuses.includes(cell.textContent.trim().toLowerCase())){
          cell.setAttribute('data-content',cell.textContent.trim().toLowerCase());
        }
      }
    });
  });
}

export const getLargestLastColWidth = (table) => {
 
  let largestWidth = 0;

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {

    let htmlStyles = window.getComputedStyle(document.querySelector('html'));
    let lastColChild = row.querySelector(':scope > *:last-child > *:first-child');

    if(lastColChild){

      lastColChild.classList.add('text-nowrap');
      let responsiveWidth = lastColChild.offsetWidth/parseFloat(htmlStyles.fontSize);
      responsiveWidth += 1.7;
      largestWidth = largestWidth > responsiveWidth ? largestWidth : responsiveWidth;
    }
  });

  return largestWidth;
}

export const createMobileButton = (table, wrapper) => {

  if(wrapper.classList.contains('table--fullwidth') && !wrapper.hasAttribute('data-expandable'))
    return false;

  if(table.querySelectorAll('thead tr th').length < 4 && !wrapper.hasAttribute('data-expandable'))
    return false;

  //If the expand column already exists we don't need to add a new one.
  Array.from(table.querySelectorAll('thead tr')).forEach((row,index) => {
    if(!table.querySelectorAll('thead tr th.expand-button-heading').length){
      row.insertAdjacentHTML(
        'afterbegin',
        `<th class="th--fixed expand-button-heading"></th>`
      );    
    }
  });

  Array.from(table.querySelectorAll('tbody tr')).forEach((row,index) => {
    const preExpanded = row.getAttribute('data-view') === 'full' ? 'aria-expanded' : '';
    row.insertAdjacentHTML(
      'afterbegin',
      `<td class="td--fixed td--expand"><button class="btn btn-compact btn-secondary" data-expand-button ${preExpanded}>Expand</button></td>`
    );
  });


}

export const addTableEventListeners = (table) => {

  table.addEventListener('click', (event) => {

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-expand-button]')){

      let button = event.target.closest('[data-expand-button]');
      let tableRow = button.closest('tr');

      button.toggleAttribute('aria-expanded');

      if(tableRow.getAttribute('data-view') == "full")
        tableRow.setAttribute('data-view','default');
      else
        tableRow.setAttribute('data-view','full');

      button.blur();
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
  let formSubmit = function(event, paginate = false){

    if(form.classList.contains('processing'))
      return false;


    // Before submitting check if any duplicate checkboxes within the filters dialog needs to upset the original input
    if(event.type == "submit"){
      form.classList.add('processing');
      Array.from(form.querySelectorAll('[data-duplicate]')).forEach((element,index) => {

        const id = element.getAttribute('data-duplicate');
        const input = document.getElementById(id);
        const card = document.querySelector(`[for="${id}"] iam-card`);


        if(input.checked != element.checked){
            
          if(card){
            let clickEvent = new Event('click');
            card.dispatchEvent(clickEvent);
          }
          else {
            input.checked = element.checked;
          }
        }
      });
      form.classList.remove('processing');
    }

    if(form.hasAttribute('data-ajax')){

      // Default back to page 1
      if(!paginate){
        let paginationInput = form.querySelector('[data-pagination]');
        paginationInput.value = 1;
        wrapper.setAttribute('data-page', 1);
      }

      loadAjaxTable(table, form, pagination,wrapper);
    }
    else if(form.hasAttribute('data-submit'))
      form.submit();
    else {
      filterTable(table, form, wrapper);
      populateDataQueries(table,form);
    }

    // Pass post data back to the page
    if(form.hasAttribute('data-ajax-post')){
          
      let formData = new FormData(form);
      let queryString = new URLSearchParams(formData).toString();
      const http = new XMLHttpRequest()
      http.open('GET', `${window.location.href}?ajax=true&${queryString}`);
      http.send();
    }
  }

  form.addEventListener('keyup', (event) => {

    clearTimeout(timer);

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-search]')){

      timer = setTimeout(function(){
        formSubmit(event);
      }, 500);
    };
  });

  form.addEventListener('change', (event) => {

    clearTimeout(timer);
    
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-sort]')){
      
      if(!form.hasAttribute('data-submit'))
        sortTable(table, form, savedTableBody);

      formSubmit(event);
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-search]')){
        
      formSubmit(event);
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-filter][data-no-ajax]')){ // Allow for input fields to filter the current results without a new ajax call

      filterTable(table, form, wrapper);
      populateDataQueries(table,form);
    }
    else if (event && event.target instanceof HTMLElement && event.target.closest('[data-filter]') && event.target.closest('form .dialog__wrapper > dialog')){
      
      formSubmit(event);
    }
    else if (event && event.target instanceof HTMLElement && event.target.closest('[data-filter]') && !event.target.closest('form dialog')){
      
      formSubmit(event);
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-show]')){
        
      formSubmit(event);
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-mimic]')){
        
      formSubmit(event);
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

      form.classList.add('processing');
      // Make sure any applied filters have been removed
      Array.from(form.querySelectorAll('.applied-filters')).forEach((filters,index) => {
        filters.innerHTML = "";
      });

      // Make sure cards are unlicked
      let frm_elements = form.elements;

      for (let i = 0; i < frm_elements.length; i++)
      {
          let field_type = frm_elements[i].type.toLowerCase() ? frm_elements[i].type.toLowerCase() : "text";
          switch (field_type)
          {
          case "text":
          case "password":
          case "textarea":
              frm_elements[i].value = "";
              break;
          case "radio":
          case "checkbox":
              if (frm_elements[i].checked)
              {
                  let input = frm_elements[i];
                  let id = input.getAttribute('id');
                  let label = document.querySelector(`[for="${id}"`);

                  if(label.querySelector('iam-card')){
                    let card = label.querySelector('iam-card');
                    let clickEvent = new Event('click');
                    card.dispatchEvent(clickEvent);
                  }

                  input.checked = false;
              }
              break;
          case "select-one":
          case "select-multi":
              frm_elements[i].selectedIndex = -1;
              break;
          case "hidden":
          default:
              break;
          }
      }

      form.classList.remove('processing');

      if(!form.hasAttribute('data-submit'))
        sortTable(table, form, savedTableBody);

      formSubmit(event);
    }
  });

  form.addEventListener('submit', (event) => {

    clearTimeout(timer);

    if(!form.hasAttribute('data-submit'))
      event.preventDefault();

    formSubmit(event);
  });

  form.addEventListener('force', (event) => {

    formSubmit(event);
  });

  form.addEventListener('paginate', (event) => {

    formSubmit(event,true);
  });


  

  // Mmimic fields
  let forms = [];
  let fields = [];

  // Collect the forms that we need to add an event listener for.
  Array.from(form.querySelectorAll('[data-mimic]')).forEach((input, index) => {
    
    let mimicField = input.getAttribute('data-mimic');

    Array.from(document.querySelectorAll(`[name="${mimicField}"]`)).forEach((mimicInput, index) => {

      let parentForm = mimicInput.closest('form');

      if(!forms.includes(parentForm))
        forms.push(parentForm);

      if(!fields.includes(mimicField))
        fields.push(mimicField);
      
    });
  });


  // For each form add change listener
  forms.forEach((parentForm, index) => {

    const updateMimicInput = function(){
      let mimickedAlready = [];
      let formData = new FormData(parentForm);
      
      let i = 1;
      for (const [key, value] of formData) {

        if(document.querySelector(`[data-mimic="${key}"]`) && !mimickedAlready.includes(key)){

          mimickedAlready.push(key);
          document.querySelector(`[data-mimic="${key}"]`).value = value;
        }
        else if(document.querySelector(`[data-mimic="${key}"]`))
          document.querySelector(`[data-mimic="${key}"]`).value += ","+value;

        i++;
      }

      for (const value of mimickedAlready) {
        const event = new Event("force");
        form.dispatchEvent(event);
      }


      // Check for empties
      for (const field of fields) {
        if(!formData.has(field) && parentForm.querySelector(`[name="${field}"]`)){
          
          document.querySelector(`[data-mimic="${field}"]`).value = "";
          
          const event = new Event("force");
          form.dispatchEvent(event);
        }
      }

    }

    parentForm.addEventListener('force', (event) => {
      updateMimicInput();
    });

    parentForm.addEventListener('change', (event) => {
      updateMimicInput();
    });
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

    if(tableRow.querySelector('[data-label="'+sortBy+'"] .td__content'))
      rowIndex = tableRow.querySelector('[data-label="'+sortBy+'"] .td__content').textContent.trim();

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

  let filters = filterFilters(form);
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
    element.parentNode.classList.remove('hover');
  });

  let filterCount = 0;
  Object.values(filters).forEach((filter, index) => {

    if(typeof filter == "object" && Object.values(filter).length)
      filterCount += Object.values(filter).length;
    else
      filterCount++;
  });

  if(filterCount) {

    Array.from(form.querySelectorAll('[data-filter-count]')).forEach((element, index) => {
      element.innerHTML += `(${filterCount})`;
      element.parentNode.classList.add('hover');
    });
  }
  
  // Filter the table
  table.classList.add('table--filtered');
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
    let matchesPage = Math.ceil(matched/showRows);
    if(matchesPage == parseInt(page))
      row.classList.add('filtered--show');
  });

  if(wrapper){
    wrapper.setAttribute('data-total',matched);
    wrapper.setAttribute('data-show',showRows);
    wrapper.setAttribute('data-page',page);
  }

}

export const populateDataQueries = (table,form,wrapper) => {

  const dataQueries = Array.from(form.querySelectorAll('[data-query]'));

  dataQueries.forEach((queryElement, index) => {

    let query = queryElement.getAttribute('data-query');
    let numberOfMatchedRows = 0;

    if(query == 'total'){
      if(wrapper.hasAttribute('data-total'))
        numberOfMatchedRows = wrapper.getAttribute('data-total');
      else
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

  pagination.addEventListener('update-page', (event) => {

    let paginationInput = form.querySelector('[data-pagination]');
    let newPage = event.detail.page;

    // Set the filter value
    paginationInput.value = newPage;
    form.dispatchEvent(new Event("paginate"));

    // Reset the data attribute
    wrapper.setAttribute('data-page',newPage);

    if(table.hasAttribute('data-show-history')){
        
      const url = new URL(location);
      url.searchParams.set("page", newPage);
      history.pushState({'type':'pagination','form':form.getAttribute('id'),'page':newPage}, "", url)
    }

    // scroll back to the top of the table
    if(!wrapper.hasAttribute('data-no-scroll')){
      const yOffset = -250;
      const y = table.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  });

  pagination.addEventListener('update-show', (event) => {

    let showInput = form.querySelector('[data-show]');
    let showRows = event.detail.show;
    showInput.value = showRows;
    wrapper.setAttribute('data-show', showRows);
    form.dispatchEvent(new Event("submit"));
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

  addDataAttributes(table);
  createMobileButton(table, wrapper);
  populateDataQueries(table, form, wrapper);
  
  // Work out the largest width of the CTA's in the last column
  if(wrapper && wrapper.classList.contains('table--cta')){

    const largestWidth = getLargestLastColWidth(table);
    wrapper.style.setProperty("--cta-width", `${largestWidth}rem`);

    function outputsize() {

      Array.from(table.querySelectorAll('tr')).forEach((row, index) => {
        let rowHeight = row.offsetHeight;
        row.style.setProperty("--row-height", `${rowHeight}px`);
      });
    }
    
    new ResizeObserver(outputsize).observe(table)
  }
}

const filterFilters = function(form){

  let filters = new Object();

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

    if (filterInput && filterInput.value) {

      let dataFilter = filterInput.getAttribute('data-filter');

      if(!filters[dataFilter])
        filters[dataFilter] = new Array();
    
      filters[dataFilter].push(filterInput.value);
    }
  });

  return filters;
}

export const loadAjaxTable = async function (table, form, pagination, wrapper){

  let formData = new FormData(form);
  let queryString = new URLSearchParams(formData).toString();
  let columns = table.querySelectorAll('thead tr th:not(.expand-button-heading)');
  let tbody = table.querySelector('tbody');
  let ajaxURL = form.getAttribute('data-ajax');

  wrapper.classList.add('table--loading');
  
  // Display the filter count
  let filters = filterFilters(form);

  Array.from(form.querySelectorAll('[data-filter-count]')).forEach((element, index) => {
    element.innerHTML = '';
    element.parentNode.classList.remove('hover');
  });

  let filterCount = 0;
  Object.values(filters).forEach((filter, index) => {

    if(typeof filter == "object" && Object.values(filter).length)
      filterCount += Object.values(filter).length;
    else
      filterCount++;
  });

  if(filterCount) {

    Array.from(form.querySelectorAll('[data-filter-count]')).forEach((element, index) => {
      element.innerHTML += `(${filterCount})`;
      element.parentNode.classList.add('hover');
    });
  }

  // Setup controller vars if not already set
  if(!window.controller)
    window.controller = [];

  // Abort if controller already present for this url
  if(window.controller[ajaxURL])
    window.controller[ajaxURL].abort();

  // Create a new controller so it can be aborted if new fetch made
  window.controller[ajaxURL] = new AbortController();
  const { signal } = controller[ajaxURL];

  // Set loading on the pagination
  pagination.setAttribute('data-loading','true');
  form.classList.add('processing');

  try {
    await fetch(ajaxURL+'?'+queryString, {
      signal: signal,
      method: 'get',
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      })
    })
    .then((response) => response.json()).then((response) => {

      let schema = form.hasAttribute('data-schema') ? form.getAttribute('data-schema') : 'data';
      let totalNumberSchema = form.hasAttribute('data-schema-total') ? form.getAttribute('data-schema-total') : 'meta.total';
      let currentPageSchema = form.hasAttribute('data-schema-page') ? form.getAttribute('data-schema-page') : 'meta.current_page';

      let totalNumber = resolvePath(response, totalNumberSchema, 15);
      let currentPage = resolvePath(response, currentPageSchema, 1);
      let data = resolvePath(response, schema);
      let emptyMsg = wrapper.hasAttribute('data-empty-msg') ? wrapper.getAttribute('data-empty-msg') : "No results found";
      
      if (data) {

        tbody.innerHTML = '';

        data.forEach((row, index) => {

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

            // If an output array is defined then the content is going to made of of multiple values from an array
            if(col.hasAttribute('data-output-array')){
              
              var cellTemplate = col.getAttribute('data-output');
              let arrValue = resolvePath(row, cellTemplate.replace('{','').replace('}',''));

              cellOutput = "";
              arrValue.forEach((rowValue, i) => {

                let cellTemplateValue = col.getAttribute('data-output-array');
                let cellOutputValue = "";

                // If we need to transform some of the data
                if(col.hasAttribute('data-output-array-property') && col.hasAttribute('data-output-array-transform')){

                  const propertyValue = resolvePath(rowValue, col.getAttribute('data-output-array-property'));
                  const transforms = JSON.parse(col.getAttribute('data-output-array-transform'));
                  const transformValue = transforms[propertyValue];

                  cellOutputValue = cellTemplateValue.replace(`{${col.getAttribute('data-output-array-property')}}`,transformValue);
                }

                cellOutputValue = cellOutputValue.replace( new RegExp(/{(.*?)}/,"gm"), function(matched){ return resolvePath(rowValue, matched.replace('{','').replace('}','')); });
                cellOutput += cellOutputValue;
              });
            }


            if(col.hasAttribute('data-transform')){

              const transforms = JSON.parse(col.getAttribute('data-transform'));
              cellOutput = transforms[cellOutput];

              if(!cellOutput && col.hasAttribute('data-default'))
                cellOutput = col.getAttribute('data-default');
            }

            table_cell.innerHTML = cellOutput;
            table_row.appendChild(table_cell)
          });

          tbody.appendChild(table_row)
        });

        createSearchDataList(table, form)
        // Add data to the pagination 
        wrapper.setAttribute('data-total', parseInt(totalNumber));
        wrapper.setAttribute('data-page', parseInt(currentPage));

        
        makeTableFunctional(table, form, pagination, wrapper);

        Array.from(form.querySelectorAll('[data-ajax-query]')).forEach((queryElement, index) => {

          let totalNumber = resolvePath(response, queryElement.getAttribute('data-ajax-query'), '');

          if(queryElement.hasAttribute('data-total'))
            queryElement.setAttribute('data-total', totalNumber);
          else
            queryElement.innerHTML = totalNumber;
        });

        if(parseInt(totalNumber) == 0){
          tbody.innerHTML = `<tr><td colspan="100%"><span>${emptyMsg}</span></td></tr>`;
        }

        wrapper.classList.remove('table--loading');

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          "event": "Ajax table loaded",
          "url": ajaxURL,
          "formData": queryString
        });
      }
      else {
        tbody.innerHTML = '<tr><td colspan="100%"><span>Error loading table</span></td></tr>';
      }
    
      // Remove loading on the pagination
      pagination.removeAttribute('data-loading');
      form.classList.remove('processing');
    });
  } catch (error) {
    console.log(error);
  }
}

export const formatCell = (format, cellOutput) => {

  switch (format) {
    case 'datetime':
      return new Date(cellOutput).toLocaleDateString('en-gb', { weekday: 'short', year:"2-digit", month:"long", day: "numeric", }) + " " + new Date(cellOutput).toLocaleTimeString("en-gb", { hour: "2-digit", minute: "2-digit"});
    case 'date':
      return new Date(cellOutput).toLocaleDateString('en-gb', { year:"2-digit", month:"long", day: "numeric"});
    case 'capitalise':
      return cellOutput = ucfirst(cellOutput);
  }
}