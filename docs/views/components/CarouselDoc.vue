<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none pb-0">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Carousel</h1>
      <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>
    </div>
    <Carousel class="visualtest" btntype="link" :smcols="2" :mdcols="4">
    
      <div :class="`row row-cols-1 row-cols-sm-2 row-cols-md-3`">
        <div :class="`col carousel__item`" v-for="(value,index) in items" :key="index" v-html="content(value)" :id="'carousel'+id+'slide'+(index+1)"></div>
      </div>
    
    </Carousel>
    
    <div class="container">
      <p class="note"><strong>Note:</strong> We do not use the carousel that comes with bootstrap instead we take advantage of the 'scroll-snap' CSS feature. This reduces its complexitity and allows us to have mulitple items in displayed by using the bootstrap gird system.</p>
      <h3>HTML code example</h3>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h3>Carousel with Image Thumbnails</h3>
      <p>To implement this, you will need to pass an array of thumbnail objects.</p>

      <Carousel :thumbnails="thumbnails">
      
        <div :class="`row row-cols-1`">
          <div :class="`col carousel__item`" v-for="(value,index) in thumbnailCarouselItems" :key="`${carouselId}${index}`" v-html="content(value)" :id="`carousel-slide${index+1}`"></div>
        </div>
      
      </Carousel>
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
  computed: {
    content (){
      return (value) => {
        return `${value.image ? `<img src="${value.image}" alt="" />` : ''}${value.content?value.content:''}`;
      }
    }
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
        },{
          content: `<span class="h2">Item 13</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 14</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 15</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 16</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 17</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 18</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 19</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 20</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 21</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 22</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
        {
          content: `<span class="h2">Item 23</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
        },
 
      ],
      thumbnailCarouselItems: [
            {
                content: `<span class="h4">Carousel Item 1</span><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>`
            },
            {
                content: '<img src="https://place-hold.it/500x300"/>'
            },
            {
                content: '<img src="https://place-hold.it/500x300"/>'
            },
            {
                content: '<img src="https://place-hold.it/500x300"/>'
            },
            {
                content: '<img src="https://place-hold.it/500x300"/>'
            },
            {
                content: '<img src="https://place-hold.it/500x300"/>'
            },
    
        ],
        thumbnails: [
            {
                src: 'https://place-hold.it/111x74'
            },
            {
                src: 'https://place-hold.it/111x74'
            },
            {
                src: 'https://place-hold.it/50x74'
            },
            {
                src: 'https://place-hold.it/60x74'
            }, 
            {
                src: 'https://place-hold.it/111x74'
            },
            {
                src: 'https://place-hold.it/111x74'
            },
        ]
    }
  }
}
</script>