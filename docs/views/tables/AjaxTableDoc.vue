<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';

  import TrackEvents from '../TrackEvents.vue';

  import TableIntegration from './components/TableIntegration.vue';
  import Versions from '../Versions.vue';

  import { table as events } from '../../events.js';

</script>

<template>
  <TrackEvents
    selector="iam-table,iam-table-basic,iam-table-no-submit,iam-table-submit,iam-ajax"
    :events="[
      'update-show',
      'update-page',
      'row-expanded',
      'row-selected',
      'all-rows-selected',
      'all-rows-unselected',
      'sort-by-heading',
      'search-submit',
      'update-show',
      'update-page',
      'row-expmded',
    ]"
  ></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Ajax table</h1>
    </DSHeader>

    <p class="lead">This table component is an expansion of the advanced table that supports Ajax data loading.</p>

    <p>The ajax table will require the `data-ajax` attribute to be set with the URL from which to fetch the data. This attribute should be added to the component itself or to the attached form element.</p>
    <p>The data returned from the Ajax request should be in JSON:API standard format or a `data-schema` attribute that defines the structure of the data.</p>

    <p class="note"><strong>Note:</strong> The ajax table can be used to mimic the default table but with ajax support by not applying features used in the advanced table. i.e. sorting, filtering, and column management.</p>

    <TableIntegration></TableIntegration>
    <Versions pdf="/pdfs/table.pdf">
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
            <td>V2 added</td>
            <td>26.08.2026</td>
            <td>A large refactoring done alongside the creation of the advanced table component.</td>
          </tr>
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
  </main>
</template>
