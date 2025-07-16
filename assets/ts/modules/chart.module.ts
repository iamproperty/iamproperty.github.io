import { ucfirst, unsnake } from './helpers';

// #region Functions that setup and trigger other functions

export const addClasses = (chartElement: any, chartOuter: any): boolean => {
  // add colour classes
  for (let i = 1; i <= 10; i++) {
    if (chartElement.hasAttribute(`data-colour-${i}`)) {
      const colour = chartElement.getAttribute(`data-colour-${i}`);
      chartElement.style.setProperty(`--chart-colour-${i}`, `var(--chart-colour-${colour})`);
      chartElement.style.setProperty(`--chart-colour-${i}-hover`, `var(--chart-colour-${colour}-hover)`);
    }

    Array.from(chartOuter.querySelectorAll(`[data-colour-${i}]`)).forEach((element: HTMLElement) => {
      const colour = element.getAttribute(`data-colour-${i}`);
      element.style.setProperty(`--chart-colour-${i}-set`, `var(--chart-colour-${colour})`);
      element.style.setProperty(`--chart-colour-${i}-hover`, `var(--chart-colour-${colour}-hover)`);
    });
  }

  return true;
};

export const setupChart = (chartElement: any, chartOuter: any, tableElement: any): boolean => {
  if (chartElement.tagName == 'IAM-DOUGHNUTCHART') {
    setupDoughnutChart(chartElement, chartOuter, tableElement);
    return true;
  }

  // #region Reset the chart
  // empty divs to re-populate
  const chartKey = chartOuter.querySelector('.chart__key');
  chartKey.innerHTML = '';
  const chartGuidelines = chartOuter.querySelector('.chart__guidelines');
  chartGuidelines.innerHTML = ``;
  const chartYaxis = chartOuter.querySelector('.chart__yaxis');
  chartYaxis.innerHTML = ``;

  // Remove old input fields
  Array.from(chartOuter.querySelectorAll(':scope > input[type="checkbox"],:scope > input[type="radio"]')).map(
    (element: any) => {
      element.remove();
    }
  );
  // #endregion

  const { xaxis } = getChartData(chartElement);

  setCellData(chartElement, tableElement);

  createChartKey(chartOuter, tableElement, chartKey);
  createChartGuidelines(chartElement, chartGuidelines);
  createChartYaxis(chartElement, chartYaxis);

  if (xaxis) {
    createXaxis(chartOuter);
  }

  return true;
};

export const setupDoughnutChart = (chartElement: any, chartOuter: any, tableElement: any): boolean => {
  // #region Reset the chart
  // empty divs to re-populate
  const chartKey = chartOuter.querySelector('.chart__key');
  chartKey.innerHTML = '';

  // Remove old input fields
  Array.from(chartOuter.querySelectorAll(':scope > input[type="checkbox"],:scope > input[type="radio"]')).map(
    (element: any) => {
      element.remove();
    }
  );
  // #endregion

  setCellData(chartElement, tableElement);

  createChartKey(chartOuter, tableElement, chartKey);
  createdoughnuts(chartOuter);

  return true;
};
// #endregion

// #region Event handlers and observers
export const setEventListener = function (chartElement: any, chartOuter: any): void {
  const chart = chartOuter.querySelector('.chart');
  chart.addEventListener('mousemove', (event: any) => {
    if (event && event.target instanceof HTMLElement && event.target.closest('td:not(:first-child')) {
      const column = event.target.closest('td:not(:first-child');

      const rect = column.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      chart.setAttribute('style', `--cursor-x: ${x}px; --cursor-y: ${y}px;`);
    }
  });

  // Use the part for the chart items to pass through states to the pages CSS
  const labels = chartOuter.querySelectorAll('label');

  Array.from(labels).forEach((label: HTMLElement) => {
    if (chartOuter.querySelector(`input#${label.getAttribute('for')}`).checked)
      label.setAttribute('part', 'key-checked');
    else label.setAttribute('part', 'key-unchecked');
  });

  const table = chartElement.querySelector('table');
  const shadowTable = chartOuter.querySelector('table');

  chartOuter.addEventListener('change', function (event: any) {
    const eventTarget = event.target;

    const customEvent = new CustomEvent('view-change', {
      detail: {
        'data-dataset': eventTarget.getAttribute('data-dataset'),
        label: eventTarget.getAttribute('data-label'),
        checked: eventTarget.checked,
      },
    });

    chartElement.dispatchEvent(customEvent);

    Array.from(labels).forEach((label: HTMLElement) => {
      if (chartOuter.querySelector(`input#${label.getAttribute('for')}`)?.checked)
        label.setAttribute('part', 'key-checked');
      else label.setAttribute('part', 'key-unchecked');
    });

    shadowTable.innerHTML = table.innerHTML;
    setCellData(chartElement, shadowTable);

    if (chartElement.tagName == 'IAM-DOUGHNUTCHART') {
      createdoughnuts(chartOuter);
    }
  });
};

export const setEventObservers = function (chartElement: any, chartOuter: any): boolean {
  const table = chartElement.querySelector('table');
  const shadowTable = chartOuter.querySelector('table');

  const attributesUpdated = (mutationList: any, observer: any): void => {
    observer.disconnect();
    observer2.disconnect();

    for (const mutation of mutationList) {
      if (mutation.attributeName == 'class' || mutation.type === 'attributes' || mutation.type === 'attributes') {
        shadowTable.innerHTML = table.innerHTML;
        setupChart(chartElement, chartOuter, shadowTable);
      }
    }

    observer.observe(table, { characterData: true, subtree: true });
    observer2.observe(chartElement, { attributes: true });
  };

  const tableUpdated = (mutationList: any, observer: any): void => {
    observer.disconnect();
    observer2.disconnect();

    for (const mutation of mutationList) {
      if (mutation.type == 'characterData' || (mutation.type == 'childList' && mutation.addedNodes.length)) {
        shadowTable.innerHTML = table.innerHTML;
        setupChart(chartElement, chartOuter, shadowTable);
      }
    }

    observer.observe(table, { characterData: true, subtree: true });
    observer2.observe(chartElement, { attributes: true });
  };

  const observer = new MutationObserver(tableUpdated);
  const observer2 = new MutationObserver(attributesUpdated);

  observer.observe(table, { characterData: true, subtree: true });
  observer2.observe(chartElement, { attributes: true });

  return true;
};

function getCoordinatesForPercent(percent: number, doughnutCount: number): any {
  // This moves the start point to the top middle point like a clock
  if (doughnutCount > 1) percent = percent - 0.25;

  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x * 100, y * 100];
}
// #endregion

// #region GET functions
export const getChartData = function (chartElement: any): any {
  const table = chartElement.shadowRoot.querySelector('.chart__wrapper table');

  const min: any = chartElement.hasAttribute('data-min') ? chartElement.getAttribute('data-min') : 0;
  const max: any = chartElement.hasAttribute('data-max')
    ? chartElement.getAttribute('data-max')
    : getLargestValue(chartElement, table);
  //let type:string = chartElement.hasAttribute('data-type') ? chartElement.getAttribute('data-type') : 'column';
  const yaxis: any = chartElement.hasAttribute('data-yaxis') ? chartElement.getAttribute('data-yaxis').split(',') : [];
  const guidelines: any = chartElement.hasAttribute('data-guidelines')
    ? chartElement.getAttribute('data-guidelines').split(',')
    : [];
  //let targets:any = chartElement.hasAttribute('data-targets') ? JSON.parse(chartElement.getAttribute('data-targets')) : null;
  //let events:any = chartElement.hasAttribute('data-events') ? JSON.parse(chartElement.getAttribute('data-events')) : null;
  const xaxis: any = chartElement.hasAttribute('data-xaxis')
    ? chartElement.getAttribute('data-xaxis').split(',')
    : null;
  //let increment = chartElement.hasAttribute('data-increment') ? chartElement.getAttribute('data-increment'): null;

  //let start:any = chartElement.hasAttribute('data-start') ? chartElement.getAttribute('data-start') : 0;
  //let end:any = chartElement.hasAttribute('data-end') ? chartElement.getAttribute('data-end') : getLargestValue(chartElement,table); // TODO - get largest value from the data-xaxis

  //let slope:any = chartElement.hasAttribute('data-slope') ? chartElement.getAttribute('data-slope') : null;
  //let yInt:any = chartElement.hasAttribute('data-yint') ? chartElement.getAttribute('data-yint') : null;

  return { min, max, yaxis, xaxis, guidelines };
};

function getLargestValue(chartElement: any, table: any): number {
  const selector = chartElement.classList.contains('chart--stacked') ? 'tbody tr' : 'tbody td:not(:first-child)';

  const values = Array.from(table.querySelectorAll(selector)).map((element: any) => {
    const currentValue = element.getAttribute('data-numeric');

    return currentValue;
  });

  const largestValue: number = Math.max(...values);

  // TO DO round to the nearest 10, 100, 1000 and so on
  return Math.ceil(largestValue);
}

const getValues = function (value: number, min: any, max: any, start?: number): any {
  let cleanValue: string | number = String(value);
  cleanValue = cleanValue.replace('£', '');
  cleanValue = cleanValue.replace('%', '');
  cleanValue = cleanValue.replace(',', '');
  cleanValue = Number.parseFloat(cleanValue);

  let percent = ((cleanValue - min) / (max - min)) * 100;
  let axis = percent;
  let bottom = 0;

  if (start && start != 0) {
    bottom = ((start - min) / (max - min)) * 100;
  }

  // If the value is negative the position below the 0 line
  if (min < 0) {
    bottom = Math.abs((min / (max - min)) * 100);

    if (cleanValue < 0) {
      percent = bottom - percent;
      bottom = bottom - percent;
      axis = bottom;
    } else {
      percent = percent - bottom;
      axis = percent + bottom;
    }
  }

  return { percent, axis, bottom };
};

// #endregion

// #region SET functions - set data attributes and classes
export const setCellData = function (chartElement: any, table: any): void {
  Array.from(table.querySelectorAll('tbody tr')).forEach((tr: any) => {
    let rowValue = 0;
    // Set the data numeric value if not set
    Array.from(tr.querySelectorAll('td:not(:first-child)')).forEach((td: any) => {
      // Ignore the buttons and links inside
      const copyTD = td.cloneNode(true);
      Array.from(copyTD.querySelectorAll('*')).forEach((element: any) => {
        element.remove();
      });

      const value = parseFloat(copyTD.textContent.replace('£', '').replace('%', '').replace(',', ''));

      td.setAttribute('data-numeric', value);
      td.setAttribute('data-value', copyTD.textContent);

      const display = getComputedStyle(td).display;

      if (display != 'none') rowValue += value;

      Array.from(td.querySelectorAll('a, button')).forEach((element: any, index: number) => {
        if (index == 0) {
          element.insertAdjacentHTML('beforeBegin', '<hr/>');
        }

        element.classList.add('btn');
        element.classList.add('btn-tertiary');
      });
    });

    tr.setAttribute('data-numeric', rowValue);
  });

  const { min, max } = getChartData(chartElement);

  Array.from(table.querySelectorAll('tbody tr')).forEach((tr: any, index) => {
    const group = tr.querySelector('td:first-child, th:first-child')
      ? tr.querySelector('td:first-child, th:first-child').textContent
      : '';

    tr.setAttribute('part', 'group');

    const percent = ((tr.getAttribute('data-numeric') - min) / (max - min)) * 100;

    tr.style.setProperty('--percent', `${percent}%`);

    // Set the data label value if not set
    Array.from(tr.querySelectorAll('td:not([data-label])')).forEach((td: any, index) => {
      if (index == 0)
        td.setAttribute('part', 'xaxis-label'); // PART
      else td.setAttribute('part', 'value');

      if (tr.querySelectorAll('td').length > 2)
        td.setAttribute('data-label', table.querySelectorAll('thead th')[index].textContent);
    });

    const rowMin = tr.hasAttribute('data-min') ? tr.getAttribute('data-min') : min;
    const rowMax = tr.hasAttribute('data-max') ? tr.getAttribute('data-max') : max;

    if (rowMin < 0) {
      const minBottom = Math.abs((rowMin / (rowMax - rowMin)) * 100);
      chartElement.setAttribute('style', `--min-bottom: ${minBottom}%;`);
    }

    // Add a useful index css var for the use of animatons.
    tr.style.setProperty('--row-index', index + 1);

    // Add css vars to cells
    Array.from(
      tr.querySelectorAll('td[data-numeric]:not([data-label="Min"]):not([data-label="Max"]):not(:first-child)')
    ).forEach((td: any) => {
      const display = getComputedStyle(td).display;
      if (display == 'none') return;

      const content = td.innerHTML;
      const value = Number.parseFloat(td.getAttribute('data-numeric'));
      const start = Number.parseFloat(td.getAttribute('data-start'));

      if (!td.querySelector('span[data-group]'))
        td.innerHTML = `<span data-group="${group}" ${td.hasAttribute('data-label') ? `data-label="${td.getAttribute('data-label')}"` : ''} part="popover">${content}</span>`;

      if (!td.hasAttribute('style')) {
        const { percent, bottom, axis } = getValues(value, rowMin, rowMax, start);

        td.setAttribute('data-percent', percent);
        td.setAttribute('style', `--bottom:${bottom}%;--percent:${percent}%;--axis:${axis}%;`);
      }
    });
  });
};

export const setLongestLabel = function (chartOuter: any): void {
  const chartWrapper = chartOuter.querySelector('.chart__wrapper');
  const chartSpacer = chartOuter.querySelector('.chart__spacer span');
  const table = chartOuter.querySelector('.chart table');
  // set the longest label attr so that the bar chart knows what margin to set on the left
  let longestLabel = '';
  Array.from(table.querySelectorAll('tbody tr td:first-child')).forEach((td: any) => {
    if (typeof td.textContent != 'undefined' && td.textContent.length > longestLabel.length) {
      longestLabel = td.textContent;
    }
  });
  chartWrapper.setAttribute('data-longest-label', longestLabel);
  chartSpacer.innerHTML = longestLabel;
};

export const setLongestValue = function (chartOuter: any): void {
  const chartWrapper = chartOuter.querySelector('.chart__wrapper');
  const table = chartOuter.querySelector('.chart table');

  let longestValue = '';
  Array.from(table.querySelectorAll('tbody tr td:not(:first-child)')).forEach((td: any) => {
    if (
      typeof td.getAttribute('data-value') != 'undefined' &&
      td.getAttribute('data-value').length > longestValue.length
    ) {
      longestValue = td.getAttribute('data-value');
    }
  });
  chartWrapper.setAttribute('data-longest-value', longestValue);
};
// #endregion

// #region CREATE function

export const createChartKey = function (chartOuter: any, tableElement: any, chartKey: any): boolean {
  const chartID = `chart-${Date.now() + (Math.floor(Math.random() * 100) + 1)}`;
  //const chartOuter = chartElement.querySelector('.chart__outer');

  let previousInput: any;

  const headings = Array.from(tableElement.querySelectorAll('thead th'));

  headings.forEach((arrayElement: any, index) => {
    if (index != 0) {
      previousInput = createChartKeyItem(chartID, index, arrayElement.textContent, chartKey, chartOuter, previousInput);
    }

    if (index == 50) {
      headings.length = index + 1;
    }
  });

  return true;
};

function createChartKeyItem(
  chartID: string,
  index: number,
  text: Array<string>,
  chartKey: any,
  chartOuter: any,
  previousInput: any
): any {
  const input = document.createElement('input');
  input.setAttribute('name', `${chartID}-dataset-${index}`);
  input.setAttribute('id', `${chartID}-dataset-${index}`);
  input.setAttribute('data-dataset', `${index}`);
  input.setAttribute('data-label', `${text}`);
  input.checked = true;
  input.setAttribute('type', `checkbox`);

  if (index == 1) chartOuter.prepend(input);
  else chartOuter.insertBefore(input, previousInput.nextSibling);

  previousInput = input;

  const label = document.createElement('label');
  label.setAttribute('class', `key btn btn-action`);
  label.setAttribute('for', `${chartID}-dataset-${index}`);
  label.setAttribute('data-label', `${text}`);
  label.setAttribute('part', `key`);

  const total = chartOuter.querySelector(`tbody tr td:nth-child(${index + 1})`)?.getAttribute('data-numeric');

  label.setAttribute('data-numeric', total);
  label.innerHTML = `${text}`;
  chartKey.append(label);

  return previousInput;
}

export const createChartGuidelines = function (chartElement: any, chartGuidelines: any): any {
  const { min, max, yaxis } = getChartData(chartElement);
  let { guidelines } = getChartData(chartElement);

  if (!guidelines.length) guidelines = yaxis;

  chartGuidelines.innerHTML = '';
  for (let i = 0; i < guidelines.length; i++) {
    const value = parseFloat(guidelines[i].replace('£', '').replace('%', '').replace(',', ''));

    const { axis } = getValues(value, min, max);
    chartGuidelines.innerHTML += `<div class="guideline" style="--percent:${axis}%;">${yaxis.indexOf(guidelines[i]) != -1 ? `<span>${guidelines[i]}</span>` : ''}</div>`;
  }
};

export const createChartYaxis = function (chartElement: any, chartYaxis: any): void {
  const { min, max, yaxis } = getChartData(chartElement);

  chartYaxis.innerHTML = '';
  for (let i = 0; i < yaxis.length; i++) {
    const value = parseFloat(yaxis[i].replace('£', '').replace('%', ''));

    const { axis } = getValues(value, min, max);
    chartYaxis.innerHTML += `<div class="axis__point" style="--percent:${axis}%;"><span>${yaxis[i]}</span></div>`;
  }
};

export const createXaxis = function (chartOuter: any): void {
  const chart = chartOuter.querySelector('.chart');
  let chartXaxis = chartOuter.querySelector('.chart__xaxis');

  if (!chartXaxis) {
    chartXaxis = document.createElement('div');
    chartXaxis.setAttribute('class', 'chart__xaxis');
  }

  chart.prepend(chartXaxis);
};

export const createTooltips = function (chartOuter: any): void {
  const titles = chartOuter.querySelectorAll(
    'thead th[title], tbody th[title]:first-child, tbody td[title]:first-child'
  );

  Array.from(titles).forEach((title: HTMLElement) => {
    const tooltipId = `tooltip-${Date.now()}-${Math.floor(Math.random() * 100)}`;

    title.innerHTML = `<button class="tooltip" popovertarget="${tooltipId}" part="tooltip" style="anchor-name: --${tooltipId};">${title.textContent}</button><span id="${tooltipId}" style="position-anchor: --${tooltipId};" popover part="tooltip__content" class="tooltip__content">${title.getAttribute('title')}</span>`;

    //title.removeAttribute('title'); // TODO add a supports query for anchor positioning
  });
};

export const createdoughnuts = function (chartOuter: any): void {
  let returnString = '';
  const chartInner = chartOuter.querySelector('.chart');
  let doughnutWrapper = chartOuter.querySelector('.doughnuts');

  if (!doughnutWrapper) {
    doughnutWrapper = document.createElement('div');
    doughnutWrapper.setAttribute('class', 'doughnuts');
    chartInner.append(doughnutWrapper);
  }

  Array.from(chartInner.querySelectorAll('tbody tr')).forEach((item: any, index) => {
    let paths = '';
    let tooltips = '';
    let cumulativePercent = 0;
    let total = 0;
    const titleKey = item.querySelectorAll('td')[0];
    const title = titleKey.innerHTML;
    let doughnutCount = 0;
    const rowTotal = item.getAttribute('data-numeric');

    // Work out the total amount
    Array.from(item.querySelectorAll('td')).forEach((td: any, subindex) => {
      const display = getComputedStyle(td).display;

      if (subindex != 0 && display != 'none') {
        let value = td.getAttribute('data-numeric');

        value = value.replace('£', '');
        value = value.replace('%', '');
        value = value.replace(',', '');
        value = Number.parseInt(value);

        total += value;
        doughnutCount++;
      }
    });

    // Create the paths
    Array.from(item.querySelectorAll('td')).forEach((td: any, subindex) => {
      const display = getComputedStyle(td).display;

      if (subindex != 0 && doughnutCount == 1 && display != 'none') {
        const pathData = `M 0 0 L 100 0 A 100 100 0 1 1 100 -0.01 L 0 0`;

        paths += `<path d="${pathData}" style="${td.getAttribute('style')} --path-index: ${subindex};"></path>`;
        tooltips += `<span class="h5 mb-0" part="popover">${ucfirst(unsnake(td.getAttribute('data-label'))).trim()}<br/>${td.hasAttribute('data-second') ? `${td.getAttribute('data-second-label')}: ${td.getAttribute('data-second')}<br/>` : ''}${td.querySelector('[part="popover"]')?.innerHTML}</span>`;
      } else if (subindex != 0) {
        let value = td.getAttribute('data-numeric');
        const hide = display == 'none' ? 'display: none;' : '';

        value = value.replace('£', '');
        value = value.replace('%', '');
        value = value.replace(',', '');
        value = Number.parseInt(value);

        const percent = value / total;
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent, doughnutCount);
        const [endX, endY] = getCoordinatesForPercent(cumulativePercent + percent, doughnutCount);
        const largeArcFlag = percent > 0.5 ? 1 : 0; // if the slice is more than 50%, take the large arc (the long way around)
        const pathData = [
          `M 0 0`,
          `L ${startX ? startX.toFixed(0) : 0} ${startY ? startY.toFixed(0) : 0}`, // Move
          `A 100 100 0 ${largeArcFlag} 1 ${endX ? endX.toFixed(0) : 0} ${endY ? endY.toFixed(0) : 0}`, // Arc
          `L 0 0`, // Line
        ].join(' ');

        paths += `<path d="${pathData}" style="${td.getAttribute('style')} --path-index: ${subindex};${hide}"></path>`;
        tooltips += `<span class="h5 mb-0" part="popover">${ucfirst(unsnake(td.getAttribute('data-label'))).trim()}<br/>${td.hasAttribute('data-second') ? `${td.getAttribute('data-second-label')}: ${td.getAttribute('data-second')}<br/>` : ''}${td.querySelector('[part="popover"]')?.innerHTML}</span>`;

        // each slice starts where the last slice ended, so keep a cumulative percent
        if (display != 'none') cumulativePercent += percent;
      }
    });

    returnString += `<div class="doughnut">
  <svg viewBox="-105 -105 210 210" preserveAspectRatio="none" style="--row-index: ${index + 1};">${paths}</svg>
  <div class="doughnut__title" data-numeric="${rowTotal}"><span class="h5 mb-0">${title}</span></div>
  <div class="tooltips">${tooltips}</div>
</div>`;
  });

  doughnutWrapper.innerHTML = returnString;
};

// #endregion

export default setupChart;
