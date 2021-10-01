<template>
  <div class="container" ref="wrapper">
    <slot></slot>
    <div class="property-searchbar">
      <form class="row" :action="formAction" :method="formMethod">
        <fieldset class="col-12 col-md-3">
          <Input inputClass="input--locations" v-model="locationSet" label="Location" id="location" :options="locations" required placeholder="i.e. Newcastle or NE1"  @keyupEvent="locationKeyup(...arguments)"></Input>
          <Input class="select--miles" label="Miles" id="miles" type="select" :options="distances"></Input>
        </fieldset>
        <fieldset class="col-12 col-md">
          <span class="form-label d-none d-md-block">Price range</span>
          <div class="row" data-input-range>
            <Input class="col-6" label="Minimum price" id="price-min" data-min="true" type="select" :options="priceMin"></Input>
            <Input class="col-6" label="Maximum price" id="price-max" data-max="true" type="select" :options="priceMax"></Input>
          </div>
        </fieldset>
        <fieldset class="col-12 col-md">
          <span class="form-label d-none d-md-block">Number of beds</span>
          <div class="row" data-input-range>
            <Input class="col-6" label="Minimum beds" id="beds-min" data-min="true" type="select" :options="bedsMin"></Input>
            <Input class="col-6" label="Maximum beds" id="beds-max" data-max="true" type="select" :options="bedsMax"></Input>
          </div>
        </fieldset>
        <fieldset class="col-12 col-md">
          <Input label="Property type" id="property-type" type="select" :options="propertyTypes"></Input>
        </fieldset>
        <div class="col-12 col-md-2 d-flex property-searchbar__btn">
          <button class="btn w-100 me-0" type="submit" value="submit">Search</button>
        </div>
      </form>
    </div>
    <slot name="after"></slot>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/propertySearchbar.scss";

</style>

<script>
import Input from '../../elements/Input/Input.vue'

export default {
  components: {
    Input
  },
  name: 'PropertySearchbar',
  props: {
    formAction: {
      type: String,
      required: false
    },
    formMethod: {
      type: String,
      required: false
    },
    location: {
      type: String,
      rewuired: false
    },
    locations: {
      type: Array,
      required: false
    },
    distances: {
      type: Array,
      required: false,
      default() {
        return [
          {'value':'0.25','display':'+¼ mi'},
          {'value':'0.5','display':'+½ mi'},
          {'value':'1','display':'+1 mi'},
          {'value':'2','display':'+2 mi'},
          {'value':'3','display':'+3 mi'},
          {'value':'4','display':'+4 mi'},
          {'value':'5','display':'+5 mi'}
        ];
      } 
    },
    priceMin: {
      type: Array,
      required: false,
      default() {
        return [
          {'value':'0','display':'No min'},
          {'value':'50000','display':'£50k'},
          {'value':'75000','display':'£75k'},
          {'value':'100000','display':'£100k'},
          {'value':'150000','display':'£150k'},
          {'value':'200000','display':'£200k'},
          {'value':'250000','display':'£250k'}
        ];
      }
    },
    priceMax: {
      type: Array,
      required: false,
      default() {
        return [
          {'value':'any','display':'No max'},
          {'value':'50000','display':'£50k'},
          {'value':'75000','display':'£75k'},
          {'value':'100000','display':'£100k'},
          {'value':'150000','display':'£150k'},
          {'value':'200000','display':'£200k'},
          {'value':'250000','display':'£250k'}
        ];
      }
    },
    bedsMin: {
      type: Array,
      required: false,
      default() {
        return [
          {'value':'any','display':'No min'},
          {'value':'0','display':'Studio'},
          {'value':'1','display':'1 bed'},
          {'value':'2','display':'2 beds'},
          {'value':'3','display':'3 beds'},
          {'value':'4','display':'4 beds'},
          {'value':'5','display':'5 beds'},
          {'value':'6','display':'6 beds'}
        ];
      }
    },
    bedsMax: {
      type: Array,
      required: false,
      default() {
        return [
          {'value':'any','display':'No max'},
          {'value':'0','display':'Studio'},
          {'value':'1','display':'1 bed'},
          {'value':'2','display':'2 beds'},
          {'value':'3','display':'3 beds'},
          {'value':'4','display':'4 beds'},
          {'value':'5','display':'5 beds'},
          {'value':'6','display':'6 beds'}
        ];
      }
    },
    propertyTypes: {
      type: Array,
      required: false,
      default() {
        return [
          {'value':'all','display':'Show all'},
          {'value':'Bungalow','display':'Bungalow'},
          {'value':'Character Property','display':'Character Property'},
          {'value':'Commercial Property','display':'Commercial Property'},
          {'value':'Flat / Apartment','display':'Flat / Apartment'},
          {'value':'Garage / Parking','display':'Garage / Parking'},
          {'value':'Guest House / Hotel','display':'Guest House / Hotel'},
          {'value':'House','display':'House'},
          {'value':'House / Flat Share','display':'House / Flat Share'},
          {'value':'Land','display':'Land'},
          {'value':'Mobile / Park Home','display':'Mobile / Park Home'},
          {'value':'Private Halls','display':'Private Halls'},
          {'value':'Retirement Property','display':'Retirement Property'}
        ];
      }
    }
  },
  data () {
    return {
      locationSet: this.location ? this.location : ''
    }
  },
  methods: {
    locationKeyup: function(event){

      this.$emit('locationKeyup',event);
    }
  }
}
</script>
