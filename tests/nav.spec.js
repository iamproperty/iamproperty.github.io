import { shallowMount } from '@vue/test-utils'
import Nav from '@/components/Nav/Nav.vue'

describe('Nav component', () => {
  /* Logo */
  it('renders the iam property logo by default', () => {
    const test = shallowMount(Nav, {
      propsData: { }
    })
    
    expect(test.html()).toContain('<logo-stub id="property" path=\"\"></logo-stub>')
  })

  it('renders the correct logo when a logo id is passed', () => {
    const test = shallowMount(Nav, {
      propsData: {
        logo: 'sold'
      }
    })
    
    expect(test.html()).toContain('<logo-stub id="sold" path=\"\"></logo-stub>')
  })

  /* Menu button */
  it('renders the iam property logo by default', () => {
    const test = shallowMount(Nav, {
      propsData: { }
    })
    
    expect(test.html()).toContain('<label for="showMenu">Menu</label>')
    expect(test.html()).toContain('<input type="checkbox" name="showSearch" id="showSearch" class="d-none">')
  })

  
})
