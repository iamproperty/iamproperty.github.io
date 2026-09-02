import { ucfirst, isNumeric, zeroPad, uniqueID, resolvePath } from './helpers.js';

export const tableHTML = `<div class="table__container" part="container">
  <slot name="before"></slot>
  <div class="table--cta">
    <div class="table__wrapper" part="wrapper">
      <slot></slot>
    </div>
  </div>
  <iam-pagination part="pagination" class="pagination--table"></iam-pagination>
</div>`;

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

      cellOutput = cellOutput.replaceAll('/', '-');

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

export const findForm = (component, table): HTMLElement => {
  let form = document.createElement('form');

  if (component.hasAttribute('data-filterby')) {
    form = document.querySelector(`#${component.getAttribute('data-filterby')}`);
  } else if (component.closest('form')) {
    form = component.closest('form');
  } else if (component.querySelector('form')) {
    form = component.querySelector('form');
  } else {
    table.parentNode.insertBefore(form, table.nextSibling);
  }

  if (component.hasAttribute('data-ajax')) {
    form.setAttribute('data-ajax', component.getAttribute('data-ajax'));
  }

  return form;
};

export const findActionbar = (component, form): HTMLElement => {
  let actionbar = null;

  if (component.querySelector('iam-actionbar')) {
    actionbar = component.querySelector('iam-actionbar');
  }
  else if(document.querySelector(`iam-actionbar[data-for='${component.getAttribute('id')}']`)) {
    actionbar = document.querySelector(`iam-actionbar[data-for='${component.getAttribute('id')}']`);
  }

  return actionbar;
};
// #endregion

// #region Basic table fnctions
export const setupBasicTable = (component, table, pagination, form): void => {

  const params = new URLSearchParams(window.location.search);
  const tableWrapper = component.shadowRoot.querySelector('.table__wrapper');

  // Make sure the actionbar has the correct slot applied
  const actionbar = component.querySelector('iam-actionbar');
  if(actionbar) actionbar.setAttribute('slot', 'before');

  // Set attributes from URL params
  if (params.has('page')) component.setAttribute('data-page', params.get('page'));
  if (params.has('show')) component.setAttribute('data-show', params.get('show'));

  if (params.has('page')) pagination.setAttribute('data-page', params.get('page'));
  if (params.has('show')) pagination.setAttribute('data-show', params.get('show'));

  // Set pagination default attributes if not already set
  if (!component.hasAttribute('data-total'))
    component.setAttribute('data-total', component.querySelectorAll('tbody tr').length);
  if (!component.hasAttribute('data-page')) component.setAttribute('data-page', 1);
  if (!component.hasAttribute('data-show')) component.setAttribute('data-show', 15);
  if (!component.hasAttribute('data-increment'))
    component.setAttribute('data-increment', component.getAttribute('data-show'));

  // Stop the mobile view when advanced table or has column filters or sort is enabled or when in admin panel
  if(component.matches('iam-table-advanced') || table.querySelectorAll('th[data-filters]').length || table.querySelectorAll('th[data-sort]').length || component.closest('.admin-panel')) {

    component.classList.add('table--fullwidth');
  }

  setupPagination(component, table, pagination, form);
  fixTablebody(component, table);

  // Max height
  if (component.classList.contains('mh-sm')) tableWrapper.classList.add('mh-sm');
  if (component.classList.contains('mh-md')) tableWrapper.classList.add('mh-md');
  if (component.classList.contains('mh-lg')) tableWrapper.classList.add('mh-lg');

  component.classList.remove('mh-sm');
  component.classList.remove('mh-md');
  component.classList.remove('mh-lg');
};

export const fixTablebody = (component, table): void => {

  fixTableCells(table);
  createExpandButton(component, table);
  addMenuButtons(component, table);
  setFixedCellsViaHeaders(table);
  highlightRows(component); // Is this still needed?
  paginateRows(component, table, component.shadowRoot.querySelector('iam-pagination'));
};

export const setFixedCellsViaHeaders = (table): void => {
  const updateLeftOffsets = (): void => {
    table.querySelectorAll('th, td').forEach((cell) => {

      const previousColWidths =
        cell.previousElementSibling && cell.previousElementSibling.dataset.previousColWidths
          ? parseInt(cell.previousElementSibling.dataset.previousColWidths) + (cell.previousElementSibling.classList.contains('th--fixed') || cell.previousElementSibling.classList.contains('td--fixed') ? cell.previousElementSibling.offsetWidth : 0)
          : 0;

      cell.dataset.previousColWidths = previousColWidths;
      cell.style.setProperty('--left-offset', `${previousColWidths}px`);
    });
  };

  updateLeftOffsets();
  new ResizeObserver(updateLeftOffsets).observe(table);

  table.querySelectorAll('thead th.th--fixed').forEach((th) => {

    const thIndex = Array.prototype.slice.call(th.parentNode.children).indexOf(th) + 1;

    table.querySelectorAll(`tbody tr td:nth-child(${thIndex})`).forEach((td) => {
      td.classList.add('td--fixed');

      if(td.querySelector('a:only-child')) {
        td.classList.add('text-nowrap');
      }
    });
  });
};

export const highlightRows = (component): void => {
  Array.from(component.querySelectorAll('tr[data-highlight]')).forEach((row) => {
    row.insertAdjacentHTML(
      'afterend',
      `<tr role="presentation" class="tr--highlight">
          <td colspan="100%"><i class="fa-solid fa-star"></i> ${row.getAttribute('data-highlight')}</td>
        </tr>`
    );
  });
};

export const setupPagination = (component, table, pagination, form): void => {

  if(!pagination) return;

  if (component.hasAttribute('data-total')) pagination.setAttribute('data-total', component.getAttribute('data-total'));
  if (component.hasAttribute('data-page')) pagination.setAttribute('data-page', component.getAttribute('data-page'));
  if (component.hasAttribute('data-show')) pagination.setAttribute('data-show', component.getAttribute('data-show'));
  if (component.hasAttribute('data-increment')) pagination.setAttribute('data-increment', component.getAttribute('data-increment'));

  if (component.hasAttribute('data-page-jump')) pagination.setAttribute('data-page-jump', 'true');
  if (component.hasAttribute('data-per-page')) pagination.setAttribute('data-per-page', 'true');
  if (component.hasAttribute('data-item-count')) pagination.setAttribute('data-item-count', 'true');
  if (component.hasAttribute('data-loading')) pagination.setAttribute('data-loading', 'true');

  if (component.classList.contains('table--fullwidth')) pagination.setAttribute('data-minimal', 'true');

  if(!form) return;

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

      paginationUpdatedEvent(component, table, pagination, form);
    }
  });

  pagination.addEventListener('update-page', (event) => {

    if (form.querySelector('[name=page]').value != event.detail.page) {
      form.querySelector('[name=page]').value = event.detail.page;

      const updateEvent = new CustomEvent('update-page', { detail: { page: event.detail.page } });
      component.dispatchEvent(updateEvent);

      paginationUpdatedEvent(component, table, pagination, form);
    }
  });
};

export const paginationUpdatedEvent = (component, table, pagination, form): void => {

  if (component.hasAttribute('data-submit') && form) {

    form.setAttribute('method', 'get');
    form.submit();

    return;
  }

  updateAttributes(component, pagination);
  paginateRows(component, table, pagination);

  // scroll back to the top of the table
  if (!component.hasAttribute('data-no-scroll')) {
    const yOffset = -250;
    const y = table.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export const updateAttributes = (component, pagination): void => {
  component.setAttribute('data-total', pagination.getAttribute('data-total'));
  component.setAttribute('data-page', pagination.getAttribute('data-page'));
  component.setAttribute('data-show', pagination.getAttribute('data-show'));
  component.setAttribute('data-increment', pagination.getAttribute('data-increment'));
};

export const paginateRows = (component, table, pagination): void => {

  const page = component.getAttribute('data-page');
  const show = component.getAttribute('data-show');
  const end = page * show;
  const start = end - show;
  let matched = 0;

  const query = table.classList.contains('table--filtered') ? 'tbody tr.filtered--matched' : 'tbody tr';

  console.log(table);
  console.log(query);

  Array.from(table.querySelectorAll(query)).forEach((row, index) => {

    matched++;

    if (index >= start && index < end) {
      row.classList.add('show');

      if(table.classList.contains('table--filtered'))
        row.classList.add('filtered--show');
    }
    else {
      row.classList.remove('show');

      if(table.classList.contains('table--filtered'))
        row.classList.remove('filtered--show');
    }
  });

  if (pagination) {

    pagination.setAttribute('data-total', matched);
    pagination.setAttribute('data-show', show);
    pagination.setAttribute('data-page', page);
  }
};

export const fixTableCells = (table): void => {
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
        tempDiv.innerHTML = heading.querySelector('.th__content')?.innerHTML ? heading.querySelector('.th__content')?.innerHTML : heading.innerHTML;
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

export const createExpandButton = (component, table): void => {

  if (table.querySelectorAll('thead tr th').length < 4) return false;

  //If the expand column already exists we don't need to add a new one.
  Array.from(table.querySelectorAll('thead tr')).forEach((row) => {
    if (!table.querySelectorAll('thead tr th.expand-button-heading').length) {
      row.insertAdjacentHTML(
        'afterbegin',
        `<th class="th--fixed expand-button-heading"></th>`
      );
    }
  });

  Array.from(table.querySelectorAll('tbody tr')).forEach((row, index) => {
    Array.from(row.querySelectorAll('p')).forEach((p, index) => {
      const lineHeight = window.getComputedStyle(p, null).getPropertyValue('line-height');

      const lines = Math.ceil(p.offsetHeight / parseInt(lineHeight));
      p.setAttribute('data-lines', lines);
      if (lines >= 3) {
        p.classList.add('three-lines');
      }
    });

    if (row.querySelector('p') && !row.hasAttribute('data-view'))
      row.setAttribute('data-view', 'default');


    const chevronIcon = row.getAttribute('data-view') === 'full' ? 'fa-chevron-up' : 'fa-chevron-down';
    if (!row.querySelectorAll('td.td--expand').length) {
      row.insertAdjacentHTML(
        'afterbegin',
        `<td class="td--fixed td--expand"><button class="btn btn-compact btn-secondary btn-sm ${chevronIcon}" data-expand-button data-index="${index}">Expand</button></td>`
      );
    }
  });

  table.addEventListener('click', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('[data-expand-button]')) {
      const button = event.target.closest('[data-expand-button]');
      const tableRow = button.closest('tr');

      button.toggleAttribute('aria-expanded');

      if (button.classList.contains('fa-chevron-down')) {
        button.classList.remove('fa-chevron-down');
        button.classList.add('fa-chevron-up');
      } else {
        button.classList.remove('fa-chevron-up');
        button.classList.add('fa-chevron-down');
      }

      if (tableRow.getAttribute('data-view') == 'full') tableRow.setAttribute('data-view', 'default');
      else tableRow.setAttribute('data-view', 'full');

      button.blur();

      component.dispatchEvent(new CustomEvent('row-expanded', { detail: { row: button.getAttribute('data-index') } }));
    }
  });


};

export const addMenuButtons = (component, table): void => {

  table.querySelectorAll('td:has(iam-menu:only-child)').forEach((cell) => {

    cell.insertAdjacentHTML('afterbegin', `<button class="btn btn-secondary btn-compact btn-sm fa-ellipsis-vertical m-0" style="anchor-name: --actions;">Open menu</button>`);

    const menu = cell.querySelector('iam-menu');
    const btn = cell.querySelector('button');

    menu.setAttribute('popover','auto');
    menu.setAttribute('style', 'position-anchor: --actions;');

    btn.addEventListener('click', (event) => {

      menu.togglePopover(btn);
    });
  });
};
// #endregion

// #region Expanded table functions
export const setupExpandedTable = (component, table, form, actionbar): void => {


  if(actionbar && actionbar.hasAttribute('data-selectall')) {
    component.setAttribute('data-selectall', actionbar.getAttribute('data-selectall'));
  }

  createSearchDataList(component, table);

  addSelectboxes(component, table, actionbar);
  addSelectboxesEvents(component, table, actionbar);


  if (component.hasAttribute('data-submit') && form) {

    form.setAttribute('method', 'get');

    if (actionbar) {
      actionbar.addEventListener('change', (event) => {
        form.submit();
      });
    }
  }
};

export const addSelectboxes = (component, table): void => {

  if(!component.hasAttribute('data-selectall'))
    return;

  Array.from(table.querySelectorAll('thead tr')).forEach((row) => {
    if (row.querySelector('.expand-button-heading') && !row.querySelector('.selectrow-heading'))
      row.querySelector('.expand-button-heading').insertAdjacentHTML('afterend', `<th class="th--fixed selectrow-heading"></th>`);
    else if(!row.querySelector('.selectrow-heading'))
      row.insertAdjacentHTML('afterbegin', `<th class="th--fixed selectrow-heading"></th>`);
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

};

export const addSelectboxesEvents = (component, table, actionbar): void => {

  table.addEventListener('change', (event) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('.selectrow input')) {
      const input = event.target.closest('.selectrow input');
      const row = event.target.closest('tr');

      const count = table.querySelectorAll('.selectrow input[type="checkbox"]').length;
      const countChecked = table.querySelectorAll('.selectrow input[type="checkbox"]:checked').length;

      actionbar?.setAttribute('data-selected', count == countChecked ? 'all' : countChecked);

      const dispatchedEvent = new CustomEvent('row-selected', {
        detail: {
          rowIndex: row.getAttribute('data-index'),
          checked: input.checked ? true : false,
        },
      });
      component.dispatchEvent(dispatchedEvent);
    }
  });

  actionbar?.addEventListener('selected', (event) => {
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
    fixTableCells(table);
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
      form.classList.remove('processing');
    }

    filterTable(component, table, form, pagination);
    populateDataQueries(component, table, form);

  };
  /*
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

      if(component.tagName != "IAM-TABLE-NO-SUBMIT")
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
*/
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
    //let numberOfMatchedRows = 0;

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

// #region Advanced table functions
export const setupAdvancedTable = (component, table, pagination, form, savedTableBody): void => {

  populateFilterOptions(component, table);
  createInlineHeaderButtons(component, table);
  filterAdvancedTable(component, table);
  paginateRows(component, table, pagination);

  table.querySelectorAll('thead tr th[data-sort] [data-sort-btn]').forEach((btn) => {

    btn.addEventListener('click', (event) => {

      const heading = event.target.closest('th[data-sort]');
      sortViaHeader(component, table, heading, savedTableBody);

      btn.closest('th[data-sort]')?.focus();
    });

  });

  table.querySelectorAll('thead tr th[data-filters] [data-filter-btn]').forEach((btn) => {

    btn.addEventListener('click', (event) => {

      const heading = event.target.closest('th[data-filters]');
      createFilterPopover(component, table, heading);
    });
  });
};

export const createInlineHeaderButtons = (component, table): void => {


  table.querySelectorAll('thead tr th[data-sort], thead tr th[data-filters]').forEach((heading) => {

    heading.innerHTML = `<div class="th__content">${heading.textContent.trim()}</div><span class="th__divider"></span>`;
    heading.setAttribute('data-label', heading.textContent.trim());
  });


  table.querySelectorAll('thead tr th[data-sort]').forEach((heading) => {

    const headingText = heading?.querySelector('.th__content')?.textContent.trim();

    if (!heading.querySelector('[data-sort-btn]')) {
      heading.insertAdjacentHTML('beforeend', ` <button class="btn btn-action m-0" type="button" title="Sort by ${headingText}" data-sort-btn><i class="fa-solid fa-duotone fa-arrow-down-arrow-up m-0" data-sort-btn></i><span class="visually-hidden">Sort by ${headingText}</span></button>`);
    }
  });

  table.querySelectorAll('thead tr th[data-filters]').forEach((heading) => {

    heading.setAttribute('data-original-filters', heading.getAttribute('data-filters'));

    const headingText = heading?.querySelector('.th__content')?.textContent.trim();

    if (!heading.querySelector('[data-filter-btn]')) {
      heading.insertAdjacentHTML('beforeend', ` <button class="btn btn-action m-0" type="button" title="Filter by ${headingText}" data-filter-btn><i class="fa-solid fa-filter m-0"></i><span class="visually-hidden">Filter by ${headingText}</span></button>`);
    }
  });
};

export const sortViaHeader = (component, table, heading, savedTableBody): void => {

  const btn = heading.querySelector('[data-sort-btn]');
  const headingText = heading?.querySelector('.th__content')?.textContent.trim();
  heading.setAttribute('data-sort', 'true');

  // Turn other headings off
  Array.from(table.querySelectorAll('th[data-sort]')).forEach((element) => {
    if (element != heading) {
      element.setAttribute('data-sort', '');
      element.removeAttribute('data-order-by');
      element?.querySelector('[data-sort-btn]')?.setAttribute('title', 'Click to sort ascending');
    }
  });


  // Update the button state and the data-order-by attribute
  if(!heading.hasAttribute('data-order-by') || heading.getAttribute('data-order-by') == '') {
    heading.setAttribute('data-order-by', 'asc');
    btn.setAttribute('title', 'Click to sort descending');
  }
  else if(heading.hasAttribute('data-order-by') && heading.getAttribute('data-order-by') == 'asc') {
    heading.setAttribute('data-order-by', 'desc');
    btn.setAttribute('title', 'Remove sorting');
  }
  else if(heading.hasAttribute('data-order-by') && heading.getAttribute('data-order-by') == 'desc') {
    heading.removeAttribute('data-order-by');
    btn.setAttribute('title', `Sort by ${headingText}`);
  }

  // Work out what to do based on the state of the heading
  if(!heading.hasAttribute('data-order-by')) {

    // Reset the table to the original order
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = savedTableBody.innerHTML;


    if(component.querySelector('iam-actionbar')) {
      const actionbar = component.querySelector('iam-actionbar');
      addSelectboxes(component, table, actionbar);
    }

    fixTablebody(component, table);
    filterAdvancedTable(component, table);
    paginateRows(component, table, component.shadowRoot.querySelector('iam-pagination'));

    // Dispatch event
    const dispatchedEvent = new CustomEvent('sort-by-heading', {
      detail: {
        heading: headingText,
        sortBy: heading.getAttribute('data-order-by'),
        ref: heading.getAttribute('data-ref'),
      },
    });
    component.dispatchEvent(dispatchedEvent);
  }
  else {

    // Dispatch event
    const dispatchedEvent = new CustomEvent('sort-by-heading', {
      detail: {
        heading: headingText,
        sortBy: heading.getAttribute('data-order-by'),
        ref: heading.getAttribute('data-ref'),
      },
    });
    component.dispatchEvent(dispatchedEvent);

    const sortBy = headingText;
    const order = heading.getAttribute('data-order-by');
    const format = heading.getAttribute('data-format') ?? '';

    sortTableByValues(table, sortBy, order, format);
  }
};

export const populateFilterOptions = (component, table): void => {
  if (!table) return;

  table.querySelectorAll('th[data-filters]').forEach((heading) => {
    const filters = JSON.parse(heading.dataset.filters || '[]');

    if (!Array.isArray(filters)) return;

    filters.forEach((filter, index) => {
      if (!filter || filter.options) return;

      const headingIndex = heading.cellIndex;
      const uniqueValues = new Set<string>();

      Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
        const cells = Array.from(row.querySelectorAll('td, th'));
        const cell = cells[headingIndex];

        if (!cell) return;

        const value = cell.textContent?.replace(/\s+/g, ' ').trim();

        if (value) uniqueValues.add(value);
      });

      if (uniqueValues.size) {
        filters[index].options = Array.from(uniqueValues);
      }
    });

    heading.dataset.filters = JSON.stringify(filters);
  });
};

export const getInlineFilters = (component, table): Array<any> => {

  const columnsArray = [];

  table.querySelectorAll('th[data-filters]').forEach(heading => {

    const columnIndex = heading.cellIndex;

    const columnName = heading.dataset.label; // TO DO add a fallback for when a name isnt set
    const filters = JSON.parse(heading.dataset.filters);
    columnsArray.push({'column' : columnName, 'index': columnIndex, 'filters': filters});
  });

  return columnsArray;
};

export const updateHeadingFilters = (heading, dialog): void => {

  const filters = JSON.parse(heading.dataset.filters);

  filters.forEach((filter, index) => {

    filters[index].operator = dialog.querySelector(`[name="filter-${index}-operator"]`) ? dialog.querySelector(`[name="filter-${index}-operator"]`).value : null;
    filters[index].value = dialog.querySelector(`[name="filter-${index}"]`) ? dialog.querySelector(`[name="filter-${index}"]`).value : null;
  });

  heading.dataset.filters = JSON.stringify(filters);
};

export const resetHeadingFilters = (heading): void => {

  const filters = JSON.parse(heading.dataset.originalFilters);

  filters.forEach((filter, index) => {
    filters[index].value = null;
  });

  heading.dataset.filters = JSON.stringify(filters);
};

export const createFilterPopover = (component, table, heading): void => {

  const filters = JSON.parse(heading.dataset.filters);


  if(component.querySelector('.dialog--inline-filter')){

    const filtersPopover = component.querySelector('.dialog--inline-filter');

    filtersPopover.hidePopover();
    filtersPopover.remove();

    return false;
  }

  // Set the anchor to the active heading
  heading.style.setProperty('anchor-name', '--filters-button');

  Array.from(table.querySelectorAll('th[data-filters]')).forEach((element) => {
    if (element != heading) {
      element.removeAttribute('style');
    }
  });

  const filtersPopover = document.createElement("dialog");

  filtersPopover.classList.add('dialog--inline-filter');
  filtersPopover.style.setProperty('position-anchor', '--filters-button')
  filtersPopover.setAttribute('popover','auto');

  filters.forEach((filter, index) => {

    const filterType = filter.type ?? 'text';
    const filterOperator = filter.operator ?? 'Contains';
    const filterFieldset = document.createElement("fieldset");
    const filterOptions = filter.options && Array.isArray(filter.options) ? filter.options : null;

    // #region Create the operators select
    let filterOperators = filter.operators ?? ['Contains','Does not contain', 'Equals', 'Does not equal', 'Begins with', 'Ends with'];

    if(filterType == 'date' && !filter.operators)
      filterOperators = ['Equals', 'Does not equal','Before','After','Between'];

    if(filterType == 'select' && !filter.operators)
      filterOperators = null;

    if(filterOperators && Array.isArray(filterOperators)){

      let operatorsOptions = '';

      filterOperators.forEach(operator => {
        operatorsOptions += `<option ${ operator == filterOperator ? 'selected="selected"' : ''}>${operator}</option>`;
      });

      filterFieldset.insertAdjacentHTML('beforeend',
      /* HTML */`<label>
        <span class="visually-hidden">Operator</span>
        <select name="filter-${index}-operator" data-operator>
          ${operatorsOptions}
        </select>
      </label>`);
    }
    // #endregion

    // #region Create the filter input
    if(filterType != 'select' ){

      filterFieldset.insertAdjacentHTML('beforeend',
        /* HTML */`
        <label>
          <span class="visually-hidden">Filter</span>
          <input type="${filter.type}" name="filter-${index}" value="${filter.value}" ${filterOptions ? `list="filter-${index}-options"` : ''} />
        </label>`);
    }
    // #endregion

    // #region Create the list of values

    if(filterOptions){
      let filterOptionsHTML = '';

      filterOptions.forEach(option => {

        filterOptionsHTML += `<option ${ option.trim() == filter.value ? 'selected="selected"' : ''}>${option.trim()}</option>`;
      });


      if(filterType != 'select')
        filterFieldset.insertAdjacentHTML('beforeend',`<datalist id="filter-${index}-options">${filterOptionsHTML}</datalist>`);
      else
        filterFieldset.insertAdjacentHTML('beforeend',`<label><span class="visually-hidden">Filter</span><select name="filter-${index}">${filterOptionsHTML}</select></label>`);
    }
    // #endregion

    filtersPopover.insertAdjacentElement('beforeend',filterFieldset);
  });


  // #region Create buttons
  const filterButtonGroup = document.createElement("div");
  filterButtonGroup.classList.add('btn-group');

  const filterButton = document.createElement("button");
  filterButton.setAttribute('type','button');
  filterButton.classList.add('btn');
  filterButton.classList.add('btn-action');
  filterButton.textContent = 'Update';

  filterButton.addEventListener('click', (event) => {

    updateHeadingFilters(heading, filtersPopover);
    filterAdvancedTable(component, table);
    filtersPopover.hidePopover();

    const submitEvent = new CustomEvent('filters-updated', {
      detail: getInlineFilters(component, table)
    });

    component.dispatchEvent(submitEvent);
  });

  const filterResetButton = document.createElement("button");
  filterResetButton.setAttribute('type','button');
  filterResetButton.classList.add('btn');
  filterResetButton.classList.add('btn-action');
  filterResetButton.textContent = 'Reset';

  filterResetButton.addEventListener('click', (event) => {

    resetHeadingFilters(heading);
    filterAdvancedTable(component, table);
    filtersPopover.hidePopover();

    const submitEvent = new CustomEvent('filters-updated', {
      detail: getInlineFilters(component, table)
    });

    component.dispatchEvent(submitEvent);
  });

  filterButtonGroup.insertAdjacentElement('beforeend',filterButton);
  filterButtonGroup.insertAdjacentElement('beforeend',filterResetButton);
  filtersPopover.insertAdjacentElement('beforeend',filterButtonGroup);
  // #endregion

  component.insertAdjacentElement('beforeend',filtersPopover);

  filtersPopover.showPopover();

  filtersPopover.addEventListener('toggle', (event) => {
    if (event.newState === 'closed') {
      filtersPopover.remove();
    }
  });
};

export const filterAdvancedTable = (component, table): void => {

  const columns = getInlineFilters(component, table);
  const appliedFilters = [];
  table.classList.remove('table--filtered');

  if(columns.length == 0) return;

  Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {

    row.classList.remove('filtered--matched');
    row.classList.remove('filtered--show');
    row.classList.remove('filtered');
  });

  columns.forEach((column) => {

    const columnIndex = column.index;
    const columnName = column.column;

    column.filters.forEach((filter) => {

      const filterOperator = String(filter.operator ?? 'equals').toLowerCase();
      const filterValue = filter.value;
      const value = String(filterValue ?? '');

      if(value == '' || value == null || value == 'undefined') return;

      appliedFilters.push(columnName);

      const betweenValues = filterOperator === 'between'
        ? (Array.isArray(filterValue) ? filterValue : value.split(','))
        : [];

      table.classList.add('table--filtered');
      table.querySelectorAll(`tbody tr td:nth-child(${columnIndex + 1})`).forEach((cell) => {

        const cellValue = cell.textContent ?? '';
        let matched = false;

        switch (filterOperator) {
          case 'contains':
            matched = cellValue.includes(value);
            break;
          case 'does not contain':
            matched = !cellValue.includes(value);
            break;
          case 'equals':
            matched = cellValue === value;
            break;
          case 'does not equal':
          case 'not':
            matched = cellValue !== value;
            break;
          case 'begins with':
            matched = cellValue.startsWith(value);
            break;
          case 'ends with':
            matched = cellValue.endsWith(value);
            break;
          case 'before':
          case 'less':
            matched = cellValue < value;
            break;
          case 'after':
          case 'greater':
            matched = cellValue > value;
            break;
          case 'between': {
            const [from, to] = betweenValues;
            matched = from != null && to != null && cellValue >= String(from).trim() && cellValue <= String(to).trim();
            break;
          }
          case 'set':
            matched = cellValue.trim() !== '';
            break;
          case 'empty':
            matched = cellValue.trim() === '';
            break;
        }

        if (!matched)
          cell.closest('tr').classList.add('filtered');
        //else
          //cell.closest('tr').classList.add('filtered--matched');
      });

    });
  });


  Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {

    if (!row.classList.contains('filtered')) {
      row.classList.add('filtered--matched');
    }
  });

  setFilterIndicator(component, table, appliedFilters);
  createAppliedFilters(component, table, appliedFilters);
  paginateRows(component, table, component.shadowRoot.querySelector('iam-pagination'));
};

export const setFilterIndicator = (component, table, appliedFilters): void => {

  table.querySelectorAll(`th[data-filtered]`).forEach((heading) => {
    heading.removeAttribute('data-filtered');
  });

  appliedFilters.forEach((filter) => {

    const heading = table.querySelector(`th[data-label="${filter}"]`);

    if (heading) {
      heading.setAttribute('data-filtered', 'true');
    }
  });
};

export const createAppliedFilters = (component, table, appliedFilters): void => {

  const appliedFiltersContainer = component.shadowRoot.querySelector('.table-filters');

  if(!appliedFiltersContainer) return;

  appliedFiltersContainer.innerHTML = '';

  appliedFilters.forEach((filter) => {

    const filterElement = document.createElement('button');
    filterElement.classList.add('tag');
    filterElement.classList.add('wider-colour-3');
    filterElement.textContent = filter;
    appliedFiltersContainer.appendChild(filterElement);

    filterElement.addEventListener('click', (event) => {

      filterElement.remove();
      removeAppliedFilter(component, table, filter);
    });
  });
};

export const removeAppliedFilter = (component, table, filter): void => {

  const heading = table.querySelector(`th[data-label="${filter}"]`);

  if (heading) {
    const filters = JSON.parse(heading.dataset.filters);
    const newFilters = [];

    filters.forEach((filterObj) => {
      if (filterObj.value) {
        filterObj.value = null;
      }
      newFilters.push(filterObj);
    });

    heading.dataset.filters = JSON.stringify(newFilters);
  }

  filterAdvancedTable(component, table);
};

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

// #region Ajax tables functions
export const setupAjaxTable = (component, table, pagination, form): void => {
  loadAjaxTable(component, table, pagination, form);

  const actionbar = component.querySelector('iam-actionbar');

  if (form.hasAttribute('data-ajax')) component.setAttribute('data-ajax', form.getAttribute('data-ajax'));

  if (form.hasAttribute('data-schema')) component.setAttribute('data-schema', form.getAttribute('data-schema'));

  form.addEventListener('submit', (event) => {
    Array.from(form.querySelectorAll('[data-duplicate]')).forEach((loopElement) => {
      const element = loopElement.tagName == 'IAM-INPUT' ? loopElement.querySelector('input') : loopElement;
      const id = loopElement.getAttribute('data-duplicate');

      if (document.querySelector(`[id="${id}"], [name="${id}"]`)) {
        document.querySelector(`[id="${id}"], [name="${id}"]`).checked = element.checked;
      }
    });

    loadAjaxTable(component, table, pagination, form);

    event.preventDefault();
  });

  form.addEventListener('change', (event) => {
    if (!event.target.closest('iam-modal')) {
      loadAjaxTable(component, table, pagination, form);
    }
  });

  // watch hidden fields for change events
  Array.from(form.querySelectorAll('[type="hidden"]')).forEach((input) => {
    input.addEventListener('change', (event) => {
      loadAjaxTable(component, table, pagination, form);
    });
  });

  if (actionbar) {
    actionbar.addEventListener('change', (event) => {
      loadAjaxTable(component, table, pagination, form);
    });

    actionbar.addEventListener('search-submit', (event) => {
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

      loadAjaxTable(component, table, pagination, form);
    });
  }
};

export const loadAjaxTable = async function (component, table, pagination, form): void {

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

  formData.set('page_number', formData.get('page')); // Fix for compliance dashbaord

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
        const schema = component.hasAttribute('data-schema') ? component.getAttribute('data-schema') : 'data';
        const totalNumberSchema = component.hasAttribute('data-schema-total')
          ? component.getAttribute('data-schema-total')
          : 'meta.total';
        const currentPageSchema = component.hasAttribute('data-schema-page')
          ? component.getAttribute('data-schema-page')
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

          const savedTableBody = table.querySelector('tbody').cloneNode(true);

          setupBasicTable(component, table, pagination, form);
          setupExpandedTable(component, table, form, actionbar);
          setupAdvancedTable(component, table, pagination, form, savedTableBody);

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
