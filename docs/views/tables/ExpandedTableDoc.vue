<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';

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
      <h1>Table</h1>
    </DSHeader>

    <p class="lead">Tables are used to organise and display data efficiently. The data table component allows for customisation with additional functionality, as needed by your product’s users.</p>

    <p>The data table’s features are ideal for organising and displaying data in a UI. Linked filter and sort buttons can align the table content with user needs, rows can be scrolled horizontally on desktop/tablet to reveal further information, and single or batch actions can be taken on rows.</p>

    <p>The <a href="/components/actionbar">Action bar</a> gives a location for primary buttons, search, filtering, table display settings, and other utilities.</p>

    <p class="note mb-5"><strong>Note:</strong> The table component inherits all of the functionality and styling of the basic table component.</p>

    <h2>Anatomy</h2>

    <div class="container visualtest bg-light mb-3">
      <Table class="table--cta">
        <Actionbar>
          <button class="btn btn-primary">Upload document</button>
        </Actionbar>
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
              <th class="th--fixed"></th>
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
      </Table>
    </div>
    <ol class="mb-5">
      <li>Action bar</li>
      <li>Column header</li>
      <li>Table row</li>
      <li>Horizontal scroll</li>
      <li>Pagination</li>
    </ol>
    <h2>Variants</h2>

    <h3>Selectable rows</h3>
    <p>
      The selectable variant enables users to choose multiple rows in a data table simultaneously. To select a row,
      users must click the associated checkbox. All rows can be selected at once by clicking the checkbox in the
      column header. Row checkboxes have two states: checked and unchecked. Meanwhile, the action bar checkbox has
      three states: checked, unchecked, and indeterminate.
    </p>

    <p>Actions applied to the chosen selected items are found in the Action bar.</p>


    <div class="container visualtest bg-light mb-5">
      <Table class="table--cta table--fullwidth">
        <Actionbar data-selectall="" data-search="" slot="before">

          <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>
        </Actionbar>

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
              <th class="th--fixed"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>
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
      </Table>
    </div>

    <p>On mobile, a check box is added to the table cards. Inline with the ‘expand’ button, the user can select/deselect the card with ease.</p>

    <div class="container visualtest bg-light mb-5">
      <div class="demo">
        <div class="row">
          <div class="col-sm-6 col-md-4 ms-auto">
            <Table>
              <Actionbar data-selectall="" data-search="" slot="before" class="">


                <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>
              </Actionbar>

              <table>
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Date added</th>
                    <th>Lorum ipsum</th>
                    <th>Lorum ipsum</th>
                    <th>Lorum ipsum</th>
                    <th class="th--fixed"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tom Smith</td>
                    <td>10.05.23</td>
                    <td>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        magna aliqua. Excepteur sint occaecat cupidatat.
                      </p>
                    </td>
                    <td>Lorum ipsum</td>
                    <td>Lorum ipsum</td>
                    <td><a href="/">Manage client</a></td>
                  </tr>
                </tbody>
              </table>
            </Table>
          </div>
          <div class="col-sm-6 col-md-4 me-auto">
            <Table>
              <Actionbar data-selectall="" data-search="" slot="before" class="">

                <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>
              </Actionbar>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        magna aliqua. Excepteur sint occaecat cupidatat.
                      </p>
                    </td>
                    <td>Lorum ipsum</td>
                    <td>Lorum ipsum</td>
                    <td><a href="/">Manage client</a></td>
                  </tr>
                </tbody>
              </table>
            </Table>
          </div>
        </div>
      </div>
    </div>

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
