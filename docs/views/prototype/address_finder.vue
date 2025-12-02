<script lang="ts" setup>


  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';
</script>

<template>
  <form class="d-block pt-5">
    <STDAddressLookup data-county-required="" data-country-required=""></STDAddressLookup>
    <button class="btn btn-primary">Submit form</button>
  </form>
</template>