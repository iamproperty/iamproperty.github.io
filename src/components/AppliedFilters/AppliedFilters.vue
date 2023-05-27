<template>
  <!-- Custom element -->
  <iam-applied-filters>
    <slot></slot>
  </iam-applied-filters>
</template>

<script>
// Load web components
import iamAppliedFilters from '../../../assets/ts/components/applied-filters/applied-filters.component'

// Register components
if (!window.customElements.get('iam-applied-filters'))
  window.customElements.define('iam-applied-filters', iamAppliedFilters);


export default {
  name: 'Header'
}
</script>
