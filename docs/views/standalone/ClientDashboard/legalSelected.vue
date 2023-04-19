<template>
  <div>
    <Nav></Nav>

    <main class="text-primary">

<Heading></Heading>

<div class="client-wrapper d-md-flex">
  <div class="container bg-info gradient-secondary client-wrapper__inner col-md-6 ms-md-0">
    <h2 class="h4">Your conveyancing milestones</h2>


    <div class="btn-group btn-group--admin d-block">
      <input type="radio" autocomplete="off" name="radio5" id="test8" class="btn-check" checked>
      <label for="test8" class="btn btn-tertiary col-4">Outstanding</label>
      <input type="radio" autocomplete="off" name="radio5" id="test8a" class="btn-check">
      <label for="test8a" class="btn btn-tertiary col-4">Completed</label>
      <input type="radio" autocomplete="off" name="radio5" id="test8b" class="btn-check">
      <label for="test8b" class="btn btn-tertiary col-4">Upload file</label>
      <hr/>
      <div class="conditional conditional-1 bg-white p-3 rounded-2 shadow">
        <ul class="tick-list">
          <li class="tick--incomplete">Memo of sale received</li>
        </ul>
      </div>
      <div class="conditional conditional-2 bg-white p-3 rounded-2 shadow">
        <ul class="tick-list">
          <li>Welcome call <span class="text-muted">15/03/22</span></li>
          <li>Welcome call <span class="text-muted">15/03/22</span></li>
        </ul>
      </div>
      <div class="conditional conditional-3 bg-white p-3 rounded-2 shadow">

        <form action="" method="GET" class="file-upload">
          <Input type="select" id="test1" label="Select document type" :options="[{display:'One',value:'1'},{display:'Two',value:'2'}]" ></Input>

          <Input class="form-control--lrg-file" type="file" id="testfile" label="Select a file to upload">
            <svg class="icon"><title>document</title><use xlink:href="/svg/icons.svg#icon-document"></use></svg>
          </Input>
          <button class="btn btn-secondary">Upload</button>
          <span class="file-upload__add">+ Add another file</span>
        </form>


      </div>
    </div>



  </div>
  <div class="col-md-5 me-md-0">

    <div class="container bg-primary w-100 me-md-0">

      <h3>Your solicitor</h3>
      <p>TBI Solicitors, 12 Street, Bradford, BL34 7TN</p>

    </div>
    <div class="container bg-white w-100 me-md-0">

      <h3>Recent uploads</h3>
      <p>....</p>

    </div>
  </div>
  <Footer></Footer>
</div>






</main>



  </div>
</template>

<style lang="scss">
@import "./clientDashboard.scss";
</style>

<script>
import Nav from './_nav.vue'
import Footer from './_footer.vue'
import Heading from './_heading.vue'
import CardDeck from '@/components/CardDeck/CardDeck.vue'
import Icon from '@/foundations/Icon/Icon.vue'
import Table from '@/components/Table/Table.vue'
import Input from '@/components/Input/Input.vue'


import fileupload from '../../../../assets/js/modules/file-upload'

export default {
  components: {
    Nav,
    Footer,
    Heading,
    CardDeck,
    Icon,
    Table,
    Input
  },
  data () {
    return {
      fields: [
        { key: 'solicitor' },
        { key: 'location' },
        { key: 'online_updates' },
        { key: 'average_completion_time' },
        { key: 'customer_rating' },
        { key: 'total' }
      ],
      items: [
        {
          solicitor: 'test 1',
          location: 'mr Richard Branson<br> (Mr Richard Branson)',
          online_updates: 'Legal owner',
          average_completion_time: '<a href="tel:07411882800">07411882800</a> (Mobile)<br> <a href="tel:07411882800">07411882800</a> (Main)',
          customer_rating: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          total: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>',
        },
        {
          solicitor: 'test 2',
          location: 'mr Richard Branson<br> (Mr Richard Branson)',
          online_updates: 'Legal owner',
          average_completion_time: '<a href="tel:07411882800">07411882800</a> (Mobile)<br> <a href="tel:07411882800">07411882800</a> (Main)',
          customer_rating: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          total: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>',
        },
        {
          solicitor: 'test 3',
          location: 'mr Richard Branson<br> (Mr Richard Branson)',
          online_updates: 'Legal owner',
          average_completion_time: '<a href="tel:07411882800">07411882800</a> (Mobile)<br> <a href="tel:07411882800">07411882800</a> (Main)',
          customer_rating: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          total: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>',
        },
        {
          solicitor: 'test 4',
          location: 'mr Richard Branson<br> (Mr Richard Branson)',
          online_updates: 'Legal owner',
          average_completion_time: '<a href="tel:07411882800">07411882800</a> (Mobile)<br> <a href="tel:07411882800">07411882800</a> (Main)',
          customer_rating: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          total: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>',
        }
      ]
    }
  },
  mounted(){

    document.querySelectorAll('.file-upload').forEach((arrayElement, index) => {
      fileupload(arrayElement,(e) => {console.log('Call a function to update the listing')});
    });

  }
}
</script>
