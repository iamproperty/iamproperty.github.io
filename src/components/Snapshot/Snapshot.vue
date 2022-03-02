<template>
  <div class="container snapshot" ref="wrapper">
    <slot></slot>
    <div class="row">
    <div class="col" v-for="(value,index) in items" :key="index">

      <a :href="value.link" v-if="value.link">View {{value.title}}</a>
      <div :class="`snapshot__item ${value.bg ? 'bg-'+value.bg : ''}`">
        <span class="h6 snapshot__title">{{value.title}}</span>
        <span class="stat">{{value.number}}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/components/snapshot.scss";
</style>

<script>

export default {
  name: 'Snapshot',
  props: {
    items: {
      type: Array,
      required: true
    },
  }
}
</script>
