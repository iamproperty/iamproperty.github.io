<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import PCNav from './components/PCNav.vue';
  import Table from '@/components/Table/Table.vue';
  import Input from '@/components/Input/Input.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Modal from '@/components/Modal/Modal.vue';
  import Popover from '@/components/Popover/Popover.vue';
  import Menu from '@/components/Menu/Menu.vue';
  import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue';
  import Rankings from '@/components/Rankings/Rankings.vue';
  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';




  const handleSearch = (event) => {
    console.log(event);
  }

  const handleSort = (event) => {
    
    console.log(event);
  }

  const handleFilter = (event) => {
    
    console.log(event);
  }

  const handleSubmit = (event) => {
    
    console.log(event);
  }

</script>

<template>
  <nav>
  <PCNav></PCNav>
  </nav>
  <main>
    <ol class="breadcrumb mb-5">
      <li><a href="/profile">Profile: 22 Lynx Road</a></li>
      <li>Quote overview</li>
    </ol>
    
    <h1 class="pb-3">Quote overview</h1>

    <p class="pb-2"><span class="badge wider-colour-3 me-3">Status: Opportunity</span> <span>ID: 56930</span></p>



    <div class="d-sm-flex pb-3">
      <div  class="admin-panel mw-fit-content me-auto">
        <button class="btn btn-action mb-0 fa-plus">Add note</button>
        <hr class="hr--vertical"/>
        <button class="btn btn-action fa-sync">Follow up</button>
        
      </div>

      <button class="btn btn-secondary">Decline case</button>
    </div>

    <div class="admin-panel">
      <div class="d-flex align-items-center mb-2">
        <i class="icon bg-success fa-location-dot me-3" aria-hidden="true"></i>
        <strong class="me-3">Average search times:</strong>
        <strong class="ms-auto">21 days</strong>
      </div>
      <hr class="border-1 mb-2" />
      <div class="d-flex align-items-center mb-2">
        <i class="icon bg-success fa-location-dot me-3" aria-hidden="true"></i>
        <strong class="me-3">Average search times:</strong>
        <strong class="ms-auto">21 days</strong>
      </div>
      <hr class="border-1 mb-2" />
      <div class="d-flex align-items-center mb-2">
        <i class="icon bg-success fa-location-dot me-3" aria-hidden="true"></i>
        <strong class="me-3">Average search times:</strong>
        <strong class="ms-auto">21 days</strong>
      </div>
      <hr class="border-1 mb-2" />
      <div class="admin-panel__footer bg-success mt-auto">
        <p>For the Sale transaction, the minimum forecasted time<br/> saving with Premium Conveyancing is:</p><strong class="h4">29 days saved</strong>
      </div>
    </div>

    <hr/>
    <div class="d-flex flex-sm-row flex-column gap-2 mb-4">
      
      <span class="feature fa-rocket-launch">
        <strong>Using Premium Conveyancing</strong>
        Est. completion: December 2025
      </span>

      <span class="feature fa-copy">
        <strong>Using Standard Conveyancing</strong>
        Est. completion: December 2026
      </span>

    </div>

    <div class="d-md-flex">

      <div class="me-auto">
        <h2 class="pb-3">Sale quotes</h2>
        <p class="pb-1"><strong>Transaction details applied for quote:</strong></p>
<!--
        <STDAddressLookup data-postcode-value="NE3 3HD" data-title="Transaction details applied for quote:" data-use="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}" data-use-default></STDAddressLookup>
-->        
        <a href="/standalone/premium-conveyancing/" class="text-underline-plain mb-2">22 Lynx Road, Tynemouth, Newcastle Upon Tyne, NE1 5LS <i class="fa-regular fa-edit me-0 ms-1"></i></a><br/>
          
        <p>
          <strong>Lead client:</strong> John Smith<br/>
          <strong>Client:</strong> Amy Smith<br/>
        </p>
      </div>

      <button class="btn btn-secondary mb-5">Create bespoke quote</button>

    </div>

    
      <p class="pb-1"><strong>Transaction details</strong></p>

    <div class="d-flex flex-column flex-sm-row md-col-end-8 gap-3 mb-4">
    
      <label class="flex-grow-1 mb-0">
        Asking price
        <Input data-currency="pound"><input name="price" type="number" value="450000" step="1000"/></Input>
      </label>
      
      <label class="flex-grow-1 mb-0">
        Tenure
        <select>
          <option>Feehold</option>
        </select>
      </label>

      <label class="flex-grow-1 mb-0">
        Property type
        <select>
          <option>Residential</option>
        </select>
      </label>
      
    </div>

    <div class="d-flex flex-md-row flex-column gap-2 mb-5">
    
      <button class="link mb-0" disabled>
        <i class="fa-regular fa-sync"></i>Quote using the estimated transactiondetails
      </button>
      <button class="link mb-0" disabled>
        <i class="fa-regular fa-save"></i>Apply details to quote and save transaction details to case
      </button>
      
    </div>


    <div class="admin-panel mb-5">
      <h2 class="bg-light">Recommended sale quotes</h2>
      <Table  >
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Conveyancing type</th>
            <th>Solicitor</th>
            <th>Location</th>
            <th>Online updates</th>
            <th>Av. completion time</th>
            <th>Total cost</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="pt-1 pe-1"><label class="pb-4 me-0"><input type="checkbox" name="quote1" /></label></td>
            <td>Premium</td>
            <td>Solicitor name</td>
            <td>Gosforth</td>
            <td>Comprehensive</td>
            <td>X days</td>
            <td>$1000</td>
            <td><a href="/details" class="link m-0">View details</a></td>
          </tr>
          <tr>
            <td class="pt-1 pe-1"><label class="pb-4 me-0"><input type="checkbox" name="quote2" /></label></td>
            <td>Premium</td>
            <td>Solicitor name</td>
            <td>Gosforth</td>
            <td>Comprehensive</td>
            <td>X days</td>
            <td>$1000</td>
            <td><a href="/details" class="link m-0">View details</a></td>
          </tr>
          <tr>
            <td class="pt-1 pe-1"><label class="pb-4 me-0"><input type="checkbox" name="quote3" /></label></td>
            <td>Premium</td>
            <td>Solicitor name</td>
            <td>Gosforth</td>
            <td>Comprehensive</td>
            <td>X days</td>
            <td>$1000</td>
            <td><a href="/details" class="link m-0">View details</a></td>
          </tr>
          <tr>
            <td class="pt-1 pe-1"><label class="pb-4 me-0"><input type="checkbox" name="quote4" /></label></td>
            <td>Premium</td>
            <td>Solicitor name</td>
            <td>Gosforth</td>
            <td>Comprehensive</td>
            <td>X days</td>
            <td>$1000</td>
            <td><a href="/details" class="link m-0">View details</a></td>
          </tr>
          <tr>
            <td class="pt-1 pe-1"><label class="pb-4 me-0"><input type="checkbox" name="quote5" /></label></td>
            <td>Premium</td>
            <td>Solicitor name</td>
            <td>Gosforth</td>
            <td>Comprehensive</td>
            <td>X days</td>
            <td>$1000</td>
            <td><a href="/details" class="link m-0">View details</a></td>
          </tr>
        </tbody>
      </table>
      </Table>

    </div>

    <h2>Onward purchase quotes</h2>

    <button class="btn btn-secondary mb-5">Create and quote onward purchase</button>

    <div class="summary bg-primary p-3">

      <div class="d-flex justify-content-center justify-content-sm-end flex-wrap gap-3">
        <button class="btn btn-secondary mb-0 me-0" disabled>Email/download quotes</button>
        <button class="btn btn-primary mb-0 me-0" disabled>Instruct to solicitor</button>
      </div>
    </div>

    
    <div class="admin-panel mb-5">
      <h2 class="bg-light">Quote history</h2>
      
      <span class="h3 p-5 d-block m-auto text-center">No case data yet</span>
      

    </div>

    <div class="admin-panel mb-5">
      
      <h2 class="bg-light">Quote history</h2>

      <Table class="table--fullwidth">

        <Actionbar slot="before" data-search @search-submit="(event) => handleSearch(event)">
          
          <button class="btn btn-action m-0 nowrap" type="button" popovertarget="sort" aria-label="Sort the below table by">Sort by</button>
          <Menu id="sort">

            <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" @change="(event) => handleSort(event)" />
            <label for="follow-up-oldest" class="radio--tick">Follow up date (Oldest to newest)</label>
            
            <input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest" @change="(event) => handleSort(event)" />
            <label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label>
            
              
            <input
                type="radio"
                name="sort"
                data-sort=""
                id="date-instructed-oldest"
                value="date-instructed-oldest"
                checked=""
                autofocus="true"
                @change="(event) => handleSort(event)"
              />
            <label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label>
              
              
            <input
                type="radio"
                name="sort"
                data-sort=""
                id="date-instructed-newest"
                value="date-instructed-newest"
                @change="(event) => handleSort(event)"
              />
            <label for="date-instructed-newest" class="radio--tick">Date Instructed (Newest to oldest)</label>
            
          </Menu>

          <button class="btn btn-primary btn-compact fa-sliders" type="button" command="show-modal" commandfor="filters">Filter</button>
        </Actionbar>
        <AppliedFilters class="applied-filters--compact" data-nosubmit @filter-clicked="(event) => handleFilter(event)">
          <Modal class="modal--sm">
            <dialog id="filters">
              <AppliedFilters class="applied-filters--compact" data-nosubmit @submit="(event) => handleSubmit(event)">
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

                  <Input data-duplicate="due_diligience_incomplete">
                    <label for="sla_progress_due"><input
                      type="checkbox"
                      name="[sla_progress][]"
                      id="sla_progress_due"
                      data-filter-text="SLA progress - Due"
                      value="Due"

                    />Due</label>
                  </Input>

                  
                  <hr />
                  <Input data-duplicate="due_diligience_requires_approval">
                  
                  <label for="sla_progress_upcoming"><input
                    type="checkbox"
                    name="[sla_progress][]"
                    id="sla_progress_upcoming"
                    data-filter-text="SLA progress - Upcoming"
                    value="Upcoming"
                  />Upcoming</label>
                </Input>
                  <hr />
                  <Input data-duplicate="due_diligience_verified">
                  
                  <label for="sla_progress_track"><input
                    type="checkbox"
                    name="[sla_progress][]"
                    id="sla_progress_track"
                    data-filter-text="SLA progress - On track"
                    value="track"
                  />On track</label>
                </Input>
                  <hr />
                </div>
                <button class="btn btn-primary d-block mt-4 mb-0 mx-auto">Update results</button>
              </AppliedFilters>
              <hr />
            </dialog>
          </Modal>
        </AppliedFilters>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Status</th>
              <th>Quote</th>
              <th>Activity</th>
              <th>Solicitor</th>
              <th>Location</th>
              <th>Client</th>
              <th>Expiry date</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pt-0 pe-1 pb-0">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical btn-sm m-0" popovertarget="quote-actions">Actions</button>
                <Menu id="quote-actions" popover="">
                  <button class="btn btn-action" data-single="" role="menuitem" tabindex="0" autofocus="true">View task</button>
                  <button class="btn btn-action" data-single="" role="menuitem" tabindex="0">Mark as completed</button>
                  <button class="btn btn-action" data-single="" role="menuitem" tabindex="0">Delete task</button>
                </Menu>
              </td>
              <td>Selected</td>
              <td>Sale</td>
              <td>Payment link sent</td>
              <td>Solicitor name</td>
              <td>Gosforth</td>
              <td>John Smith</td>
              <td>18.11.25</td>
              <td><a href="/details" class="link m-0">sale-quote.pdf</a></td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>



  </main>
</template>

<style>
.summary {
  position: sticky;
  left: 0;
  bottom: 1rem;
  
  
  margin-bottom: 2rem;

  border-radius: 0.5rem;
}

</style>