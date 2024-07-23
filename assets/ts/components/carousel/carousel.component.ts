// @ts-nocheck
import carousel from "../../modules/carousel";

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "carousel"
});

class iamCarousel extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/carousel.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="carousel" :id="'carousel'+id">
      <div class="carousel__wrapper">
        <div class="carousel__inner">
          
          <slot></slot>
        </div>
 
        <div class="carousel__controls" part="controls">
          
        </div>

        <button class="btn btn-prev" data-go="0" disabled  part="prev">Prev</button>
        <button class="btn btn-next" data-go="2" part="next">Next</button>

      </div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {
    
    const carouselElement = this.shadowRoot.querySelector('.carousel');
    const row = this.querySelector('.row');
    const thumbnailImages = JSON.parse(this.dataset.thumbnails);

    const carouselControls = this.shadowRoot.querySelector('.carousel__controls');

    let itemCount = this.querySelectorAll(':scope > .row > .col').length

    carouselElement.setAttribute('data-row-class',row.className);

    if(this.classList.contains('hide-btns'))
      carouselElement.classList.add('hide-btns');

    if(this.classList.contains('hide-controls'))
      carouselElement.classList.add('hide-controls');

    if (thumbnailImages?.length) {
      carouselControls.classList.add('thumbnails');
    }

    // populate the pips
    let pips = "";
    for (let i = 1; i <= itemCount; i++) {
      let pipContent = null;
      let pipClass = '';

      if(thumbnailImages.length){
        pipClass = 'has-thumbnail';
        pipContent = `<img src="${thumbnailImages[i - 1].src}" alt="Slide ${i}" height="74"/>`;
      } else {
        pipContent = `Slide ${i}`;
      }

      pips += `<button class="control-${i} ${pipClass}" data-slide="${i}" ${i == 1 ? "aria-current":""}>${pipContent}</button>`;
    }
    carouselControls.innerHTML = pips;

    carousel(carouselElement,row);
  }
}

export default iamCarousel;