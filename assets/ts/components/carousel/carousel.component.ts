import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-carousel');

class iamCarousel extends HTMLElement {
  constructor() {
    super();
  }

  generateThumbnailList = (carouselComponent): any => {
    const thumbnailImages = [];

    Array.from(carouselComponent.querySelectorAll(':scope > :is(div,iam-card)')).forEach((slide, index) => {
      if (slide.hasAttribute('data-thumbnail')) {
        thumbnailImages[index] = slide.getAttribute('data-thumbnail');
      }
    });

    return thumbnailImages;
  };

  generatePipsHTML = (carouselComponent, thumbnailImages): string => {
    const itemCount = carouselComponent.querySelectorAll(':scope > :is(div,iam-card)').length;

    let pips = '';
    for (let i = 1; i <= itemCount; i++) {
      let pipContent = null;
      let pipClass = '';

      if (thumbnailImages.length && thumbnailImages[i - 1]) {
        pipClass = 'has-thumbnail';
        pipContent = `<img src="${thumbnailImages[i - 1]}" alt="Slide ${i}" height="148"/>`;
      } else {
        pipContent = `Slide ${i}`;
      }

      pips += `<button class="control-${i} ${pipClass}" data-slide="${i}" ${i == 1 ? 'aria-current' : ''}>${pipContent}</button>`;
    }

    return pips;
  };

  progressPercent = (value, total):string => {

    return ((value) / (total)) * 100 + '%'
  }

  connectedCallback(): void {
    
    this.insertAdjacentHTML('beforeend',`
      <div class="carousel__controls">
        <div class="carousel__pips"></div>
        <div class="carousel__progress carousel__progress-xs">
          <input type="range" min="0" max="100" value="0" step="1" />
        </div>
        <div class="carousel__progress carousel__progress-sm">
          <input type="range" min="0" max="100" value="0" step="1" />
        </div>
        <div class="carousel__progress carousel__progress-md">
          <input type="range" min="0" max="100" value="0" step="1" />
        </div>
      </div>
    `)
 
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const carouselElement = this;
    const carouselProgress = this.querySelector('.carousel__progress-xs [type="range"]');
    const carouselProgressSM = this.querySelector('.carousel__progress-sm [type="range"]');
    const carouselProgressMD = this.querySelector('.carousel__progress-md [type="range"]');
    const itemCount = this.querySelectorAll(':scope > *:not(.carousel__controls)').length;
    const progressPercent = this.progressPercent;

    let stepperInterval,
      stepperEvent = 'mouseup',
      stepperStart = 'mousedown';

    if ('ontouchstart' in document.documentElement) {
      stepperEvent = 'touchend';
      stepperStart = 'touchstart';
    }


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

      carouselElement.scrollTo({
        top: 0,
        left: scrollTo,
        behavior: 'smooth',
      });
    });


    // Thumbnails
    const carouselPips = this.querySelector('.carousel__pips');

    if (carouselElement.querySelector('[data-thumbnail]')) {
      const thumbnailImages = this.generateThumbnailList(carouselElement);
      carouselElement.classList.add('thumbnails');
      carouselPips.innerHTML = this.generatePipsHTML(carouselElement, thumbnailImages);
    }

    carouselPips.addEventListener('click', (event) => {

      carouselPips?.querySelector('[aria-current]')?.removeAttribute('aria-current');
      if(event.target.closest('button[data-slide]')){


        event.target.closest('button[data-slide]').setAttribute('aria-current','true');

        const scrollTo = Math.floor((carouselElement.scrollWidth / itemCount) * event.target.closest('button[data-slide]').getAttribute('data-slide'));

        carouselElement.scrollTo({
          top: 0,
          left: scrollTo,
          behavior: 'smooth',
        });
      }

    });

  }
}

export default iamCarousel;
