<script setup>
  import Header from '@/components/Header/Header.vue';
  const props = defineProps({
    image: {
      type: String,
      required: false,
    },
    section: {
      type: String,
      default: 'foundations',
      required: false,
    },
  });
</script>

<template>
  
  <Header>
    
    <slot></slot>
    
  </Header>
</template>
