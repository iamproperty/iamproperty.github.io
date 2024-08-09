<script setup>

function eventHandler(event){
  alert('clicked');
}

</script>
<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Record card</h1>
    </DSHeader>


    <p class="lead">Record cards can be used to display key information in compact and scannable lists of cards that users can preview quickly. When clicked, they direct users to another page with the full extent of information on that list item.</p>


    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-4">
          
            
        <div class="col">
          <a href="/">
            <Card class="card--record" :data-image="cardImg">
              13 Oakdale Road, Madley Park, Newcastle upon Tyne
              <small>£503pcm</small>
              <small>4 beds 2 baths 1 reception room</small>
              <small>Updated by: John Smith<br/> Updated on: 03/01/2024</small>
            </Card>
          </a>
        </div>
        
            
        <div class="col">
          <a href="/">
            <Card class="card--record" data-record="business">
              13 Oakdale Road, Madley Park, Newcastle upon Tyne
              <small>£503pcm</small>
              <small>4 beds 2 baths 1 reception room</small>
              <small>Updated by: John Smith<br/> Updated on: 03/01/2024</small>
            </Card>
          </a>
        </div>
        
      </div>
    </div>
    



    <h2>Anatomy</h2>

    <img :src="anatomy" class="mb-2"/>
    <ol class="mb-5">
      <li>Card image</li>
      <li>Title</li>
      <li>Details</li>
      <li>Dates</li>
      <li>Labels</li>
    </ol>


    <h2>Empty image state icon options</h2>

    <p>Property cards can display a range of card types - from vendor profiles to business details - and to distinguish them, we can use an icon and a colour in the empty image state.</p>



    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-4">

      </div>
    </div>



    <UserColours></UserColours>



    <h2>Behaviours</h2>

    <div class="row">
      <div class="col-sm-6">
        <img :src="recordCardDo" alt="" />
        
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
              <td>V1 added</td>
              <td>22.02.2024</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/record-cards.pdf" download>Download latest designs</a>
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
import anatomy from '../../img/record-card-anatomy.png'
import cardImg from '../../img/cardImg.png'
import cardModes from '../../img/cardModes.png'
import Table from '@/components/Table/Table.vue'
import UserColours from '../UserColours.vue'


import recordCardDo from '../../img/record-card-do.png'
import recordCardDo2 from '../../img/record-card-do-2.png'
import recordCardDo3 from '../../img/record-card-do-3.png'
import recordCardDont from '../../img/record-card-dont.png'

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
    cardModes,
    anatomy,
    UserColours,
    recordCardDo,
    recordCardDo2,
    recordCardDo3,
    recordCardDont
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
