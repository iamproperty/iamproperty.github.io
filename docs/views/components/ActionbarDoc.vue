<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Action bar</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">Action bars serve as a central hub for users to access and perform actions within an interface.</p>
      <h2>Introduction</h2>
      <p>Action bars are a useful component that can be integrated with other existing components, allowing users to eciently perform actions on one or multiple items simultaneously. Action bars emphasise clarity by presenting a concise set of actions, ensuring that the most important and frequently used actions are prominently displayed.</p>
      <p>Defined by it’s compact design and responsive overflow options, the micro-component rich action bar is viable in already busy interfaces and on smaller screens.</p>
    </div>


    <div class="container">
      <Actionbar data-selectall data-selected="2">


        <button class="btn btn-action fa-cog">Settings</button>
        
        <button class="btn btn-action fa-cog">Settings 2</button>
        
        <button class="btn btn-action fa-cog">Settings 3</button>
        
        <button class="btn btn-action fa-cog">Settings 4</button>
        
        <button class="btn btn-action fa-cog">Settings 5</button>
        
        <button class="btn btn-action fa-cog">Settings 6</button>
        
        <div class="dialog__wrapper">
          <button class="btn btn-action mb-0 me-0" slot="selected">Quick filter</button>
          <dialog><h3>Dialog Content (Popover)</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p></dialog>

        </div>
        
        <div class="dialog__wrapper">
          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical m-0">More actions</button>
          <dialog>
          </dialog>
        </div>

        <button class="btn btn-secondary btn-compact fa-search" data-search >Search</button>

        <button class="btn btn-primary fa-plus">Upload document</button>

        <button class="btn btn-action fa-cog" slot="selected">Settings</button>
      </Actionbar>
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
              <td>23.08.2023</td>
              <td>v3.7.10</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/actionbar.pdf" download>Download latest designs</a>
      </div>
    </div>

  </main>
</template>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import Tabs from '@/components/Tabs/Tabs.vue'

// Component - Replace the card references to new component
import Actionbar from '@/components/Actionbar/Actionbar.vue'
import Readme from '@/components/Card/README.md'
import WebReadme from '~/ts/components/card/README.md'

export default {
  components: {
    DSHeader,
    headerImg,
    Tabs,
    Actionbar,
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