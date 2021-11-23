<template>
  <div class="container card-deck prevent-invert" :data-card-type="cardtype">
      <slot></slot>
      <div :class="`row row-cols-${cols} row-cols-sm-${smcols} row-cols-md-${mdcols} ${gap ? `g-${gap}`: ``}`">
        <div class="col" v-for="(value,index) in items" :key="index">
          <Card v-bind="value" :class="cardclass" :type="cardtype" :btntype="btntype" :titleclass="titleclass" :ctatext="ctatext" :hidectatext="hidectatext"></Card>
        </div>
      </div>
      <slot name="after"></slot>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/cardDeck.scss";
</style>

<script>
import Card from '../Card/Card.vue'

export default {
  components: {
    Card
  },
  name: 'CardDeck',
  props: {
    items: {
      type: Array,
      required: false
    },
    cols: {
      type: Number,
      required: false,
      default: 1
    },
    smcols: {
      type: Number,
      required: false,
      default: 1
    },
    mdcols: {
      type: Number,
      required: false,
      default: 3
    },
    gap: {
      type: Number,
      required: false,
      default: 4
    },
    cardtype: {
      type: String,
      required: false
    },
    cardclass: {
      type: String,
      required: false
    },
    btntype: {
      type: String,
      required: false
    },
    titleclass: {
      type: String,
      required: false
    },
    ctatext: {
      type: String,
      required: false
    },
    hidectatext: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
