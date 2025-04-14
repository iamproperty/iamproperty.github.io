import { zeroPad, isNumeric, ucfirst, resolvePath, uniqueID } from './helpers';

// #region Helpers
export const formatCell = (format, cellOutput): any => {
  switch (format) {
    case 'datetime':
      return (
        new Date(cellOutput).toLocaleDateString('en-gb', {
          weekday: 'short',
          year: '2-digit',
          month: 'long',
          day: 'numeric',
        }) +
        ' ' +
        new Date(cellOutput).toLocaleTimeString('en-gb', { hour: '2-digit', minute: '2-digit' })
      );
    case 'date':
      return new Date(cellOutput).toLocaleDateString('en-gb', {
        day: 'numeric',
        month: 'long',
        year: '2-digit',
      });
    case 'capitalise':
      return (cellOutput = ucfirst(cellOutput));
  }
};

const filterFilters = function (form): object {
  const filters = new Object();

  // Filter
  const filterInputs = Array.from(form.querySelectorAll('[data-filter]'));

  filterInputs.forEach((filterInput) => {
    // Ignore uncked radio inputs
    if (filterInput.type == 'radio' && !filterInput.checked) {
      return;
    }

    if (filterInput.type == 'checkbox' && !filterInput.checked) {
      return;
    }

    if (filterInput && filterInput.value) {
      const dataFilter = filterInput.getAttribute('data-filter');
      let filterValue = filterInput.value;

      if (filterInput.hasAttribute('data-date-from')) filterValue += '-date-from';

      if (filterInput.hasAttribute('data-date-to')) filterValue += '-date-to';

      if (!filters[dataFilter]) filters[dataFilter] = [];

      filters[dataFilter].push(filterValue);
    }
  });

  return filters;
};

export const moveAttributesToComponents = (component): void => {
  let form = document.createElement('form');
  const table = component.querySelector('table');

  if (component.hasAttribute('data-filterby')) {
    form = document.querySelector(`#${component.getAttribute('data-filterby')}`);
  } else if (component.closest('form')) {
    form = component.closest('form');
  } else {
    table.parentNode.insertBefore(form, table.nextSibling);
  }

  if (form.hasAttribute('data-ajax')) component.setAttribute('data-ajax', form.getAttribute('data-ajax'));

  if (form.hasAttribute('data-schema')) component.setAttribute('data-schema', form.getAttribute('data-schema'));
};

export const paginateTable = (component, table, form, pagination, callback): void => {
  if (!form.querySelector('[name=show]'))
    form.insertAdjacentHTML(
      'beforeend',
      `<input name="show" type="hidden" value="${component.getAttribute('data-show')}" />`
    );

  if (!form.querySelector('[name=page]'))
    form.insertAdjacentHTML(
      'beforeend',
      `<input name="page" type="hidden" value="${component.getAttribute('data-page')}" />`
    );

  pagination.addEventListener('update-show', (event) => {
    if (form.querySelector('[name=show]').value != event.detail.show) {
      form.querySelector('[name=show]').value = event.detail.show;

      const updateEvent = new CustomEvent('update-show', { detail: { show: event.detail.show } });
      component.dispatchEvent(updateEvent);

      updateAttributes(component, pagination);

      callback();
    }
  });

  pagination.addEventListener('update-page', (event) => {
    if (form.querySelector('[name=page]').value != event.detail.page) {
      form.querySelector('[name=page]').value = event.detail.page;

      const updateEvent = new CustomEvent('update-page', { detail: { page: event.detail.page } });
      component.dispatchEvent(updateEvent);

      updateAttributes(component, pagination);

      callback();

      // scroll back to the top of the table
      if (!component.hasAttribute('data-no-scroll')) {
        const yOffset = -250;
        const y = table.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
};

export const findForm = (component, table): HTMLElement => {
  let form = document.createElement('form');

  if (component.hasAttribute('data-filterby')) {
    form = document.querySelector(`#${component.getAttribute('data-filterby')}`);
  } else if (component.closest('form')) {
    form = component.closest('form');
  } else {
    table.parentNode.insertBefore(form, table.nextSibling);
  }

  return form;
};
// #endregion

export const setupBasicTable = (component, table, form, pagination): void => {
  const tableWrapper = component.shadowRoot.querySelector('.table__wrapper');

  if (!component.hasAttribute('data-total'))
    component.setAttribute('data-total', component.querySelectorAll('tbody tr').length);
  if (!component.hasAttribute('data-page')) component.setAttribute('data-page', 1);
  if (!component.hasAttribute('data-show')) component.setAttribute('data-show', 5);
  if (!component.hasAttribute('data-increment'))
    component.setAttribute('data-increment', component.getAttribute('data-show'));

  transferAttributes(component, pagination);

  addDataAttributes(table);
  createMobileButton(component, table);

  // Max height
  if (component.classList.contains('mh-sm')) tableWrapper.classList.add('mh-sm');
  if (component.classList.contains('mh-md')) tableWrapper.classList.add('mh-md');
  if (component.classList.contains('mh-lg')) tableWrapper.classList.add('mh-lg');

  if (component.classList.contains('table--cta')) {
    getLargestLastColWidth(component, table);
    getRowHeight(component, table);
  }
};

// #region Basic table fnctions
export const transferAttributes = (component, pagination): void => {
  if (component.hasAttribute('data-total')) pagination.setAttribute('data-total', component.getAttribute('data-total'));
  if (component.hasAttribute('data-page')) pagination.setAttribute('data-page', component.getAttribute('data-page'));
  if (component.hasAttribute('data-show')) pagination.setAttribute('data-show', component.getAttribute('data-show'));
  if (component.hasAttribute('data-increment'))
    pagination.setAttribute('data-increment', component.getAttribute('data-show'));

  if (component.hasAttribute('data-page-jump')) pagination.setAttribute('data-page-jump', 'true');
  if (component.hasAttribute('data-per-page')) pagination.setAttribute('data-per-page', 'true');
  if (component.hasAttribute('data-item-count')) pagination.setAttribute('data-item-count', 'true');
  if (component.hasAttribute('data-loading')) pagination.setAttribute('data-loading', 'true');

  if (component.classList.contains('table--fullwidth')) pagination.setAttribute('data-minimal', 'true');
};

export const updateAttributes = (component, pagination): void => {
  component.setAttribute('data-total', pagination.getAttribute('data-total'));
  component.setAttribute('data-page', pagination.getAttribute('data-page'));
  component.setAttribute('data-show', pagination.getAttribute('data-show'));
  component.setAttribute('data-increment', pagination.getAttribute('data-show'));
};

export const paginateRows = (component): void => {
  const total = component.getAttribute('data-total');
  const page = component.getAttribute('data-page');
  const show = component.getAttribute('data-show');
  const increment = component.getAttribute('data-increment');

  const table = component.querySelector('table');

  const end = page * show;
  const start = end - show;

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {
    if (index >= start && index < end) {
      row.classList.add('show');
    } else {
      row.classList.remove('show');
    }
  });
};

export const addDataAttributes = (table): void => {
  const colHeadings = Array.from(table.querySelectorAll('thead th'));
  const colRows = Array.from(table.querySelectorAll('tbody tr'));

  colRows.forEach((row) => {
    const cells = Array.from(row.querySelectorAll('th, td'));
    const statuses = [
      '0',
      'low',
      'medium',
      'high',
      'unknown',
      'n/a',
      'pending',
      'verified',
      'due',
      'overdue',
      'incomplete',
      'complete',
      'completed',
      'approval required',
      'upcoming',
      'requires approval',
      'to do',
      'on track',
      'not started',
      'warning',
      'successful',
      'failed',
    ];

    cells.forEach((cell, cellIndex) => {
      const heading = colHeadings[cellIndex];
      if (typeof heading != 'undefined') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = heading.innerHTML;
        const headingText = tempDiv.textContent || tempDiv.innerText || '';
        cell.setAttribute('data-label', headingText);

        if (heading.hasAttribute('data-td-class')) cell.setAttribute('class', heading.getAttribute('data-td-class'));

        if (heading.hasAttribute('data-format')) {
          cell.setAttribute('data-format', heading.getAttribute('data-format'));
          cell.innerHTML = formatCell(heading.getAttribute('data-format'), cell.textContent.trim()); //Make sure date format is consistent
        }

        if (statuses.includes(cell.textContent.trim().toLowerCase())) {
          cell.setAttribute('data-content', cell.textContent.trim().toLowerCase());
        }
      }
    });
  });
};

export const createMobileButton = (component, table): void => {
  if (component.classList.contains('table--fullwidth') && !component.hasAttribute('data-expandable')) return false;

  if (table.querySelectorAll('thead tr th').length < 4 && !component.hasAttribute('data-expandable')) return false;

  //If the expand column already exists we don't need to add a new one.
  Array.from(table.querySelectorAll('thead tr')).forEach((row) => {
    if (!table.querySelectorAll('thead tr th.expand-button-heading').length) {
      row.insertAdjacentHTML(
        'afterbegin',
        `<th class="${component.hasAttribute('data-expandable') ? 'th--fixed ' : ''}expand-button-heading"></th>`
      );
    }
  });

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {
    const preExpanded = row.getAttribute('data-view') === 'full' ? 'aria-expanded' : '';
    row.insertAdjacentHTML(
      'afterbegin',
      `<td class="${component.hasAttribute('data-expandable') ? 'td--fixed ' : ''}td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button ${preExpanded} data-index="${index}">Expand</button></td>`
    );
  });

  table.addEventListener('click', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-expand-button]')) {
      const button = event.target.closest('[data-expand-button]');
      const tableRow = button.closest('tr');

      button.toggleAttribute('aria-expanded');

      if (tableRow.getAttribute('data-view') == 'full') tableRow.setAttribute('data-view', 'default');
      else tableRow.setAttribute('data-view', 'full');

      button.blur();

      component.dispatchEvent(new CustomEvent('row-expanded', { detail: { row: button.getAttribute('data-index') } }));
    }
  });
};

export const getLargestLastColWidth = (component, table): void => {
  let largestWidth = 0;

  Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
    const htmlStyles = window.getComputedStyle(document.querySelector('html'));
    const lastColChild = row.querySelector(':scope > *:last-child > *:first-child');

    if (lastColChild) {
      lastColChild.classList.add('text-nowrap');
      let responsiveWidth = lastColChild.offsetWidth / parseFloat(htmlStyles.fontSize);
      responsiveWidth += 1.8;
      largestWidth = largestWidth > responsiveWidth ? largestWidth : responsiveWidth;
    }
  });

  component.style.setProperty('--cta-width', `${largestWidth}rem`);
};

export const getRowHeight = (component, table): void => {
  function outputsize(): void {
    Array.from(table.querySelectorAll('tr')).forEach((row) => {
      const rowHeight = row.offsetHeight;

      row.style.setProperty('--row-height', `${rowHeight}px`);
    });
  }

  new ResizeObserver(outputsize).observe(table);
};
// #endregion

export const setupAdvancedTable = (component, table): void => {
  if (
    component.querySelector('iam-actionbar[data-selectall]') ||
    document.querySelector(`iam-actionbar[data-for='${component.getAttribute('id')}']`)
  ) {
    const actionbar = component.querySelector('iam-actionbar[data-selectall]')
      ? component.querySelector('iam-actionbar[data-selectall]')
      : document.querySelector(`iam-actionbar[data-for='${component.getAttribute('id')}']`);

    addSelectboxes(component, table, actionbar);
  }

  component.querySelectorAll('.dialog__wrapper .btn-compact').forEach((btn) => {
    btn.classList.add('btn-sm');
    btn.classList.add('m-0');

    const tr = btn.closest('tr');
    const td = btn.closest('td');

    const trChildren = Array.prototype.slice.call(tr.children);
    const cellIndex = trChildren.indexOf(td);

    td.classList.add('td--fixed');
    table.querySelector(`thead tr th:nth-child(${cellIndex + 1})`).classList.add('th--fixed');
  });
};
// #region Advanced table functions
export const addSelectboxes = (component, table, actionbar): void => {
  Array.from(table.querySelectorAll('thead tr')).forEach((row) => {
    if (row.querySelector('.expand-button-heading'))
      row.querySelector('.expand-button-heading').insertAdjacentHTML('afterend', `<th class="th--fixed"></th>`);
    else row.insertAdjacentHTML('afterbegin', `<th class="th--fixed"></th>`);
  });

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {
    row.setAttribute('data-index', index + 1);
    if (!row.querySelector('.selectrow')) {
      const rowID = `row${uniqueID(index)}`;

      if (row.querySelector('.td--expand'))
        row
          .querySelector('.td--expand')
          .insertAdjacentHTML(
            'afterend',
            `<td class="td--fixed selectrow selected"><input type="checkbox" name="row" id="${rowID}" ${row.hasAttribute('data-selected') ? `checked="true"` : ''}/><label for="${rowID}"><span class="visually-hidden">Select row</span></label></td>`
          );
      else
        row.insertAdjacentHTML(
          'afterbegin',
          `<td class="td--fixed selectrow selected"><input type="checkbox" name="row" id="${rowID}" ${row.hasAttribute('data-selected') ? `checked="true"` : ''}/><label for="${rowID}"><span class="visually-hidden">Select row</span></label></td>`
        );
    }
  });

  table.addEventListener('change', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('.selectrow input')) {
      const input = event.target.closest('.selectrow input');
      const row = event.target.closest('tr');

      const count = table.querySelectorAll('.selectrow input[type="checkbox"]').length;
      const countChecked = table.querySelectorAll('.selectrow input[type="checkbox"]:checked').length;

      actionbar.setAttribute('data-selected', count == countChecked ? 'all' : countChecked);

      const dispatchedEvent = new CustomEvent('row-selected', {
        detail: {
          rowIndex: row.getAttribute('data-index'),
          checked: input.checked ? true : false,
        },
      });
      component.dispatchEvent(dispatchedEvent);
    }
  });

  actionbar.addEventListener('selected', (event) => {
    if (event.detail.selected == '0') {
      Array.from(table.querySelectorAll('.selectrow input[type="checkbox"]')).forEach((input) => {
        input.checked = false;
      });

      const dispatchedEvent = new CustomEvent('all-rows-unselected');
      component.dispatchEvent(dispatchedEvent);
    } else if (event.detail.selected == 'all') {
      Array.from(table.querySelectorAll('.selectrow input[type="checkbox"]')).forEach((input) => {
        input.checked = true;
      });

      const dispatchedEvent = new CustomEvent('all-rows-selected');
      component.dispatchEvent(dispatchedEvent);
    }
  });
};

// Export CSV Data
export const addExportEventListeners = (button, table): void | boolean => {
  if (!button) {
    return false;
  }

  button.addEventListener('click', () => {
    exportAsCSV(table);
  });
};

export const exportAsCSV = function (table): void {
  let csvData = [];
  // Get each row data
  const rows = table.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    // Get each column data
    const cols = rows[i].querySelectorAll('td,th');

    // Stores each csv row data
    const csvRow = [];
    for (let j = 0; j < cols.length; j++) {
      // Get the text data of each cell of a row and push it to csvrow
      csvRow.push(`"${cols[j].textContent}"`);
    }

    // Combine each column value with comma
    csvData.push(csvRow.join(','));
  }

  // Combine each row data with new line character
  csvData = csvData.join('\n');

  // Create CSV file object and feed our csvData into it
  const CSVFile = new Blob([csvData], {
    type: 'text/csv',
  });

  // Create to temporary link to initiate download process
  const tempLink = document.createElement('a');
  tempLink.download = 'export.csv';
  const url = window.URL.createObjectURL(CSVFile);
  tempLink.href = url;

  // This link should not be displayed
  tempLink.style.display = 'none';
  document.body.appendChild(tempLink);

  // Automatically click the link to trigger download
  tempLink.click();
  document.body.removeChild(tempLink);
};

// #endregion

export const setupNoSubmitTable = (component, table, form, pagination, savedTableBody): void => {
  sortViaHeaders(component, table);

  createSearchDataList(component, table);

  form.addEventListener('change', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-sort]')) {
      sortTable(table, form, savedTableBody);
    }
  });

  addFilterEventListeners(component, table, form, pagination, savedTableBody);
};

// #region No submit table functions
export const sortViaHeaders = (component, table): void => {
  table.addEventListener('click', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-sort]')) {
      const heading = event.target.closest('[data-sort]');
      heading.setAttribute('data-sort', 'true');

      // Turn other headings off
      Array.from(table.querySelectorAll('th[data-sort]')).forEach((element) => {
        if (element != heading) {
          element.setAttribute('data-sort', '');
          element.removeAttribute('data-order-by');
          heading.setAttribute('title', 'Click to sort ascending');
        }
      });

      if (heading.hasAttribute('data-order-by') && heading.getAttribute('data-order-by') == 'asc') {
        heading.setAttribute('data-order-by', 'desc');
        heading.setAttribute('title', 'Click to sort ascending');
      } else {
        heading.setAttribute('data-order-by', 'asc');
        heading.setAttribute('title', 'Click to sort descending');
      }

      // dispath event
      const dispatchedEvent = new CustomEvent('sort-by-heading', {
        detail: {
          heading: heading.textContent,
          sortBy: heading.getAttribute('data-order-by'),
          ref: heading.getAttribute('data-ref'),
        },
      });

      component.dispatchEvent(dispatchedEvent);

      const sortBy = heading.textContent.trim();
      const order = heading.getAttribute('data-order-by');

      if (!component.hasAttribute('data-submit')) {
        // TODO
        sortTableByValues(table, sortBy, order);
      }
    }
  });
};

export const createSearchDataList = (component, table): void => {
  const actionbar = component.querySelector('iam-actionbar');
  if (!actionbar) return false;

  const searchInput = actionbar.shadowRoot?.querySelector('input#search');
  if (!searchInput) return false;

  const searchID = searchInput.getAttribute('id');
  const inputWrapper = searchInput.parentNode;

  const searchableTerms = {};
  table.querySelectorAll('tbody td:not(.td--fixed)').forEach((td) => {
    if (td.querySelector('.td__content'))
      searchableTerms[td.querySelector('.td__content').textContent] = td.querySelector('.td__content').textContent;
    else searchableTerms[td.textContent] = td.textContent;
  });

  searchInput.setAttribute('list', `${searchID}_list`);
  searchInput.setAttribute('autocomplete', 'off');

  if (!inputWrapper.querySelector('datalist')) inputWrapper.innerHTML += `<datalist id="${searchID}_list"></datalist>`;

  inputWrapper.querySelector('datalist').innerHTML = `${Object.keys(searchableTerms)
    .map((term) => `<option value="${term}"></option>`)
    .join('')}`;
};

export const sortTable = (table, form, savedTableBody): void | boolean => {
  if (form.getAttribute('data-ajax')) {
    return false;
  }

  const tbody = table.querySelector('tbody');

  let selectedOption = form.querySelector(`input[type="radio"][data-sort]:checked`);

  if (form.querySelector('select[data-sort]')) {
    const select = form.querySelector('select[data-sort]');
    selectedOption = form.querySelector(`select[data-sort] option:nth-child(${select.selectedIndex + 1})`);
  }

  const sortBy = selectedOption.getAttribute('data-sort');
  const order = selectedOption.getAttribute('data-order');
  const format = selectedOption.getAttribute('data-format');

  if (!sortBy) {
    tbody.innerHTML = savedTableBody.innerHTML;
    addDataAttributes(table);
    return false;
  }

  sortTableByValues(table, sortBy, order, format);
};

export const sortTableByValues = (table, sortBy, order, format = ''): void => {
  const tbody = table.querySelector('tbody');

  let orderArray = [];
  if (!['asc', 'desc', 'descending'].includes(order)) {
    orderArray = order.split(',');
  }

  // Create an array from the table rows, the index created is then used to sort the array
  let tableArr = [];
  Array.from(tbody.querySelectorAll('tr')).forEach((tableRow) => {
    let rowIndex = tableRow
      .querySelector('td[data-label="' + sortBy + '"], th[data-label="' + sortBy + '"]')
      .textContent.trim();

    if (tableRow.querySelector('[data-label="' + sortBy + '"] .td__content')) {
      rowIndex = tableRow.querySelector('[data-label="' + sortBy + '"] .td__content').textContent.trim();
    }

    // If a predefined order set replace the search term with an ordered numeric value so it can be sorted
    if (orderArray.length && orderArray.includes(rowIndex)) {
      rowIndex = orderArray.indexOf(rowIndex);
    }

    if (isNumeric(rowIndex)) {
      rowIndex = zeroPad(rowIndex, 10);
    }

    // If the sort format is date then lets transform the index to a sortable date (this is never displayed)
    if (format && format == 'date') {
      rowIndex = new Date(rowIndex);
    }

    const dataRow = {
      index: rowIndex,
      row: tableRow,
    };
    tableArr.push(dataRow);
  });

  // Sort array alphabetically
  tableArr.sort((a, b) => (a.index > b.index ? 1 : -1));

  // Reverse if descending
  if (order == 'descending' || order == 'desc') {
    tableArr = tableArr.reverse();
  }

  // Create a string to return and populate the tbody
  let strTbody = '';
  tableArr.forEach((tableRow) => {
    strTbody += tableRow.row.outerHTML;
  });
  tbody.innerHTML = strTbody;
};

export const addFilterEventListeners = (component, table, form, pagination, savedTableBody): void => {
  let timer;

  // Check what conditions are set on the table to see what the form actions are
  const formSubmit = function (event, paginate = false): void | boolean {
    if (form.classList.contains('processing')) return false;

    Array.from(form.querySelectorAll('iam-applied-filters')).forEach((element) => {
      const event = new Event('tags-set');
      element.dispatchEvent(event);
    });

    // Before submitting check if any duplicate checkboxes within the filters dialog needs to upset the original input
    if (event.type == 'submit') {
      form.classList.add('processing');
      Array.from(form.querySelectorAll('[data-duplicate]')).forEach((element) => {
        const id = element.getAttribute('data-duplicate');
        const input = document.getElementById(id);
        const card = document.querySelector(`[for="${id}"] iam-card`);

        if (input.checked != element.checked) {
          if (card) {
            const clickEvent = new Event('click');
            card.dispatchEvent(clickEvent);
          } else {
            input.checked = element.checked;
          }
        }
      });
      form.classList.remove('processing');
    }

    filterTable(component, table, form, pagination);
    populateDataQueries(component, table, form);

    /*
    // Pass post data back to the page
    if (form.hasAttribute('data-ajax-post')) {
      const formData = new FormData(form);
      const queryString = new URLSearchParams(formData).toString();
      const http = new XMLHttpRequest();
      http.open('GET', `${window.location.href}?ajax=true&${queryString}`);
      http.send();
    }
      */
  };

  if (component.querySelector('iam-actionbar[data-search]')) {
    component.querySelector('iam-actionbar[data-search]').addEventListener('search-submit', (event) => {
      if (form.querySelector('input[data-search]')) {
        form.querySelector('input[data-search]').value = event.detail.search;
      } else {
        form.insertAdjacentHTML(
          'beforeend',
          `<input type="hidden" name="search" data-search="${component.querySelector('iam-actionbar[data-search]').getAttribute('data-search')}" value="${event.detail.search}"/>`
        );
      }

      const submitEvent = new CustomEvent('search-submit', {
        detail: event.details,
      });
      component.dispatchEvent(submitEvent);

      clearTimeout(timer);
      formSubmit(event);
    });
  }

  if (component.querySelector('iam-actionbar') && !component.querySelector('iam-actionbar').closest('form')) {
    component.querySelector('iam-actionbar').addEventListener('change', (event) => {
      if (!form.querySelector('.duplicate-actionbar')) {
        form.insertAdjacentHTML(
          'beforeend',
          `<div class="duplicate-actionbar" style="visibility: hidden; pointer-events: none; position: absolute;"></div>`
        );
      }

      form.querySelector('.duplicate-actionbar').innerHTML = component.querySelector('iam-actionbar').innerHTML;
      filterTable(component, table, form, pagination);
    });
  }

  form.addEventListener('keyup', (event) => {
    clearTimeout(timer);

    if (event && event.target instanceof HTMLElement && event.target.closest('input[data-search]')) {
      timer = setTimeout(function () {
        formSubmit(event);
      }, 500);
    }
  });

  form.addEventListener('change', (event) => {
    clearTimeout(timer);

    if (event && event.target instanceof HTMLElement && event.target.closest('input[data-search]')) {
      formSubmit(event);
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-filter][data-no-ajax]')) {
      // Allow for input fields to filter the current results without a new ajax call

      filterTable(component, table, form, pagination);
      populateDataQueries(table, form);
    } else if (
      event &&
      event.target instanceof HTMLElement &&
      event.target.closest('[data-filter]') &&
      event.target.closest('form .dialog__wrapper > dialog')
    ) {
      formSubmit(event);
    } else if (
      event &&
      event.target instanceof HTMLElement &&
      event.target.closest('[data-filter]') &&
      !event.target.closest('form dialog')
    ) {
      formSubmit(event);
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-show]')) {
      formSubmit(event);
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-mimic]')) {
      formSubmit(event);
    }

    if (event && event.target instanceof HTMLElement && event.target.hasAttribute('id')) {
      const id = event.target.getAttribute('id');

      if (document.querySelector(`[data-duplicate="${id}"]`)) {
        document.querySelector(`[data-duplicate="${id}"]`).checked = event.target.checked;
      }
    }
  });

  form.addEventListener('click', (event) => {
    clearTimeout(timer);

    if (event && event.target instanceof HTMLElement && event.target.closest('dialog button:not([type="button"])')) {
      const button = event.target.closest('dialog button:not([type="button"])');
      const modal = button.closest('dialog');

      modal.close();
    }

    // Prevent the form from submitting
    if (event && event.target instanceof HTMLElement && event.target.closest('.dialog__close')) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (event && event.target instanceof HTMLElement && event.target.closest('[data-clear]')) {
      form.classList.add('processing');
      // Make sure any applied filters have been removed
      Array.from(form.querySelectorAll('.applied-filters')).forEach((filters) => {
        filters.innerHTML = '';
      });

      // Make sure cards are unlicked
      const frm_elements = form.elements;

      for (let i = 0; i < frm_elements.length; i++) {
        const field_type = frm_elements[i].type.toLowerCase() ? frm_elements[i].type.toLowerCase() : 'text';
        switch (field_type) {
          case 'text':
          case 'password':
          case 'textarea':
            frm_elements[i].value = '';
            break;
          case 'radio':
          case 'checkbox':
            if (frm_elements[i].checked) {
              const input = frm_elements[i];
              const id = input.getAttribute('id');
              const label = document.querySelector(`[for="${id}"`);

              if (label.querySelector('iam-card')) {
                const card = label.querySelector('iam-card');
                const clickEvent = new Event('click');
                card.dispatchEvent(clickEvent);
              }

              input.checked = false;
            }
            break;
          case 'select-one':
          case 'select-multi':
            frm_elements[i].selectedIndex = -1;
            break;
          case 'hidden':
          default:
            break;
        }
      }

      form.classList.remove('processing');

      if (!form.hasAttribute('data-submit')) {
        sortTable(table, form, savedTableBody);
      }

      formSubmit(event);
    }
  });

  form.addEventListener('submit', (event) => {
    clearTimeout(timer);

    if (!form.hasAttribute('data-submit')) {
      event.preventDefault();
    }

    formSubmit(event);
  });

  form.addEventListener('force', (event) => {
    formSubmit(event);
  });

  form.addEventListener('paginate', (event) => {
    formSubmit(event, true);
  });

  // Mmimic fields
  const forms = [];
  const fields = [];

  // Collect the forms that we need to add an event listener for.
  Array.from(form.querySelectorAll('[data-mimic]')).forEach((input) => {
    const mimicField = input.getAttribute('data-mimic');

    Array.from(document.querySelectorAll(`[name="${mimicField}"]`)).forEach((mimicInput) => {
      const parentForm = mimicInput.closest('form');

      if (!forms.includes(parentForm)) {
        forms.push(parentForm);
      }

      if (!fields.includes(mimicField)) {
        fields.push(mimicField);
      }
    });
  });

  // For each form add change listener
  forms.forEach((parentForm) => {
    const updateMimicInput = function (): void {
      const mimickedAlready = [];
      const formData = new FormData(parentForm);

      let i = 1;
      for (const [key, value] of formData) {
        if (document.querySelector(`[data-mimic="${key}"]`) && !mimickedAlready.includes(key)) {
          mimickedAlready.push(key);
          document.querySelector(`[data-mimic="${key}"]`).value = value;
        } else if (document.querySelector(`[data-mimic="${key}"]`))
          document.querySelector(`[data-mimic="${key}"]`).value += ',' + value;

        i++;
      }

      for (const value of mimickedAlready) {
        const event = new Event('force');
        form.dispatchEvent(event);
      }

      // Check for empties
      for (const field of fields) {
        if (!formData.has(field) && parentForm.querySelector(`[name="${field}"]`)) {
          document.querySelector(`[data-mimic="${field}"]`).value = '';

          const event = new Event('force');
          form.dispatchEvent(event);
        }
      }
    };

    parentForm.addEventListener('force', () => {
      updateMimicInput();
    });

    parentForm.addEventListener('change', () => {
      updateMimicInput();
    });
  });
};

export const filterTable = (component, table, form, pagination): void => {
  table.classList.remove('table--filtered');

  const filters = filterFilters(form);
  const searches = [];
  let matched = 0;
  const page = form.querySelector('[data-pagination]') ? parseInt(form.querySelector('[data-pagination]').value) : 1;
  const showRows = form.querySelector('[data-show]') ? parseInt(form.querySelector('[data-show]').value) : 15;

  // Reset
  Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
    row.classList.remove('filtered');
    row.classList.remove('filtered--matched');
    row.classList.remove('filtered--show');

    row.removeAttribute('data-filtered-by');
  });

  // Add search columns too
  if (form.querySelector('input[data-search]')) {
    const searchInput = form.querySelector('input[data-search]');
    //const searchColumns = form.querySelector('input[data-search],[part="search-input"]').getAttribute('data-search').split(',');

    table.querySelectorAll('thead tr th').forEach((column) => {
      searches.push({ column: `${column.textContent.trim()}`, value: `${searchInput.value}` });
    });
  }

  //Display the filter count
  Array.from(form.querySelectorAll('[data-filter-count]')).forEach((element) => {
    element.innerHTML = '';
    element.parentNode.classList.remove('hover');
  });

  let filterCount = 0;
  Object.values(filters).forEach((filter) => {
    if (typeof filter == 'object' && Object.values(filter).length) {
      filterCount += Object.values(filter).length;
    } else {
      filterCount++;
    }
  });

  if (filterCount) {
    Array.from(form.querySelectorAll('[data-filter-count]')).forEach((element) => {
      element.innerHTML += `(${filterCount})`;
      element.parentNode.classList.add('hover');
    });
  }

  // Filter the table
  table.classList.add('table--filtered');
  for (const [key, filterValue] of Object.entries(filters)) {
    Array.from(table.querySelectorAll('tbody tr:not(.filtered)')).forEach((row) => {
      let isMatched = false;
      filterValue.forEach((filter) => {
        const filterTd = row.querySelector(`[data-label="${key}"]`);

        if (filter.includes('-date-from')) {
          const fromDate = new Date(filter.replace('-date-from', ''));
          const checkDate = new Date(filterTd.textContent.toLowerCase());

          fromDate.setHours(0, 0, 0, 0);
          checkDate.setHours(0, 0, 0, 0);

          if (checkDate < fromDate) {
            row.classList.add('less-than-from-date');
            isMatched = false;
          } else if (
            !row.classList.contains('less-than-from-date') &&
            !row.classList.contains('greater-than-to-date')
          ) {
            isMatched = true;
          }
        } else if (filter.includes('-date-to')) {
          const toDate = new Date(filter.replace('-date-to', ''));
          const checkDate = new Date(filterTd.textContent.toLowerCase());

          toDate.setHours(0, 0, 0, 0);
          checkDate.setHours(0, 0, 0, 0);

          if (checkDate > toDate) {
            row.classList.add('greater-than-to-date');
            isMatched = false;
          } else if (
            !row.classList.contains('less-than-from-date') &&
            !row.classList.contains('greater-than-to-date')
          ) {
            isMatched = true;
          }
        }

        // Dynamic values
        if (filter && filter == '$today') {
          filter = formatCell('date', new Date());
        } else if (filter && filter == '$yesterday') {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          filter = formatCell('date', yesterday);
        } else if (filter && (filter == '$thisWeek' || filter == '$lastWeek')) {
          const today = new Date();
          const mondayThisWeek = new Date(today.setDate(today.getDate() - (today.getDay() - 1)));
          const sundayThisWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7));
          const checkDate = new Date(filterTd.textContent.toLowerCase());

          today.setHours(0, 0, 0, 0);
          mondayThisWeek.setHours(0, 0, 0, 0);
          sundayThisWeek.setHours(0, 0, 0, 0);
          checkDate.setHours(0, 0, 0, 0);

          if (filter == '$thisWeek') {
            isMatched = checkDate >= mondayThisWeek && checkDate <= sundayThisWeek;
          } else {
            const mondayLastWeek = new Date(mondayThisWeek.setDate(mondayThisWeek.getDate() - 7));
            const sundayLastWeek = new Date(sundayThisWeek.setDate(sundayThisWeek.getDate() - 7));

            mondayLastWeek.setHours(0, 0, 0, 0);
            sundayLastWeek.setHours(0, 0, 0, 0);

            isMatched = checkDate >= mondayLastWeek && checkDate <= sundayLastWeek;
          }
        } else if (filter && filter == '$thisMonth') {
          const today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth();

          const firstDayMonth = new Date(year, month, 1);
          const lastDayMonth = new Date(year, month + 1, 0);
          const checkDate = new Date(filterTd.textContent.toLowerCase());

          firstDayMonth.setHours(0, 0, 0, 0);
          lastDayMonth.setHours(0, 0, 0, 0);
          checkDate.setHours(0, 0, 0, 0);

          isMatched = checkDate >= firstDayMonth && checkDate <= lastDayMonth;
        } else if (filter && filter == '$lastMonth') {
          const today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth();

          const firstDayLastMonth = new Date(year, month - 1, 1);
          const lastDayLastMonth = new Date(year, month, 0);
          const checkDate = new Date(filterTd.textContent.toLowerCase());

          firstDayLastMonth.setHours(0, 0, 0, 0);
          lastDayLastMonth.setHours(0, 0, 0, 0);
          checkDate.setHours(0, 0, 0, 0);

          isMatched = checkDate >= firstDayLastMonth && checkDate <= lastDayLastMonth;
        }

        if (filterTd && filterTd.textContent.toLowerCase().includes(filter.replace('-', ' ').toLowerCase())) {
          isMatched = true;
        }
      });

      if (!isMatched) {
        row.classList.add('filtered');
        row.setAttribute('data-filtered-by', key);
      }
    });
  }
  // Search whats left of the table after filtering
  Array.from(table.querySelectorAll('tbody tr:not(.filtered)')).forEach((row) => {
    let isSearched = searches.length > 0 && searches[0].value.length >= 3 ? false : true;

    searches.forEach((search) => {
      const searchTd = row.querySelector(`[data-label="${search.column}"]`);

      if (
        searchTd &&
        search.value.length >= 3 &&
        searchTd.textContent.toLowerCase().includes(search.value.toLowerCase())
      ) {
        isSearched = true;
      }
    });

    if (!isSearched) {
      row.classList.add('filtered');
    }
  });

  // Work out what to display after pagination
  Array.from(table.querySelectorAll('tbody tr:not(.filtered)')).forEach((row) => {
    matched++;

    row.classList.add('filtered--matched');

    // pagination bit
    const matchesPage = Math.ceil(matched / showRows);
    if (matchesPage == parseInt(page)) {
      row.classList.add('filtered--show');
    }
  });

  if (pagination) {
    pagination.setAttribute('data-total', matched);
    pagination.setAttribute('data-show', showRows);
    pagination.setAttribute('data-page', page);
  }
};

export const populateDataQueries = (component, table, form): void | boolean => {
  const dataQueries = Array.from(form.querySelectorAll('[data-query]'));

  dataQueries.forEach((queryElement) => {
    const query = queryElement.getAttribute('data-query');
    let numberOfMatchedRows = 0;

    if (query == 'total') {
      if (component.hasAttribute('data-total')) numberOfMatchedRows = component.getAttribute('data-total');
      else
        numberOfMatchedRows = table.classList.contains('table--filtered')
          ? table.querySelectorAll('tbody tr').length
          : table.querySelectorAll('tbody tr').length;
    } else if (!query.includes(' == ') && query.includes(' & ')) {
      const queries = query.split(' & ');
      let selector = '';

      queries.forEach((element) => {
        selector += `:not([data-filtered-by="${element}"])`;
      });

      numberOfMatchedRows = Array.from(table.querySelectorAll(`tbody tr${selector}`)).length;
    } else if (!query.includes(' == ')) {
      numberOfMatchedRows = Array.from(table.querySelectorAll(`tbody tr:not([data-filtered-by="${query}"])`)).length;
    } else if (query.includes(' && ')) {
      const queries = query.split(' && ');

      numberOfMatchedRows = Array.from(table.querySelectorAll(`tbody tr:not(.filtered)`)).filter(function (row) {
        let matched = true;

        for (const value of Object.entries(queries)) {
          const queryParts = value.split(' == ');

          if (
            !row.querySelector(`td[data-label="${queryParts[0]}"]`) ||
            row.querySelector(`td[data-label="${queryParts[0]}"]`).textContent != `${queryParts[1]}`
          )
            matched = false;
        }

        return matched;
      }).length;
    } else {
      const queryParts = query.split(' == ');
      numberOfMatchedRows = Array.from(
        table.querySelectorAll(
          `tbody tr.filtered--matched td[data-label="${queryParts[0]}"], tbody tr[data-filtered-by="${queryParts[0]}"] td[data-label="${queryParts[0]}"]`
        )
      ).filter(function (element) {
        return element.textContent === queryParts[1];
      }).length;
    }

    if (queryElement.hasAttribute('data-total')) {
      queryElement.setAttribute('data-total', numberOfMatchedRows);
    } else {
      queryElement.innerHTML = numberOfMatchedRows;
    }
  });
};
// #endregion

export const setupSubmitTable = (component, table, form, pagination): void => {
  form.setAttribute('method', 'get');

  const actionbar = component.querySelector('iam-actionbar');

  if (actionbar) {
    actionbar.addEventListener('change', (event) => {
      form.submit();
    });
  }
};

// #region submit tables functions

// #endregion

export const setupAjaxTable = (component, table, form, pagination): void => {
  loadAjaxTable(component, table, form, pagination);

  const actionbar = component.querySelector('iam-actionbar');

  form.addEventListener('submit', (event) => {
    loadAjaxTable(component, table, form, pagination);

    event.preventDefault();
  });

  if (actionbar) {
    actionbar.addEventListener('change', (event) => {
      loadAjaxTable(component, table, form, pagination);
    });
  }
};
// #region ajax tables functions

export const loadAjaxTable = async function (component, table, form, pagination): void {
  // Add actionbar inputs into form
  if (component.querySelector('iam-actionbar') && !component.querySelector('iam-actionbar').closest('form')) {
    if (!form.querySelector('.duplicate-actionbar'))
      form.insertAdjacentHTML(
        'beforeend',
        `<div class="duplicate-actionbar" style="visibility: hidden; pointer-events: none; position: absolute;"></div>`
      );

    form.querySelector('.duplicate-actionbar').innerHTML = component.querySelector('iam-actionbar').innerHTML;
  }

  // Add pagination inputs into form
  if (!form.querySelector('input[name=show]'))
    form.insertAdjacentHTML(
      'beforeend',
      `<input name="show" type="hidden" value="${component.getAttribute('data-show')}" />`
    );

  if (!form.querySelector('input[name=page]'))
    form.insertAdjacentHTML(
      'beforeend',
      `<input name="page" type="hidden" value="${component.getAttribute('data-page')}" />`
    );

  form.querySelector('input[name=page]').value = component.getAttribute('data-page');
  form.querySelector('input[name=show]').value = component.getAttribute('data-show');

  // Construct form data to send to api
  const formData = new FormData(form);

  const queryString = new URLSearchParams(formData).toString();
  const columns = table.querySelectorAll('thead tr th:not(.expand-button-heading)');
  const tbody = table.querySelector('tbody');
  const ajaxURL = form.getAttribute('data-ajax');

  component.classList.add('table--loading');

  // Display the filter count
  const filters = filterFilters(form);

  Array.from(form.querySelectorAll('[data-filter-count]')).forEach((element) => {
    element.innerHTML = '';
    element.parentNode.classList.remove('hover');
  });

  let filterCount = 0;
  Object.values(filters).forEach((filter) => {
    if (typeof filter == 'object' && Object.values(filter).length) filterCount += Object.values(filter).length;
    else filterCount++;
  });

  if (filterCount) {
    Array.from(form.querySelectorAll('[data-filter-count]')).forEach((element) => {
      element.innerHTML += `(${filterCount})`;
      element.parentNode.classList.add('hover');
    });
  }

  // Setup controller vars if not already set
  if (!window.controller) window.controller = [];

  // Abort if controller already present for this url
  if (window.controller[ajaxURL]) window.controller[ajaxURL].abort();

  // Create a new controller so it can be aborted if new fetch made
  window.controller[ajaxURL] = new AbortController();
  const { signal } = controller[ajaxURL];

  // Set loading on the pagination
  pagination.setAttribute('data-loading', 'true');
  form.classList.add('processing');

  try {
    await fetch(ajaxURL + '?' + queryString, {
      signal: signal,
      method: 'get',
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const schema = form.hasAttribute('data-schema') ? form.getAttribute('data-schema') : 'data';
        const totalNumberSchema = form.hasAttribute('data-schema-total')
          ? form.getAttribute('data-schema-total')
          : 'meta.total';
        const currentPageSchema = form.hasAttribute('data-schema-page')
          ? form.getAttribute('data-schema-page')
          : 'meta.current_page';

        const totalNumber = resolvePath(response, totalNumberSchema, 15);
        const currentPage = resolvePath(response, currentPageSchema, 1);
        const data = resolvePath(response, schema);
        const emptyMsg = component.hasAttribute('data-empty-msg')
          ? component.getAttribute('data-empty-msg')
          : 'No results found';

        if (data) {
          tbody.innerHTML = '';

          data.forEach((row) => {
            const table_row = document.createElement('tr');

            columns.forEach((col) => {
              let cellOutput = '';
              const table_cell = document.createElement('td');
              // Add some data to help with the mobile layout design
              table_cell.setAttribute('data-label', col.innerText);

              if (col.getAttribute('data-output')) {
                const cellTemplate = col.getAttribute('data-output');
                // Use a regex to replace {var} with actual values from the json data
                cellOutput = cellTemplate.replace(new RegExp(/{(.*?)}/, 'gm'), function (matched) {
                  return resolvePath(row, matched.replace('{', '').replace('}', ''));
                });
              }

              // If an output array is defined then the content is going to made of of multiple values from an array
              if (col.hasAttribute('data-output-array')) {
                const cellTemplate = col.getAttribute('data-output');
                const arrValue = resolvePath(row, cellTemplate.replace('{', '').replace('}', ''));

                cellOutput = '';
                arrValue.forEach((rowValue) => {
                  const cellTemplateValue = col.getAttribute('data-output-array');
                  let cellOutputValue = '';

                  // If we need to transform some of the data
                  if (
                    col.hasAttribute('data-output-array-property') &&
                    col.hasAttribute('data-output-array-transform')
                  ) {
                    const propertyValue = resolvePath(rowValue, col.getAttribute('data-output-array-property'));
                    const transforms = JSON.parse(col.getAttribute('data-output-array-transform'));
                    const transformValue = transforms[propertyValue];

                    cellOutputValue = cellTemplateValue.replace(
                      `{${col.getAttribute('data-output-array-property')}}`,
                      transformValue
                    );
                  }

                  cellOutputValue = cellOutputValue.replace(new RegExp(/{(.*?)}/, 'gm'), function (matched) {
                    return resolvePath(rowValue, matched.replace('{', '').replace('}', ''));
                  });
                  cellOutput += cellOutputValue;
                });
              }

              if (col.hasAttribute('data-transform')) {
                const transforms = JSON.parse(col.getAttribute('data-transform'));
                cellOutput = transforms[cellOutput];

                if (!cellOutput && col.hasAttribute('data-default')) cellOutput = col.getAttribute('data-default');
              }

              table_cell.innerHTML = cellOutput;
              table_row.appendChild(table_cell);
            });

            tbody.appendChild(table_row);
          });

          component.setAttribute('data-total', parseInt(totalNumber));
          component.setAttribute('data-page', parseInt(currentPage));

          pagination.setAttribute('data-total', totalNumber);
          pagination.setAttribute('data-page', currentPage);

          Array.from(form.querySelectorAll('[data-ajax-query]')).forEach((queryElement) => {
            const totalNumber = resolvePath(response, queryElement.getAttribute('data-ajax-query'), '');

            if (queryElement.hasAttribute('data-total')) queryElement.setAttribute('data-total', totalNumber);
            else queryElement.innerHTML = totalNumber;
          });

          if (parseInt(totalNumber) == 0) {
            tbody.innerHTML = `<tr><td colspan="100%"><span>${emptyMsg}</span></td></tr>`;
          }

          component.classList.remove('table--loading');

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'Ajax table loaded',
            url: ajaxURL,
            formData: queryString,
          });

          setupBasicTable(component, table, form, pagination);
          setupAdvancedTable(component, table, form, pagination);
        } else {
          tbody.innerHTML = '<tr><td colspan="100%"><span>Error loading table</span></td></tr>';
        }

        // Remove loading on the pagination
        pagination.removeAttribute('data-loading');
        form.classList.remove('processing');
      });
  } catch (error) {
    console.log(error);
  }
};
// #endregion

/*
// Pagination - still needed?
export const addPaginationEventListeners = function (component, table, form, pagination): void | boolean {

  
  pagination.addEventListener('update-page', (event) => {
    const paginationInput = form.querySelector('[data-pagination]');
    const newPage = event.detail.page;

    // Set the filter value
    paginationInput.value = newPage;
    form.dispatchEvent(new Event('paginate'));

    // Reset the data attribute
    component.setAttribute('data-page', newPage);

    if (table.hasAttribute('data-show-history')) {
      const url = new URL(location);
      url.searchParams.set('page', newPage);
      history.pushState({ type: 'pagination', form: form.getAttribute('id'), page: newPage }, '', url);
    }

    // scroll back to the top of the table
    if (!component.hasAttribute('data-no-scroll')) {
      const yOffset = -250;
      const y = table.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });

  pagination.addEventListener('update-show', (event) => {
    const showInput = form.querySelector('[data-show]');
    const showRows = event.detail.show;
    showInput.value = showRows;
    component.setAttribute('data-show', showRows);
    form.dispatchEvent(new Event('submit'));
  });
};
*/
