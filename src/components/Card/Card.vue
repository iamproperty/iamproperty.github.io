<template>
  <iam-card>
    <slot></slot>
  </iam-card>
</template>

<script>
import iamCard from '../../../assets/ts/components/card/card.component'

export default {
  name: 'Card',
  created(){

    this.$nextTick(function () {
      
      if (!window.customElements.get('iam-card'))
        window.customElements.define('iam-card', iamCard);
    })
  }
}
</script>
