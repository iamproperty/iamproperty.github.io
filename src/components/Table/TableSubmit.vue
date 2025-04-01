<template>
  <iam-table-submit>
    <slot name="before"></slot>
    <slot></slot>
  </iam-table-submit>
</template>

<script>
  import { ucfirst, unsnake } from '../../helpers/strings';

  export default {
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/table-submit/table-submit.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-table-submit`))
              window.customElements.define(`iam-table-submit`, module.default);
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
    },
  };
</script>
