<template>
  <main>

    <DSHeader :image="headerImg" section="elements">
      <h1>Badges (Beta)</h1>
    </DSHeader>


    <p class="lead">The badge element indicates a status or count. Badges are read-only status indicators or labels and are not interactive.</p>


    
    <TagUsage></TagUsage>




    <h2>Anatomy</h2>

    <span class="badge wider-colour-3">CRM service</span>
    <hr class="mt-5"/>
    
<!--
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
              <td>V1 added</td>
              <td>08.03.2024</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/badges-tags.pdf" download>Download latest designs</a>
      </div>
    </div>
-->    
  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Table from '@/components/Table/Table.vue'
import TagUsage from '../TagUsage.vue'

export default {
  components: {
    DSHeader,
    Table,
    Tabs,
    Tab,
    TagUsage
  },
  data () {
    return {
      headerImg: headerImg
    }
  }
}
</script>