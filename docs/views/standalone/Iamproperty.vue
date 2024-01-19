<template>
  <div>
    <nav>
      <Nav class="bg-primary">
        
      <a href="/" class="brand brand--property" slot="logo">
        <svg>
          <title>iam key</title>
          <use xlink:href="/svg/logo.svg#logo-property"></use>
        </svg>
      </a>
      
      <div class="nav--menu" data-title="My account" data-open-title="Tom Hinde" data-icon="fa-user fa-solid" slot="menus">
        <div>
          <label for="test1">Active branch</label>
          <select class="form-select" name="test1" id="test1">
            <option value="1">Newcastle</option><option value="2">Two</option><option value="2">Three</option><option value="2">Four</option>
          </select>
        </div>
        <hr class="mt-3">
        <a href="/">Control panel</a>
        <a href="/">Success hub</a>
        <a href="/" class="mb-4">Your credits</a>
    </div>

      <a href="/standalone/iamproperty" slot="secondary" class="selected">iamproperty</a>
      <a href="/standalone/openview" slot="secondary">CRM</a>
      <a href="/standalone/movebutler" slot="secondary">movebutler</a>
      <a href="/standalone/agent" slot="secondary">iamsold</a>
              
      </Nav>
    </nav>
    
    <Header :image="headerImg">
      <h1>Welcome, Tom!</h1>

      <span class="h4">Featured</span>
      <Carousel class="reset-colours hide-btns hide-controls">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div class="col">
            <a href="/client-onbaording">
              <Card :data-image="Thumb1">Get moving faster <span>Stay complaint, build revenue and get paid quicker.</span><span slot="badges" class="badge bg-success">End-to-End onboarding</span></Card>
            </a>
          </div>
          <div class="col">
            <a href="/client-onbaording">
              <Card :data-image="Thumb2">Make your own rules <span>Run your agency your way, with a system that works for you.</span> <span slot="badges" class="badge bg-success">CRM Service</span></Card>
            </a>
          </div>
          <div class="col">
            <a href="/client-onbaording">
              <Card :data-image="Thumb3">Discover the power of auction<span>And offer a service that 36% of your clients desire.</span> <span slot="badges" class="badge bg-success">Auction</span></Card>
            </a>
          </div>
          
          
        </div>
      
      </Carousel>
      

    </Header>
    
    <main>

      <div class="row pt-0">
        <div class="col-12 col-md-8 mb-4">
          
          <div class="admin-panel m-0">
            <h2 class="bg-light">Our Ecosystem Services</h2>
            
            <div class="mh-md-lg">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <a href="/find">Find out more</a>.</p>
            
            <div class="row row-cols-sm-2">
              <div class="col">  
                <a href="/client-onbaording">
                  <Card>Marketing Toolkit <span>Drive instructions, with smarter prospecting.</span> <span slot="badges" class="badge bg-warning"><i class="fa-regular fa-sparkles"></i> New</span></Card>
                </a>
              </div>
              <div class="col">  
                <a href="/client-onbaording">
                  <Card>Auction <span>Offer your clients enhanced speed and security.</span></Card>
                </a>
              </div>
              <div class="col">  
                <a href="/client-onbaording">
                  <Card>CRM <span>Take your sales and letting to the next level.</span></Card>
                </a>
              </div>
              <div class="col">  
                <a href="/client-onbaording">
                  <Card>End-to-End Onboarding <span>Click on this card to go to your movebutler dashboard.</span> <span slot="badges" class="badge bg-success">Active</span></Card>
                </a>
              </div>
              <div class="col">  
                <a href="/client-onbaording">
                  <Card>Fast-Track<span>Here would be the top level description of the task</span></Card>
                </a>
              </div>
              <div class="col">  
                <a href="/client-onbaording">
                  <Card>Digital Valuer Tool <span>Here would be the top level description of the task</span></Card>
                </a>
              </div>
            </div>
          </div>


          </div>
        </div>
        <div class="col-12 col-md-4 mb-4 d-flex">
          <Marketing class="mh-100 mw-100 m-0" :data-img="cardImg">
            <h2 class="h3">Unlock more revenue with our Compliance module</h2>
            <p>More and more of our Partner Agents are choosing to charge their clients for ID verification. Make consistent additional income at the simple switch of a button.</p>
            <button class="btn btn-secondary">Lorem ipsum</button>
          </Marketing>
        </div>
        
      </div>
      
    </main>
    <footer class="bg-light pt-5 pb-5">
      <div class="container">
        <small class="m-0">The Conveyancing Partnership Ltd (t/a movebutler) is a registered company in England & Wales. Registered office: Floor 6, Arden House, Regent Centre, Newcastle upon Tyne, NE3 3LU. Company Number: 09662389. VAT Reg: 319 1600 25. All rights reserved, designated trademarks and brands are the property of their respective owners. Telephone: 0191 731 9216 Email: enquiries@iamproperty.com. All prices, unless otherwise stated, exclude VAT. Please note that all calls made to and from The Conveyancing Partnership are recorded for training and monitoring purposes.</small>
        <hr/>
      </div>
    </footer>
  </div>
</template>


<style lang="scss" >



</style>

<script>
import Nav from '@/components/Nav/Nav.vue'

import Header from '@/components/Header/Header.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Marketing from '@/components/Marketing/Marketing.vue'

import Table from '@/components/Table/Table.vue'
import Card from '@/components/Card/Card.vue'
import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue'
import Filterlist from '@/components/Filterlist/Filterlist.vue'
import headerImg from '../../img/homepage-banner.png'

import Thumb1 from '../../img/home-thumb-1.png'
import Thumb2 from '../../img/home-thumb-2.png'
import Thumb3 from '../../img/home-thumb-3.png'

import cardImg from '../../img/cardImg.png'


export default {
  components: {
    Nav,
    Header,
    Table,
    Card,
    AppliedFilters,
    Filterlist,
    Carousel,
    Marketing
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  mounted(){

    setTimeout(() => {
      
    }, "100");

  },
  data () {
    return {
      headerImg: headerImg,
      cardImg: cardImg,
      Thumb1: Thumb1,
      Thumb2: Thumb2,
      Thumb3: Thumb3
    }
  }
}

</script>