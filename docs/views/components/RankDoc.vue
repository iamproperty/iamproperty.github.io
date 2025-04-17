<script setup>
  import TrackEvents from '../TrackEvents.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import Integration from '../Integration.vue';
   /* import Versions from '../Versions.vue';
  */
  import Rank from '@/components/Rank/Rank.vue';
  import Rankings from '@/components/Rankings/Rankings.vue';
</script>


<template>
  <TrackEvents
    selector="iam-rank"
    :events="[
      'update-show',
    ]"
  ></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Rank</h1>
    </DSHeader>

<!--
    <Rank>1st</Rank>

    <Rank>2nd</Rank>


    <Rank>3rd</Rank>

    <Rank>4th</Rank>

    <Rank>5th</Rank>

    <Rank>5th</Rank>
-->

<div class="admin-panel md-col-end-4">
      <h2 class="bg-light">Cancelled sales</h2>
      <Rankings>

          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Pinnacle Homes</th>
                <td>11</td>
              </tr>
              <tr>
                <th>Meadowbrook Estates</th>
                <td>9</td>
              </tr>
              <tr>
                <th>KeyHaven Residential</th>
                <td>8</td>
              </tr>
              <tr class="current">
                <th>Deacon & partners</th>
                <td>11</td>
              </tr>
              <tr>
                <th>Pinnacle Homes</th>
                <td>11</td>
              </tr>
              <tr>
                <th>Pinnacle Homes</th>
                <td>11</td>
              </tr>
              <tr>
                <th>Pinnacle Homes</th>
                <td>11</td>
              </tr>
              <tr>
                <th>Pinnacle Homes</th>
                <td>11</td>
              </tr>
              <tr>
                <th>Pinnacle Homes</th>
                <td>11</td>
              </tr>
              <tr>
                <th>Pinnacle Homes</th>
                <td>11</td>
              </tr>
            </tbody>
            
          </table>


      </Rankings>
    </div>
    <div class="admin-panel md-col-start-5 md-col-end-8">
      <h2 class="bg-light">Price reductions</h2>
      <rank>1st</rank>
    </div>
    <div class="admin-panel md-col-start-9 md-col-end-12">
      <h2 class="bg-light">Price reductions</h2>
      <rank>5th</rank>
    </div>


    <Integration component="rank" componentName="rank">
      <template #web-component>
        <pre><code>{{`<iam-rank>1st</iam-rank>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Rank from '@/components/Rank/Rank.vue</script>
        
<Rank>1st</Rank>

<script setup>import Rank from '@/components/Ranking/Ranking.vue</script>
        
<Rankings>

  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Sales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Meadowbrook Estates</th>
        <td>9</td>
      </tr>
      <tr>
        <th>KeyHaven Residential</th>
        <td>8</td>
      </tr>
      <tr class="current">
        <th>Deacon & partners</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
    </tbody>
    
  </table>

</Rankings>
`}}</code></pre>
      </template>

      

    </Integration>



  </main>

</template>
