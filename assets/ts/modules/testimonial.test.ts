import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import testimonial from './testimonial.ts';

installTestDom();

const createTestimonial = (imageCount) => {
  const component = createElement('section');
  const images = createElement('div', { class: 'testimonial__images' });
  const previousButton = createElement('button', { class: 'btn-prev' });
  const nextButton = createElement('button', { class: 'btn-next' });

  for (let index = 0; index < imageCount; index++) {
    append(images, createElement('img', { alt: `Person ${index + 1}` }));
  }

  append(component, images, previousButton, nextButton);

  return { component, images, nextButton, previousButton };
};

const dispatchClickFrom = (component, target) => {
  const event = new Event('click', { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'target', { value: target });
  component.dispatchEvent(event);
};

describe('Testimonial module', () => {
  it('does not enable carousel behaviour for a single testimonial', () => {
    const { component } = createTestimonial(1);

    const result = testimonial(component);

    expect(result === false);
    expect(!component.classList.contains('testimonial--multi'));
  });

  it('enables multi-testimonial controls and updates state after scrolling', async () => {
    const { component, images, nextButton, previousButton } = createTestimonial(2);
    images.scrollWidth = 400;
    images.scrollHeight = 100;
    nextButton.setAttribute('data-go', '2');

    testimonial(component);
    dispatchClickFrom(component, nextButton);

    await new Promise((resolve) => setTimeout(resolve, 350));

    expect(component.classList.contains('testimonial--multi'));
    expect(images.scrollLeft === 200);
    expect(component.getAttribute('data-show') === '2');
    expect(previousButton.getAttribute('data-go') === '1');
    expect(nextButton.hasAttribute('disabled'));
  });
});
