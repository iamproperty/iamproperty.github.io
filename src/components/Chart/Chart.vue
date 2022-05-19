<template>
  <div class="container" ref="wrapper">
    <slot></slot>
    <figure class="chart__wrapper" ref="chartWrapper">
      <figcaption v-html="caption"></figcaption>
    <div :class="`chart__key chart__key--${type} h5`" role="presentation">
      <div :key="index" v-for="(item,index) in fields" class="key">{{item.key}}</div>
    </div>

    <div :class="`chart chart--${type}`" ref="chart">
      
      <div class="chart__yaxis" role="presentation">
        <div :key="index" v-for="(point,index) in yaxis" :style="`--value: ${point.value};--percent:${((point.value-min)/(max-min))*100}%;`" class="axis__point">
          <span>{{point.display}}</span>
        </div>
      </div>
      <Table v-bind="$props">

        <div class="chart__guidelines" role="presentation">
          <div :key="index" v-for="(point,index) in yaxis" :data-value="point.value" :style="`--percent:${((point.value-min)/(max-min))*100}%;`" class="guideline">
          </div>
        </div>
        <span class="lines" v-if="type == 'line'"></span>
      </Table>
      <div class="pies" v-if="type == 'pie'"></div>
    </div>
    </figure>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/components/charts.scss";
</style>

<script>
import { ucfirst, unsnake } from '../../helpers/strings'
import Table from '@/elements/Table/Table.vue'
import chartModule from '../../../assets/js/modules/chart.js'

export default {
  name: 'Chart',  
  components: {
    Table
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'bar'
    },
    caption: {
      type: String,
      required: false
    },
    max: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    yaxis: {
      type: Array,
      required: false
    },
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  },
  mounted(){
    this.$nextTick(function () {

      // If the data gets updated we may need to recreate the tbody as it get detached when sorted in the table.js
      const min = this.min;
      const max = this.max - min;

      chartModule(this.$refs.chartWrapper, min, max, this.type);
    })
  }
}
</script>
