<script setup>
  import { ref } from 'vue';

  import PasswordIndicator from '@/components/PasswordIndicator/PasswordIndicator.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Integration from '../Integration.vue';
  import TrackEvents from '../TrackEvents.vue';


</script>

<style>

</style>


<template>
  <TrackEvents
    selector="iam-password-indicator"
    :events="['hide-future-items', 'show-future-items']"
  ></TrackEvents>

  <main>
     <DSHeader :image="headerImg" section="components">
      <h1>Password Indicator</h1>
    </DSHeader>

    <p class="lead md-col-end-7">
      Password fields hide the field value for security. We can add an optional hide/show button after the field.
    </p>

    <div class="visualtest container">
      <label>Password 
        <span>
          <input type="password" id="password" name="password" required="" autocomplete="on" minlength="8" data-strength-checker="pwdchecker1">
          <PasswordIndicator></PasswordIndicator>
        </span>
        <span id="pwdchecker1" class="pwd-checker"></span>
      </label>


    </div>
    

<!--        <Integration component="milestone-group" componentName="iam-milestone-group">
      <template #web-component>
        <pre><code>{{`<iam-milestone-group></iam-milestone-group>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import MilestoneGroup from '@/components/Milestones/MilestoneGroup.vue</script>
        
<MilestoneGroup></MilestoneGroup>
`}}</code></pre>
      </template>

       <template #slots>
        <table>
          <thead>
            <tr>
              <th>Slot</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
              <td>The default slot is where any Milestone components are rendered</td>
            </tr>
          </tbody>
        </table>
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
              <th>show-all-toggle</th>
              <td>-</td>
              <td>Boolean</td>
              <td>No</td>
              <td>This property is used to hide any child milestones that are after the current milestone, as well as adding a toggle to show all of the milestones.</td>
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
              <th>reverse-items</th>
              <td>Visually reverses the order of the milestone items in the group so that the last item in the list is first</td>
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
              <th>milestone-group</th>
              <td>The wrapper around all of the milestone group content.</td>
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
              <th>--milestone-divider-colour</th>
              <td>The colour used for the dividing line between milestones.</td>
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
              <th>hide-future-items</th>
              <td>When the 'Show next' toggle is clicked and all items are currently shown</td>
              <td>{ "event": "hide-future-items"}</td>
            </tr>
            <tr>
              <th>show-future-items</th>
              <td>When the 'Show next' toggle is clicked and only current and past items are shown</td>
              <td>{ "event": "show-future-items"}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #criteria>
        <ul>
          <li>A milestone group with the reverrse-items class should show the child items in the reverse order to how they are added.</li>
          <li>A milestone group with the attribute data-show-all-toggle should show a button with an 'eye icon alongside it'.</li>
          <li>A milestone group with the attribute data-show-all-toggle should only show the milestone with a current status and all those before it.</li>
          <li>When the show all toggle is clicked, all items - including future milestones - will show</li>
          <li>When the show all toggle is clicked, it's icon will change to eye-slash</li>
          <li>When the show all link is clicked again, future milestones will be hidden</li>
          <li>A line should appear between each milestone in the group</li>
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
              <th>hide-future-items</th>
              <td>When the 'Show next' toggle is clicked and all items are currently shown</td>
              <td>{ "event": "hide-future-items"}</td>
            </tr>
            <tr>
              <th>show-future-items</th>
              <td>When the 'Show next' toggle is clicked and only current and past items are shown</td>
              <td>{ "event": "show-future-items"}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration> -->

  </main>
</template>
