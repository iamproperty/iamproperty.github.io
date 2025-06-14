<template>
  <!-- Custom element -->
  <iam-calendar>
    <slot></slot>
  </iam-calendar>
</template>

<script>
  // Load web components

  export default {
    name: 'Calendar',
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/calendar/calendar.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-calendar`))
              window.customElements.define(`iam-calendar`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
