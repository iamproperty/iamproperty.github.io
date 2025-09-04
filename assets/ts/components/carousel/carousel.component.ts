import { generateThumbnailList, generatePipsHTML, carousel } from '../../modules/carousel';
import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-carousel');

class iamCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/carousel.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */ `
      <style>
        ${loadCSS}
        ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
      </style>
      <div class="carousel" part="carousel">
        <div class="carousel__wrapper">
          <div class="carousel__inner">
            <div class="carousel__content" part="content">
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="carousel__btns" part="btns">
          <button class="btn btn-secondary btn-compact fa-plus-large btn-prev" data-go="0" disabled part="prev">
            Prev
          </button>
          <button class="btn btn-secondary btn-compact fa-plus-large btn-next" data-go="2" part="next">Next</button>
        </div>

        <div class="carousel__controls" part="controls"></div>

        <div class="carousel__progress" part="progress">
          <input type="range" min="0" max="100" value="1" step="1" />
        </div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const carouselComponent = this;
    //const carouselElement = this.shadowRoot.querySelector('.carousel');
    //const row = this.shadowRoot.querySelector('.row');

    let thumbnailImages = [];

    const carouselControls = this.shadowRoot.querySelector('.carousel__controls');

    if (carouselComponent.querySelector('[data-thumbnail]')) {
      thumbnailImages = generateThumbnailList(carouselComponent);
      carouselComponent.classList.add('thumbnails');
    }

    // populate the pips
    carouselControls.innerHTML = generatePipsHTML(carouselComponent, thumbnailImages);

    Array.from(
      carouselComponent.querySelectorAll(
        ':scope > div > img:first-child:last-child, :scope > div > picture:first-child:last-child img'
      )
    ).forEach((image) => {
      image.style.inset = '0 0.5rem 0 0.5rem';
      image.style.position = 'absolute';
      image.style.width = 'calc(100% - 1rem)';
      image.style.height = '100%';
      image.style['object-fit'] = 'cover';

      image.closest('div').classList.add('image__wrapper');
    });

    carousel(carouselComponent);

    trackComponent(carouselComponent, 'iam-carousel', [
      'pip-clicked',
      'next-clicked',
      'prev-clicked',
      'slider-changed',
    ]);
  }
}

export default iamCarousel;
