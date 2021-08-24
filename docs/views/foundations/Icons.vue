<template>
  <main>
    <div class="container pb-0">
      <h1>Icons</h1>
      <p>Our icons are created using SVG sprites to reduce the number network calls and improve the ease of use.</p>
    </div>
    <div class="container visualtest">
      <div class="row">

        <div class="col text-center mw-fit-content" v-for="(icon) in icons" :key="icon">
          <div :id="'icon-'+icon"><Icon :id="icon"></Icon></div>
          <span class="d-block">{{icon}}</span>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>How they are built</h2>
      <p>Our icons compromises of 3 parts; a background, the fill and then outline. Breaking the icon up gives us greater control of the colours and line thickness.</p>
      <div class="row">
        <div class="col mw-fit-content">
          <svg class="icon bg-primary">
            <use xlink:href="#icon-email-bg" class="icon__bg"></use>
          </svg>
        </div>
        <div class="col mw-fit-content">
          <svg class="icon">
            <use xlink:href="#icon-email-fill" class="icon__fill"></use>
          </svg>
        </div>
        <div class="col mw-fit-content">
          <svg class="icon">
            <use xlink:href="#icon-email-outline" class="icon__outline"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>
    <div class="container">
      <h2>Vue Icon component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Icon from '@/foundations/Icon/Icon.vue'
import Readme from '@/foundations/Icon/README.md'

export default {
  components: {
    Icon,
    Readme
  },
  data () {
    return {
      icons: ['email','pin','chat'],
      htmlUsage: `<svg class="icon">
  <title>Email</title>
  <use xlink:href="#icon-email-bg" class="icon__bg"></use>
  <use xlink:href="#icon-email-fill" class="icon__fill"></use>
  <use xlink:href="#icon-email-outline" class="icon__outline"></use>
</svg>`
    }
  }
}
</script>
