import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header/Header.vue'

describe('Header component', () => {

  const test = shallowMount(Header, {
    propsData: { 
      title: 'Page title',
      image: '/img/src/img.png'
    },
    scopedSlots: {
      default: '<p>Hello</p>',
      breadcrumb: '<ul class="breadcrumb"></ul>'
    }
  })

  it('renders the page title', () => {
    expect(test.html()).toContain('<h1>Page title</h1>')
  })

  it('renders the page description', () => {
    expect(test.html()).toContain('<p>Hello</p>')
  })

  it('renders the breadcrumb trail', () => {
    expect(test.html()).toContain('<ul class="breadcrumb"></ul>')
  })

  it('renders the image', () => {
    expect(test.html()).toContain('<source srcset="/img/src/img.png" media="(min-width: 62em)">')
    expect(test.html()).toContain('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="">')
  })
})
