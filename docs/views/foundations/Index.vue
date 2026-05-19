<script setup>
  import IndexCard from '../indexCard.vue';
  import routes from '../../routes.ts';
  import Key from '../key.vue';

import DSHeader from '../DSHeader.vue';
import { useRoute } from 'vue-router'

const route = useRoute();

  import {generateList} from '../../utils/IndexPage.ts';

  const foundations = generateList(routes, '/foundations');
</script>

<template>
  
  <main>
    <DSHeader :route="route"></DSHeader>

    <div class="sub-grid mb-5">
      <a :href="item.link" v-for="item in foundations" class="md-col-span-4 col-start-auto" :key="item.link">
        <IndexCard :item="item" />
      </a>
    </div>

    <Key></Key>
  </main>
</template>

