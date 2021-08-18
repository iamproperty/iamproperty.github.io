<template>
  <main>
    <div class="container">
      <h1>Logos</h1>
      <p class="strapline">All iamproperty brands and products are united by sharing the same Tone of Voice and visual identity.</p>
      <p>Our brand logos should always be added using SVG files to ensure the logo is sharp and crisp on all devices. We have created a SVG sprite file which holds all of the brand logos ready to use.</p>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4 mb-5">
          <Logo data-test="test1"></Logo>
        </div>
        <div class="col-sm-6 col-md-4 mb-5">
          <Logo id="sold"></Logo>
        </div>
        <div class="col-sm-6 col-md-4 mb-5">
          <Logo id="medwaylaw"></Logo>
        </div>
      </div>
    </div>
    <div class="container visualtest">
      <h2>Extended logos</h2>
      <div class="row">
        <div class="col-sm-6 col-md-4 mb-5">
          <Logo id="compliance"></Logo>
        </div>
        <div class="col-sm-6 col-md-4 mb-5">
          <Logo id="movebutler"></Logo>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Logos with a description</h2>
      <p>Logos can be extended with some descriptive text to the right. This text will appear to the right inside of a span with no text wrapping. It is recommened that this text is kept brief and a break line element should be added to create two lines.</p>
    </div>
    <div class="container visualtest">
      <Logo id="property" desc="the founders<br>of iamsold"></Logo>
    </div>
    <div class="container mt-5 mb-3">
      <h2>Modify the logo</h2>
      <p>A logo can be modified with bootstrap utility classes, below is an exmple of how it could be changed:</p>
      <ul>
        <li><strong>.bg-primary</strong> add a background colour to the logo</li>
        <li><strong>.text-secondary</strong> updates the colour of the logo</li>
        <li><strong>.p-5</strong> adds padding to the logo</li>
        <li><strong>.mb-5</strong> adds a margin to the bottom of the logo</li>
      </ul>
    </div>
    <div class="container visualtest">
      <Logo id="property" desc="the founders<br>of iamsold" class="bg-primary p-5 text-secondary mb-5"></Logo>
    </div>
    <div class="container">
      <p>The size of the logo can only be updated through CSS by updating the font-size of the <strong>.brand</strong> element. By default the size is set to 64px making the height of the SVG 64px and the width is then set to a relative size.</p>
    </div>
    <div class="container">
      <h2>HTML code example</h2>
      <pre v-highlightjs><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Vue Logo component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Logo from '@/foundations/Logo/Logo.vue'
import Readme from '@/foundations/Logo/README.md'

export default {
  components: {
    Logo,
    Readme
  },
  data () {
    return {
      htmlUsage: `<div class="brand brand--property">
  <svg>
    <title>iam property</title>
    <use xlink:href="./assets/svg/logo.svg#logo-property"></use>
  </svg>
  <span>the founders<br>of iamsold</span>
</div>`
    }
  }
}
</script>
