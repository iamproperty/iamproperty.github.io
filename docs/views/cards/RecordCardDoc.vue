<script setup>

function eventHandler(event){
  alert('clicked');
}

</script>
<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Record cards (Beta)</h1>
    </DSHeader>


    <p class="lead">Record cards can be used to display key information in compact and scannable lists of cards that users can preview quickly. When clicked, they direct users to another page with the full extent of information on that list item.</p>



    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-4">
          
            
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <button>
            <Card class="card--record" :data-image="cardImg">
              Sofa.jpg
              <small>11.91KB<br/><i class="fa-regular fa-calendar"></i> 01/01/2023</small>
              <button class="btn btn-compact btn-secondary btn-sm fa-edit" slot="btns" @click="(event) => {eventHandler()}">Edit</button>
              <button class="btn btn-compact btn-secondary btn-sm fa-trash colour-danger" slot="btns">Delete</button>
            </Card>
          </button>
        </div>
        
      </div>
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
              <td>V2 added</td>
              <td>14.06.2023</td>
              <td>Inclusion of a Features card<br/>
Inclusion of Status navigation card<br/>
Inclusion of card ‘modes’ - light mode, dark mode and high contrast</td>
            </tr>
            <tr>
              <td>V1 added</td>
              <td>19.05.2023</td>
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
import Card from '@/components/Card/Card.vue'
import Readme from '@/components/Card/README.md'
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import WebReadme from '~/ts/components/card/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import cardImg from '../../img/cardImg.png'
import cardModes from '../../img/cardModes.png'
import Table from '@/components/Table/Table.vue'

export default {
  components: {
    DSHeader,
    Table,
    Readme,
    WebReadme,
    Tabs,
    Tab,
    Card,
    headerImg,
    cardImg,
    cardModes
  },
  data () {
    return {
      headerImg: headerImg,
      cardImg: cardImg,
      cardModes:cardModes,
      htmlUsage: `<a href="/link-url" class="card">
  <div class="card-body">
    Link text
    <span>Link description text..</span>
  </div>
</a>`
    }
  }
}
</script>
