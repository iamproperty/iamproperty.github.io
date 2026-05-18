<script setup lang="ts">
  import Card from '@/components/Card/Card.vue';
  import {getStatusColour,getStatusTitle} from '../utils/status.ts';

  const props = defineProps(['item'])
</script>
<template>
  <Card>
    {{ item.title }}
    <span v-if="item.content" v-html="item.content"></span>
    <span v-if="item.status" slot="footer" class="badge" :class="getStatusColour(item.status)">{{ getStatusTitle(item.status) }}</span>
    <span v-if="item.ver" slot="footer" class="badge" >Since {{ item.ver }}</span>
  </Card>
</template>
