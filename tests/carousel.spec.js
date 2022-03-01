import { mount } from '@vue/test-utils'
import Carousel from '@/components/Carousel/Carousel.vue'
import Card from '@/elements/Card/Card.vue'

describe('Carousel component', () => {

  const test = mount(Carousel, {
    propsData: { 
      items: [
        {
          link: '/components/card-deck',
          title: 'Card 1',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          link: '/components/card-deck',
          title: 'Card 2',
          content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p>`
        },
        {
          link: '/components/card-deck',
          title: 'Card 3',
          content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur.</p>`
        }
      ]
    },
    scopedSlots: {
      default: '<p>Hello</p>'
    }
  })

  it('renders the content before the carousel', () => {
    expect(test.html()).toContain('<p>Hello</p>')
  })
  

  it('renders the correct number of columns', () => {

    expect(test.findAll('.col').length).toBe(3)
  })

  it('renders the correct number of pips', () => {

    expect(test.findAll('.carousel__controls a').length).toBe(3)
  })
})
