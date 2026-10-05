<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Search from '@/components/Search/Search.vue';

  const dialogElement = ref();
  const searchInput = ref();
  const searchComponent = ref();

  onMounted(async () => {
    try {
      await fetch('https://helpcentre.iamproperty.com/api/v2/help_center/articles/search.json?label_names=crm_articles')
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((item) => {
            const option = document.createElement('option');
            option.value = item.name;
            option.dataset.url = item.html_url;
            option.setAttribute('tabindex', '1');
            option.textContent = item.name;
            dialogElement.value.append(option);
          });

          return response;
        });
    } catch (error) {
      console.log(error);
    }
  });

  const openLink = (event: Event): void => {
    const target = event.target as EventTarget | null;
    if (target instanceof HTMLOptionElement && target.dataset.url) {

      window.open(target.dataset.url, '_blank');

      setTimeout(() => {

        searchInput.value.value = '';
        searchInput.value.setAttribute('placeholder', 'Search all support articles');
        searchInput.value.removeAttribute('data-value');

        dialogElement.value.querySelectorAll('.active, .js-hide').forEach(element => {
          element.classList.remove('active', 'js-hide');
        });
      }, 100);

    }
  };

  const trackSearch = (event: Event): void => {

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'search-submitted',
      form: 'Support article search',
      search: 'Search',
    });
  };
</script>

<template>
  <label>
    <span class="visually-hidden">Search existing transactions</span>
    <Search ref="searchComponent" class="search--stylised">
      <input
        ref="searchInput"
        type="text"
        name="query"
        autocomplete="off"
        aria-autocomplete="none"
        list="articles"
        placeholder="Search all support articles"
        class="input--sm"
        required
      />
      <datalist id="articles" ref="dialogElement" @click="openLink"></datalist>
    </Search>
  </label>
</template>
