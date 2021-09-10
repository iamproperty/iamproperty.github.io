<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/examples">Examples</a></li>
      </ul>
      <h1>Insight cards</h1>
      <p>A simple card type with a link at the bottom instead of a button and a read time detail set.</p>
    </div>

    <CardDeck :items="items" :smCols="2" :mdCols="4" cardType="simple" btnType="link" ctaText="Read more" titleClass="h6 fw-normal font-body text-uppercase">
    </CardDeck>

    <CardDeck class="bg-dark" :items="items" :smCols="2" :mdCols="4" cardType="simple" cardClass="bg-dark" btnType="link" ctaText="Read more" titleClass="text-primary text-uppercase">
    </CardDeck>

    <div class="container">
      <h2>Vue code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>
  </main>
</template>

<script>
import CardDeck from '@/components/CardDeck/CardDeck.vue'

export default {
  components: {
    CardDeck
  },
  data () {
    return {
      htmlUsage: `<CardDeck :items="items" :smCols="2" :mdCols="4" cardType="simple" btnType="link" ctaText="Read more" titleClass="h6 fw-normal font-body text-uppercase"></CardDeck>`,
      items: [
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          details: {
            readTime: '10mins'
          },
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          details: {
            readTime: '10mins'
          },
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          details: {
            readTime: '10mins'
          },
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`
        },
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