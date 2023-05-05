// @ts-nocheck
import {tableStacked} from "../../modules/table";

class iamTable extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';

    const isSticky = this.classList.contains('table--sticky');
    let classList = this.classList.toString();

    classList = classList.replace('table--sticky','');

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    </style>
    ${isSticky ? '<div class="table--sticky">' : ''}
    <div class="table__wrapper ${classList}">
      <slot></slot>
    </div>
    ${isSticky ? '</div>' : ''}
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {



    const table = this.querySelector('table');


    tableStacked(table);
    // Need to split up the below functions and add to the tables module


    // Work out the largest width of the CTA's in the last column
    let largestWidth = 0;
    if(this.classList.contains('table--sticky')){

      Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {

        let lastColChild = row.querySelector(':scope > td:last-child > *:first-child');
        lastColChild.parentNode.classList.add('col--sticky');

        let htmlStyles = window.getComputedStyle(document.querySelector('html'));
        let responsiveWidth = lastColChild.offsetWidth/parseFloat(htmlStyles.fontSize);
        responsiveWidth += 1.5;

        largestWidth = largestWidth > responsiveWidth ? largestWidth : responsiveWidth;
      });
    }

    table.parentNode.style.setProperty("--cta-width", `${largestWidth}rem`);

    // Create a button in the first column 
    Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {
      let firstCol = row.querySelector(':scope > td:first-child');

      let colContent = firstCol.textContent;
      firstCol.innerHTML =`<span>${colContent}</span><button type="button" class="d-sm-none">${colContent}</button>`;
    });

    // Event listener for the first column button to change the view of the table
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
}

export default iamTable;