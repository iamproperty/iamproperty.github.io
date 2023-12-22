<template>
  <!-- Custom element -->
  <iam-carousel>
    
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
    }
  },
  mounted(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/carousel/carousel.component${import.meta.env.DEV == "development" ? '.min' : ''}.js`).then(module => {

        if (!window.customElements.get(`iam-carousel`))
          window.customElements.define(`iam-carousel`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
