<script setup>

import Carousel from '@/components/Carousel/Carousel.vue'
import Card from '@/components/Card/Card.vue'

import cardImg from '../../img/cardImg.png'

import Integration from '../Integration.vue'
import Versions from '../Versions.vue'
import TrackEvents from '../TrackEvents.vue'

import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'

</script>

<template>

  <TrackEvents selector="iam-carousel" :events="['pip-clicked','next-clicked','prev-clicked','slider-changed']"></TrackEvents>
  
  <main>
    
    
    <DSHeader :image="headerImg" section="components">
      <h1>Carousel</h1>
    </DSHeader>


    <h2>Usage</h2>
    <p>Use to display related content within the same space on a page. Typical content use cases include showcases, image galleries, content or article previews and feature highlights. </p>

    <h2>Carousel anatomy</h2>
    <Carousel class="visualtest" data-smcols="2" data-mdcols="3">
    
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
      <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
    </Carousel>
    
    <ul class="pb-5">
      <li>Carousel content. This can contain cards, text, image and call to actions.</li>
      <li>Navigation arrow. (Optional) Using secondary compact buttons that progress the carousel forward or backward. If carousel is at the beginning then the left arrow won’t display, if the carousel is at the end then the right arrow won’t display.</li>
      <li>Pagination slider indicator. (Optional) This shows only if content goes beyond 5 pips of content and gives the user context to how far along in the carousel they are and allows user to user slider behaviour to navigate the content.</li>
    </ul>
    
    <div class="admin-panel visualtest mb-5">
      <h2>Carousel in an admin panel</h2>
      <Carousel data-smcols="2" data-mdcols="3">
      
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        <div><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></div>
        
      </Carousel>
    </div>

    <h2>Carousel with Image Thumbnails</h2>

    <div class="container pb-5 mb-5">
      <button data-modal="modal-carousel" class="btn btn-secondary">Open Carousel inside of dialog</button>
    </div>
    <dialog id="modal-carousel">
      <span class="h3">Carousel with Image Thumbnails</span>
      
      <Carousel class="visualtest">

        <div data-thumbnail="https://placehold.co/111x74"><img src="https://placehold.co/500x300"/></div>
        <div data-thumbnail="https://placehold.co/111x74"><img src="https://placehold.co/400x200"/></div>
        <div data-thumbnail="https://placehold.co/111x74"><img src="https://placehold.co/500x300"/></div>
        <div data-thu-mbnail="https://placehold.co//111x74"><img src="https://placehold.co/400x200"/></div>
        <div data-thumbnail="https://placehold.co/111x74"><img src="https://placehold.co/500x300"/></div>
        <div data-thumbnail="https://placehold.co/111x74"><img src="https://placehold.co/400x200"/></div>
      </Carousel>

    </dialog>


    
    <Integration component="carousel" componentName="iam-carousel" >
      <template #web-component>

        <pre><code>{{`<iam-carousel>
  <div>Slide one content</div>
  <div>Slide two content</div>
  <div>Slide three content</div>
</iam-carousel>`}}</code></pre>
      </template>
      <template #vue-component>

        <pre><code>{{`<script setup>import Carousel from '@/components/Carousel/Carousel.vue</script>
        
<Carousel>
  <div>Slide one content</div>
  <div>Slide two content</div>
  <div>Slide three content</div>
</Carousel>
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
      <th>data-thumbnail</th>
      <td></td>
      <td>String (file location)</td>
      <td>No</td>
      <td>This attribute is added to the carousel item and not the component itself.</td>
    </tr>
    <tr>
      <th>data-smcols</th>
      <td>1</td>
      <td>Numeric (1-4)</td>
      <td>No</td>
      <td>Controls how many items are shown on the 'tablet view'</td>
    </tr>
    <tr>
      <th>data-mdcols</th>
      <td>1</td>
      <td>Numeric (1-6)</td>
      <td>No</td>
      <td>Controls how many items are shown on the 'desktop view'</td>
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
            <th>carousel</th>
            <td>A wrapper div</td>
          </tr>
          <tr>
            <th>content</th>
            <td>The div which contains the main slot</td>
          </tr>
          <tr>
            <th>btns</th>
            <td>Next and previous buttons container div, should target the next and prev parts rather than this.</td>
          </tr>
          <tr>
            <th>next</th>
            <td>The next button</td>
          </tr>
          <tr>
            <th>prev</th>
            <td>The previous button</td>
          </tr>
          <tr>
            <th>controls</th>
            <td>The div containing the pips which are generated via the code</td>
          </tr>
          <tr>
            <th>progress</th>
            <td>The div containing the slider</td>
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
            <th>--carousel-spacing</th>
            <td>The outer inline spacing, used to correctly create the overflow effect on mobile and tablet. This is updated when the carousel is contained insde an admin panel our dialog.</td>
          </tr>
          <tr>
            <th>--last-item-extra</th>
            <td>Can be used to make sure the last item is displayed correctly. Not set by default but used in situations like when the carousel is contained inside and admin panel or dialog.</td>
          </tr>
          <tr>
            <th>--track-size, --track-colour, --thumb-colour, --thumb-size, --thumb-size-outline</th>
            <td>These variables are used to control the size and colour of the slider element.</td>
          </tr>
          <tr>
            <th>--carousel-image-aspect-ratio</th>
            <td>Update the image aspect ratio when the carousel is used to house images. By default it is 3/2 which is a fairly common landscape aspect ratio.</td>
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
              <th>pip-clicked</th>
              <td>When a user clicks on a pip</td>
              <td></td>
            </tr>
            <tr>
              <th>next-clicked</th>
              <td>When a user clicks on the next button</td>
              <td></td>
            </tr>
            <tr>
              <th>prev-clicked</th>
              <td>When a user clicks on the previous button</td>
              <td></td>
            </tr>
            <tr>
              <th>slider-changed</th>
              <td>The slider element is used to update the carousel</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </template>

      <template #criteria>

      <ul>
        <li>The previous and next button should show the a set amount of items and not just move along by 1.</li>
        <li>The pip buttons should move the carousel along by a set amount of items and not just 1.</li>
        <li>The slider just be displayed instead of the pips if there wojuld be more than 5 pips shown.</li>
        <li>The carousel should work inside of the admin-panel element and the dialog/modal element.</li>
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
              <th>pip-clicked</th>
              <td>When a user clicks on a pip</td>
              <td>{ "event": "pip-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
            </tr>
            <tr>
              <th>next-clicked</th>
              <td>When a user clicks on the next button</td>
              <td>{ "event": "next-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
            </tr>
            <tr>
              <th>prev-clicked</th>
              <td>When a user clicks on the previous button</td>
              <td>{ "event": "prev-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
            </tr>
            <tr>
              <th>slider-changed</th>
              <td>The slider element is used to update the carousel</td>
              <td>{ "event": "slider-changed", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
            </tr>
          </tbody>
        </table>

      </template>

    </Integration>
    <Versions pdf="/pdfs/carousel.pdf">
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
              <td>11.1.2024</td>
              <td>Inclusion of the simple carousel</td>
            </tr>
          </tbody>
        </table>
    </Versions>
    
    
  </main>
</template>
