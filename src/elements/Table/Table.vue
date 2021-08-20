<template>
  <div class="table__wrapper">
    <table>
      <thead v-if="fields">
        <tr>
          <th v-for="(field) in fields" :key="field.key">{{ cellHeading(field.key) }}</th>
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

export default {
  name: 'Table',
  props: {
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
  }
}
</script>
