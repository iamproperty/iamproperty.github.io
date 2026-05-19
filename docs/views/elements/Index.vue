<script setup>
  import IndexCard from '../indexCard.vue';
  import routes from '../../routes.ts';
  import Key from '../key.vue';

import DSHeader from '../DSHeader.vue';
import { useRoute } from 'vue-router'

const route = useRoute();
  import {generateList} from '../../utils/IndexPage.ts';

  const elements = generateList(routes, '/elements');
  const linkElements = generateList(routes, '/links');
  const formElements = generateList(routes, '/form');

</script>

<template>
  <main>
    <DSHeader :route="route"></DSHeader>

      <div class="sub-grid mb-5">
          <a :href="item.link" v-for="item in elements" class="md-col-span-4 col-start-auto">
            <IndexCard :item="item" />
          </a>
      </div>

      <h2>Link and button Elements</h2>

      <div class="sub-grid mb-5">
          <a :href="item.link" v-for="item in linkElements" class="md-col-span-4 col-start-auto">
            <IndexCard :item="item" />
          </a>
      </div>

      <h2>Form Elements</h2>

      <div class="sub-grid mb-5">
        
          <a :href="item.link" v-for="item in formElements" class="md-col-span-4 col-start-auto">
            <IndexCard :item="item" />
          </a>
      </div>

      <Key></Key>

  </main>
</template>
