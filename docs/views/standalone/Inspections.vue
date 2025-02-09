<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const dialog = ref<HTMLDialogElement>();
  const filters = ref<HTMLDialogElement>();

  // Makes the dialog work with vue
  const visible = ref(false);
  const showModal = () => {
    dialog.value?.showModal();
    visible.value = true;
  };

  defineExpose({
    show: showModal,
  });

  // Params
  const formTypes = route.query['form-type[]'];
  const status = route.query['status[]'];
  const sort = route.query['sort'];
  const view = route.query['view'];
  const search = route.query['search'];
</script>

<template>
  <CrmNav></CrmNav>

  <main class="main--marketplace">
    <h1 class="h2">Inspections</h1>

    <div class="admin-panel mb-5">
      <h2>Upcoming inspections</h2>
      <Chart
        class="chart chart--animate"
        data-max="4"
        data-min="0"
        data-type="column"
        data-yaxis="0,2,4"
        data-guidelines="0,1,2,3,4"
        style="--chart-height-lg: 14%"
      >
        <table>
          <thead>
            <tr>
              <th>Time period</th>
              <th>John Smith</th>
              <th>Sarah Brown</th>
              <th>Darren Morris</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>This week</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Next week</td>
              <td>2</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>21/08 - 27/08</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>28/08 - 03/09</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>04/09- 14/09</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </Chart>
    </div>

    <h2 class="h3">10 inspections</h2>
    <div class="row">
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <button tabindex="-1"><Card class="card--filter" data-total="1">Pending</Card></button>
      </div>
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <button tabindex="-1"><Card class="card--filter" data-total="0">Assigned</Card></button>
      </div>

      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <button tabindex="-1"><Card class="card--filter" data-total="9">Confirmed</Card></button>
      </div>

      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <button tabindex="-1"><Card class="card--filter" data-total="0">Booked</Card></button>
      </div>

      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <button tabindex="-1"><Card class="card--filter" data-total="1">Active</Card></button>
      </div>
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <button tabindex="-1"><Card class="card--filter" data-total="1">Complete</Card></button>
      </div>

      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <button tabindex="-1"><Card class="card--filter" data-total="0">Closed</Card></button>
      </div>

      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <button tabindex="-1"><Card class="card--filter" data-total="0">Cancelled</Card></button>
      </div>
    </div>

    <div class="admin-panel">
      <form id="tableFilters" class="full-width" novalidate data-submit>
        <Actionbar data-search="Property" :data-search-value="search" data-for="inspectionsTable">
          <div class="selectall pb-0" slot="selectall">
            <div class="form-check m-0">
              <!----><!----><!----><!----><!----><!----><!----><!---->
              <input class="form-check-input" type="checkbox" name="selectAll" id="selectAllinput" />
              <label class="form-label form-check-label" for="selectAllinput">Check In</label>
              <!----><!----><!----><!---->
            </div>
          </div>

          <div class="dialog__wrapper">
            <button class="btn btn-action mb-0 me-0" type="button">Sort by</button>
            <dialog class="dialog--list">
              <div class="mb-0">
                <input
                  type="radio"
                  name="sort"
                  data-sort="Date added"
                  data-order="asc"
                  data-format="date"
                  id="date-added-oldest"
                  value="date-added-oldest"
                  :checked="sort?.includes('date-added-oldest')"
                  :autofocus="sort?.includes('date-added-oldest')"
                />
                <label for="date-added-oldest" class="radio--tick pb-0">Date added (Oldest to newest)</label>

                <input
                  type="radio"
                  name="sort"
                  data-sort="Date added"
                  data-order="desc"
                  data-format="date"
                  id="date-added-newest"
                  value="date-added-newest"
                  :checked="sort?.includes('date-added-newest')"
                  :autofocus="sort?.includes('date-added-newest')"
                />
                <label for="date-added-newest" class="radio--tick pb-0">Date added (Newest to oldest)</label>
              </div>
            </dialog>
          </div>

          <button
            class="btn btn-secondary btn-sm btn-compact fa-sliders"
            id="filterBtn"
            @click="showModal"
            type="button"
          >
            Filter by <span data-filter-count></span>
          </button>

          <button class="btn btn-secondary btn-sm btn-compact fa-arrow-up-from-bracket" type="button">Upload</button>

          <button class="btn btn-secondary btn-sm btn-compact fa-solid fa-print" type="button">Print</button>

          <!-- Selected buttons -->
          <button type="button" class="btn btn-action fa-close" slot="selected" data-single>Cancel</button>
          <button type="button" class="btn btn-action fa-trash-can" slot="selected" data-single>Delete</button>
          <button type="button" class="btn btn-action" slot="selected">
            <i class="fa-light fa-calendar-day me-1"></i>Add to calendar
          </button>
          <button type="button" class="btn btn-action fa-route" slot="selected">Calculate route</button>

          <hr slot="selected" />
          <button class="btn btn-action" type="button" slot="selected" data-cancel>Cancel</button>
        </Actionbar>

        <input v-if="search" type="hidden" data-search="Property" :value="search" name="search" />

        <AppliedFilters
          class="applied-filters--hide-title applied-filters--show-set wider-colour-3"
          data-keep-same="true"
          ref="filters"
        >
          <dialog id="filters" ref="dialog">
            <button class="dialog__close">Close</button>

            <div class="mh-lg">
              <span class="h3">Filter by</span>
              <AppliedFilters data-nosubmit class="applied-filters--hide-title" ref="filters">
                <Accordion>
                  <details>
                    <summary class="py-0"><span class="label">Form type</span></summary>

                    <label class="mb-0"
                      ><input
                        type="checkbox"
                        :checked="formTypes?.includes('material')"
                        value="material"
                        data-name="form-type[material]"
                        name="form-type[]"
                        data-filter-text="Material information"
                        data-filter="Form type"
                      />Material information</label
                    >
                    <label class="mb-0"
                      ><input
                        type="checkbox"
                        :checked="formTypes?.includes('ta6')"
                        value="ta6"
                        data-name="form-type[ta6]"
                        name="form-type[]"
                        data-filter-text="TA6"
                        data-filter="Form type"
                      />TA6</label
                    >
                    <label class="mb-0"
                      ><input
                        type="checkbox"
                        :checked="formTypes?.includes('ta7')"
                        value="ta7"
                        data-name="form-type[ta7]"
                        name="form-type[]"
                        data-filter-text="TA7"
                        data-filter="Form type"
                      />
                      TA7</label
                    >
                    <label class="mb-4"
                      ><input
                        type="checkbox"
                        :checked="formTypes?.includes('ta10')"
                        value="ta10"
                        data-name="form-type[ta10]"
                        name="form-type[]"
                        data-filter-text="TA10"
                        data-filter="Form type"
                      />
                      TA10</label
                    >
                  </details>
                  <details>
                    <summary class="py-0"><span class="label">Status</span></summary>

                    <label class="mb-0"
                      ><input
                        type="checkbox"
                        :checked="status?.includes('not-started')"
                        value="not-started"
                        data-name="status[not-started]"
                        name="status[]"
                        data-filter-text="Not started"
                        data-filter="Status"
                      />Not started</label
                    >
                    <label class="mb-0"
                      ><input
                        type="checkbox"
                        :checked="status?.includes('in-progress')"
                        value="in-progress"
                        data-name="status[in-progress]"
                        name="status[]"
                        data-filter-text="In progress"
                        data-filter="Status"
                      />In progress</label
                    >
                    <label class="mb-4"
                      ><input
                        type="checkbox"
                        :checked="status?.includes('complete')"
                        value="complete"
                        data-name="status[ta7]"
                        name="status[]"
                        data-filter-text="Complete"
                        data-filter="Status"
                      />
                      Complete</label
                    >
                  </details>
                  <details>
                    <summary class="py-0"><span class="label">Date added range</span></summary>

                    <div class="row" data-filter-text="Date between: $1 - $2">
                      <div class="col-5">
                        <label
                          >Date from
                          <span>
                            <input
                              type="date"
                              name="datefrom"
                              :value="route.query['datefrom']"
                              data-filter-text="Date from - $value"
                              data-filter="Date added"
                              data-date-from
                            />
                            <span class="suffix fa-regular fa-calendar pe-none" aria-hidden="true"></span>
                          </span>
                        </label>
                      </div>
                      <div class="col-5 offset-1">
                        <label class="mb-5"
                          >Date to
                          <span>
                            <input
                              type="date"
                              name="dateto"
                              :value="route.query['dateto']"
                              data-filter-text="Date to - $value"
                              data-filter="Date added"
                              data-date-to
                            />
                            <span class="suffix fa-regular fa-calendar pe-none" aria-hidden="true"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </details>
                </Accordion>
              </AppliedFilters>
              <button class="btn btn-primary d-block m-auto" type="submit">Apply filters</button>
            </div>
          </dialog>
        </AppliedFilters>
      </form>

      <Table id="inspectionsTable" data-filterby="tableFilters" data-per-page class="table--fullwidth table--cta">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Postcode</th>
              <th>Date</th>
              <th>Type</th>
              <th>Status</th>
              <th>Inspector</th>
              <th>Notes</th>
              <th>Tenancy</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 Oak Road, Newcastle upon Tyne</td>
              <td>NE1 6FH</td>
              <td>11/08/2023 13:50</td>
              <td>Check-in</td>
              <td>Complete</td>
              <td>John Smith</td>
              <td><p>-</p></td>
              <td>John Smith</td>
              <td>
                <a href="/">View</a>
              </td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>

    <dialog id="cancel" class="dialog--transactional">
      <button class="dialog__close">Close</button
      ><i class="fa-light fa-circle" aria-hidden="true"><i class="fa-regular fa-trash-can" aria-hidden="true"></i></i>

      <span class="h3">Cancel property information forms</span>
      <div class="mh-lg">
        <p>
          Continuing will permanently cancel all property information forms for this client. We will notify the
          solicitor that the forms will not be completed online.
        </p>
        <p>Are you sure you’d like to continue?</p>
        <form>
          <button class="btn btn-secondary" formmethod="dialog">Close</button
          ><a href="?cancel" class="btn btn-primary" id="cancelBtn">Cancel forms</a>
        </form>
      </div>
    </dialog>
  </main>
</template>

<style lang="scss"></style>

<script lang="ts">
  import Table from '@/components/Table/Table.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue';
  import Accordion from '@/components/Accordion/Accordion.vue';
  import Chart from '@/components/Chart/Chart.vue';
  import Card from '@/components/Card/Card.vue';

  import CrmNav from '../CrmNav.vue';

  export default {
    components: {
      CrmNav,
      Table,
      Actionbar,
      AppliedFilters,
      Accordion,
      Chart,
      Card,
    },
  };
</script>
