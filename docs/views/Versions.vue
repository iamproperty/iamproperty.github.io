<script setup>
import { useSlots } from 'vue';

const slots = useSlots()
const props = defineProps(['pdf']);


</script>

<template>
  <div class="bg-light version-control">
      <div class="container">
        <slot></slot>
        <a :href="props.pdf" download>Download latest designs</a>
      </div>
    </div>
</template>