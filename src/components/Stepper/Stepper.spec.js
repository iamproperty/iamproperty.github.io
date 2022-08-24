import { mount } from '@vue/test-utils'
import Stepper from './Stepper.vue'
import Step from './Step.vue'

describe('Stepper component', () => {
  it('renders 4 steps', () => {

    const test = mount(Stepper, {
      propsData: {
        'label': 'Start',
        'endlabel': 'End'
      },
      global: {
        stubs: {
          'Step': Step
        }
      },
      slots: {
        default: `<Step status="success">Customer due diligence</Step>
        <Step url="/step" status="success">Legal Preperation</Step>
        <Step url="/step" current>Financial Preparation</Step>
        <Step url="/step">Surveys</Step>`
      }
    })

    expect(test.findAll('a').length).toBe(4)
  })

  it('renders a label when set', () => {

    const test = mount(Stepper, {
      propsData: {
        'label': 'Start',
        'endlabel': 'End'
      },
      global: {
        stubs: {
          'Step': Step
        }
      },
      slots: {
        default: `<Step status="success">Customer due diligence</Step>
        <Step url="/step" status="success">Legal Preperation</Step>
        <Step url="/step" current>Financial Preparation</Step>
        <Step url="/step">Surveys</Step>`
      }
    })

    expect(test.find('.stepper__start').html()).toContain('Start')
  })

  it('renders an end label when set', () => {

    const test = mount(Stepper, {
      propsData: {
        'label': 'Start',
        'endlabel': 'End'
      },
      global: {
        stubs: {
          'Step': Step
        }
      },
      slots: {
        default: `<Step status="success">Customer due diligence</Step>
        <Step url="/step" status="success">Legal Preperation</Step>
        <Step url="/step" current>Financial Preparation</Step>
        <Step url="/step">Surveys</Step>`
      }
    })

    expect(test.find('.stepper__end').html()).toContain('End')
  })


  it('sets status on steps', () => {

    const test = mount(Stepper, {
      propsData: {
        'label': 'Start',
        'endlabel': 'End'
      },
      global: {
        stubs: {
          'Step': Step
        }
      },
      slots: {
        default: `<Step status="success">Customer due diligence</Step>
        <Step url="/step" status="success">Legal Preperation</Step>
        <Step url="/step" current>Financial Preparation</Step>
        <Step url="/step">Surveys</Step>`
      }
    })

    expect(test.find('.bg-success').exists()).toBe(true)
    expect(test.find('.current').exists()).toBe(true)
  })
})
