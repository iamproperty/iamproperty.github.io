<script setup>
  import IndexCard from '../IndexCard.vue';
  import routes from '../../routes.ts';
  import Key from '../key.vue';

  import DSHeader from '../DSHeader.vue';
  import TableFeatures from '../TablesFeatures.vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  import { generateList } from '../../utils/indexPage.ts';

  const standardisedcomponents = generateList(routes, '/standardised');
  const components = generateList(routes, '/components');
  const formComponents = generateList(routes, '/form-components');
  const cardComponents = generateList(routes, '/cards');
  const chartComponents = generateList(routes, '/charts');
  const navComponents = generateList(routes, '/nav');
  const notificationsComponents = generateList(routes, '/notifications');
  const dialogComponents = generateList(routes, '/dialogs');
</script>

<template>
  <main>
    <DSHeader :route="route"></DSHeader>

    <h1>Components</h1>

    <h2 class="pb-2">Standardised components</h2>
    <p>
      Our set of components with structured pre-defined content and options. While the UI components will be flexible
      and extendable these components will be a lot more defiend with far less options.
    </p>
    <div class="sub-grid mb-5">
      <a
        :href="item.link"
        :title="`View the documentation for the ${item.title} standardised component`"
        v-for="item in standardisedcomponents"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>
    <h2>UI Components</h2>
    <div class="sub-grid mb-5">
      <a
        :href="item.link"
        :title="`View the documentation for the ${item.title} component`"
        v-for="item in components"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>

    <h2>Form components</h2>

    <div class="sub-grid mb-5">
      <a
        :href="item.link"
        :title="`View the documentation for the ${item.title} form component`"
        v-for="item in formComponents"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>

    <h2>Card components</h2>

    <div class="sub-grid mb-5">
      <a
        :href="item.link"
        :title="`View the documentation for the ${item.title} component`"
        v-for="item in cardComponents"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>

    <h2>Table components</h2>


    <div class="sub-grid mb-2">
      <a
        :href="item.link"
        :title="`View the documentation for the ${item.title} component`"
        v-for="item in tableComponents"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>
    <details open class="mb-5">
      <summary>View the differences between table components</summary>

      <TableFeatures></TableFeatures>
    </details>


    <h2>Chart components</h2>

    <div class="sub-grid mb-5">
      <a
        :href="item.link"
        :title="`View the documentation for the ${item.title} component`"
        v-for="item in chartComponents"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>

    <h2>Navigation components</h2>

    <div class="sub-grid mb-5">
      <a
        :href="item.link"
        :title="`View the documentation for the ${item.title} component`"
        v-for="item in navComponents"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>

    <h2>Notification components</h2>

    <div class="sub-grid mb-5">
      <a
        :href="item.link"
        :title="`View the documentation for the ${item.title} component`"
        v-for="item in notificationsComponents"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>

    <h2>Dialog components</h2>

    <div class="sub-grid mb-5">
      <a
        :href="item.link"
        :title="`View the documentation for the ${item.title} component`"
        v-for="item in dialogComponents"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>

    <Key></Key>
  </main>
</template>
