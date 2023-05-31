<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Pagination</h1>
    </DSHeader>


    <div class="container">
      <p class="lead">.....</p>
    </div>
    <div class="container visualtest pb-5">
      <Pagination data-total="127"></Pagination>
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
    <div class="bg-admin version-control">
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
              <td>V0.1</td>
              <td>30.05.2023</td>
              <td>No designs supplied yet</td>
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
import Readme from '@/components/Pagination/README.md'
import WebReadme from '~/ts/components/pagination/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Table from '@/components/Table/Table.vue'
import Pagination from '@/components/Pagination/Pagination.vue'

export default {
  components: {
    DSHeader,
    Table,
    Readme,
    WebReadme,
    Tabs,
    Tab,
    Pagination
  },
  mounted(){
    
  },
  data () {
    return {
      headerImg: headerImg,
      htmlUsage: `<div class="pagination__wrapper">
  <ul class="pagination mb-3 d-none d-sm-flex">
    <li class="page-item disabled"><span class="page-link">Previous</span></li>
    <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
    <li class="page-item"><a href="?page=2" class="page-link" data-page="2">2</a></li>
    <li class="page-item"><a href="?page=3" class="page-link" data-page="3">3</a></li>
    <li class="page-item"><a href="?page=4" class="page-link" data-page="4">4</a></li>
    <li class="page-item"><a href="?page=5" class="page-link" data-page="5">5</a></li>
    <li class="page-item"><a href="?page=6" class="page-link" data-page="6">6</a></li>
    <li class="page-item"><a href="?page=7" class="page-link" data-page="7">7</a></li>
    <li class="page-item"><a href="?page=8" class="page-link" data-page="8">8</a></li>
    <li class="page-item"><a href="?page=9" class="page-link" data-page="9">9</a></li>
    <li class="page-item"><a href="?page=2" class="page-link" data-page="2">Next</a></li>
  </ul>
  <div class="d-sm-none">
    <span>You've viewed 15 of 127 results</span>
    <button type="button" data-show="NaN">Load more results</button>
  </div>
</div>`
    }
  }
}
</script>