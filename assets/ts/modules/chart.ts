// @ts-nocheck
import { ucfirst, unsnake } from './helpers'

function chart(chartElement,min,max,type) {

  let chartKey = chartElement.querySelector('.chart__key');
  let chartYaxis = chartElement.querySelector('.chart__yaxis');
  let chartGuidelines = chartElement.querySelector('.chart__guidelines');

  // Chart key
  if(chartKey && chartKey.childElementCount == 0){
    createChartKey(chartElement);
  }

  // Y Axis and Guidelines
  if(chartYaxis && chartYaxis.childElementCount == 0){
    createChartYaxis(chartElement);
  }
  if(chartGuidelines && chartGuidelines.childElementCount == 0){
    createChartGuidelines(chartElement);
  }

  // Create lines for line graph
  if(type == "line")
    createLines(chartElement,min,max);

  // Create pies
  if(type == "pie")
    createPies(chartElement);

  // Add css vars to cells
  Array.from(chartElement.querySelectorAll('tbody tr')).forEach((tr, index) => {

    let group = tr.querySelector('td:first-child, th:first-child') ? tr.querySelector('td:first-child, th:first-child').innerHTML : '';

    Array.from(tr.querySelectorAll('td[data-numeric]:not([data-numeric="0"]):not(:first-child)')).forEach((td, index) => {

      const value = Number.parseFloat(td.getAttribute('data-numeric'));
      let percent = ((value - min)/(max)) * 100;
      const content = td.innerHTML;
      const label = td.getAttribute('data-label');
      let bottom = 0;

      // If the value is negative the position below the 0 line
      if(min < 0){
        bottom = Math.abs((min)/(max)*100);
        if(value < 0){
          bottom = bottom - percent;
        }
      }
      td.setAttribute("style",`--bottom:${bottom}%;--percent:${percent}%;`);


      td.innerHTML = `<span data-group="${group}" data-label="${label}">${content}</span>`;
    });
  });
}

export const createChartKey = function(chartElement){

  let chartKey = chartElement.querySelector('.chart__key');

  Array.from(chartElement.querySelectorAll('thead th')).forEach((arrayElement, index) => {

    chartKey.innerHTML += `<div class="key">${arrayElement.innerText}</div>`;
  });
}

export const createChartGuidelines = function(chartElement){

  let chartGuidelines = chartElement.querySelector('.chart__guidelines');
  const max = chartElement.getAttribute('data-max');
  const min = chartElement.getAttribute('data-min');

  chartGuidelines.innerHTML += `<div style="--value: 0;--percent:0%;" class="axis__point"><span>0</span></div>`;
  chartGuidelines.innerHTML += `<div style="--value: ${max};--percent:100%;" class="axis__point"><span>${max}</span></div>`;
}

export const createChartYaxis = function(chartElement){

  let chartYaxis = chartElement.querySelector('.chart__yaxis');
  const max = chartElement.getAttribute('data-max');
  const min = chartElement.getAttribute('data-min');

  chartYaxis.innerHTML += `<div style="--value: 0;--percent:0%;" class="axis__point"><span>0</span></div>`;
  chartYaxis.innerHTML += `<div style="--value: ${max};--percent:100%;" class="axis__point"><span>${max}</span></div>`;
}

function getCoordinatesForPercent(percent) {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x*100, y*100];
}

export const createPies = function(chartElement){

  let returnString = '';
  let pieWrapper = chartElement.querySelector('.pies');

  Array.from(chartElement.querySelectorAll('tbody tr')).forEach((item, index) => {

    let paths = '';
    let tooltips = '';

    let cumulativePercent = 0;

    let total = 0;

    let titleKey = item.querySelectorAll('td')[0]
    let title = titleKey.innerHTML;

    Array.from(item.querySelectorAll('td')).forEach((cell, subindex) => {

      if(subindex != 0){

        let value = cell.getAttribute('data-numeric');

        value = value.replace('£','');
        value = value.replace('%','');
        value = Number.parseInt(value);

        total += value;
      }
    });

    Array.from(item.querySelectorAll('td')).forEach((cell, subindex) => {

      if(subindex != 0){

        let value = cell.getAttribute('data-numeric');

        value = value.replace('£','');
        value = value.replace('%','');
        value = Number.parseInt(value);

        let percent = value/total;

        //lines[subindex-1] += `${command} ${spacer * index} ${100-percent} `;
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

          // each slice starts where the last slice ended, so keep a cumulative percent
          cumulativePercent += percent;

          const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

          // if the slice is more than 50%, take the large arc (the long way around)
          const largeArcFlag = percent > .5 ? 1 : 0;

          // create an array and join it just for code readability
          const pathData = [
            `M ${startX} ${startY}`, // Move
            `A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
            `L 0 0`, // Line
          ].join(' ');

        paths += `<path d="${pathData}"></path>`;
        tooltips += `<foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)"><div><span class="h5 mb-0"><span class="total d-block">${ucfirst(unsnake(title))}</span> ${ucfirst(unsnake(cell.getAttribute('data-label')))}<br/> ${cell.innerHTML}</span></div></foreignObject>`;
      }
    });

    returnString += `<div class="pie"><svg viewBox="-105 -105 210 210" style="transform: rotate(-90deg)" preserveAspectRatio="none">${paths}<foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)"><div><span class="h5 mb-0">${title}</span></div></foreignObject>${tooltips}</svg></div>`
  });

  pieWrapper.innerHTML = returnString;
}

export const createLines = function(chartElement,min,max){

  let returnString = '';
  let linesWrapper = chartElement.querySelector('.lines');

  let items = Array.from(chartElement.querySelectorAll('tbody tr'));

  let lines = Array();
  let spacer = 200/(items.length - 1);

  // Creates the lines array from the fields array
  Array.from(chartElement.querySelectorAll('thead th')).forEach((field, index) => {

    if(index != 0){

      lines[index-1] = '';
    }
  });

  // populate the lines array from the items array
  Array.from(chartElement.querySelectorAll('tbody tr')).forEach((item, index) => {

    Array.from(item.querySelectorAll('td')).forEach((cell, subindex) => {

      if(subindex != 0){

        let value = cell.getAttribute('data-numeric');

        value = value.replace('£','');
        value = value.replace('%','');
        value = Number.parseFloat(value) - min;

        const percent = (value/max) * 100;

        let command = index == 0 ? 'M' : 'L';

        lines[subindex-1] += `${command} ${spacer * index} ${100-percent} `;
      }
    });
  });

  lines.forEach((line, index) => {

    returnString += `
<svg viewBox="0 0 200 100" class="line" preserveAspectRatio="none">
  <path fill="none" d="${line}"></path>
</svg>`
  });

  linesWrapper.innerHTML = returnString;
}

export default chart
