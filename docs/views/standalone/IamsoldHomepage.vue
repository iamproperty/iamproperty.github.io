<template>
  <main>
    <div class="container pt-4">
      <h1>Iamsold homepage (work in progress)</h1>
    </div>
    <div class="container bg-primary prevent-invert">
      <div class="invert-colours text-center">
        <h1>Changing the perception of property auction</h1>
        <p class="strapline mw-100">80% of our customers rated us "Excellent".</p>
      </div>
      <PropertySearchbar class="property-searchbar--hero"></PropertySearchbar>
      
    </div>
  </main>
  
</template>

<script>
import PropertySearchbar from '@/components/PropertySearchbar/PropertySearchbar.vue'

export default {
  components: {
    PropertySearchbar
  },
}
</script>