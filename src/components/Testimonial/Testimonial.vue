<template>
  <div class="container testimonial mb-5" data-show="1" ref="wrapper">
    <div :class="'bg-'+background">
      <div class="row">
        <div class="col-md-5 position-relative">
          <div class="testimonial__images">
            <img v-for="(value,index) in items" :key="index" :src="value.image ? value.image : 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='" alt="" :class="'h-100 w-100 object-cover' + (value.image ? '' : ' opacity-0')" />
          </div>
          <div class="testimonial__controls">
            <button data-go="0" disabled class="btn-prev">Previous</button>
            <button data-go="2" class="btn-next">Next</button>
          </div>
        </div>
        <div class="col-md-7">
          <h2>What our customers think…</h2>
          <div class="testimonial__content">

            <blockquote v-for="(value,index) in items" :key="index" :class="value.class">
              <div v-html="value.quote"></div>
              <cite v-html="value.cite"></cite>
            </blockquote>
          </div>
          <div class="testimonial__after">
            <slot></slot>
          </div>
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
    },
    background: {
      type: String,
      default: 'light',
      required: false
    }
  },
  mounted(){

    testimonial(this.$refs.wrapper);

  }
}
</script>
