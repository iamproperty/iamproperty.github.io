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

    // Create form
    const form = document.createElement("div");
    form.classList.add('row');
    form.classList.add('pb-5');
    tableElement.prepend(form)

    // Create row
    const col1 = document.createElement("div");
    col1.classList.add('col-6');
    form.appendChild(col1);

    // Create search input
    const searchWrapper = document.createElement("div");
    searchWrapper.classList.add('form-control__wrapper');
    searchWrapper.classList.add('form-control-inline');
    col1.appendChild(searchWrapper)

    // - Label
    const searchLabel = document.createElement("label");
    searchLabel.setAttribute('for','filter')
    searchLabel.innerText = 'Filter';
    searchWrapper.appendChild(searchLabel)

    // - Input
    const searchInput = document.createElement("input");
    searchInput.setAttribute('id','filter')
    searchInput.setAttribute('name','filter')
    searchInput.setAttribute('type','text')
    searchInput.setAttribute('placeholder','Search term')
    searchInput.classList.add('form-control')
    searchWrapper.appendChild(searchInput)

    
/*
<form class="row">

<div class="col-6">

  <div class="form-control__wrapper form-control-inline">
    <label for="filter">Filter by Name:</label>
    <input type="search" name="filter" id="filter" class="form-control" placeholder="" />
  </div>
</div>
<div class="col-6">

  <span>Filter by: </span>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
    </label>
  </div>
</div>

</form>
*/

  }

  const filterTable = function(searchTerm){

    let filterBy = 'Name';

    
    let tableArr = [];

    Array.from(storedData.querySelectorAll('tr')).forEach((tableRow, index) => {

      let searchString = tableRow.querySelector('td[data-label="'+filterBy+'"]').innerText;

      if(searchString.indexOf(searchTerm) >= 0){

        console.log(searchString)

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
        if (target.matches('input[type="text"]')) {

          const searchTerm = target.value;
          filterTable(searchTerm)
        }
      }
    });
  }
  
}

export default table