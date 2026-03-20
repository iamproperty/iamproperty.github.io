<script setup>
  import Header from '@/components/Header/Header.vue';
  import Video from '@/components/Video/Video.vue';

</script>

<template>
  <main>
    <Header>
      <ul class="breadcrumbs mb-1">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Video (Beta)</h1>
    </Header>

    <Video id="video" data-youtube="lROFZaJcVug"></Video>
    <Video id="video2" data-vimeo="1028915961"></Video>
  </main>
</template>
