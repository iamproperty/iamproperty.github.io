<template>
  <iam-table-draggable>
    <slot name="before"></slot>
    <slot></slot>
  </iam-table-draggable>
</template>

<script>
  import { ucfirst, unsnake } from '../../helpers/strings';

  export default {
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/table-draggable/table-draggable.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-table-draggable`))
              window.customElements.define(`iam-table-draggable`, module.default);
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
