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
      <h1>Expanded table</h1>
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
          <button class="btn btn-action fa-box-archive show" slot="selected">Archive</button
          ><button class="btn btn-action fa-trash-can show" slot="selected">Delete</button>
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

    <Integration component="table" componentName="iam-table">
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
