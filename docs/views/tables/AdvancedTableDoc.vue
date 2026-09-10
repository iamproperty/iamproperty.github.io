<script setup>
  import TrackEvents from '../TrackEvents.vue';

  import TableAdvanced from '@/components/Table/TableAdvanced.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';

  import { table as events } from '../../events.js';


  import desktopImg from '../../img/table/tables-desktop.png';
  import tabletImg from '../../img/table/tables-tablet.png';
  import mobileImg from '../../img/table/tables-mobile.png';
  import TableEvents from './components/TableEvents.vue';
  import TableIntegration from './components/TableIntegration.vue';
</script>

<template>
  <TableEvents></TableEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Advanced table</h1>
    </DSHeader>

    <p class="lead">Advanced tables are used to organise and display data efficiently where the need for a greater level of analysis is required vs standard tables. The Advanced table allows for customisation of table structure with additional greater filtering and sorting functionality.</p>

    <p>The Advanced table’s features are ideal for analysis, reporting and insights data where the user has greater requirements from the data shown in the table.</p>

    <p>The Action bar component is usually coupled with the advanced table to provide further capabilities such as actioning on selected row items, showing/hiding columns, re-ordering columns and pinning columns.</p>

    <h2>Table Anatomy</h2>
    <!-- TODO: Add number labels  -->
    <div class="container visualtest mb-5 bg-light">
      <TableAdvanced class="table--fullwidth">
        <Actionbar data-selectall>
          <button class="btn btn-action fa-box-archive">Archive</button
          ><button class="btn btn-action fa-trash-can">Export to .csv</button>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th class="th--fixed" data-sort data-filters='[{"operator": "equals", "type": "text"}]'>Property</th>
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
              <td>23-04-26</td>
              <td>600000</td>
              <td>Heaton</td>
              <td>11 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>27/04/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 The South Gate Wood, NE68 3LS</td>
              <td>28/04/2026</td>
              <td>£500,000</td>
              <td>Cramlington</td>
              <td>213 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
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

    <ol class="mb-5">
      <li>Action bar</li>

      <li>Column header (unique to the advanced table)</li>

      <li>Table row (row example contains checkbox and button components applied which are outlined in expanded table documentation, these are optional across
      all design system tables and more actions a can be added such as the overflow and kebab menu)</li>

      <li>Horizontal scroll</li>

      <li>Pagination</li>
    </ol>


    <h2>Column header in detail</h2>

    <h3 class="h4">Column title header</h3>

    <p>The column title text is a smaller size to the standard table headers, set to the text sizing of ‘Small’, this is to allow for the additional column actions without adding unnecessary width to the column. In addition to this, the column title does not allow for wrapping, again, to ensure the additional column actions sit clearly in line with the text.</p>

    <h3 class="h4">Sorting ability</h3>

    <p>The sorting uses an action button within the column header, to navigate through the various sorting options, the user simply clicks the action button to move to the next sorting state. The worded sorting states are by most recent, alphabetically A-Z, alphabetically Z-A. The numerical sorting states are by most recent, lowest-highest value, Highest-lowest value.</p>

    <h3 class="h4">Filtering ability</h3>

    <p>The filtering uses an action button within the column header, with a popover dialog upon clicking the action button. The filtering gives the user a deeper level of filtering rules and the ability to add multiple filter conditions.</p>


    <h2>Filters applied - table view</h2>


    <div class="container visualtest mb-5 bg-light">
      <TableAdvanced class="table--fullwidth">
        <Actionbar data-selectall>
          <button class="btn btn-action fa-box-archive">Archive</button
          ><button class="btn btn-action fa-trash-can">Export to .csv</button>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th class="th--fixed" data-sort data-filters='[{"operator": "equals", "type": "text", "value": "59 The South Gate Wood, NE68 3LS"}]'>Property</th>
              <th data-sort data-filters data-format="date">Date listed</th>
              <th data-sort data-filters>Current list price</th>
              <th data-sort data-filters='[{"operator": "equals", "type": "select", "value": "Heaton"}]'>Branch</th>
              <th data-sort>Weeks on market</th>
              <th class="th--fixed"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>59 The Glen, NE68 3LS</td>
              <td>27/06/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>27/06/2026</td>
              <td>£300,000</td>
              <td>Gosforth</td>
              <td>13 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 The South Gate Wood, NE68 3LS</td>
              <td>27/06/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
            <tr>
              <td>59 Oak Street, NE68 3LS</td>
              <td>27/06/2026</td>
              <td>£300,000</td>
              <td>Heaton</td>
              <td>13 weeks</td>
              <td><a href="/">View property</a></td>
            </tr>
          </tbody>
        </table>
      </TableAdvanced>
    </div>

    <h2>Filter types</h2>

    <h3 class="h4">Time frame</h3>
    <p>This filter can be used within the advanced table columns which use dates, days, weeks or years items. The filter operator gives the options of Equals, Does not equal, Before, After, Between’ housed in a select menu. The filter value uses the date picker field as standard, however standard select field can be used depending on use case.</p>

    <h3 class="h4">Numeric</h3>
    <p>This filter can be used within the advance table columns which use pricing or quantity items. The filter operator gives the options of Equals, Does not equal, Greater than, Great then or equal to, Less than, Less than or equal to, Between’ housed in a select menu. The filter value can use standard select fields or the currency field depending on use case.</p>

    <h3 class="h4">Entity</h3>
    <p>This filter can be used within the advance table columns which use property address, name, company or branch. The filter operator give the options of ‘Contains, Does not contain, Equals, Does not equal, Begins with, End with’ housed in a select menu. The filter value can use search, filter list or standard select fields depending on use case.</p>

    <h3 class="h4">Boolean</h3>
    <p>This filter can be used within the advance table columns which use Yes/No or True/False items. The filter operator give the options of ‘Contains, Does not contain, Equals, Does not equal’ housed in a select menu. The filter value uses radio buttons or standard select depending on use case.</p>

    <h2>Formatting</h2>

    <h3 class="h4">Break point displays</h3>
    <p>Across devices, the Advanced table on desktop, tablet and mobile share the same formatting and stylings.</p>

    <p class="note mb-5"><strong>Note:</strong> The responsive mobile view supported by the basic and default tables is not supported.</p>

    <div class="row">
      <div class="col-sm-6">
        <img :src="desktopImg">
        <p class="mx-auto text-center">Desktop: Table</p>
      </div>
      <div class="col-sm-6">
        <img :src="tabletImg">
        <p class="mx-auto text-center">Tablet: Table</p>
      </div>
      <div class="col-sm-6">
        <img :src="mobileImg">
        <p class="mx-auto text-center">Mobile: Table</p>
      </div>
    </div>


    <TableIntegration componentType="table-advanced"></TableIntegration>
    <Versions pdf="/pdfs/advanced-table.pdf">
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
            <td>20.08.2026</td>
            <td>Advanced table has been created to give the user greater filtering capabilities.</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>
