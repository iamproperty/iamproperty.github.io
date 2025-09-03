<script setup>
  import { onMounted } from 'vue';

  const component = 'filterlist';

  onMounted(() => {
    import(`../../../assets/js/components/${component}/${component}.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-${component}`))
          window.customElements.define(`iam-${component}`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <!-- Custom element -->
  <iam-filterlist>
    <slot></slot>
  </iam-filterlist>
</template>

<script>
  // Load web components
  import iamFilterlist from '../../../assets/js/components/filterlist/filterlist.component.min.js';

  // Register components
  if (!window.customElements.get('iam-filterlist')) window.customElements.define('iam-filterlist', iamFilterlist);

  export default {
    name: 'Filter list',
  };
</script>
