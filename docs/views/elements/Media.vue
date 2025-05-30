<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/elements">Elements</a></li>
      </ul>
      <h1>Media (Beta)</h1>
      <p class="strapline">
        Images and other media elements are used widely across the digital estate in variety of components.
      </p>
      <p>
        By default an image will be 100% width of its container with a height set to auto. But images and other media
        elements can be combined with
        <a href="https://getbootstrap.com/docs/5.0/helpers/ratio/" target="_blank">bootstrap ratio elements</a>
        by wrapping it with a div with the class of <strong>.ratio</strong>.
      </p>
    </div>

    <div class="container visualtest">
      <h2>Images</h2>
      <div class="row">
        <div class="col-6 col-sm-4 col-md-3 mb-4">
          <h3 class="h5">Default Image</h3>
          <img src="/code.jpeg" alt="" />
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-4" v-for="(ratio, name) in $shared.aspectRatios" :key="name">
          <h3 class="h5">{{ name }} ratio image</h3>
          <div :class="`ratio ratio-${name}`">
            <img src="/code.jpeg" alt="" />
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-3 mb-4">
          <h3 class="h5">Circle image</h3>
          <div :class="`border-0 circle`">
            <img src="/code.jpeg" alt="" />
          </div>
          <p class="small">
            <strong>Note: </strong>The circles height and width are dictated by the font-size set on the circle element.
          </p>
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h2>Videos</h2>

      <div class="row">
        <div class="col-6 col-sm-4 col-md-3 mb-4">
          
          <a href="https://www.youtube.com/watch?v=lROFZaJcVug" class="text-decoration-none youtube-link" data-youtube="lROFZaJcVug"><img src="/img/thumbnail.png" alt="" /></a>
          
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-4">
          
          <a href="https://vimeo.com/946718698" class="text-decoration-none vimeo-link" data-vimeo="946718698"><img src="/img/thumbnail.png" alt="" /></a>
          
        </div>
      </div>
      <p>
        Videos can be added to the site via the
        <a href="/cards/video-card">Video card component</a>.
      </p>
    </div>
  </main>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        htmlUsage: `<div class="youtube-embed ratio ratio-16x9 mb-5">
  <a href="https://www.youtube.com/watch?v=lROFZaJcVug" target="_blank" title="Investments Video" data-id="lROFZaJcVug">
    <img src="https://img.youtube.com/vi/lROFZaJcVug/maxresdefault.jpg" alt="" />
    <span class="btn btn-secondary">Play Video</span>
  </a>
</div>`,
      };
    },
  };
</script>
