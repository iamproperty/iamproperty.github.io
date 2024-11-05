<script setup>
import MultiStep from '@/components/MultiStep/MultiStep.vue';

import Integration from '../Integration.vue'
import Versions from '../Versions.vue'
import TrackEvents from '../TrackEvents.vue'

import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import cardImg from '../../img/cardImg.png'
import cardModes from '../../img/cardModes.png'

import modalMulti from '../../img/dialogs/modal-multi.png'
import modalMultiAnatomy from '../../img/dialogs/multi-modal-anatomy.png'
import modalMultiAnatomyScroll from '../../img/dialogs/multi-modal-anatomy-scroll.png'

</script>
<template>
  
  <TrackEvents selector="iam-multi-step" :events="[]"></TrackEvents>

  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Multi-step form</h1>
    </DSHeader>

    

    <!-- #region Multi-step -->
    <div class="container">
      <p>The purpose of a multi-step modal dialog is to provide users with a sense of assurance that their requested action is being processed and to keep them informed about the progress. It helps manage user expectations, reduce uncertainty, and provide a responsive user experience during tasks that require time to complete.</p>

      <div class="row">
        <div class="col-sm-6">
          <img :src="modalMulti" alt="" class="mb-3" />
          <p>Multi-step modal can be dismissed by clicking the ‘X’ button or following and completing the steps in the dialog.</p>
        </div>
      </div>
      <h4>Standard Anatomy</h4>
      <img :src="modalMultiAnatomy" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Backdrop</li>
        <li>Dialog container</li>
        <li>Tabs</li>
        <li>Tab pane</li>
        <li>Title (H3 styles)</li>
        <li>Close button</li>
        <li>Body: Contains the information and/or controls needed to complete the dialog’s task. It can include message text and components.</li>
        <li>Actions: The main actions needed to complete or navigate the dialog task. Use descriptive words for the actions like Add, Delete, Save and avoid vague words like Done or OK.</li>
      </ol>


      <h4>With scroll Anatomy</h4>
      <img :src="modalMultiAnatomyScroll" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Header section: Container the title and ‘X’ button. Has a surrounding padding of 32px, overlays the body content with a flat cut off.</li>
        <li>Scroll bar: Inline with body content</li>
        <li>Bottom aligned fade: Tinted layer with a linear white fill. Height matches the padding of the parent container.</li>
      </ol>

      <h4>Dismissal</h4>
      <p>The multi-step modal is less restrictive about dismissal, allowing the user several options to navigate content or dismiss. Users can follow the action buttons, progress through the modal content and complete the prompted action at the end to dismiss. It can also be dismissed by clicking the ‘X’ button or clicking anywhere outside the modal. </p>

      <h4>Behaviours</h4>
      <ul class="mb-4">
        <li>Should open on the first step</li>
        <li>Validation is ran per step by clicking on next</li>
        <li>Can only progress to the next step once the current step is successfully validated</li>
        <li>Once validation is successful on all steps the form will submit using the default browser behaviour.</li>
      </ul>

      <p class="note mb-3"><strong>Note:</strong> To get the dialog to open on page load due to a server side validation error being present, a class of `is-invalid` needs to be added to the input field. The fieldset its in and any other fieldset which has had validation ran on it. Finally add an `open` attribute to the dialog itself.</p>
    </div>

    <div class="container pb-5 mb-5">
      <h4>Preview</h4>
      <button data-modal="modal-multi" class="btn btn-secondary">Open Modal</button>
    </div>
    <dialog id="modal-multi">
      
    
      <MultiStep><form>
        <span class="h3">Multi-step modal title</span>
      
        <fieldset data-title="Personal details">
          
          
          <div>
            <label for="input1">Name 1</label>
            <input type="text" id="input1" name="input1" placeholder="Optional placeholder text" required="" />
            <span class="invalid-feedback">This field is required</span>
          </div>
        
        </fieldset>
        <fieldset data-title="Property details">

          <div>
            <label for="input2">Name 2</label>
            <input type="text" id="input2" name="input2" placeholder="Optional placeholder text" required=""/>
            <span class="invalid-feedback">This field is required</span>
          </div>

        </fieldset>
        <fieldset data-title="Location">
          
          <div>
            <label for="input3">Name 3</label>
            <input type="text" id="input3" name="input3" placeholder="Optional placeholder text" required="" class="is-invalid" />
            <span class="invalid-feedback">This field is required</span>
          </div>

        </fieldset>
        <fieldset data-title="Submit property">

          
          <div>
            <label for="input4">Name 4</label>
            <input type="text" id="input4" name="input4" placeholder="Optional placeholder text" required="" />
            <span class="invalid-feedback">This field is required</span>
          </div>


        </fieldset>
        <button class="btn btn-primary colour-success" type="submit">Register</button>
      
    </form>
      </MultiStep>
    </dialog>
    <!-- #endregion -->



  

    <Integration component="card" componentName="iam-card" >
      <template #web-component>

        <pre><code>{{`<a href="/url"></a><iam-card :data-image="cardImg"> 
  Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span>
</iam-card></a>`}}</code></pre>
      </template>
      <template #vue-component>

        <pre><code>{{`<script setup>import Card from '@/components/Card/Card.vue</script>
        
<a href="/url"></a><Card :data-image="cardImg">
  Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span>
</Card></a>
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
            <th>.colour-{var}</th>
            <td>To create the status card look a clour needs to be defined via a colour class.</td>
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
              <th>select-card</th>
              <td>checkbox is checked</td>
              <td>{"Card value":"on","input name":"card10"}</td>
            </tr>
            <tr>
              <th>unselect-card</th>
              <td>Checkbox is unchecked</td>
              <td>{"Card value":"on","input name":"card10"}</td>
            </tr>
            <tr>
              <th>secondary-button-clicked</th>
              <td>The secondary button is clicked</td>
              <td></td>
            </tr>
            <tr>
              <th>action-button-clicked</th>
              <td>One of the buttons in the dialog menu is clicked</td>
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
        <li>When hovering over a secondary,action or checkbox the main hover state on the card should not be shown</li>
        <li>All secodnary type buttons or inputs should be tabbable</li>
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
              <th>select-card</th>
              <td>checkbox is checked</td>
              <td>{"Card value":"on","input name":"card10"}</td>
            </tr>
            <tr>
              <th>unselect-card</th>
              <td>Checkbox is unchecked</td>
              <td>{"Card value":"on","input name":"card10"}</td>
            </tr>
            <tr>
              <th>secondary-button-clicked</th>
              <td>The secondary button is clicked</td>
              <td></td>
            </tr>
            <tr>
              <th>action-button-clicked</th>
              <td>One of the buttons in the dialog menu is clicked</td>
              <td></td>
            </tr>
          </tbody>
        </table>


      </template>

    </Integration>
    <Versions pdf="/pdfs/navigational-card.pdf">
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