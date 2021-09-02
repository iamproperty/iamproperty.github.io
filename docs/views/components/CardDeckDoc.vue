<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Card deck</h1>
      <p>Need a set of equal width and height cards that aren’t attached to one another? Use card decks.</p>
    </div>
    
    
    
    <div class="container">
      <h2>HTML code examples</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Vue Card Deck component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Banner from '@/components/Banner/Banner.vue'
import Readme from '@/components/Banner/README.md'

export default {
  components: {
    Banner,
    Readme
  },
  data () {
    return {
      htmlUsage: ``
    }
  }
}
</script>