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

    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous" />

    <dialog>
      ${closeButtonHtml}
      <slot></slot>
    </dialog>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  openVideo = async (id, component):void => {

    const videoId = component.getAttribute('data-youtube');

    const embed = component.querySelector('.embed');

    openModal(id, component);

    let loaded;
    if (!document.body.classList.contains('youtubeLoaded')) {
      
      
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      loaded = await loadYouTubeScripts();
    }

    const customEvent = new CustomEvent('play-video', {
      detail: { 'Video Type': 'YoutTube', ID: videoId },
    });
    component.dispatchEvent(customEvent);

    const interval = setInterval(():void => {

      if(typeof YT != "undefined"){
      console.log(videoId)

        clearInterval(interval);
        createYoutTubeVideo(embed, videoId);
      }
    }, 200);
    // Limit the number of calls
    setTimeout(function() {
      clearInterval(interval)
    }, 2000);
          
  } 

  async connectedCallback(): void {
    
    const id = this.getAttribute('id');
    const closeButton = this.shadowRoot?.querySelector('[data-close]');
    

    this.innerHTML = `<div class="embed"></div>`

    const embed = this.querySelector('.embed');
    let videoId;
    

    if(this.hasAttribute('data-youtube')){
      

      videoId = this.getAttribute('data-youtube');
      document.addEventListener('click', async (e) => {

        if(e.target.closest(`[command="show-modal"][commandfor="${id}"]`)){

          e.preventDefault();

          embed?.setAttribute('id',videoId);

          this.openVideo(id, this);

        }
      });
    }
    
    closeButton?.addEventListener('click', () => {
      closeModal(id, this);

      if (window.player[videoId] && typeof window.player[videoId].pauseVideo == 'function') {
        window.player[videoId].pauseVideo();
      }
    });
  }
}

export default iamVideoCard;
