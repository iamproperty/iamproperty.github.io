<script setup lang="ts">
import { ref } from 'vue'

import EpcChart from '@/components/EpcChart/EpcChart.vue';

const test = ref<string>('hello')
</script>


<template>
  <div>
    <h2>{{ test }}</h2>
    <EpcChart>
      <slot></slot>
    </EpcChart>
  </div>
</template>
