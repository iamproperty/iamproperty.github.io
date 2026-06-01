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
      </style>
      <slot></slot>
      <div class="carousel__controls" part="carousel__controls">
        <div class="carousel__pips" part="carousel__pips"></div>
        <div class="carousel__progress carousel__progress-xs" part="carousel__progress-xs">
          <input type="range" min="1" max="100" value="1" step="1" />
        </div>
        <div class="carousel__progress carousel__progress-sm" part="carousel__progress-sm">
          <input type="range" min="1" max="100" value="1" step="1" />
        </div>
        <div class="carousel__progress carousel__progress-md" part="carousel__progress-md">
          <input type="range" min="1" max="100" value="1" step="1" />
        </div>
      </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
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
    /*
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
    */
 
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const carouselElement = this;
    const carouselProgress = this.shadowRoot.querySelector('.carousel__progress-xs [type="range"]');
    const carouselProgressSM = this.shadowRoot.querySelector('.carousel__progress-sm [type="range"]');
    const carouselProgressMD = this.shadowRoot.querySelector('.carousel__progress-md [type="range"]');
    const itemCount = this.querySelectorAll(':scope > *:not(.carousel__controls)').length;
    const progressPercent = this.progressPercent;

    this.querySelectorAll(':scope > *').forEach((item,index) => {
      item.setAttribute('data-child',index+1);
    })
    this.setAttribute('data-current',1);
    
    this.addEventListener("scrollsnapchange", (event) => {
      
      const snapTargetInlineElement = event.snapTargetInline;
      const child = Array.from(snapTargetInlineElement.parentElement.children).indexOf(snapTargetInlineElement)+1;

      if(child != this.getAttribute('data-current')){
        const customEvent = new CustomEvent(`snap-to`, {
          detail: {
            item: child,
          },
        });

        this.dispatchEvent(customEvent);
        this.setAttribute('data-current',child);
      }

      console.log(child);
      carouselProgress.value = child;
      carouselProgress.style.setProperty('--percent', progressPercent(child, itemCount));
      carouselProgressSM.value = child;
      carouselProgressSM.style.setProperty('--percent', progressPercent(child, carouselProgressSM?.getAttribute('max')));
      carouselProgressMD.value = child;
      carouselProgressMD.style.setProperty('--percent', progressPercent(child, carouselProgressMD?.getAttribute('max')));
      
    });
    

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
    //const smItemCount = Math.floor(itemCount / smStep) * smStep;
    const SMMax = ((Math.floor(itemCount / smStep)-1) * smStep)+1;

    carouselProgressSM.setAttribute('max', SMMax);
    carouselProgressSM.setAttribute('step', smStep);

    carouselProgressSM.style.setProperty('--percent', progressPercent(carouselProgressSM.value, carouselProgressSM?.getAttribute('max')));
    
    carouselProgressSM.addEventListener(stepperStart, () => {
      clearInterval(stepperInterval);
      stepperInterval = setInterval(function () {
        carouselProgressSM.style.setProperty('--percent', progressPercent(carouselProgressSM.value, carouselProgressSM?.getAttribute('max')));
      });
    });

    carouselProgressSM.addEventListener(stepperEvent, function () {
      clearInterval(stepperInterval);
    });

    carouselProgressSM.addEventListener('change', () => {

      clearInterval(stepperInterval);

      carouselProgressSM.style.setProperty('--percent', progressPercent(carouselProgressSM.value, carouselProgressSM?.getAttribute('max')));
      const scrollTo = Math.floor((carouselElement.scrollWidth / itemCount) * carouselProgressSM.value);

      carouselElement.scrollTo({
        top: 0,
        left: scrollTo,
        behavior: 'smooth',
      });
    });

    // MD Progress bar

    const mdStep = this.getAttribute('data-mdcols') ? this.getAttribute('data-mdcols') : 1;
    const mdMax = ((Math.floor(itemCount / mdStep)-1) * mdStep)+1;

    carouselProgressMD.setAttribute('max', mdMax);
    carouselProgressMD.setAttribute('step', mdStep);

    carouselProgressMD.style.setProperty('--percent', progressPercent(carouselProgressMD.value, carouselProgressMD?.getAttribute('max')));

    carouselProgressMD.addEventListener(stepperStart, () => {
      clearInterval(stepperInterval);
      stepperInterval = setInterval(function () {
        carouselProgressMD.style.setProperty('--percent', progressPercent(carouselProgressMD.value, carouselProgressMD?.getAttribute('max')));
      });
    });

    carouselProgressMD.addEventListener(stepperEvent, function () {
      clearInterval(stepperInterval);
    });

    carouselProgressMD.addEventListener('change', () => {

      clearInterval(stepperInterval);

      carouselProgressMD.style.setProperty('--percent', progressPercent(carouselProgressMD.value, carouselProgressMD?.getAttribute('max')));
      const scrollTo = Math.floor((carouselElement.scrollWidth / itemCount) * carouselProgressMD.value);

      console.log(carouselProgressMD.value);

      carouselElement.scrollTo({
        top: 0,
        left: scrollTo,
        behavior: 'smooth',
      });
    });


    // Thumbnails
    const carouselPips = this.shadowRoot.querySelector('.carousel__pips');

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
