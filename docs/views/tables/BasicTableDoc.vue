<script setup>
  import TableEvents from './components/TableEvents.vue';
  import TableIntegration from './components/TableIntegration.vue';
  import Versions from '../Versions.vue';

  import TableBasic from '@/components/Table/TableBasic.vue';
  import Menu from '@/components/Menu/Menu.vue';

  import Tabs from '@/components/Tabs/Tabs.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import desktopImg from '../../img/table/tables-desktop.png';
  import tabletImg from '../../img/table/tables-tablet.png';
  import mobileImg from '../../img/table/tables-mobile.png';
  import cardsImg from '../../img/table/tables-cards.png';

</script>

<template>
  <TableEvents></TableEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Basic table</h1>
    </DSHeader>
    <p class="lead">Tables are used to organise and display data efficiently. The data table component allows for customisation with additional functionality, as needed by your product’s users.</p>

    <p>The data table’s features are ideal for organising and displaying data in a UI; rows can be scrolled horizontally on desktop/tablet to reveal further information.</p>

    <h2>Table Anatomy</h2>
    <!-- TODO: add number labels -->
    <div class="container visualtest bg-light mb-3">
      <TableBasic data-show="5" data-per-page data-item-count data-page-jump>
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

    <ol class="mb-5">
      <li>Column header</li>
      <li>Table row</li>
      <li>Horizontal scroll</li>
      <li>Pagination</li>
    </ol>

    <h2>Formatting</h2>

    <h3 class="h4">Break point displays</h3>
    <p>Across devices, the table may display differently depending on the type of device. Desktop and Tablet share formatting and stylings, whereas mobile may differ depending on the use case and best method of displaying data sets to the users.</p>

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
      <div class="col-sm-6">
        <img :src="cardsImg">
        <p class="mx-auto text-center">Mobile: Cards</p>
      </div>
    </div>


    <h2>Variants</h2>

    <!-- #region Default variant -->
    <h3>Default</h3>

    <p>The default table organises and displays data in a user friendly way, with minimal actions. A tertiary button can be placed on the far right to direct users to a dedicated page, side panel, or modal for further information on the dataset in that row.</p>

    <div class="container visualtest bg-light mb-5">
      <TableBasic class="table--fullwidth">
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
              <td class="text-nowrap">Tom Smith</td>
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
              <td class="text-nowrap">Tom Smith</td>
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
              <td class="text-nowrap">Tom Smith</td>
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
              <td class="text-nowrap">Tom Smith</td>
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

    <p>On mobile, the tables rows separate into individual cards with a Collapsed and Expanded state. Users can expand/collapse the card by clicking the ‘+’ expand button in the top right.</p>

    <div class="container visualtest bg-light mb-5">
      <div class="row">
        <div class="col-sm-6 col-md-4 ms-auto">
          <TableBasic>
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Status</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th class="th--fixed"></th>
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
          <TableBasic>
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Status</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th class="th--fixed"></th>
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
    <!-- #endregion Default variant -->

    <!-- #region Expandable variant -->

    <h3>Expandable</h3>
    <p>
      The expandable data table efficiently presents large data in a small space. Use the expanded section for more
      details, and if it becomes crowded, consider directing users to a dedicated page, side panel, or modal for
      further information. The user can expand/collapse rows by clicking the arrow ‘expand’ button. In the collapsed
      state, rows (with a paragraph) are limited to 2 lines of information and an ellipses is used to indicate further
      information.
    </p>

    <div class="container visualtest bg-light mb-5">
      <TableBasic class="table--fullwidth">
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
      </TableBasic>
    </div>


      <p>
        On mobile, there is already a collapsed and expanded state. The same button will ‘expand’ all the data sets,
        meanwhile in the collapsed state, the longer data sets will still be limited to two sentences.
      </p>

    <div class="container visualtest bg-light mb-5">
      <div class="row">
        <div class="col-sm-6 col-md-4 ms-auto">
          <TableBasic class="table--cta">
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
          </TableBasic>
        </div>
        <div class="col-sm-6 col-md-4 me-auto">
          <TableBasic >
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
          </TableBasic>
        </div>
      </div>
    </div>
    <!-- #endregion Expandable variant -->

    <!-- #region row with menu -->
    <h3>Row with menu</h3>
    <p>
      Table rows with a <a href="/components/menu">menu</a> can be used when there is no need for a tertiary button or primary action on the files - no
      need to use a dedicated page, side panel, or modal - but the user can still take action on individual files. If
      batch actions are necessary, consider using an Action bar instead.
    </p>

    <div class="container visualtest bg-light mb-5">
      <TableBasic class="table--cta table--fullwidth">
        <table>
          <thead>
            <tr>
              <th class="th--fixed"></th>
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
              <td>
                <Menu>
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </Menu>
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
                <Menu>
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </Menu>
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
                <Menu>
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </Menu>
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
                <Menu>
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </Menu>
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
      </TableBasic>
    </div>

    <p>On mobile, the menu button is added to the table cards. Inline with the ‘expand’ button, the user can click the menu button to open a popover with actions they can take on that individual file.</p>

    <div class="container visualtest bg-light mb-5">
      <div class="row">
        <div class="col-sm-6 col-md-4 ms-auto">
          <TableBasic>
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
                    <Menu>
                      <button class="btn btn-action" data-single="">View task</button>
                      <button class="btn btn-action" data-single="">Mark as completed</button>
                      <button class="btn btn-action" data-single="">Delete task</button>
                    </Menu>
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
          </TableBasic>
        </div>
        <div class="col-sm-6 col-md-4 me-auto">
          <TableBasic>
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
                    <Menu>
                      <button class="btn btn-action" data-single="">View task</button>
                      <button class="btn btn-action" data-single="">Mark as completed</button>
                      <button class="btn btn-action" data-single="">Delete task</button>
                    </Menu>
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
          </TableBasic>
        </div>
      </div>
    </div>
    <!-- #endregion -->


    <!-- #region Max height variant -->
    <h3>Max height table</h3>
    <p>
      To control how much real estate the table takes up on a page we can set a max height from a pre-defined list.
      Using the class of <b>.mh-sm</b> will set the max height to 12.5rem (200px). <b>.mh-md</b> will set it to 25rem
      (400px) and <b>.mh-lg</b> will set it to 37.5rem (600px). Commonly when using one of these classes we don't want
      to convert the table into a stackable view on mobile, this is achievable by adding the
      <b>.table--fullwidth</b> class.
    </p>
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
    <!-- #endregion -->

    <!-- #region Pagination -->
      <h2>Pagination</h2>
      <p>
        Pagination divides table data into separate pages. Simple pagination indicates the current page in view and
        offers controls to incrementally navigate to the previous or next page. Advanced pagination is accompanied by an
        option that enables the user to change the number of items per page and to jump to a specific page number. The
        <a href="/components/pagination">pagination component</a> is always placed at the bottom of the data table. See
        the pagination component for further guidelines and configurations.
      </p>

    <!-- #endregion -->
    <TableIntegration></TableIntegration>

    <Versions pdf="/pdfs/table-basic.pdf">
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

