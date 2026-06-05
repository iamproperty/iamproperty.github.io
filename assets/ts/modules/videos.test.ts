import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append, silenceConsole } from './test-utils.ts';
import { createYoutTubeVideo, loadYouTubeScripts, openVimeoVideo, videoHTML } from './videos.ts';

const { document, window } = installTestDom();

if (typeof globalThis.CustomEvent === 'undefined') {
  globalThis.CustomEvent = class extends Event {
    detail;

    constructor(type, options = {}) {
      super(type, options);
      this.detail = options.detail;
    }
  };
}

describe('Videos module', () => {
  it('provides the expected base video markup', () => {
    expect(videoHTML.includes('<slot name="video"></slot>'));
    expect(videoHTML.includes('fa-play'));
  });

  it('loads the YouTube iframe script once the favicon probe succeeds', async () => {
    append(document.body, createElement('script'));

    await loadYouTubeScripts();

    expect(document.body.classList.contains('youtubeLoaded'));
    expect(document.getElementsByTagName('script').length === 2);
  });

  it('reuses an existing YouTube player instead of creating another one', async () => {
    let played = false;
    window.player = {
      existing: {
        pauseVideo: () => {},
        playVideo: () => {
          played = true;
        },
      },
    };

    const result = await createYoutTubeVideo(createElement('div'), 'existing');

    expect(result === false);
    expect(played);
  });

  it('creates a YouTube player and marks the embed ready when playback starts', async () => {
    const embed = createElement('div', { id: 'youtube-alpha' });
    append(document.body, embed);
    window.player = undefined;
    globalThis.YT = {
      PlayerState: { PLAYING: 1 },
      Player: class {
        constructor(id, config) {
          this.id = id;
          this.config = config;
          setTimeout(() => {
            config.events.onReady({ target: { playVideo: () => {} } });
            config.events.onStateChange({ data: 1 });
          }, 0);
        }
      },
    };

    await silenceConsole(() => createYoutTubeVideo(embed, 'youtube-alpha'));
    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(window.player['youtube-alpha']);
    expect(embed.classList.contains('player-ready'));
  });

  it('opens a Vimeo iframe and dispatches video analytics details', async () => {
    window.dataLayer = [];
    const component = createElement('iam-video', { dataVimeo: '12345' });
    const embed = createElement('div', { class: 'embed' });
    let selectedDetail;
    component.addEventListener('play-video', (event) => {
      selectedDetail = event.detail;
    });
    append(component, embed);

    await openVimeoVideo(component);

    expect(embed.innerHTML.includes('https://player.vimeo.com/video/12345?autoplay=1'));
    expect(selectedDetail['Video Type'] === 'Vimeo');
    expect(selectedDetail.ID === '12345');
    expect(window.dataLayer[0].ID === '12345');
  });
});
