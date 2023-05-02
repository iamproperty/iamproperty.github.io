<template>
  <iam-tabs ref="wrapper">
    <slot></slot>
  </iam-tabs>
</template>

<style lang="scss">
@import "../../../assets/sass/components/tabs.scss";
</style>

<script>
import iamTabs from '../../../assets/ts/components/tabs/tabs.component'

if (!window.customElements.get('iam-tabs'))
  window.customElements.define('iam-tabs', iamTabs);


export default {
  name: 'Tabs'
}
</script>
