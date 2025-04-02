import { shallowMount } from '@vue/test-utils';
import Header from './Banner.vue';

describe('Banner component', () => {
  const test = shallowMount(Header, {
    propsData: {
      title: 'Banner title',
      image: '/img/src/img.png',
    },
    slots: {
      default: '<p>Hello</p>',
    },
  });

  it('renders the banner title', () => {
    expect(test.html()).toContain('<h2>Banner title</h2>');
  });

  it('renders the banner content', () => {
    expect(test.html()).toContain('<p>Hello</p>');
  });

  it('renders the image', () => {
    expect(test.html()).toContain('<img src="/img/src/img.png" alt="" class="h-100 w-100 object-cover">');
  });
});
