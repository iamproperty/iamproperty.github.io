// @ts-nocheck
import {setupChart,setEventObservers,setEventHandlers} from "../../modules/chart.module";

class iamBarChart extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/barcharts.component.css";`;
    
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <slot name="before"></slot>
    <div class="chart__outer">
      <div class="chart__key"></div>
      <div class="chart__wrapper">
        <div class="chart__yaxis"></div>
        <div class="chart">
          <div class="chart__lines"></div>
          <div class="chart__guidelines"></div>
        </div>
      </div>
    </div>
    <slot name="after"></slot>`;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    const chartComponent = this;
    
    const chartID = `chart-${Date.now()+(Math.floor(Math.random() * 100) + 1)}`;
    
    const orginalTable =  this.querySelector('table');
    const clonedTable = orginalTable.cloneNode(true);
    const chart = this.shadowRoot.querySelector('.chart');
    const charOuter = this.shadowRoot.querySelector('.chart__outer');
    

    chart.appendChild(clonedTable);

    
    setupChart(chartComponent,charOuter,clonedTable);
    setEventObservers(chartComponent,charOuter);
    

    /*
    const options = {
      rootMargin: '50px',
      threshold: 0.1
    }

    let callback = (entries:any) => {

      entries.forEach((entry:any) => {
        
        if(entry.intersectionRatio > 0){


          chartOuter.classList.add('animating');
          chartOuter.classList.add('inview');
          intObserver.unobserve(entry.target);

          let rowCount = entry.target.querySelectorAll('tbody tr').length;
          let animationTime = 2000 + (rowCount*100);
          

          setTimeout(function() {
            chartOuter.classList.remove('animating');
          }, animationTime);

        }
      });
    };
  
    const intObserver = new IntersectionObserver(callback, options);
    intObserver.observe(element);

    */
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    

  }
}

export default iamBarChart;