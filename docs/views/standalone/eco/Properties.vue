<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import TableAdvanced from '@/components/Table/TableAdvanced.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';

  import Map from '@/components/Map/Map.vue';

  const propertiesTotal = ref(0);
  const titleText = ref('Properties most likely to switch');

  onMounted(() => {
    const table = document.querySelector('#properties');

    if (table) {
      propertiesTotal.value = table.querySelectorAll('tbody tr').length;
    }
  });
</script>

<template>
  <div class="properties">
    <strong class="lead pt-1 pb-3 d-block">{{ propertiesTotal }} {{ titleText }}</strong>

    <Map data-for="properties"></Map>

    <p class="pb-1">
      <strong class="me-1">Criteria match key: </strong>
      <span class="text-heading me-1"><i class="fa-solid fa-circle text-complete"></i> Full match</span>
      <span class="text-heading me-1"><i class="fa-solid fa-circle text-warning"></i> Partial match</span>
    </p>
    <TableAdvanced @filters-updated="(event) => console.log(event)">
      <Actionbar data-selectall="" slot="before">
        <button data-v-7d119115="" class="btn btn-action fa-box-archive show" slot="selected">
          Add task to contact later
        </button>

        <button data-v-7d119115="" class="btn btn-action fa-box-archive show" slot="selected">
          Create print campaign
        </button>
      </Actionbar>
      <table id="properties">
        <thead>
          <tr>
            <th data-field="stock_switch.property_address" data-sort>Property</th>
            <th data-field="stock_switch.date_listed">Date Listed</th>
            <th data-field="stock_switch.listing_price">Listing Price</th>
            <th
              data-field="stock_switch.branch_name"
              data-filter-applied="true"
              data-filter-value="North Fylde,North Devon,Leicester North,Leamington Spa North &amp; Knowle,Exmouth,East Leeds"
            >
              Branch Name
            </th>
            <th data-field="stock_switch.on_market_12_weeks_flg">On Market 12 Weeks Flg (Yes / No)</th>
          </tr>
        </thead>
        <tbody>
          <tr data-latitude="50.628671" data-longitude="-3.326403" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Cliff Terrace, EX9 6JY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">995,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.050451" data-longitude="-4.173945" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉New Road, EX39 4LN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/03/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">3,000,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.842627" data-longitude="-3.010726" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Kingfisher Mews, FY6 7ZB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/04/2023</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">87,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.63212" data-longitude="-3.328395" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Station Road, EX9 6RW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">265,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.845913" data-longitude="-2.989495" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Higher Green, FY6 7BL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.294593" data-longitude="-1.529877" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Norfolk Street, CV32 5YQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">425,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.625753" data-longitude="-3.410245" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Leslie Road, EX8 1TW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">215,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.875173" data-longitude="-3.026584" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Victoria Road West, FY5 3QE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">750,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.841357" data-longitude="-3.005604" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Nightingale Drive, FY6 7UQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">144,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.107078" data-longitude="-4.165588" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Ashton Crescent, EX33 1RD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/07/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.319078" data-longitude="-1.5736" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Croft Road, CV35 7QE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">685,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.675172" data-longitude="-1.126747" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Loughborough Road, LE4 3EE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">01/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">400,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.07854" data-longitude="-4.066799" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Taw Wharf, EX31 2FD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/04/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">280,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.684667" data-longitude="-3.468607" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Halyards, EX3 0JT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">550,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.096878" data-longitude="-4.096625" class="show">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Meadowside, EX31 4BS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">800,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.208565" data-longitude="-4.124688">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Fortescue Road, EX34 9AD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">150,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.883146" data-longitude="-3.019097">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈West Drive, FY5 2EH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">240,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.068597" data-longitude="-4.093905">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Kilnwood Park, EX31 3UR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">415,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.670626" data-longitude="-1.098428">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Southdown Drive, LE4 8HX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">270,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.841001" data-longitude="-2.995459">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Fylde View Close, FY6 8AH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">279,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.885484" data-longitude="-2.94882">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Sower Carr Lane, FY6 9DJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.621373" data-longitude="-3.384753">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Chamberlain Avenue, EX8 2FH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">370,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.207934" data-longitude="-4.121752">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Meridian Place, EX34 9HH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.289394" data-longitude="-1.545428">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Wilhelmina Close, CV32 5JT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">350,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.837826" data-longitude="-2.990323">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Hardhorn Road, FY6 8ES</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">775,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.018567" data-longitude="-3.997272">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈2 Kewsland Bishops Tawton, EX32 0EX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.108377" data-longitude="-4.165363">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Chapel Street, EX33 1FD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">318,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.060105" data-longitude="-4.165992">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆2 Old Rectory Close Instow, EX39 4LY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">02/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">399,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.876663" data-longitude="-2.993704">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Tretower Way, FY5 4FB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">185,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.010067" data-longitude="-4.225159">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Brennacott Place, EX39 3EY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">200,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.645784" data-longitude="-3.429926">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Highcliffe Close, EX8 5HG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">255,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.629451" data-longitude="-3.339164">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Links Road, EX9 6DF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">299,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.629371" data-longitude="-3.335981">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉West Hill Court, EX9 6BN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">355,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.863254" data-longitude="-3.03087">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Deerhurst Road, FY5 3HG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">330,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.636482" data-longitude="-3.408757">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Elmfield Crescent, EX8 3BL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">275,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.062812" data-longitude="-4.008481">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Bakery Way, EX32 0LJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">190,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.883356" data-longitude="-3.005988">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Heys Street, FY5 4HN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">130,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.872338" data-longitude="-3.001435">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Lawsons Road, FY5 4DJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/07/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">125,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.207124" data-longitude="-4.118365">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈St. Peters Terrace, EX34 9JX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">150,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.846892" data-longitude="-2.970975">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Moonstone Crescent, FY6 7XZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">375,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.073054" data-longitude="-4.065812">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sticklepath Court, EX31 3HN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">425,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.312187" data-longitude="-1.5098">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Lindop Close, CV32 7HD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">03/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">390,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.639101" data-longitude="-3.401919">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Hulham Road, EX8 4RB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">04/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">900,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.986548" data-longitude="-4.142945">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Mill Cottage Huntshaw, EX38 7HD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">04/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">599,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.922472" data-longitude="-2.961992">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sandicroft Place, FY6 0PB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">04/06/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">239,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.628034" data-longitude="-3.32787">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Rosemullion, EX9 6LA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">04/06/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">400,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.704634" data-longitude="-1.135646">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Yeoman Way, LE7 7TW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">04/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">270,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.883455" data-longitude="-3.028217">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Cumberland Avenue, FY5 2PW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">04/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">170,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.297536" data-longitude="-1.537632">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Lillington Avenue, CV32 5TS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">04/10/2023</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">130,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.872378" data-longitude="-3.005344">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Briar Road, FY5 4NA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">04/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">195,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.809862" data-longitude="-1.461361">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉York Road, LS14 6DZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">05/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">200,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.838759" data-longitude="-2.98843">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Lime Grove, FY6 8EL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">05/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">475,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.627644" data-longitude="-3.328099">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Cliff Road, EX9 6JU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">05/04/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">295,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.673461" data-longitude="-1.184416">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Cropston Road, LE7 7BP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">05/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">274,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.050603" data-longitude="-4.1937">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Tomouth Road, EX39 1QD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">05/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">585,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.877022" data-longitude="-3.008802">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Woodland Avenue, FY5 4HA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">05/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">200,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.865925" data-longitude="-1.452325">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Ling Lane, LS14 3HT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">05/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">700,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.257773" data-longitude="-1.61855">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Stratford Road, CV35 8AH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">05/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">375,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.672064" data-longitude="-3.395726">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Horndon Field, EX5 1FZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">05/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">875,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.667926" data-longitude="-1.083962">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Verdale Avenue, LE4 9TH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">230,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.634191" data-longitude="-3.400402">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆The Marles, EX8 4NS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.639475" data-longitude="-3.390956">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Ivydale, EX8 4TA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">375,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.198641" data-longitude="-4.022972">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Castle Street, EX34 0JF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/04/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">260,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.19465" data-longitude="-4.06711">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sterridge Valley, EX34 9TB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">1,300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.209172" data-longitude="-4.122439">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Market Street, EX34 9AY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">199,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.620124" data-longitude="-3.409398">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Helena Place, EX8 1JG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">190,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.616012" data-longitude="-3.409558">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Dagmar Road, EX8 2AN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">189,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.882839" data-longitude="-3.036082">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Norfolk Avenue, FY5 2DX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">190,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.290287" data-longitude="-1.550888">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Warwick Place, CV32 5DF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">190,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.200213" data-longitude="-4.122013">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Furze Hill Road, EX34 8HW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">295,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.072613" data-longitude="-4.051032">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Trafalgar Gardens, EX32 9BR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">290,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.884774" data-longitude="-3.036738">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Cleveleys Avenue, FY5 2DZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/08/2024</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">170,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.63202" data-longitude="-1.14046">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Castle View, LE1 5WH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">645,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.87547" data-longitude="-2.949034">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Fairmont Drive, FY6 9EF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.128713" data-longitude="-4.230775">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Leadengate Close, EX33 1PT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">367,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.990639" data-longitude="-4.181893">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Greenacres Weare Giffard, EX39 4RA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">850,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.681583" data-longitude="-1.12696">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Saltersgate Drive, LE4 3FE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">06/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">350,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.635209" data-longitude="-3.381355">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Meadow View Road, EX8 4HB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">260,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.965608" data-longitude="-4.250223">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Cross Park, EX39 5FR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">315,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.209277" data-longitude="-4.116159">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Quayfield Road, EX34 9EN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">850,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.636275" data-longitude="-1.138323">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Highcross Lane, LE1 4SN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">110,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.842808" data-longitude="-2.999818">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Bleasdale Avenue, FY6 7DT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">290,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.635379" data-longitude="-1.128928">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Yeoman Street, LE1 1UT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">100,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.009566" data-longitude="-4.245222">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Davies Mount, EX39 3SN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">269,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.846957" data-longitude="-2.950517">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Wyre Grange, FY6 8NP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">750,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.694241" data-longitude="-1.163121">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Wallis Close, LE7 7JS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">100,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.660114" data-longitude="-1.066738">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sandhills Avenue, LE5 1PL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">125,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.854332" data-longitude="-2.999697">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Arundel Drive, FY6 7TR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">175,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.041509" data-longitude="-4.229406">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Beach Road, EX39 1HQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.038187" data-longitude="-4.218733">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Bay View Road, EX39 1AY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">400,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.106537" data-longitude="-4.16562">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Mill Stile, EX33 1EN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">07/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">260,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.011775" data-longitude="-4.21951">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Handy Cross, EX39 3DW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">170,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.069406" data-longitude="-4.094898">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Ley Meadow Drive, EX31 3XX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">310,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.111989" data-longitude="-4.178134">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Mowstead Park, EX33 1BH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.031328" data-longitude="-4.233652">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Silford Cross, EX39 3PT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">575,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.721626" data-longitude="-1.132098">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Pyke, LE7 7LY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">400,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.640815" data-longitude="-1.073991">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉The Parkway, LE5 2BB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">295,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.595544" data-longitude="-0.845077">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Church Lane, LE7 9XA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">900,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.115702" data-longitude="-4.068829">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Granary Kings Heanton, EX31 4ED</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">595,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.86367" data-longitude="-3.041889">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Buckley Crescent, FY5 1RH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">160,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.320332" data-longitude="-1.579823">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Waller Close, CV35 7QG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">639,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.659278" data-longitude="-1.06334">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Carty Road, LE5 1QG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">220,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.080875" data-longitude="-4.040418">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Walton Way, EX32 8AB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">369,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.876166" data-longitude="-2.962101">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Conifers, FY6 9EP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">75,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.630262" data-longitude="-3.319293">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Coastguard Road, EX9 6HB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">425,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.068432" data-longitude="-4.099079">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Barum Ware Way, EX31 3WG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.647338" data-longitude="-3.419039">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Longbrook Lane, EX8 5LJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">270,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.296823" data-longitude="-1.534414">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Binswood Avenue, CV32 5GD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">80,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.205316" data-longitude="-4.12282">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Marlborough Road, EX34 8JL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/06/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">320,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.752411" data-longitude="-3.397902">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Westland Way, EX5 7GH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">137,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.855706" data-longitude="-3.013748">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Bispham Road, FY6 7PL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">249,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.885873" data-longitude="-3.02604">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Northumberland Avenue, FY5 2JU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">08/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">168,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.382008" data-longitude="-1.761946">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Four Ashes Road, B93 8NA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">09/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">155,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.689697" data-longitude="-3.470477">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Bewick Avenue, EX3 0FR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">09/04/2024</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">219,999</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.675251" data-longitude="-3.401425">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Greenway, EX5 1LR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">09/04/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">275,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.702602" data-longitude="-3.465542">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Clyst Road, EX3 0DB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">09/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">575,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.073325" data-longitude="-4.090492">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Lower Cross Road, EX31 2LE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">09/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">274,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.818474" data-longitude="-1.455677">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Hansby Avenue, LS14 6LE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">09/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">170,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.290545" data-longitude="-1.547777">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉The Oaks, CV32 5DB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">09/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">215,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.964333" data-longitude="-4.090422">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Spindrift High Bullen, EX38 7JA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">09/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">475,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.052077" data-longitude="-3.97079">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Hannaford Lane, EX32 0PL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">205,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.628924" data-longitude="-3.323087">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Fore Street, EX9 6NH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">475,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.815192" data-longitude="-3.484566">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Exeter Road, EX5 4HX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">220,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.202332" data-longitude="-4.104288">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Pine Close, EX34 9RY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">315,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.632897" data-longitude="-1.04366">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Forest Rise, LE7 9PG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">475,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.650571" data-longitude="-1.128656">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Baseball Walk, LE4 5HX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">37,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.068597" data-longitude="-4.093905">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Kilnwood Park, EX31 3UR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">365,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.65327" data-longitude="-1.155049">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Haydon Lane, LE4 0ES</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">195,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.207621" data-longitude="-4.12662">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Greenclose Road, EX34 8BT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">230,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.187152" data-longitude="-4.207651">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Cleeve House Mortehoe, EX34 7ED</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">800,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.080567" data-longitude="-4.053894">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Ebberley Lawn, EX32 7DJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/09/2024</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">90,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.936806" data-longitude="-4.151118">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Cross Cottage Little Torrington, EX38 8PL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">400,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.043235" data-longitude="-4.221899">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Atlanta View, EX39 1WG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/12/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.899051" data-longitude="-2.958471">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Wood View Lane, FY6 0LH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">10/12/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">115,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.616403" data-longitude="-3.403251">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Portland Avenue, EX8 2BS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/01/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">225,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.635" data-longitude="-3.412318">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Exeter Road, EX8 3NG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">195,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.076787" data-longitude="-4.046362">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Hayne Park, EX32 8DT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">260,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.949694" data-longitude="-4.154546">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Limers Hill, EX38 8AX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">375,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.682935" data-longitude="-3.466883">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Ferry Road, EX3 0JH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">680,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.209854" data-longitude="-4.116071">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Strand, EX34 9EJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/04/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">495,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.372098" data-longitude="-1.747868">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Copse, B93 8GA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">2,000,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.632199" data-longitude="-3.401474">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Travershes Close, EX8 3LH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">264,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.192711" data-longitude="-4.130528">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Saltmer Close, EX34 8LY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">290,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.316852" data-longitude="-1.577156">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Stone House Mews, CV35 7RT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">550,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.01988" data-longitude="-4.211855">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Lime Grove, EX39 3JL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/06/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">215,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.709468" data-longitude="-1.133997">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Fowke Street, LE7 7PJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.692336" data-longitude="-1.088794">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Fosse Way, LE7 1NE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">340,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.303699" data-longitude="-1.536497">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉John Cullis Gardens, CV32 6JP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/07/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">320,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.680986" data-longitude="-1.085864">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Eastfield Road, LE4 8FP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/07/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">340,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.680947" data-longitude="-3.46331">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Monmouth Street, EX3 0AL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">11/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">395,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.066026" data-longitude="-4.007236">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Loring Fields, EX32 0FB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/03/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">390,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.658143" data-longitude="-1.060763">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Maidenwell Avenue, LE5 1QD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">119,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.864118" data-longitude="-3.044166">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Norbreck Road, FY5 1RE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">75,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.688388" data-longitude="-1.133067">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sandpit Drive, LE4 3NP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">339,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.828718" data-longitude="-1.449148">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Willow Way, LS14 2EZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.066603" data-longitude="-4.092744">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Higher Westlake Road, EX31 3XN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">390,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.868998" data-longitude="-2.991287">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Drysdale Avenue, FY5 5PQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">357,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.900003" data-longitude="-2.958554">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Bradshaws Close, FY6 0QP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">340,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.075353" data-longitude="-4.03475">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Walnut Way, EX32 7RF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">155,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.173742" data-longitude="-4.208905">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Bay View Road, EX34 7DQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">350,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.204896" data-longitude="-4.058292">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Barton Lane, EX34 9SU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">549,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.2076" data-longitude="-4.129297">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Torrs Park, EX34 8AY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">12/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">500,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.201808" data-longitude="-4.024456">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Chapel Lane, EX34 0HJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">650,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.122819" data-longitude="-3.936358">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Copse Bratton Fleming, EX31 4TG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/03/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">265,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.620812" data-longitude="-3.397078">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Salterton Road, EX8 2DW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">149,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.129141" data-longitude="-4.146453">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Middle Winsham House Winsham, EX33 2LX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">930,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.027436" data-longitude="-4.211816">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Orchard Hill, EX39 2RA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">700,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.885396" data-longitude="-3.019851">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Keepers Hey, FY5 2HL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">190,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.392735" data-longitude="-1.737391">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Mockley Wood Road, B93 9NG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">220,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.657247" data-longitude="-1.163119">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Blakesley Walk, LE4 0QL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">115,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.850942" data-longitude="-2.987911">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Station Road, FY6 7XJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/06/2022</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">65,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.850942" data-longitude="-2.987911">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Station Road, FY6 7XJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">125,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.670306" data-longitude="-1.191056">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Cherry Tree Close, LE7 7TB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.653743" data-longitude="-1.15841">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Roydene Crescent, LE4 0GL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">13/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">160,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.036824" data-longitude="-4.182707">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉West Living House Westleigh, EX39 4NL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">14/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">875,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.683348" data-longitude="-3.464093">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Victoria Road, EX3 0EU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">14/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">295,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.629857" data-longitude="-1.105707">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Shipley Road, LE5 5BX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">14/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">675,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.369505" data-longitude="-1.758737">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Grange Road, B93 8QX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">14/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">850,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.204787" data-longitude="-4.034179">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Belmont Avenue, EX34 0PR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">14/05/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">199,995</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.205101" data-longitude="-4.105373">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Chambercombe Road, EX34 9PH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">14/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">245,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.204589" data-longitude="-4.123259">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Ashley Terrace, EX34 8JG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">14/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.020201" data-longitude="-4.208677">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈North Road, EX39 2NW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">14/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">125,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.647542" data-longitude="-3.417107">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Olga Terrace, EX8 5LR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.629708" data-longitude="-1.040583">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Hollies Way, LE7 9RJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">450,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.192711" data-longitude="-4.130528">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Saltmer Close, EX34 8LY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">400,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.952545" data-longitude="-4.141365">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Well Street, EX38 8EP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">199,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.860116" data-longitude="-3.023661">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Bergerac Crescent, FY5 3UF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">249,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.039963" data-longitude="-4.210444">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Cross Street, EX39 1BX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.9192" data-longitude="-4.209211">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Fore Street, EX38 8NG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/05/2024</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">499,999</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.062446" data-longitude="-4.004626">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Blakeshill Road, EX32 0JG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">370,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.876082" data-longitude="-3.016932">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Wells Close, FY5 2UX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">310,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.648344" data-longitude="-1.146319">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Larchmont Road, LE4 0BW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">140,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.637559" data-longitude="-3.402241">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Shackleton Close, EX8 4PR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">370,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.299483" data-longitude="-1.529781">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Oak Tree Close, CV32 5YT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">975,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.866176" data-longitude="-3.025482">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sevenoaks Drive, FY5 3BY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">275,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.638625" data-longitude="-3.388343">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Parkside Drive, EX8 4LD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">260,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.8479" data-longitude="-2.971849">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sapphire Drive, FY6 7XP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">265,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.204011" data-longitude="-4.030709">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈West Challacombe Lane, EX34 0HF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/07/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">425,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.636018" data-longitude="-3.318521">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈East Budleigh Road, EX9 6EJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">15/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">425,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.040303" data-longitude="-4.23183">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Pebble Close, EX39 1FD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">16/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">399,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.085894" data-longitude="-4.048578">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Long Meadow Drive, EX32 7RA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">16/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">170,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.878961" data-longitude="-3.029247">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Holmefield Avenue, FY5 2QP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">16/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">725,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.204846" data-longitude="-4.130859">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Trinity Gardens, EX34 8ED</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">16/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">400,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.301498" data-longitude="-1.634335">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Tredington Park, CV35 7TT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">16/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">575,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.61476" data-longitude="-3.40969">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Louisa Place, EX8 2BB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">16/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">340,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.639308" data-longitude="-1.072101">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Colchester Road, LE5 2DH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">385,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.228414" data-longitude="-3.835569">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Blackmores Path, EX35 6AP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">259,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.122639" data-longitude="-3.931477">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉6 Treefield Bratton Fleming, EX32 7JL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.662879" data-longitude="-1.190912">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Rawlins Drive, LE7 7WN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">270,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.617265" data-longitude="-3.422671">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Victoria Road, EX8 1DY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">385,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.683928" data-longitude="-1.136617">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Highgate Avenue, LE4 3JJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">290,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.642268" data-longitude="-1.057541">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Chater Close, LE5 2HX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">390,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.683228" data-longitude="-3.466425">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Exe Street, EX3 0JL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">375,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.698897" data-longitude="-1.067748">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Central Avenue, LE7 2EE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.68828" data-longitude="-1.134238">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Birstall Meadow Road, LE4 3NF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">340,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.654132" data-longitude="-1.056088">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Borrowby Close, LE5 1WQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">450,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.87431" data-longitude="-2.997755">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Kelsons Avenue, FY5 4DW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">152,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.379527" data-longitude="-1.753512">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Mill Lane, B93 8NN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">535,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.042018" data-longitude="-4.228688">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Fairways, EX39 1TQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">210,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.927324" data-longitude="-2.988739">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Barton Avenue, FY6 0BW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">205,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.170568" data-longitude="-4.147818">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Trimstone, EX34 8NR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/07/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">415,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.953409" data-longitude="-4.131993">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Burwood Road, EX38 7NE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">266,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.668267" data-longitude="-1.171752">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Blue Gates Road, LE4 1AB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">190,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.110657" data-longitude="-4.159298">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Abbotts Hill, EX33 2ED</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">275,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.023947" data-longitude="-4.210794">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Glendale Terrace, EX39 2PN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">220,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.067981" data-longitude="-4.136327">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sampson's Plantation, EX31 3FF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">165,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.373243" data-longitude="-1.762095">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Rodborough Road, B93 8EE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">17/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">2,250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.692957" data-longitude="-3.469432">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Carrick Mill, EX3 0FQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">585,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.864642" data-longitude="-3.017765">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Pendle Close, FY5 3WB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">280,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.656323" data-longitude="-1.051266">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Hackness Road, LE5 1EX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">315,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.639808" data-longitude="-1.138269">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sanvey Gate, LE1 4BR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">110,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.648005" data-longitude="-1.067986">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Netherhall Road, LE5 1DJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">220,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.060564" data-longitude="-4.167455">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Tarkas Lodge Instow, EX39 4LZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">800,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.064752" data-longitude="-4.153506">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Lagoon View, EX31 3LD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">290,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.226769" data-longitude="-1.595434">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Seven Elms Barn Wasperton, CV35 8EE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">1,000,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.043507" data-longitude="-4.215164">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Windsor Road, EX39 1EN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">240,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.639504" data-longitude="-3.407263">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Mount Pleasant Avenue, EX8 4QD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">170,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.7078" data-longitude="-1.061342">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈New Zealand Lane, LE7 3FU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">310,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.063201" data-longitude="-4.077762">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Highgrove, EX31 3SX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">397,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.950845" data-longitude="-4.148705">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Rack Park Close, EX38 8AH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.65842" data-longitude="-1.063876">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Wainwright Avenue, LE5 1QW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">260,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.085262" data-longitude="-4.057417">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Kingsley Avenue, EX32 7AJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">270,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.703268" data-longitude="-1.04211">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Main Street, LE7 3DA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">2,250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.636668" data-longitude="-1.12571">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Wimbledon Street, LE1 1SY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">130,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.239908" data-longitude="-1.607236">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Bremridge Close, CV35 8DG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">299,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.068241" data-longitude="-4.083626">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Almond Court, EX31 3RG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">350,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.818432" data-longitude="-1.458366">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉York Road, LS14 6JS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">125,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.627454" data-longitude="-3.377763">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Capel Lane, EX8 2PN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.20926" data-longitude="-4.121541">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Marine Place, EX34 9AZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">150,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.094182" data-longitude="-4.137193">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈85 Chivenor Cross Chivenor, EX31 4BN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">18/12/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">445,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.016819" data-longitude="-4.194857">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Shamwickshire Close, EX39 4RJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/01/2024</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">375,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.752176" data-longitude="-3.403268">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Morgan Sweet, EX5 7ET</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">220,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.876282" data-longitude="-3.038688">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈St. Georges Avenue, FY5 3NH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">165,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.747468" data-longitude="-3.416976">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Kemps Field, EX5 7AZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">200,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.928568" data-longitude="-2.986165">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Lyme Grove, FY6 0AJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">230,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.856465" data-longitude="-3.013219">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Wendover Road, FY6 7PT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">170,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.690303" data-longitude="-1.154201">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Leicester Road, LE7 7JG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">220,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.015375" data-longitude="-4.187931">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈North Avenue, EX39 4RD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">189,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.616659" data-longitude="-3.419204">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Morton Crescent, EX8 1BG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">159,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.881143" data-longitude="-3.041882">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Beach Road, FY5 1EG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">125,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.879386" data-longitude="-3.020496">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Linden Avenue, FY5 2EZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">195,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.752188" data-longitude="-3.403708">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Langworthy Orchard, EX5 7ER</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">430,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.658984" data-longitude="-1.15964">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Oronsay Road, LE4 0QU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">220,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.67356" data-longitude="-1.096519">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Market Garden Close, LE4 8NW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">400,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.096878" data-longitude="-4.096625">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Meadowside, EX31 4BS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">575,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.849899" data-longitude="-2.986883">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Garratt Close, FY6 7XG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">365,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.875129" data-longitude="-2.958031">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Sherbourne Road, FY6 9AJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">159,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.82828" data-longitude="-1.451615">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Beech Way, LS14 2FN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/07/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">290,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.887547" data-longitude="-3.038252">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Tebay Avenue, FY5 2NB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">70,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.817379" data-longitude="-1.444087">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Eastwood Crescent, LS14 5JB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">170,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.929987" data-longitude="-2.979664">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Eskdale Grove, FY6 0DH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">175,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.635918" data-longitude="-1.125119">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Morledge Street, LE1 1TH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">19/12/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">85,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.638571" data-longitude="-1.038246">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Perry Grove, LE7 9WP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">339,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.039159" data-longitude="-4.241318">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Atlantic Way, EX39 1NA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/02/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">280,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.846735" data-longitude="-2.985745">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Windsor Court, FY6 7UX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">120,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.620812" data-longitude="-3.397078">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Salterton Road, EX8 2DW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">100,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.636668" data-longitude="-1.12571">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Wimbledon Street, LE1 1SY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.617496" data-longitude="-3.424374">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Shelly Road, EX8 1AN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.86795" data-longitude="-3.038665">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Fleetwood Road, FY5 1NJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">220,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.076719" data-longitude="-4.056396">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Litchdon Street, EX32 8ND</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">110,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.659532" data-longitude="-3.297193">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Lea Road, EX9 7JH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">520,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.156919" data-longitude="-1.515789">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Warwick Road, CV35 0HW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.084804" data-longitude="-4.056897">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Carrington Terrace, EX32 7AE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">237,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.173377" data-longitude="-4.208423">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Bay View Road, EX34 7DQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/05/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">360,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.637874" data-longitude="-1.128258">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Lee Circle, LE1 3RF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">105,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.885656" data-longitude="-3.006028">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉John Street, FY5 4JA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/06/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">73,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.385671" data-longitude="-1.759707">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Widney Road, B93 9BH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">550,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.296823" data-longitude="-1.534414">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Binswood Avenue, CV32 5GD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">125,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.63212" data-longitude="-3.328395">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Station Road, EX9 6RW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">245,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.689109" data-longitude="-1.083061">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Clover Way, LE7 2BR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">20/12/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">450,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.206335" data-longitude="-4.037239">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Cross Street, EX34 0DH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">235,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.684268" data-longitude="-3.46599">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Fore Street, EX3 0HF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">125,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.797883" data-longitude="-3.527539">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Lower Dunsford, EX5 5JL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">765,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.633693" data-longitude="-3.397686">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Langstone Drive, EX8 4JA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">350,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.631818" data-longitude="-3.406213">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Hulham Road, EX8 3JZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.092379" data-longitude="-1.510225">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Windmill Way, CV35 0SB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">600,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.858302" data-longitude="-1.427034">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Main Street, LS14 3DX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">375,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.643263" data-longitude="-1.088216">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Iris Close, LE5 0QT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.012618" data-longitude="-4.220591">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Pynes Lane, EX39 3EE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">180,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.87361" data-longitude="-3.009526">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Coniston Avenue, FY5 4AQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">125,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.642018" data-longitude="-3.39864">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Byron Way, EX8 5SE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/05/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">569,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.654281" data-longitude="-1.099503">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Huntingdon Road, LE4 9GF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">280,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.68693" data-longitude="-1.135271">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Cordelia Drive, LE4 3PH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">360,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.845381" data-longitude="-2.977749">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Poulton Drive, FY6 7HA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">235,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.859871" data-longitude="-3.046721">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Waterhead Crescent, FY5 1QR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">174,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.694085" data-longitude="-3.401986">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Crosshill Cottage Woodbury Salterton, EX5 1PH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">620,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.855946" data-longitude="-2.98058">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Kevin Avenue, FY6 7JU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">199,995</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.635526" data-longitude="-1.125644">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Morledge Street, LE1 1ST</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">21/12/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">70,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.013303" data-longitude="-4.205811">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈New Road, EX39 5AA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">280,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.668775" data-longitude="-1.175069">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Pitchens Close, LE4 1AH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">285,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.174937" data-longitude="-1.627754">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Stratford Road, CV35 9JN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">450,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.137038" data-longitude="-4.197254">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Barn Georgeham, EX33 1JL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">450,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.883735" data-longitude="-3.005784">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Ormerod Street, FY5 4HU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">127,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.635158" data-longitude="-1.047616">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Kinross Avenue, LE5 2LS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/03/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">240,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.100787" data-longitude="-4.048108">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Shirwell Road, EX31 4JH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">550,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.621424" data-longitude="-1.0809">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Hawthorne Drive, LE5 6DL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">150,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.387398" data-longitude="-1.734763">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Station Road, B93 0JN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">200,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.630901" data-longitude="-1.134956">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Lower Brown Street, LE1 5TH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">99,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.674593" data-longitude="-1.133695">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Henson Close, LE4 3AR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">279,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.675927" data-longitude="-3.406526">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Globe Hill, EX5 1JS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">150,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.776724" data-longitude="-3.523899">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Peppercorn Cottage Brampford Speke, EX5 5HG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.870604" data-longitude="-3.023765">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Kittiwake Close, FY5 3FR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/07/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">99,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.682836" data-longitude="-3.460425">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Altamira, EX3 0AQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">22/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">240,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.11122" data-longitude="-4.075072">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Westwood Prixford, EX31 4DX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">23/01/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">497,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.626771" data-longitude="-1.07021">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Whitehall Road, LE5 6GJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">23/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">500,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.617624" data-longitude="-3.412377">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Bicton Place, EX8 2SU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">23/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.053058" data-longitude="-4.191362">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Market Street, EX39 1PW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">23/08/2024</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.616727" data-longitude="-3.423249">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Pierhead, EX8 1FE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">23/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">530,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.037246" data-longitude="-4.243066">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Dudley Way, EX39 1XD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">23/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">450,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.775294" data-longitude="-3.566673">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆2 Winscott Cottages Newton St. Cyres, EX5 5AJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">475,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.690419" data-longitude="-1.087443">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Melton Road, LE7 2BE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">710,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.630248" data-longitude="-1.132915">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Duke Street, LE1 6WB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">110,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.627332" data-longitude="-3.334156">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Northview Road, EX9 6BZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">775,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.868487" data-longitude="-2.991199">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Galway Close, FY5 5PT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">225,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.03921" data-longitude="-4.218839">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Highfield, EX39 1BB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">450,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.01237" data-longitude="-4.189443">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Fulford Close, EX39 4DX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">315,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.865194" data-longitude="-3.004488">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Pinewood Avenue, FY5 5EW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">185,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.070757" data-longitude="-4.044055">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Landkey Road, EX32 9BW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/06/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">290,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.900183" data-longitude="-2.956275">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Smithy Lane, FY6 0LE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/07/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">635,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.70081" data-longitude="-1.077933">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Preston Close, LE7 1AE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/07/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">215,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.632656" data-longitude="-1.135202">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Rupert Street, LE1 5XH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/07/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">60,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.084804" data-longitude="-4.056897">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Carrington Terrace, EX32 7AE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">230,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.917332" data-longitude="-2.967447">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Back Lane, FY6 0NG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">499,999</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.843038" data-longitude="-2.985066">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Main Drive, FY6 8HZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">24/10/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">99,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.041852" data-longitude="-4.225128">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Kala Fair, EX39 1TX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">115,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.13046" data-longitude="-4.207004">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Justacott Forda, EX33 1JG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">795,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.633529" data-longitude="-3.327841">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Elmside, EX9 6RP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/03/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">675,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.155735" data-longitude="-3.877358">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content"
                  >🥈The Old Dairy Barn Swincombe Mill Challacombe, EX31 4TU</span
                ></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/03/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">425,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.186539" data-longitude="-1.593532">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Saddler Place, CV35 9UY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">315,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.630774" data-longitude="-1.110461">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Mere Road, LE5 5GN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">290,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.830581" data-longitude="-1.473692">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Kentmere Avenue, LS14 1BL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">190,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.689109" data-longitude="-1.083061">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Clover Way, LE7 2BR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">549,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.750112" data-longitude="-3.404397">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Alford Pasture, EX5 7EB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">350,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.634149" data-longitude="-1.049529">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Telford Way, LE5 2LX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/07/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">190,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.069961" data-longitude="-4.125941">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉The Mill House Fremington, EX31 3DQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">825,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.06198" data-longitude="-4.011871">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Church Meadow, EX32 0JB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">25/11/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">219,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.053798" data-longitude="-4.191212">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Market Street, EX39 1PP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/02/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">450,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.876476" data-longitude="-2.999967">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Sandwell Avenue, FY5 4FN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">130,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.950138" data-longitude="-4.150481">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Mill Street, EX38 8AN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">200,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.675339" data-longitude="-1.164962">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Plover Crescent, LE4 1EB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">230,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.618369" data-longitude="-3.405755">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Raddenstile Lane, EX8 2JH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">350,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.955729" data-longitude="-4.170119">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈4 Rakeham Cottages, EX38 8JE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">160,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.865194" data-longitude="-3.004488">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Pinewood Avenue, FY5 5EW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">159,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.065121" data-longitude="-4.072452">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Tawcroft Way, EX31 3TZ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">295,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.843043" data-longitude="-3.002878">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Chiltern Avenue, FY6 7DY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">269,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.681588" data-longitude="-1.136175">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Queensgate Drive, LE4 3JQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.016668" data-longitude="-4.209564">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Victoria Gardens, EX39 2BA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">26/07/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">155,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.051399" data-longitude="-4.17907">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Anstey Way, EX39 4JF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">685,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.625293" data-longitude="-3.395415">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Chichester Close, EX8 2LR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">225,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.07614" data-longitude="-4.055042">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Barum Court, EX32 8QL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">115,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.675849" data-longitude="-1.092479">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Dovedale Road, LE4 8NA</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">340,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.675615" data-longitude="-1.19717">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Anstige Avenue, LE7 7TP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">319,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.647796" data-longitude="-1.086171">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Herongate Road, LE5 0AW</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">450,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.867881" data-longitude="-3.043484">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Winsford Crescent, FY5 1PS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.865403" data-longitude="-3.018149">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Beacon Fell Close, FY5 3WD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.057935" data-longitude="-4.175809">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Marine Parade, EX39 4FF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">650,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.874982" data-longitude="-2.991611">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Hillylaid Road, FY5 4ED</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/06/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">259,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.053994" data-longitude="-3.969116">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Station Hill, EX32 0QR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">349,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.636344" data-longitude="-1.13909">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Highcross Street, LE1 4PG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">27/12/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">90,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.885696" data-longitude="-3.017226">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Breeze Close, FY5 2WH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">184,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.63073" data-longitude="-1.132433">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈King Street, LE1 6RN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">160,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.20915" data-longitude="-4.123249">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Avenue Road, EX34 9AT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/02/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">72,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.768437" data-longitude="-3.355297">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Whiteway Close, EX5 2TL</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">297,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.849524" data-longitude="-2.989824">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Breck Road, FY6 7AQ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">375,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.011366" data-longitude="-4.222114">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Grenville Estate, EX39 3EP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">180,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.637071" data-longitude="-3.385101">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Winston Road, EX8 4LR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">410,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.027401" data-longitude="-4.207479">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Orchard Hill, EX39 2QY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">500,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.624609" data-longitude="-3.388707">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Littleham Road, EX8 2ET</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">50,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.63873" data-longitude="-3.384061">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Parkside Drive, EX8 4LX</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/05/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">367,500</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.772672" data-longitude="-3.507046">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Vinnicombes Road, EX5 4BB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">280,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.631985" data-longitude="-1.032096">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Devenports Hill, LE7 9NF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">550,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.640518" data-longitude="-1.088953">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Freeman Road North, LE5 4NB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">250,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.87953" data-longitude="-3.027832">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Holmefield Avenue, FY5 2QR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">750,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.02496" data-longitude="-4.217145">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉First Raleigh, EX39 3NJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">395,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.61697" data-longitude="-3.418789">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Morton Crescent Mews, EX8 1BT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">150,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.884667" data-longitude="-3.043917">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Carr Gate, FY5 1LB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">210,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.036876" data-longitude="-4.232336">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Crofts Way, EX39 1FU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">435,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.01203" data-longitude="-4.197026">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Churchill Road, EX39 4GH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">165,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.683971" data-longitude="-1.089471">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Barkby Thorpe Lane, LE4 8GP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">525,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.882645" data-longitude="-3.01665">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Bennett Road, FY5 2RR</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">139,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.658487" data-longitude="-1.168137">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Watts Close, LE4 0PS</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/07/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">375,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.630953" data-longitude="-1.090215">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈The Circle, LE5 5GD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">28/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">380,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.112561" data-longitude="-4.178804">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Mowstead Road, EX33 1BJ</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">425,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.203741" data-longitude="-4.126871">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈St. Brannocks Road, EX34 8EG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.205754" data-longitude="-4.041651">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Newberry Road, EX34 0AP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">495,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.082301" data-longitude="-4.054002">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Richmond Street, EX32 7DP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">274,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.67274" data-longitude="-1.086864">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Keightley Walk, LE4 8LP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">245,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.835315" data-longitude="-2.991859">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Lowick Drive, FY6 8HB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">245,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.063268" data-longitude="-4.095177">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Glenwood Drive, EX31 3GD</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">350,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.87365" data-longitude="-2.991808">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Stanah Road, FY5 5JE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">355,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.614691" data-longitude="-3.398281">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Douglas Avenue, EX8 2EY</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">800,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.072622" data-longitude="-4.121052">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Coppice Close, EX31 2QE</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">529,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.211906" data-longitude="-1.630534">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Stratford Road, CV35 8BH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.158151" data-longitude="-1.509417">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Southam Street, CV35 0LN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">29/08/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leamington Spa North &amp; Knowle</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.63208" data-longitude="-1.135125">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Newarke Street, LE1 5SN</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">100,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.750594" data-longitude="-3.551544">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈8 Cowley Place Cowley, EX5 5DG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">270,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.865619" data-longitude="-3.008482">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Beechwood Drive, FY5 5EH</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">180,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="50.635677" data-longitude="-3.402496">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🏆Scott Drive, EX8 3LF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">325,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Exmouth</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.824504" data-longitude="-1.443537">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Stanks Drive, LS14 5ED</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/04/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">130,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.067321" data-longitude="-4.090807">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Meadow Brook, EX31 3TG</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.821294" data-longitude="-1.443397">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉St. Benedict Mews, LS14 5PF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">175,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.832467" data-longitude="-2.986261">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Towbreck Gardens, FY6 8FF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">585,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.859987" data-longitude="-1.418481">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Kirkfield Lane, LS14 3EP</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/06/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">365,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">East Leeds</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.842808" data-longitude="-2.999818">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Bleasdale Avenue, FY6 7DT</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">30/09/2025</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">280,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.075329" data-longitude="-4.048468">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Victoria Lawn, EX32 9HU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">31/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">200,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="52.670324" data-longitude="-1.092933">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Campbell Avenue, LE4 8HB</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">31/01/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">300,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Leicester North</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.204011" data-longitude="-4.030709">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈West Challacombe Lane, EX34 0HF</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">31/03/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">350,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
          <tr data-latitude="53.837826" data-longitude="-2.990323">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥉Hardhorn Road, FY6 8ES</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">31/05/2026</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">398,000</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Fylde</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">No</span></span
              >
            </td>
          </tr>
          <tr data-latitude="51.198474" data-longitude="-4.12368">
            <td data-field="stock_switch.property_address">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">🥈Bicclescombe Park Road, EX34 8EU</span></span
              >
            </td>
            <td data-field="stock_switch.date_listed">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">31/07/2024</span></span
              >
            </td>
            <td data-field="stock_switch.listing_price">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">379,950</span></span
              >
            </td>
            <td data-field="stock_switch.branch_name">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">North Devon</span></span
              >
            </td>
            <td data-field="stock_switch.on_market_12_weeks_flg">
              <span class="drillable-item" data-links="" data-context="" data-add-filter-json=""
                ><span class="drillable-item-content">Yes</span></span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </TableAdvanced>
  </div>
</template>

<style scoped>
  /*
.properties {
  padding-inline: 1.5rem;
  height: calc(100% - 5rem);
  overflow: auto;
}
  */
</style>
