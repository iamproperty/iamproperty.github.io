<template>
  <div class="vendor-table">
    <table>
      <thead>
        <tr>
          <th :key="value.key" v-for="(value) in fields">{{ cellHeading(value.key) }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(value,index) in items">
          <td :key="cellIndex" v-for="(cellValue,cellIndex) in value" v-html="cellValue" :data-label="cellHeading(cellIndex)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ucwords, unsnake } from '../../helpers/strings'

export default {
  name: 'VendorTable',
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    small: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    cellHeading () {
      return (heading) => {
        return `${ucwords(unsnake(heading))}`
      }
    }
  }
}
</script>
