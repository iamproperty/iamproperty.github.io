<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Note feed</h1>
      <p>A collection of text notes that can be added to. The component is made up of an optional title, a table element and a small form with a textarea input.</p>
    </div>

    <div class="container visualtest">
      <div class="row">
        <div class="col-md-12">
          <div class="admin-pa/nel">
            <span class="h3">Note feed title</span>
            <NoteFeed user="User name" :items="items" :show="3" @formSubmitted="submitForm(...arguments)"></NoteFeed>
          </div>
        </div>
      </div>

      <h2>Within an admin panel</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="admin-panel">
            <span class="h3">Note feed title</span>
            <NoteFeed user="User name" :items="items" :show="3" @formSubmitted="submitForm(...arguments)"></NoteFeed>
          </div>
        </div>
      </div>
    </div>
    
    
    <div class="container">
      <h2>Vue Note Feed component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import NoteFeed from '@/components/NoteFeed/NoteFeed.vue'
import Readme from '@/components/NoteFeed/README.md'

export default {
  components: {
    NoteFeed,
    Readme
  },
  methods: {
    submitForm: function (event) {

      console.log('Save to json?')
      
    }
  },
  data () {
    return {
      items: [
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
      ]
    }
  }
}
</script>