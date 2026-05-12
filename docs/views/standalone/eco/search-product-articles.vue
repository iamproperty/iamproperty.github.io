
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
</script>

<template>
<form method="get" action="https://helpcentre.iamproperty.com/hc/en-gb/search" target="_blank">

  <label>
    Search existing transactions
    <Search class="search--stylised">
      <input type="text" name="query" autocomplete="off" aria-autocomplete="none" list="articles" />
      <button class="suffix me-0 mb-0 fa-regular fa-search" title="Search" slot="suffix"></button>
      <datalist id="articles" ref="dialogElement" @click="openLink"></datalist>
    </Search>
  </label>
</form>
</template>
