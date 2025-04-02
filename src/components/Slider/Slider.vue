<template>
  <iam-slider>
    <slot></slot>
  </iam-slider>
</template>

<script>
  export default {
    name: 'Slider',
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/slider/slider.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-slider`)) window.customElements.define(`iam-slider`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
