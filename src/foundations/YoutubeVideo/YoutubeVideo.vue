<template>
  <div class="youtube-embed ratio ratio-16x9" ref="wrapper">
      <a :href="`https://www.youtube.com/watch?v=${video}`" target="_blank" title="Investments Video" :data-id="video">
        <img :src="`https://img.youtube.com/vi/${video}/maxresdefault.jpg`" alt="">
        <span class="btn btn-secondary">Play Video</span>
      </a>
  </div>
</template>
<script>
import youtubeVideo from '../../../assets/ts/modules/youtubevideo'

export default {
  name: 'YoutuveVideo',
  props: {
    video: {
      type: String,
      required: true
    }
  },
  mounted(){
    new youtubeVideo(this.$refs.wrapper);
  }
}
</script>
