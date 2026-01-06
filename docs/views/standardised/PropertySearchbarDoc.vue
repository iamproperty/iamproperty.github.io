<script setup>
  import PropertySearchbar from '@/components/STDPropertySearchbar/STDPropertySearchbar.vue';

  let location = '';
  let locations = null;

  const datalist = function (event) {
    console.log(location);

    locations = [{ value: 'London' }, { value: 'Leicester' }];
  };
</script>

<template>
  <main>
    
    <form>
    <div class="container bg-success py-0">
      <PropertySearchbar data-search-term="hello">
      </PropertySearchbar>
    </div>
    <button>Submit</button>
    </form>
    <div class="container bg-primary prevent-invert">
      <PropertySearchbar class="searchbar--inline"></PropertySearchbar>
    </div>
    

  </main>
</template>
