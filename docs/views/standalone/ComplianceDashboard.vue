<template>
  <div>
    <nav>
      <iam-nav id="menu" class="bg-primary" data-search>
        <a href="/" class="brand brand--sold" slot="logo">
          <svg>
            <title>iamSold</title>
            <use xlink:href="/svg/logo.svg#logo-sold"></use>
          </svg>
        </a>

        <a href="/details" slot="secondary">Hello Emma Varah (Level 1)</a>
        <a href="/home" target="_blank" slot="secondary"
          >New support ticket <i class="fa-regular fa-arrow-up-right-from-square"></i
        ></a>

        <a href="/admin/properties.html">Properties</a>
        <a href="/admin/auth/staff.html">Staff</a>
        <a href="/admin/reports.html">Reports</a>
        <a href="/admin/awards.html">iamvalued Awards</a>

        <a href="https://iamsold.test/admin/logout.html" class="btn btn-primary" slot="actions">Logout</a>
      </iam-nav>
    </nav>

    <main class="main--marketplace">
      <form id="tableFilters" data-ajax="/data/compliance-dashboard.json" data-schema="data.buyerTasks">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="h2">Welcome to your Compliance Dashboard, Amy Reading!</h1>
            </div>
            <div class="col-md-3 mw-fit-content">
              <div class="dialog__wrapper dialog__wrapper--md-right">
                <button
                  class="btn btn-secondary me-0 nowrap"
                  type="button"
                  aria-label="Display filters of who's work to include"
                >
                  <span class="empty"><i class="fa fa-users me-1" aria-hidden="true"></i> Everybody</span
                  ><span class="individual"><i class="fa fa-user me-1" aria-hidden="true"></i> Individual</span
                  ><span class="multiple"><i class="fa fa-users me-1" aria-hidden="true"></i> Multiple</span>
                </button>
                <dialog>
                  <AppliedFilters class="applied-filters--compact">
                    <Filterlist data-max-height="small">
                      <input
                        type="checkbox"
                        name="pipeline[]"
                        id="pipeline1"
                        class="form-check-input d-none"
                        value="Alice Knowles"
                        data-filter-text="$value"
                        data-filter="Locked to"
                      />
                      <input
                        type="checkbox"
                        name="pipeline[]"
                        id="pipeline2"
                        class="form-check-input d-none"
                        value="Amy Reading"
                        data-filter-text="$value"
                        data-filter="Locked to"
                      />
                      <ul class="list-unstyled mb-0">
                        <li>
                          <div class="form-check ps-0">
                            <label for="pipeline1" class="form-label form-check-label fw-normal">Alice Knowles</label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check ps-0">
                            <label for="pipeline2" class="form-label form-check-label fw-normal">Amy Reading</label>
                          </div>
                        </li>
                      </ul>
                    </Filterlist>
                  </AppliedFilters>
                </dialog>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="tabs__links">
            <button class="link active" name="page" value="buyer">Buyer</button>
            <button class="link" name="page" value="vendor">Vendor</button>
            <button class="link" name="page" value="allocation">Property Allocation</button>
          </div>
        </div>
        <div class="container">
          <span class="h4">Total Buyer pipeline results: <span data-query="Locked to"></span></span>
          <hr />
        </div>

        <div class="container">
          <div class="row tab-focus">
            <input
              type="checkbox"
              name="[sla_progress][]"
              data-filter="SLA progress"
              value="Due"
              id="due_diligience_incomplete"
              class="d-none"
            />
            <input
              type="checkbox"
              name="[sla_progress][]"
              data-filter="SLA progress"
              value="Upcoming"
              id="due_diligience_requires_approval"
              class="d-none"
            />
            <input
              type="checkbox"
              name="[sla_progress][]"
              data-filter="SLA progress"
              value="On track"
              id="due_diligience_verified"
              class="d-none"
            />

            <div class="col-sm-4 col-md-3">
              <label for="due_diligience_incomplete"
                ><Card class="card--filter colour-danger card--flag" data-total="" data-query="SLA progress == Overdue"
                  >Due/Overdue</Card
                ></label
              >
            </div>
            <div class="col-sm-4 col-md-3">
              <label for="due_diligience_requires_approval"
                ><Card
                  class="card--filter colour-warning card--flag"
                  data-total=""
                  data-query="SLA progress == Upcoming"
                  >Upcoming</Card
                ></label
              >
            </div>
            <div class="col-sm-4 col-md-3">
              <label for="due_diligience_verified"
                ><Card
                  class="card--filter colour-success card--flag"
                  data-total=""
                  data-query="SLA progress == On track"
                  >On track</Card
                ></label
              >
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-end">
            <div class="col-12 ms-md-auto mw-sm-fit-content">
              <button class="btn btn-secondary me-0 d-block w-100 btn-filter mb-1" type="button" data-modal="filters">
                Filter by <span data-filter-count=""></span>
              </button>
            </div>

            <div class="col-12 mw-sm-fit-content">
              <div class="dialog__wrapper dialog__wrapper--md-right">
                <button
                  class="btn btn-secondary me-0 nowrap mb-1"
                  type="button"
                  aria-label="Display filters of who's work to include"
                >
                  Sort by
                </button>
                <dialog>
                  <div class="mb-0">
                    <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" />
                    <label for="follow-up-oldest" class="radio--tick">Follow up date (Oldest to newest)</label>
                    <hr />
                    <input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest" />
                    <label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label>
                    <hr />
                    <input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="date-instructed-oldest"
                      value="date-instructed-oldest"
                      checked=""
                      autofocus="true"
                    />
                    <label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label>
                    <hr />
                    <input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="date-instructed-newest"
                      value="date-instructed-newest"
                    />
                    <label for="date-instructed-newest" class="radio--tick">Date Instructed (Newest to oldest)</label>
                  </div>
                </dialog>
              </div>
            </div>
            <div class="col-12 mw-sm-fit-content">
              <button class="btn btn-tertiary me-0" data-clear>Clear filters</button>
            </div>
          </div>
        </div>

        <dialog id="filters">
          <AppliedFilters class="applied-filters--compact" data-nosubmit>
            <span class="h3 pb-2">Filter by</span>

            <span class="h4 pb-1">Risk Level</span>
            <div>
              <input
                type="checkbox"
                name="risk-level-high"
                id="risk-level-high"
                data-filter-text="Risk Level - High"
                data-filter="Risk level"
                value="High"
              />
              <label for="risk-level-high" class="form-label form-check-label">High</label>
              <hr />
              <input
                type="checkbox"
                name="risk-level-medium"
                id="risk-level-medium"
                data-filter-text="Risk Level - Medium"
                data-filter="Risk level"
                value="Medium"
              />
              <label for="risk-level-medium" class="form-label form-check-label">Medium</label>
              <hr />

              <input
                type="checkbox"
                name="risk-level-low"
                id="risk-level-low"
                data-filter-text="Risk Level - Low"
                data-filter="Risk level"
                value="Low"
              />
              <label for="risk-level-low" class="form-label form-check-label">Low</label>
              <hr />
            </div>

            <span class="h4 pb-1">SLA Progress</span>
            <div>
              <input
                type="checkbox"
                name="[sla_progress][]"
                id="sla_progress_due"
                data-filter-text="SLA progress - Due"
                value="Due"
                data-duplicate="due_diligience_incomplete"
              />
              <label for="sla_progress_due">Due</label>
              <hr />
              <input
                type="checkbox"
                name="[sla_progress][]"
                id="sla_progress_upcoming"
                data-filter-text="SLA progress - Upcoming"
                value="Upcoming"
                data-duplicate="due_diligience_requires_approval"
              />
              <label for="sla_progress_upcoming">Upcoming</label>
              <hr />

              <input
                type="checkbox"
                name="[sla_progress][]"
                id="sla_progress_track"
                data-filter-text="SLA progress - On track"
                value="track"
                data-duplicate="due_diligience_verified"
              />
              <label for="sla_progress_track">On track</label>
              <hr />
            </div>
          </AppliedFilters>
          <button class="btn btn-primary d-block mx-auto">Update results</button>
          <hr />
        </dialog>
      </form>

      <div class="container">
        <Table class="table--cta table--minify" data-filterby="tableFilters">
          <table>
            <thead>
              <tr>
                <th class="min-fit-content" data-td-class="alert-status" data-output="{alerts}">Alerts</th>
                <th data-output="{property_address}">Property address</th>
                <th data-format="date" data-output="{authorised_by}">Date Authorised</th>
                <th data-output="{authorised_by}">Date Authorised by</th>
                <th data-output="{sla_progress}">SLA progress</th>
                <th data-output="{property_status}" data-format="capitalise">Property status</th>
                <th
                  data-output="{risk_level}"
                  data-transform='{"1":"Low","2":"Medium","3":"High"}'
                  data-default="Unknown"
                >
                  Risk
                </th>
                <th data-output="{buying_position}">Buying position</th>
                <th data-output="<p>{lastComplianceNote}</p>">Last compliance note</th>
                <th data-output="{locked_to}">Locked to</th>
                <th data-output="{followup}">Follow up</th>
                <th data-output="<a href='/admin/properties/{property_id}?tab=compliance'>View property</a>"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </Table>
      </div>
    </main>
  </div>
</template>
<style lang="scss"></style>

<script>
  import Nav from '@/components/Nav/Nav.vue';
  import Table from '@/components/Table/Table.vue';
  import Card from '@/components/Card/Card.vue';
  import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue';
  import Filterlist from '@/components/Filterlist/Filterlist.vue';

  import iamNav from '../../../assets/ts/components/nav/nav.component';

  export default {
    components: {
      Nav,
      Table,
      Card,
      AppliedFilters,
      Filterlist,
    },
    computed: {
      checked: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit('input', value);
        },
      },
    },
    mounted() {
      setTimeout(() => {
        if (!window.customElements.get(`iam-nav`)) window.customElements.define(`iam-nav`, iamNav);
      }, '100');
    },
  };
</script>
