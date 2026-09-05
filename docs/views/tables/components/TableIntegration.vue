<script lang="ts" setup>
  import Integration from '../../Integration.vue';

  import { table as events } from '../../../events.js';

  defineProps({
    componentType: String,
  });

  const elementTableFeatures = [
    'Basic styling'
  ];
  const basicTableFeatures = [...elementTableFeatures,
    'Vertical overflow',
    'CTA fixed column',
    'Responsive Mobile view',
    'Expandable rows',
    'Pagination'
  ];
  const expandedTableFeatures = [...basicTableFeatures,
    'Action bar',
    'Selectable rows',
    'Filtering via attached form or actionbar'
  ];
  const advancedTableFeatures = [...expandedTableFeatures,
    'Sorting via column headers',
    'Filtering via column headers',
    'Show/hide columns (Coming soon)',
    'Column reordering (Coming soon)',
    'Export to CSV',
  ];


  const ajaxTableFeatures = [...advancedTableFeatures,
    'Ajax data loading',
  ];

  advancedTableFeatures.splice(advancedTableFeatures.indexOf('Responsive Mobile view'), 1);

  const tableFeatures = [...new Set([...elementTableFeatures,...basicTableFeatures, ...expandedTableFeatures, ...advancedTableFeatures, ...ajaxTableFeatures])];

</script>
<template>

  <Integration :component="componentType" :componentName="'iam-' + componentType" >
    <template #details>
      <h4>Component Overview</h4>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Use case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-nowrap"><a href="/elements/tables" class="mb-1">Table element</a></th>
            <td>A basic table without pagination.</td>
          </tr>
          <tr>
            <th class="text-nowrap"><a href="/tables/basic" class="mb-1">Basic table</a></th>
            <td>A basic table with pagination and some additional features.</td>
          </tr>
          <tr>
            <th class="text-nowrap"><a href="/tables/default" class="mb-1">Table (Default)</a></th>
            <td>A table which can use an actionbar or can have an attached form to do filtering.</td>
          </tr>
          <tr>
            <th class="text-nowrap"><a href="/tables/advanced" class="mb-1">Advanced Table</a></th>
            <td>A table with inline column filtering and sorting.</td>
          </tr>
          <tr>
            <th class="text-nowrap"><a href="/tables/ajax" class="mb-1">Ajax Table</a></th>
            <td>A table with ajax data loading.</td>
          </tr>
        </tbody>
      </table>

      <p class="note mb-5"><strong>Note:</strong> Each component is an evolution of the previous ones. Features are cumulative, so the advanced table has all the features of the basic and expanded tables. </p>

      <h4>Features comparison</h4>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Table element</th>
            <th>Basic Table</th>
            <th>Expanded Table</th>
            <th>Advanced Table</th>
            <th>Ajax Table</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="feature in tableFeatures" :key="feature">
            <th>{{ feature }}{{ feature == 'Responsive Mobile view' ? ' [1]' : '' }}</th>
            <td><i v-if="elementTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
            <td><i v-if="basicTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
            <td><i v-if="expandedTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
            <td><i v-if="advancedTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
            <td><i v-if="ajaxTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
          </tr>
        </tbody>
      </table>

      <p>[1] Responsive Mobile view is not supported in the Advanced Table or the ajax table that uses the filtering and sorting via the column headers.</p>
    </template>
    <template #web-component>
      <pre><code>{{`<iam-${componentType}>
<table>
  <thead>
  </thead>
  <tbody>
  </tbody>
</table>
</iam-${componentType}>`}}</code></pre>
    </template>

    <template #attr>
      <table>
        <thead>
          <tr>
            <th>Attributes</th>
            <th>Default</th>
            <th>Options/Type</th>
            <th>Required</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>data-show (Passed down to the pagination)</th>
            <td>15</td>
            <td>Number</td>
            <td>No</td>
            <td>Set the number rows shown on page load</td>
          </tr>
          <tr>
            <th>data-increment (Passed down to the pagination)</th>
            <td>15</td>
            <td>Number</td>
            <td>No</td>
            <td>Set the number rows added to the page when loading more</td>
          </tr>
          <tr>
            <th>data-page (Passed down to the pagination)</th>
            <td>1</td>
            <td>Number</td>
            <td>No</td>
            <td>Set the page shown</td>
          </tr>
          <tr>
            <th>data-total (Passed down to the pagination)</th>
            <td></td>
            <td>Number</td>
            <td>Yes</td>
            <td>
              Set the total of results that could be shown, used to work button actions. If the total is calculated
              via javascript and by querying the dom by default.
            </td>
          </tr>
          <tr>
            <th>data-submit</th>
            <td></td>
            <td>Flag</td>
            <td>No</td>
            <td>When set will submit the attached or generated form of the table. Causing the page to reload with the form data.</td>
          </tr>
          <tr>
            <th>data-selectall</th>
            <td></td>
            <td>Flag</td>
            <td>No</td>
            <td>Creates a select box for each row</td>
          </tr>
        </tbody>
      </table>
    </template>

    <template #classes>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>.table-fullwidth</th>
            <td>The table will always be fullwidth even on mobile phones.</td>
          </tr>
          <tr>
            <th>.table-cta</th>
            <td>Fixes the last column of the table to the right so the rows CTA is always visible.</td>
          </tr>
          <tr>
            <th>.mh-sm</th>
            <td>
              Set a small max height onto the table, when used set a large data-total attribute so that the pagination
              doesn't show.
            </td>
          </tr>
          <tr>
            <th>.mh-md</th>
            <td>
              Set a medium max height onto the table, when used set a large data-total attribute so that the
              pagination doesn't show.
            </td>
          </tr>
          <tr>
            <th>.mh-large</th>
            <td>
              Set a large max height onto the table, when used set a large data-total attribute so that the pagination
              doesn't show.
            </td>
          </tr>
        </tbody>
      </table>
    </template>

    <template #parts>
      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>container</th>
            <td>A container div</td>
          </tr>
          <tr>
            <th>wrapper</th>
            <td>A wrapper div</td>
          </tr>
        </tbody>
      </table>
    </template>

    <template #dispatched-events>
      <span v-html="events"></span>
    </template>

    <template #criteria>
      <ul>
        <li>The pagination should only show when it it needed.</li>
        <li>The main row CTA should always be shown.</li>
        <li>The mobile view of the row should only show the basics until expanded</li>
      </ul>
    </template>
    <template #data-layer>
      <span v-html="events"></span>
    </template>
  </Integration>
</template>
