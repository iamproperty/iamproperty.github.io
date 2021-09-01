<template>
  <div class="container testimonial mb-5">
    <div class="bg-light">
      <div class="row">
        <div class="col-sm-4">
          <div v-for="(value,index) in items" :key="index">
            <img :src="value.image" alt="" />
          </div>
        </div>
        <div class="col-sm-7 col-md-6 pt-5 pb-4 px-2">
          <h2>What our customers think…</h2>
          <blockquote v-for="(value,index) in items" :key="index">
            <div v-html="value.quote"></div>
            <cite v-html="value.cite"></cite>
          </blockquote>
          <slot></slot>
        </div>
      </div>
      <span class="circle circle--dots d-none d-md-block"></span>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/testimonial.scss";
</style>

<script>
export default {
  name: 'Testimonial',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
