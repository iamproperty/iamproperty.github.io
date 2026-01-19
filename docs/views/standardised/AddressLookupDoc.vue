<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';
  import Notification from '@/components/Notification/Notification.vue';
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';

  let urlParams = new URLSearchParams(window.location.search);
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Address finder standardised component</h1>
    </DSHeader>

    <div class="pb-5">
      <Notification>
        This is the standardised component which uses an existing UI component which has more flexability built in.
        <br/><a href="/form-components/addresslookup" class="">UI component</a>
      </Notification>
      
    </div>
    <p class="lead">Use the address finder when users need to quickly find and enter an address as part of a form or workflow. This component reduces manual typing, speeds up completion, and helps ensure accurate, standardised address data.</p>
    
    
    <h2>Standardised component</h2>
    <p>The Address finder standardised component uses the UI component in a standardised configurations. The UI component should not be used outside of these configurations.</p>
    
    <h2>Address finder</h2>
    
    <h3>Configuration</h3>

    <p>Address finder elements are configurable at the point of use.</p>
    
    
    <hr class="border-0">
      <div id="visualtest1" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest1' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
        <div class="bg-light p-2 mb-3" style="min-height: 14rem;"><STDAddressLookup ></STDAddressLookup></div>
        

        <strong class="d-block mb-1 visualtest-hide">No optional elements</strong>
        <ul class="visualtest-hide">
          <li>Search by UK postcode.</li>
          <li>Search term is matched against recognised postcode patterns. Any search term not matching a postcode pattern will result in an error.</li>
          <li>Search is automatically triggered when five characters are typed.</li>
          <li>Search can also be triggered by pressing enter, or selecting the search icon.</li>
          <li>Helper text links to the external Royal Mail address finder website to assist the user in the event they don’t have a full postcode.</li>
        </ul>
      </div>
        
      
      <div id="visualtest2" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest2' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
        <div class="bg-light p-2 mb-3" style="min-height: 14rem;"><STDAddressLookup data-allow-overseas></STDAddressLookup></div>
        
        <strong  class="visualtest-hide d-block mb-1">W/ Overseas address tertiary button</strong>
        <ul class="visualtest-hide">
          <li>Optional element, can be configured at the point of use.</li>
          <li>When selected shows form fields allowing a user to manually enter an overseas address.</li>
        </ul>
      </div>
       
    <hr class="border-0"> 
      <div id="visualtest3" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest3' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
        <div class="bg-light p-2 mb-3" style="min-height: 14rem;"><STDAddressLookup data-allow-manual class="searched"></STDAddressLookup></div>
        
        <strong class="visualtest-hide d-block mb-1">W/ Manual entry tertiary button</strong>
        <ul class="visualtest-hide">
          <li>Required element.</li>
          <li>To encourage Address finder as a first action the manual entry tertiary button is shown to the user only AFTER a search has been made.</li>
          <li>Also shown in the event the lookup service is unavailable.</li>
          <li>When selected shows form fields allowing a user to manually enter a UK address.</li>
        </ul>
      </div>

      <div id="visualtest4" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest4' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
        <div class="bg-light p-2 mb-3" style="min-height: 14rem;"><STDAddressLookup data-allow-manual data-allow-overseas class="searched"></STDAddressLookup></div>
        
        <strong class="visualtest-hide d-block mb-1">W/ Manual entry tertiary button & overseas address tertiary button</strong>
        
        
      </div>
  
    <hr class="border-0">      

      <div id="visualtest5" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest5' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
        <div class="bg-light p-2 mb-3" style="min-height: 18rem;"><STDAddressLookup data-use='{"sub_building_name":"2"}' data-use-label="Use existing address" class="searched"></STDAddressLookup></div>
        
        <strong class="visualtest-hide d-block mb-1">W/ Use existing address checkbox</strong>
        
        <ul class="visualtest-hide">
          <li>The use existing address checkbox allows a user to copy an address previously used in the same workflow.</li>
          <li>Checkbox label can be configured at the point of use. For example some products use “Same as transaction address” as a checkbox label in their correspondence address section.</li>
          <li>Choosing to use an existing address shows a form pre-filled with the existing address details.</li>
        </ul>
      </div>
        

      <div id="visualtest6" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest6' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
        <div class="bg-light p-2 mb-3" style="min-height: 18rem;"><STDAddressLookup data-allow-manual data-allow-overseas data-use='{"sub_building_name":"2"}' data-use-label="Use existing address" class="searched"></STDAddressLookup></div>
        
        <strong class="visualtest-hide d-block mb-1">All elements</strong>
        
      </div>
        
    
    <hr class="border-0">

    <h2>Search results list</h2>


    <p>When a postcode search has been made the user is shown a list of addresses to choose from, with additional context based actions shown within the popover.</p>

    <hr class="border-1" />
      <div id="visualtest7" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest7' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
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
        
        <strong class="visualtest-hide d-block mb-1">Search results</strong>
        
        <ul class="visualtest-hide">
          <li>Search results are shown for a single UK postcode.</li>
          <li>Up to 500 results can be shown in a scrollable list, additional action is required from the user to view more than 500 results.</li>
        </ul>
      </div>

      <div id="visualtest8" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest8' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
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
        
        <strong class="visualtest-hide d-block mb-1">More than 500 results</strong>
        
        <ul class="visualtest-hide">
          <li>The first 500 results are shown to the user.</li>
          <li>When more than 500 results are available we show a popover action bar footer.</li>
          <li>The footer contains the number of search results currently shown, and the total amount of results available.</li>
          <li>The footer also contains an action button that when selected expands displayed results to include the next 500.</li>
        </ul>
      </div>

<hr class="border-0">
      <div id="visualtest9" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest9' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
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
        
        <strong class="visualtest-hide d-block mb-1">When all results are shown</strong>
        
        <ul class="visualtest-hide">
          <li>When all results are shown we show a stacked popover action bar footer.</li>
          <li>The first part of the footer displays a message encouraging the user to use the Royal Mail address finder if they can’t find the address they’re looking for.</li>
          <li>The second part of the footer contains instructions on what to do if an address doesn’t exist and shows an action button that when selected shows form fields allowing the user to enter an address manually.</li>
        </ul>
      </div>
    
      
    
      <div id="visualtest10" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest10' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
        <div class="bg-light p-2 mb-3" style="min-height: 34rem;">
          <STDAddressLookup class="open-results scroll-to-bottom-results" data-postcode-value="NE3 4HD">
            <datalist slot="preloadedList" class="noresults"></datalist>
          </STDAddressLookup>
        </div>
        
        <strong class="visualtest-hide d-block mb-1">No results</strong>
        
        <ul class="visualtest-hide">
          <li>When no results are found we display a message to communicate this to the user.</li>
          <li>Further actions are available to the user in the popover footer action bar.</li>
        </ul>
      </div>

<hr class="border-0">

      <div id="visualtest11" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest11' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
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
        
        <strong class="visualtest-hide d-block mb-1">When results are available in Welsh</strong>
        
        <ul class="visualtest-hide">
          <li>When Welsh language results are available we show a popover action bar header.</li>
          <li>The header contains text communicate the availability of Welsh language addresses to the user.</li>
          <li>The header also contains an action button that when selected replaces available addresses with their Welsh language versions.</li>
          <li>Any addresses without a Welsh language version will remain in English.</li>

        </ul>

      </div>


      <div id="visualtest12" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest12' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
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
        
        <strong class="visualtest-hide d-block mb-1">When Welsh results are displayed</strong>
        
        <ul class="visualtest-hide">
          <li>When Welsh language results are displayed we show a popover action bar header.</li>
          <li>The header contains text communicate the availability of English language addresses to the user.</li>
          <li>The header also contains an action button that when selected replaces addresses with their English language versions.</li>
        </ul>
      </div>

    
    

    <h2>Search errors</h2>

    <p>When a search results in an error we show the field in the default form field input error state, maintaining the display of helper text alongside an error message.</p>
    

<hr class="border-0">
      
      <div id="visualtest13" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest13' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
        <div class="bg-light p-2 mb-3 was-validated" style="min-height: 16rem;">
          <STDAddressLookup data-postcode-value="!!!!_!" data-input-class="is-invalid" data-allow-manual data-error-msg="Invalid postcode, please enter a valid postcode."></STDAddressLookup>
        </div>
        
        <strong class="visualtest-hide d-block mb-1">When a search term is not a valid postcode</strong>
        
        <ul class="visualtest-hide">
          <li>A search term is invalid when it doesn’t match the recognised pattern of a postcode.</li>
          <li>We display an error message to communicate the search term is not a valid postcode and as the user to try again with a valid postcode.</li>
        </ul>
      </div>





      <div id="visualtest14" :class="`visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest14' ? 'target' : '')} md-col-span-6 md-col-start-auto mb-5`">
        <div class="bg-light p-2 mb-3 was-validated" style="min-height: 16rem;">
          <STDAddressLookup data-postcode-value="SW4 7JR" class="searched" data-input-class="is-invalid" data-allow-manual data-error-msg="There has been a problem. Please try again in a few moments."></STDAddressLookup>
        </div>
        
        <strong class="visualtest-hide d-block mb-1">When the lookup service is unavailable</strong>
        
        <ul class="visualtest-hide">
          <li>When the lookup service is unavailable we display an error message to communicate there has been a problem and request the user tries again in a few moments.</li>
          <li>We also show the manual address entry tertiary button to allow the user to enter an address and continue with their journey.</li>
        </ul>
      </div>
      

    <h2>Selecting an address</h2>

    <h3>When all required information is present</h3>

    <p>When an address has been selected and all information required by the product is present, the completed address component is shown. The component shows two text links allowing the user to edit or remove the chosen address.</p>

    <div id="visualtest15" :class="`p-2 mb-3 d-flex justify-content-center align-items-center visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest15' ? 'target' : '')}`" style="min-height: 16rem; background-color: rgba(238, 238, 238, 0.2) !important;">
      <STDAddressLookup data-postcode-value="NE3 3HD" data-use="{&quot;paf_id&quot;:&quot;1&quot;,&quot;paf_entry_type&quot;:&quot;Standard&quot;,&quot;date_added&quot;:&quot;2023-11-07T10:30:00&quot;,&quot;date_updated&quot;:&quot;&quot;,&quot;date_removed&quot;:&quot;&quot;,&quot;building_number&quot;:&quot;1&quot;,&quot;sub_building_name&quot;:&quot;&quot;,&quot;building_name&quot;:&quot;&quot;,&quot;organisation_name&quot;:&quot;&quot;,&quot;department_name&quot;:&quot;&quot;,&quot;po_box_number&quot;:&quot;&quot;,&quot;dependent_thoroughfare&quot;:&quot;&quot;,&quot;thoroughfare&quot;:&quot;Acacia Avenue&quot;,&quot;double_dependent_locality&quot;:&quot;&quot;,&quot;dependent_locality&quot;:&quot;Gosforth&quot;,&quot;post_town&quot;:&quot;NEWCASTLE-UPON-TYNE&quot;,&quot;postal_county&quot;:&quot;urn:als:county:a72ndjIq&quot;,&quot;postcode&quot;:&quot;NE3 3LU&quot;,&quot;country&quot;:{&quot;id&quot;:&quot;urn:als:country:a72ndjIq&quot;,&quot;name&quot;:&quot;United Kingdom of Great Britain and Northern Ireland&quot;,&quot;alpha-2&quot;:&quot;GB&quot;,&quot;alpha-3&quot;:&quot;GBR&quot;,&quot;is_fatf&quot;:false,&quot;short_name&quot;:&quot;United Kingdom&quot;},&quot;postcode_outward_code&quot;:&quot;NE3&quot;,&quot;postcode_inward_code&quot;:&quot;3LU&quot;,&quot;postcode_type&quot;:&quot;S&quot;,&quot;small_user_organisation&quot;:&quot;&quot;,&quot;delivery_point_suffix&quot;:&quot;&quot;,&quot;district&quot;:&quot;&quot;,&quot;ward&quot;:&quot;&quot;,&quot;uprn&quot;:&quot;123456789012&quot;,&quot;udprn&quot;:&quot;&quot;,&quot;umrrn&quot;:&quot;&quot;,&quot;usrn&quot;:&quot;&quot;,&quot;longitude&quot;:&quot;123&quot;,&quot;latitude&quot;:&quot;&quot;,&quot;label&quot;:&quot;1 Acacia Avenue, Gosforth, NEWCASTLE-UPON-TYNE, NE3 3LU, UNITED KINGDOM&quot;}" data-use-default></STDAddressLookup>
    </div>
    
    <strong>Editing the address</strong>
    <p>Choosing to edit the address shows the address in a pre-filled form with limited edit capabilities.</p>
    <strong>Removing the address</strong>
    <p>Choosing to remove the address shows the address finder search.</p>

    <h3>When required information is missing</h3>

    <p>As address fields can be configured as optional or required at the point of use, there may be times required information is not available and we need to request it from the user. In this case we show the address in a pre-filled form with required fields showing in an error state.</p>

    <div id="visualtest16" :class="` p-2 mb-3 visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest16' ? 'target' : '')}`" style="min-height: 16rem; background-color: rgba(238, 238, 238, 0.2) !important;">

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
      <li>Country</li>
    </ul>

    <div id="visualtest17" :class="` p-2 mb-3 visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest17' ? 'target' : '')}`" style="min-height: 16rem; background-color: rgba(238, 238, 238, 0.2) !important;">

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

    <div id="visualtest18" :class="` p-2 mb-3 visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest18' ? 'target' : '')}`" style="min-height: 16rem; background-color: rgba(238, 238, 238, 1) !important;">

      <div class="md-col-start-4 md-col-end-8">

        <STDAddressLookup data-postcode-value="NE3 3HD" data-manual data-allow-manual=""></STDAddressLookup>
      </div>
    </div>


    <h3>Overseas address entry</h3>

    <p>Overseas addresses are more commonly used for correspondence addresses. When selecting a country UK regions are not available from the select dropdown list, this is to prevent the use of the overseas address entry as a short cut to entering data and moving on.</p>

    <div id="visualtest19" :class="` p-2 mb-3 visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest19' ? 'target' : '')}`" style="min-height: 16rem; background-color: rgba(238, 238, 238, 1) !important;">

      <div class="md-col-start-4 md-col-end-8">

        <STDAddressLookup data-postcode-value="NE3 3HD" data-manual data-allow-manual="" data-allow-overseas="" class="show-overseas"></STDAddressLookup>
      </div>
    </div>



    <h3>Errors</h3>
    
    <p>At least one completed field from the street address group is required. If this requirement isn’t met all fields are shown in an error state, with an error message shown underneath the street address title.</p>


    <div id="visualtest20" :class="` p-2 mb-3 visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest20' ? 'target' : '')}`" style="min-height: 16rem; background-color: rgba(238, 238, 238, 1) !important;">

      <div class="md-col-start-4 md-col-end-8 was-validated">

        <STDAddressLookup data-postcode-value="NE3 3HD" data-manual data-allow-manual=""></STDAddressLookup>
      </div>
    </div>


    <h3 class="pt-5">Matched address</h3>
    <div id="visualtest21" :class="` mb-3 visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest21' ? 'target' : '')}`">

      <div class="md-col-end-6">

        <STDAddressLookup data-use='{"building_number":"2","dependent_thoroughfare":"Airfield View","dependent_locality":"Gosforth", "post_town":"Newcastle upon Tyne","postcode": "NE3 4HD"}' data-matched='{"building_number":"1","dependent_thoroughfare":"Airfield View","dependent_locality":"Gosforth", "post_town":"Newcastle upon Tyne","postcode": "NE3 4HD"}' data-matched-label="1 Airfield View, Gosforth, Newcastle upone Tyne, NE3 4HD"></STDAddressLookup>
      </div>
    </div>

    <h3 class="pt-5">Address unkown</h3>
    <div id="visualtest22" :class="` mb-3 visualtest ${(urlParams.has('target') && urlParams.get('target') == 'visualtest21' ? 'target' : '')}`">

      <div class="md-col-end-6">

        <STDAddressLookup class="searched" data-allow-manual="" data-address-unknown="address-unknown" data-address-unknown-checked></STDAddressLookup>
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
              <td>true</td>
              <td>Flag</td>
              <td>no</td>
              <td>Makes the address lookup required by adding in required fields into the UI component</td>
            </tr>
            <tr>
              <th>data-address-unknown</th>
              <td></td>
              <td>String</td>
              <td></td>
              <td>Creates an address unknown checkbox named by the value of the attribute</td>
            </tr>
            <tr>
              <th class="text-nowrap">data-address-unknown-checked</th>
              <td></td>
              <td>String</td>
              <td></td>
              <td>Checks the address unknown field and removes any required fields</td>
            </tr>
          </tbody>
        </table>

      </template>

        <template #dispatched-events>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>address-unknown</th>
              <td>When a user checks the address unknown checkbox</td>
              <td></td>
            </tr>
            <tr>
              <th>address-known</th>
              <td>When a user unchecks the address unknown checkbox</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #criteria>

        <!-- #region Search -->
        <strong class="lead d-block pb-2">Search Functionality:</strong>

        
        <strong class="d-block pb-2">AC1</strong>

        <p>Given I am using the Address Lookup component<br/>
        When I enter a postcode that meets the criteria of a valid postcode patten (see below)<br/>
        Then the results matching the postcode I have entered appear in the dropdown</p>
      
        <strong class="d-block pb-1">Postcode Pattern:</strong>
        <ul>
          <li>1 or 2 letters followed by 1 or 2 digits</li>
          <li>Followed by either space or not a space</li>
          <li>Followed by 1 digit</li>
          <li>Followed by 2 characters</li>
        </ul>
        <span class="d-block pb-1">OR</span>
        <ul>  
          <li>'GIR'</li>
          <li>Following by optional space</li>
          <li>Followed by 1 digit</li>
          <li>Followed by 'AA'</li>
        </ul>

        <p>Technical definition: ^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$</p>

        <strong class="d-block pb-2">AC2</strong>
        <p>Given I have results in the dropdown of the Address Lookup component<br/>
        When I delete some characters of the postcode I have entered meaning the entry doesn’t meet the postcode pattern rules<br/>
        Then the results showing will disappear<br/>
        AND<br/>
        The invalid postcode warning message will appear<br/>
        AND<br/>
        They will only update to new results if I change the postcode I have entered to another valid postcode pattern - at this point a new search will be completed on this postcode</p>
        <strong class="d-block pb-2">AC3</strong>
        <p>Given I am using the Address Lookup component<br/>
        When I have not entered a postcode that meets the valid postcode pattern (see above)<br/>
        Then no dropdown appears</p>


        <strong class="d-block pb-2">AC4</strong>
        <p>Given I am using the Address Lookup component<br/>
        When I have results in the dropdown<br/>
        Then I will see up to 500 results<br/>
        AND<br/>
        These results display the full address details<br/>
        AND<br/>
        They are displayed in the following order - Alphabetical then sequential<br/>
        AND<br/>
        If there is an Alias (i.e. we need to show two versions of the same address) then the Alias record will show above the corresponding PAF record</p>


        <strong class="d-block pb-2">AC5</strong>

        <p>Given I am using the Address Lookup component<br/>
          When there are more than 500 results (or what the configured displayed number of results is)<br/>
          Then a ‘see more results’ button will appear<br/>
          AND<br/>
          If I click this button then I will see a further 500 results (or whatever the configured displayed number of results is) displayed in the same order as set out in AC4<br/>
          AND<br/>
          I will be able to see a summary of how many results of the total are currently being displayed (eg. results 1-500 of 582 results)</p>

        <strong class="d-block pb-2">AC6</strong>
        <p>Given I am using the Address Lookup component<br/>
        When I click on the ‘search button’<br/>
        Then a search will be performed on whatever I have typed into the box<br/>
        AND<br/>
        Results will be displayed as per AC4</p>

        <strong class="d-block pb-2">AC7</strong>
        <p>Given I am using the Address Lookup component<br/>
        When I have entered a valid postcode pattern but there are no results for that postcode<br/>
        Then a message will display in the dropdown saying that no addresses are returned for that postcode<br/>
        AND<br/>
        The option will be provided to do a manual search or use the Royal Mail link</p>

        <strong class="d-block pb-2">AC8</strong>
        <p>Given I am using the Address Lookup component<br/>
        When I have entered an invalid postcode pattern (see AC1 for postcode pattern details) and click on the search button<br/>
        Then an error message will display saying that I have entered an invalid postcode</p>

        <strong class="d-block pb-2">AC9</strong>
        <p>Given I am using the Address Lookup component and have returned some results in the dropdown<br/>
        When I click on the cross in the search bar OR I click outside of the search bar/results dropdown<br/>
        Then it clears my search bar<br/>
        AND<br/>
        Clears all results from the dropdown<br/>
        AND<br/>
        Results in the ‘Enter address manually’ button appearing</p>

        <strong class="d-block pb-2">AC10</strong>
        <p class="pb-1">Given I am using the Address Lookup component and have found the address I want<br/>
        When I click on the address from the dropdown<br/>
        Then I will be directed to the Results Summary page if the product using the component does not require one of the following data items as a mandatory field</p>
        <ul>
          <li>Country</li>
          <li>County</li>
          <li>Locality</li>
        </ul>

        <p>
        OR<br/>
        I will be directed to the Results Detail page if the product using the component does require one of the above data items as a mandatory field<br/>
        AND<br/>
        Each product has the ability to determine whether fields are mandatory on each page they use this component on</p>

        <strong class="d-block pb-2">AC11</strong>
        <p>Given I am using the Address Lookup component<br/>
        When the API fails<br/>
        Then a message is displayed informing me that we’ve had a technical issue and to try again later</p>

        <!-- #endregion -->

        <!-- #region Search results -->
        <strong class="lead d-block pb-2">Search Results Functionality:</strong>
        <strong class="d-block pb-2">AC1</strong>
        <p>Given I have found the address I want in the Address Lookup component and one of the following fields is mandatory in the product I am in (Locality, County, Country)<br/>
When I select my address<br/>
Then I am directed to the full Address Details screen which shows the full details of the address I have selected</p>

        <strong class="d-block pb-2">AC2</strong>
        <p>Given I have found the address I want in the Address Lookup component and none of the following fields are mandatory in the product I am in (Locality, County, Country)<br/>
When I select my address<br/>
Then I am directed to a summary of the address I have selected<br/>
AND<br/>
I have the option to either Edit or Remove</p>

        <strong class="d-block pb-2">AC3</strong>
        <p>Given I am on the Address Summary page<br/>
When I click on Edit<br/>
Then I am directed to the Address Details page</p>

        <strong class="d-block pb-2">AC4</strong>
        <p>Given I am on the Address Summary page<br/>
When I click on Remove<br/>
Then I am returned to the Address Lookup component with no search details in context</p>

        <strong class="d-block pb-2">AC5</strong>
        <p class="pb-1">Given I am using the Address Lookup Component<br/>
When I am on the Address Details page<br/>
Then all of the address details that are available in the central service for the postcode I selected are pulled through and displayed in the respective fields<br/>
AND<br/>
The following fields are locked down/uneditable:</p>
<ul>
  <li>Sub Building Name</li>
  <li>Building Number</li>
  <li>Dependant Thoroughfare</li>
  <li>Thoroughfare / Street Name</li>
  <li>Dependant Locality</li>
  <li>Post Town</li>
  <li>Region</li>
  <li>Postcode</li>
</ul>


      <p class="pb-1">AND<br/>
      The following fields are editable if they are blank (they are uneditable if values have been pulled through from PAF)</p>
      <ul>
        <li>Building Name</li>
        <li>Locality</li>
      </ul>
      <p class="pb-1">AND
      The following fields are editable:</p>
      <ul class="pb-5">
        <li>County</li>
      </ul>

        <strong class="d-block pb-2">AC6</strong>
        <p class="pb-1">Given I am using the Address Lookup Component<br/>
When I am on the Address Details page<br/>
Then the following fields are marked as mandatory:<br/>
</p>
<ul>
  <li>Postcode</li>
  <li>At least 1 of Sub Building Name, Building Name, Building Number</li>
  <li>At least 1 of Thoroughfare / Street Name, Dependant Thoroughfare</li>
  <li>Post Town</li>
</ul>
<p class="pb-1">AND<br/>
The following fields may be marked as mandatory depending on whether the product has set them to be mandatory:</p>
<ul class="pb-5">
  <li>Locality</li>
<li>County</li>
<li>Region</li>
</ul>
        <strong class="d-block pb-2">AC7</strong>
        <p>Given I am on the Address Details page<br/>
When I click on an uneditable field<br/>
Then it will be unresponsive</p>

        <strong class="d-block pb-2">AC8</strong>
        <p>Given I am on the Address Details page and I have not filled in all mandatory fields<br/>
When I try to ‘Save address’<br/>
Then I see an error message and an indication of which mandatory fields I haven’t completed</p>

        <strong class="d-block pb-2">AC9</strong>
        <p>N/A</p>

        <strong class="d-block pb-2">AC10</strong>
        <p>Given I am on the Address Details page<br/>
When I am entering the County<br/>
Then the following options are available to me in a dropdown:<br/>
Options as per below:<br/>
GB-ENG (England)<br/>
GB-SCT (Scotland)<br/>
GB-WLS or GB-CYM (Wales)<br/>
GB-NIR (Northern Ireland)<br/>
GB-CHA (Channel Islands)<br/>
GB-IM (Isle of Man)<br/>
GB-GSY (Guernsey)<br/>
GB-JSY (Jersey)</p>

        <strong class="d-block pb-2">AC11</strong>
        <p>Given I am on the Address Details page for a UK address<br/>
When I am entering the Country<br/>
Then I will be presented with a dropdown list of all UK counties in alphabetical order<br/>
AND<br/>
The one I select is stored in an audit log within the product</p>

        <strong class="d-block pb-2">AC12</strong>
        <p>Given I am on the Address Details page and I have filled in all of the mandatory fields<br/>
When I click on ‘Save address’<br/>
Then I am returned to the relevant page in the product’s journey</p>

        <strong class="d-block pb-2">AC13</strong>
        <p>Given I am on the Address Details page<br/>
When I click on ‘Use postcode lookup’<br/>
Then I am returned to the Address Lookup component with no search details in context<br/>
Overseas Address Functionality</p>



        <!-- #endregion -->
         
        <!-- #region Overseas address -->
        <strong class="lead d-block pb-2">Overseas Address Functionality:</strong>

        <strong class="d-block pb-2">AC1</strong>
        <p>Given I am using the Address Lookup component<br/>
        When I click on ‘Use overseas address’<br/>
        Then I am taken to the Address Details screen for overseas addresses</p>

        <strong class="d-block pb-2">AC2</strong>
        <p class="pb-1">Given I am on the Address Details screen for overseas addresses<br/>
        Then the following fields are visible and editable:</p>
        <ul class="pb-5">
          <li>Address Line 1</li>
          <li>Address Line 2</li>
          <li>Town/City</li>
          <li>State / Province / Region</li>
          <li>Post / Zip Code</li>
          <li>Country (this is a dropdown list)</li>
        </ul>

        <strong class="d-block pb-2">AC</strong>
        <p>Given I am on the Address Details screen for overseas addresses
When I click on the Country field
Then a list of all international countries is displayed in alphabetical order
AND
UK, England, Scotland, Northern Ireland, Wales, Britain, Great Britain, Channel Islands, Guernsey, Jersey are not available within this list</p>

        <strong class="d-block pb-2">AC</strong>
        <p>Given I am on the Address Details screen for overseas addresses and I have filled in all mandatory fields
When I click on ‘Save address’
The address is saved
AND
Then I am directed back to the relevant page in the journey I am on - note, this will be set by product</p>

        <strong class="d-block pb-2">AC</strong>
        <p>Given I am on the Address Details screen for overseas addresses and I have not filled in all mandatory fields
When I click on ‘Save address’
Then a warning message will be displayed informing me that I haven’t completed all mandatory fields</p>

        <strong class="d-block pb-2">AC</strong>
        <p>Given I am on the Address Details screen for overseas addresses
When I click on ‘Use postcode lookup’
Then I am returned to the Address Lookup component main page</p>

        <!-- #endregion -->


        <!-- #region Welsh address -->
        <strong class="lead d-block pb-2">Welsh Address Entry:</strong>
        <strong class="d-block pb-2">AC1</strong>
        <p>Given I am using the Address Lookup Component<br/>
        When I search for a postcode and at least 1 result is Welsh (within all results for that postcode, not just those displayed on the page)<br/>
        Then I can see a toggle which allows me to see any Welsh results in Welsh</p>

        <strong class="d-block pb-2">AC2</strong>
        <p>Given I am using the Address Lookup Component and I have toggled on the Welsh Address functionality<br/>
        When the results are displayed<br/>
        Then any address that is Welsh will display in Welsh rather than English<br/>
        AND<br/>
        Any address that isn’t Welsh will continue to display in English<br/>
        AND<br/>
        I can see a toggle which allows me to see any Welsh results in English</p>

        <strong class="d-block pb-2">AC3</strong>
        <p>Given I am using the Address Lookup Component and I have not toggled on the Welsh Address functionality or I have clicked on the show results in English toggle<br/>
        When the results are displayed<br/>
        Then all results will display in English</p>
<!-- #endregion -->
<!-- #region Manual Address Entry -->
        <strong class="lead d-block pb-2">Manual Address Entry:</strong>

        <strong class="d-block pb-2">AC1</strong>
        <p>Given I am using the Address Lookup component<br/>
When I have searched for a postcode using the search component and have either cancelled the search or clicked out of it after a valid postcode has been entered and searched for<br/>
Then I can see the button called ‘Enter address manually’</p>

        <strong class="d-block pb-2">AC2</strong>
        <p>Given I am using the Address Lookup component<br/>
When I have searched for an address using the search component and all results are displayed in the dropdown<br/>
Then I can see the button called ‘Enter address manually’</p>

        <strong class="d-block pb-2">AC3</strong>
        <p class="pb-1">Given I am using the Address Lookup component and have failed to find my address using the search function<br/>
When I click on the 'Enter address manually’ button<br/>
Then I am taken to the Address Details screen which is empty in all fields<br/>
AND<br/>
the following fields are marked as mandatory:</p>
<ul>
  <li>Postcode</li>
  <li>At least 1 of Sub Building Name, Building Name, Building Number</li>
  <li>At least 1 of Thoroughfare / Street Name, Dependant Thoroughfare</li>
  <li>Post Town</li>
</ul>
<p class="pb-1">AND<br/>
The following fields may be marked as mandatory depending on whether the product has set them to be mandatory:</p>
<ul class="pb-5">
  <li>Locality</li>
  <li>County</li>
  <li>Region</li>
</ul>

        <strong class="d-block pb-2">AC4</strong>
        <p>N/A</p>

        <strong class="d-block pb-2">AC5</strong>
        <p>Given I am on the Address Details screen after clicking on ‘Enter address manually’<br/>
When I click on the Country field<br/>
Options as per below:<br/>
GB-ENG (England)<br/>
GB-SCT (Scotland)<br/>
GB-WLS or GB-CYM (Wales)<br/>
GB-NIR (Northern Ireland)<br/>
GB-CI (Channel Islands)<br/>
GB-IM (Isle of Man)</p>

        <strong class="d-block pb-2">AC6</strong>
        <p>Given I am on the Address Details screen after clicking on ‘Enter address manually’ and I have filled in all mandatory fields<br/>
When I click on ‘Save address’<br/>
Then the address is saved<br/>
AND<br/>
I am directed back to the relevant page in the journey I am on - note, this will be set by product</p>

        <strong class="d-block pb-2">AC7</strong>
        <p>Given I am on the Address Details screen after clicking on ‘Enter address manually’ and I have not filled in all mandatory fields<br/>
When I click on ‘Save address’<br/>
Then a warning message will be displayed informing me that I haven’t completed all mandatory fields</p>

        <strong class="d-block pb-2">AC8</strong>
        <p>Given I am on the Address Details screen after clicking on ‘Enter address manually’<br/>
When I click on ‘Use postcode lookup’<br/>
Then I am returned to the Address Lookup component main page</p>


        <!-- #endregion -->



<!-- #region Manual Address Entry -->
        <strong class="lead d-block pb-2">Royal Mail Link:</strong>

        
        <strong class="d-block pb-2">AC1</strong>
        <p>Given I am using the Address Lookup Component<br/>
When I haven’t searched for a postcode<br/>
Then I can see a link to the Royal Mail Postcode Lookup page</p>

        <strong class="d-block pb-2">AC2</strong>
        <p>Given I am using the Address Lookup Component<br/>
When I have clicked on the Royal Mail Postcode Lookup page<br/>
Then the Royal Mail Postcode Lookup page is opened in a new tab</p>

        <strong class="d-block pb-2">AC3</strong>
        <p>Given I am using the Address Lookup Component and I haven’t selected a result yet<br/>
When I have searched for a postcode<br/>
Then I can see a link to the Royal Mail Postcode Lookup page at the bottom of the list of results from my search</p>


        <!-- #endregion -->
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
