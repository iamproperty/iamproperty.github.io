// @ts-nocheck
import '@testing-library/jest-dom'
import * as tableModule from "../modules/table";
import puppeteer from 'puppeteer';
import "expect-puppeteer";

const basicTable = `<thead>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
    <th>Heading 3</th>
    <th>Heading 4</th>
    <th>Heading 5</th>
    <th>Heading 6</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Cell 1</td>
    <td>Low</td>
    <td>Cell 3</td>
    <td>Cell 4</td>
    <td>Cell 5</td>
    <td>Cell 6</td>
  </tr>
  <tr>
    <td>Cell 1</td>
    <td>Low</td>
    <td><a href="/link">View information</a></td>
    <td>Cell 4</td>
    <td>Cell 5</td>
    <td>Cell 6</td>
  </tr>
  <tr>
    <td>Different Cell 1</td>
    <td>Medium</td>
    <td><a href="/link">View information</a></td>
    <td>Cell 4</td>
    <td>Cell 5</td>
    <td>Cell 6</td>
  </tr>
  <tr>
    <td>Different Cell 1</td>
    <td>High</td>
    <td><a href="/link">View information</a></td>
    <td>Cell 4</td>
    <td>Cell 5</td>
    <td>Cell 6</td>
  </tr>
</tbody>`;

describe('addDataAttributes', () => {

  const table = document.createElement('table');
    table.innerHTML = basicTable;

  tableModule.addDataAttributes(table);

  test('should add data-label attribute to the table cells', () => {

    expect(table.querySelector('tbody td').getAttribute('data-label')).toEqual('Heading 1');
    expect(table.querySelector('tbody td:nth-child(2)').getAttribute('data-label')).toEqual('Heading 2');
  });

  test('should add data-content attribute to the table cells if the content matches a pre-defined list', () => {
    expect(table.querySelector('tbody tr:nth-child(2) td:nth-child(2)').getAttribute('data-content')).toEqual('low');
    expect(table.querySelector('tbody tr:nth-child(3) td:nth-child(2)').getAttribute('data-content')).toEqual('medium');
  });

});

describe('createSearchDataList', () => {

  const table = document.createElement('table');
  table.innerHTML = basicTable;
  const form = document.createElement('form');
  form.innerHTML += `<div><input name="search" id="search" type="text" class="form-control" data-search="Heading 1"></div>`
  
  tableModule.addDataAttributes(table);
  tableModule.createSearchDataList(table, form);

  test('should create a datalist populated by the defined columns in the data-search ', () => {

    expect(form.querySelectorAll('datalist').length).toEqual(1);
    expect(form.querySelectorAll('datalist option').length).toEqual(2);
    expect(form.querySelector('datalist option:nth-child(1)').value).toEqual('Cell 1');
    expect(form.querySelector('datalist option:nth-child(2)').value).toEqual('Different Cell 1');
  });

  test('should set the autocomplete attribute to off', () => {

    expect(form.querySelectorAll('datalist').length).toEqual(1);
    expect(form.querySelectorAll('datalist option').length).toEqual(2);
    expect(form.querySelector('datalist option:nth-child(1)').value).toEqual('Cell 1');
    expect(form.querySelector('input').getAttribute('autocomplete')).toEqual('off');
  });

});

describe('sortTable', () => {

  const table = document.createElement('table');
  table.innerHTML = basicTable;
  const form = document.createElement('form');
  form.innerHTML += `<div><select type="select" name="sort" id="sort" class="form-select" data-sort=""><option value="-1">Sort by</option><option value="high" data-sort="Heading 2" data-order="High,Medium,Low" selected="selected">high to low</option></select></div>`
  const savedTableBody = table.querySelector('tbody');

  tableModule.addDataAttributes(table);
  tableModule.sortTable(table, form, savedTableBody);

  test('should sort the table from high to low', () => {

    expect(table.querySelector('tbody tr:nth-child(1) td:nth-child(2)').textContent).toEqual('High');
    expect(table.querySelector('tbody tr:nth-child(2) td:nth-child(2)').textContent).toEqual('Medium');
    expect(table.querySelector('tbody tr:nth-child(3) td:nth-child(2)').textContent).toEqual('Low');
  });


});


describe('filterTable', () => {

  const table = document.createElement('table');
  table.innerHTML = basicTable;
  const form = document.createElement('form');
  form.innerHTML += `<div><input type="text" name="filter" id="filter" data-filter="Heading 2" value="High" /></div>`;

  tableModule.addDataAttributes(table);
  tableModule.filterTable(table, form, document.createElement('div'));

  test('should filter the table to only show high values', () => {

    expect(table.querySelectorAll('tbody tr.filtered--matched').length).toEqual(1);
  });
});


describe('formatCell', () => {

  test('should format the text correctly', () => {

    expect(tableModule.formatCell('date', '2023-05-15 12:10:45.000000')).toEqual('15 May 23');
    expect(tableModule.formatCell('capitalise', 'low')).toEqual('Low');
  });
});
