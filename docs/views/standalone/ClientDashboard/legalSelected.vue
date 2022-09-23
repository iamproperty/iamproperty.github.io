<template>
  <div>
    <Nav></Nav>

    <main class="text-primary">

<Heading></Heading>

<div class="client-wrapper d-md-flex">
  <div class="container bg-info gradient-secondary client-wrapper__inner col-md-6 ms-md-0">
    <h2 class="h4">Your conveyancing milestones</h2>


    <div class="btn-group d-block">
      <input type="radio" autocomplete="off" name="radio5" id="test8" class="btn-check" checked>
      <label for="test8" class="btn btn-tertiary col-4">Option 1</label>
      <input type="radio" autocomplete="off" name="radio5" id="test8a" class="btn-check">
      <label for="test8a" class="btn btn-tertiary col-4">Option 2</label>
      <input type="radio" autocomplete="off" name="radio5" id="test8b" class="btn-check">
      <label for="test8b" class="btn btn-tertiary col-4">Option 3</label>
      <hr/>
      <div class="conditional conditional-1 bg-white"><p>Content 1.</p></div>
      <div class="conditional conditional-2 bg-white"><p>Content 2.</p></div>
      <div class="conditional conditional-3 bg-white"><p>Content 3.</p></div>
    </div>



  </div>
  <div class="col-md-5 me-md-0">

    <div class="container bg-primary w-100 me-md-0">

      <h3>Your solicitor</h3>
      <p>TBI Solicitors, 12 Street, Bradford, BL34 7TN</p>

    </div>
    <div class="container bg-white w-100 me-md-0">

      <h3>Your solicitor</h3>
      <p>TBI Solicitors, 12 Street, Bradford, BL34 7TN</p>

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
