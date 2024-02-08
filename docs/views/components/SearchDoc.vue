<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Search (Beta)</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">...</p>

    </div>

    <div class="container pb-0">
      <h2>Default view</h2>
    </div>

    <div class="container visualtest">

      <form novalidate method="GET" id="search-property">
        <Search data-url="/existing.json?search=" data-prevent-submit>
        
          <label>Search existing transactions
            <span>
            <input type="text" name="client" autocomplete="off" aria-autocomplete="none" required data-change-events='[
                {"in-list":"#properties", "target":"#search-property", "if": "submitForm"}
                ]' list="properties"/>
            <span class="suffix fa-regular fa-search"></span>
            </span>
          </label>
          <datalist id="properties"></datalist>
        </Search>
        <button class="js-hide btn btn-primary">Submit</button>
      </form>

    </div>


    <div class="container pb-5">
      <ul>
        <li>[data-url] is used for the endpoint address</li>
        <li>A datalist can be added to provide search values before calling the endpoint</li>
        <li>Dynamic events can be added to enhance functionalitity i.e. triggering the parent form to submit when a datalist value is selected</li>
        <li>[data-schema] & [data-value-schema] & [data-display-schema] can be used to change the values used from the endpoint</li>
        <li>Typing in 3 characters will trigger an ajax call, the same call can't be made twice</li>
        <li>The ajax call will populate the datalist with new items and will not remove existing items</li>
        <li>A second hidden input field is created to hide values like ID's</li>
        <li>We should be allowed to submit the form unless data-prevent-submit is set.</li>
      </ul>
    </div>


    <div class="container pb-0">
      <h2>Grouped results</h2>
    </div>
    
    <div class="container visualtest">

      <form novalidate method="GET" id="search-iamsold">
        <Search data-url="/iamsold.json?search=" data-value-schema="url" data-display-schema="title" data-schema="data.results">
        
          <label>Search existing transactions
            <span>
            <input type="text" name="url" id="search-url" autocomplete="off" aria-autocomplete="none" required data-change-events='[
                  {"in-list":"#iamsold-pages", "target": "#search-url", "if": "openLink"}
                  ]' list="iamsold-pages"/>
              <button class="suffix me-0 mb-0"><i class="fa-regular fa-search"></i></button>
            </span>
          </label>
          
          <datalist id="iamsold-pages"></datalist>
        </Search>
        
      </form>

    </div>

    

    <div class="container pb-5">
      <ul>
        <li>Designed to replace iamsold search functionalitity</li>
        <li>If the results schema is an object rather than array the results will be grouped with each result prepended by the key.</li>
      </ul>
    </div>


<!--
    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h3>Web component</h3></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h3>Vue component</h3></summary>
          <Readme></Readme>
        </details>
        <details>
          <summary><h3>Acceptance criteria</h3></summary>
          
        </details>
      </Tabs>

    </div>
    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Design System Version</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>0.1</td>
              <td></td>
              <td>v4.1.0</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/actionbar.pdf" download>Download latest designs</a>
      </div>
    </div>
-->
  </main>
</template>

<style lang="scss" scoped>
@use "../../../assets/sass/func" as *;

</style>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import Tabs from '@/components/Tabs/Tabs.vue'
import Table from '@/components/Table/Table.vue'
import Search from '@/components/Search/Search.vue'


export default {
  components: {
    DSHeader,
    headerImg,
    Tabs,
    Table,
    Search
  },
  data () {
    return {
      headerImg: headerImg
    }
  },
  mounted() {
    this.$nextTick(function () {


    })
  }
}
</script>