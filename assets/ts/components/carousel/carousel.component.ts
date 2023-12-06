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
        <!--
        <div class="carousel__controls">
          
        </div>
        <button class="btn btn-prev" data-go="0" disabled>Prev</button>
        <button class="btn btn-next" data-go="2">Next</button>
        -->
      </div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {
    
    const carouselElement = this.shadowRoot.querySelector('.carousel');
    carousel(carouselElement);
    
  }
}

export default iamCarousel;