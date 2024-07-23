<template>
  <!-- Custom element -->
  <iam-carousel :data-thumbnails="JSON.stringify(thumbnails)">
    
    <slot></slot>
  </iam-carousel>
</template>

<script>
// Load web components

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    thumbnails: {
      type: Array, 
      default: () => []
    }
  },
  mounted(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/carousel/carousel.component.min.js`).then(module => {

        if (!window.customElements.get(`iam-carousel`))
          window.customElements.define(`iam-carousel`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
