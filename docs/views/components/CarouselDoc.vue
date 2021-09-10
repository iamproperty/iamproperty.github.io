<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none pb-0">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Carousel</h1>
      <p>...</p>
    </div>
    <Carousel :items="items" class="visualtest" btnType="link" :smCols="2" :mdCols="4"></Carousel>
    
    <div class="container">
      <h3>HTML code example</h3>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Vue Card component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel.vue'
import Readme from '@/components/Carousel/README.md'

export default {
  components: {
    Carousel,
    Readme
  },
  data () {
    return {
      htmlUsage: `temp`,
      items: [
        {
          content: `<span class="h2">Item 1</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 2</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 3</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 4</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 5</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 6</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 7</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 8</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 9</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 10</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 11</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 12</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        }
      ]
    }
  }
}
</script>