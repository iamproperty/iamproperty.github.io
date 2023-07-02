<template>
  <div>
    <Nav logo="sold" class="nav--marketplace" propertylink="/standalone/marketplace" movebutlerlink="/standalone/movebutler" iamsoldlink="/standalone/agent">
      
    </Nav>
    <main class="main--marketplace">

      <form id="tableFilters" data-ajax="/data/compliance-dashboard.json" data-schema="data.buyerTasks">

        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="h2">Welcome to your Compliance Dashboard, Amy Reading!</h1>
            </div>
            <div class="col-md-3 mw-fit-content">
              <div class="dialog__wrapper dialog__wrapper--md-right">

              <button class="btn btn-secondary me-0 nowrap" type="button" aria-label="Display filters of who's work to include"><span class="empty"><i class="fa fa-users me-1" aria-hidden="true"></i> Everybody</span><span class="individual"><i class="fa fa-user me-1" aria-hidden="true"></i> Individual</span><span class="multiple"><i class="fa fa-users me-1" aria-hidden="true"></i> Multiple</span></button>
              <dialog>

                <AppliedFilters class="applied-filters--compact">
                <Filterlist data-max-height="small">
                <input type="checkbox" name="pipeline[]" id="pipeline1" class="form-check-input d-none" value="Alice Knowles" data-filter-text="$value" data-filter="Locked to">
                <input type="checkbox" name="pipeline[]" id="pipeline2" class="form-check-input d-none" value="Amy Reading" data-filter-text="$value" data-filter="Locked to">
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

          <span class="h4">Total Buyer pipeline results: <span data-query="Locked to"></span></span>
          <hr/>
        </div>


        <div class="container">
          <div class="tabs__links">
            <button class="link active" name="page" value="buyer">Buyer</button>
            <button class="link" name="page" value="vendor">Vendor</button>
            <button class="link" name="page" value="allocation">Property Allocation</button>
          </div>
        </div>


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
                <th data-output="{property_status}" data-format="capitalise">Property status</th>
                <th data-output="{risk_level}" data-transform='{"1":"Low","2":"Medium","3":"High"}' data-default="Unknown">Risk</th>
                <th data-output="{buying_position}">Buying position</th>
                <th data-output="<p>{lastComplianceNote}</p>">Last compliance note</th>
                <th data-output="{locked_to}">Locked to</th>
                <th data-output="{followup}" data-format="datetime">Follow up</th>
                <th data-output="<a href='/admin/properties/{property_id}?tab=compliance'>View property</a>"></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </Table>

      </div>
     
    </main>
  </div>
</template>
<style lang="scss" >

</style>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Table from '@/components/Table/Table.vue'
import Card from '@/components/Card/Card.vue'
import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue'
import Filterlist from '@/components/Filterlist/Filterlist.vue'

export default {
  components: {
    Nav,
    Table,
    Card,
    AppliedFilters,
    Filterlist
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  mounted(){

    setTimeout(() => {
    


    }, "100");

  }
}

</script>