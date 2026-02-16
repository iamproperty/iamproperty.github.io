<script setup lang="ts">
import { template } from '@babel/core';


</script>

<template>
  <main>
    <h1>Non-functional requirements</h1>
    <template v-for="(group, title) in $shared.nfrs" v-bind:key="title">
      <h2>{{ title }}</h2>
      <p v-for="nfr in group" v-bind:key="nfr.story">
      {{ nfr.story }}
      </p>
    </template>

  </main>
</template>
