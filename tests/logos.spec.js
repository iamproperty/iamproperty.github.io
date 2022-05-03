import { shallowMount } from '@vue/test-utils'
import Logo from '@/foundations/Logo/Logo.vue'

describe('Logo component', () => {
  it('renders the iam property logo by default', () => {
    const test = shallowMount(Logo, {
      propsData: { }
    })
    
    expect(test.html()).toContain('<title>iam property</title>')
    expect(test.html()).toContain('<use xlink:href="/svg/logo.svg#logo-property"></use>')
  })

  it('renders the correct logo when an ID is passed', () => {
    const test = shallowMount(Logo, {
      propsData: {
        id: 'sold'
      }
    })
    
    expect(test.html()).toContain('<title>iam sold</title>')
    expect(test.html()).toContain('<use xlink:href="/svg/logo.svg#logo-sold"></use>')
  })

  it('renders a description when passed', () => {
    const test = shallowMount(Logo, {
      propsData: { }
    })
    
    expect(test.html()).not.toContain('<span></span>')

    const test2 = shallowMount(Logo, {
      propsData: {
        desc: 'description'
      }
    })
    
    expect(test2.html()).toContain('<span>description</span>')
  })

  it('background can be modified', () => {
    const test = shallowMount(Logo, {
      propsData: { }
    })
    
    expect(test.html()).not.toContain('<span></span>')

    const test2 = shallowMount(Logo, {
      propsData: {
        desc: 'description'
      }
    })
    
    expect(test2.html()).toContain('<span>description</span>')
  })
})
