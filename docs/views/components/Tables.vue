<script setup>
  import TrackEvents from '../TrackEvents.vue';

  import TableBasic from '@/components/Table/TableBasic.vue';
  import TableNoSubmit from '@/components/Table/TableNoSubmit.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
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

    <div class="container">
      <p class="lead">
        Tables are used to organise and display data eciently. The data table component allows for customisation with
        additional functionality, as needed by your product’s users.
      </p>

      <p>
        The data table’s features are ideal for organising and displaying data in a UI. Linked filter and sort buttons
        can align the table content with user needs, rows can be scrolled horizontally on desktop/tablet to reveal
        further information, and single or batch actions can be taken on rows.
      </p>

      <p>
        The <a href="/components/actionbar">Action bar</a> gives a location for primary buttons, search, filtering,
        table display settings, and other utilities.
      </p>

      <table class="mb-5">
        <thead>
          <tr>
            <th>Variant</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>The default data table has only the header and table element rows.</td>
          </tr>
          <tr>
            <td>With expansion</td>
            <td>
              The expandable variant helps present large amounts of data in a small space. Users can expand and collapse
              row panels to reveal and hide additional information.
            </td>
          </tr>
          <tr>
            <td>With selection</td>
            <td>
              The selection variant enables users to select individual rows in a data table. Users can perform a single
              action or batch actions against selected items using the
              <a href="/components/actionbar">Action bar</a>.
            </td>
          </tr>
          <tr>
            <td>With overflow</td>
            <td>
              The overflow variant provides a function that may be performed on a specific table row. Each row is
              accompanied by an overflow menu button that contains actions related specifically to that row. If batch
              actions are necessary, consider using an
              <a href="/components/actionbar">Action bar</a> instead.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Components</h2>
      <p>Variations of the table component has been created towork best</p>

      <div>
        <table>
          <thead>
            <tr>
              <th>Component behaviour</th>
              <th>Component</th>
              <th>Attribute</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No component</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>
                There isn't a requirement to use a component to display a table aslong as you dont require pagination or
                any other functionality. <br /><br />See the <a href="/elements/tables">table element page</a>.
              </td>
            </tr>
            <tr>
              <td>Basic</td>
              <td class="text-nowrap">iam-table-basic</td>
              <td>n/a</td>
              <td>
                This component doesn't feature any functionality that requires the data of the table to reload.
                Pagination will work be showing and hiding rows that have already been loaded in the page. This
                component wont support the use of an actionbar or any other functionality other than pagination.
              </td>
            </tr>
            <tr>
              <td>Single page</td>
              <td class="text-nowrap">iam-table-no-submit</td>
              <td class="text-nowrap">data-no-submit</td>
              <td>
                This component doesn't feature any functionality that requires the data of the table to reload. Features
                like the pagination, sorting and filtering is done on the page on existing table rows.
              </td>
            </tr>
            <tr>
              <td>Submit page</td>
              <td class="text-nowrap">iam-table-submit</td>
              <td class="text-nowrap">data-submit</td>
              <td>
                Any interaction with this component will submit the associated form data to the server. Using this
                component requires more work for the backend develop but also gives them more control.
              </td>
            </tr>
            <tr>
              <td>AJAX</td>
              <td class="text-nowrap">iam-table-ajax</td>
              <td class="text-nowrap">data-ajax</td>
              <td>
                Any interaction with this component will trigger and ajax call which in turn will reload the table but
                not the page.
              </td>
            </tr>
            <tr>
              <td>Full</td>
              <td class="text-nowrap">iam-table</td>
              <td>n/a</td>
              <td>
                This component is usefull for when you intend to use multiple table component on the same page/user
                journey. Reducing down duplication and taking advantage of cached files.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container pt-4 pb-5">
      <h2>Anatomy</h2>

      <img :src="anatomy" class="mb-3" />
      <ol>
        <li>Action bar</li>
        <li>Column header</li>
        <li>Table row</li>
        <li>Horizontal scroll</li>
        <li>Pagination</li>
      </ol>
    </div>
    <div class="container">
      <h2>Formatting</h2>
      <h3>Breakpoint displays</h3>
      <p>
        Across devices, the table may display differently depending on the type of device. Desktop and Tablet share
        formatting and stylings, whereas mobile may differ depending on the use case and best method of displaying data
        sets to the users.
      </p>

      <div class="row">
        <div class="col-sm-6">
          <img :src="desktopImg" />
          <p class="mx-auto text-center">Desktop: Table</p>
        </div>
        <div class="col-sm-6">
          <img :src="tabletImg" />
          <p class="mx-auto text-center">Tablet: Table</p>
        </div>
        <div class="col-sm-6">
          <img :src="cardsImg" />
          <p class="mx-auto text-center">Mobile: Cards</p>
        </div>
        <div class="col-sm-6">
          <img :src="mobileImg" />
          <p class="mx-auto text-center">Mobile: Table</p>
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Variants</h2>

      <h3>Default</h3>
      <p>
        The default table organises and displays data in a user friendly way, with minimal actions. A tertiary button
        can be placed on the far right to direct users to a dedicated page, side panel, or modal for further information
        on the dataset in that row.
      </p>
    </div>

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

    <div class="container pt-5 pb-0">
      <h3>Selectable</h3>
      <p>
        The selectable variant enables users to choose multiple rows in a data table simultaneously. To select a row,
        users must click the associated checkbox. All rows can be selected at once by clicking the checkbox in the
        column header. Row checkboxes have two states: checked and unchecked. Meanwhile, the action bar checkbox has
        three states: checked, unchecked, and indeterminate.
      </p>

      <p>Actions applied to the chosen selected items are found in the Action bar.</p>
    </div>

    <div class="container visualtest bg-light">
      <TableNoSubmit class="table--cta table--fullwidth">
        <Actionbar data-selectall="" data-search="" slot="before">
          <div class="dialog__wrapper show">
            <button class="btn btn-action mb-0 me-0">Quick filter</button>
            <dialog class="dialog--list">
              <div class="pb-0 mb-0">
                <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" /><label
                  for="follow-up-oldest"
                  class="radio--tick"
                  >Follow up date (Oldest to newest)</label
                ><input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest" /><label
                  for="follow-up-newest"
                  class="radio--tick"
                  >Follow up date (Newest to oldest)</label
                ><input
                  type="radio"
                  name="sort"
                  data-sort=""
                  id="date-instructed-oldest"
                  autofocus=""
                  value="date-instructed-oldest"
                /><label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label
                ><input
                  type="radio"
                  name="sort"
                  data-sort=""
                  id="date-instructed-newest"
                  value="date-instructed-newest"
                /><label for="date-instructed-newest" class="radio--tick mb-0"
                  >Date Instructed (Newest to oldest)</label
                >
              </div>
            </dialog>
          </div>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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

    <div class="container pt-5 pb-0">
      <p>
        On mobile, a check box is added to the table cards. Inline with the ‘expand’ button, the user can
        select/deselect the card with ease. The Action bar becomes sticky and overlaps the table cards as you scroll
        down so that it is accessible to the user at all times. Please review Action bar for further details on
        behaviour.
      </p>
    </div>

    <div class="container visualtest bg-light">
      <div class="demo">
        <div class="row">
          <div class="col-sm-6 col-md-4 ms-auto">
            <TableNoSubmit>
              <Actionbar data-selectall="" data-search="" slot="before" class="">
                <div class="dialog__wrapper show">
                  <button class="btn btn-action mb-0 me-0">Quick filter</button>
                  <dialog class="dialog--list">
                    <div class="pb-0 mb-0">
                      <input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="follow-up-oldest"
                        value="follow-up-oldest"
                      /><label for="follow-up-oldest" class="radio--tick">Follow up date (Oldest to newest)</label
                      ><input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="follow-up-newest"
                        value="follow-up-newest"
                      /><label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label
                      ><input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="date-instructed-oldest"
                        autofocus=""
                        value="date-instructed-oldest"
                      /><label for="date-instructed-oldest" class="radio--tick"
                        >Date Instructed (Oldest to newest)</label
                      ><input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="date-instructed-newest"
                        value="date-instructed-newest"
                      /><label for="date-instructed-newest" class="radio--tick mb-0"
                        >Date Instructed (Newest to oldest)</label
                      >
                    </div>
                  </dialog>
                </div>
                <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>
                <button class="btn btn-action fa-pen-to-square show" data-single="">Edit</button>
                <button class="btn btn-action fa-box-archive show">Archive</button
                ><button class="btn btn-action fa-trash-can show">Delete</button>
                <hr />
                <button class="btn btn-action" slot="overflow">Cancel</button>
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
            </TableNoSubmit>
          </div>
          <div class="col-sm-6 col-md-4 me-auto">
            <TableNoSubmit>
              <Actionbar data-selectall="" data-search="" slot="before" class="">
                <div class="dialog__wrapper show">
                  <button class="btn btn-action mb-0 me-0">Quick filter</button>
                  <dialog class="dialog--list">
                    <div class="pb-0 mb-0">
                      <input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="follow-up-oldest"
                        value="follow-up-oldest"
                      /><label for="follow-up-oldest" class="radio--tick">Follow up date (Oldest to newest)</label
                      ><input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="follow-up-newest"
                        value="follow-up-newest"
                      /><label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label
                      ><input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="date-instructed-oldest"
                        autofocus=""
                        value="date-instructed-oldest"
                      /><label for="date-instructed-oldest" class="radio--tick"
                        >Date Instructed (Oldest to newest)</label
                      ><input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="date-instructed-newest"
                        value="date-instructed-newest"
                      /><label for="date-instructed-newest" class="radio--tick mb-0"
                        >Date Instructed (Newest to oldest)</label
                      >
                    </div>
                  </dialog>
                </div>
                <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>
                <button class="btn btn-action fa-pen-to-square show" data-single="">Edit</button>
                <button class="btn btn-action fa-box-archive show">Archive</button
                ><button class="btn btn-action fa-trash-can show">Delete</button>
                <hr />
                <button class="btn btn-action" slot="overflow">Cancel</button>
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
            </TableNoSubmit>
          </div>
        </div>
      </div>
    </div>

    <div class="container pt-5 pb-0">
      <h3>Overflow</h3>
      <p>
        The overflow table can be used when there is no need for a tertiary button or primary action on the files - no
        need to use a dedicated page, side panel, or modal - but the user can still take action on individual files. If
        batch actions are necessary, consider using an Action bar instead.
      </p>
    </div>

    <div class="container visualtest">
      <div class="demo">
        <TableNoSubmit class="table--cta table--fullwidth">
          <table>
            <thead>
              <tr>
                <th></th>
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
              <tr>
                <td>
                  <div class="dialog__wrapper">
                    <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                    <dialog class="dialog--fix dialog--list">
                      <button class="btn btn-action" data-single="">View task</button>
                      <button class="btn btn-action" data-single="">Mark as completed</button>
                      <button class="btn btn-action" data-single="">Delete task</button>
                    </dialog>
                  </div>
                </td>
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
                <td>
                  <div class="dialog__wrapper">
                    <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                    <dialog class="dialog--fix dialog--list">
                      <button class="btn btn-action" data-single="">View task</button>
                      <button class="btn btn-action" data-single="">Mark as completed</button>
                      <button class="btn btn-action" data-single="">Delete task</button>
                    </dialog>
                  </div>
                </td>
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
                <td>
                  <div class="dialog__wrapper">
                    <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                    <dialog class="dialog--fix dialog--list">
                      <button class="btn btn-action" data-single="">View task</button>
                      <button class="btn btn-action" data-single="">Mark as completed</button>
                      <button class="btn btn-action" data-single="">Delete task</button>
                    </dialog>
                  </div>
                </td>
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
                <td>
                  <div class="dialog__wrapper">
                    <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                    <dialog class="dialog--fix dialog--list">
                      <button class="btn btn-action" data-single="">View task</button>
                      <button class="btn btn-action" data-single="">Mark as completed</button>
                      <button class="btn btn-action" data-single="">Delete task</button>
                    </dialog>
                  </div>
                </td>
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
    </div>

    <div class="container pt-5">
      <p>
        On mobile, an overflow button is added to the table cards. Inline with the ‘expand’ button, the user can click
        the overflow to open a popover with actions they can take on that individual file.
      </p>
    </div>

    <div class="container visualtest">
      <div class="demo">
        <div class="row">
          <div class="col-sm-6 col-md-4 ms-auto">
            <TableNoSubmit>
              <table>
                <thead>
                  <tr>
                    <th></th>
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
                    <td>
                      <div class="dialog__wrapper">
                        <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                        <dialog class="dialog--fix dialog--list">
                          <button class="btn btn-action" data-single="">View task</button>
                          <button class="btn btn-action" data-single="">Mark as completed</button>
                          <button class="btn btn-action" data-single="">Delete task</button>
                        </dialog>
                      </div>
                    </td>
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
            </TableNoSubmit>
          </div>
          <div class="col-sm-6 col-md-4 me-auto">
            <TableNoSubmit>
              <table>
                <thead>
                  <tr>
                    <th></th>
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
                    <td>
                      <div class="dialog__wrapper">
                        <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                        <dialog class="dialog--fix dialog--list">
                          <button class="btn btn-action" data-single="">View task</button>
                          <button class="btn btn-action" data-single="">Mark as completed</button>
                          <button class="btn btn-action" data-single="">Delete task</button>
                        </dialog>
                      </div>
                    </td>
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
            </TableNoSubmit>
          </div>
        </div>
      </div>
    </div>

    <div class="container pt-5 pb-0">
      <h3>Expandable + Selectable</h3>
      <p>
        Data tables can be configured to have both expandable and selectable features. The expandable icon always
        appears first and to the left of the selection icon.
      </p>
    </div>

    <div class="container visualtest bg-light">
      <TableNoSubmit class="table--cta table--fullwidth" data-expandable>
        <Actionbar data-selectall="" data-search="" slot="before">
          <div class="dialog__wrapper show">
            <button class="btn btn-action mb-0 me-0">Quick filter</button>
            <dialog class="dialog--list">
              <div class="pb-0 mb-0">
                <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" /><label
                  for="follow-up-oldest"
                  class="radio--tick"
                  >Follow up date (Oldest to newest)</label
                ><input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest" /><label
                  for="follow-up-newest"
                  class="radio--tick"
                  >Follow up date (Newest to oldest)</label
                ><input
                  type="radio"
                  name="sort"
                  data-sort=""
                  id="date-instructed-oldest"
                  autofocus=""
                  value="date-instructed-oldest"
                /><label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label
                ><input
                  type="radio"
                  name="sort"
                  data-sort=""
                  id="date-instructed-newest"
                  value="date-instructed-newest"
                /><label for="date-instructed-newest" class="radio--tick mb-0"
                  >Date Instructed (Newest to oldest)</label
                >
              </div>
            </dialog>
          </div>
          <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>
          <button class="btn btn-action fa-pen-to-square show" data-single="">Edit</button>
          <button class="btn btn-action fa-box-archive show">Archive</button
          ><button class="btn btn-action fa-trash-can show">Delete</button>
          <hr />
          <button class="btn btn-action" slot="overflow">Cancel</button>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
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

    <div class="container pt-4 pb-0">
      <p>
        On mobile, a check box is added to the table cards and the expand button collapses and expands both the cards
        and the data sets. The select behaviour is the same as the ‘Selectable’ variant. The expand behaviour is the
        same as the ‘Expandable’ variant.
      </p>
    </div>
    <div class="container visualtest bg-light">
      <div class="row">
        <div class="col-sm-6 col-md-4 ms-auto">
          <TableNoSubmit class="table--cta">
            <Actionbar data-selectall="" data-search="" slot="before">
              <div class="dialog__wrapper show">
                <button class="btn btn-action mb-0 me-0">Quick filter</button>
                <dialog class="dialog--list">
                  <div class="pb-0 mb-0">
                    <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" /><label
                      for="follow-up-oldest"
                      class="radio--tick"
                      >Follow up date (Oldest to newest)</label
                    ><input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="follow-up-newest"
                      value="follow-up-newest"
                    /><label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label
                    ><input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="date-instructed-oldest"
                      autofocus=""
                      value="date-instructed-oldest"
                    /><label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label
                    ><input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="date-instructed-newest"
                      value="date-instructed-newest"
                    /><label for="date-instructed-newest" class="radio--tick mb-0"
                      >Date Instructed (Newest to oldest)</label
                    >
                  </div>
                </dialog>
              </div>
              <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>
              <button class="btn btn-action fa-pen-to-square show" data-single="">Edit</button>
              <button class="btn btn-action fa-box-archive show">Archive</button
              ><button class="btn btn-action fa-trash-can show">Delete</button>
              <hr />
              <button class="btn btn-action" slot="overflow">Cancel</button>
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
          <TableNoSubmit class="table--cta">
            <Actionbar data-selectall="" data-search="" slot="before">
              <div class="dialog__wrapper show">
                <button class="btn btn-action mb-0 me-0">Quick filter</button>
                <dialog class="dialog--list">
                  <div class="pb-0 mb-0">
                    <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" /><label
                      for="follow-up-oldest"
                      class="radio--tick"
                      >Follow up date (Oldest to newest)</label
                    ><input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="follow-up-newest"
                      value="follow-up-newest"
                    /><label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label
                    ><input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="date-instructed-oldest"
                      autofocus=""
                      value="date-instructed-oldest"
                    /><label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label
                    ><input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="date-instructed-newest"
                      value="date-instructed-newest"
                    /><label for="date-instructed-newest" class="radio--tick mb-0"
                      >Date Instructed (Newest to oldest)</label
                    >
                  </div>
                </dialog>
              </div>
              <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>
              <button class="btn btn-action fa-pen-to-square show" data-single="">Edit</button>
              <button class="btn btn-action fa-box-archive show">Archive</button
              ><button class="btn btn-action fa-trash-can show">Delete</button>
              <hr />
              <button class="btn btn-action" slot="overflow">Cancel</button>
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

    <div class="container pt-5 pb-0">
      <h3>Expandable + Overflow</h3>
      <p>
        Data tables can be configured to have both expandable and selectable features. The expandable icon always
        appears first and to the left of the overflow icon.
      </p>
    </div>

    <div class="container visualtest bg-light">
      <TableNoSubmit class="table--cta table--fullwidth" data-expandable>
        <table>
          <thead>
            <tr>
              <th></th>
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
            <tr>
              <td>
                <div class="dialog__wrapper">
                  <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                  <dialog class="dialog--fix dialog--list">
                    <button class="btn btn-action" data-single="">View task</button>
                    <button class="btn btn-action" data-single="">Mark as completed</button>
                    <button class="btn btn-action" data-single="">Delete task</button>
                  </dialog>
                </div>
              </td>
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
              <td>
                <div class="dialog__wrapper">
                  <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                  <dialog class="dialog--fix dialog--list">
                    <button class="btn btn-action" data-single="">View task</button>
                    <button class="btn btn-action" data-single="">Mark as completed</button>
                    <button class="btn btn-action" data-single="">Delete task</button>
                  </dialog>
                </div>
              </td>
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
              <td>
                <div class="dialog__wrapper">
                  <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                  <dialog class="dialog--fix dialog--list">
                    <button class="btn btn-action" data-single="">View task</button>
                    <button class="btn btn-action" data-single="">Mark as completed</button>
                    <button class="btn btn-action" data-single="">Delete task</button>
                  </dialog>
                </div>
              </td>
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
              <td>
                <div class="dialog__wrapper">
                  <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                  <dialog class="dialog--fix dialog--list">
                    <button class="btn btn-action" data-single="">View task</button>
                    <button class="btn btn-action" data-single="">Mark as completed</button>
                    <button class="btn btn-action" data-single="">Delete task</button>
                  </dialog>
                </div>
              </td>
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

    <div class="container pt-4 pb-0">
      <p>
        On mobile, an overflow button is added to the table cards and the expand button collapses and expands both the
        cards and the data sets. The overflow behaviour is the same as the ‘Overflow’ variant. The expand behaviour is
        the same as the ‘Expandable’ variant.
      </p>
    </div>
    <div class="container visualtest mb-5 bg-light">
      <div class="row">
        <div class="col-sm-6 col-md-4 ms-auto">
          <TableNoSubmit>
            <table>
              <thead>
                <tr>
                  <th></th>
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
                  <td>
                    <div class="dialog__wrapper">
                      <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                      <dialog class="dialog--fix dialog--list">
                        <button class="btn btn-action" data-single="">View task</button>
                        <button class="btn btn-action" data-single="">Mark as completed</button>
                        <button class="btn btn-action" data-single="">Delete task</button>
                      </dialog>
                    </div>
                  </td>
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
          <TableNoSubmit>
            <table>
              <thead>
                <tr>
                  <th></th>
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
                  <td>
                    <div class="dialog__wrapper">
                      <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                      <dialog class="dialog--fix dialog--list">
                        <button class="btn btn-action" data-single="">View task</button>
                        <button class="btn btn-action" data-single="">Mark as completed</button>
                        <button class="btn btn-action" data-single="">Delete task</button>
                      </dialog>
                    </div>
                  </td>
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

    <h2>Sorting using column headers</h2>
    <p>
      Data tables can be configured to allow the user to sort columns of data ascending or descending by clicking them.
      When the user opens the table it should be clear which column determines the order of the data and whether it is
      ascending or descending. This is shown by an arrow adjacent to the column header name.
    </p>

    <div class="container visualtest mb-5 bg-light">
      <TableNoSubmit class="table--cta table--fullwidth">
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
      </TableNoSubmit>
    </div>

    <h3>Mobile behaviour</h3>
    <p>
      On mobile, sorting should be handled via the action bar only. We should specify the most popular sorting options.
      This can be presented in a popover dialog.
    </p>

    <div class="container">
      <h2>Max height table</h2>
      <p>
        To control how much real estate the table takes up on a page we can set a max height from a pre-defined list.
        Using the class of <b>.mh-sm</b> will set the max height to {{ $shared.cssVars.ut_mh_sm }} ({{
          $shared.cssVars.ut_mh_sm_px
        }}px); <b>.mh-md</b> will set it to {{ $shared.cssVars.ut_mh_md }} ({{ $shared.cssVars.ut_mh_md_px }}px) and
        <b>.mh-lg</b> will set it to {{ $shared.cssVars.ut_mh_lg }} ({{ $shared.cssVars.ut_mh_lg_px }}px). Commonly when
        using one of these classes we don't want to convert the table into a stackable view on mobile, this is
        achievable by adding the <b>.table--fullwidth</b> class.
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
      <h2>Behaviours</h2>
      <div class="row">
        <div class="col-sm-6">
          <img :src="vertical" class="mb-2" />
          <p>
            When the table content extends past the table width, the table becomes horizontally scrollable and a white
            fade is added to the right side to indicate there is further scrollable content.
          </p>
        </div>
        <div class="col-sm-6">
          <img :src="cta" class="mb-2" />
          <p>When tertiary buttons are added, they are set within a fixed column that overlaps the table content.</p>
        </div>
        <div class="col-sm-6">
          <img :src="buttons" class="mb-2" />
          <p>When tertiary buttons are added, they are set within a fixed column that overlaps the table content.</p>
        </div>
      </div>
    </div>

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
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>update-show</th>
              <td>When a user clicks on the load more button</td>
            </tr>
            <tr>
              <th>update-page</th>
              <td>When a updates the page via either a button or other method</td>
            </tr>
            <tr>
              <th>row-expanded</th>
              <td>When a a row has been expanded on mobile or desktop</td>
            </tr>
            <tr>
              <th>row-selected</th>
              <td>
                When the checkbox for a row has been selected or unselected. No other functionality triggered by
                default.
              </td>
            </tr>
            <tr>
              <th>all-rows-selected</th>
              <td>All rows have been selected. No other functionality triggered by default.</td>
            </tr>
            <tr>
              <th>all-rows-unselected</th>
              <td>All rows have been selected. No other functionality triggered by default.</td>
            </tr>

            <tr>
              <th>sort-by-heading</th>
              <td>A column heading has been pressed to sort by that column</td>
            </tr>

            <tr>
              <th>search-submit</th>
              <td>The table has been searched via javascript or an ajax call.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #criteria>
        <ul>
          <li>The pagination should only show when it it needed.</li>
          <li>The main row CTA should always be shown.</li>
          <li>The mobile view of the row should only show the basics until expanded</li>
        </ul>
      </template>
      <template #data-layer>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>update-show</th>
              <td>When a user clicks on the load more button</td>
            </tr>
            <tr>
              <th>update-page</th>
              <td>When a updates the page via either a button or other method</td>
            </tr>
            <tr>
              <th>row-expanded</th>
              <td>When a a row has been expanded on mobile or desktop</td>
            </tr>
            <tr>
              <th>row-selected</th>
              <td>
                When the checkbox for a row has been selected or unselected. No other functionality triggered by
                default.
              </td>
            </tr>
            <tr>
              <th>all-rows-selected</th>
              <td>All rows have been selected. No other functionality triggered by default.</td>
            </tr>
            <tr>
              <th>all-rows-unselected</th>
              <td>All rows have been selected. No other functionality triggered by default.</td>
            </tr>

            <tr>
              <th>sort-by-heading</th>
              <td>A column heading has been pressed to sort by that column</td>
            </tr>

            <tr>
              <th>search-submit</th>
              <td>The table has been searched via javascript or an ajax call.</td>
            </tr>
          </tbody>
        </table>
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
  import Readme from '@/components/Table/README.md';
  import WebReadme from '~/ts/components/table/README.md';
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
      Readme,
      WebReadme,
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
