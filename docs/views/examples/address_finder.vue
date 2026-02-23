<script lang="ts" setup>


  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';
</script>

<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/examples">Examples</a></li>
      </ul>
      <h1>Address lookup</h1>
    </div>
    <form class="d-block">
      <STDAddressLookup data-address-unknown="address-unknown" data-address-unknown-checked></STDAddressLookup>
      <button class="btn btn-primary">Submit form</button>
    </form>
  </main>
</template>