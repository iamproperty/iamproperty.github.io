<template>
  <main>
    
    <div class="container pb-0">
      
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>Checkbox field</h1>
      <p>Using what a fairly common approach on styling checkboxes using a wrapper div to group the input and label.</p>
    </div>
    <div class="container visualtest pt-2">

      <Input type="checkbox" id="test1" label="Label"></Input>
      <hr/>
      <Input type="checkbox" id="test2" label="Label for disabled field" disabled></Input>
      
      <pre><code>&lt;div class="form-check">
  &lt;input type="checkbox" name="test1" id="test1" class="form-check-input">
  &lt;label for="test1" class="form-label form-check-label">Label&lt;/label>
&lt;/div></code></pre>

      <h2>Stacked</h2>
      <p class="visualtest-hide">Checkboxes next to each other will spaced tightly together, to avoid this a hr element can be used in between.</p>

      <Input type="checkbox" id="test3" label="Label"></Input>
      <Input type="checkbox" id="test4" label="Label"></Input>
      
      <h2>Inline</h2>
      <p class="visualtest-hide">The layout of checkboxes can be modified by adding a <strong>.form-check-inline</strong> class to the <strong>.form-check</strong> element. It is recommened to use a hr after the last checkbox.</p>

      <Input type="checkbox" id="test5" label="Label" class="form-check-inline"></Input>
      <Input type="checkbox" id="test6" label="Label" class="form-check-inline"></Input>
      <hr/>
      <h2>Switches</h2>

      <p class="visualtest-hide">The display of checkboxes can be changed to look like a switch by adding a <strong>.form-switch</strong> class to the <strong>.form-check</strong> element.</p>

      <Input type="checkbox" id="test7" label="Label" class="form-switch"></Input>

      <h2>Conditional Reveal of content</h2>
      <p class="visualtest-hide">Sometimes we only want to show some content or input fields if a user has checked a box first. </p>
      <Input type="checkbox" id="test9" label="Label" checked="checked">
        <div class="conditional">
          <p class="mb-2">Hello the checkbox above must be checked for this to appear.</p>
          <Input id="test71" label="Label of previously hidden field"></Input>
        </div>
      </Input>
<pre><code>&lt;div class="form-check">
  &lt;input type="checkbox" name="test9" id="test9" class="form-check-input">
  &lt;label for="test9" class="form-label form-check-label">Label&lt;/label>
  &lt;div class="conditional">
    &lt;p class="mb-2">Hello the checkbox above must be checked for this to appear.&lt;/p>
  &lt;/div>
&lt;/div></code></pre>

    </div>
    
    <div class="container">
      <h2>Vue Input component reference</h2>
      <p>The checkbox input field uses the same Vue component as the input field, the type just needs to be set to 'checkbox'.</p>
      <Readme></Readme>
    </div>
  </main>
</template>


<script>
import Input from '@/elements/Input/Input.vue'
import Readme from '@/elements/Input/README.md'

export default {
  components: {
    Input,
    Readme
  },
  data () {
    return {
      message:'input field value',
      htmlUsage: `...`,
    }
  }
}
</script>