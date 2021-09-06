import { mount } from '@vue/test-utils'
import CardDeck from '@/components/CardDeck/CardDeck.vue'
import Card from '@/components/Card/Card.vue'

describe('Card Deck component', () => {

  const test = mount(CardDeck, {
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
      default: '<p>Hello</p>',
      after: '<p>Hello 2</p>'
    }
  })

  it('renders the content before the card deck', () => {
    expect(test.html()).toContain('<p>Hello</p>')
  })
  
  it('renders the content after the card deck', () => {
    expect(test.html()).toContain('<p>Hello 2</p>')
  })

  it('renders the card title', () => {
    expect(test.html()).toContain('<h2 class="card-title">Card 1</h2>')
    expect(test.html()).toContain('<h2 class="card-title">Card 2</h2>')
    expect(test.html()).toContain('<h2 class="card-title">Card 3</h2>')
  })

  it('renders the correct number of cards', () => {

    expect(test.findAll('.card').length).toBe(3)
  })
})
