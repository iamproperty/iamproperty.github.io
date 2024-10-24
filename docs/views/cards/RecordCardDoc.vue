
<script setup>
import RecordCard from '@/components/RecordCard/RecordCard.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import anatomy from '../../img/record-card-anatomy.png'
import cardImg from '../../img/cardImg.png'
import UserColours from '../UserColours.vue'

import Integration from '../Integration.vue'
import Versions from '../Versions.vue'
import TrackEvents from '../TrackEvents.vue'

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


    

    <Integration component="FilterCard" componentName="iam-filter-card" >
      <template #web-component>

        <pre><code>{{`<a href="/"><iam-record-card data-avatar="cardImg.png">
              <span slot="badges" class="badge">Sales</span>
              <span slot="badges" class="badge">Under offer</span>
              <span slot="badges" class="badge">Sales</span>
              <span slot="badges" class="badge">Under offer</span>
              13 Oakdale Road, Madley Park, Newcastle upon Tyne
              <span>£503 pcm</span>
              <span>4 <i class="fa-regular fa-bed-front me-1" title="bed"></i> 2 <i class="fa-regular fa-bath me-1" title="baths"></i> 1 <i class="fa-regular fa-couch me-1" title="sofa"></i></span>
              <span><strong>Updated by:</strong> John Smith<br/> <strong>Updated on:</strong> 03/01/2024</span>
            </iam-record-card></a>`}}</code></pre>
      </template>
      <template #vue-component>

        <pre><code>{{`<script setup>import RecordCard from '@/components/RecordCard/RecordCard.vue</script>
        
<a href="/"><RecordCard :data-avatar="cardImg">
  <span slot="badges" class="badge">Sales</span>
  <span slot="badges" class="badge">Under offer</span>
  <span slot="badges" class="badge">Sales</span>
  <span slot="badges" class="badge">Under offer</span>
  13 Oakdale Road, Madley Park, Newcastle upon Tyne
  <span>£503 pcm</span>
  <span>4 <i class="fa-regular fa-bed-front me-1" title="bed"></i> 2 <i class="fa-regular fa-bath me-1" title="baths"></i> 1 <i class="fa-regular fa-couch me-1" title="sofa"></i></span>
  <span><strong>Updated by:</strong> John Smith<br/> <strong>Updated on:</strong> 03/01/2024</span>
</RecordCard></a>
`}}</code></pre>
      </template>

      <template #attr>

      <table>
        <thead>
          <tr>
            <th>Attributes</th>
            <th>Default</th>
            <th>Options/Type</th>
            <th>Required</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>data-img</th>
            <td>-</td>
            <td>String (file location)</td>
            <td>No</td>
            <td></td>
          </tr>
          <tr>
            <th>data-avatar</th>
            <td>-</td>
            <td>String (file location)</td>
            <td>No</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      </template>
      
      <template #slots>
      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Default (body)</th>
            <td>The default slot adds content to the body of the card.</td>
          </tr>
          <tr>
            <th>head</th>
            <td>Usually the top of the card but in the instance of the video card its located at the bottom.</td>
          </tr>
          <tr>
            <th>badges</th>
            <td>Usually the top of the card but in the instance of the video card its located at the bottom.</td>
          </tr>
          <tr>
            <th>footer</th>
            <td>The bottom of card.</td>
          </tr>
        </tbody>
      </table>

      </template>


      
      <template #parts>

      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>head</th>
            <td>Usually the top of the card but in the instance of the video card its located at the bottom.</td>
          </tr>
          <tr>
            <th>image</th>
            <td>The image located in the card head</td>
          </tr>
          <tr>
            <th>body</th>
            <td>The main content of the card</td>
          </tr>
          <tr>
            <th>footer</th>
            <td>The bottom of card.</td>
          </tr>
        </tbody>
      </table>

      </template>


      <template #vars>

      <table>
        <thead>
          <tr>
            <th>Var</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>--card-left-padding</th>
            <td>Controls the padding of all the parts, the card head image ignores this.</td>
          </tr>
          <tr>
            <th>--card-right-padding</th>
            <td>Controls the padding of all the parts, the card head image ignores this.</td>
          </tr>
          <tr>
            <th>--card-head-height</th>
            <td>Controls the height of the head.</td>
          </tr>
        </tbody>
      </table>

      </template>


      <template #watched-attrs>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Options/Type</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>data-img</th>
      <td>String (file location)</td>
      <td>The head image can be updated by adding a valid file location to this attribute.</td>
    </tr>
    <tr>
      <th>data-avatar</th>
      <td>String (file location)</td>
      <td>The head image can be updated by adding a valid file location to this attribute.</td>
    </tr>
  </tbody>
</table>
</template>

      <template #criteria>

      <ul>
        <li>The title of the card should only be on two lines</li>
      </ul>

      </template>
      
    </Integration>
    <Versions pdf="/pdfs/record-cards.pdf">
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
    </Versions>

  </main>
</template>

