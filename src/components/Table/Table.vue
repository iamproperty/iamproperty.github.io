<template>
  <iam-table >
    <table v-if="fields">
      <thead>
        <tr>
          <th v-for="(field) in fields" :key="field.key">{{ cellHeading(field.key) }}</th>
        </tr>
      </thead>
      <tbody v-if="items">
        <tr v-for="(value,index) in items" :key="index" :data-row-id="value['rowid']">
          <td :key="cellIndex" v-for="(cellValue,cellIndex) in Object.fromEntries(Object.entries(value).filter(([key]) => key !== 'rowid'))" v-html="cellValue"></td>
        </tr>
      </tbody>
    </table>
    <slot v-else></slot>
  </iam-table>
</template>

<script>
import iamTable from '../../../assets/js/components/table/table.component.js'
import { ucfirst, unsnake } from '../../helpers/strings'

export default {
  name: 'Table',
  props: {
    items: {
      type: Array,
      required: false
    },
    fields: {
      type: Array,
      required: false
    }
  },
  computed: {
    cellHeading () {
      return (heading) => {
        return `${ucfirst(unsnake(heading))}`
      }
    }
  },
  created(){

    this.$nextTick(function () {
      
      if (!window.customElements.get('iam-table'))
        window.customElements.define('iam-table', iamTable);
    })
  },
  updated(){
    
  }
}
</script>
