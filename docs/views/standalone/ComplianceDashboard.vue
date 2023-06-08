<template>
  <div>
    <Nav logo="movebutler" class="nav--marketplace" propertylink="/standalone/marketplace" movebutlerlink="/standalone/movebutler" iamsoldlink="/standalone/agent">
      
    </Nav>
    <main class="main--marketplace">

      <form id="tableFilters">

        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="h2">Welcome to your Compliance Dashboard, Amy Reading!</h1>
            </div>
            <div class="col-md-3 mw-fit-content">
              <div class="dialog__wrapper dialog__wrapper--md-right">

              <button class="btn btn-secondary me-0 nowrap" aria-label="Display filters of who's work to include"><span class="empty"><i class="fa fa-users me-1" aria-hidden="true"></i> Everybody</span><span class="individual"><i class="fa fa-user me-1" aria-hidden="true"></i> Individual</span><span class="multiple"><i class="fa fa-users me-1" aria-hidden="true"></i> Multiple</span></button>
              <dialog>

                <AppliedFilters class="applied-filters--compact">
                <Filterlist data-max-height="small">
                <input type="checkbox" name="pipeline[]" id="pipeline1" class="form-check-input d-none" value="Alice Knowles" data-filter-text="$value" data-filter="Locked to">
                <input type="checkbox" name="pipeline[]" id="pipeline2" class="form-check-input d-none" value="Amy Reading" data-filter-text="$value" data-filter="Locked to">
                <ul class="list-unstyled">
                  <li>
                    <div class="form-check">
                      <label for="pipeline1" class="form-label form-check-label">Alice Knowles</label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <label for="pipeline2" class="form-label form-check-label">Amy Reading</label>
                    </div>                  
                  </li>
                </ul>
                </Filterlist>

              </AppliedFilters>
                <button type="submit" class="btn btn-secondary">Update</button>

              </dialog>

              </div>
            </div>
          </div>
        </div>
        <div class="container">

          <span class="h4">Total Buyer pipeline results: <span data-query="Locked to"></span></span>
          <hr/>
        </div>

      </form>

      <div class="container">
        <Table class="table--cta table--minify" data-filterby="tableFilters">
          <table>
            <thead>
              <tr>
                <th class="min-fit-content" data-td-class="text-danger">Alerts</th>
                <th>Property address</th>
                <th data-format="date">Date Authorised</th>
                <th>Date Authorised by</th>
                <th>Property status</th>
                <th>Risk</th>
                <th>Buying position</th>
                <th>Last compliance note</th>
                <th>Locked to</th>
                <th data-format="date">Follow up</th>
                <th></th> 
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>31 May 23</td>
                <td>Abigail Budden</td>
                <td>Preapproved</td>
                <td>Low</td>
                <td>Cash</td>
                <td>Lorum ipsum dolor sit amet incididunt</td>
                <td>Amy Reading</td>
                <td>31 May 23</td>
                <td><a href="/clienturl" class="text-nowrap">View property</a></td>  
              </tr>
              <tr>
                <td>2</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>31 May 23</td>
                <td>Abigail Budden</td>
                <td>Preapproved</td>
                <td>Medium</td>
                <td>Cash</td>
                <td>Lorum ipsum dolor sit amet incididunt</td>
                <td>Amy Reading</td>
                <td>31 May 23</td>
                <td><a href="/clienturl" class="text-nowrap">View property</a></td>  
              </tr>
              <tr>
                <td>2</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>31 May 23</td>
                <td>Alice Knowles</td>
                <td>Preapproved</td>
                <td>High</td>
                <td>Cash</td>
                <td>Lorum ipsum dolor sit amet incididunt</td>
                <td>Alice Knowles</td>
                <td>31 May 23</td>
                <td><a href="/clienturl" class="text-nowrap">View property</a></td>  
              </tr>
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