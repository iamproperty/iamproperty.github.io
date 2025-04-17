import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-epc-chart');

class iamEpcChart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/epc-chart.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    
    </style>
      <h2>EPC Chart Component</h2>
      <div class="inner-div"></div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}


  //   <div class="carousel" part="carousel">
  //   <div class="carousel__wrapper">
  //     <div class="carousel__inner">
  //       <div class="carousel__content" part="content">
  //         <slot></slot>
  //       </div>
  //     </div>

  //   </div>
  //     <div class="carousel__btns" part="btns">
  //       <button class="btn btn-secondary btn-compact fa-plus-large btn-prev" data-go="0" disabled  part="prev">Prev</button>
  //       <button class="btn btn-secondary btn-compact fa-plus-large btn-next" data-go="2" part="next">Next</button>
  //     </div>

  //     <div class="carousel__controls" part="controls">

  //     </div>

  //     <div class="carousel__progress" part="progress">
  //       <input type="range" min="0" max="100" value="1" step="1">
  //     </div>

  // </div>

  connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const epcChartComponent = this;

    epcChartComponent.querySelector('.inner-div').innerHTML = `
      <p>Connected callback code here</p>
    `

    //const carouselElement = this.shadowRoot.querySelector('.carousel');
    //const row = this.shadowRoot.querySelector('.row');

    // let thumbnailImages = [];

    // const carouselControls = this.shadowRoot.querySelector('.carousel__controls');

    // if (epcChartComponent.querySelector('[data-thumbnail]')) {
    //   thumbnailImages = generateThumbnailList(epcChartComponent);
    //   epcChartComponent.classList.add('thumbnails');
    // }

    // populate the pips
    // carouselControls.innerHTML = generatePipsHTML(epcChartComponent, thumbnailImages);

    // Array.from(epcChartComponent.querySelectorAll(
    //     ':scope > div > img:first-child:last-child, :scope > div > picture:first-child:last-child img'
    //   )
    // ).forEach((image) => {
    //   image.style.inset = '0 0.5rem 0 0.5rem';
    //   image.style.position = 'absolute';
    //   image.style.width = 'calc(100% - 1rem)';
    //   image.style.height = '100%';
    //   image.style['object-fit'] = 'cover';

    //   image.closest('div').classList.add('image__wrapper');
    // });

    // carousel(epcChartComponent);

    // trackComponent(epcChartComponent, 'iam-carousel', [
    //   'pip-clicked',
    //   'next-clicked',
    //   'prev-clicked',
    //   'slider-changed',
    // ]);
  }
}

export default iamEpcChart;
