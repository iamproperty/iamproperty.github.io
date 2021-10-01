<template>
  <main>
    
    <div class="container pb-0">
      
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>Radio fields</h1>
      <p>Using what a fairly common approach on styling radio fields using a wrapper div to group the input and label.</p>
      <p class="note"><strong>Note:</strong> The radio input field needs to have seperate ID and name attributes with the name attribute matching other radio input fields that are grouped together.</p>
    </div>
    <div class="container visualtest pt-2">

      <Input type="radio" id="test1" label="Label"></Input>
      <hr/>
      <Input type="radio" id="test2" label="Label for disabled field" disabled></Input>
      
      <pre><code>&lt;div class="form-check">
  &lt;input type="checkbox" name="test1" id="test1" class="form-check-input">
  &lt;label for="test1" class="form-label form-check-label">Label&lt;/label>
&lt;/div></code></pre>

      <h2>Stacked</h2>
      <p class="visualtest-hide">Radio fields next to each other will spaced tightly together, to avoid this a hr element can be used in between.</p>

      <Input type="radio" id="test3" name="radio1" label="Label"></Input>
      <Input type="radio" id="test4" name="radio1" label="Label"></Input>
      
      <h2>Inline</h2>
      <p class="visualtest-hide">The layout of radio fields can be modified by adding a <strong>.form-check-inline</strong> class to the <strong>.form-check</strong> element. It is recommened to use a hr after the last checkbox.</p>

      <Input type="radio" id="test5" label="Label" name="radio2" class="form-check-inline"></Input>
      <Input type="radio" id="test6" label="Label" name="radio2" class="form-check-inline"></Input>
      <hr/>
      <h2>Switches</h2>

      <p class="visualtest-hide">The display of radio fields can be changed to look like a switch by adding a <strong>.form-switch</strong> class to the <strong>.form-check</strong> element.</p>

      <Input type="radio" id="test7" name="radio3" label="Label" class="form-switch" checked="checked"></Input>
      <Input type="radio" id="test7a" name="radio3" label="Label" class="form-switch"></Input>

      <h2>Conditional Reveal of content</h2>
      <p class="visualtest-hide">Sometimes we only want to show some content or input fields if a user has selected a box first. </p>

      <div class="form-check">
        <Input type="radio" name="radio4" id="test9" label="Label" checked="checked"></Input>
        <hr/>
        <Input type="radio" id="test9a" name="radio4" label="Label 2"></Input>
        <hr/>
        <div class="conditional conditional-1">
          <p class="mb-2">Content 1.</p>
        </div>
        <div class="conditional conditional-2">
          <p class="mb-2">Content 2.</p>
        </div>
      </div>

<pre><code>&lt;div class="form-check">
  &lt;input type="radio" name="radio4" id="test9" class="form-check-input">
  &lt;label for="test9" class="form-label form-check-label">Label&lt;/label>
  &lt;hr/>
  &lt;input type="radio" name="radio4" id="test9a" class="form-check-input">
  &lt;label for="test9a" class="form-label form-check-label">Label 2&lt;/label>
  &lt;hr/>
  &lt;div class="conditional conditional-1">&lt;p class="mb-2">Content 1.&lt;/p>&lt;/div>
  &lt;div class="conditional conditional-2">&lt;p class="mb-2">Content 2.&lt;/p>&lt;/div>
&lt;/div></code></pre>

      <pre><code>&lt;&lt;div class="btn-group d-block col-md-8">
  &lt;input type="radio" autocomplete="off" name="radio5" id="test8" class="btn-check">
  &lt;label for="test8" class="btn btn-tertiary col-4">Option 1&lt;/label>
  &lt;input type="radio" autocomplete="off" name="radio5" id="test8a" class="btn-check">
  &lt;label for="test8a" class="btn btn-tertiary col-4">Option 2&lt;/label>
  &lt;input type="radio" autocomplete="off" name="radio5" id="test8b" class="btn-check">
  &lt;label for="test8b" class="btn btn-tertiary col-4">Option 3&lt;/label>
  &lt;hr/>
  &lt;div class="conditional conditional-1">&lt;p>Content 1.&lt;/p>&lt;/div>
  &lt;div class="conditional conditional-2">&lt;p>Content 2.&lt;/p>&lt;/div>
  &lt;div class="conditional conditional-3">&lt;p>Content 3.&lt;/p>&lt;/div>
&lt;/div></code></pre>
    </div>
    
    <div class="container">
      <h2>Vue Input component reference</h2>
      <p>The radio input field uses the same Vue component as the input field, the type just needs to be set to 'radio'. The name attribute is required for the radio input field, this attribute should match other radio input fields in a radio button group.</p>
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