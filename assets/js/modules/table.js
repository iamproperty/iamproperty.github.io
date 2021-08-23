function table(tableElement) {

  const tbody = tableElement.querySelector('tbody');
  const storedData = tbody.cloneNode(true);

  const sortTable = function(sortBy,sort){

    let tableArr = [];

    Array.from(tbody.querySelectorAll('tr')).forEach((tableRow, index) => {
      const dataRow = {
        index: tableRow.querySelector('td[data-label="'+sortBy+'"]').innerText,
        row: tableRow
      }
      tableArr.push(dataRow);
    });

    tableArr.sort((a, b) => (a.index > b.index) ? 1 : -1)

    if(sort == "descending")
      tableArr = tableArr.reverse();

    let strTbody = '';
    tableArr.forEach((tableRow, index) => {
      strTbody += tableRow.row.outerHTML;
    });

    return strTbody;
  }

  const createFilters = function(count){

    const form = document.createElement("div");
    form.classList.add('row');
    form.classList.add('pb-5');

    const randID = Math.random().toString(36).substr(2, 9);

    const filterColumns = Array.from(tableElement.querySelectorAll('th[data-filterable]'));

console.log(filterColumns.length)

    form.innerHTML = `<div class="col-6">
  <div class="form-control__wrapper form-control-inline">
    <label for="${randID}_filter">Filter by Name:</label>
    <input type="search" name="${randID}_filter" id="${randID}_filter" class="form-control" placeholder="" />
  </div>
</div>
<div class="col-6">
  ${filterColumns.length > 1 ? `<span>Filter by: </span>` + filterColumns.map(column => `<div class="form-check"><input class="form-check-input" type="checkbox" id="${randID}_${column.innerText.replace(' ','_').toLowerCase()}" checked="checked" /><label class="form-check-label" for="${randID}_${column.innerText.replace(' ','_').toLowerCase()}">${column.innerText}</label></div>`).join("") : ``}
</div>`;

    tableElement.prepend(form)
  }

  const filterTable = function(searchTerm){

    let filterBy = 'Name';

    let tableArr = [];
    
    Array.from(storedData.querySelectorAll('tr')).forEach((tableRow, index) => {

      let searchString = '';
      Array.from(tableElement.querySelectorAll('[type="checkbox"]:checked + label')).forEach((label, index) => {

        searchString += tableRow.querySelector('td[data-label="'+label.innerText+'"]').innerText+' | ';
      });

      if(searchString.indexOf(searchTerm) >= 0){

        const dataRow = {
          row: tableRow
        }
        tableArr.push(dataRow);
      }

    });

    let strTbody = '';
    tableArr.forEach((tableRow, index) => {
      strTbody += tableRow.row.outerHTML;
    });

    tbody.innerHTML = strTbody;


    if(tableElement.getAttribute('data-sortBy')){

      tbody.innerHTML = sortTable(tableElement.getAttribute('data-sortBy'), tableElement.getAttribute('data-sort'));
    }

  }


  tableElement.addEventListener('click', function(e){
    // loop parent nodes from the target to the delegation node
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

        tableElement.setAttribute('data-sort', sort);
        tableElement.setAttribute('data-sortBy', target.innerText);
        tbody.innerHTML = sortTable(target.innerText, sort);



        const event = new Event('updated');
        // Dispatch the event.
        tableElement.dispatchEvent(event);

        break;
      }
    }
  }, false);

  if(tableElement.getAttribute('data-sortBy')){

    let sort = tableElement.getAttribute('data-sort') == "ascending" ? "descending" : "ascending";

    Array.from(tableElement.querySelectorAll('[data-sortable]')).forEach((col, index) => {
      if(col.innerText == tableElement.getAttribute('data-sortBy')){
        col.setAttribute('aria-sort',sort)
        col.click();
      }
    });
  }

  if(Array.from(tableElement.querySelectorAll('[data-filterable]')).length){
    createFilters(tableElement,Array.from(tableElement.querySelectorAll('[data-filterable]')).length);


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
        if (target.matches('input[type="checkbox"]')) {

          const searchTerm = tableElement.querySelector('input[type="search"]').value;

          console.log(searchTerm)

          filterTable(searchTerm)
        }
      }
    });
  }
  
}

export default table