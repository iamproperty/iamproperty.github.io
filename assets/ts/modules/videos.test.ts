/* eslint-disable */

import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { createYoutTubeVideo, openVimeoVideo } from './videos.ts';

const { window } = installTestDom();

describe('Videos module', () => {
  it('reuses existing YouTube players and renders Vimeo embeds', async () => {
    let played = false;
    window.player = {
      abc123: {
        pauseVideo: () => {},
        playVideo: () => {
          played = true;
        },
      },
    };
    window.dataLayer = [];
    const embed = createElement('div', { id: 'abc123' });
    const youtubeResult = await createYoutTubeVideo(embed, 'abc123');

    const component = createElement('iam-video', { dataVimeo: '98765' });
    append(component, createElement('div', { class: 'embed' }));
    await openVimeoVideo(component);

    expect(youtubeResult === false);
    expect(played);
    expect(component.querySelector('.embed').innerHTML.includes('player.vimeo.com/video/98765'));
  });
});
