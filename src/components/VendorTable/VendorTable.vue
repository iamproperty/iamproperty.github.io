<template>
  <div class="vendor-table">
    <b-table stacked="sm" :small="small" :items="items" :fields="fields">
      <template #cell()="data">
        <span v-html="data.value"></span>
      </template>
    </b-table>
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
<style lang="scss">

  .vendor-table {
    font-size: 1.4rem;

    .table {
      thead {
        background-color: #f7f7f7;
        text-transform: lowercase;
        div::first-letter {
          text-transform: uppercase;
        }
      }
      tbody {
        background-color: #f4f4f4;
      }
    }
  }
</style>
