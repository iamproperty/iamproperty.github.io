<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Menu (Beta)</h1>
    </DSHeader>

    

    <div class="container visualtest">

      <button class="btn btn-secondary" popovertarget="my-menu">Menu</button>


      <Menu id="my-menu" popover>

        <button><i class="fa-regular fa-eye"></i> Action 1</button>
        <button>Action 1</button>
        <button>Action 1</button>
        <button>Action 1</button>
        <a href="/components/menu">Link 1</a>
        <hr/>
        <details>
          <summary class="fa-regular fa-arrow-down">Menu</summary>
          <button>Action 1</button>
          <button>Action 1</button>
          <button>Action 1</button>
        </details>
        <a href="/components/menu">Link 2</a>

        <button popovertarget="sub-menu" class="fa-regular fa-arrow-right">Menu</button>
        <Menu id="sub-menu" popover>
          <button>Action 1</button>
          <button>Action 1</button>
          <button>Action 1</button>
        </Menu>
      </Menu>


    </div>



    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h3>Web component</h3></summary>
          
          
        </details>
        <details>
          <summary><h3>Vue component</h3></summary>
          
          
        </details>
        <!--
        <details>
          <summary><h3>HTML</h3></summary>
          <pre><code class="javascript">{{`<div class="container"></div>`}}</code></pre>
        </details>
      -->
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

<style lang="scss" scoped>
@use "../../../assets/sass/func" as *;

</style>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import Tabs from '@/components/Tabs/Tabs.vue'
import Menu from '@/components/Menu/Menu.vue'


export default {
  components: {
    DSHeader,
    Menu,
    Tabs
  },
  data () {
    return {
      headerImg: headerImg,
    }
  },
  mounted() {
    
  }
}
</script>