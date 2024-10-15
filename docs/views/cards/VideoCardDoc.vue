<script setup>
import VideoCard from '@/components/VideoCard/VideoCard.vue'

import Integration from '../Integration.vue'
import Versions from '../Versions.vue'
import TrackEvents from '../TrackEvents.vue'

import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import cardAnatomy from '../../img/video-card-anatomy.png'
import cardImg from '../../img/cardImg.png'
import cardModes from '../../img/cardModes.png'
import Table from '@/components/Table/Table.vue'




</script>
<template>
  
  <TrackEvents selector="iam-video-card" :events="['play-video','close-video']"></TrackEvents>

  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Video Cards</h1>
    </DSHeader>

    <p class="lead">Video cards can be used to house video thumbnails which when pressed expand out into a video modal.</p>
    
    <h2>Vertical video card</h2>
    
    <p>This card provides user with header text, optional body copy, optional small button as well as a hoverable thumbnail. Once the thumbnail block is clicked the video will open as a model.</p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 ">
        <div class="col video-col">
          
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <VideoCard :data-image="cardImg">Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span> <a href="/test" class="btn btn-primary" slot="footer">Find out more</a> <a href="https://www.youtube.com/watch?v=lROFZaJcVug" target="_blank" title="Play video" data-youtube="lROFZaJcVug" slot="head">Play Video</a></VideoCard>
        </div>


        <div class="col video-col">
          
          <span class="pb-3 d-block text-uppercase">Hover State</span>
          <VideoCard :data-image="cardImg" style="--video-btn-colour: var(--colour-canvas);">Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span> <a href="/test" class="btn btn-primary" slot="footer">Find out more</a> <a href="https://vimeo.com/946718698" target="_blank" title="Play video" data-vimeo="946718698" slot="head">Play Video</a></VideoCard>
        </div>

        <div class="col video-col">
          
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <VideoCard :data-image="cardImg" style="--video-btn-colour: #85ab79;">Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span> <a href="/test" class="btn btn-primary" slot="footer">Find out more</a> <a href="https://vimeo.com/946718698" target="_blank" title="Play video" data-vimeo="946718698" slot="head">Play Video</a></VideoCard>
        </div>

      </div>
    </div>


    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 ">
        <div class="col video-col">
          
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <VideoCard :data-image="cardImg">Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span> <a href="/test" class="btn btn-primary" slot="footer">Find out more</a> <a href="https://www.youtube.com/watch?v=lROFZaJcVug" target="_blank" title="Play video" data-youtube="lROFZaJcVug" slot="head">Play Video</a></VideoCard>
        </div>
        <div class="col video-col">
          
          <span class="pb-3 d-block text-uppercase">Video above (.video-card--top)</span>
          <VideoCard :data-image="cardImg" class="video-card--top">Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span> <a href="/test" class="btn btn-primary" slot="footer">Find out more</a> <a href="https://www.youtube.com/watch?v=lROFZaJcVug" target="_blank" title="Play video" data-youtube="lROFZaJcVug" slot="head">Play Video</a></VideoCard>
        </div>

      </div>
    </div>

    <h2>Anatomy</h2>

    <img :src="cardAnatomy" alt="" class="mb-4"/>
    <ol>
      <li>Title- h4</li>
      <li>Body copy</li>
      <li>Button (optional)</li>
      <li>Video thumbnail (this has a variant state- thumbnail can also be at the top of card but will be bottom as default)</li>
    </ol>

    <p>This card provides user with header text, optional body copy, optional small button as well as a hoverable thumbnail. Once the thumbnail block is clicked the video will open as a model.</p>


    <Integration component="video-card" componentName="iam-video-card" >
      <template #web-component>

        <pre><code>{{`<!-- Video Cards dont need a link or button wrapped around it like other card components -->
<iam-video-card :data-image="cardImg"> 
  Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span> 
  
  <a href="/test" class="btn btn-primary" slot="footer">Find out more</a> 
  
  <!-- This link is optional as the data-youtube attribute can be put directly onto the component. But this is prefered for non-JS fallback reasons. The data-youtube can also be changed to data-vimeo to open a vimeo video instead. -->
  <a href="https://www.youtube.com/watch?v=lROFZaJcVug" target="_blank" title="Play video" data-youtube="lROFZaJcVug" slot="head">Play Video</a>
</iam-video-card>`}}</code></pre>
      </template>
      <template #vue-component>

        <pre><code>{{`<script setup>import VideoCard from '@/components/VideoCard/VideoCard.vue</script>
        
<VideoCard :data-image="cardImg">
  ....
</VideoCard>
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
            <th>data-youtube</th>
            <td>-</td>
            <td>String (Video id)</td>
            <td>No</td>
            <td>The video id is used to generate the video embed within the dialog. This can be added via a link inside of the card head.</td>
          </tr>
          <tr>
            <th>data-vimeo</th>
            <td>-</td>
            <td>String (Video id)</td>
            <td>No</td>
            <td>The video id is used to generate the video embed within the dialog. This can be added via a link inside of the card head.</td>
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
            <th>footer</th>
            <td>The bottom of card.</td>
          </tr>
        </tbody>
      </table>

      </template>

      <template #classes>

      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>.video-card--top</th>
            <td>This makes the card head </td>
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


      <template #dispatched-events>

        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>play-video</th>
              <td>Card head is clicked</td>
              <td></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>close-video</th>
              <td>Dialog with video is closed via either pressing esc or clicking on the backdrop</td>
              <td></td>
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
        </tbody>
      </table>
      </template>


      <template #criteria>

      <ul>
        <li>When opening a video it should autoplay</li>
        <li>When a dialog/modal is closed the containing video should close</li>
        <li>The card component itself should not be clickable; only the card head and any containing links or buttons should be clickable.</li>
      </ul>

      </template>
      <template #data-layer>

        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>play-video</th>
              <td>When the card head is clicked</td>
              <td>{"event": "close-video", "element": "iam-video-card", "target": "iam-video-card", "Video Type":"YoutTube","ID":"lROFZaJcVug"}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>close-video</th>
              <td>Dialog with video is closed via either pressing esc or clicking on the backdrop</td>
              <td>{"event": "close-video", "element": "iam-video-card", "target": "iam-video-card", "Video Type":"YoutTube","ID":"lROFZaJcVug"}</td>
            </tr>
          </tbody>
        </table>

      </template>

    </Integration>
    <Versions pdf="/pdfs/video-card.pdf">
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
              <td>28.11.2023</td>
              <td>Inclusion of the video card</td>
            </tr>
          </tbody>
        </table>
    </Versions>
  </main>
  
</template>

<style>

.video-col {
  position: relative;
  margin-top: 3rem;
}
.video-col > span {

  position: absolute;
  bottom: 100%;
  left: 0.5rem;
}

</style>