import { generateThumbnailList, generatePipsHTML, carousel, updateCarousel } from '../../modules/carousel';
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
      <div class="carousel-wrapper">
        <div class="carousel" part="carousel">
          <slot></slot>
        </div>
        <div id="carousel__progress" class="carousel__progress">
          <input type="range" min="0" max="100" value="0" step="1" />
        </div>
        <div id="carousel__progress-sm" class="carousel__progress">
          <input type="range" min="0" max="100" value="0" step="1" />
        </div>
        <div id="carousel__progress-md" class="carousel__progress">
          <input type="range" min="0" max="100" value="0" step="1" />
        </div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }


  progressPercent = (value, total):string => {

    return ((value) / (total)) * 100 + '%'
  }

  connectedCallback(): void {
    
    const carouselElement = this.shadowRoot?.querySelector('.carousel');
    const carouselProgress = this.shadowRoot.querySelector('#carousel__progress [type="range"]');
    const carouselProgressSM = this.shadowRoot.querySelector('#carousel__progress-sm [type="range"]');
    const carouselProgressMD = this.shadowRoot.querySelector('#carousel__progress-md [type="range"]');
    const itemCount = this.querySelectorAll(':scope > *').length;
    
    const progressPercent = this.progressPercent;

    let stepperInterval,
      stepperEvent = 'mouseup',
      stepperStart = 'mousedown';

    if ('ontouchstart' in document.documentElement) {
      stepperEvent = 'touchend';
      stepperStart = 'touchstart';
    }

    carouselElement?.innerHTML = this.innerHTML;
    carouselElement?.setAttribute('data-smcols',this.getAttribute('data-smcols'));
    carouselElement?.setAttribute('data-mdcols',this.getAttribute('data-mdcols'));
    
    carouselProgress.setAttribute('max', itemCount);
    carouselProgress.style.setProperty('--percent', progressPercent(carouselProgress.value, itemCount));
    
    carouselProgress.addEventListener(stepperStart, () => {
      clearInterval(stepperInterval);
      stepperInterval = setInterval(function () {
          
        carouselProgress.style.setProperty('--percent', progressPercent(carouselProgress.value, itemCount));
      }, 10);
    });

    carouselProgress.addEventListener(stepperEvent, function () {
      clearInterval(stepperInterval);
    });

    carouselProgress.addEventListener('change', () => {

      clearInterval(stepperInterval);
      carouselProgress.style.setProperty('--percent', progressPercent(carouselProgress.value, itemCount));
      const scrollTo = Math.floor((carouselElement.scrollWidth / itemCount) * (carouselProgress.value-1));

      carouselElement.scrollTo({
        top: 0,
        left: scrollTo,
        behavior: 'smooth',
      });
    });


    // SM Progress bar

    const smStep = this.getAttribute('data-smcols') ? this.getAttribute('data-smcols') : 1;
    const smItemCount = Math.floor(itemCount / smStep) * smStep;

    carouselProgressSM.setAttribute('max', smItemCount);
    carouselProgressSM.setAttribute('step', smStep);

    carouselProgressSM.style.setProperty('--percent', progressPercent(carouselProgressSM.value, smItemCount));
    
    carouselProgressSM.addEventListener(stepperStart, () => {
      clearInterval(stepperInterval);
      stepperInterval = setInterval(function () {
        carouselProgressSM.style.setProperty('--percent', progressPercent(carouselProgressSM.value, smItemCount));
      });
    });

    carouselProgressSM.addEventListener(stepperEvent, function () {
      clearInterval(stepperInterval);
    });

    carouselProgressSM.addEventListener('change', () => {

      clearInterval(stepperInterval);

      carouselProgressSM.style.setProperty('--percent', progressPercent(carouselProgressSM.value, smItemCount));
      const scrollTo = Math.floor((carouselElement.scrollWidth / smItemCount) * carouselProgressSM.value);

      console.log(carouselProgressSM.value);

      carouselElement.scrollTo({
        top: 0,
        left: scrollTo,
        behavior: 'smooth',
      });
    });

    // MD Progress bar

    const mdStep = this.getAttribute('data-smcols') ? this.getAttribute('data-smcols') : 1;
    const mdItemCount = Math.floor(itemCount / mdStep) * mdStep;

    carouselProgressMD.setAttribute('max', mdItemCount);
    carouselProgressMD.setAttribute('step', mdStep);

    carouselProgressMD.style.setProperty('--percent', progressPercent(carouselProgressMD.value, mdItemCount));
    
    carouselProgressMD.addEventListener(stepperStart, () => {
      clearInterval(stepperInterval);
      stepperInterval = setInterval(function () {
        carouselProgressMD.style.setProperty('--percent', progressPercent(carouselProgressMD.value, mdItemCount));
      });
    });

    carouselProgressMD.addEventListener(stepperEvent, function () {
      clearInterval(stepperInterval);
    });

    carouselProgressMD.addEventListener('change', () => {

      clearInterval(stepperInterval);

      carouselProgressMD.style.setProperty('--percent', progressPercent(carouselProgressMD.value, mdItemCount));
      const scrollTo = Math.floor((carouselElement.scrollWidth / mdItemCount) * carouselProgressMD.value);

      console.log(carouselProgressMD.value);

      carouselElement.scrollTo({
        top: 0,
        left: scrollTo,
        behavior: 'smooth',
      });
    });

  }
}

export default iamCarousel;
