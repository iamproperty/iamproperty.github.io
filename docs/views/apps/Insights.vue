<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DSHeader from '../DSHeader.vue';
import IndexCard from '../IndexCard.vue';
import Integration from '../Integration.vue';
import Versions from '../Versions.vue';
import AppInsights from '@/components/AppInsights/AppInsights.vue';

import { routeToIndexCard, convertToStructured } from '../../utils/indexPage.ts';
import routes from '../../routes.ts';
const structuredRoutes = convertToStructured(routes);

const components = [
  routeToIndexCard(structuredRoutes['components']['map'], '/components/map'),
  routeToIndexCard(structuredRoutes['tables']['advanced'], '/tables/advanced'),
  routeToIndexCard(structuredRoutes['components']['pagination'], '/components/pagination'),
  routeToIndexCard(structuredRoutes['components']['actionbar'], '/components/actionbar'),
  routeToIndexCard(structuredRoutes['components']['menu'], '/components/menu'),
  routeToIndexCard(structuredRoutes['notifications']['inline-notification'], '/notifications/inline-notification'),
];

const setupComponent = (event) => {

  const dispatchedEvent = new CustomEvent('top-window-details', {
    detail: {
      "class": "inside-hub",
      "actions": [
        {
          "label": "Create Task",
          "action": "create-task"
        },
        {
          "label": "Create Print Campaign",
          "action": "create-print-campaign"
        },
        {
          "label": "Export table data",
          "action": "export-table-data"
        }
      ],
      "popup-title-column": "Property",
      "match-criteria-column": "match-criteria", // This is show the menu button and the match criteria key. The value is the key that is used to match the table data to the action.
      "match-criteria-indicator-column": "Property",
      "branch-column": "Branch"
    }
  });
  event.target.dispatchEvent(dispatchedEvent);
};

const insightAction = (event) => {

  if (window.confirm("Complete the action?")) {

    const dispatchedEvent = new CustomEvent('insight-action-completed', {
      detail: {
        action: event.detail.action,
        result: {
          success: true,
          message: 'Action completed successfully'
        }
      }
    });

    event.target.dispatchEvent(dispatchedEvent);
  }
  else {

    const dispatchedEvent = new CustomEvent('insight-action-completed', {
      detail: {
        action: event.detail.action,
        result: {
          success: false,
          message: 'Action was cancelled by user'
        }
      }
    });

    event.target.dispatchEvent(dispatchedEvent);
  }
};
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

    <div class="full-width bg-light">

      <div class="container pt-5">
        <div class="admin-panel" :style="`--componentHeight: ${componentHeight};--componentHeight: 2000px;`">
          <h2 class="bg-primary gradient-info">Show me stock currently on market most likely to switch</h2>

          <AppInsights @component-loaded="(event) => { setupComponent(event); }" @insight-action="(event) => { insightAction(event); }" data-show="5">
            <table>
              <thead>
                <tr>
                  <th data-filters data-sort>Property</th>
                  <th data-filters data-sort>Date listed</th>
                  <th data-filters data-sort>Current list price</th>
                  <th data-filters data-sort>Branch</th>
                  <th data-filters data-sort>Weeks on market</th>
                  <th data-filters data-sort>Latest fall through</th>
                  <th data-filters data-sort>Latest price reduction</th>
                  <th data-filters data-sort>Price reduction %</th>
                  <th data-filters data-sort>Listed agent</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr data-latitude="51.46702877541017" data-longitude="-0.12037120753760178" data-match-criteria="full">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-latitude="51.467336224030646" data-longitude="-0.11552177363870442" data-match-criteria="full">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Gosforth</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-latitude="51.46838554393864" data-longitude="-0.11286102229553308" data-match-criteria="partial">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-latitude="51.46838554393864" data-longitude="-0.11286102229553308" data-match-criteria="partial">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-latitude="51.46838554393864" data-longitude="-0.11286102229553308" data-match-criteria="partial">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-latitude="51.46838554393864" data-longitude="-0.11286102229553308" data-match-criteria="partial">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>

              </tbody>
            </table>
          </AppInsights>
        </div>
      </div>

    </div>
    <div class="full-width bg-light mb-5">

      <div class="container pt-2">
        <div class="admin-panel" :style="`--componentHeight: ${componentHeight};`">
          <h2 class="bg-primary gradient-info">Show me stock currently on market most likely to switch</h2>

          <AppInsights @component-loaded="(event) => { setupComponent(event); }" @insight-action="(event) => { insightAction(event); }" data-show="5">
            <table>
              <thead>
                <tr>
                  <th data-filters data-sort>Property</th>
                  <th data-filters data-sort>Date listed</th>
                  <th data-filters data-sort>Current list price</th>
                  <th data-filters data-sort>Branch</th>
                  <th data-filters data-sort>Weeks on market</th>
                  <th data-filters data-sort>Latest fall through</th>
                  <th data-filters data-sort>Latest price reduction</th>
                  <th data-filters data-sort>Price reduction %</th>
                  <th data-filters data-sort>Listed agent</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr data-match-criteria="full">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-match-criteria="full">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Gosforth</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-match-criteria="partial">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-match-criteria="partial">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-match-criteria="partial">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>
                <tr data-match-criteria="partial">
                  <td>59 Glen Street, NE68 3LS</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>Heaton</td>
                  <td>13 weeks</td>
                  <td>22/09/26</td>
                  <td>£300,000</td>
                  <td>5%</td>
                  <td>John Smith</td>
                  <td><a href="/property" target="_blank">View property</a></td>
                </tr>

              </tbody>
            </table>
          </AppInsights>
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
      <template #details>
        <h4>Integration</h4>
        <p>Unlike other components, the insights component is designed to be used in a hub or iframe. The component will dispatch events to the top window to facilitate actions such as creating tasks, exporting table data, and more.</p>
        <p>The component will dispatch the following events to the top window:</p>
        <ul class="mb-5">
          <li><strong>top-window-details</strong> - dispatched when the component is loaded. The event detail will contain the following information:
            <ul class="mb-1">
              <li>class - the class to be added to the top window</li>
              <li>actions - an array of actions to be added to the top window</li>
              <li>popup-title-column - the column to be used as the title in the popup</li>
              <li>match-criteria-column - the column to be used as the match criteria key</li>
              <li>match-criteria-indicator-column - the column to be used as the match criteria indicator</li>
              <li>branch-column - the column to be used as the branch key</li>
            </ul>
          </li>
          <li><strong>insight-action-completed</strong> - dispatched when an action is completed. The event detail will contain the following information:
            <ul class="mb-1">
              <li>action - the action that was completed</li>
              <li>result - an object containing the result of the action. The object will contain a success boolean and a message string.</li>
            </ul>
          </li>
        </ul>

        <span class="h3">Within looker</span>
        <p>Inside Looker, the insights component can be added to your visualizations as a custom visualization. The component will communicate with the top window to facilitate actions and data exchange.</p>
        <p>The iamproperty data team provides support for integrating the insights component within Looker.</p>
      </template>
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
