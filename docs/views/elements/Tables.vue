<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/elements">Elements</a></li>
      </ul>
      <h1>Tables</h1>
      <p>Used to arrange data into the tabular design; rows and columns. An HTML table is a great way to display things such as financial data, calendars, pricing, feature comparison, the nutrition facts information panel, bowling scores, and many other tabular data.</p>
    </div>

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
      fields: [
        { key: 'basic_details' },
        { key: 'capacity' },
        { key: 'contact_details' },
        { key: 'address' },
        { key: 'point_of_contact' },
        { key: 'actions' }
      ],
      items: [
        {
          basic_details: 'mr Richard Branson<br> (Mr Richard Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07411882800">07411882800</a> (Mobile)<br> <a href="tel:07411882800">07411882800</a> (Main)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          basic_details: 'mrs Laura Branson<br> (Mrs Laura Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07729797870">07729797870</a> (Main)<br> <a href="tel:07729797870">07729797870</a> (Mobile)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          basic_details: 'Holly Branson<br> (Ms Holly Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07729797870">07729797870</a> (Main)<br> <a href="tel:07729797870">07729797870</a> (Mobile)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          basic_details: 'Clare Branson<br> (Ms Clare Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07729797870">07729797870</a> (Main)<br> <a href="tel:07729797870">07729797870</a> (Mobile)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        }
      ]
    }
  }
}
</script>