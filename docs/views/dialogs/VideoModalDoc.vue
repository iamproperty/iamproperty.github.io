<script setup>
  import { onMounted } from 'vue';

  import VideoModal from '@/components/VideoModal/VideoModal.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Video Modal</h1>
    </DSHeader>

    <a href="https://www.youtube.com/watch?v=lROFZaJcVug" class="text-decoration-none youtube-link d-block" command="show-modal" commandfor="video"> <!-- TODO: move youtube-link class so it gets added via js-->
      <span class="ratio ratio-16x9"><img src="/img/thumbnail.png" alt=""></span>
    </a>
    <VideoModal id="video" data-youtube="lROFZaJcVug"></VideoModal>

    <a href="https://www.youtube.com/watch?v=lROFZaJcVug" class="text-decoration-none youtube-link d-block" command="show-modal" commandfor="video"> <!-- TODO: move youtube-link class so it gets added via js-->
      <span class="ratio ratio-16x9"><img src="/img/thumbnail.png" alt=""></span>
    </a>
    <VideoModal id="video2" data-vimedo="1028915961"></VideoModal>
    

  </main>
</template>

<style lang="scss">

</style>
