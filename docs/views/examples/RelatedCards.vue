<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/examples">Examples</a></li>
      </ul>
      <h1>Related cards</h1>
      <p>Display and highlight related links.</p>
    </div>

    <CardDeck :items="items" class="bg-dark">
      <span class="circle circle--stripe text-light opacity-50"></span>
      <span class="circle circle--cross text-light"></span>
      <h2 class="text-white text-center mx-auto mb-5">You may also like...</h2>
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
      htmlUsage: `<CardDeck :items="items" class="bg-dark pb-5">
  <span class="circle circle--stripe text-light opacity-50"></span>
  <span class="circle circle--cross text-light"></span>
  <h2 class="text-white text-center mx-auto mb-5">You may also like...</h2>
</CardDeck>`,
      items: [
        {
          link: '/examples/related-cards',
          title: 'Career opportunities',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          link: '/examples/related-cards',
          title: 'Property Auctions Explained',
          content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p>`
        },
        {
          link: '/examples/related-cards',
          title: 'View all available properties',
          content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, tortor eu faucibus facilisis, felis libero blandit dolor.</p>`
        }
      ]
    }
  }
}
</script>