<template>
  <iam-table-basic>
    <slot name="before"></slot>
    <slot></slot>
  </iam-table-basic>
</template>

<script>
  import { ucfirst, unsnake } from '../../helpers/strings';

  export default {
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/table-basic/table-basic.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-table-basic`)) window.customElements.define(`iam-table-basic`, module.default);
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
