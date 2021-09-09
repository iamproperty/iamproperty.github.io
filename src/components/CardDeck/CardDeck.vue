<template>
  <div class="container card-deck prevent-invert" :data-card-type="cardType">
      <slot></slot>
      <div :class="`row row-cols-${cols} row-cols-sm-${smCols} row-cols-md-${mdCols} ${gap ? `g-${gap}`: ``}`">
        <div class="col" v-for="(value,index) in items" :key="index">
          <Card :title="value.title" :subTitle="value.subTitle" :content="value.content" :details="value.details" :link="value.link" :type="cardType" :btnType="btnType" :image="value.image" :titleClass="titleClass"></Card>
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
    },
    btnType: {
      type: String,
      required: false
    },
    titleClass: {
      type: String,
      required: false
    }
  }
}
</script>
