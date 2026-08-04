<script setup>
  import IndexCard from '../IndexCard.vue';
  import routes from '../../routes.ts';
  import Key from '../key.vue';

  import DSHeader from '../DSHeader.vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  import { generateList } from '../../utils/indexPage.ts';

  const patterns = generateList(routes, '/patterns');
  const templates = generateList(routes, '/templates');
</script>

<template>
  <main>
    <DSHeader :route="route"></DSHeader>

    <h2>Patterns</h2>
    <div class="row row-cols-1 row-cols-md-3 mb-5">
      <div v-for="item in patterns">
        <a :href="item.link">
          <IndexCard :item="item" />
        </a>
      </div>
    </div>

    <h2>Templates</h2>
    <div class="row row-cols-1 row-cols-md-3 mb-5">
      <div v-for="item in templates">
        <a :href="item.link">
          <IndexCard :item="item" />
        </a>
      </div>
    </div>
  </main>
</template>
