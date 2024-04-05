<template>
  <!-- Custom element -->
  <iam-marketing>
    
    <slot></slot>
  </iam-marketing>
</template>

<script>
// Load web components

export default {
  name: 'Marketing',
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
      
      import(`../../../assets/js/components/marketing/marketing.component.min.js`).then(module => {

        if (!window.customElements.get(`iam-marketing`))
          window.customElements.define(`iam-marketing`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
