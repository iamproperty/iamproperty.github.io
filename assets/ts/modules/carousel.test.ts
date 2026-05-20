import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { generatePipsHTML, generateThumbnailList, getProgressMax } from './carousel.ts';

installTestDom();

describe('Carousel module', () => {
  it('builds thumbnail-aware pips and progress max values', () => {
    const carousel = createElement('iam-carousel');
    append(
      carousel,
      createElement('div', { dataThumbnail: '/one.jpg' }),
      createElement('iam-card'),
      createElement('div', { dataThumbnail: '/three.jpg' })
    );

    const thumbnails = generateThumbnailList(carousel);
    const html = generatePipsHTML(carousel, thumbnails);

    expect(thumbnails[0] === '/one.jpg');
    expect(thumbnails[2] === '/three.jpg');
    expect(html.includes('control-1 has-thumbnail'));
    expect(html.includes('Slide 2'));
    expect(getProgressMax(7, 3) === 7);
  });
});
