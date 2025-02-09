import { shallowMount } from '@vue/test-utils';
import Header from './Timeline.vue';

describe('Timeline component', () => {
  const test = shallowMount(Header, {
    propsData: {},
    slots: {
      default: '<p>Hello</p>',
    },
  });

  it('renders the content after', () => {
    expect(test.html()).toContain('<p>Hello</p>');
  });
});
