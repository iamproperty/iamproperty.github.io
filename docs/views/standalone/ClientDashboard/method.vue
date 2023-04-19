<template>
  <div>
    <Nav></Nav>

    <main class="text-primary">

      <Heading></Heading>


      <div class="client-wrapper">
        <div class="bg-info gradient-secondary client-wrapper__inner">
          <div class="container p-md-0 mb-md-0">

          <h2>Method or Sale audit</h2>
          <p class="tagline">We want to ensure you get the best possible route for your sale.</p>
          <p>Please answer the questions below to see your options.</p>

          </div>

          <div class="container bg-white">


            <div class="row">
              <div class="col-md-4 me-auto">

                <h3 class="h4">What's most important to you in the sale of your property?</h3>
                <p>Please rank these 3 points in order of importance. Do so by dragging and dropping the cards from 1 (most important) to 5 (least important).</p>
              </div>
              <div class="col-sm-10 col-md-7">

                <ol class="orderable-list">
                  <li><span class="h5 mb-0">Speed of sale</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li><span class="h5 mb-0">Security and buyer commitment</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li><span class="h5 mb-0">Maximum price</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                </ol>

              </div>
            </div>


          </div>

          <div class="container bg-white p-md-0 m-md-0 bg-md-transparent invert-colours-md">
          <small><p class="mw-100 m-0 p-0">*In compliance with <a href="/">The Property Ombudsman code of conduct</a>, you should be made aware of all selling options available to you, based off your personal circumstances.</p></small>
          </div>
        </div>

      </div>

      <div class="container pt-5">
        <div class="row">
          <div class="col-md-8">

            <p><strong>Based on what you've selected, our Modern Method of Auction may be the most suitable route of sale for you...</strong></p>

            <Carousel class="hide-btns" :items="items" btntype="link" :smcols="2" :mdcols="2"></Carousel>

            <p class="h5">When is best to contact you about our Modern Method of Auction?</p>
            <div class="">
              <input type="radio" autocomplete="off" name="radio1" id="test" class="btn-check">
              <label for="test" class="btn btn-tertiary btn-admin">4 weeks</label>
              <input type="radio" autocomplete="off" name="radio1" id="test1a" class="btn-check">
              <label for="test1a" class="btn btn-tertiary btn-admin">6 weeks</label>
              <input type="radio" autocomplete="off" name="radio1" id="test1c" class="btn-check">
              <label for="test1c" class="btn btn-tertiary btn-admin">8 weeks</label>
              <input type="radio" autocomplete="off" name="radio1" id="test1d" class="btn-check">
              <label for="test1d" class="btn btn-tertiary btn-admin">No thanks</label>
            </div>




          </div>
        </div>
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
import Carousel from '@/components/Carousel/Carousel.vue'
import Icon from '@/foundations/Icon/Icon.vue'


import orderList from '../../../../assets/ts/modules/orderablelist'

export default {
  components: {
    Nav,
    Footer,
    Heading,
    Carousel,
    Icon
  },
  data () {
    return {
      items: [
        {
          content: `<a href="/components/card-deck" class="card text-center overflow-visible">
  <div class="card-banner bg-secondary gradient-info gradient-direction-left">
    <span class="h4 card-title mb-0">Modern Method<br/> of Auction</span>
    <span class="card-banner__tag">Popular<br/> Choice</span>
  </div>
  <div class="card-body">
    <p class="h6">Trusted by over 3,500 Estate Agency branches across the UK</p>
    <ul class="list-unstyled">
      <li>Faster sales process</li>
      <li>Low 'fall through' rate</li>
      <li>Competitive offers</li>
      <li>No selling fee</li>
    </ul>
  </div>
</a>`
        },
        {
          content: `<a href="/components/card-deck" class="card text-center">
  <div class="card-banner bg-secondary gradient-info gradient-direction-left">
    <span class="h4 card-title mb-0">Private Treaty<br/> Service</span>
  </div>
  <div class="card-body">
    <p class="h6">Trusted by over 3,500 Estate Agency branches across the UK</p>
    <ul class="list-unstyled">
      <li>Faster sales process</li>
      <li>Low 'fall through' rate</li>
      <li>Competitive offers</li>
      <li>No selling fee</li>
    </ul>
  </div>
</a>`
        }
      ]
    }
  },
  mounted(){

    document.querySelectorAll('.orderable-list').forEach((arrayElement, index) => {
      orderList(arrayElement);
    });

  }
}
</script>
