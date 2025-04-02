<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/examples">Examples</a></li>
      </ul>
      <h1>Stats carousel</h1>
      <p>...</p>
    </div>

    <Carousel
      class="hide-btns bg-dark"
      :items="items"
      :smcols="2"
      :mdcols="4"
      colclass="text-center align-items-center"
    ></Carousel>

    <div class="container">
      <h2>Vue code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>
  </main>
</template>

<script>
  import Carousel from '@/components/Carousel/Carousel.vue';

  export default {
    components: {
      Carousel,
    },
    data() {
      return {
        htmlUsage: `<Carousel class="hide-controls" :items="items" :smCols="3" :mdCols="5" colClass="align-items-center"></Carousel>`,
        items: [
          {
            content: `<span class="stat">3,886</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>`,
          },
          {
            content: `<span class="stat">60%</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>`,
          },
          {
            content: `<span class="stat">£10,000</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>`,
          },
          {
            content: `<span class="stat">93.5%</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>`,
          },
        ],
      };
    },
  };
</script>
