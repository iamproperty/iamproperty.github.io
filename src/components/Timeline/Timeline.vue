<template>
  <div class="timeline">
    <div class="timeline__content">
      <slot></slot>
    </div>
    <img v-if="image" :src="image" alt="" />
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/components/timeline.scss";
</style>

<script>
export default {
  name: 'Timeline',
  props: {
    image: {
      type: String,
      required: false
    }
  }
}
</script>
