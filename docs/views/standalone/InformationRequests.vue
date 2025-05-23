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
  <MBNav></MBNav>

  <main class="main--marketplace">
    <h1>Information requests</h1>
    <div class="admin-panel">
      <form id="tableFilters" class="full-width" novalidate data-submit>
        <Actionbar data-large-safe-area data-search="Transaction address" :data-search-value="search">
          <div class="dialog__wrapper">
            <button class="btn btn-action mb-0 me-0" type="button">Information view</button>
            <dialog class="dialog--list">
              <div class="mb-0">
                <input
                  type="radio"
                  name="view"
                  id="view-mine"
                  value="mine"
                  :checked="view?.includes('mine')"
                  :autofocus="view?.includes('mine')"
                  data-change-events='[{"target":"#tableFilters","event":"submitForm"}]'
                />
                <label for="view-mine" class="radio--tick pb-0">My information</label>

                <input
                  type="radio"
                  name="view"
                  id="view-branch"
                  value="branch"
                  :checked="view?.includes('branch')"
                  :autofocus="view?.includes('branch')"
                  data-change-events='[{"target":"#tableFilters","event":"submitForm"}]'
                />
                <label for="view-branch" class="radio--tick pb-0">Branch</label>

                <input
                  type="radio"
                  name="view"
                  id="view-area"
                  value="area"
                  :checked="view?.includes('area')"
                  :autofocus="view?.includes('area')"
                  data-change-events='[{"target":"#tableFilters","event":"submitForm"}]'
                />
                <label for="view-area" class="radio--tick pb-0">Area</label>

                <input
                  type="radio"
                  name="view"
                  id="view-all"
                  value="all"
                  :checked="view?.includes('all')"
                  :autofocus="view?.includes('all')"
                  data-change-events='[{"target":"#tableFilters","event":"submitForm"}]'
                />
                <label for="view-all" class="radio--tick pb-0 mb-0">All</label>
              </div>
            </dialog>
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

          <button class="btn btn-primary btn-sm fa-sliders fa-after" id="uploadBtn" @click="showModal" type="button">
            Filter by <span data-filter-count></span>
          </button>
        </Actionbar>
        <input v-if="search" type="hidden" data-search="Transaction address" :value="search" name="search" />
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

      <Table data-filterby="tableFilters" data-per-page class="table--fullwidth">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Date added</th>
              <th>Transaction address</th>
              <th>Form type</th>
              <th>Status</th>
              <th>Percentage complete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="dialog__wrapper">
                  <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                  <dialog class="dialog--fix">
                    <a href="?cancel=1" class="btn btn-tertiary d-block text-decoration-none js-hide"
                      >Cancel information request</a
                    >
                    <button
                      class="btn btn-tertiary d-block text-decoration-none js-show"
                      data-modal="cancel"
                      data-click-events='[{"target":"#cancelBtn","event":"setAttribute","attribute":"href", "value":"?cancel=1"}]'
                    >
                      Cancel information request
                    </button>
                    <hr class="border border-1 mb-2" />
                    <button class="btn btn-tertiary dialog__close text-decoration-none">Close</button>
                  </dialog>
                </div>
              </td>
              <td data-format="date">04 March 2024</td>
              <td>24 Street, Kent, NE1 4BB</td>
              <td>TA6</td>
              <td>In progress</td>
              <td>
                <label class="hide-text"
                  ><span class="visually-hidden">Percentage completed</span
                  ><progress max="100" value="20" class="progress--inline colour-danger">20%</progress></label
                >
              </td>
            </tr>

            <tr>
              <td>
                <div class="dialog__wrapper">
                  <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                  <dialog class="dialog--fix">
                    <a href="?cancel=2" class="btn btn-tertiary d-block text-decoration-none js-hide"
                      >Cancel information request</a
                    >
                    <button
                      class="btn btn-tertiary d-block text-decoration-none js-show"
                      data-modal="cancel"
                      data-click-events='[{"target":"#cancelBtn","event":"setAttribute","attribute":"href", "value":"?cancel=2"}]'
                    >
                      Cancel information request
                    </button>
                    <hr class="border border-1 mb-2" />
                    <button class="btn btn-tertiary dialog__close text-decoration-none">Close</button>
                  </dialog>
                </div>
              </td>
              <td data-format="date">30 March 2024</td>
              <td>24 Road, Kent, NE1 4BB</td>
              <td>TA7</td>
              <td>In progress</td>
              <td>
                <label class="hide-text"
                  ><span class="visually-hidden">Percentage completed</span
                  ><progress max="100" value="40" class="progress--inline colour-warning">40%</progress></label
                >
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

<script lang="ts">
  import MBNav from './crm-mb/Nav.vue';
  import Table from '@/components/Table/Table.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue';
  import Accordion from '@/components/Accordion/Accordion.vue';

  export default {
    components: {
      Table,
      MBNav,
      Actionbar,
      AppliedFilters,
      Accordion,
    },
  };
</script>
