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


      <div class="table__wrapper">

      <table v-if="fields">
        <thead>
          <tr>
            <th v-for="(field) in fields" :key="field.key">{{ cellHeading(field.key) }}</th>
          </tr>
        </thead>
        <tbody v-if="items">
          <tr v-for="(value,index) in items" :key="index" :data-row-id="value['rowid']">
            <td :key="cellIndex" v-for="(cellValue,cellIndex) in Object.fromEntries(Object.entries(value).filter(([key]) => key !== 'rowid'))" v-html="cellValue" :data-label="cellHeading(cellIndex)" :data-numeric="numericValue(cellValue)"></td>
          </tr>
        </tbody>
      </table>

        <div class="chart__guidelines" role="presentation">
          <div :key="index" v-for="(point,index) in yaxis" :data-value="point.value" :style="`--percent:${((point.value-min)/(max-min))*100}%;`" class="guideline">
          </div>
        </div>
        <span class="lines" v-if="type == 'line'"></span>
      </div>
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
import chartModule from '../../../assets/ts/modules/chart'

let numericValue = function(value) {

  if(typeof(value) != "string")
    return value;

  value = value.replace('£','')
  value = value.replace('%','')

  if (Number.isNaN(Number.parseFloat(value))) {
    return 0;
  }

  return Number.parseFloat(value);
}

export default {
  name: 'Chart',
  components: {
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
  computed: {
    cellHeading () {
      return (heading) => {
        return `${ucfirst(unsnake(heading))}`
      }
    },
    numericValue () {
      return (value) => {

        value = numericValue(value);
        return value;
      }
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
