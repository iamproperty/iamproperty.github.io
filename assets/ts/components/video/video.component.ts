import { trackComponent, trackComponentRegistered } from '../_global';
import { videoHTML, loadYouTubeScripts, createYoutTubeVideo, openYoutubeVideo, openVimeoVideo } from '../../modules/videos';

trackComponentRegistered('iam-video-modal');

class iamVideo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/video.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = /*HTML*/`
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>

    <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous" />
    ${videoHTML}
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }


  async connectedCallback(): void {
    
    const id = this.getAttribute('id');
    const button = this.shadowRoot?.querySelector('button');
    const videoWrapper = this.shadowRoot?.querySelector('.video-wrapper');
    const img = this.shadowRoot.querySelector('img');

    this.innerHTML = `<div class="embed" slot="video"></div>`;
    const embed = this.querySelector('.embed');


    videoWrapper.tabIndex = 6;
    button?.tabIndex = -1;

    if(this.hasAttribute('data-youtube')){
      
      const youtubeId = this.getAttribute('data-youtube');
      img.setAttribute('src',`http://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`);
    
      videoWrapper.addEventListener('click', async (e) => {

        embed?.setAttribute('id',youtubeId);
        openYoutubeVideo(this);
        button?.remove();
        img?.remove();
      });
    }
    else if(this.hasAttribute('data-vimeo')){

      const vimeoId = this.getAttribute('data-vimeo');

      img.setAttribute('src',`https://vumbnail.com/${vimeoId}.jpg`);
      
      videoWrapper.addEventListener('click', async (e) => {
        openVimeoVideo(this);
        button?.remove();
        img?.remove();
      });
    }
  }
}

export default iamVideo;
