import { trackComponent, trackComponentRegistered } from '../_global';
import { cardHTML, setupCard } from '../../modules/card.module';
import { loadYouTubeScripts, createYoutTubeVideo } from '../../modules/videos';

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
    ${cardHTML}
    <dialog>
      <div class="embed"></div>
    </dialog>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const cardComponent = this;
    const cardHead = cardComponent.shadowRoot.querySelector('.card__head');

    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const link_id = randLetter + Date.now();

    let dialog;
    let embed;

    setupCard(cardComponent);

    // Check if youtube or vimeo video link is present
    if (cardComponent.querySelector('[data-youtube]'))
      cardComponent.setAttribute(
        'data-youtube',
        cardComponent.querySelector('[data-youtube]').getAttribute('data-youtube')
      );

    if (cardComponent.querySelector('[data-vimeo]'))
      cardComponent.setAttribute('data-vimeo', cardComponent.querySelector('[data-vimeo]').getAttribute('data-vimeo'));

    // General dialog stuff
    if (cardComponent.hasAttribute('data-youtube') || cardComponent.hasAttribute('data-vimeo')) {
      cardHead.setAttribute('tabindex', '0');

      // Add dialog to page
      if (!document.getElementById(`${link_id}-dialog`)) {
        document.body.insertAdjacentHTML(
          'beforeend',
          `<dialog id="${link_id}-dialog"><div class="embed" id="${link_id}"></div></dialog>`
        );
      }

      dialog = document.getElementById(`${link_id}-dialog`);
      embed = document.getElementById(link_id);
    }

    // Youtube
    if (cardComponent.hasAttribute('data-youtube')) {
      // Load the scripts only once
      if (!document.body.classList.contains('youtubeLoaded')) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const loaded = await loadYouTubeScripts();
      }
      cardHead.addEventListener('click', function () {
        const customEvent = new CustomEvent('play-video', {
          detail: { 'Video Type': 'YoutTube', ID: cardComponent.getAttribute('data-youtube') },
        });
        cardComponent.dispatchEvent(customEvent);

        createYoutTubeVideo(embed, this.getAttribute('[data-youtbue]'));
        dialog.showModal();
      });

      dialog.addEventListener('close', () => {
        if (
          window.player[embed.getAttribute('id')] &&
          typeof window.player[embed.getAttribute('id')].pauseVideo == 'function'
        ) {
          window.player[embed.getAttribute('id')].pauseVideo();
        }

        const customEvent = new CustomEvent('close-video', {
          detail: { 'Video Type': 'YoutTube', ID: cardComponent.getAttribute('data-youtube') },
        });
        cardComponent.dispatchEvent(customEvent);
      });
    } else if (cardComponent.hasAttribute('data-vimeo')) {
      // Vimeo

      cardHead.addEventListener('click', function () {
        const videoId = cardComponent.getAttribute('data-vimeo');

        const customEvent = new CustomEvent('play-video', {
          detail: { 'Video Type': 'Vimeo', ID: videoId },
        });
        cardComponent.dispatchEvent(customEvent);

        if (!embed.querySelector('iframe'))
          embed.innerHTML = `<iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1" width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;

        dialog.showModal();
      });

      dialog.addEventListener('close', () => {
        embed.innerHTML = ``; // Remove the video since we cant pause it

        const customEvent = new CustomEvent('close-video', {
          detail: { 'Video Type': 'Vimeo', ID: cardComponent.getAttribute('data-vimeo') },
        });
        cardComponent.dispatchEvent(customEvent);
      });
    }

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
