import {
  addClasses,
  setupChart,
  setEventListener,
  setEventObservers
} from '../../modules/chart.module';
import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-doughnutchart');

class iamDoughnutChart extends HTMLElement {

  constructor() {



    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/doughnutchart.component.css";`;

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

  connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const chartComponent = this;
    //const chartID = `chart-${Date.now() + (Math.floor(Math.random() * 100) + 1)}`;
    const orginalTable = this.querySelector('table');
    const clonedTable = orginalTable.cloneNode(true);
    const chart = this.shadowRoot.querySelector('.chart');
    const chartOuter = this.shadowRoot.querySelector('.chart__outer');
    //const barCount = chart.querySelectorAll('td:not(:first-child)').length;

    chart.appendChild(clonedTable);
    addClasses(chartComponent, chartOuter);

    setupChart(chartComponent, chartOuter, clonedTable);
    setEventObservers(chartComponent, chartOuter);
    setEventListener(chartComponent, chartOuter);

    // Set events on the paths
    chart.addEventListener('mousemove', (event: any) => {

      if (event && event.target.closest('.doughnut')) {

        const column = event.target.closest('.doughnut');
        const rect = column.getBoundingClientRect();
  
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        chart.setAttribute('style', `--cursor-x: ${x}px; --cursor-y: ${y}px;`);
      }
    });

    chart?.querySelectorAll('.doughnut').forEach((doughnut) => {
      let count = 1;

      doughnut?.querySelectorAll('path').forEach((path) => {

        const rect = path.getBoundingClientRect();
        const doughnutRect = doughnut.getBoundingClientRect();
        const x = (rect.left - doughnutRect.left) + (rect.width / 2);
        const y = (rect.top - doughnutRect.top) +  (rect.height / 2);

        doughnut.style.setProperty(`--middle-${count}-x`,`${x}px`);
        doughnut.style.setProperty(`--middle-${count}-y`,`${y}px`);
        count++;
      });
    });

    trackComponent(chartComponent, 'iam-doughnutchart', ['view-change']);
  }
}

export default iamDoughnutChart;
