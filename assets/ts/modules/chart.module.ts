
// #region Functions that setup and trigger other functions 

export const addClasses = (chartElement:any, chartOuter:any) => {

  // add colour classes
  for (let i = 1; i <= 10; i++) {
    if(chartElement.hasAttribute(`data-colour-${i}`)){

      let colour = chartElement.getAttribute(`data-colour-${i}`);
      chartElement.style.setProperty(`--chart-colour-${i}`, `var(--chart-colour-${colour})`);
      chartElement.style.setProperty(`--chart-colour-${i}-hover`, `var(--chart-colour-${colour}-hover)`);
    }

    Array.from(chartOuter.querySelectorAll(`[data-colour-${i}]`)).forEach((element:HTMLElement) => {
      
      let colour = element.getAttribute(`data-colour-${i}`);
      element.style.setProperty(`--chart-colour-${i}-set`, `var(--chart-colour-${colour})`);
      element.style.setProperty(`--chart-colour-${i}-hover`, `var(--chart-colour-${colour}-hover)`);
    });

  }

  return true;
};


export const setupChart = (chartElement:any,chartOuter:any,tableElement:any) => {

  // #region Reset the chart
  // empty divs to re-populate
  const chartKey = chartOuter.querySelector('.chart__key');
  chartKey.innerHTML = '';
  const chartGuidelines = chartOuter.querySelector('.chart__guidelines');
  chartGuidelines.innerHTML = ``;
  const chartYaxis = chartOuter.querySelector('.chart__yaxis');
  chartYaxis.innerHTML = ``;

  // Remove old input fields
  Array.from(chartOuter.querySelectorAll(':scope > input[type="checkbox"],:scope > input[type="radio"]')).map((element: any) => { element.remove(); })
  // #endregion

  let {xaxis} = getChartData(chartElement);

  setCellData(chartElement,tableElement);

  createChartKey(chartOuter,tableElement,chartKey);
  createChartGuidelines(chartElement,chartGuidelines);
  createChartYaxis(chartElement,chartYaxis);

  if(xaxis){
    createXaxis(chartOuter);
  }

  return true;
};
// #endregion

// #region Event handlers and observers
export const setEventListener = function(chartElement:any, chartOuter:any) {

  let chart = chartOuter.querySelector('.chart');
  chart.addEventListener('mousemove', (event:any) => {
    
    if (event && event.target instanceof HTMLElement && event.target.closest('td:not(:first-child')){

      let column = event.target.closest('td:not(:first-child')

      var rect = column.getBoundingClientRect();
        
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      chart.setAttribute('style', `--cursor-x: ${x}px; --cursor-y: ${y}px;`)
    }
  });

  // Use the part for the chart items to pass through states to the pages CSS
  let labels = chartOuter.querySelectorAll('label');

  Array.from(labels).forEach((label:HTMLElement) => {
          
    if(chartOuter.querySelector(`input#${label.getAttribute('for')}`).checked)
      label.setAttribute('part','key-checked');
    else
      label.setAttribute('part','key-unchecked');
  });

  
  let table = chartElement.querySelector('table');
  let shadowTable = chartOuter.querySelector('table');

  chartOuter.addEventListener('change', function(event:any){

    let eventTarget = event.target;

    const customEvent = new CustomEvent("view-change", {  detail: { 
                                                            'data-dataset': eventTarget.getAttribute('data-dataset'), 
                                                            'label': eventTarget.getAttribute('data-label'),
                                                            'checked': eventTarget.checked
                                                          }
                                                        });

    chartElement.dispatchEvent(customEvent);

    Array.from(labels).forEach((label:HTMLElement) => {
      
      if(chartOuter.querySelector(`input#${label.getAttribute('for')}`)?.checked)
        label.setAttribute('part','key-checked');
      else
        label.setAttribute('part','key-unchecked');
    });

    
    shadowTable.innerHTML = table.innerHTML;
    setCellData(chartElement,shadowTable);

  });
}

export const setEventObservers = function(chartElement:any,chartOuter:any) {

  let table = chartElement.querySelector('table');
  let shadowTable = chartOuter.querySelector('table');

  const attributesUpdated = (mutationList:any, observer:any) => {

    observer.disconnect();
    observer2.disconnect();

    for (const mutation of mutationList) {

      if(mutation.attributeName == 'class' || (mutation.type === 'attributes') || mutation.type === 'attributes') {

        shadowTable.innerHTML = table.innerHTML;
        setupChart(chartElement,chartOuter,shadowTable);
      }
    }

    observer.observe(table, { characterData: true, subtree: true });
    observer2.observe(chartElement, { attributes: true });
  };

  const tableUpdated = (mutationList:any, observer:any) => {

    observer.disconnect();
    observer2.disconnect();

    for (const mutation of mutationList) {

      if(mutation.type == "characterData" || (mutation.type == "childList" && mutation.addedNodes.length)){

        shadowTable.innerHTML = table.innerHTML;
        setupChart(chartElement,chartOuter,shadowTable);
      }
    }

    observer.observe(table, { characterData: true, subtree: true });
    observer2.observe(chartElement, { attributes: true });
  };


  let observer = new MutationObserver(tableUpdated);
  let observer2 = new MutationObserver(attributesUpdated);

  observer.observe(table, { characterData: true, subtree: true });
  observer2.observe(chartElement, { attributes: true });

  return true;
};
// #endregion

// #region GET functions
export const getChartData = function(chartElement:any){


  let table = chartElement.shadowRoot.querySelector('.chart__wrapper table');

  let min:any = chartElement.hasAttribute('data-min') ? chartElement.getAttribute('data-min') : 0;
  let max:any = chartElement.hasAttribute('data-max') ? chartElement.getAttribute('data-max') : getLargestValue(chartElement,table);
  //let type:string = chartElement.hasAttribute('data-type') ? chartElement.getAttribute('data-type') : 'column';
  let yaxis:any = chartElement.hasAttribute('data-yaxis') ? chartElement.getAttribute('data-yaxis').split(',') : [];
  let guidelines:any = chartElement.hasAttribute('data-guidelines') ? chartElement.getAttribute('data-guidelines').split(',') : [];
  //let targets:any = chartElement.hasAttribute('data-targets') ? JSON.parse(chartElement.getAttribute('data-targets')) : null;
  //let events:any = chartElement.hasAttribute('data-events') ? JSON.parse(chartElement.getAttribute('data-events')) : null;
  let xaxis:any = chartElement.hasAttribute('data-xaxis') ? chartElement.getAttribute('data-xaxis').split(',') : null;
  //let increment = chartElement.hasAttribute('data-increment') ? chartElement.getAttribute('data-increment'): null;
  
  //let start:any = chartElement.hasAttribute('data-start') ? chartElement.getAttribute('data-start') : 0;
  //let end:any = chartElement.hasAttribute('data-end') ? chartElement.getAttribute('data-end') : getLargestValue(chartElement,table); // TODO - get largest value from the data-xaxis


  //let slope:any = chartElement.hasAttribute('data-slope') ? chartElement.getAttribute('data-slope') : null;
  //let yInt:any = chartElement.hasAttribute('data-yint') ? chartElement.getAttribute('data-yint') : null;

  return {min,max,yaxis,xaxis,guidelines};
}

function getLargestValue(chartElement:any,table:any){

  const selector = chartElement.classList.contains('chart--stacked') ? 'tbody tr' : 'tbody td:not(:first-child)';

  let values = Array.from(table.querySelectorAll(selector)).map((element: any) => {

    let currentValue = element.getAttribute('data-numeric');

    return currentValue;
  });

  let largestValue:number = Math.max(...values);

  // TO DO round to the nearest 10, 100, 1000 and so on
  return Math.ceil(largestValue);
}

const getValues = function(value:number,min:any,max:any,start?:number){

  let cleanValue:string|number = String(value);
  cleanValue = cleanValue.replace('£','');
  cleanValue = cleanValue.replace('%','');
  cleanValue = cleanValue.replace(',','');
  cleanValue = Number.parseFloat(cleanValue);

  let percent = ((cleanValue - min)/(max - min)) * 100;
  let axis = percent;
  let bottom = 0;

  if (start && start != 0){
    bottom = ((start - min)/(max - min)) * 100;
  }

  // If the value is negative the position below the 0 line
  if(min < 0){
    bottom = Math.abs(((min)/(max - min))*100);

    if(cleanValue < 0){
      percent = bottom - percent;
      bottom = bottom - percent;
      axis = bottom;
    }
    else {
      percent = percent - bottom;
      axis = percent + bottom;
    }
  }

  return { percent, axis, bottom};
}

// #endregion

// #region SET functions - set data attributes and classes
export const setCellData = function(chartElement:any,table:any){
  
  Array.from(table.querySelectorAll('tbody tr')).forEach((tr:any) => {

    let rowValue = 0;
    // Set the data numeric value if not set
    Array.from(tr.querySelectorAll('td:not(:first-child)')).forEach((td:any) => {

      let value = parseFloat(td.textContent.replace('£','').replace('%','').replace(',',''));
    
      td.setAttribute('data-numeric',value);
      td.setAttribute('data-value',td.textContent);

      let display = getComputedStyle(td).display;

      if(display != 'none')
        rowValue += value;
    });

    tr.setAttribute('data-numeric',rowValue);
  });

  let {min, max} = getChartData(chartElement);
  
  Array.from(table.querySelectorAll('tbody tr')).forEach((tr:any, index) => {

    let group = tr.querySelector('td:first-child, th:first-child') ? tr.querySelector('td:first-child, th:first-child').textContent : '';

    tr.setAttribute('part','group');

    
    let percent = ((tr.getAttribute('data-numeric') - min)/(max - min)) * 100;

    tr.style.setProperty('--percent',`${percent}%`)

    // Set the data label value if not set
    Array.from(tr.querySelectorAll('td:not([data-label])')).forEach((td:any, index) => {

      if(index == 0)
        td.setAttribute('part', 'xaxis-label'); // PART
      else
        td.setAttribute('part', 'value');

      if(tr.querySelectorAll('td').length > 2)
        td.setAttribute('data-label',table.querySelectorAll('thead th')[index].textContent);
    });


    let rowMin = tr.hasAttribute('data-min') ? tr.getAttribute('data-min') : min;
    let rowMax = tr.hasAttribute('data-max') ? tr.getAttribute('data-max') : max;

    if(rowMin < 0){
      let minBottom = Math.abs(((rowMin)/(rowMax - rowMin))*100);
      chartElement.setAttribute('style',`--min-bottom: ${minBottom}%;`);
    }

    // Add a useful index css var for the use of animatons.
    tr.style.setProperty('--row-index', index+1);


    // Add css vars to cells
    Array.from(tr.querySelectorAll('td[data-numeric]:not([data-label="Min"]):not([data-label="Max"]):not(:first-child)')).forEach((td:any) => {

      let display = getComputedStyle(td).display;
      if(display == 'none')
        return;
      
      const content = td.innerHTML;
      const value = Number.parseFloat(td.getAttribute('data-numeric'));
      const start = Number.parseFloat(td.getAttribute('data-start'));

      if(!td.querySelector('span[data-group]'))
        td.innerHTML = `<span data-group="${group}" ${td.hasAttribute('data-label') ? `data-label="${td.getAttribute('data-label')}"`: ''} part="popover">${content}</span>`;

      if(!td.hasAttribute('style')){
        
        let { percent, bottom, axis } = getValues(value,rowMin,rowMax,start);

        td.setAttribute('data-percent',percent)
        td.setAttribute("style",`--bottom:${bottom}%;--percent:${percent}%;--axis:${axis}%;`);
      }
    });
  });
}

export const setLongestLabel = function(chartOuter:any){

  let chartWrapper = chartOuter.querySelector('.chart__wrapper');
  let chartSpacer = chartOuter.querySelector('.chart__spacer span');
  let table = chartOuter.querySelector('.chart table');
  // set the longest label attr so that the bar chart knows what margin to set on the left
  let longestLabel = '';
  Array.from(table.querySelectorAll('tbody tr td:first-child')).forEach((td: any) => {
    if(typeof td.textContent != "undefined" && td.textContent.length > longestLabel.length){

      longestLabel = td.textContent;
    }
  });
  chartWrapper.setAttribute('data-longest-label',longestLabel);
  chartSpacer.innerHTML = longestLabel;
};

export const setLongestValue = function(chartOuter:any){

  let chartWrapper = chartOuter.querySelector('.chart__wrapper');
  let table = chartOuter.querySelector('.chart table');

  let longestValue = '';
  Array.from(table.querySelectorAll('tbody tr td:not(:first-child) span')).forEach((td: any) => {
    if(typeof td.textContent != "undefined" && td.textContent.length > longestValue.length)
      longestValue = td.textContent;
  });
  chartWrapper.setAttribute('data-longest-value',longestValue);
};
// #endregion

// #region CREATE function

export const createChartKey = function(chartOuter:any,tableElement:any,chartKey:any){

  const chartID = `chart-${Date.now()+(Math.floor(Math.random() * 100) + 1)}`;
  //const chartOuter = chartElement.querySelector('.chart__outer');

  let previousInput:any;


  let headings = Array.from(tableElement.querySelectorAll('thead th'));

  headings.forEach((arrayElement:any , index) => {

    if(index != 0){

      previousInput = createChartKeyItem(chartID,index,arrayElement.textContent,chartKey,chartOuter,previousInput);
    }

    if(index == 50){
      headings.length = index + 1;
    }

  });

  return true;
}

function createChartKeyItem(chartID:string,index:number,text:Array<string>,chartKey:any,chartOuter:any,previousInput:any){
  let input = document.createElement('input');
  input.setAttribute('name',`${chartID}-dataset-${index}`);
  input.setAttribute('id',`${chartID}-dataset-${index}`);
  input.setAttribute('data-dataset',`${index}`);
  input.setAttribute('data-label',`${text}`);
  input.checked = true;
  input.setAttribute('type',`checkbox`);
  

  if(index == 1)
    chartOuter.prepend(input);
  else
    chartOuter.insertBefore(input,previousInput.nextSibling);

  previousInput = input;

  let label = document.createElement('label');
  label.setAttribute('class',`key btn btn-action`);
  label.setAttribute('for',`${chartID}-dataset-${index}`);
  label.setAttribute('data-label',`${text}`);
  label.setAttribute('part',`key`);
  label.innerHTML = `${text}`;
  chartKey.append(label);

  return previousInput;
}

export const createChartGuidelines = function(chartElement:any,chartGuidelines:any){

  let {min, max, yaxis, guidelines} = getChartData(chartElement);

  if(!guidelines.length)
    guidelines = yaxis;

  chartGuidelines.innerHTML = '';
  for (var i = 0; i < guidelines.length; i++) {

    let value = parseFloat(guidelines[i].replace('£','').replace('%','').replace(',',''));



    let { axis } = getValues(value,min,max);
    chartGuidelines.innerHTML += `<div class="guideline" style="--percent:${axis}%;">${yaxis.indexOf(guidelines[i]) != -1 ? `<span>${guidelines[i]}</span>` : ''}</div>`;
  }
}

export const createChartYaxis = function(chartElement:any,chartYaxis:any){

  let {min, max, yaxis} = getChartData(chartElement);

  chartYaxis.innerHTML = '';
  for (var i = 0; i < yaxis.length; i++) {

    let value = parseFloat(yaxis[i].replace('£','').replace('%',''));

    let { axis } = getValues(value,min,max);
    chartYaxis.innerHTML += `<div class="axis__point" style="--percent:${axis}%;"><span>${yaxis[i]}</span></div>`;
  }
}

export const createXaxis = function(chartOuter:any){

  const chart = chartOuter.querySelector('.chart');
  let chartXaxis = chartOuter.querySelector('.chart__xaxis');

  if(!chartXaxis){
    chartXaxis = document.createElement('div');
    chartXaxis.setAttribute('class','chart__xaxis');
  }

  chart.prepend(chartXaxis);
}

export const createTooltips = function(chartOuter:any) {

  const titles = chartOuter.querySelectorAll('thead th[title], tbody th[title]:first-child, tbody td[title]:first-child');

  Array.from(titles).forEach((title:HTMLElement) => {
          
    let tooltipId = `tooltip-${Date.now()}-${Math.floor(Math.random() * 100)}`;

    title.innerHTML = `<button class="tooltip" popovertarget="${tooltipId}" part="tooltip" style="anchor-name: --${tooltipId};">${title.textContent}</button><span id="${tooltipId}" style="position-anchor: --${tooltipId};" popover part="tooltip__content" class="tooltip__content">${title.getAttribute('title')}</span>`;

    //title.removeAttribute('title'); // TODO add a supports query for anchor positioning
  });


}
// #endregion

export default setupChart;