import { trackComponent, trackComponentRegistered } from '../_global';
import { videoHTML, loadYouTubeScripts, createYoutTubeVideo,openYoutubeVideo,openVimeoVideo } from '../../modules/videos';
import { openModal,closeModal,closeButtonHtml } from '../../modules/modal';

trackComponentRegistered('iam-video-modal');

class iamVideoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/modal.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>

    <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous" />

    <dialog>
      ${closeButtonHtml}
      ${videoHTML}
    </dialog>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback(): void {
    
    const id = this.getAttribute('id');
    const closeButton = this.shadowRoot?.querySelector('[data-close]');
    
    this.innerHTML = `<div class="embed" slot="video"></div>`;
    const embed = this.querySelector('.embed');

    document.addEventListener('click', (e) => {

      if(e.target.closest(`[command="show-modal"][commandfor="${id}"]`)){

        e.preventDefault();

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
  }
}

export default iamVideoCard;
