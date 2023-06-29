// @ts-nocheck
import setupChart from "../../modules/chart";

class iamChart extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/charts.css";`;
    const chartID = `chart-${Date.now()+(Math.floor(Math.random() * 100) + 1)}`;
    const chartType = this.hasAttribute('data-type') ? this.getAttribute('data-type') : 'column';
    const availableTypes = this.hasAttribute('data-types') ? this.getAttribute('data-types').split(',') : [];

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="chart__outer">
      <div class="chart__key"></div>
      ${!this.hasAttribute('data-types') && this.hasAttribute('data-type') ? `<input type="radio" name="chart-type" value="${this.getAttribute('data-type')}" checked="">` : ''}
      ${this.hasAttribute('data-types') ? `
        ${availableTypes.map((type) => `<input type="radio" name="chart-type" value="${type}" id="${chartID}-${type}" ${chartType == type ? 'checked=""' : '' }>`).join('')}
        <div class="chart__options">
          <span>Chart Type</span>
          ${availableTypes.map((type) => `<label for="${chartID}-${type}">${type}</label>` ).join('')}
        </div>` : ''
      }
      <div class="chart__wrapper">
        <div class="chart__yaxis"></div>
        <div class="chart">
        <div class="chart__lines"></div>
        <div class="chart__guidelines"></div>
        </div>
      </div>
    </div>`;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    const orginalTable =  this.querySelector('table');
    const newTable = orginalTable.cloneNode(true);
    const chart = this.shadowRoot.querySelector('.chart');
    const chartKey = this.shadowRoot.querySelector('.chart__key');
    const chartOuter = this.shadowRoot.querySelector('.chart__outer');
    const chartGuidelines = this.shadowRoot.querySelector('.chart__guidelines');
    const chartYaxis = this.shadowRoot.querySelector('.chart__yaxis');

    chart.appendChild(newTable);

    setupChart(this,chartOuter,newTable,chartKey,chartGuidelines,chartYaxis);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    

  }
}

export default iamChart;