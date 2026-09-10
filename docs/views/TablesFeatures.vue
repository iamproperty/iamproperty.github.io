<script setup lang="ts">


  const elementTableFeatures = [
    'Basic styling'
  ];
  const basicTableFeatures = [...elementTableFeatures,
    'Vertical overflow',
    'Responsive Mobile view',
    'Expandable rows',
    'Pagination'
  ];
  const expandedTableFeatures = [...basicTableFeatures,
    'CTA fixed column',
    'Action bar',
    'Selectable rows',
  ];
  const advancedTableFeatures = [...expandedTableFeatures,
    'Sorting via column headers',
    'Filtering via column headers',
    'Show/hide columns',
    'Column reordering (In coming)',
    'Export to CSV',
  ];

  const ajaxTableFeatures = [...advancedTableFeatures,
    'Ajax data loading',
  ];


  const tableFeatures = [...new Set([...elementTableFeatures,...basicTableFeatures, ...expandedTableFeatures, ...advancedTableFeatures, ...ajaxTableFeatures])];
</script>
<template>

  <table>
    <thead>
      <tr>
        <th>Component behaviour</th>
        <th>Component</th>
        <th>Required Attribute</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Basic</td>
        <td class="text-nowrap">iam-table-basic</td>
        <td>n/a</td>
        <td>
          This component doesn't feature any functionality that requires the data of the table to reload.
          Pagination will work by showing and hiding rows that have already been loaded in the page. This
          component won't support the use of an action bar or any other functionality other than pagination.
        </td>
      </tr>
      <tr>
        <td>Expanded (Default)</td>
        <td class="text-nowrap">iam-table</td>
        <td>n/a</td>
        <td>
          Expanded features such as an action bar, expandable rows, and selectable rows are available in this component. This component is the default table component and will be used if no other table component is specified.
        </td>
      </tr>
      <tr>
        <td>Advanced</td>
        <td class="text-nowrap">iam-table-advanced</td>
        <td>n/a</td>
        <td>
          Advanced features such as sorting, filtering, column reordering, and show/hide columns are available in this component.
        </td>
      </tr>
      <tr>
        <td>AJAX</td>
        <td class="text-nowrap">iam-table-ajax</td>
        <td class="text-nowrap">data-ajax</td>
        <td>
          Any interaction with this component will trigger an ajax call which in turn will reload the table but
          not the page.
        </td>
      </tr>
    </tbody>
  </table>

  <span class="h4">Table features</span>
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
        <th>{{ feature }}</th>
        <td><i v-if="elementTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
        <td><i v-if="basicTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
        <td><i v-if="expandedTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
        <td><i v-if="advancedTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
        <td><i v-if="ajaxTableFeatures.includes(feature)" class="fa-regular fa-check text-complete"></i></td>
      </tr>
    </tbody>
  </table>
</template>
