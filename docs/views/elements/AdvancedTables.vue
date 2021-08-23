<template>
  <main>
    <div class="container pb-0">
      <h1>Advanced tables</h1>
      <p>Tables can be given extra functionality to help make the data easier to understand or process.</p>
      <h2>Sortable</h2>
      <p>Re-organise the data in the table in ascending or descending order.</p>
    </div>

    <div class="container visualtest">
      <Table :fields="sortable_fields" :items="items" sortBy="Job" sort="ascending" class="table-fullwidth"></Table>
    </div>


    <div class="container">
      <h3>Add data attribute to column</h3>
      <pre v-highlightjs><code class="javascript">{{htmlColumn}}</code></pre>
      <h3>Add data attribute to table</h3>
      <pre v-highlightjs><code class="javascript">{{htmlTable}}</code></pre>
    </div>



    <div class="container pb-0">
      <h2>Filter</h2>
      <p>-</p>
    </div>

    <div class="container visualtest">
      <Table :fields="filter_fields" :items="items" class="table-fullwidth"></Table>
    </div>



    <div class="container">
      <h2>Vue Table component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Table from '@/elements/Table/Table.vue'
import Readme from '@/elements/Table/README.md'
import * as helpers from '../../../assets/js/modules/helpers'

export default {
  components: {
    Table,
    Readme
  },
  mounted(){
    
    helpers.checkElements(document.querySelector('main'));
  },
  data () {
    return {
      htmlTable: `<th data-sortable="true">Name</th>`,
      htmlColumn: `<div data-sortby="Job" data-sort="ascending" class="table__wrapper table-fullwidth">`,
      sortable_fields: [
        { 
          key: 'name',
          sortable: true
        },
        { 
          key: 'job',
          sortable: true 
        },
        { key: 'address' },
        { 
          key: 'emergency_contact',
          sortable: true 
        },
        { key: 'actions' }
      ],
      items: [
        {
          name: 'Derrick',
          job: 'Electrician',
          address: '5 King Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Andrew2',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Rachel',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Rachel',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Richard',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Edward',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Sharon',
          job: 'Actor',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        }
      ],
      filter_fields: [
        { 
          key: 'name',
          filterable: true,
          sortable: true
        },
        { 
          key: 'job',
          filterable: true 
        },
        { key: 'address' },
        { 
          key: 'emergency_contact',
          filterable: true 
        },
        { key: 'actions' }
      ]
    }
  }
}
</script>