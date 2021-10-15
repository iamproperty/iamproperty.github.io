import { shallowMount } from '@vue/test-utils'
import Modal from '@/components/Modal/Modal.vue'

describe('Modal component', () => {

  const test = shallowMount(Modal, {
    propsData: { 
      id: 'modal'
    },
    scopedSlots: {
      default: '<p>Hello</p>'
    }
  })

  it('renders the close button', () => {
    expect(test.html()).toContain('<a href="#close" class="btn btn-tertiary py-1 px-2"><span class="visually-hidden">Close</span>✕</a>')
  })

  it('renders the modal content', () => {
    expect(test.html()).toContain('<p>Hello</p>')
  })
})
