<script setup>
import Tabs from '@/components/Tabs/Tabs.vue'
import { useSlots } from 'vue';

const slots = useSlots()
const props = defineProps(['component', 'componentName']);


const showInstall = slots['web-component'] || slots['vue-component'] ? true : false;
const showLayout = slots['slots'] ? true : false;
const showModify = slots['attr'] ? true : false;
const showStyle = slots['classes'] || slots['parts'] || slots['vars'] ? true : false;
const showExtend = slots['dispatched-events'] || slot['event-listeners'] || slot['watched-attrs'] || slot['observers'] ? true : false;
const showTest = true;
const showTrack = slots['data-layer'] ? true : false;

</script>

<template>
  
  <h2 class="pb-0 pt-5">Integration</h2>
  <Tabs class="container">
    <details v-if="showInstall">
      <summary><h3>Install</h3></summary>

      <h4 v-if="slots['web-component']">Web component</h4>

      <strong class="label"  v-if="slots['web-component']">Add the below to your initialise script</strong>
      <pre class="mb-5" v-if="slots['web-component']"><code>import('../node_modules/@iamproperty/components/assets/js/components/{{ props.component }}/{{ props.component }}.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-{{ props.component }}`))
    window.customElements.define(`iam-{{ props.component }}`, module.default);

}).catch((err) => {
  console.log(err.message);
});</code></pre>

      <strong class="label">Add the below HTML code to where you want the component to live.</strong>

      <slot name="web-component"></slot>

      <h4 v-if="slots['vue-component']" class="pt-2">Vue component</h4>
      <slot name="vue-component"></slot>

    </details>
    <details v-if="showLayout">
      <summary><h3>Layout</h3></summary>
      

      <h4 v-if="slots['slots']">Slots</h4>
      <slot name="slots"></slot>

    </details>
    <details v-if="showModify">
      <summary><h3>Modify</h3></summary>

      <h4 v-if="slots['attr']">Attributes</h4>
      <slot name="attr"></slot>
    </details>
    <details v-if="showStyle">
      <summary><h3>Style</h3></summary>
      
      <h4 v-if="slots['classes']">Classes</h4>
      <slot name="classes"></slot>
      <small v-if="slots['classes']" class="d-block -pb-5">Classes should be added directly to the component.</small>

      <h4 v-if="slots['parts']">Parts</h4>
      <slot name="parts"></slot>

      <small v-if="slots['vars']" class="d-block pb-5">*Parts can be targeted in the pages CSS be using a selector like `iam-card::part(body)` with the part name being passed into the part function.</small>



      <h4 v-if="slots['vars']">Notable CSS Variables</h4>

      <slot name="vars"></slot>
      <small v-if="slots['vars']" class="d-block pb-5">There are more CSS Variables used within the component and can be found when inspecting the shadow dom. The below are the more notable ones that may effect the styling of the component in a more complicated way.</small>

    </details>
    <details v-if="showExtend">
      <summary><h3>Extend</h3></summary>
      <h4 v-if="slots['dispatched-events']">Dispatched events</h4>
      <slot name="dispatched-events"></slot>


      <small v-if="slots['dispatched-events']" class="d-block pb-5">For the page to extend this event it needs to create an event listener on the component, see below: <br/><br/><code>cardComponent.addEventListener('dispatched-event-name', function(event){ ...do something });</code></small>


      <h4 v-if="slots['event-listeners']">Event Listeners</h4>
      <slot name="event-listeners"></slot>

      <small v-if="slots['event-listeners']" class="d-block pb-5">Events can also be dispatched onto the component and listened for using an event listener created inside of the component JavaScript, see below: <br/><br/><code>cardComponent.addEventListener('event-name', function(event){ ...do something });</code></small>


      <h4 v-if="slots['watched-attrs']">Watched Attributes</h4>
      <slot name="watched-attrs"></slot>

      <h4 v-if="slots['observers']">Mutation observers</h4>
      <slot name="observers"></slot>


    </details>
    <details v-if="showTest">
      <summary><h3>Test</h3></summary>
      <h4 v-if="slots['criteria']">Acceptance criteria</h4>
      <slot name="criteria"></slot>

      <h4 class="pt-3">Accessibility</h4>
      <ul>
        <li>All text should be legible</li>
        <li>All buttons and links within the component should be tabbable unless stated in the acceptance criteria.</li>
        <li>All buttons and links should have a title which is visible on hover.</li>
        <li>The shadow root should not hold any content</li>
      </ul>

      <h4 v-if="slots['keyboard']">Keyboard commands</h4>
      <slot name="keyboard"></slot>

    </details>
    <details v-if="showTrack">
      <summary><h3>Track</h3></summary>
      
      <h4 v-if="slots['data-layer']">DataLayer events</h4>

      <span class="h6">Global Events</span>
      <table v-if="slots['data-layer']">
        <thead>
          <tr>
            <th>Event</th>
            <th>Dispatched</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>customElementRegistered</th>
            <td>When component is registered (Usually on page load)</td>
            <td>{ "event": "customElementRegistered", "element": "{{ props.componentName }}" }</td>
          </tr>
          <tr>
            <th>customElementAdded</th>
            <td>When component is added to the page</td>
            <td>{ "event": "customElementAdded", "element": "{{ props.componentName }}" }</td>
          </tr>
        </tbody>
      </table>
      <span class="h6">Component Events</span>
      <slot name="data-layer"></slot>

      <small v-if="slots['dispatched-events']" class="d-block pb-5">Data layer events are pushed to a basic JavaScript object that can be picked up by seperate JavaScript which is usually a 3rd party like Google Analytics.</small>

    </details>
  </Tabs>
</template>