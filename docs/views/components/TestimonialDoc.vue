<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Testimonial</h1>
      <p>...</p>
    </div>
    
    <Testimonial :items="items">
      <a href="/buying-stories" class="btn">Buying stories</a>
      <a href="/selling-stories" class="btn">Selling stories</a>
    </Testimonial>

    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="language-html">{{htmlUsage}}</code></pre>
    </div>
    
    <div class="container">
      <h2>Vue Header component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Testimonial from '@/components/Testimonial/Testimonial.vue'
import Readme from '@/components/Testimonial/README.md'

export default {
  components: {
    Testimonial,
    Readme
  },
  data () {
    return {
      htmlUsage: ``,
      items: [
        {
          cite: 'Name goes here',
          quote: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`,
          image: require('../../assets/shutterstock_1229155495.webp')
        },
        {
          cite: 'Name goes here 2',
          quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>`,
          image: require('../../assets/code.jpeg')
        },
        {
          cite: 'Name goes here 3',
          quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>`,
          image: require('../../assets/shutterstock_1229155495.webp')
        }
      ]
    }
  }
}
</script>