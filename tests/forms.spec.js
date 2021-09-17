import { shallowMount } from '@vue/test-utils'
import Input from '@/elements/Input/Input.vue'

describe('Input component', () => {

  const test = shallowMount(Input, {
    propsData: { 
      id: 'input1',
      label: 'Label',
      size: 'sm',
      errorMsg: 'Error'
    },
    scopedSlots: {
      default: '<p>Hello</p>'
    }
  })

  it('renders the the extra slot content', () => {
    expect(test.html()).toContain('<p>Hello</p>')
  })

  it('renders the input id', () => {
    expect(test.html()).toContain('id="input1"')
  })

  it('renders the label', () => {
    expect(test.html()).toContain('<label for="input1" class="form-label">Label</label>')
  })

  it('write the correct class for the size', () => {
    expect(test.find('input').classes()).toContain('form-control-sm')
  })


  it('renders the error message', () => {
    expect(test.html()).toContain('<p class="invalid-feedback mb-0">Error</p>')
  })
})


describe('Textarea component', () => {

  const test = shallowMount(Input, {
    propsData: { 
      id: 'input1',
      label: 'Label',
      type: 'textarea'
    }
  })

  it('writes out a textarea instead of an input', () => {
    expect(test.findAll('input').length).toBe(0)
    expect(test.findAll('textarea').length).toBe(1)
  })

})

