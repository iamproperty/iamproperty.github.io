// @ts-nocheck
import {addClasses,setupChart,setEventListener,setEventObservers,setLongestLabel,setLongestValue,createTooltips} from "../../modules/chart.module";
import {trackComponent, trackComponentRegistered} from "../_global";

trackComponentRegistered("iam-barchart");

class iamBarChart extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/barchart.component.css";`;
    
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>
    <div class="chart__outer" part="outer">
      <div class="chart__key" part="chart-key"></div>
      <div class="chart__wrapper" part="wrapper">
        <div class="chart__yaxis" part="yaxis"></div>
        <div class="chart" part="chart">
          <div class="chart__guidelines" part="guidelines"></div>
        </div>
      </div>
      <div class="chart__spacer"><span part="spacer"></span</div>
    </div>`;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    const chartComponent = this;
    const chartID = `chart-${Date.now()+(Math.floor(Math.random() * 100) + 1)}`;
    const orginalTable =  this.querySelector('table');
    const clonedTable = orginalTable.cloneNode(true);
    const chart = this.shadowRoot.querySelector('.chart');
    const chartOuter = this.shadowRoot.querySelector('.chart__outer');
    const barCount = chart.querySelectorAll('td:not(:first-child)').length;

    chart.appendChild(clonedTable);
    addClasses(chartComponent, chartOuter);

    if(barCount <= 10){

      chartComponent.classList.add('chart--fit-content');
    }

    if(barCount <= 5){

      chartComponent.classList.add('chart--no-scale');
    }

    setupChart(chartComponent,chartOuter,clonedTable);
    setEventObservers(chartComponent,chartOuter);
    setEventListener(chartComponent,chartOuter);
    setLongestLabel(chartOuter);
    setLongestValue(chartOuter);
    createTooltips(chartOuter);

    trackComponent(chartComponent,"iam-barchart",['view-change']);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    

  }
}

export default iamBarChart;