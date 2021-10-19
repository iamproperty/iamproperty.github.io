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
      
      
    </main>
      <Drawer label="Actions">
        <Carousel :items="actions" type="card" btnType="link" :hideCtaText="true">
          <template v:slot="before">
            <h2 class="mb-0 mx-auto text-center">Actions</h2>
          </template>
        </Carousel>
      </Drawer>
    <footer class="bg-primary pt-4">
      <div class="container">
        <p>© Copyright iamsold 2021 - All rights reserved</p>
        <p>172.19.0.5</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";

html {

  @include media-breakpoint-up(md) {
    font-size: 1vw;
  }
  @media (min-width: #{em(1440)}) {
      font-size: 1vw;
  }
  @media (min-width: #{em(1600)}) {
      font-size: 100%;
  }
}

body {

  background-image: repeating-linear-gradient(-45deg,#d3e2c2, #d3e2c2 25px, #eef7e6 25px, #eef7e6 50px);
}
main {
  background: white;
  @include media-breakpoint-up(sm) {

    margin-top: 1rem;
    width: calc(100% - 2rem);
    max-width: 96rem;
    margin: 1rem auto;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-radius: 0.5rem;
  }
  @include media-breakpoint-up(md) {
    .container {
      padding: 0 rem(28) rem(16) rem(28);
    }
  }
}
@include media-breakpoint-up(sm) {
  .drawer {

    width: calc(100% - 2rem);
    max-width: 86rem;
    margin: -2rem auto 2rem auto;
    border-radius: 0.5rem;
  }
  #showDrawer:checked ~ .drawer {
    max-width: none;
  }
  .container {
    padding: 0 rem(28) rem(16) rem(28);
    max-width: rem(1600 - 28 - 28);
  }
}
</style>

<script>
import PropertySearchbar from '@/components/PropertySearchbar/PropertySearchbar.vue'
import Nav from '@/components/Nav/Nav.vue'
import Input from '@/elements/Input/Input.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Table from '@/elements/Table/Table.vue'
import Drawer from '@/components/Drawer/Drawer.vue'

export default {
  components: {
    PropertySearchbar,
    Nav,
    Input,
    Carousel,
    Table,
    Drawer
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