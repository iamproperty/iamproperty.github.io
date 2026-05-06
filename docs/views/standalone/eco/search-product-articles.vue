
<script setup>
import Search from '@/components/Search/Search.vue';
</script>

<template>
<form>
  <label>
    Search existing transactions
    <Search data-url="https://iampropertyinternal.zendesk.com/hc/api/internal/instant_search.json?query=" data-suffix="search" class="search--stylised">
      <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="articles" />
      <button class="suffix me-0 mb-0 fa-regular fa-search" title="Search" slot="suffix"></button>
      <datalist id="articles">
        <option value="Cirrus - I don’t have the desktop App installed" data-url="https://iampropertyinternal.zendesk.com/hc/en-gb/articles/30187115513873-Cirrus-I-don-t-have-the-desktop-App-installed"></option>
      </datalist>
    </Search>
  </label>
</form>
</template>
