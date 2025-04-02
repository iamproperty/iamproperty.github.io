import { shallowMount } from '@vue/test-utils';
import Header from './Testimonial.vue';

describe('Testimonial component', () => {
  const test = shallowMount(Header, {
    propsData: {
      items: [
        {
          cite: 'Name goes here',
          quote: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`,
          image: '/img/src/img.png',
        },
        {
          cite: 'Name goes here 2',
          quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>`,
          image: '/img/src/img.png',
        },
        {
          cite: 'Name goes here 3',
          quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>`,
          class: 'largest',
          image: '/img/src/img.png',
        },
      ],
    },
    slots: {
      default: '<p>Hello</p>',
    },
  });

  it('renders the testimonials title', () => {
    expect(test.html()).toContain('<h2>What our customers think…</h2>');
  });

  it('renders the content after the quotes', () => {
    expect(test.html()).toContain('<p>Hello</p>');
  });

  it('renders the correct number of blockquotes', () => {
    expect(test.findAll('blockquote').length).toBe(3);
  });

  it('adds the largest class on the defined blockquote', () => {
    const quotes = test.findAll('blockquote');
    const largestQuote = quotes.at(2);

    expect(largestQuote.classes()).toContain('largest');
  });

  it('adds the testimonial--multi class on load', () => {
    expect(test.classes()).toContain('testimonial--multi');
  });
});
