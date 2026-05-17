<script setup>
  import TrackEvents from '../TrackEvents.vue';
  import menuAnatomy from '../../img/menu-anatomy.png';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import IamButton from '@/components/Button/Button.vue';

  
</script>
<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Button (Beta)</h1>
    </DSHeader>
  
    <IamButton data-copy-text="/report2" title="/report2"><button class="btn btn-primary">copy report link</button></IamButton>
  </main>
</template>
