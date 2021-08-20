<template>
  <main>
    <div class="container pb-0">
      <h1>Advanced tables</h1>
      <p>-</p>
    </div>

    <div class="container visualtest">
      <Table :fields="sortable_fields" :items="items" sortBy="Job"></Table>
    </div>


    <div class="container">
      <h2>HTML code examples</h2>
      <pre v-highlightjs><code class="javascript">{{htmlUsage}}</code></pre>
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
      htmlUsage: ``,
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
      fields: [
        { key: 'name' },
        { key: 'job' },
        { key: 'address' },
        { key: 'emergency_contact' },
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
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        }
      ]
    }
  }
}
</script>