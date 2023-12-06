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
      
      <div class="nav--menu" data-title="My account" data-icon="fa-user fa-solid" slot="menus">
        <span class="h3">Tom Hinde</span>
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

      <a href="/" slot="secondary" class="selected">iamproperty</a>
      <a href="/" slot="secondary">CRM</a>
      <a href="/" slot="secondary">movebutler</a>
      <a href="/" slot="secondary">iamsold</a>
              
      </Nav>
    </nav>
    
    <Header :image="headerImg">
      <h1>Welcome, Tom!</h1>

      <Carousel>
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div class="col carousel__item">
            <a href="/components/addresslookup" tabindex="-1">
              <Card class="loaded">Address Lookup (Beta) <!--v-if--></Card>
            </a>
          </div>
          <div class="col carousel__item">
            <a href="/components/addresslookup" tabindex="-1">
              <Card class="loaded">Address Lookup (Beta) <!--v-if--></Card>
            </a>
          </div>
          <div class="col carousel__item">
            <a href="/components/addresslookup" tabindex="-1">
              <Card class="loaded">Address Lookup (Beta) <!--v-if--></Card>
            </a>
          </div>
          <div class="col carousel__item">
            <a href="/components/addresslookup" tabindex="-1">
              <Card class="loaded">Address Lookup (Beta) <!--v-if--></Card>
            </a>
          </div>
          <div class="col carousel__item">
            <a href="/components/addresslookup" tabindex="-1">
              <Card class="loaded">Address Lookup (Beta) <!--v-if--></Card>
            </a>
          </div>
          <div class="col carousel__item">
            <a href="/components/addresslookup" tabindex="-1">
              <Card class="loaded">Address Lookup (Beta) <!--v-if--></Card>
            </a>
          </div>
        </div>
      
      </Carousel>
      

    </Header>
    
    <main>

      
    </main>
  </div>
</template>


<style lang="scss" >



</style>

<script>
import Nav from '@/components/Nav/Nav.vue'

import Header from '@/components/Header/Header.vue'
import Carousel from '@/components/Carousel/Carousel.vue'

import Table from '@/components/Table/Table.vue'
import Card from '@/components/Card/Card.vue'
import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue'
import Filterlist from '@/components/Filterlist/Filterlist.vue'
import headerImg from '../../img/homepage-banner.png'

export default {
  components: {
    Nav,
    Header,
    Table,
    Card,
    AppliedFilters,
    Filterlist,
    Carousel
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
      headerImg: headerImg
    }
  }
}

</script>