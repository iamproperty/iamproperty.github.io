<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Card deck</h1>
      <p>Need a set of equal width and height cards that aren’t attached to one another? Use card decks.</p>
    </div>
    <CardDeck :items="items" class="visualtest" data-test="test1"></CardDeck>



    <div class="container pb-0">
      <h2>Card deck featured</h2>
      <p>...</p>
    </div>
    <CardDeck :items="items2" class="card-deck--featured visualtest"></CardDeck>


    <div class="container">
      <h2>Card deck examples</h2>
      <p>This component can be configured in various ways with different types of cards alongside changing background of the container.</p>
      <a href="/examples#card-decks" class="btn btn-secondary">See card deck examples</a>
    </div>

    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Vue Card Deck component reference</h2>
      <Readme></Readme>
      <h2>Vue Card component reference</h2>
      <CardReadme></CardReadme>
    </div>
  </main>
</template>

<script>
import CardDeck from '@/components/CardDeck/CardDeck.vue'
import Readme from '@/components/CardDeck/README.md'
import CardReadme from '@/elements/Card/README.md'

export default {
  components: {
    CardDeck,
    Readme,
    CardReadme
  },
  data () {
    return {
      htmlUsage: `<div class="container">
  <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4">
    <div class="col">
      <a href="/components/card-deck" class="card">
        <div class="card-body">
          <h2 class="card-title">Card 1</h2>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>
        </div>
        <div class="card-footer">
          <span class="btn btn-secondary mb-0">Find out more<span class="visually-hidden"> about Card 1</span></span>
        </div>
      </a>
    </div>
    <div class="col">
      <a href="/components/card-deck" class="card"><div class="card-body"><h2 class="card-title">Card 2</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p></div><div class="card-footer"><span class="btn btn-secondary mb-0">Find out more<span class="visually-hidden"> about Card 2</span></span></div></a>
    </div>
    <div class="col">
      <a href="/components/card-deck" class="card"><div class="card-body"><h2 class="card-title">Card 3</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur.</p></div><div class="card-footer"><span class="btn btn-secondary mb-0">Find out more<span class="visually-hidden"> about Card 3</span></span></div></a>
    </div>
  </div>
</div>`,
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
      ],
      items2: [
        {
          image: '/house.jpeg',
          link: '/components/card-deck',
          title: 'Card 1',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          image: '/house.jpeg',
          link: '/components/card-deck',
          title: 'Card 2',
          content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p>`
        },
        {
          image: '/house.jpeg',
          link: '/components/card-deck',
          title: 'Card 3',
          content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p>`
        },
        {
          image: '/house.jpeg',
          link: '/components/card-deck',
          title: 'Card 4',
          content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p>`
        },
        {
          image: '/house.jpeg',
          link: '/components/card-deck',
          title: 'Card 5',
          content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur.</p>`
        },
        {
          image: '/house.jpeg',
          link: '/components/card-deck',
          title: 'Card 6',
          content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur.</p>`
        }
      ],
      properties: [
        {
          link: '/components/card-deck',
          content: `<p>Reservation fee applies</p>`,
          image: '/house.jpeg',
          title: '4 bed semi-detached',
          subtitle: 'Burt terrace, Newcastle upon tyne',
          details: {
            tags: ['Modern method','Freehold'],
            guideprice: '£90,000.00',
            auctiontime: '19 days',
            status: 'Live now',
            images: 5,
            videos: 2,
            logo: '/logo.jpg'
          }
        },
        {
          link: '/components/card-deck',
          image: '/house.jpeg',
          title: '4 bed semi-detached',
          subtitle: 'Burt terrace, Newcastle upon tyne',
          content: `<p>Reservation fee applies</p>`,
          details: {
            tags: ['Traditional method','Freehold'],
            guideprice: '£90,000.00',
            auctiontime: '19 days',
            status: 'Sold',
            images: 5,
            videos: 2,
            logo: '/logo.jpg'
          }
        },
        {
          link: '/components/card-deck',
          image: '/house.jpeg',
          title: '4 bed semi-detached',
          subtitle: 'Burt terrace, Newcastle upon tyne',
          content: `<p>Reservation fee applies</p>`,
          details: {
            tags: ['Traditional method','Freehold'],
            guideprice: '£90,000.00',
            auctiontime: '19 days',
            status: 'Sold',
            images: 5,
            videos: 2,
            logo: '/logo.jpg'
          }
        },
        {
          link: '/components/card-deck',
          image: '/house.jpeg',
          title: '4 bed semi-detached',
          subtitle: 'Burt terrace, Newcastle upon tyne',
          content: `<p>Reservation fee applies</p>`,
          details: {
            tags: ['Modern method','Freehold'],
            guideprice: '£90,000.00',
            auctiontime: '19 days',
            status: 'Sold',
            images: 5,
            videos: 2,
            logo: '/logo.jpg'
          }
        }
      ],
      propertyListing: [
        {
          link: '/components/card-deck',
          content: `<p>Reservation fee applies</p>`,
          image: '/house.jpeg',
          title: '4 bed semi-detached',
          subtitle: 'Burt terrace, Newcastle upon tyne',
          details: {
            tags: ['Modern method','Freehold'],
            guideprice: '£90,000.00',
            auctiontime: '19 days',
            status: 'Live now',
            images: 5,
            videos: 2,
            logo: '/logo.jpg'
          }
        }
      ]
    }
  }
}
</script>
