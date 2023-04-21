<template>
  <div>


    <main>

      <div class="container pt-1">

        <div class="row">
          <div class="ms-auto col-4">
            <div class="text-end">
              <Logo id="movebutler" class="pe-0 pb-0"></Logo>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="ms-auto col-6">
            <address class="text-end text-primary mb-3 small">
              Floor6, Arden House,<br/>
              Regent Centre, Gosforth,<br/>
              Newcastle upon Tyne,<br/>
              NE3 3LU<br/>
              <strong>Call:</strong> 0345 646 0302<br/>
              <strong>Email:</strong> enquiries@iam-sold.co.uk<br/>
              <strong>www.iamproperty.com</strong>
            </address>
          </div>
        </div>


        <h1>Print example</h1>

        <h2>Transactions</h2>
        <Table
        :fields="[{key: 'Date added'},{key: 'Branch'}, {key: 'Type'}, {key: 'Transaction address'}]"
        :items="[
          {date_added: '24 Jan 2021', branch: 'Branch1', type: 'Vendor', transation_address: '2 Hepple Way, NE3 3HS'},
          {date_added: '24 Jan 2021', branch: '<span class=\'text-danger\'>Branch1</span>', type: 'Vendor', transation_address: '2 Hepple Way, NE3 3HS'},
          {date_added: '24 Jan 2021', branch: 'Branch1', type: 'Vendor', transation_address: '2 Hepple Way, NE3 3HS'}
        ]"
        class="table-striped border-0" headingclass="bg-secondary"></Table>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <p class="text-primary mb-1">Items identified from the title deeds of:</p>
        <p class="h2 text-secondary">APARTMENT 29, PALACE COURT, WARDLE STREET, STOKE-ON-TRENT, ST6 6AL</p>
        <p class="text-primary mb-1 mt-0">Vendor</p>
        <p class="h2 text-secondary">Joe Bloggs</p>
        <p class="small mt-0">Note: To comply with the Consumer Protection from Unfair Trading Regulations 2008, the information should be displayed by the person marketing the property for anyone to view, this might include your company website or via the property portals.</p>
      </div>
    </main>

    <footer class="bg-primary pt-4">
      <div class="container">
        <p>© Copyright iamsold 2022 - All rights reserved</p>
        <p>172.19.0.5</p>
      </div>
    </footer>


  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";


</style>

<script>
import PropertySearchbar from '@/components/PropertySearchbar/PropertySearchbar.vue'
import Nav from '@/components/Nav/Nav.vue'
import Input from '@/components/Input/Input.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Table from '@/components/Table/Table.vue'
import Logo from '@/foundations/Logo/Logo.vue'

export default {
  components: {
    Logo,
    PropertySearchbar,
    Nav,
    Input,
    Carousel,
    Table
  },
  props: {
    searchTerm: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      savedSearchTerm: '',
      searchTerms: [
        {
          'url': '/london',
          'value': 'London'
        }
      ],
      actions: [
        {
          title: "Add a valuation to the database",
          url: "http://www.iamsold.test/admin/properties/create.html",
          content: `<p>Create a new property record, assign it to an agent and an auction team co-ordinator.</p>`
        },
        {
          title: "Create a ValPal Referral",
          url: "http://www.iamsold.test/admin/properties/create/create-valpal-referral.html",
          content: `<p>Create a new ValPal referral.</p>`
        },
        {
          title: "Add a new admin record to the database",
          url: "http://www.iamsold.test/admin/auth/staff/create.html",
          content: `<p>Create a new admin record, assign it to an agent and an auction team co-ordinator.</p>`
        },
        {
          title: "Add a document to the database",
          url: "http://www.iamsold.test/admin/documents/create.html",
          content: `<p>It's easy to add a document to the system.</p>`
        },
        {
          title: "Delete incorrect Surveys",
          url: "http://www.iamsold.test/admin/surveys.html",
          content: `<p>Delete Surveys from the system that have been submitted incorrectly.</p>`
        },
        {
          title: "See Marketing Requests",
          url: "http://www.iamsold.test/admin/marketing-library.html",
          content: `<p>See a list of outstanding Marketing Requests and mark them as complete</p>`
        },
        {
          title: "Task Manager",
          url: "http://www.iamsold.test/admin/calendar/task-manager.html",
          content: `<p>Manage all system tasks by user.</p>`
        }
      ]

    }
  },
  computed: {
    searchTermGen: {
      get() {

        if(this.savedSearchTerm)
          return this.savedSearchTerm;

        return this.searchTerm;
      },
      set(val) {

        this.savedSearchTerm = val;
        this.$emit('input', val);
      }
    }
  },
  methods: {
    inputKeyup(event){
      this.searchTerms =  [
        {
          'url': '/london',
          'value': 'London'
        },
        {
          'url': '/leicester',
          'value': 'Leicester'
        }
      ];
    }
  }
}
</script>
