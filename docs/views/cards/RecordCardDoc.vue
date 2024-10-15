
<script setup>
import RecordCard from '@/components/RecordCard/RecordCard.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
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
          <span class="pb-3 d-block text-uppercase">With large image</span>
          <a href="/">
            <RecordCard :data-image="cardImg">
              <span slot="badges" class="badge">Lettings</span>
              13 Oakdale Road, Madley Park, Newcastle upon Tyne
              <span>£503pcm</span>
              <span>4 beds 2 baths 1 reception room</span>
              <span>Updated by: John Smith<br/> Updated on: 03/01/2024</span>
            </RecordCard>
          </a>
        </div>
        
            
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Record type displayed</span>
          <a href="/">
            <RecordCard data-record="business">
              <span slot="badges" class="badge">Sales</span>
              <span slot="badges" class="badge">Under offer</span>
              13 Oakdale Road, Madley Park, Newcastle upon Tyne
              <span>£503 pcm</span>
              <span>4 <i class="fa-regular fa-bed-front me-1" title="bed"></i> 2 <i class="fa-regular fa-bath me-1" title="baths"></i> 1 <i class="fa-regular fa-couch me-1" title="sofa"></i></span>
              <span><strong>Updated by:</strong> John Smith<br/> <strong>Updated on:</strong> 03/01/2024</span>
            </RecordCard>
          </a>
        </div>
            
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Initials displayed</span>
          <a href="/">
            <RecordCard data-record="vendor" data-initials="SA">
              <span slot="badges" class="badge">Sales</span>
              <span slot="badges" class="badge">Under offer</span>
              13 Oakdale Road, Madley Park, Newcastle upon Tyne
              <span>£503 pcm</span>
              <span>4 <i class="fa-regular fa-bed-front me-1" title="bed"></i> 2 <i class="fa-regular fa-bath me-1" title="baths"></i> 1 <i class="fa-regular fa-couch me-1" title="sofa"></i></span>
              <span><strong>Updated by:</strong> John Smith<br/> <strong>Updated on:</strong> 03/01/2024</span>
            </RecordCard>
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Avatar photo displayed</span>
          <a href="/">
            <RecordCard :data-avatar="cardImg">
              <span slot="badges" class="badge">Sales</span>
              <span slot="badges" class="badge">Under offer</span>
              <span slot="badges" class="badge">Sales</span>
              <span slot="badges" class="badge">Under offer</span>
              13 Oakdale Road, Madley Park, Newcastle upon Tyne
              <span>£503 pcm</span>
              <span>4 <i class="fa-regular fa-bed-front me-1" title="bed"></i> 2 <i class="fa-regular fa-bath me-1" title="baths"></i> 1 <i class="fa-regular fa-couch me-1" title="sofa"></i></span>
              <span><strong>Updated by:</strong> John Smith<br/> <strong>Updated on:</strong> 03/01/2024</span>
            </RecordCard>
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


    <UserColours></UserColours>



    <h2>Behaviours</h2>

    <div class="row">
      <div class="col-sm-6">
        <img :src="recordCardDo" alt="" class="mb-2" />
        <span class="h4 text-complete pb-1">Do</span>
        <p>Labels should wrap to accommodate when the card compacts to a smaller width</p>
      </div>
      <div class="col-sm-6">
        <img :src="recordCardDo2" alt="" class="mb-2" />
        <span class="h4 text-complete pb-1">Do</span>
        <p>On bigger breakpoint breakpoints, the number of columns will increase</p>
      </div>
      <div class="col-sm-6">
        <img :src="recordCardDo3" alt="" class="mb-2" />
        
        <span class="h4 text-complete pb-1">Do</span>
        <p>Have cards sharing a row stretch to match the tallest card and align with each other</p>
      </div>
      <div class="col-sm-6">
        <img :src="recordCardDont" alt="" class="mb-2" />
        
        <span class="h4 text-danger pb-1">Don't</span>
        <p>Have cards hug content and cause misalignment in the row</p>
      </div>
    </div>


    <div class="container">
      
      <h2>Implementation</h2>

      
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

