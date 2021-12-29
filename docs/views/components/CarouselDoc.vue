<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none pb-0">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Carousel</h1>
      <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>
    </div>
    <Carousel :items="items" class="visualtest" btntype="link" :smcols="2" :mdcols="4"></Carousel>
    
    <div class="container">
      <p class="note"><strong>Note:</strong> We do not use the carousel that comes with bootstrap instead we take advantage of the 'scroll-snap' CSS feature. This reduces its complexitity and allows us to have mulitple items in displayed by using the bootstrap gird system.</p>
      <h3>HTML code example</h3>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h3>Carousel examples</h3>
      <p>This component can be configured in various ways with different types of cards alongside changing background of the container.</p>
      <a href="/examples#carousels" class="btn btn-secondary">See carousels examples</a>
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
      htmlUsage: `<div id="carousel31" class="container carousel visualtest">
  <div class="carousel__wrapper">
    <div class="carousel__inner">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
        <div id="carousel31slide1" class="col carousel__item">
          <span class="h2">Item 1</span>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>
        </div>
        <div id="carousel31slide2" class="col carousel__item">
          <span class="h2">Item 2</span>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>
        </div>
        <div id="carousel31slide3" class="col carousel__item">
          <span class="h2">Item 3</span>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>
        </div>
        <div id="carousel31slide4" class="col carousel__item">
          <span class="h2">Item 4</span>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>
        </div>
      </div>
    </div>
    <div class="carousel__controls cols-1 cols-sm-2 cols-md-4">
      <a href="#carousel31slide1" class="control-1 active">Slide 1</a>
      <a href="#carousel31slide2" class="control-2">Slide 2</a>
      <a href="#carousel31slide3" class="control-3">Slide 3</a>
      <a href="#carousel31slide4" class="control-4">Slide 4</a>
    </div>
    <button data-go="0" disabled="disabled" class="btn btn-prev">Prev</button>
    <button data-go="2" class="btn btn-next">Next</button>
  </div>
</div>`,
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