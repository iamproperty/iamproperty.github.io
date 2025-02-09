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
