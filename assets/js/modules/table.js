class table {

  /** @param {HTMLElement} carousel Dom Element */
  constructor(table){
    const sortTable = this.sortTable;

    table.addEventListener('click', function(e){
      // loop parent nodes from the target to the delegation node
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('[data-sortable]')) {

          // Get current sort order
          let sort = target.getAttribute('aria-sort') == "ascending" ? "descending" : "ascending";

          // unset sort attributes
          Array.from(table.querySelectorAll('[data-sortable]')).forEach((col, index) => {
            col.setAttribute('aria-sort','none');
          });

          // Set the sort order attribute
          target.setAttribute('aria-sort', sort);

          let tbody = table.querySelector('tbody');

          tbody.innerHTML = sortTable(tbody, target.innerText, sort);
          break;
        }
      }
    }, false);

    if(table.getAttribute('data-sortBy')){

      Array.from(table.querySelectorAll('[data-sortable]')).forEach((col, index) => {
        if(col.innerText == table.getAttribute('data-sortBy')){
          col.click();
        }
      });
    }
  }

  sortTable(tbody,sortBy,sort){

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
}

export default table