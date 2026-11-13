<script setup lang="ts">

import DSHeader from '../DSHeader.vue';
import IndexCard from '../IndexCard.vue';
import Integration from '../Integration.vue';
</script>

<template>
  <main>
    <DSHeader section="apps">
      <h1>Dashboard</h1>
    </DSHeader>

    <a href="/prototypes/dashboard">
      <IndexCard :item="{ title: 'Standalone Dashboard' }" />
    </a>

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
  id: "insights",
  label: "Insights",
  file: "insights.js",
  dependencies: [
    "https://iamproperty.github.io/assets/js/apps/insights-loader.app.min.js"
  ]
}
`}}</code></pre>


        <h4 class="pt-3">Add to looker js</h4>
        <pre><code>{{`<iam-app-insights>
  <table>
    <thead>
      <tr></tr>
    </thead>

    <tbody>
      <tr></tr>
    </tbody>
  </table>
</iam-app-insights>`}}</code></pre>
      </template>

    </Integration>
    <Versions pdf="/pdfs/insights.pdf">
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
