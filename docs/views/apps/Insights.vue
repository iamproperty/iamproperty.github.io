<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DSHeader from '../DSHeader.vue';
import IndexCard from '../IndexCard.vue';
import Integration from '../Integration.vue';
import Versions from '../Versions.vue';

import { routeToIndexCard, convertToStructured } from '../../utils/indexPage.ts';
import routes from '../../routes.ts';
const structuredRoutes = convertToStructured(routes);

const componentHeight = ref('1000px');


const components = [
  routeToIndexCard(structuredRoutes['tables']['advanced'], '/tables/advanced'),
  routeToIndexCard(structuredRoutes['components']['map'], '/components/map')
];


onMounted(() => {

  window.addEventListener("message", (event) => {

    const message = event.data;

    console.log(message);


    if (message.type == "component-loaded") {

      const panelHeight = 80 + message.detail.height + 20 + 30;
      componentHeight.value = `${panelHeight}px`;

      console.log(event);

      if(event && event.source && event.source.postMessage) {
        event.source.postMessage(
          {
            type: "top-window-details",
            detail: {
              actions: [
                {
                  label: "Create Task",
                  action: "create-task",
                },
                {
                  label: "Create Print Campaign",
                  action: "create-print-campaign",
                },
                {
                  label: "Export table data",
                  action: "export-table-data",
                }
              ],
              criteria: 'match-criteria'
            }
          },
          "*"
        );
      }
    }

    if (message.type == "insight-action") {

      console.log('insight-action', message);
    }
  });

});

</script>

<template>
  <main>
    <DSHeader section="apps">
      <h1>Insights</h1>
    </DSHeader>

    <p class="lead">Created to be used in the Looker studio, the Insights component can be integrated into your applications or websites to enhance the user experience and provide valuable insights into property data.</p>

    <p>Using the insights component, you can display and interact with property data in a structured manner. The intended use is to provide a clear and intuitive way to explore and manage property information.</p>

    <p>The map data display is driven from the table data - if a filter is applied to the table, it also is applied to the map view.</p>

    <h2>Layout</h2>
    <p class="pb-3">The layout is housed in an admin panel and consists of the following features</p>
    <ol class="mb-5">
      <li>Item counter</li>
      <li>MapLibre component (optional)</li>
      <li>Criteria match key (optional)</li>
      <li>Action bar containing table customisation component</li>
      <li>Advanced table</li>
    </ol>

    <div class="full-width bg-light mb-5">

      <div class="container pt-5">
        <div class="admin-panel" :style="`--componentHeight: ${componentHeight};--componentHeight: 2000px;`">
          <h2 class="">Show me stock currently on market most likely to switch</h2>

        </div>
      </div>

    </div>

    <h2 class="pt-3 pb-4">One iamproperty hub</h2>
    <p>The hub loads the insight from looker via a signed URL inside of an iframe.</p>
    <p>The hub has some additional requirements to pass the table data to a series of actions. The actions may include creating tasks, exporting table data, and more. The properties insight app facilitates these actions by creating buttons inside the insight that will post messages to the top window i.e. the one platform hub.</p>

    <a href="/prototypes/one-platform-hub/stock-switch" class="btn btn-secondary mb-3" target="_blank" title="One property hub prototype - Properties most likely to switch">One property hub prototype</a>

    <h2 class="pt-5">Components used in app</h2>

    <div class="sub-grid mb-5">
      <a
        v-for="item in components"
        :key="item.link"
        :href="item.link"
        class="col-span-12 sm-col-span-6 md-col-span-4 col-start-auto"
      >
        <IndexCard :item="item" />
      </a>
    </div>
    <Integration>
      <template #install>

        <h4>Add to looker manifest</h4>
        <pre ><code>{{`visualization: {
  id: "properties-insight",
  label: "Properties insight",
  file: "properties-insight.js",
  dependencies: [
    "https://iamproperty.github.io/assets/js/apps/properties.app.min.js"
  ]
}
`}}</code></pre>


        <h4 class="pt-3">Add to looker js</h4>
        <pre><code>{{`<iam-properties-insight>
  <table>
    <thead>
      <tr></tr>
    </thead>

    <tbody>
      <tr></tr>
    </tbody>
  </table>
</iam-properties-insight>`}}</code></pre>
      </template>

    </Integration>
    <Versions pdf="/pdfs/properties.pdf">
      <table>
        <thead>
          <tr>
            <th>Version Control</th>
            <th>Date</th>
            <th>Notable updates</th>
          </tr>
        </thead>
        <tbody class="text-body">
          <tr>
            <td>V1 added</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>
<style lang="scss" scoped>


</style>
