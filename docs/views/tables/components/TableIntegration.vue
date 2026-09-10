<script lang="ts" setup>
  import Integration from '../../Integration.vue';
  import Versions from '../../Versions.vue';

  import { table as events } from '../../../events.js';
</script>
<template>

  <Integration component="carousel" componentName="iam-carousel">
    <template #web-component>
      <pre><code>{{`<iam-table>
<table>
  <thead>
  </thead>
  <tbody>
  </tbody>
</table>
</iam-table>`}}</code></pre>
    </template>
    <template #vue-component>
      <pre><code>{{`<script setup>import Table from '@/components/Table/Table.vue</script>

<Table>
<table>
  <thead>
  </thead>
  <tbody>
  </tbody>
</table>
</Table>
`}}</code></pre>
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
            <th>data-expand (on each row)</th>
            <td></td>
            <td>Flag</td>
            <td>No</td>
            <td>
              This attribute when added creates a button on desktop for the row to be expanded to show more content.
            </td>
          </tr>
          <tr>
            <th>data-selectall (on ationbar)</th>
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
  <Versions pdf="/pdfs/tables.pdf">
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
          <td>V1.2 added</td>
          <td>07.03.2025</td>
          <td>Added new variant that allows users to sort the table data via clicking the column headers.</td>
        </tr>
        <tr>
          <td>V1.1 added</td>
          <td>5.09.2023</td>
          <td>
            Added multiple variants to the tables: Default, Expansion, Selection, Overflow, Expansion + Selection,
            Expansion + Overflow. Added various mobile card states. Added in some rules around behaviours, formatting
            and dimension.
          </td>
        </tr>
        <tr>
          <td>V1 added</td>
          <td>15.05.2023</td>
          <td>N/A</td>
        </tr>
      </tbody>
    </table>
  </Versions>
</template>
