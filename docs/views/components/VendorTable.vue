<template>
  <section class="mb5">
    <h3>Vendor Table</h3>
    <hr />
    <div class="paragraph-wrap">
      <p>
        Flexible table component for displaying vendor information.
      </p>
      <p>

      </p>
    </div>
    <h3>Vendor Profile Table</h3>
    <br>
      <vendor-table :small="small" :items="items" :fields="fields"></vendor-table>
    <br>
    <br>
    <h3>Vendor Appraisal Table</h3>
    <br>
    <vendor-table :items="appraisalItems" :fields="appraisalFields"></vendor-table>
    <br>
    <br>
    <h3>Vendor Compliance Table</h3>
    <br>
    <vendor-table :items="complianceItems" :fields="complianceFields"></vendor-table>
  </section>
</template>

<script>

import VendorTable from '@/components/VendorTable/VendorTable.vue'

export default {
  components: {
    VendorTable
  },
  data () {
    return {
      fields: [
        { key: 'basic_details' },
        { key: 'capacity' },
        { key: 'contact_details' },
        { key: 'address' },
        { key: 'point_of_contact' },
        { key: 'actions' }
      ],
      items: [
        {
          basic_details: 'mr Richard Branson<br> (Mr Richard Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07411882800">07411882800</a> (Mobile)<br> <a href="tel:07411882800">07411882800</a> (Main)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          basic_details: 'mrs Laura Branson<br> (Mrs Laura Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07729797870">07729797870</a> (Main)<br> <a href="tel:07729797870">07729797870</a> (Mobile)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        }
      ],
      appraisalFields: [
        { key: 'basic_details' },
        { key: 'capacity' },
        { key: 'contact_details' },
        { key: 'address' },
        { key: 'point_of_contact' },
        { key: 'compliance_details' },
        { key: 'actions' }
      ],
      appraisalItems: [
        {
          basic_details: 'mr Richard Branson<br> (Mr Richard Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07411882800">07411882800</a> (Mobile)<br> <a href="tel:07411882800">07411882800</a> (Main)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          verification_checklist: '',
          compliance_details: 'Risk level: medium<br>Last compliance note: ',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          basic_details: 'mrs Laura Branson<br> (Mrs Laura Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07729797870">07729797870</a> (Main)<br> <a href="tel:07729797870">07729797870</a> (Mobile)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          verification_checklist: '',
          compliance_details: 'Risk level: medium<br>Last compliance note: ',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        }
      ],
      complianceFields: [
        { key: 'basic_details' },
        { key: 'capacity' },
        { key: 'contact_details' },
        { key: 'address' },
        { key: 'verification_checklist' },
        { key: 'compliance_details' },
        { key: 'actions' }
      ],
      complianceItems: [
        {
          basic_details: 'mr Richard Branson<br> (Mr Richard Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07411882800">07411882800</a> (Mobile)<br> <a href="tel:07411882800">07411882800</a> (Main)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          verification_checklist: '',
          compliance_details: 'Risk level: medium<br>Last compliance note: ',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          basic_details: 'mrs Laura Branson<br> (Mrs Laura Branson)',
          capacity: 'Legal owner',
          contact_details: '<a href="tel:07729797870">07729797870</a> (Main)<br> <a href="tel:07729797870">07729797870</a> (Mobile)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          verification_checklist: '',
          compliance_details: 'Risk level: medium<br>Last compliance note: ',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        }
      ],
      small: true
    }
  }
}
</script>
