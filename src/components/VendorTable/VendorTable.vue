<template>
  <div class="vendor-table">
    <table>
      <thead>
        <tr>
          <th :key="value.key" v-for="(value) in fields">{{ value.key.charAt(0).toUpperCase() + value.key.replaceAll("_"," ").slice(1) }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(value,index) in items">
          <td :key="cellIndex" v-for="(cellValue,cellIndex) in value" v-html="cellValue" :data-label="cellIndex.charAt(0).toUpperCase()+cellIndex.replaceAll('_',' ').slice(1)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
  }
}
</script>
