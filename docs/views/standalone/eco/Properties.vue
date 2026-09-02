<script setup lang="ts">

  import TableAdvanced from '@/components/Table/TableAdvanced.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';

</script>

<template>
  <div class="properties">

    <p class="mt-3">Map goes here</p>

    <p class="pb-1"><strong class="me-1">Criteria match key: </strong> <span class="text-heading me-1"><i class="fa-solid fa-circle text-complete"></i> Full match</span> <span class="text-heading me-1"><i class="fa-solid fa-circle text-warning"></i> Partial match</span></p>
    <TableAdvanced @filters-updated="(event) => console.log(event)">
      <Actionbar data-selectall="" slot="before">

        <button data-v-7d119115="" class="btn btn-action fa-box-archive show" slot="selected">Add task to contact later</button>

        <button data-v-7d119115="" class="btn btn-action fa-box-archive show" slot="selected">Create print campaign</button>

      </Actionbar>
      <table>
        <thead>
          <tr>
            <th data-sort="true" data-name="address" data-filters='[{"operator": "equals", "type": "select", "value": "46 Belmont Gardens"}]'>Property Short Address</th>
            <th>Date Listed</th>
            <th>List Price</th>
            <th>Current Agent Name</th>
            <th>Branch</th>
            <th>OM 12+ weeks</th>
            <th>Sale Fall Through</th>
            <th>Price Reduction</th>
            <th class="th--fixed"></th>
          </tr>
        </thead>
        <tbody>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">6 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">8 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
          <tr data-id="710.0" data-latitude="51.873238" data-longitude="0.558525">
            <td data-field="stock_switch.property_short_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">3 Appletree Walk, CM7 1EE</span>
              </span>
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">10/04/2026</span>
              </span>
            </td>
            <td data-field="stock_switch.listing_price_clean">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">£265,000</span>
              </span>
            </td>
            <td data-field="stock_switch.current_agent_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">&amp; CoLondon</span>
              </span>
            </td>
            <td data-field="stock_switch.branch">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">Braintree</span>
              </span>
            </td>
            <td data-field="stock_switch.otm_12_weeks">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td data-field="stock_switch.fallthrough">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content"></span>
              </span>
            </td>
            <td data-field="stock_switch.reduced">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json="">
                <span class="drillable-item-content">
                  <span style="color: #22c55e; font-size: 18px; font-weight: 700">✓</span>
                </span>
              </span>
            </td>
            <td>
              <a href="/property">View property</a>
            </td>
          </tr>
        </tbody>
      </table>
    </TableAdvanced>

  </div>
</template>

<style scoped>
.properties {
  padding-inline: 1.5rem;
  height: calc(100% - 5rem);
  overflow: auto;
}
</style>
