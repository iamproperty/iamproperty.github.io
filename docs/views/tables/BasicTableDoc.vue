<script setup>
  import TrackEvents from '../TrackEvents.vue';

  import TableBasic from '@/components/Table/TableBasic.vue';
  import TableNoSubmit from '@/components/Table/TableNoSubmit.vue';

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
      <h1>Tables</h1>
    </DSHeader>
    <p class="lead">
      Tables are used to organise and display data eciently. The data table component allows for customisation with
      additional functionality, as needed by your product’s users.
    </p>

    <div class="container visualtest bg-light">
      <TableBasic class="table--cta">
        <table>
          <thead>
            <tr>
              <th class="text-nowrap">Client name</th>
              <th class="text-nowrap">Date added</th>
              <th>Status</th>
              <th class="text-nowrap">Lorum ipsum</th>
              <th class="text-nowrap">Lorum ipsum</th>
              <th class="text-nowrap">Lorum ipsum</th>
              <th class="text-nowrap">Lorum ipsum</th>
              <th class="text-nowrap">Lorum ipsum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Successful</td>
              <td>Lorem ipsum dolor sit amet velit</td>
              <td>Lorem ipsum dolor sit amet velit</td>
              <td>Lorem ipsum dolor sit amet velit</td>
              <td>Lorem ipsum dolor sit amet velit</td>
              <td>Lorem ipsum dolor sit amet velit</td>
              <td><a href="/">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Failed</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td><a href="/">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Successful</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td><a href="/">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Successful</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td><a href="/">Manage client</a></td>
            </tr>
          </tbody>
        </table>
      </TableBasic>
    </div>

    <div class="container pb-0 pt-5">
      <p>
        On mobile, the tables rows separate into individual cards with a Collapsed and Expanded state. Users can
        expand/collapse the card by clicking the ‘+’ expand button in the top right.
      </p>
    </div>

    <div class="container visualtest bg-light">
      <div class="row">
        <div class="col-sm-6 col-md-4 ms-auto">
          <TableBasic class="table--cta">
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Status</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tom Smith</td>
                  <td>10.05.23</td>
                  <td>Successful</td>
                  <td>Lorum ipsum</td>
                  <td>Lorum ipsum</td>
                  <td><a href="/">Manage client</a></td>
                </tr>
              </tbody>
            </table>
          </TableBasic>
        </div>
        <div class="col-sm-6 col-md-4 me-auto">
          <TableBasic class="table--cta">
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Status</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr data-view="full">
                  <td>Tom Smith</td>
                  <td>10.05.23</td>
                  <td>Successful</td>
                  <td>Lorum ipsum</td>
                  <td>Lorum ipsum</td>
                  <td><a href="/">Manage client</a></td>
                </tr>
              </tbody>
            </table>
          </TableBasic>
        </div>
      </div>
    </div>

    <div class="container pb-0 pt-5">
      <h3>Expandable</h3>
      <p>
        The expandable data table efficiently presents large data in a small space. Use the expanded section for more
        details, and if it becomes crowded, consider directing users to a dedicated page, side panel, or modal for
        further information. The user can expand/collapse rows by clicking the arrow ‘expand’ button. In the collapsed
        state, rows (with a paragraph) are limited to 2 lines of information and an ellipses is used to indicate further
        information.
      </p>
    </div>

    <div class="container visualtest bg-light">
      <TableNoSubmit class="table--cta table--fullwidth" data-expandable>
        <table>
          <thead>
            <tr>
              <th>Client name</th>
              <th>Date added</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr data-view="full">
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna
                  aliqua. Excepteur sint occaecat cupidatat.
                </p>
              </td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td><a href="/">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna
                  aliqua. Excepteur sint occaecat cupidatat.
                </p>
              </td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td><a href="/">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td><a href="/">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td><a href="/">Manage client</a></td>
            </tr>
          </tbody>
        </table>
      </TableNoSubmit>
    </div>

    <div class="container pb-0 pt-5">
      <p>
        On mobile, there is already a collapsed and expanded state. The same button will ‘expand’ all the data sets,
        meanwhile in the collapsed state, the longer data sets will still be limited to two sentences.
      </p>
    </div>

    <div class="container visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4 ms-auto">
          <TableNoSubmit class="table--cta" data-expandable>
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tom Smith</td>
                  <td>10.05.23</td>
                  <td>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna
                      aliqua. Excepteur sint occaecat cupidatat.
                    </p>
                  </td>
                  <td>Lorum ipsum</td>
                  <td>Lorum ipsum</td>
                  <td><a href="/">Manage client</a></td>
                </tr>
              </tbody>
            </table>
          </TableNoSubmit>
        </div>
        <div class="col-sm-6 col-md-4 me-auto">
          <TableNoSubmit class="table--cta" data-expandable>
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr data-view="full">
                  <td>Tom Smith</td>
                  <td>10.05.23</td>
                  <td>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna
                      aliqua. Excepteur sint occaecat cupidatat.
                    </p>
                  </td>
                  <td>Lorum ipsum</td>
                  <td>Lorum ipsum</td>
                  <td><a href="/">Manage client</a></td>
                </tr>
              </tbody>
            </table>
          </TableNoSubmit>
        </div>
      </div>
    </div>


    <div class="container">
      <h2>Max height table</h2>
      <p>
        To control how much real estate the table takes up on a page we can set a max height from a pre-defined list.
        Using the class of <b>.mh-sm</b> will set the max height to 12.5rem (200px). <b>.mh-md</b> will set it to 25rem
        (400px) and <b>.mh-lg</b> will set it to 37.5rem (600px). Commonly when using one of these classes we don't want
        to convert the table into a stackable view on mobile, this is achievable by adding the
        <b>.table--fullwidth</b> class.
      </p>
    </div>

    <Tabs class="container">
      <details>
        <summary><h3>Max height small</h3></summary>
        <TableBasic class="mh-sm table--fullwidth" data-show="100">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th class="d-none d-sm-table-cell">Lorum ipsum</th>
                <th class="d-none d-sm-table-cell">Lorum ipsum</th>
                <th class="d-none d-md-table-cell">Lorum ipsum</th>
                <th class="d-none d-md-table-cell"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
            </tbody>
          </table>
        </TableBasic>
      </details>
      <details>
        <summary><h3>Max height medium</h3></summary>
        <TableBasic class="mh-md table--fullwidth" data-show="100">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Lorum ipsum</th>
                <th>Lorum ipsum</th>
                <th>Lorum ipsum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
            </tbody>
          </table>
        </TableBasic>
      </details>
      <details>
        <summary><h3>Max height large</h3></summary>
        <TableBasic class="mh-lg table--fullwidth" data-show="100">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Lorum ipsum</th>
                <th>Lorum ipsum</th>
                <th>Lorum ipsum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
            </tbody>
          </table>
        </TableBasic>
      </details>
    </Tabs>

    <div class="container pb-5">
      <h2>Pagination</h2>
      <p>
        Pagination divides table data into separate pages. Simple pagination indicates the current page in view and
        offers controls to incrementally navigate to the previous or next page. Advanced pagination is accompanied by an
        option that enables the user to change the number of items per page and to jump to a specific page number. The
        <a href="/components/pagination">pagination component</a> is always placed at the bottom of the data table. See
        the pagination component for further guidelines and configurations.
      </p>
    </div>

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
