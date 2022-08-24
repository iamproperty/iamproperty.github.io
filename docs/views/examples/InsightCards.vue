<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/examples">Examples</a></li>
      </ul>
      <h1>Featured Insights</h1>
    </div>

    <CardDeck class="card-deck--featured bg-gradient circle-pattern-2" :items="items" :smcols="1" ctatext="Read more" titleclass="text-primary text-uppercase">
      <span class="circle circle--cross text-primary"></span>
      <span class="circle circle--stripe text-primary opacity-25"></span>
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
      htmlUsage: `<CardDeck class="card-deck--featured bg-gradient" :items="items" :smCols="1" ctaText="Read more" titleClass="text-primary text-uppercase"></CardDeck>`,
      items: [
        {
          image: '/house.jpeg',
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          details: {
            readTime: '10mins'
          },
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`
        },
        {
          image: '/house.jpeg',
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          details: {
            readTime: '10mins'
          },
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`
        },
        {
          image: '/house.jpeg',
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          details: {
            readTime: '10mins'
          },
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`
        },
        {
          image: '/house.jpeg',
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
