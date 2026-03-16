import { trackComponent, trackComponentRegistered } from '../_global';
import { cardHTML, setupCard } from '../../modules/card.module';
import { videoHTML, loadYouTubeScripts, createYoutTubeVideo,openYoutubeVideo,openVimeoVideo } from '../../modules/videos';
import { openModal,closeModal,closeButtonHtml } from '../../modules/modal';

trackComponentRegistered('iam-video-card');

class iamVideoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/video-card.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous" />
    ${cardHTML}
    <dialog>
      ${closeButtonHtml}
      ${videoHTML}
    </dialog>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const cardComponent = this;
    const cardHead = cardComponent.shadowRoot.querySelector('.card__head');
    const closeButton = this.shadowRoot?.querySelector('[data-close]');

    this.insertAdjacentHTML('beforeend', `<div class="embed" slot="video"></div>`);
    const embed = this.querySelector('.embed');

    setupCard(cardComponent);
    
    if (cardComponent.querySelector('[data-youtube]')){
      
      cardComponent.setAttribute('data-youtube',cardComponent.querySelector('[data-youtube]').getAttribute('data-youtube'));
      cardComponent.querySelector('[data-youtube]')?.remove();
    }

    if (cardComponent.querySelector('[data-vimeo]')){
      
      cardComponent.setAttribute('data-vimeo', cardComponent.querySelector('[data-vimeo]').getAttribute('data-vimeo'));
      cardComponent.querySelector('[data-vimeo]')?.remove();
    }
    
    

    cardHead.insertAdjacentHTML(
          'beforeend',
          `<button class="btn btn-compact fa-play colour-success">Play</button>`
        );

        
    const button = cardHead?.querySelector('button');

    cardHead.tabIndex = 6;
    button?.tabIndex = -1;

    cardHead.addEventListener('click', () => {
      
      if(this.hasAttribute('data-youtube')){
        const youtubeId = this.getAttribute('data-youtube');
        embed?.setAttribute('id',youtubeId);
        openYoutubeVideo(this);
        openModal(this);
      }
      else if(this.hasAttribute('data-vimeo')) {
        openVimeoVideo(this);
        openModal(this);
      }
    });

    closeButton?.addEventListener('click', () => {
      closeModal(this);

      if(this.hasAttribute('data-youtube')){
        const youtubeId = this.getAttribute('data-youtube');

        if (window.player[youtubeId] && typeof window.player[youtubeId].pauseVideo == 'function') {
          window.player[youtubeId].pauseVideo();
        }
      }
      else if(this.hasAttribute('data-vimeo')) {
        
        embed.innerHTML = ``; // Remove the video since we cant pause it

        const customEvent = new CustomEvent('close-video', {
          detail: { 'Video Type': 'Vimeo', ID: this.getAttribute('data-vimeo') },
        });
        this.dispatchEvent(customEvent);
        window.dataLayer.push(customEvent.detail);
      }
    });

    trackComponent(cardComponent, 'iam-video-card', ['play-video', 'close-video']);
  }

  static get observedAttributes(): any {
    return ['data-image'];
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {
    switch (attrName) {
      case 'data-image': {
        if (oldVal != newVal) {
          const cardHeadImg = this.shadowRoot.querySelector('.card__head img');

          if (cardHeadImg) cardHeadImg.setAttribute('src', newVal);
        }
        break;
      }
    }
  }
}

export default iamVideoCard;
