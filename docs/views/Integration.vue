<script setup>
import Tabs from '@/components/Tabs/Tabs.vue'
import { useSlots } from 'vue';

const slots = useSlots()
const props = defineProps(['component']);


const showInstall = slots['web-component'] || slots['vue-component'] ? true : false;
const showLayout = slots['slots'] ? true : false;
const showModify = slots['attr'] ? true : false;
const showStyle = slots['classes'] || slots['parts'] || slots['vars'] ? true : false;
const showExtend = slots['events'] ? true : false;
const showTest = slots['criteria'] ? true : false;

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

      <h4 v-if="slots['vue-component']">Vue component</h4>
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

      <h4 v-if="slots['parts']">Parts</h4>
      <slot name="parts"></slot>


      <h4 v-if="slots['vars']">CSS Variables</h4>
      <slot name="vars"></slot>

    </details>
    <details v-if="showExtend">
      <summary><h3>Extend</h3></summary>
      <h4 v-if="slots['events']">Events</h4>
      <slot name="events"></slot>
    </details>
    <details v-if="showTest">
      <summary><h3>Test</h3></summary>
      <h4 v-if="slots['criteria']">Accpetance criteria</h4>
      <slot name="criteria"></slot>
    </details>
  </Tabs>
</template>