<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import TagUsage from '../TagUsage.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Spinner (Beta)</h1>
    </DSHeader>

    <span class="spinner"></span>
  </main>
</template>
