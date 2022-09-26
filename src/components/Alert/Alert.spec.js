import { mount } from '@vue/test-utils'
import Alert from './Alert.vue'

describe('Alert component', () => {
  it('renders correctly', () => {

    const test = mount(Alert, {
      propsData: {
      },
      slots: {
        default: `<p>Content</p>`
      }
    })

    expect(test.html()).toContain('bg-primary')
    expect(test.html()).toContain('<p>Content</p>')
  })

  it('renders correct background', () => {

    const test = mount(Alert, {
      propsData: {
        colour: 'info'
      },
      slots: {
        default: `<p>Content</p>`
      }
    })

    expect(test.html()).toContain('bg-info')
    expect(test.html()).toContain('<p>Content</p>')
  })

  it('renders a close button', () => {

    const test = mount(Alert, {
      propsData: {
        dismissible: 'true'
      },
      slots: {
        default: `<p>Content</p>`
      }
    })

    expect(test.html()).toContain('<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>')
  })


})
