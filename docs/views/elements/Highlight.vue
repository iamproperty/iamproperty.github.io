<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';


</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Highlight (Beta)</h1>
    </DSHeader>
    <p class="lead">Highlight a piece of content so that attention is drawn to it; useful for promos, adds or important stats.</p>

    <div class="bg-warning highlight ">
      <span class="h4 pb-0">19 days</span>
      <p>Current Skipton council local authority search times</p>
    </div>

    <div class="highlight bg-success gradient-primary gradient-direction-angle">
      <p>£20 in Love2shop vouchers per Premium Conveyancing instruction</p>
      <img src="/img/illustrations/branch.png" alt="" loading="lazy">
    </div>


    <div class="highlight highlight--raised bg-info text-center md-col-end-3">
      <strong class="d-block">Minimum time saved</strong>
      <small class="x-small d-block pb-1">by using Premium Conveyancing</small>
      <span class="h3 d-block">25 days</span>
    </div>


  </main>
</template>
