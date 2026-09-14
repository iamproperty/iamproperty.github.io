<script setup lang="ts">
  import Card from '@/components/Card/Card.vue';
  import { getStatusColour, getStatusTitle, getStatusDesc } from '../utils/status.ts';

  const props = defineProps(['item']);
  const preventCardClick = (el) => {
    console.log(el);
  };
</script>
<template>
  <Card>
    {{ item.title }}
    <small v-if="item.content" v-html="item.content" class="text-body"></small>

    <span
      v-if="item.status"
      slot="footer"
      class="badge"
      :class="getStatusColour(item.status)"
      :title="getStatusDesc(item.status)"
      @click.stop.prevent="preventCardClick(el)"
      >{{ getStatusTitle(item.status) }}</span
    >
    <span v-if="item.ver" slot="footer" class="badge">Since {{ item.ver }}</span>
    <a
      v-if="item.jira"
      slot="footer"
      :href="`https://iamproperty.atlassian.net/browse/${item.jira}`"
      :title="`View the jira user story ${item.jira} which tracks this components lifecycle`"
      class="mb-0 ms-1"
      target="_blank"
      >{{ item.jira }}</a
    >
  </Card>
</template>
<style scoped>
  iam-card a[slot='footer'] {
    font-size: 0.8rem;
    line-height: 1em;
    min-height: 1em;
    margin-bottom: 0.2rem !important;
  }
  iam-card .badge {
    cursor: help;
  }
</style>
