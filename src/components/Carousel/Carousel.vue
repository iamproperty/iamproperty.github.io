<template>
  <div class="container carousel" :id="'carousel'+id" ref="wrapper" :data-cols="cols" :data-sm-cols="smCols" :data-md-cols="mdCols">
    <slot><!-- Use for titles etc --></slot>
    <div class="carousel__wrapper">
      <div class="carousel__inner">

        <div v-if="type == 'card'" :class="`row row-cols-${cols} row-cols-sm-${smCols} row-cols-md-${mdCols} ${gap ? `g-${gap}`: ``}`">
          <div :class="`col carousel__item${colClass?` ${colClass}`:''}`" v-for="(value,index) in items" :key="index" :id="'carousel'+id+'slide'+(index+1)">
            <Card v-bind="value" :class="cardClass" :type="cardType" :btnType="btnType" :titleClass="titleClass" :ctaText="ctaText" :hideCtaText="hideCtaText"></Card>
          </div>
        </div>
        <div v-if="type != 'card'" :class="`row row-cols-${cols} row-cols-sm-${smCols} row-cols-md-${mdCols} ${gap ? `g-${gap}`: ``}`">
          <div :class="`col carousel__item${colClass?` ${colClass}`:''}`" v-for="(value,index) in items" :key="index" v-html="content(value)" :id="'carousel'+id+'slide'+(index+1)"></div>
        </div>
        
      </div>

      <div :class="`carousel__controls cols-${cols} cols-sm-${smCols} cols-md-${mdCols}`">
        <a v-for="(value,index) in items" :key="index" :href="'\#carousel'+id+'slide'+(index+1)" :class="`control-${index+1}`">Slide {{index+1}}</a>
      </div>
      <button class="btn btn-prev" data-go="0" disabled>Prev</button>
      <button class="btn btn-next" data-go="2">Next</button>
    </div>
  </div>
</template>


<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/carousel.scss";
</style>


<script>
import Card from '../Card/Card.vue'
import CardDeck from '../CardDeck/CardDeck.vue'
import carousel from '../../../assets/js/modules/carousel.js'

// Inherit the card deck props
let cardDeckProps = CardDeck.props;
// Update the default values
cardDeckProps.gap.default = 0
cardDeckProps.cols.default = 1
cardDeckProps.smCols.default = 2
cardDeckProps.mdCols.default = 4


export default {
  components: {
    Card
  },
  name: 'Carousel',
  data () {
    return {
      id: null
    }
  },
  props: {
    ...cardDeckProps,
    colClass: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    }
  },
  computed: {
    content (){
      return (value) => {
        return `${value.image ? `<img src="${value.image}" alt="" />` : ''}${value.content?value.content:''}`;
      }
    }
  },
  mounted(){

    this.id = this._uid

    this.$nextTick(function () {
      
      carousel(this.$refs.wrapper);
    })
  }
}
</script>
