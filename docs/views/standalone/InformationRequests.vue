<template>
    <MBNav></MBNav>

    <main class="main--marketplace">
      <h1>Information requests</h1>
      <div class="admin-panel">





        <form id="tableFilters" class="full-width" novalidate>



          <Actionbar>

            <div class="dialog__wrapper" data-v-7d119115=""><button class="btn btn-action mb-0 me-0" data-v-7d119115="" type="button">Quick filter</button><dialog class="dialog--list" data-v-7d119115=""><div class="mb-0" data-v-7d119115=""><input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" data-v-7d119115=""><label for="follow-up-oldest" class="radio--tick" data-v-7d119115="">Follow up date (Oldest to newest)</label><hr data-v-7d119115=""><input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest" data-v-7d119115=""><label for="follow-up-newest" class="radio--tick" data-v-7d119115="">Follow up date (Newest to oldest)</label><hr data-v-7d119115=""><input type="radio" name="sort" data-sort="" id="date-instructed-oldest" value="date-instructed-oldest" checked="" autofocus="true" data-v-7d119115=""><label for="date-instructed-oldest" class="radio--tick" data-v-7d119115="">Date Instructed (Oldest to newest)</label><hr data-v-7d119115=""><input type="radio" name="sort" data-sort="" id="date-instructed-newest" value="date-instructed-newest" data-v-7d119115=""><label for="date-instructed-newest" class="radio--tick mb-0" data-v-7d119115="">Date Instructed (Newest to oldest)</label></div></dialog></div>
            <div class="dialog__wrapper" data-v-7d119115=""><button class="btn btn-action mb-0 me-0" data-v-7d119115="" type="button">Quick filter</button><dialog class="dialog--list" data-v-7d119115=""><div class="mb-0" data-v-7d119115=""><input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" data-v-7d119115=""><label for="follow-up-oldest" class="radio--tick" data-v-7d119115="">Follow up date (Oldest to newest)</label><hr data-v-7d119115=""><input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest" data-v-7d119115=""><label for="follow-up-newest" class="radio--tick" data-v-7d119115="">Follow up date (Newest to oldest)</label><hr data-v-7d119115=""><input type="radio" name="sort" data-sort="" id="date-instructed-oldest" value="date-instructed-oldest" checked="" autofocus="true" data-v-7d119115=""><label for="date-instructed-oldest" class="radio--tick" data-v-7d119115="">Date Instructed (Oldest to newest)</label><hr data-v-7d119115=""><input type="radio" name="sort" data-sort="" id="date-instructed-newest" value="date-instructed-newest" data-v-7d119115=""><label for="date-instructed-newest" class="radio--tick mb-0" data-v-7d119115="">Date Instructed (Newest to oldest)</label></div></dialog></div>
            <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn" data-modal="filters" type="button">Filter by</button>

          </Actionbar>

          <AppliedFilters >
          <dialog id="filters">
            
            <AppliedFilters >
              <div class="form-check">
                <input type="checkbox" name="risk-level-high" value="High" id="risk-level-high" class="form-check-input" data-filter-text="Risk Level - High" data-filter="Risk level" v-model="checked">
                <label for="risk-level-high" class="form-label form-check-label">High</label>
              </div>
              <div class="form-check">
                <input type="checkbox" name="risk-level-medium" value="Medium" id="risk-level-medium" class="form-check-input" data-filter-text="Risk Level - Medium" data-filter="Risk level">
                <label for="risk-level-medium" class="form-label form-check-label">Medium</label>
              </div>
              <div class="form-check">
                <input type="checkbox" name="risk-level-low" value="Low" id="risk-level-low" class="form-check-input" data-filter-text="Risk Level - Low" data-filter="Risk level">
                <label for="risk-level-low" class="form-label form-check-label">Low</label>
              </div>

              <hr/>

              <div class="form-control__wrapper" data-filter-text="Date between: $1 - $2">
                <label class="form-label" for="date-from">Date range</label>
                <input class="form-control" type="date" name="date-from" id="date-from" data-filter-text="Date from - $value" />
                <input class="form-control" type="date" name="date-to" id="date-to" data-filter-text="Date to - $value" />
              </div>
            </AppliedFilters>
            <button class="btn btn-primary d-block m-auto" type="submit">Update results</button>
          </dialog>

          </AppliedFilters>
          </form>




      <Table data-filterby="tableFilters">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Address</th>
              <th>Status</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Client</td>
              <td>Address</td>
              <td>Status</td>
              <td>Type</td>
            </tr>
          </tbody>
        </table>
      </Table>
      </div>

    </main>
</template>

<script>
import MBNav from './crm-mb/Nav.vue'
import Table from '@/components/Table/Table.vue'


import Actionbar from '@/components/Actionbar/Actionbar.vue'
import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue'

export default {
  components: {
    Table,
    MBNav,
    Actionbar,
    AppliedFilters
  },
}
</script>