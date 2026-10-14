<script setup>
  import TableAdvanced from '@/components/Table/TableAdvanced.vue';
  import Integration from '../Integration.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import Versions from '../Versions.vue';

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Table customisation  </h1>
    </DSHeader>

    <p class="lead">When an <a href="/components/actionbar">action bar </a>is used with the Expanded or Advance table we can add the ability to customise the table. This allows users to customise what columns are shown or hidden and change which order they display.  </p>


    <h2>Dialog</h2>

    <h3>Column show/hide</h3>

    <p>When an action bar is used with a table we can add the ability to show and/or hide via the ‘Customise’ button.</p>

    <p>Clicking the ‘Customise’ button displays a dialog that allows users to show/hide columns by checking or unchecking the checkbox adjacent to the column name. This change can occur immediately or upon save.</p>

    <p>An ajax call can be used to receive the new columns if desired.</p><!-- Requirement -->

    <h3>Show/hide on change</h3>

    <p>image</p>

    <p>Each column in the table has a checkbox adjacent to it. Un-checked columns will be hidden from the table.</p>

    <p>Checkboxes that are in the disabled state are columns that can’t be hidden</p><!-- Requirement -->

    <p>image</p>

    <p>If the user clicks ‘Reset to default’ then the menu should return to the default values specified by the system.</p>


    <p>A blue dot appears on the edit table button to show the user that the table has been configured and saved so the user is aware changes have been applied when visiting it later. </p><!-- Requirement -->

    <h3>Table customise on save</h3>
    <p>Image</p>

    <p>Each column in the table has a checkbox adjacent to it. Un-checked columns will be hidden from the table on save and a success toast notification will be displayed to give the user confirmation that the save has occurred.</p>

    <p>Checkboxes that are in the disabled state are columns that can’t be hidden.</p>

    <p>If the user clicks ‘Reset to default’ then the menu should return to the default values specified by the system.</p>

    <p>Image</p>

    <p>When the user clicks save it hides the column. A ‘saved’ customised state can only be cleared if the user ‘resets’ table, supersedes a save or clears cookies.</p>

    <p>A blue dot appears on the edit table button to show the user that the table has been configured and saved so the user is aware changes have been applied when visiting it later.</p>

    <h2>Re ordering columns</h2>

    <p>When an action bar is used with a table we can add the ability to re-order columns via the ‘Customise’ button. </p>

    <p>Clicking the ‘Customise’ button displays a dialog that allows users to arrow buttons to move the column up or down the list. This change can occur immediately or upon save. </p>

    <p>An ajax call can be used to receive the new column order if desired.</p>

    <p>Image</p>

    <h2>Loading state example</h2>

    <p>In the event of the table customisation taking more the 3 secs a ‘fetching data’ loading state with animated spinner will display to provide feedback to the user that the action is taking place, it’s just taking longer than expected.   </p>

    <p>Image</p>

    <Integration component="table-customisation" componentName="iam-table-customisation" >
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
    <Versions pdf="/pdfs/table-customisation.pdf">
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
            <td>24.08.2026</td>
            <td>The table customisation options have been created to give further customisation functionality to the user when used the action bar is use in conjunction with expanded/advanced tables.</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>
