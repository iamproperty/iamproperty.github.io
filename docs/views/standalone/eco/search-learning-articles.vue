
<script setup lang="ts">
import Search from '@/components/Search/Search.vue';

const openLink = (event: Event):void => {
  const target = event.target as EventTarget | null;
  if (target instanceof HTMLOptionElement) {

    window.open(target.dataset.url, '_blank');
  }
}
</script>

<template>
<form method="get" action="https://iamproperty.learn.link/search/content" target="_blank">
  <input type="hidden" name="page" value="1" />
  <input type="hidden" name="sortType" value="relevant" />
  <label>
    <span class="visually-hidden">Search all learning articles</span>
    <Search class="search--stylised">
      <input type="text" name="phrase" autocomplete="off" aria-autocomplete="none" list="articles" placeholder="Search all learning articles" class="input--sm"/>
      <button class="suffix me-0 mb-0 fa-regular fa-search" title="Search" slot="suffix"></button>
      <datalist id="articles">
        <option value="Cirrus - I don’t have the desktop App installed" data-url="https://iampropertyinternal.zendesk.com/hc/en-gb/articles/30187115513873-Cirrus-I-don-t-have-the-desktop-App-installed" @click="openLink"></option>
      </datalist>
    </Search>
  </label>
</form>
</template>
