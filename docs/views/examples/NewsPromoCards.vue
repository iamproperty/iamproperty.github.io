<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/examples">Examples</a></li>
      </ul>
      <h1>News promo cards</h1>
      <p>...</p>
    </div>

    <Carousel :items="items" class="bg-dark circle-pattern-2 visualtest hide-btns" type="card" cardType="simple" btnType="link" :smCols="2" :mdCols="4" ctaText="Read more" titleClass="text-primary text-uppercase">
      <span class="circle circle--stripe text-light opacity-50"></span>
      <h2 class="text-white">Keep up to date with the latest property news</h2>
    </Carousel>

    <div class="container">
      <h2>Vue code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>
  </main>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel.vue'

export default {
  components: {
    Carousel
  },
  data () {
    return {
  htmlUsage: `<Carousel :items="items" class="bg-dark circle-pattern-2 hide-btns" type="card" cardType="simple" btnType="link" :smCols="2" :mdCols="4" ctaText="Read more" titleClass="text-primary text-uppercase">
  <span class="circle circle--stripe text-light opacity-50"></span>
  <h2 class="text-white">Keep up to date with the latest property news</h2>
</Carousel>`,
      items: [
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        },
        {
          image: require('../../assets/house.jpeg'),
          link: '/examples/related-cards',
          title: 'News - 24 March 2021',
          content: `<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>`,
          details: {
            readTime: '10 mins'
          }
        }
      ]
    }
  }
}
</script>