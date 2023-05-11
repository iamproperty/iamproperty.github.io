// @ts-nocheck
import { zeroPad, isNumeric } from "./helpers";

// Basic functionality needed
export const addDataAttributes = (table) => {

  const colHeadings = Array.from(table.querySelectorAll('thead th'));
  const colRows = Array.from(table.querySelectorAll('tbody tr'));

  colRows.forEach((row, index) => {

    const cells = Array.from(row.querySelectorAll('th, td'));
    
    cells.forEach((cell, cellIndex) => {

      const heading = colHeadings[cellIndex];
      if(typeof heading != "undefined"){

        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = heading.innerHTML;
        let headingText = tempDiv.textContent || tempDiv.innerText || "";
        cell.setAttribute('data-label',headingText);
      }
    });
  });
}

export const getLargestLastColWidth = (table) => {
  let largestWidth = 0;

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {

    let lastColChild = row.querySelector(':scope > td:last-child > *:first-child');
    lastColChild.parentNode.classList.add('col--sticky');

    let htmlStyles = window.getComputedStyle(document.querySelector('html'));
    let responsiveWidth = lastColChild.offsetWidth/parseFloat(htmlStyles.fontSize);
    responsiveWidth += 1.5;

    largestWidth = largestWidth > responsiveWidth ? largestWidth : responsiveWidth;
  });

  return largestWidth;
}

export const createMobileButton = (table) => {

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {
    let firstCol = row.querySelector(':scope > td:first-child');

    let colContent = firstCol.textContent;
    firstCol.innerHTML =`<span class="td__content">${colContent}</span><button type="button" class="d-sm-none">${colContent}</button>`;
  });
}

export const addTableEventListeners = (table) => {

  table.addEventListener('click', (event) => {

    if (event && event.target instanceof HTMLElement && event.target.closest('tr > td:first-child button')){

      let firstCol = event.target.closest('tr > td:first-child button');
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
export const createSearchDataList = (table, form, searchInput) => {

  const searchID = searchInput.getAttribute('id');
  const searchableColumns = searchInput.getAttribute('data-search').split(',');
  let wrapper = searchInput.parentNode;

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

  wrapper.innerHTML += `<datalist id="${searchID}_list">
  ${Object.keys(searchableTerms).map(term => `<option value="${term}"></option>`).join("")}
</datalist>`;
}

export const addFilterEventListeners = (table, form, pagination, savedTableBody) => {

  var timer;
  form.addEventListener('keyup', (event) => {

    clearTimeout(timer);

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-search]')){

      timer = setTimeout(function(){ 
        filterTable(table, form, pagination); 
        createPaginationButttons(table, form, pagination);
      }, 500);
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

  });


  

  form.addEventListener('submit', (event) => {

    clearTimeout(timer);
    
console.log('submit');

    event.preventDefault();

    filterTable(table, form, pagination);
    createPaginationButttons(table, form, pagination)
  });
}

export const sortTable = (table, form, savedTableBody) => {

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

  table.classList.add('table--filtered');

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

    filters.push({'column':`${filterInput.getAttribute('data-filter')}`,'value':`${filterInput.value}`});

  });

  // Add search columns too
  if(form.querySelector('[data-search]')){
    let searchInput = form.querySelector('[data-search]');
    let searchColumns = form.querySelector('[data-search]').getAttribute('data-search').split(',');

    searchColumns.forEach((column, index) => {

      searches.push({'column':`${column.trim()}`,'value':`${searchInput.value}`});
    });
  }


  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {

    row.classList.remove('filtered--show');

    let show = searches.length && searches[0].value.length >= 3 ? false : true;

    searches.forEach((search, index) => {

      let searchTd = row.querySelector(`[data-label="${search.column}"]`)

      if(searchTd && searchTd.textContent.toLowerCase().includes(search.value.toLowerCase())){
        show = true;
      }
    });

    filters.forEach((filter, index) => {

      let filterTd = row.querySelector(`[data-label="${filter.column}"]`)

      if(!filterTd || !filterTd.textContent.includes(filter.value)){
        show = false;
      }
    });

    // You pass all the filters ass the class back
    if(show){
      
      matched++;
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

// Pagination
export const createPaginationButttons = function(table, form, wrapper){
  
  if(!wrapper.getAttribute('data-pages'))
    return false;

  if(!wrapper.getAttribute('data-page'))
    wrapper.setAttribute('data-page', 1);

  let currentPage = wrapper.getAttribute('data-page');
  let numberPages = wrapper.getAttribute('data-pages');
  let numberRows = wrapper.getAttribute('data-total');
  let showRows = wrapper.getAttribute('data-show');
  let addRows = wrapper.getAttribute('data-increment');

  if(numberPages <= 1){
    
    wrapper.innerHTML = '';
    return false;
  }
  
  let strButtons = '';

  for (let i = 1; i <= numberPages; i++) {

    if(i == currentPage)
      strButtons += `<li class="page-item active" aria-current="page"><span class="page-link">${i}</span></li>`;
    else
      strButtons += `<li class="page-item"><button class="page-link" data-page="${i}">${i}</button></li>`;
  }

  wrapper.innerHTML = `<ul class="pagination mb-3 d-none d-sm-flex">
    ${currentPage == 1 ? `<li class="page-item disabled"><span class="page-link">Previous</span></li>` : `<li class="page-item"><button class="page-link" data-page="${parseInt(currentPage)-1}">Previous</button></li>`}
    ${strButtons}
    ${currentPage == numberPages ? `<li class="page-item disabled"><span class="page-link">Next</span></li>` : `<li class="page-item"><button class="page-link" data-page="${parseInt(currentPage)+1}">Next</button></li>`}
  </ul>`;
  wrapper.innerHTML += `<div class="d-sm-none">
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

export const addExportEventListeners = (button, table) => {

  button.addEventListener('click', (event) => {

    exportAsCSV(table);
  });
}

export const exportAsCSV = function(table){

  // Variable to store the final csv data
  var csv_data = [];

  // Get each row data
  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {

    // Get each column data
    var cols = rows[i].querySelectorAll('td,th');

    // Stores each csv row data
    var csvrow = [];
    for (var j = 0; j < cols.length; j++) {

      // Get the text data of each cell
        // of a row and push it to csvrow
      csvrow.push(cols[j].textContent.replaceAll(',', '""","""'));
    }

    // Combine each column value with comma
    csv_data.push(csvrow.join(","));
  }

  // Combine each row data with new line character
  csv_data = csv_data.join('\n');

  
  // Create CSV file object and feed
  // our csv_data into it
  let CSVFile = new Blob([csv_data], {
    type: "text/csv"
  });

  // Create to temporary link to initiate
  // download process
  var temp_link = document.createElement('a');

  // Download csv file
  temp_link.download = "GfG.csv";
  var url = window.URL.createObjectURL(CSVFile);
  temp_link.href = url;

  // This link should not be displayed
  temp_link.style.display = "none";
  document.body.appendChild(temp_link);

  // Automatically click the link to
  // trigger download
  temp_link.click();
  document.body.removeChild(temp_link);


}