<template>
  <div class="table__wrapper" ref="wrapper" :data-sortBy="sortBy" :data-sort="sort" :data-show="show" :data-page="page" :data-reorder="reorder">
    <table>
      <thead v-if="fields">
        <tr>
          <th v-for="(field) in fields" :key="field.key" :data-sortable="field.sortable" :data-filterable="field.filterable">{{ cellHeading(field.key) }}</th>
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
    sortBy: {
      type: String,
      required: false
    },
    sort: {
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
        tbodyHTML += `<tr>${ Object.keys(row).map(col =>  `<td data-label="${ucfirst(unsnake(col))}">${row[col]}</td>` ).join("") }</tr>`;
      });
      tbody.innerHTML = tbodyHTML;

      // Tell the framework that the table has been filtered so that it can re-sort it etc
      const updatedEvent = new Event('filtered');
      this.$refs.wrapper.dispatchEvent(updatedEvent);
    })
  }
}
</script>
