<script setup>
  import TrackEvents from '../TrackEvents.vue';
</script>

<template>
  <TrackEvents selector="iam-table" :events="['sort-by-heading']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Tables</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">
        Tables are used to organise and display data eciently. The data table component allows for customisation with
        additional functionality, as needed by your product’s users.
      </p>

      <h2>Overview</h2>
      <p>
        The data table’s features are ideal for organising and displaying data in a UI. Linked filter and sort buttons
        can align the table content with user needs, rows can be scrolled horizontally on desktop/tablet to reveal
        further information, and single or batch actions can be taken on rows.
      </p>

      <p>
        The <a href="/components/actionbar">Action bar</a> gives a location for primary buttons, search, filtering,
        table display settings, and other utilities.
      </p>

      <table>
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

    <div class="container visualtest">
      <div class="demo">
        <Table class="table--cta table--fullwidth">
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
    </div>

    <div class="container pb-0 pt-5">
      <p>
        On mobile, the tables rows separate into individual cards with a Collapsed and Expanded state. Users can
        expand/collapse the card by clicking the ‘+’ expand button in the top right.
      </p>
    </div>

    <div class="container visualtest">
      <div class="demo">
        <div class="row">
          <div class="col-sm-6 col-md-4 ms-auto">
            <Table class="table--cta">
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
                </tbody>
              </table>
            </Table>
          </div>
          <div class="col-sm-6 col-md-4 me-auto">
            <Table class="table--cta">
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
                    <td>Lorum ipsum</td>
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

    <div class="container pb-0 pt-5">
      <h3>Expandable</h3>
      <p>
        The expandable data table efficiently presents large data in a small space. Use the expanded section for more
        details, and if it becomes crowded, consider directing users to a dedicated page, side panel, or modal for
        further information. The user can expand/collapse rows by clicking the arrow ‘expand’ button.
      </p>
    </div>

    <div class="container visualtest">
      <div class="demo">
        <Table class="table--cta table--fullwidth" data-expandable>
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
        </Table>
      </div>
    </div>

    <div class="container pb-0 pt-5">
      <p>
        On mobile, there is already a collapsed and expanded state. The same button will ‘expand’ all the data sets,
        meanwhile in the collapsed state, the longer data sets will still be limited to two sentences.
      </p>
    </div>

    <div class="container visualtest">
      <div class="demo">
        <div class="row">
          <div class="col-sm-6 col-md-4 ms-auto">
            <Table class="table--cta" data-expandable>
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
            </Table>
          </div>
          <div class="col-sm-6 col-md-4 me-auto">
            <Table class="table--cta" data-expandable>
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

    <div class="container visualtest">
      <div class="demo">
        <Table class="table--cta table--fullwidth">
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
        </Table>
      </div>
    </div>

    <div class="container pt-5 pb-0">
      <p>
        On mobile, a check box is added to the table cards. Inline with the ‘expand’ button, the user can
        select/deselect the card with ease. The Action bar becomes sticky and overlaps the table cards as you scroll
        down so that it is accessible to the user at all times. Please review Action bar for further details on
        behaviour.
      </p>
    </div>

    <div class="container visualtest">
      <div class="demo">
        <div class="row">
          <div class="col-sm-6 col-md-4 ms-auto">
            <Table>
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
            </Table>
          </div>
          <div class="col-sm-6 col-md-4 me-auto">
            <Table>
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
            </Table>
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
        <Table class="table--cta table--fullwidth">
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
        </Table>
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
            <Table>
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
            </Table>
          </div>
          <div class="col-sm-6 col-md-4 me-auto">
            <Table>
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
            </Table>
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

    <div class="container visualtest">
      <div class="demo">
        <Table class="table--cta table--fullwidth" data-expandable>
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
        </Table>
      </div>
    </div>

    <div class="container pt-4 pb-0">
      <p>
        On mobile, a check box is added to the table cards and the expand button collapses and expands both the cards
        and the data sets. The select behaviour is the same as the ‘Selectable’ variant. The expand behaviour is the
        same as the ‘Expandable’ variant.
      </p>
    </div>
    <div class="container visualtest">
      <div class="demo">
        <div class="row">
          <div class="col-sm-6 col-md-4 ms-auto">
            <Table class="table--fullwidth">
              <Actionbar data-selectall="" data-search="" slot="before">
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
            </Table>
          </div>
          <div class="col-sm-6 col-md-4 me-auto">
            <Table>
              <Actionbar data-selectall="" data-search="" slot="before">
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
            </Table>
          </div>
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

    <div class="container visualtest">
      <div class="demo">
        <Table class="table--cta table--fullwidth" data-expandable>
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
        </Table>
      </div>
    </div>

    <div class="container pt-4 pb-0">
      <p>
        On mobile, an overflow button is added to the table cards and the expand button collapses and expands both the
        cards and the data sets. The overflow behaviour is the same as the ‘Overflow’ variant. The expand behaviour is
        the same as the ‘Expandable’ variant.
      </p>
    </div>
    <div class="container visualtest pb-5">
      <div class="demo">
        <div class="row">
          <div class="col-sm-6 col-md-4 ms-auto">
            <Table>
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
            </Table>
          </div>
          <div class="col-sm-6 col-md-4 me-auto">
            <Table>
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
            </Table>
          </div>
        </div>
      </div>
    </div>

    <h2>Sorting using column headers</h2>
    <p>
      Data tables can be configured to allow the user to sort columns of data ascending or descending by clicking them.
      When the user opens the table it should be clear which column determines the order of the data and whether it is
      ascending or descending. This is shown by an arrow adjacent to the column header name.
    </p>

    <div class="container visualtest pb-5">
      <div class="demo">
        <Table class="table--cta table--fullwidth">
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
        </Table>
      </div>
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
        <Table class="mh-sm table--fullwidth">
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
        </Table>
      </details>
      <details>
        <summary><h3>Max height medium</h3></summary>
        <Table class="mh-md table--fullwidth">
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
        </Table>
      </details>
      <details>
        <summary><h3>Max height large</h3></summary>
        <Table class="mh-lg table--fullwidth">
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
        </Table>
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

    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>Web component</h2></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
        </details>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="javascript">{{htmlUsage}}</code></pre>
        </details>
      </Tabs>
    </div>
    <div class="bg-light version-control">
      <div class="container">
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
              <td>V2</td>
              <td>15.09.2023</td>
              <td>
                Added multiple variants to the tables: Default, Expansion, Selection, Overflow, Expansion + Selection,
                Expansion + Overflow. Added various mobile card states. Added in some rules around behaviours,
                formatting and dimension.
              </td>
            </tr>
            <tr>
              <td>V1.1</td>
              <td>25.05.2023</td>
              <td>Max heights have been enabled</td>
            </tr>
            <tr>
              <td>V1 added</td>
              <td>15.05.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/tables.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use '../../../assets/sass/func' as *;

  .demo {
    background-color: #f2f2f2;
    padding: 3rem 1.5rem;

    margin-left: -1.5rem;
    margin-right: -1.5rem;

    @media screen and (min-width: 36em) {
      margin-left: 0rem;
      margin-right: 0rem;
    }
  }
</style>

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
