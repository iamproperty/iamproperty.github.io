<script setup>
  import { safeID } from '../../helpers/strings.js';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    badge: {
      type: [Number, String],
      required: false,
    },
    badgecolour: {
      type: String,
      required: false,
      default: 'light',
    },
    lazy: {
      type: Boolean,
      required: false,
    }
  });

  const createID = function(title) {
    
    return `${safeID(title)}`;
  }

</script>
<template>
  <details :id="createID(title)">
    <summary>
      {{ title }}<span v-if="badge" :class="`badge bg-${badgecolour}`">{{ badge }}</span>
    </summary>
    <slot></slot>
  </details>
</template>
