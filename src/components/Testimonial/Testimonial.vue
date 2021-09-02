<template>
  <div class="container testimonial mb-5" data-show="1" ref="wrapper">
    <div class="bg-light">
      <div class="row">
        <div class="col-sm-4 position-relative">
          <div class="testimonial__images">
            <img v-for="(value,index) in items" :key="index" :src="value.image" alt="" class="h-100 w-100 object-cover" />
          </div>
          <div class="testimonial__controls">
            <button data-go="0" disabled class="testimonial__prev">Previous</button>
            <button data-go="2" class="testimonial__next">Next</button>
          </div>
        </div>
        <div class="col-sm-7 col-md-6 pb-4 px-2">
          <h2>What our customers think…</h2>
          <div class="testimonial__content">

            <blockquote v-for="(value,index) in items" :key="index">
              <div v-html="value.quote"></div>
              <cite v-html="value.cite"></cite>
            </blockquote>
          </div>
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
import testimonial from '../../../assets/js/modules/testimonial.js'


export default {
  name: 'Testimonial',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  mounted(){

    testimonial(this.$refs.wrapper);

  }
}
</script>
