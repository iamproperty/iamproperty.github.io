<script setup lang="ts">
  import iamCollapsibleSideMenu from '../../../assets/js/components/collapsible-side/collapsible-side.component.js';

  if (!window.customElements.get('iam-collapsible-side'))
    window.customElements.define('iam-collapsible-side', iamCollapsibleSideMenu);
</script>

<template>
  <iam-collapsible-side>
    <slot></slot>
  </iam-collapsible-side>
</template>
