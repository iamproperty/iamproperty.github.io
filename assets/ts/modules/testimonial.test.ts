import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import testimonial from './testimonial.ts';

installTestDom();

describe('Testimonial module', () => {
  it('does not wire testimonial controls for a single image', () => {
    const testimonialElement = createElement('div');
    const images = createElement('div', { class: 'testimonial__images' });
    append(images, createElement('img'));
    append(testimonialElement, images);

    expect(testimonial(testimonialElement) === false);
  });
});
