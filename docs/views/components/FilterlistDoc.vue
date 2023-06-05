<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Filter list</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">The filter list wraps around a normal list element and gives it the functionality to reduce the list by adding a search term to the created input field. The search works on the text content of the list items and not the inner html. This allows for any element you want to be added to the list item from labels to buttons.</p>
      
      <div class="row">
        <div class="col-sm-8 col-md-4">
          <Filterlist data-max-height="small">

            <ul class="list-unstyled">
              <li class="lead text-primary pb-1">Olivia Anderson</li>
              <li class="lead text-primary pb-1">Ethan Ramirez</li>
              <li class="lead text-primary pb-1">Sophia Patel</li>
              <li class="lead text-primary pb-1">Noah Jenkins</li>
              <li class="lead text-primary pb-1">Ava Thompson</li>
              <li class="lead text-primary pb-1">Lucas Myers</li>
              <li class="lead text-primary pb-1">Mia Carter</li>
              <li class="lead text-primary pb-1">Benjamin Lee</li>
              <li class="lead text-primary pb-1">Isabella Rodriguez</li>
              <li class="lead text-primary pb-1">Samuel Wright</li>
              <li class="lead text-primary pb-1">Lily Collins</li>
              <li class="lead text-primary pb-1">Jacob Harris</li>
              <li class="lead text-primary pb-1">Emma Turner</li>
              <li class="lead text-primary pb-1">Matthew Brooks</li>
              <li class="lead text-primary pb-1">Grace Walker</li>
              <li class="lead text-primary pb-1">Logan Peterson</li>
              <li class="lead text-primary pb-1">Sophie Mitchell</li>
              <li class="lead text-primary pb-1">William Baker</li>
              <li class="lead text-primary pb-1">Aria Foster</li>
              <li class="lead text-primary pb-1">Daniel Morgan</li>
            </ul>

          </Filterlist>
        </div>
      </div>
    </div>

    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs >
        <details>
          <summary><h2>Web component</h2></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
        </details>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="javascript">{{htmlUsage}}</code></pre>
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
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>0.1</td>
              <td>28.05.2023</td>
              <td>No designs supplied</td>
            </tr>
          </tbody>
        </table>
        <!--<a href="/pdfs/tables.pdf" download>Download latest designs</a>-->
      </div>
    </div>
  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import Readme from '@/components/Filterlist/README.md'
import WebReadme from '~/ts/components/filterlist/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Table from '@/components/Table/Table.vue'
import Filterlist from '@/components/Filterlist/Filterlist.vue'

export default {
  components: {
    DSHeader,
    Table,
    Readme,
    WebReadme,
    Tabs,
    Tab,
    Filterlist
  },
  mounted(){
    
  },
  data () {
    return {
      headerImg: headerImg,
      htmlUsage: `<div class="iam-filter-list">
  <div class="form-control__wrapper">
    <label for="search" class="visually-hidden">Search</label>
    <span class="suffix" role="presentation"><slot name="icon"></slot></span>
    <input name="search" id="search" type="text" class="form-control" autocomplete="off">
  </div>
  <div class="list__wrapper">
    <ul>
      <li>Olivia Anderson</li>
      <li>Ethan Ramirez</li>
      <li>Sophia Patel</li>
      <li>Noah Jenkins</li>
      <li>Ava Thompson</li>
    </ul>
  </div>
</div>`
    }
  }
}
</script>