import { ucfirst, unsnake, numberOfDays } from './helpers'

// #region Functions that setup and trigger other functions 
export const setupChart = (chartElement:any,chartOuter:any,tableElement:any,chartKey:any,chartGuidelines:any,chartYaxis:any) => {


  let {xaxis,slope,type} = getChartData(chartElement,chartOuter);

  setCellData(chartElement,chartOuter,tableElement);

  createChartKey(chartElement,chartOuter,tableElement,chartKey);
  createChartGuidelines(chartElement,chartOuter,chartGuidelines);
  createChartYaxis(chartElement,chartOuter,chartYaxis);

  const availableTypes = chartElement.hasAttribute('data-types') ? chartElement.getAttribute('data-types').split(',') : [type];

  if(availableTypes.includes('line')){
    createLines(chartElement,chartOuter);
  }


  if(xaxis){
    createXaxis(chartElement,chartOuter,xaxis);
  }

  if(chartElement.hasAttribute('data-slope')) // Need to check attribute is there not its value
    createSlope(chartElement,chartOuter);


  if(chartElement.classList.contains('chart--show-totals'))
    createKeyTotals(chartElement,chartOuter);



  if(availableTypes.includes('bar') || availableTypes.includes('dumbbell') || availableTypes.includes('responsive'))
    setLongestLabel(chartElement,chartOuter);

  return true;
};
// #endregion

// #region GET functions
export const getChartData = function(chartElement:any,chartOuter:any){


  let table = chartOuter.querySelector('.chart__wrapper table');

  let min:any = chartElement.hasAttribute('data-min') ? chartElement.getAttribute('data-min') : 0;
  let max:any = chartElement.hasAttribute('data-max') ? chartElement.getAttribute('data-max') : getLargestValue(table);
  let type:string = chartElement.hasAttribute('data-type') ? chartElement.getAttribute('data-type') : 'column';
  let yaxis:any = chartElement.hasAttribute('data-yaxis') ? chartElement.getAttribute('data-yaxis').split(',') : [];
  let targets:any = chartElement.hasAttribute('data-targets') ? JSON.parse(chartElement.getAttribute('data-targets')) : null;
  let events:any = chartElement.hasAttribute('data-events') ? JSON.parse(chartElement.getAttribute('data-events')) : null;
  let xaxis:any = chartElement.hasAttribute('data-xaxis') ? chartElement.getAttribute('data-xaxis').split(',') : null;
  let increment = chartElement.hasAttribute('data-increment') ? chartElement.getAttribute('data-increment'): null;
  
  let start:any = chartElement.hasAttribute('data-start') ? chartElement.getAttribute('data-start') : 0;
  let end:any = chartElement.hasAttribute('data-end') ? chartElement.getAttribute('data-end') : getLargestValue(table); // TODO - get largest value from the data-xaxis


  let slope:any = chartElement.hasAttribute('data-slope') ? chartElement.getAttribute('data-slope') : null;
  let yInt:any = chartElement.hasAttribute('data-yint') ? chartElement.getAttribute('data-yint') : null;

  return {min,max,type,yaxis,targets,events,xaxis,increment,start,end,slope,yInt};
}

function getLargestValue(table:any){

  let values = Array.from(table.querySelectorAll('tbody td:not(:first-child)')).map((element: any) => {

    let currentValue:string|number = String(element.textContent);
    currentValue = currentValue.replace('£','');
    currentValue = currentValue.replace('%','');
    currentValue = currentValue.replace(',','');
    currentValue = Number.parseFloat(currentValue);

    return currentValue;
  })

  let largetValue:number = Math.max(...values);

  // TO DO round to the nearest 10, 100, 1000 and so on
  return Math.ceil(largetValue);
}

const getValues = function(chartElement:any,value:number,min:any,max:any,start?:number){

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
export const setCellData = function(chartElement:any,chartOuter:any,table:any){
  
  let {min, max} = getChartData(chartElement,chartOuter);

  let chartType = chartElement.getAttribute('data-type');
  let increment = chartElement.getAttribute('data-increment');
  let incrementStart = chartElement.getAttribute('data-start');
  let incrementEnd = chartElement.getAttribute('data-end');
  let startDay = min;
  
  // Change how gant charts are configured as this just seems bizarre now
  if(increment == "days"){
    
    max = numberOfDays(min,max);
    min = 0;

    chartElement.querySelector('tbody').setAttribute('style',`--single-day:${((1/max)*100)}%;`);
  }


  Array.from(table.querySelectorAll('tbody tr')).forEach((tr:any, index) => {

    let group = tr.querySelector('td:first-child, th:first-child') ? tr.querySelector('td:first-child, th:first-child').innerHTML : '';
    let coverageStart:number = 100;
    let coverageEnd:number = 0;
    let cumulativeComparison:number = 0;
    // For waffle charts
    let previousAfter:number = 0;
    let rowPosition:number = 0;
    let totalPercent:number = 0;

    // Set the data numeric value if not set
    Array.from(tr.querySelectorAll('td:not([data-numeric]):not(:first-child)')).forEach((td:any) => {

      let value = parseFloat(td.textContent.replace('£','').replace('%','').replace(',',''));
      let start = 0;
      if(increment == "days"){
        let dates = td.textContent.split(' - ');
        if(dates[1]){

          value = numberOfDays(dates[0],dates[1]);
          start = numberOfDays(startDay,dates[0]) - 1;
        }
      }
    
      td.setAttribute('data-numeric',value);
      td.setAttribute('data-start',start);
    });

    // Set the data label value if not set
    Array.from(tr.querySelectorAll('td:not([data-label])')).forEach((td:any, index) => {

      td.setAttribute('data-label',table.querySelectorAll('thead th')[index].textContent);
    });

    if(tr.querySelector('[data-label="Total"]')){
      tr.setAttribute('data-total',tr.querySelector('[data-label="Total"][data-numeric]').getAttribute('data-numeric'));
    }

    if(tr.querySelector('[data-label="Min"]')){
      tr.setAttribute('data-min',tr.querySelector('[data-label="Min"][data-numeric]').getAttribute('data-numeric'));
    }
    if(tr.querySelector('[data-label="Max"]')){
      tr.setAttribute('data-max',tr.querySelector('[data-label="Max"][data-numeric]').getAttribute('data-numeric'));
    }

    if((chartType == "proportional" || chartType == "waffle") && !tr.hasAttribute('data-total')){

      let total = 0;

      Array.from(tr.querySelectorAll('td[data-numeric]:not(:first-child)')).forEach((td:any) => {

        let display = getComputedStyle(td).display;
        if(display == 'none')
          return;

        total += Number.parseFloat(td.getAttribute('data-numeric'));
      });

      tr.setAttribute('data-total',total);
    }

    let rowMin = tr.hasAttribute('data-min') ? tr.getAttribute('data-min') : min;
    let rowMax = tr.hasAttribute('data-max') ? tr.getAttribute('data-max') : max;

    // Add a useful index css var for the use of animatons.
    tr.setAttribute('style',`--row-index:${index+1};`);

    if(rowMin < 0){
      let minBottom = Math.abs(((rowMin)/(rowMax - rowMin))*100);
      chartElement.setAttribute('style',`--min-bottom: ${minBottom}%;`);
    }

    // Add css vars to cells
    Array.from(tr.querySelectorAll('td[data-numeric]:not([data-label="Min"]):not([data-label="Max"]):not(:first-child)')).forEach((td:any, tdIndex) => {

      let display = getComputedStyle(td).display;
      if(display == 'none')
        return;
      
      const label = td.getAttribute('data-label');
      const content = td.innerHTML;
      const value = Number.parseFloat(td.getAttribute('data-numeric'));
      const start = Number.parseFloat(td.getAttribute('data-start'));

      if(!td.querySelector('span[data-group]'))
        td.innerHTML = `<span data-group="${group}" data-label="${label}">${content}</span>`;

      if(!td.hasAttribute('style')){
        
        let { percent, bottom, axis } = getValues(chartElement,value,rowMin,rowMax,start);

        td.setAttribute('data-percent',percent)
        td.setAttribute("style",`--bottom:${bottom}%;--percent:${percent}%;--axis:${axis}%;`);

        if(tr.hasAttribute('data-total')){
          let rowTotal = tr.getAttribute('data-total');
          let comparison = ((value - rowMin)/(rowTotal)) * 100;
          cumulativeComparison += comparison;
          td.setAttribute('data-comparison',comparison);
          td.style.setProperty('--cumulative-comparision',`${cumulativeComparison}%`);
          td.style.setProperty('--comparison',`${comparison}%`);
        }

        if(chartElement.classList.contains("chart--value-order")){
          let order:number = (10000 - Math.round(percent * 100));
          td.style.setProperty('--order',`${order}%`);
        }

        if(chartType == "dumbbell"){
          if(percent < coverageStart){
            tr.style.setProperty('--coverage-start',`${percent}%`);
            coverageStart = percent;
          }
          
          if(percent > coverageEnd){
            tr.style.setProperty('--coverage-end',`${percent}%`);
            coverageEnd = percent;
          }
        }

        if(chartType == "waffle") {

          let actualPercent = Math.round(td.getAttribute('data-comparison'));

          // Prevent the chart from spilling out of the top
          totalPercent += actualPercent;
          if(totalPercent > 100)
            actualPercent = actualPercent - (totalPercent - 100);

          let percentMinusAfter = previousAfter != 0 ? actualPercent - (10 - previousAfter) : actualPercent;
          let rowHeight = percentMinusAfter < 10 ? 10 : Math.floor(percentMinusAfter/10)*10;
          let rowWidth = percentMinusAfter < 10 ? percentMinusAfter*10 : 100;
          let maxWidth = actualPercent*10;



          td.style.setProperty('--rowPosition',`${rowPosition}%`);
          td.style.setProperty('--rowHeight',`${rowHeight}%`);
          td.style.setProperty('--rowWidth',`${rowWidth}%`);
          td.style.setProperty('--maxWidth',`${maxWidth}%`);

          // Create the psuedo element variables for the the block that sticks out BELOW the main row
          let beforeWidth = 0;
          if(previousAfter != 0){
            beforeWidth = 100 - (previousAfter*10);

            td.style.setProperty('--beforeWidth',`${beforeWidth}%`);
            td.style.setProperty('--beforeHeight',`${10/rowHeight * 100}%`);
            td.style.setProperty('--beforeLeft',`${previousAfter*10}%`);
          }

          // Create the psuedo element variables for the the block that sticks out ABOVE the main row
          let afterWidth = Math.round(percentMinusAfter - rowHeight)*10;
          let afterHeight = 10/(rowHeight) * 100;

          td.style.setProperty('--afterWidth',`${afterWidth}%`);
          td.style.setProperty('--afterHeight',`${afterHeight}%`);

          // If the row width plus the previous after is under 10 it needs to be added to the new previousAfter variable
          if(previousAfter + beforeWidth/10 + rowWidth/10 < 10 )
            previousAfter += beforeWidth/10 + (rowWidth/10);
          else if (percentMinusAfter < 10)
            previousAfter = percentMinusAfter;
          else 
            previousAfter = afterWidth/10;

          // Add to the row position so that the new row is shoved up if needed
          rowPosition += (rowWidth > 0 ? rowHeight : 0) + (afterWidth > 0 ? 10 : 0);
        }
      }

      // totals
      if(chartElement.classList.contains('chart--show-totals')){

        let chartTotal = chartElement.getAttribute('data-total') ? Number.parseFloat(chartElement.getAttribute('data-total')) : 0;
        let keyTotal = chartElement.querySelector(`.key[data-label="${label}"]`) && chartElement.querySelector(`.key[data-label="${label}"]`).getAttribute('data-total') ? Number.parseFloat(chartElement.querySelector(`.key[data-label="${label}"]`).getAttribute('data-total')) : 0;
        
        if(chartElement.querySelector(`.key[data-label="${label}"]`))
          chartElement.querySelector(`.key[data-label="${label}"]`).setAttribute('data-total',keyTotal+value);

        chartElement.setAttribute('data-total',chartTotal+value);
      }
    });

    // Values for incremental charts i.e. histograms...
    if(increment && incrementStart && incrementEnd){
      let firstCellValue = parseFloat(tr.querySelector('td:first-child').textContent.replace('£','').replace('%','').replace(',',''));
      let position = ((firstCellValue - incrementStart)/(incrementEnd - incrementStart)) * 100;
      tr.setAttribute('style',`--position:${position}%;`);
    }
  });
}

export const setLongestLabel = function(chartElement:any,chartOuter:any){
  let chartWrapper = chartOuter.querySelector('.chart__wrapper');
  let table = chartOuter.querySelector('.chart table');
  // set the longest label attr so that the bar chart knows what margin to set on the left
  let longestLabel = '';
  Array.from(table.querySelectorAll('tbody tr td:first-child')).forEach((td: any) => {
    if(typeof td.textContent != "undefined" && td.textContent.length > longestLabel.length)
      longestLabel = td.textContent;
  });
  chartWrapper.setAttribute('data-longest-label',longestLabel);

  // set the longest data set attr so that the bar chart knows what margin to set on the left
  let longestSet = '';
  Array.from(table.querySelectorAll('thead tr th')).forEach((td: any) => {
    if(td.textContent.length > longestSet.length)
      longestSet = td.textContent;
  });
  chartWrapper.setAttribute('data-set-label',longestSet);
};
// #endregion

// #region CREATE function
export const createChartKey = function(chartElement:any,chartOuter:any,tableElement:any,chartKey:any){


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
  input.setAttribute('checked',`checked`);
  input.setAttribute('type',`checkbox`);

  if(index == 1)
    chartOuter.prepend(input);
  else
    chartOuter.insertBefore(input,previousInput.nextSibling);

  previousInput = input;

  let label = document.createElement('label');
  label.setAttribute('class',`key`);
  label.setAttribute('for',`${chartID}-dataset-${index}`);
  label.setAttribute('data-label',`${text}`);
  label.innerHTML = `${text}`;
  chartKey.append(label);

  return previousInput;
}

export const createChartGuidelines = function(chartElement:any,chartOuter:any,chartGuidelines:any){

  let {min, max, yaxis, increment} = getChartData(chartElement,chartOuter);


  let startDay = min;
  if(increment == "days"){
    
    max = numberOfDays(min,max);
    min = 0;
  }

  if(!chartGuidelines){
    chartGuidelines = document.createElement('div');
    chartGuidelines.setAttribute('class','chart__guidelines');
  }

  chartGuidelines.innerHTML = '';
  for (var i = 0; i < yaxis.length; i++) {

    let value = parseFloat(yaxis[i].replace('£','').replace('%','').replace(',',''));

   
    if(increment == "days"){

      value = numberOfDays(startDay,yaxis[i]) - 1;
    }

    let { axis } = getValues(chartElement,value,min,max);
    chartGuidelines.innerHTML += `<div class="guideline" style="--percent:${axis}%;"><span>${yaxis[i]}</span></div>`;
  }
}

export const createChartYaxis = function(chartElement:any,chartOuter:any,chartYaxis:any){

  let {min, max, yaxis, increment} = getChartData(chartElement,chartOuter);

  let startDay = min;

  if(increment == "days"){

    max = numberOfDays(min,max);
    min = 0;
  }

  if(!chartYaxis){
    chartYaxis = document.createElement('div');
    chartYaxis.setAttribute('class','chart__yaxis');
  }

  chartYaxis.innerHTML = '';
  for (var i = 0; i < yaxis.length; i++) {

    let value = parseFloat(yaxis[i].replace('£','').replace('%',''));

    if(increment == "days"){

        value = numberOfDays(startDay,yaxis[i]);
      
    }

    let { axis } = getValues(chartElement,value,min,max);
    chartYaxis.innerHTML += `<div class="axis__point" style="--percent:${axis}%;"><span>${yaxis[i]}</span></div>`;
  }


}

export const createXaxis = function(chartElement:any,chartOuter:any,xaxis:any){

  const chart = chartOuter.querySelector('.chart');
  let chartXaxis = chartOuter.querySelector('.chart__xaxis');

  let {increment,start,end} = getChartData(chartElement,chartOuter);

  if(!chartXaxis){
    chartXaxis = document.createElement('div');
    chartXaxis.setAttribute('class','chart__xaxis');
  }
  if(increment && start && end){
    chartXaxis.innerHTML = '';
    for (var i = 0; i < xaxis.length; i++) {

      let value = parseFloat(xaxis[i].replace('£','').replace('%',''));
      let position = ((value - start)/(end - start)) * 100;

      chartXaxis.innerHTML += `<div class="axis__point" style="--percent:${position}%;"><span>${xaxis[i]}</span></div>`;
    }
  }
  chart.prepend(chartXaxis);
}


export const createLines = function(chartElement:any,chartOuter:any){
  
  let {min, max} = getChartData(chartElement,chartOuter);
 
  let chartType = chartElement.getAttribute('data-type');
  let returnString = '';
  let chartWrapper = chartOuter.querySelector('.chart__wrapper');
  let linesWrapper = chartOuter.querySelector('.chart__lines');

  let items = Array.from(chartOuter.querySelectorAll('tbody tr'));
  let lines = Array();
  let linesCount = chartOuter.querySelectorAll('thead th:not(:first-child)').length;
  let commands = Array();
  let animatelines = Array();
  let itemCount = items.length <= 1000 ? items.length : 1000;
  let spacer = 200/(itemCount - 1);
  let spacerIndent = 0;

  if(chartType == "combo"){

    spacer = 200/(itemCount);
    spacerIndent = spacer/2;
  }

  // Creates the lines array from the fields array
  for(let i = 0; i < linesCount; i++){

    lines[i] = '';
    animatelines[i] = '';
    commands[i] = 'M';
  }

  // populate the lines array from the items array
  let counter = 0;

  Array.from(chartOuter.querySelectorAll('tbody tr')).forEach((item:any) => {

    const display = getComputedStyle(item).display;

    if(display != "none"){

      Array.from(item.querySelectorAll('td:not(:first-child)')).forEach((cell:any, subindex) => {

        if(!cell.classList.contains('chart__bar')){

          let value = cell.getAttribute('data-numeric');

          let { axis } = getValues(chartElement, value,min,max);

          if(!Number.isNaN(axis)){
            lines[subindex] += `${commands[subindex]} ${(spacerIndent) + (spacer * counter)} ${100-axis} `;
            animatelines[subindex] += `${commands[subindex]} ${spacer * counter} 100 `;
            commands[subindex] = 'L';
          }
          else {
            commands[subindex] = 'M';
          }
        }
      });

      counter++;
    }

  });

  lines.forEach((line, index) => {

    returnString += `
<svg viewBox="0 0 200 100" class="line" preserveAspectRatio="none">
  <path fill="none" d="${line}" style="--path: path('${animatelines[index]}');"></path>
</svg>`
  });

  linesWrapper.innerHTML = returnString;
}

export const createSlope = function(chartElement:any,chartOuter:any){
  let n:number = 0;
  let totalX:number = 0;
  let totalY:number = 0;
  let totalXY:number = 0;
  let totalXsquared:number = 0;

  let {min,max,start,end,slope,yInt} = getChartData(chartElement,chartOuter);

  let chart = chartOuter.querySelector('.chart');
  let slopeWrapper = chartOuter.querySelector('.slope');

  if(!slopeWrapper){

    slopeWrapper = document.createElement("div");
    slopeWrapper.setAttribute('class','slope');
    chart.prepend(slopeWrapper);
  }

  Array.from(chart.querySelectorAll('tbody tr')).forEach((tr:any) => {

    const display = getComputedStyle(tr).display;
    if(display != "none"){

      let x = parseFloat(tr.querySelector('td:first-child').textContent);
      let y = 0;

      Array.from(tr.querySelectorAll('td:not(:first-child)')).forEach((td:any) => {
        y += parseFloat(td.getAttribute('data-numeric'));
      });

      let xy = x * y;
      let xSquared = x * x;

      totalX += x;
      totalY += y;
      totalXY += xy;
      totalXsquared += xSquared;

      n++;
    }
  });


  // Least squares method (https://www.youtube.com/watch?v=P8hT5nDai6A)
  let m = slope ? parseFloat(slope) : ((n * totalXY) - (totalX * totalY)) / ((n * totalXsquared) - (totalX * totalX)); // Slope
  let b = yInt ? parseFloat(yInt) : (totalY - (m * totalX)) / n; // Y intercept

  let firstY = (m * parseFloat(start)) + b;
  let lastY = (m * parseFloat(end)) + b;
  
  let { percent: firstYPercent } = getValues(chartElement,firstY,min,max);
  let { percent: lastYPercent } = getValues(chartElement,lastY,min,max);

  slopeWrapper.innerHTML = `<svg viewBox="0 0 200 100" class="line" preserveAspectRatio="none"><path fill="none" d="M 0 ${100-firstYPercent} L 200 ${100-lastYPercent}" style="--path: path('M 0 100 L 200 100');"></path></svg>`;
}


function createKeyTotals(chartElement:any,chartOuter:any){

  let chartTotal = 0;

  Array.from(chartOuter.querySelectorAll('tbody tr:not([data-total]) td[data-numeric]:not([data-label="Min"]):not([data-label="Max"]):not(:first-child)')).forEach((td:any) => {

    const value = Number.parseFloat(td.getAttribute('data-numeric'));
    chartTotal += value;
  });
  // Get row totals already worked out
  Array.from(chartOuter.querySelectorAll('tbody tr[data-total]')).forEach((tr:any) => {

    const value = Number.parseFloat(tr.getAttribute('data-total'));
    chartTotal += value;
  });

  chartElement.setAttribute('data-total',chartTotal);

  Array.from(chartOuter.querySelectorAll('.chart__key .key[data-label]')).forEach((key:any) => {

    if(key.querySelector('.chart__total'))
      key.querySelector('.chart__total').remove();

    let label = key.getAttribute('data-label');
    let keyTotal:any = 0;

    Array.from(chartOuter.querySelectorAll(`tbody td[data-label="${label}"]`)).forEach((td:any) => {

      const value = Number.parseFloat(td.getAttribute('data-numeric'));
      keyTotal += value;
    });

    let keyPercent = Math.round((keyTotal/chartTotal)*100);

    if(chartElement.hasAttribute('data-currency')){
      
      if (chartElement.getAttribute('data-currency') == "GBP") {
        // @ts-ignore
        keyTotal = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', trailingZeroDisplay: 'stripIfInteger' }).format(keyTotal);
      }
    }
    else if(chartElement.hasAttribute('data-total-format')){
      keyTotal = chartElement.getAttribute('data-total-format').replace('{i}',keyTotal);
    }
    else {
      keyTotal = new Intl.NumberFormat('en-GB').format(keyTotal);
    }

    key.innerHTML += `<span class="chart__total"><span class="chart__total__number"><span class="visually-hidden">Total: </span>${keyTotal}</span><span class="chart__total__percent"><span class="visually-hidden">Total percent: </span>${keyPercent}%</span></span>`;
  });
}

// #endregion


export default setupChart;