<template>
  <div>
    <Nav logo="sold"  btnLink="/admin/logout" btnText="Logout" class="bg-primary nav--admin nav--inline-search">
      <ul class="list-unstyled">
        <li class=""><a href="/props" title="View your profile details">Hello <strong>Michelle Main</strong> (Level 1)</a></li>
        <li class=""><a href="/props">Dashboard</a></li>
        <li class=""><a href="https://iamproperty.atlassian.net/servicedesk/customer/portal/11" target="_blank">Support Ticket</a></li>
      </ul>
      <form>
        <Input id="search" type="search" v-model="searchTermGen" placeholder="Keyword, property pr ap ref" label="Search" class="form-control-sm" list="search-terms" @keyupEvent="inputKeyup(...arguments)"></Input>
        <button class="btn btn-search">
          <svg class="icon" viewBox="0 0 32 32">
            <title>Search</title>
            <ellipse cx="14.92" cy="13.81" rx="11.92" ry="11.81" class="icon__outline" />
            <line x1="22.68" y1="22.75" x2="30" y2="30" class="icon__outline" />
          </svg>
        </button>
      </form>

      <template v-slot:secondary>
        <ul class="list-unstyled">
          <li class=""><a href="/props">Properties</a></li>
          <li class=""><a href="/props">Agents</a></li>
          <li class=""><a href="/props">Customer Profiles</a></li>
          <li class=""><a href="/props">Agents League</a></li>
          <li class=""><a href="/props">Staff</a></li>
          <li class=""><a href="/props">Reports</a></li>
          <li class=""><a href="/props">Documents</a></li>
          <li class=""><a href="/props">Archive</a></li>
          <li class=""><a href="/props">Regions</a></li>
          <li class=""><a href="/props">Investigation</a></li>
          <li class=""><a href="/props">Websites</a></li>
          <li class=""><a href="/props">Marketing Library</a></li>
          <li class=""><a href="/props">API</a></li>
          <li class=""><a href="/props">Emails</a></li>
          <li class=""><a href="/props">iamvalued Awards</a></li>
        </ul>
      </template>
    </Nav>
    <datalist id="search-terms">
      <option v-for="(value,index) in searchTerms" :key="index" :data-link="value.url">{{value.display ? value.display : value.value}}</option>
    </datalist>


    <main>
      
      
      <div class="container pt-4">
        <h1>Welcome to your dashboard <span class="text-secondary">Michelle Main</span></h1>

        <h2>Your snapshot</h2>
        <Table :fields="[{key: 'Property valuations'},{key: 'Pre-approval valuations'}, {key: 'PAM properties'}]" :items="[]"></Table>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <input type="checkbox" name="showDrawer" id="showDrawer" class="d-none">
      <div class="drawer__btn pb-0">
        <div class="container text-end pb-0">
          <label for="showDrawer" class="btn btn-secondary me-0">Actions</label>
        </div>
      </div>
      <div class="drawer" id="actions">
        <div class="container text-end pb-0">
          <label for="showDrawer" class="btn btn-close me-0">Close</label>
        </div>
        <Carousel :items="actions" type="card" btnType="link" :hideCtaText="true">
          <template v:slot="before">
            <h2 class="mb-0 mx-auto text-center">Actions</h2>
          </template>
        </Carousel>
        
      </div>

    </main>
    <footer class="bg-primary pt-4">
      <div class="container">
        <p>© Copyright iamsold 2021 - All rights reserved</p>
        <p>172.19.0.5</p>
      </div>
    </footer>
  </div>
</template>

<script>
import PropertySearchbar from '@/components/PropertySearchbar/PropertySearchbar.vue'
import Nav from '@/components/Nav/Nav.vue'
import Input from '@/elements/Input/Input.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Table from '@/elements/Table/Table.vue'

export default {
  components: {
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