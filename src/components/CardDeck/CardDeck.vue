<template>
  <div class="container">
      <slot></slot>
      <div :class="`row row-cols-${cols} row-cols-sm-${smCols} row-cols-md-${mdCols} ${gap ? `g-${gap}`: ``}`">
        <div class="col" v-for="(value,index) in items" :key="index">
          <Card :title="value.title" :content="value.content" :link="value.link" :type="cardType"></Card>
        </div>
      </div>
      <slot name="after"></slot>
  </div>
</template>

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
    smCols: {
      type: Number,
      required: false,
      default: 1
    },
    mdCols: {
      type: Number,
      required: false,
      default: 3
    },
    gap: {
      type: Number,
      required: false,
      default: 4
    },
    cardType: {
      type: String,
      required: false
    }
  }
}
</script>
