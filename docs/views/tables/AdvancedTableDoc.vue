<script setup>
  import TrackEvents from '../TrackEvents.vue';

  import TableAdvanced from '@/components/Table/TableAdvanced.vue';

  import Integration from '../Integration.vue';
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
      <h1>Advanced table</h1>
    </DSHeader>


    <h2>Sorting using column headers</h2>
    <p>
      Data tables can be configured to allow the user to sort columns of data ascending or descending by clicking them.
      When the user opens the table it should be clear which column determines the order of the data and whether it is
      ascending or descending. This is shown by an arrow adjacent to the column header name.
    </p>

    <div class="container visualtest mb-5 bg-light">
      <TableAdvanced class="table--cta table--fullwidth">
        <Actionbar data-search="" slot="before">
          <button class="btn btn-action fa-box-archive">Archive</button
          ><button class="btn btn-action fa-trash-can">Export to .csv</button>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th>Negotiator</th>
              <th>Property address</th>
              <th data-sort>Vendor</th>
              <th data-sort>Appointment date</th>
              <th data-sort>Valuation price</th>
              <th>Fee amount (£)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith</td>
              <td>10 Summerhill Terrace, Newcastle upon Tyne NE4</td>
              <td>a Kevin Milne</td>
              <td>29/12/2024<br />12:30</td>
              <td>£0.00</td>
              <td>£0.00</td>
              <td><a href="/">View</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10 Summerhill Terrace, Newcastle upon Tyne NE4</td>
              <td>b Kevin Milne</td>
              <td>29/12/2024<br />12:30</td>
              <td>£0.00</td>
              <td>£0.00</td>
              <td><a href="/">View</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10 Summerhill Terrace, Newcastle upon Tyne NE4</td>
              <td>c Kevin Milne</td>
              <td>29/12/2024<br />12:30</td>
              <td>£0.00</td>
              <td>£0.00</td>
              <td><a href="/">View</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10 Summerhill Terrace, Newcastle upon Tyne NE4</td>
              <td>d Kevin Milne</td>
              <td>29/12/2024<br />12:30</td>
              <td>£0.00</td>
              <td>£0.00</td>
              <td><a href="/">View</a></td>
            </tr>
          </tbody>
        </table>
      </TableAdvanced>
    </div>

    <h3>Mobile behaviour</h3>
    <p>
      On mobile, sorting should be handled via the action bar only. We should specify the most popular sorting options.
      This can be presented in a popover dialog.
    </p>



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
  </main>
</template>

<script>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';

  import anatomy from '../../img/table/tables-anatomy.png';

  import desktopImg from '../../img/table/tables-desktop.png';
  import tabletImg from '../../img/table/tables-tablet.png';
  import mobileImg from '../../img/table/tables-mobile.png';
  import cardsImg from '../../img/table/tables-cards.png';

  import vertical from '../../img/table/tables-vertical.png';
  import cta from '../../img/table/tables-cta.png';
  import buttons from '../../img/table/tables-button.png';

  export default {
    components: {
      DSHeader,
      Table,
      Tabs,
      Tab,
      Actionbar,
    },
    mounted() {},
    data() {
      return {
        vertical: vertical,
        cta: cta,
        buttons: buttons,
        anatomy: anatomy,
        desktopImg: desktopImg,
        tabletImg: tabletImg,
        mobileImg: mobileImg,
        cardsImg: cardsImg,
        headerImg: headerImg,
        htmlUsage: `<div class="iam-table">
  <div class="table--cta">
    <div class="table__wrapper">
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      };
    },
  };
</script>
