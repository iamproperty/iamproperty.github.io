<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/elements">Elements</a></li>
      </ul>
      <h1>Media (Beta)</h1>
      <p class="strapline">Images and other media elements are used widely across the digital estate in variety of components.</p>
      <p>By default an image will be 100% width of its container with a height set to auto. But images and other media elements can be combined with <a href="https://getbootstrap.com/docs/5.0/helpers/ratio/" target="_blank">bootstrap ratio elements</a> by wrapping it with a div with the class of <strong>.ratio</strong>.</p>
    </div>

    <div class="container visualtest">
      <h2>Images</h2>
      <div class="row">
        <div class="col-6 col-sm-4 col-md-3 mb-4">

          <h3 class="h5">Default Image</h3>
          <img src="/code.jpeg" alt="" />
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-4" v-for="(ratio, name) in $shared.aspectRatios" :key="name">

          <h3 class="h5">{{name}} ratio image</h3>
          <div :class="`ratio ratio-${name}`">
            <img src="/code.jpeg" alt="" />
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-3 mb-4" >

          <h3 class="h5">Circle image</h3>
          <div :class="`border-0 circle`">
            <img src="/code.jpeg" alt="" />
          </div>
          <p class="small"><strong>Note: </strong>The circles height and width are dictated by the font-size set on the circle element.</p>
        </div>

      </div>
    </div>

    <div class="container pb-0">

      <h2>YouTube video</h2>

      <p>Videos can be added to the site in two ways; as a component on the page with a preview image (from youTube), or they via a <a href="/components/modal">modal component</a>.</p>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="col-12 col-sm-6">
          <YoutubeVideo video="lROFZaJcVug" class="mb-5"></YoutubeVideo>
        </div>
      </div>
    </div>




    <div class="container">
      <h2>YouTube video HTML code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Vue YoutubeVideo component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import YoutubeVideo from '@/foundations/YoutubeVideo/YoutubeVideo.vue'
import Readme from '@/foundations/YoutubeVideo/README.md'

export default {
  components: {
    YoutubeVideo,
    Readme
  },
  data () {
    return {
      htmlUsage: `<div class="youtube-embed ratio ratio-16x9 mb-5">
  <a href="https://www.youtube.com/watch?v=lROFZaJcVug" target="_blank" title="Investments Video" data-id="lROFZaJcVug">
    <img src="https://img.youtube.com/vi/lROFZaJcVug/maxresdefault.jpg" alt="" />
    <span class="btn btn-secondary">Play Video</span>
  </a>
</div>`
    }
  }
}
</script>
