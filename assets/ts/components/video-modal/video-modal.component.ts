import { trackComponent, trackComponentRegistered } from '../_global';
import { loadYouTubeScripts, createYoutTubeVideo } from '../../modules/videos';
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
      <slot></slot>
    </dialog>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  openYoutubeVideo = async (id, component):void => {

    const embed = component.querySelector('.embed');

    openModal(id, component);

    const youtubeId = component.getAttribute('data-youtube');
    let loaded;
    if (!document.body.classList.contains('youtubeLoaded')) {
      
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      loaded = await loadYouTubeScripts();
    }

    const customEvent = new CustomEvent('play-video', {
      detail: { 'Video Type': 'YoutTube', ID: youtubeId },
    });
    component.dispatchEvent(customEvent);

    const interval = setInterval(():void => {

      if(typeof YT != "undefined"){
        clearInterval(interval);
        createYoutTubeVideo(embed, youtubeId);
      }
    }, 200);
    // Limit the number of calls
    setTimeout(function() {
      clearInterval(interval)
    }, 2000);

  } 
  
  openVimeoVideo = async (id, component):void => {

    const embed = component.querySelector('.embed');

    openModal(id, component);

    const vimeoId = component.getAttribute('data-vimeo');

    const customEvent = new CustomEvent('play-video', {
      detail: { 'Video Type': 'Vimeo', ID: vimeoId },
    });
    component.dispatchEvent(customEvent);
    window.dataLayer.push(customEvent.detail);

    if (!embed.querySelector('iframe'))
      embed.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1" width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;

  } 

  async connectedCallback(): void {
    
    const id = this.getAttribute('id');
    const closeButton = this.shadowRoot?.querySelector('[data-close]');
    
    this.innerHTML = `<div class="embed"></div>`
    const embed = this.querySelector('.embed');

    document.addEventListener('click', async (e) => {

      if(e.target.closest(`[command="show-modal"][commandfor="${id}"]`)){

        e.preventDefault();

        if(this.hasAttribute('data-youtube')){
          const youtubeId = this.getAttribute('data-youtube');
          embed?.setAttribute('id',youtubeId);
          this.openYoutubeVideo(id, this);
        }
        else if(this.hasAttribute('data-vimeo')) {
          this.openVimeoVideo(id, this);
        }
      }
    });
    
    closeButton?.addEventListener('click', () => {
      closeModal(id, this);

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
