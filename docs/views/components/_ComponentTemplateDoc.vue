<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Component Template</h1>
    </DSHeader>

    <div class="container">
      Content
    </div>






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
          <summary><h3>HTML</h3></summary>
          <pre><code class="javascript">{{`<div class="container"></div>`}}</code></pre>
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
              <td>V1 added</td>
              <td>19.05.2023</td>
              <td>v3.7.10</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/cards.pdf" download>Download latest designs</a>
      </div>
    </div>

  </main>
</template>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import Tabs from '@/components/Tabs/Tabs.vue'

// Component - Replace the card references to new component
import Card from '@/components/Card/Card.vue'
import Readme from '@/components/Card/README.md'
import WebReadme from '~/ts/components/card/README.md'

export default {
  components: {
    DSHeader,
    headerImg,
    Tabs,
    Card,
    Readme,
    WebReadme
  },
  data () {
    return {
      headerImg: headerImg
    }
  }
}
</script>