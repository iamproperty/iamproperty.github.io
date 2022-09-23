<template>
  <div>
    <Nav></Nav>

    <main class="text-primary">

      <Heading></Heading>


      <div class="client-wrapper">
        <div class="container p-md-0">
          <div class="invert-colours-md">

            <h2 class="h3">Legal preparation</h2>
            <h3 class="h4">Get sale ready</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          </div>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-5 me-auto">
              <div class="bg-secondary container container-xs-breakout h-100">
                <h3>The benefits</h3>
                <ul class="tick-list">
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6">

              <div class="bg-admin container container-xs-breakout h-100">
                <h3>Upgrade option</h3>
                <ul class="tick-list">
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                </ul>
              </div>
            </div>
          </div>

        </div>


      </div>

      <div class="container">
          <p class="">Do you have an existing mortgage?</p>
          <div class="">
            <input type="radio" autocomplete="off" name="radio1" id="test" class="btn-check">
            <label for="test" class="btn btn-tertiary">Yes</label>
            <input type="radio" autocomplete="off" name="radio1" id="test1a" class="btn-check">
            <label for="test1a" class="btn btn-tertiary">No</label>
          </div>


          <h3>Compare solicitors</h3>

          <Table class="client-table" :fields="fields" :items="items"></Table>





      </div>

      <div class="client-wrapper">
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
import Table from '@/elements/Table/Table.vue'

export default {
  components: {
    Nav,
    Footer,
    Heading,
    CardDeck,
    Icon,
    Table
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
  }
}
</script>
