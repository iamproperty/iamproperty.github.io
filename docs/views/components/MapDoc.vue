<script setup>
  import TrackEvents from '../TrackEvents.vue';
  import menuAnatomy from '../../img/menu-anatomy.png';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import Menu from '@/components/Menu/Menu.vue';

  import { menu as events } from '../../events.js';
</script>
<template>
  <TrackEvents selector="iam-menu" :events="['open', 'closed']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Map</h1>
    </DSHeader>

    <p class="lead">Under construction</p>


  </main>
</template>

<style lang="scss" scoped>

</style>
