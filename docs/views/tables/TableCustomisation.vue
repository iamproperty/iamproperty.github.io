<script setup>
  import TableCustomisation from '@/components/Table/TableCustomisation.vue';
  import Integration from '../Integration.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import Versions from '../Versions.vue';

  import TableAdvanced from '@/components/Table/TableAdvanced.vue';

  import Actionbar from '@/components/Actionbar/Actionbar.vue';

  import { tableCustomisation as events } from '../../events.js';
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


    <hr class="mb-5"/>

    <h3>Show/hide on change</h3>


    <div class="container visualtest mb-5 bg-light">
      <TableAdvanced class="table--fullwidth">
        <Actionbar data-selectall>

          <TableCustomisation data-open></TableCustomisation>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th class="th--fixed" data-sort data-filters='[{"operator": "equals", "type": "text"}]'>Property</th>
              <th>Criteria match</th>

              <th data-sort data-filters='[{"operator": "equals", "type": "date"}]' data-format="date">Date listed</th>
              <th data-sort data-filters data-format="price">Current list price</th>
              <th data-sort data-filters='[{"operator": "equals", "type": "select"}]'>Branch</th>
              <th data-sort>Weeks on market</th>

              <th class="th--fixed"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>59 The Glen, NE68 3LS</td>
              <td>full</td>

              <td>23-04-26</td>
              <td>600000</td>
              <td>Heaton</td>
              <td>11 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>full</td>

              <td>27/04/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 The South Gate Wood, NE68 3LS</td>
              <td>full</td>

              <td>28/04/2026</td>
              <td>£500,000</td>
              <td>Cramlington</td>
              <td>213 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>partial</td>
              <td>27/06/2026</td>
              <td>£1,300,000</td>
              <td>Gosforth</td>
              <td>21 days 3 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
          </tbody>
        </table>
      </TableAdvanced>
    </div>


    <p>Each column in the table has a checkbox adjacent to it. Un-checked columns will be hidden from the table.</p>

    <p>Checkboxes that are in the disabled state are columns that can’t be hidden</p><!-- Requirement -->

    <div class="container visualtest mb-5 bg-light">
      <TableAdvanced class="table--fullwidth">
        <Actionbar data-selectall>

          <TableCustomisation data-customisation='[{"label": "Property", "isDisabled": true},{"label": "Date listed", "isVisible": false}, {"label":"Current list price"}]' data-open></TableCustomisation>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th class="th--fixed" data-sort data-filters='[{"operator": "equals", "type": "text"}]'>Property</th>
              <th>Criteria match</th>

              <th data-sort data-filters='[{"operator": "equals", "type": "date"}]' data-format="date">Date listed</th>
              <th data-sort data-filters data-format="price">Current list price</th>
              <th data-sort data-filters='[{"operator": "equals", "type": "select"}]'>Branch</th>
              <th data-sort>Weeks on market</th>

              <th class="th--fixed"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>59 The Glen, NE68 3LS</td>
              <td>full</td>

              <td>23-04-26</td>
              <td>600000</td>
              <td>Heaton</td>
              <td>11 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>full</td>

              <td>27/04/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 The South Gate Wood, NE68 3LS</td>
              <td>full</td>

              <td>28/04/2026</td>
              <td>£500,000</td>
              <td>Cramlington</td>
              <td>213 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>partial</td>
              <td>27/06/2026</td>
              <td>£1,300,000</td>
              <td>Gosforth</td>
              <td>21 days 3 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
          </tbody>
        </table>
      </TableAdvanced>
    </div>


    <p>If the user clicks ‘Reset to default’ then the menu should return to the default values specified by the system.</p>


    <p>A blue dot appears on the edit table button to show the user that the table has been configured and saved so the user is aware changes have been applied when visiting it later. </p><!-- Requirement -->

    <h3>Table customise on save</h3>

    <div class="container visualtest mb-5 bg-light">
      <TableAdvanced class="table--fullwidth">
        <Actionbar data-selectall>

          <TableCustomisation data-save data-customisation='[{"label": "Property", "isDisabled": true},{"label": "Date listed", "order": 2 }, {"label":"Current list price", "order": 1}]' data-open></TableCustomisation>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th class="th--fixed" data-sort data-filters='[{"operator": "equals", "type": "text"}]'>Property</th>
              <th>Criteria match</th>

              <th data-sort data-filters='[{"operator": "equals", "type": "date"}]' data-format="date">Date listed</th>
              <th data-sort data-filters data-format="price">Current list price</th>
              <th data-sort data-filters='[{"operator": "equals", "type": "select"}]'>Branch</th>
              <th data-sort>Weeks on market</th>

              <th class="th--fixed"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>59 The Glen, NE68 3LS</td>
              <td>full</td>

              <td>23-04-26</td>
              <td>600000</td>
              <td>Heaton</td>
              <td>11 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>full</td>

              <td>27/04/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 The South Gate Wood, NE68 3LS</td>
              <td>full</td>

              <td>28/04/2026</td>
              <td>£500,000</td>
              <td>Cramlington</td>
              <td>213 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>partial</td>
              <td>27/06/2026</td>
              <td>£1,300,000</td>
              <td>Gosforth</td>
              <td>21 days 3 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
          </tbody>
        </table>
      </TableAdvanced>
    </div>



    <p>Each column in the table has a checkbox adjacent to it. Un-checked columns will be hidden from the table on save and a success toast notification will be displayed to give the user confirmation that the save has occurred.</p>

    <p>Checkboxes that are in the disabled state are columns that can’t be hidden.</p>

    <p>If the user clicks ‘Reset to default’ then the menu should return to the default values specified by the system.</p>

    <div class="container visualtest mb-5 bg-light">
      <TableAdvanced class="table--fullwidth">
        <Actionbar data-selectall>

          <TableCustomisation data-save data-customisation='[{"label": "Property", "isDisabled": true},{"label": "Date listed", "order": 2 }, {"label":"Current list price", "order": 1}]'></TableCustomisation>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th class="th--fixed" data-sort data-filters='[{"operator": "equals", "type": "text"}]'>Property</th>
              <th>Criteria match</th>

              <th data-sort data-filters='[{"operator": "equals", "type": "date"}]' data-format="date">Date listed</th>
              <th data-sort data-filters data-format="price">Current list price</th>
              <th data-sort data-filters='[{"operator": "equals", "type": "select"}]'>Branch</th>
              <th data-sort>Weeks on market</th>

              <th class="th--fixed"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>59 The Glen, NE68 3LS</td>
              <td>full</td>

              <td>23-04-26</td>
              <td>600000</td>
              <td>Heaton</td>
              <td>11 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>full</td>

              <td>27/04/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 The South Gate Wood, NE68 3LS</td>
              <td>full</td>

              <td>28/04/2026</td>
              <td>£500,000</td>
              <td>Cramlington</td>
              <td>213 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>partial</td>
              <td>27/06/2026</td>
              <td>£1,300,000</td>
              <td>Gosforth</td>
              <td>21 days 3 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
          </tbody>
        </table>
      </TableAdvanced>
    </div>



    <p>When the user clicks save it hides the column. A ‘saved’ customised state can only be cleared if the user ‘resets’ table, supersedes a save or clears cookies.</p>

    <p>A blue dot appears on the edit table button to show the user that the table has been configured and saved so the user is aware changes have been applied when visiting it later.</p>

    <h2>Re-ordering columns</h2>

    <p>When an action bar is used with a table we can add the ability to re-order columns via the ‘Customise’ button. </p>

    <p>Clicking the ‘Customise’ button displays a dialog that allows users to arrow buttons to move the column up or down the list. This change can occur immediately or upon save. </p>

    <p>An ajax call can be used to receive the new column order if desired.</p>

    <div class="container visualtest mb-5 bg-light">
      <TableAdvanced class="table--fullwidth">
        <Actionbar data-selectall>

          <TableCustomisation data-orderable data-customisation='[{"label": "Property", "isDisabled": true},{"label": "Date listed", "order": 2 }, {"label":"Current list price", "order": 1}]' data-open></TableCustomisation>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th class="th--fixed" data-sort data-filters='[{"operator": "equals", "type": "text"}]'>Property</th>
              <th>Criteria match</th>

              <th data-sort data-filters='[{"operator": "equals", "type": "date"}]' data-format="date">Date listed</th>
              <th data-sort data-filters data-format="price">Current list price</th>
              <th data-sort data-filters='[{"operator": "equals", "type": "select"}]'>Branch</th>
              <th data-sort>Weeks on market</th>

              <th class="th--fixed"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>59 The Glen, NE68 3LS</td>
              <td>full</td>

              <td>23-04-26</td>
              <td>600000</td>
              <td>Heaton</td>
              <td>11 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>full</td>

              <td>27/04/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 The South Gate Wood, NE68 3LS</td>
              <td>full</td>

              <td>28/04/2026</td>
              <td>£500,000</td>
              <td>Cramlington</td>
              <td>213 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>partial</td>
              <td>27/06/2026</td>
              <td>£1,300,000</td>
              <td>Gosforth</td>
              <td>21 days 3 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
          </tbody>
        </table>
      </TableAdvanced>
    </div>


    <h2>Loading state example</h2>

    <p>In the event of the table customisation taking more the 3 secs a ‘fetching data’ loading state with animated spinner will display to provide feedback to the user that the action is taking place, it’s just taking longer than expected.   </p>

    <div class="container visualtest mb-5 bg-light">
      <TableAdvanced class="table--fullwidth">
        <Actionbar data-selectall>

          <TableCustomisation data-customisation='[{"label": "Property", "isDisabled": true},{"label": "Date listed", "order": 2 }, {"label":"Current list price", "order": 1}]' data-open class="loading"></TableCustomisation>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th class="th--fixed" data-sort data-filters='[{"operator": "equals", "type": "text"}]'>Property</th>
              <th>Criteria match</th>

              <th data-sort data-filters='[{"operator": "equals", "type": "date"}]' data-format="date">Date listed</th>
              <th data-sort data-filters data-format="price">Current list price</th>
              <th data-sort data-filters='[{"operator": "equals", "type": "select"}]'>Branch</th>
              <th data-sort>Weeks on market</th>

              <th class="th--fixed"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>59 The Glen, NE68 3LS</td>
              <td>full</td>

              <td>23-04-26</td>
              <td>600000</td>
              <td>Heaton</td>
              <td>11 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>full</td>

              <td>27/04/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 The South Gate Wood, NE68 3LS</td>
              <td>full</td>

              <td>28/04/2026</td>
              <td>£500,000</td>
              <td>Cramlington</td>
              <td>213 weeks</td>

              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>partial</td>
              <td>27/06/2026</td>
              <td>£1,300,000</td>
              <td>Gosforth</td>
              <td>21 days 3 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
          </tbody>
        </table>
      </TableAdvanced>
    </div>


    <Integration component="table-customisation" componentName="iam-table-customisation">

      <template #web-component>
        <pre><code>{{`<iam-actionbar><iam-table-customisation></iam-table-customisation></iam-actionbar>
<table>
  <thead>
  </thead>
  <tbody>
  </tbody>
</table>
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
              <th>data-title</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Set the title of the table customisation dialog</td>
            </tr>
            <tr>
              <th class="text-nowrap">data-customisation</th>
              <td></td>
              <td>Array</td>
              <td>No</td>
              <td>Set the initial customisation settings for the table</td>
            </tr>
            <tr>
              <th>data-save</th>
              <td>false</td>
              <td>Flag</td>
              <td>No</td>
              <td>Set whether the customisation should be saved</td>
            </tr>
            <tr>
              <th>data-order</th>
              <td>false</td>
              <td>Flag</td>
              <td>Yes</td>
              <td>
                Set whether the table columns can be reordered. If set, the order of the columns can be changed by the user.
              </td>
            </tr>
          </tbody>
        </table>

        <span class="h4">Customisation array object items</span>
        <p>The customisation array should contain objects with the following properties:</p>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>label</th>
              <td>String</td>
              <td>The label of the column to customise</td>
            </tr>
            <tr>
              <th>isDisabled</th>
              <td>Flag</td>
              <td>Set whether the column is disabled or not</td>
            </tr>
            <tr>
              <th>isVisible</th>
              <td>Flag</td>
              <td>Set whether the column is visible</td>
            </tr>
            <tr>
              <th>order</th>
              <td>Number</td>
              <td>Set the order of the column</td>
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
              <th>.loading</th>
              <td>Show a loading state in the dialog.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #dispatched-events>
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
