<script lang="ts" setup>


  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';
</script>

<template>
  <form class="d-block pt-5">
    <STDAddressLookup data-address-unknown="address-unknown" data-address-unknown-checked></STDAddressLookup>
    <button class="btn btn-primary">Submit form</button>
  </form>
</template>