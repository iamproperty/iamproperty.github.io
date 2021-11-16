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
    expect(test.html()).toContain('<span class="card-title d-block h2">Card 1</span>')
    expect(test.html()).toContain('<span class="card-title d-block h2">Card 2</span>')
    expect(test.html()).toContain('<span class="card-title d-block h2">Card 3</span>')
  })

  it('renders the correct number of cards', () => {

    expect(test.findAll('.card').length).toBe(3)
  })
})


describe('Property Card component', () => {

  const test = mount(CardDeck, {
    propsData: { 
      items: [
        {
          link: '/components/card-deck',
          content: `<p>Reservation fee applies</p>`,
          image: 'house.jpg',
          title: '4 bed semi-detached',
          subTitle: 'Burt terrace, Newcastle upon tyne',
          details: {
            tags: ['Modern method','Freehold'],
            guidePrice: '£90,000.00',
            auctionTime: '19 days',
            status: 'Live now',
            images: 5,
            videos: 2,
            logo: 'logo.jpg'
          }
        }
      ]
    }
  })


  it('renders the property card title', () => {
    expect(test.html()).toContain('<span class="card-title d-block h2">4 bed semi-detached <span class="d-block fw-normal font-body text-body small">Burt terrace, Newcastle upon tyne</span></span>')
  
  })

  it('renders the card image', () => {

    expect(test.html()).toContain('<img src="house.jpg" alt="" loading="lazy" class="card-image">')
  })

  it('renders the card logo', () => {

    expect(test.html()).toContain('<img src="logo.jpg" alt="" loading="lazy" class="card-logo">')
  })

  it('renders the card tags', () => {

    expect(test.html()).toContain('<span class="badge rounded-pill py-2 px-3 mb-3 me-2 bg-secondary text-primary">Modern method</span>')
  })
})
