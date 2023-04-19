<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none pb-0">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Admin panel</h1>
      <p>A way of grouping and seperating content within an admin setting. The first title within the panel will become the panels header. Tables and tabs within an admin panel will be displayed in a unique way, with tables taken the full width and tab links becoming larger in display. To further group content inside of the panel the grid system can be used.</p>
      
    </div>
    
    <div class="container visualtest">

      <h2>Basic admin panel</h2>

      <div class="admin-panel">
        <h2>Admin panel title</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>



    <div class="container">
      <h3>HTML code example</h3>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>


    <div class="container visualtest">

      <h2>Admin panels within the grid system</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="admin-panel">
            <h2>Admin panel title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="admin-panel">
            <h2>Admin panel title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container visualtest">
      <h2>Admin panel with a table inside</h2>
      <div class="admin-panel">
        <Table :fields="fields" :items="items"></Table>
        
      </div>


    </div>
    <div class="container visualtest">

      <h2>Admin panel with links to make it look like tabs</h2>
      <div class="admin-panel">
        
        <div class="admin-panel__links">
          <a href="/components/panel">My onboarding</a>
          <a href="/components/panel" class="current">Branch onboarding<br><small>Branch 1</small></a>
          <a href="/components/panel">All onboarding</a>
        </div>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

      </div>
    </div>
    <div class="container ">

      <p>The admin panel can hold the tabs component too which would make it look like the above component. See the <a href="/components/tabs">tabs component page</a> for an example.</p>
      
    </div>

    
  </main>
</template>

<script>
import Table from '@/components/Table/Table.vue'

export default {
  components: {
    Table
  },
  data () {
    return {
      htmlUsage: `<div class="admin-panel">
  <h2>Admin panel title</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>`,
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
          rowid: 'test',
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