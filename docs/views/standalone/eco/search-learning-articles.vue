
<script setup lang="ts">
import Search from '@/components/Search/Search.vue';

const openLink = (event: Event):void => {
  const target = event.target as EventTarget | null;
  if (target instanceof HTMLOptionElement) {

    window.open(target.dataset.url, '_blank');
  }
}
const trackSearch = (event: Event):void => {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'search-submitted',
    search: 'Search',
  });
}
</script>

<template>
<form method="get" action="https://iampropertysuccesshub.thinqi.co.uk/search" target="_blank" @submit="trackSearch">
  <input type="hidden" name="page" value="1" />
  <input type="hidden" name="sortType" value="relevant" />
  <label>
    <span class="visually-hidden">Search all learning articles</span>
    <Search class="search--stylised" data-url="https://iampropertysuccesshub.thinqi.co.uk/api/search/discovery?language=en&query=" data-schema="results" data-min-length="5">
      <input type="text" name="query" autocomplete="off" aria-autocomplete="none" list="articles" placeholder="Search all learning articles" class="input--sm"/>
      <button class="suffix me-0 mb-0 fa-regular fa-search" title="Search" slot="suffix"></button>
      <datalist @click="openLink">
        <option data-url="https://iampropertysuccesshub.thinqi.co.uk/repository/resource/cfaf133d-7029-4fca-9257-0f67512faffd/overview" data-value="CRM solution overview">CRM solution overview</option>
      </datalist>
    </Search>
  </label>
</form>
</template>
