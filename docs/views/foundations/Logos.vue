<template>
  <main>
    <div class="container">
      <h1>Logos</h1>
      <p class="strapline">Logos should always created as SVGs to ensure the image is sharp and crisp on all devices.</p>
      <div class="row mb-5">
        <div class="col-sm-6 col-md-4">
          <Logo></Logo>
        </div>
        <div class="col-sm-6 col-md-4">
          <Logo id="sold"></Logo>
        </div>
        <div class="col-sm-6 col-md-4">
          <Logo id="medwaylaw"></Logo>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Extended logos</h2>
      <div class="row mb-5">
        <div class="col-sm-6 col-md-4">
          <Logo id="compliance"></Logo>
        </div>
        <div class="col-sm-6 col-md-4">
          <Logo id="movebutler"></Logo>
        </div>
      </div>
    </div>
    <div class="container mb-5">
      <h2>Logos with a description</h2>
      <Logo id="property" desc="the founders<br>of iamsold"></Logo>
    </div>
    <div class="container">
      <h2>How to add a logo</h2>

      <h3>With Vue JS</h3>
      <pre v-highlightjs><code class="javascript">{{vueUsage}}</code></pre>

      <h3>With static HTML</h3>
      <pre v-highlightjs><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
    <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Logo from '@/foundations/Logo/Logo.vue'
import Readme from '@/foundations/Logo/readme.md'

export default {
  components: {
    Logo,
    Readme
  },
  data () {
    return {
      vueUsage: '<Logo id="sold" desc="Description string"></Logo>',
      htmlUsage: `<div class="brand brand--property">
  <svg>
    <title>iam property</title>
    <use xlink:href="#logo-property"></use>
  </svg>
  <span>the founders<br>of iamsold</span>
</div>`
    }
  }
}
</script>
