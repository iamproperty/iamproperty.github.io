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

    if (message.type == "component-loaded") {

      const panelHeight = 80 + message.detail.height + 20 + 30;
      componentHeight.value = `${panelHeight}px`;

      if(event && event.source && event.source.postMessage) {
        event.source.postMessage(
          {
            type: "crm-available",
          },
          "*"
        );
      }
    }

    if (message.type == "insight-action") {

      console.log('insight-action', message);
    }
  });

  let newScript = document.createElement('script');
  newScript.src = '/assets/js/apps/properties.app.min.js';
  document.head.appendChild(newScript);
});

</script>

<template>
  <main>
    <DSHeader section="apps">
      <h1>Properties insight</h1>
    </DSHeader>

    <div data-add-task >modals go here?</div>


    <p class="lead">Created to be used in the looker studio, the properties visualisation app allows users to explore and manage property data effectively. With inline table filters and an optional supporting map, users can efficiently navigate and visualize property data.</p>

    <p>The properties visualisation app is created as a standalone native web component that can be added to looker as a dependency in the manifest. The Qanalas web fonts used by iamkey are loaded from our CDN and instead of using font awesome, we use inline SVG icons. The iamkey design system components are included in the final compiled web component javascript file.</p>

    <div class="full-width bg-light mb-5">

      <div class="container pt-5">
        <div class="admin-panel" :style="`--componentHeight: ${componentHeight};`">

          <iframe
            id="iframeTable"
            ref="iframeTable"
            title="Inline Frame Example"
            src="/properties-insight.html"
            frameborder="0"
            allowfullscreen
          >
          </iframe>

        </div>
      </div>

    </div>

    <h2>Automatic CTA link</h2>

    <p></p>

    <h2>Create buttons</h2>

    <p>To enable certain actions, the relevant data attributes must be set on the component. Currently <code>data-add-task</code> and <code>data-print-campaign</code> are supported. These actions are designed to dispatch an event that is then picked up by the parent application. For example when loaded into a looker js dashboard the event is picked up and then posts a message to the top window for an application like the One platform hub.</p>

    <h2>Export table data</h2>

    <p>The table data can be exported in CSV format for further analysis and reporting. Clicking on the export button will trigger the download, with the current filters still applied.</p>

    <h2 class="pt-3 pb-4">One iamproperty hub</h2>
    <p>The hub loads the insight from looker via a signed URL inside of an iframe.</p>
    <a href="/prototypes/one-platform-hub/stock-switch" class="btn btn-secondary mb-3" target="_blank" title="One property hub prototype - Properties most likely to switch">One property hub prototype</a>

    <h2 class="pt-5">Components used</h2>

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

.questions-container {
  margin-bottom: 7rem;
  display: grid;
  grid-template-columns: subgrid;
}

.admin-panel {
  height: var(--componentHeight, calc(100vh - 4rem));
  position: relative;
  overflow: hidden;
}

.admin-panel h2 {
  margin-bottom: 0;
}

.admin-panel iframe {
  padding: 0;
  margin-inline: -1rem;
  width: calc(100% + 2rem);
  height: 100%;
}

</style>
