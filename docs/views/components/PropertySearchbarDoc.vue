<script setup>
  import PropertySearchbar from '@/components/PropertySearchbar/PropertySearchbar.vue';
  import Readme from '@/components/PropertySearchbar/README.md';

  const htmlUsage = ``;
  let location = '';
  let locations= null;


  const datalist = function (event) {
    console.log(location);

    locations = [{ value: 'London' }, { value: 'Leicester' }];
  };
      
</script>

<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Property Searchbar</h1>
      <p>A set series of input fields to help the user search for thier desired property.</p>
    </div>

    <PropertySearchbar
      class="visualtest bg-secondary pt-4"
      v-model="location"
      :locations="locations"
      @locationKeyup="datalist(...arguments)"
    ></PropertySearchbar>

    <div class="container">
      <h2>Hero Property Searchbar</h2>
      <p>The searchbar maybe embedded into a more decorative container and will need to be made more visual.</p>
      <a href="/standalone/iamsold-homepage">Iamsold homepage example</a>
    </div>

    <PropertySearchbar
      id="search2"
      class="visualtest bg-primary prevent-invert property-searchbar--hero"
    ></PropertySearchbar>

    <div class="container">
      <h2>Vue Property Searchbar component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

