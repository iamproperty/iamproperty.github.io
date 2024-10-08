<script setup>
import VideoCard from '@/components/VideoCard/VideoCard.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import cardImg from '../../img/cardImg.png'
import cardModes from '../../img/cardModes.png'
import Table from '@/components/Table/Table.vue'

</script>
<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Video Cards</h1>
    </DSHeader>

    <p class="lead">Video cards can be used to house video thumbnails which when pressed expand out into a video modal.</p>
    
    <h2>Vertical video card</h2>
    
    <p>This card provides user with header text, optional body copy, optional small button as well as a hoverable thumbnail. Once the thumbnail block is clicked the video will open as a model.</p>



    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 ">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>

          <VideoCard :data-image="cardImg">Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span> <a href="/test" class="btn btn-primary">Find out more</a></VideoCard>
           
        </div>


      
      </div>
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
              <td>28.03.2024</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/navigational-cards.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>
