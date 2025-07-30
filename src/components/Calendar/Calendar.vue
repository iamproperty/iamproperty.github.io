<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {

    import(`../../../assets/js/components/calendar/calendar.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-calendar`))
          window.customElements.define(`iam-calendar`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <!-- Custom element -->
  <iam-calendar>
    <slot></slot>
  </iam-calendar>
</template>


