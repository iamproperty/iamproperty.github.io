<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">components</a></li>
      </ul>
      <h1>Tables</h1>
      <p>Used to arrange data into the tabular design; rows and columns. An HTML table is a great way to display things such as financial data, calendars, pricing, feature comparison, the nutrition facts information panel, bowling scores, and many other tabular data.</p>
    </div>

    <div class="container visualtest">


        <iam-table class="table--sticky table--minify">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Transaction address</th>
                <th>Onboarding status</th>
                <th>Risk level</th>
                <th>Due diligence</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              
            </tbody>
          </table>
        </iam-table>

    </div>



<!-- #region:old --> 
<!--
    <div class="container visualtest">
      <Table :fields="fields" :items="items"></Table>
    </div>

    <div class="container pb-0">
      <h2>Striped table</h2>
    </div>

    <div class="container visualtest">
      <Table :fields="fields" :items="items" class="table-striped"></Table>
    </div>

    <div class="container pb-0">
      <h2>Hoverable rows</h2>
    </div>

    <div class="container visualtest">
      <Table :fields="fields" :items="items" class="table-striped table-hover"></Table>
    </div>

    <div class="container pb-0 bg-dark pt-5">
      <h2>Tables on a dark background</h2>
    </div>

    <div class="container bg-dark visualtest mb-5 pb-5">
      <Table :fields="fields" :items="items" class="table-striped table-hover"></Table>
    </div>


    <div class="container">
      <h2>HTML code examples</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>


    <div class="container">
      <h2>Vue Table component reference</h2>
      <Readme></Readme>
    </div>




    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/elements">Elements</a></li>
      </ul>
      <h1>Advanced tables</h1>
      <p>Tables can be given extra functionality to help make the data easier to understand or process.</p>
      <ul>
        <li><a href="#sortable">Sortable</a></li>
        <li><a href="#filterable">Filterable</a></li>
        <li><a href="#pagination">Pagination</a></li>
        <li><a href="#reorderable">Reorderable</a></li>
      </ul>

      <h2 id="sortable">Sortable</h2>
      <p>Re-organise the data in the table in ascending or descending order.</p>
    </div>

    <div class="container visualtest">
      <Table :fields="sortable_fields" :items="items" sortby="Job" sort="ascending" class="table-fullwidth"></Table>
    </div>

    <div class="container">
      <h3>Add data attribute to column</h3>
      <p>To make a column sortable a data attribute is needed to be added to the column cell.</p>
      <pre><code class="javascript">{{htmlSortableColumn}}</code></pre>
      <h3>Add data attribute to table</h3>
      <p>Attributes can be added to the table to make the column the default sortable setting.</p>
      <pre><code class="javascript">{{htmlSortableTable}}</code></pre>
    </div>

    <div class="container pb-0">
      <h2 id="filterable">Filterable</h2>
      <p>Reduce the number of rows by filtering what we want to get displayed.</p>
    </div>

    <div class="container visualtest">
      <Table :fields="filter_fields" :items="items" class="table-fullwidth"></Table>
    </div>

    <div class="container">
      <h3>Add data attribute to column</h3>
      <p>To make a column filterable a data attribute needs to be added to the table cell.</p>
      <pre><code class="javascript">{{htmlFilterableColumn}}</code></pre>
    </div>

    <div class="container">
      <h3>Advanced filters</h3>
      <p>The above is the default way of adding a simple filter that matches strings. To have something more complicated the table element will have to be combined with an additional form with bespoke JavaScript logic.</p>
      <a href="/examples#tables" class="btn btn-secondary">See table examples</a>
    </div>


    <div class="container pb-0">
      <h2 id="pagination">Pagination</h2>
      <p>Limit the number of items displayed on the screen to make it more manageable.</p>
    </div>

    <div class="container visualtest">
      <Table :fields="filter_fields" :items="more_items" class="table-fullwidth" :show="5"></Table>
    </div>
    <div class="container pb-0">
      <h2 id="reorderable">Reorderable</h2>
      <p>Allow for the table to be reordered by dragging and dropping.</p>
    </div>

    <div class="container visualtest">
      <Table :fields="filter_fields" :items="items" class="table-fullwidth" :reorder="true" :show="5"></Table>
    </div>

    <div class="container">
      <h2>Vue Table component reference</h2>
      <Readme></Readme>
    </div>
    -->
<!-- #endregion --> 




  </main>
</template>

<script>

import iamTable from '../../../assets/ts/components/table/table.component'

if (!window.customElements.get('iam-table'))
  window.customElements.define('iam-table', iamTable);


import Table from '@/components/Table/Table.vue'
import Readme from '@/components/Table/README.md'
import * as helpers from '../../../assets/ts/modules/helpers'

export default {
  components: {
    Table,
    Readme
  },
  mounted(){
    
    //helpers.checkElements(document.querySelector('main'));
  },
  data () {
    return {
      htmlUsage: `<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
      <th>Column 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1</td>
      <td>Row 1</td>
      <td>Row 1</td>
      <td>Row 1</td>
    </tr>
    <tr>
      <td>Row 2</td>
      <td>Row 2</td>
      <td>Row 2</td>
      <td>Row 2</td>
    </tr>
    <tr>
      <td>Row 3</td>
      <td>Row 3</td>
      <td>Row 3</td>
      <td>Row 3</td>
    </tr>
  </tbody>
</table>`,
      htmlSortableTable: `<div data-sortby="Job" data-sort="ascending" class="table__wrapper table-fullwidth">`,
      htmlSortableColumn: `<th data-sortable="true">Name</th>`,
      htmlFilterableColumn: `<th data-filterable="true">Name</th>`,
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
          filterable: true,
          sortable: true
        },
        { key: 'address' },
        { 
          key: 'emergency_contact',
          filterable: true,
          sortable: true
        },
        { key: 'actions' }
      ],
      fields: [
        { 
          key: 'name'
        },
        { 
          key: 'job'
        },
        { key: 'address' },
        { 
          key: 'emergency_contact'
        },
        { key: 'actions' }
      ],
      more_items: [
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
          name: 'Simon',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Derrick Gordan',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Ross',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'James',
          job: 'Actor',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Sandra',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Rachel',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Katharine',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Bob',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Harry',
          job: 'Plumber',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'James L',
          job: 'Actor',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Matt',
          job: 'Actor',
          address: '123 Royal Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        }
      ]
    }
  }
}
</script>