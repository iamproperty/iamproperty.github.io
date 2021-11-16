<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none pb-0">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Card</h1>
      <p>A large link that also works as a content container, usually containing a title, description and call to action text. Cards are designed to be used as a child component of <a href="/components/card-deck">card decks</a>, card carousels and featured cards.</p>
      <h2>Default card</h2>
    </div>
    <CardDeck :items="items" class="visualtest" data-test="test1"></CardDeck>
    

    <div class="container">
      <h3>HTML code example</h3>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Simple card</h2>
      <p>A reduced version of the card without a border or extra padding.</p>
    </div>
    <CardDeck :items="items" cardType="simple" :gap="0" class="visualtest"></CardDeck>
    <div class="container">
      <p>The card element needs a data attribute set which will set bespoke CSS.</p>
      <pre><code class="javascript">{{`&lt;a href="/link" data-type="simple">...&lt;/a>`}}</code></pre>
    </div>
    
    <div class="container">
      <h2>Quick link card</h2>
      <p>A very simple card to just show the card title.</p>
    </div>
    <CardDeck :items="items" cardType="quick" class="bg-dark visualtest"></CardDeck>
    <div class="container">
      <p>The card element needs a data attribute set which will set bespoke CSS.</p>
      <pre><code class="javascript">{{`&lt;a href="/link" data-type="quick">...&lt;/a>`}}</code></pre>
    </div>

    <div class="container">
      <h2>Insight cards</h2>
      <p>A simple card type with a link at the bottom instead of a button and a read time detail set.</p>
    </div>

    <CardDeck :items="insightCards" :smCols="2" :mdCols="4" cardType="simple" btnType="link" ctaText="Read more" titleClass="h6 fw-normal font-body text-uppercase" class="visualtest">
    </CardDeck>

    <div class="container">
      <h2>Property card</h2>
      <p>A more complex card with lots of key information but is still made using the same component.</p>
    </div>
    <CardDeck :items="propertyListing" :smCols="2" :mdCols="4" btnType="link" class="visualtest" titleClass="h6"></CardDeck>
    <div class="container">
      <p>No data attribute is needed and can be built up by adding</p>
      <pre><code class="javascript">{{htmlProperty}}</code></pre>
    </div>


    <div class="container">
      <h2>Property Listing card</h2>
      <p>Property cards by default shift the image to the left on cards when given more space. This is done by putting the card into a card deck with only one column per row on tablet or desktop (<strong>.row-cols-sm-1</strong>).</p>
    </div>
    <CardDeck :items="propertyListing" :smCols="1" :mdCols="1" btnType="link" class="visualtest" titleClass="h6"></CardDeck>
    <div class="container">
      <p></p>
    </div>

    <div class="container">
      <h2>Vue Card component reference</h2>
      <CardReadme></CardReadme>
    </div>
  </main>
</template>

<script>
import CardDeck from '@/components/CardDeck/CardDeck.vue'
import CardReadme from '@/components/Card/README.md'

export default {
  components: {
    CardDeck,
    CardReadme
  },
  data () {
    return {
      htmlUsage: `<a href="/components/card-deck" class="card">
  <div class="card-body">
    <h2 class="card-title">Card 1</h2>
    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>
  </div>
  <div class="card-footer">
    <span class="btn btn-secondary mb-0">Find out more<span class="visually-hidden"> about Card 1</span></span>
  </div>
</a>`,
      htmlProperty: `<a href="/components/card" title="Find out more: 4 bed semi-detached - Burt terrace, Newcastle upon tyne" class="card">
  <div class="card-header__wrapper">
    <img src="/img/house.16902622.jpeg" alt="" loading="lazy" class="card-image">
    <div class="card-header">
      <span class="badge bg-primary p-2 me-2"><span class="text-danger lh-0 fs-1 align-middle">•</span>&nbsp;&nbsp;Live now</span>
      <span class="badge bg-black bg-opacity-50 p-2 align-self-end"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" class="icon text-white"><title>Images </title><path d="M15 10.5c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zM26 4c2.203 0 4 1.797 4 4v14c0 2.203-1.797 4-4 4h-22c-2.203 0-4-1.797-4-4v-14c0-2.203 1.797-4 4-4h3.5l0.797-2.125c0.391-1.031 1.609-1.875 2.703-1.875h8c1.094 0 2.312 0.844 2.703 1.875l0.797 2.125h3.5zM15 22c3.859 0 7-3.141 7-7s-3.141-7-7-7-7 3.141-7 7 3.141 7 7 7z"></path></svg> 5&nbsp;&nbsp;|&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 28 28" class="icon text-white ms-0"><title>Videos </title><path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z"></path></svg> 2</span>
    </div>
    <img src="/img/logo.423a9165.jpg" alt="" loading="lazy" class="card-logo">
  </div>
  <div class="card-body">
    <span class="badge rounded-pill py-2 px-3 mb-3 me-2 bg-secondary text-primary">Modern method</span>
    <span class="badge rounded-pill py-2 px-3 mb-3 me-2 bg-light text-dark">Freehold</span>
    <span class="card-title d-block h6">4 bed semi-detached <span class="d-block fw-normal font-body text-body small">Burt terrace, Newcastle upon tyne</span></span>
    <span class="d-block h6 text-dark mb-1">Price guide: £90,000.00</span>
    <span class="d-block h6 text-primary mb-4">Auction time left: 19 days</span>
    <p>Reservation fee applies</p>
  </div>
  <div class="card-footer">
    <span class="link mb-0">Find out more<span class="visually-hidden"> about 4 bed semi-detached</span></span>
  </div>
</a>`,
      items: [
        {
          link: '/components/card',
          title: 'Card 1',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        }
      ],
      propertyListing: [
        {
          link: '/components/card',
          content: `<p>Reservation fee applies</p>`,
          image: require('../../assets/house.jpeg'),
          title: '4 bed semi-detached',
          subTitle: 'Burt terrace, Newcastle upon tyne',
          details: {
            tags: ['Modern method','Freehold'],
            guidePrice: '£90,000.00',
            auctionTime: '19 days',
            status: 'Live now',
            images: 5,
            videos: 2,
            logo: require('../../assets/logo.jpg')
          }
        }
      ],
      insightCards: [
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          details: {
            readTime: '10mins'
          },
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`
        }
      ]
    }
  }
}
</script>