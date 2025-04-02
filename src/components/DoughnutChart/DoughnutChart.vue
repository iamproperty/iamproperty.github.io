<template>
  <iam-doughnutchart>
    <slot></slot>
  </iam-doughnutchart>
</template>

<script>
  export default {
    name: 'Doughnutchart',
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/doughnutchart/doughnutchart.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-doughnutchart`))
              window.customElements.define(`iam-doughnutchart`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
