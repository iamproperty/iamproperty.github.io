<script setup lang="ts">
  import Card from '@/components/Card/Card.vue';
  import {getStatusColour,getStatusTitle} from '../utils/status.ts';

  const props = defineProps(['item'])
</script>
<template>
  <Card>
    {{ item.title }}
    <span v-if="item.content" v-html="item.content"></span>
    <br v-if="item.jira" />
    <a v-if="item.jira" slot="footer" :href="`https://iamproperty.atlassian.net/browse/${item.jira}`" :title="`View the jira user story ${item.jira} which tracks this components lifecycle`" class="mb-0 me-2" target="_blank">{{item.jira}}</a>
    <span v-if="item.status" slot="footer" class="badge" :class="getStatusColour(item.status)">{{ getStatusTitle(item.status) }}</span>
    <span v-if="item.ver" slot="footer" class="badge" >Since {{ item.ver }}</span>
  </Card>
</template>
<style scoped>
iam-card a[slot="footer"] {
  font-size: 0.8rem;
  line-height: 1em;
  min-height: 1em;
  margin-bottom: 0.2rem !important;
}
</style>