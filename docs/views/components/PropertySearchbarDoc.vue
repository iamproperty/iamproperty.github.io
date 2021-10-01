<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Property Searchbar</h1>
      <p>A set series of input fields to help the user search for thier desired property.</p>
    </div>

    <PropertySearchbar :location="location" class="visualtest bg-secondary pt-4" :locations="locations" @locationKeyup="datalist(...arguments)"></PropertySearchbar>
    
    <div class="container">
      <h2>Hero Property Searchvar</h2>
      <p>The searchbar maybe embedded into a more decorative container and will need to be made more visual.</p>
      <a href="/standalone/iamsold-homepage">Iamsold homepage example</a>
    </div>

    <PropertySearchbar class="visualtest bg-primary prevent-invert property-searchbar--hero"></PropertySearchbar>
    

    <div class="container">
      <h2>Vue Property Searchbar component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import PropertySearchbar from '@/components/PropertySearchbar/PropertySearchbar.vue'
import Readme from '@/components/PropertySearchbar/README.md'

export default {
  components: {
    PropertySearchbar,
    Readme
  },
  data () {
    return {
      htmlUsage: ``,
      location: 'Sunderland',
      locations: [
        {'value': 'Newcastle'}
      ]
    }
  },
  methods: {
    datalist: function (event) {

      this.locations =  [
        {'value': 'London'},
        {'value': 'Leicester'}
      ]
    }
  }
}
</script>