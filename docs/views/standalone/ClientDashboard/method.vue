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
              <div class="col-md-5">

                <h3 class="h4">What's most important to you in the sale of your property?</h3>
                <p>Please rank these 3 points in order of importance. Do so by dragging and dropping the cards from 1 (most important) to 5 (least important).</p>
              </div>
              <div class="col-md-7">

                <ol class="orderable-list">
                  <li><span class="h5">Speed of sale</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Security and buyer commitment</li>
                  <li>Maximum price</li>
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


            <p><strong>When is best to contact you about our Modern Method of Auction?</strong></p>

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


import orderList from '../../../../assets/js/modules/orderablelist'

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
          content: `<a href="/components/card-deck" class="card">
  <div class="card-body">
    <h2 class="card-title">Card 1</h2>
    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>
  </div>
  <div class="card-footer">
    <span class="btn btn-secondary mb-0">Find out more<span class="visually-hidden"> about Card 1</span></span>
  </div>
</a>`
        },
        {
          content: `<a href="/components/card-deck" class="card">
  <div class="card-body">
    <h2 class="card-title">Card 1</h2>
    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p>
  </div>
  <div class="card-footer">
    <span class="btn btn-secondary mb-0">Find out more<span class="visually-hidden"> about Card 1</span></span>
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
