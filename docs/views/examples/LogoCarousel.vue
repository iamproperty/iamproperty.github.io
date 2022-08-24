<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/examples">Examples</a></li>
      </ul>
      <h1>Logo carousel</h1>
      <p>...</p>
    </div>

    <Carousel class="hide-controls" :items="items" :smcols="3" :mdcols="5" colclass="d-flex align-items-center">
      <h2 class="mx-auto text-center">We're already working with thousands of agents across the UK</h2>
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
      htmlUsage: `<Carousel class="hide-controls" :items="items" :smCols="3" :mdCols="5" colClass="d-flex align-items-center">
  <h2 class="mx-auto text-center">We're already working with thousands of agents across the UK</h2>
</Carousel>`,
      items: [
        {
          image: '/logo.jpg'
        },
        {
          image: '/logo.jpg'
        },
        {
          image: '/house.jpeg'
        },
        {
          image: '/logo.jpg'
        },
        {
          image: '/logo.jpg'
        },
        {
          image: '/logo.jpg'
        },
        {
          image: '/logo.jpg'
        },
        {
          image: '/logo.jpg'
        },
        {
          image: '/logo.jpg'
        },
        {
          image: '/logo.jpg'
        }
      ]
    }
  }
}
</script>
