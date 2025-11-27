<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';
  import Notification from '@/components/Notification/Notification.vue';
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Address finder standardised component</h1>
    </DSHeader>

    <div class="pb-5">
      <Notification>
        This is the standardised component which uses an existing UI component which has more flexability built in.
        <br/><a href="/components/addresslookup" class="">UI component</a>
      </Notification>
      
    </div>
    <p class="lead">Use the address finder when users need to quickly find and enter an address as part of a form or workflow. This component reduces manual typing, speeds up completion, and helps ensure accurate, standardised address data.</p>
    
    
    <h2>Standardised component</h2>
    <p>The Address finder standardised component uses the UI component in a standardised configurations. The UI component should not be used outside of these configurations.</p>
    
    <h2>Address finder</h2>
    
    <h3>Configuration</h3>

    <p>Address finder elements are configurable at the point of use.</p>
    
    
    <div>
      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 14rem;"><STDAddressLookup ></STDAddressLookup></div>
        

        <strong class="d-block mb-1">No optional elements</strong>
        <ul>
          <li>Search by UK postcode.</li>
          <li>Search term is matched against recognised postcode patterns. Any search term not matching a postcode pattern will result in an error.</li>
          <li>Search is automatically triggered when five characters are typed.</li>
          <li>Search can also be triggered by pressing enter, or selecting the search icon.</li>
          <li>Helper text links to the external Royal Mail address finder website to assist the user in the event they don’t have a full postcode.</li>
        </ul>
      </div>
        
      
      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 14rem;"><STDAddressLookup data-allow-overseas></STDAddressLookup></div>
        
        <strong class="d-block mb-1">W/ Overseas address tertiary button</strong>
        <ul>
          <li>Optional element, can be configured at the point of use.</li>
          <li>When selected shows form fields allowing a user to manually enter an overseas address.</li>
        </ul>
      </div>
        
      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 14rem;"><STDAddressLookup data-allow-manual class="searched"></STDAddressLookup></div>
        
        <strong class="d-block mb-1">W/ Manual entry tertiary button</strong>
        <ul>
          <li>Required element.</li>
          <li>To encourage Address finder as a first action the manual entry tertiary button is shown to the user only AFTER a search has been made.</li>
          <li>Also shown in the event the lookup service is unavailable.</li>
          <li>When selected shows form fields allowing a user to manually enter a UK address.</li>
        </ul>
      </div>

      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 14rem;"><STDAddressLookup data-allow-manual data-allow-overseas class="searched"></STDAddressLookup></div>
        
        <strong class="d-block mb-1">W/ Manual entry tertiary button & overseas address tertiary button</strong>
        
        
      </div>
        

      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 18rem;"><STDAddressLookup data-use='{"sub_building_name":"2"}' data-use-label="Use existing address" class="searched"></STDAddressLookup></div>
        
        <strong class="d-block mb-1">W/ Use existing address checkbox</strong>
        
        <ul>
          <li>The use existing address checkbox allows a user to copy an address previously used in the same workflow.</li>
          <li>Checkbox label can be configured at the point of use. For example some products use “Same as transaction address” as a checkbox label in their correspondence address section.</li>
          <li>Choosing to use an existing address shows a form pre-filled with the existing address details.</li>
        </ul>
      </div>
        

      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 18rem;"><STDAddressLookup data-allow-manual data-allow-overseas data-use='{"sub_building_name":"2"}' data-use-label="Use existing address" class="searched"></STDAddressLookup></div>
        
        <strong class="d-block mb-1">All elements</strong>
        
      </div>
        



    </div>
    

    <h2>Search results list</h2>


    <p>When a postcode search has been made the user is shown a list of addresses to choose from, with additional context based actions shown within the popover.</p>

    <div>
      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 34rem;">
          <STDAddressLookup class="open-results" data-postcode-value="NE3 4HD">
            <datalist slot="preloadedList">
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">2 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
            </datalist>
          </STDAddressLookup>
        </div>
        
        <strong class="d-block mb-1">Search results</strong>
        
        <ul>
          <li>Search results are shown for a single UK postcode.</li>
          <li>Up to 500 results can be shown in a scrollable list, additional action is required from the user to view more than 500 results.</li>
        </ul>
      </div>

      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 34rem;">
          <STDAddressLookup class="open-results scroll-to-bottom-results" data-postcode-value="NE3 4HD">
            <datalist slot="preloadedList">
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">2 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
            </datalist>
          </STDAddressLookup>
        </div>
        
        <strong class="d-block mb-1">More than 500 results</strong>
        
        <ul>
          <li>The first 500 results are shown to the user.</li>
          <li>When more than 500 results are available we show a popover action bar footer.</li>
          <li>The footer contains the number of search results currently shown, and the total amount of results available.</li>
          <li>The footer also contains an action button that when selected expands displayed results to include the next 500.</li>
        </ul>
      </div>

      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 34rem;">
          <STDAddressLookup class="open-results scroll-to-bottom-results" data-postcode-value="NE3 4HD">
            <datalist slot="preloadedList">
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">2 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
              <option data-values="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:{&quot;id&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;county_name&quot;:&quot;Tyne &amp; Wear&quot;},&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}">3 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM</option>
            </datalist>
          </STDAddressLookup>
        </div>
        
        <strong class="d-block mb-1">When all results are shown</strong>
        
        <ul>
          <li>When all results are shown we show a stacked popover action bar footer.</li>
          <li>The first part of the footer displays a message encouraging the user to use the Royal Mail address finder if they can’t find the address they’re looking for.</li>
          <li>The second part of the footer contains instructions on what to do if an address doesn’t exist and shows an action button that when selected shows form fields allowing the user to enter an address manually.</li>
        </ul>
      </div>
    
      
    
      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 34rem;">
          <STDAddressLookup class="open-results scroll-to-bottom-results" data-postcode-value="NE3 4HD">
            <datalist slot="preloadedList" class="noresults"></datalist>
          </STDAddressLookup>
        </div>
        
        <strong class="d-block mb-1">No results</strong>
        
        <ul>
          <li>When no results are found we display a message to communicate this to the user.</li>
          <li>Further actions are available to the user in the popover footer action bar.</li>
        </ul>
      </div>


      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 34rem;">
          <STDAddressLookup class="open-results" data-list-class="show-welsh-banner" data-postcode-value="CF10 3RB">
            <datalist slot="preloadedList">
              <option>1 Castle Street, Cardiff CF10 3RB</option>
              <option>2 Castle Street, Cardiff CF10 3RB</option>
              <option>3 Castle Street, Cardiff CF10 3RB</option>
              <option>4 Castle Street, Cardiff CF10 3RB</option>
              <option>5 Castle Street, Cardiff CF10 3RB</option>
              <option>6 Castle Street, Cardiff CF10 3RB</option>
              <option>7 Castle Street, Cardiff CF10 3RB</option>
              <option>8 Castle Street, Cardiff CF10 3RB</option>
              <option>9 Castle Street, Cardiff CF10 3RB</option>
              <option>10 Castle Street, Cardiff CF10 3RB</option>
              <option>11 Castle Street, Cardiff CF10 3RB</option>
              <option>12 Castle Street, Cardiff CF10 3RB</option>
            </datalist>
          </STDAddressLookup>
        </div>
        
        <strong class="d-block mb-1">When results are available in Welsh</strong>
        
        <ul>
          <li>When Welsh language results are available we show a popover action bar header.</li>
          <li>The header contains text communicate the availability of Welsh language addresses to the user.</li>
          <li>The header also contains an action button that when selected replaces available addresses with their Welsh language versions.</li>
          <li>Any addresses without a Welsh language version will remain in English.</li>

        </ul>

      </div>


      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3" style="min-height: 34rem;">
          <STDAddressLookup class="open-results show-welsh" data-list-class="show-welsh-banner" data-postcode-value="CF10 3RB">
            <datalist slot="preloadedList">
              <option>1 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>2 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>3 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>4 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>5 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>6 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>7 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>8 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>9 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>10 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>11 Stryd y Castell, Caerdydd CF10 3RB</option>
              <option>12 Stryd y Castell, Caerdydd CF10 3RB</option>
            </datalist>
          </STDAddressLookup>
        </div>
        
        <strong class="d-block mb-1">When Welsh results are displayed</strong>
        
        <ul>
          <li>When Welsh language results are displayed we show a popover action bar header.</li>
          <li>The header contains text communicate the availability of English language addresses to the user.</li>
          <li>The header also contains an action button that when selected replaces addresses with their English language versions.</li>
        </ul>
      </div>

    </div>
    

    <h2>Search errors</h2>

    <p>When a search results in an error we show the field in the default form field input error state, maintaining the display of helper text alongside an error message.</p>
    

    <div>
      
      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3 was-validated" style="min-height: 16rem;">
          <STDAddressLookup data-postcode-value="!!!!_!" data-input-class="is-invalid" data-allow-manual data-error-msg="Invalid postcode, please enter a valid postcode."></STDAddressLookup>
        </div>
        
        <strong class="d-block mb-1">When a search term is not a valid postcode</strong>
        
        <ul>
          <li>A search term is invalid when it doesn’t match the recognised pattern of a postcode.</li>
          <li>We display an error message to communicate the search term is not a valid postcode and as the user to try again with a valid postcode.</li>
        </ul>
      </div>





      <div class="md-col-span-6 md-col-start-auto mb-5">
        <div class="bg-light p-2 mb-3 was-validated" style="min-height: 16rem;">
          <STDAddressLookup data-postcode-value="SW4 7JR" class="searched" data-input-class="is-invalid" data-allow-manual data-error-msg="There has been a problem. Please try again in a few moments."></STDAddressLookup>
        </div>
        
        <strong class="d-block mb-1">When the lookup service is unavailable</strong>
        
        <ul>
          <li>When the lookup service is unavailable we display an error message to communicate there has been a problem and request the user tries again in a few moments.</li>
          <li>We also show the manual address entry tertiary button to allow the user to enter an address and continue with their journey.</li>
        </ul>
      </div>
    </div>

    <h2>Selecting an address</h2>

    <h3>When all required information is present</h3>

    <p>When an address has been selected and all information required by the product is present, the completed address component is shown. The component shows two text links allowing the user to edit or remove the chosen address.</p>

    <div class="p-2 mb-3 d-flex justify-content-center align-items-center" style="min-height: 16rem; background-color: rgba(238, 238, 238, 0.2) !important;">
      <STDAddressLookup data-postcode-value="NE3 3HD" data-use="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}" data-use-default></STDAddressLookup>
    </div>
    
    <strong>Editing the address</strong>
    <p>Choosing to edit the address shows the address in a pre-filled form with limited edit capabilities.</p>
    <strong>Removing the address</strong>
    <p>Choosing to remove the address shows the address finder search.</p>

    <h3>When required information is missing</h3>

    <p>As address fields can be configured as optional or required at the point of use, there may be times required information is not available and we need to request it from the user. In this case we show the address in a pre-filled form with required fields showing in an error state.</p>

    <div class=" p-2 mb-3 " style="min-height: 16rem; background-color: rgba(238, 238, 238, 0.2) !important;">

      <div class="md-col-start-4 md-col-end-8 was-validated">

        <STDAddressLookup data-postcode-value="NE3 3HD" data-county-required data-manual data-use="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}" data-use-default></STDAddressLookup>
        
      </div>
    </div>
    <strong class="w-100 text-center d-block mb-5">Example of an address that has been chosen but more information is required</strong>

    <h2>Editing an address</h2>
    <p>When editing an address only empty ‘embellishment’ fields may be edited. Golden record fields, and embellishment fields containing information, are shown to the user in a read only form input field and cannot be edited.</p>
    <p>Helper text is shown only for editable fields.</p>
    <p>Embellishment fields are:</p>
    <ul class="mb-5">
      <li>Building name</li>
      <li>Locality</li>
      <li>County</li>
    </ul>

    <div class=" p-2 mb-3 " style="min-height: 16rem; background-color: rgba(238, 238, 238, 0.2) !important;">

      <div class="md-col-start-4 md-col-end-8">

        <STDAddressLookup data-postcode-value="NE3 3HD" data-use="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}" data-use-default data-manual data-force-manual></STDAddressLookup>
      </div>
    </div>
    <strong class="w-100 text-center d-block mb-5">Example of empty embellishment fields available to edit</strong>
    
    <h2>Manual entry form fields</h2>
    <h3>Use of required* and (Optional) suffixes </h3>
    <p>The choice of using an asterisk to denote required fields, or (Optional) to denote optional fields, can be made at the point of use. The suffix should be chosen to ensure consistency with the overall user journey.</p>

    <h3>Manual entry</h3>

    <p>When manually entering an address the user is asked to complete the form fields shown below. Fields are grouped into ‘Street address’ and ‘Locality details’ sections.</p>
    <p>At least one completed field from the street address group is required. If this requirement isn’t met all fields are shown in an error state, with an error message shown underneath the street address title.</p>
    <p>The user is always presented with a tertiary link allowing them to return to the address finder search.</p>

    <h3>UK address manual entry</h3>
    <p>Manual entry of a UK address is only to be used as a last resort when an address does not exist. Until matched with an address from PAF data any duplicate entries are seen as separate addresses. Manual addresses are not available to view in the address finder search UI.</p>
    <p>When selecting a country only UK regions are available from the select dropdown list, overseas countries are not included.</p>

    <div class=" p-2 mb-3 " style="min-height: 16rem; background-color: rgba(238, 238, 238, 1) !important;">

      <div class="md-col-start-4 md-col-end-8">

        <STDAddressLookup data-postcode-value="NE3 3HD" data-manual data-allow-manual=""></STDAddressLookup>
      </div>
    </div>


    <h3>Overseas address entry</h3>

    <p>Overseas addresses are more commonly used for correspondence addresses. When selecting a country UK regions are not available from the select dropdown list, this is to prevent the use of the overseas address entry as a short cut to entering data and moving on.</p>

    <div class=" p-2 mb-3 " style="min-height: 16rem; background-color: rgba(238, 238, 238, 1) !important;">

      <div class="md-col-start-4 md-col-end-8">

        <STDAddressLookup data-postcode-value="NE3 3HD" data-manual data-allow-manual="" data-allow-overseas="" class="show-overseas"></STDAddressLookup>
      </div>
    </div>



    <h3>Errors</h3>
    
    <p>At least one completed field from the street address group is required. If this requirement isn’t met all fields are shown in an error state, with an error message shown underneath the street address title.</p>


    <div class=" p-2 mb-3 " style="min-height: 16rem; background-color: rgba(238, 238, 238, 1) !important;">

      <div class="md-col-start-4 md-col-end-8 was-validated">

        <STDAddressLookup data-postcode-value="NE3 3HD" data-manual data-allow-manual=""></STDAddressLookup>
      </div>
    </div>




    <Integration component="address-lookup" componentName="iam-address-lookup">
      <template #web-component>
        <pre><code>{{`<iam-std-address-lookup></iam-std-address-lookup>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import AddressLookup from '@/components/AddressLookup/AddressLookup.vue</script>
        
<STDAddressLookup></STDAddressLookup>
`}}</code></pre>
      </template>

      <template #attr>
        <table>
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Default</th>
              <th>Options/Type</th>
              <th>Required</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>data-allow-manual</th>
              <td></td>
              <td>String</td>
              <td>Yes</td>
              <td>Allow for the manual button and fields to be showed</td>
            </tr>
            <tr>
              <th>data-allow-overseas</th>
              <td></td>
              <td>Flag</td>
              <td></td>
              <td>Allow for the manual overseas button and fields to be showed</td>
            </tr>
            <tr>
              <th>data-county-required</th>
              <td></td>
              <td>Flag</td>
              <td></td>
              <td>Makes the county field required</td>
            </tr>
            <tr>
              <th>data-country-required</th>
              <td></td>
              <td>Flag</td>
              <td></td>
              <td>Makes the country field required</td>
            </tr>
            <tr>
              <th>data-required</th>
              <td></td>
              <td>Flag</td>
              <td></td>
              <td>Makes the address lookup required by adding in required fields into the UI component</td>
            </tr>
          </tbody>
        </table>
      </template>


    </Integration>
    <Versions pdf="/pdfs/address_finder_standardised.pdf">
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
            <td>V1 added</td>
            <td>17.07.2025</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>

  </main>
</template>

<style>

.show-pagination {

}
</style>