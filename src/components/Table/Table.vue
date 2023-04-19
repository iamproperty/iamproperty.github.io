<template>
  <div class="table__wrapper" ref="wrapper" :data-sortby="sortby" :data-sort="sort" :data-show="show" :data-page="page" :data-reorder="reorder">
    <table>
      <thead v-if="fields">
        <tr :class="headingclass">
          <th v-for="(field) in fields" :key="field.key" :data-sortable="field.sortable" :data-filterable="field.filterable">{{ cellHeading(field.key) }}</th>
        </tr>
      </thead>
      <tbody v-if="items">
        <tr v-for="(value,index) in items" :key="index" :data-row-id="value['rowid']">
          <td :key="cellIndex" v-for="(cellValue,cellIndex) in Object.fromEntries(Object.entries(value).filter(([key]) => key !== 'rowid'))" v-html="cellValue" :data-label="cellHeading(cellIndex)" :data-numeric="numericValue(cellValue)"></td>
        </tr>
      </tbody>
    </table>
    <slot></slot>
  </div>
</template>

<script>
import { ucfirst, unsnake } from '../../helpers/strings'
import table from '../../../assets/js/modules/table.js'

let numericValue = function(value) {

  if(typeof(value) != "string")
    return value;

  value = value.replace('£','')
  value = value.replace('%','')

  if (Number.isNaN(Number.parseFloat(value))) {
    return 0;
  }

  return Number.parseFloat(value)
}

export default {
  name: 'Table',
  props: {
    reorder: {
      type: Boolean,
      required: false
    },
    page: {
      type: Number,
      required: false
    },
    show: {
      type: Number,
      required: false
    },
    sortby: {
      type: String,
      required: false
    },
    sort: {
      type: String,
      required: false
    },
    headingclass: {
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

      table(this.$refs.wrapper);

      // Listen for the event.
      this.$el.addEventListener('sorted', function (e) {

        console.log('Table sorted')
      }, false);

      this.$el.addEventListener('filtered', function (e) {

        console.log('Table filtered')
      }, false);

    })
  },
  updated(){
    this.$nextTick(function () {

      // If the data gets updated we may need to recreate the tbody as it get detached when sorted in the table.js
      let tbody = this.$refs.wrapper.querySelector('tbody');

      let tbodyHTML = '';
      this.items.forEach((row, index) => {

        let rowID = row['rowid'] ? row['rowid'] : '';
        row = Object.fromEntries(Object.entries(row).filter(([key]) => key !== 'rowid'));

        tbodyHTML += `<tr data-row-id="${rowID}">${ Object.keys(row).map(col =>  `<td data-label="${ucfirst(unsnake(col))}" data-numeric="${numericValue(row[col])}">${row[col]}</td>` ).join("") }</tr>`;
      });
      tbody.innerHTML = tbodyHTML;

      // Tell the framework that the table has been filtered so that it can re-sort it etc
      const updatedEvent = new Event('filtered');
      this.$refs.wrapper.dispatchEvent(updatedEvent);
    })
  }
}
</script>
