import { shallowMount } from '@vue/test-utils'
import Logo from '@/foundations/Logo/Logo.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Logo, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch('For a guide')
  })
})
