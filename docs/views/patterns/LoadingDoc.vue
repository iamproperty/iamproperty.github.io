<script setup>
  import DSHeader from '../DSHeader.vue';
  import Nav from '@/components/Nav/Nav.vue';
  import BranchSelector from '@/components/BranchSelector/BranchSelector.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
</script>

<template>
  <main>
    <DSHeader section="patterns">
      <h1>Loading states</h1>
    </DSHeader>

    <img src="/one-insights-loader.svg?url" alt="Loading insights" class="mx-auto" height="160" width="160" />

  </main>
</template>
