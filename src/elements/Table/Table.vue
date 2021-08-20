<template>
  <div class="table__wrapper" ref="wrapper" :data-sortBy="sortBy">
    <table>
      <thead v-if="fields">
        <tr>
          <th v-for="(field) in fields" :key="field.key" :data-sortable="field.sortable" >{{ cellHeading(field.key) }}</th>
        </tr>
      </thead>
      <tbody v-if="items">
        <tr v-for="(value,index) in items" :key="index">
          <td :key="cellIndex" v-for="(cellValue,cellIndex) in value" v-html="cellValue" :data-label="cellHeading(cellIndex)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ucfirst, unsnake } from '../../helpers/strings'
import table from '../../../assets/js/modules/table.js'

export default {
  name: 'Table',
  props: {
    sortBy: {
      type: String,
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
    }
  },
  mounted(){

    console.log(this.$el)

    let advancedTable = new table(this.$el);
  }
}
</script>
