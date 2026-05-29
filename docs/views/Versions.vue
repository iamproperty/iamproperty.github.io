<script setup>
  import { useSlots } from 'vue';
  import { useRoute } from 'vue-router'
  
  const route = useRoute();
  const slots = useSlots();
  const props = defineProps(['pdf']);
</script>

<template>
  <div class="bg-light version-control mb-0">
    <div class="container">
      <slot></slot>
      <a v-if="route.meta.jira" :href="`https://iamproperty.atlassian.net/browse/${route.meta.jira}`" :title="`Open Jira ticket ${route.meta.jira}`" target="_blank">See Jira ticket</a>
      <a :href="props.pdf" download>Download latest designs</a>
    </div>
  </div>
</template>
