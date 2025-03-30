<template>
  <iam-table-ajax>
    <slot name="before"></slot>
    <slot></slot>
  </iam-table-ajax>
</template>

<script>
  import { ucfirst, unsnake } from '../../helpers/strings';

  export default {
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/table-ajax/table-ajax.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-table-ajax`)) window.customElements.define(`iam-table-ajax`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });

        import(`../../../assets/js/components/pagination/pagination.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-pagination`))
              window.customElements.define(`iam-pagination`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    }
  };
</script>
