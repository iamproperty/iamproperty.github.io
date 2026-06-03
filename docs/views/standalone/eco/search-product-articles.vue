
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Search from '@/components/Search/Search.vue';


const dialogElement = ref();


onMounted(async() => {
    
    

  try {
    await fetch('https://helpcentre.iamproperty.com/api/v2/help_center/articles/search.json?label_names=crm_articles')
    .then((response) => response.json())
    .then((response) => {
      
      response.results.forEach((item) => {
        dialogElement.value.insertAdjacentHTML('beforeend', `<option value="${item.name}" data-url="${item.html_url}">${item.name}</option>`);
      });

      return response;
    });
  } catch (error) {
    console.log(error);
  }

});

const openLink = (event: Event):void => {

  const target = event.target as EventTarget | null;
  if (target instanceof HTMLOptionElement && target.dataset.url) {

    window.open(target.dataset.url, '_blank');
  }
}
const trackSearch = (event: Event):void => {

  console.log(event);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'search-submitted',
    form: 'Support article search',
    search: 'Search',
  });
}
</script>

<template>

  <label>
    <span class="visually-hidden">Search existing transactions</span>
    <Search class="search--stylised">
      <input type="text" name="query" autocomplete="off" aria-autocomplete="none" list="articles" placeholder="Search all support articles" class="input--sm" required />
      <datalist id="articles" ref="dialogElement" @click="openLink"></datalist>
    </Search>
  </label>
  
</template>
