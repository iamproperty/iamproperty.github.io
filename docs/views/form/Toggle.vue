<script setup>
  import Input from '@/components/Input/Input.vue';
  import Readme from '@/components/Input/README.md';

  const message = 'input field value';
  const htmlUsage = `...`;
</script>

<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0">
        <li><a href="/components/form">Form components</a></li>
      </ul>
      <h1>Toggle buttons</h1>
      <p>
        We can create toggle buttons by using a combination of checkboxes and button classes. Like other buttons it
        defaults to primary button style but adding
        <strong>.btn-secondary</strong> or <strong>.btn-tertiary</strong> updates the styles.
      </p>
    </div>
    <div class="container visualtest pt-2">
      <label class="toggle">
        <input type="checkbox" name="checkbox1" />
        Edit content overlay
      </label>
      <pre><code>{{ `<label class="toggle">
  <input type="checkbox" />
  Edit content overlay
</label>` }}</code></pre>

      <h2>Conditional reveal</h2>
      <p class="visualtest-hide">Like other checkboxes we can add in conditional content revealed when checked.</p>

      <label class="toggle">
        <input type="checkbox" name="checkbox2" />
        Edit content overlay
      </label>

      <div class="conditional">
        <p>Content 1.</p>
      </div>

      <h2>Multi option toggle buttons</h2>
      <p class="visualtest-hide">
        We can create toggle buttons with more than one option by using a combination of radio fields and button
        classes.
      </p>

      <div class="btn-group d-block col-md-8">
        <label class="toggle">
          <input type="radio" name="radio" class="conditional-input-1" />
          Option 1
        </label>
        <label class="toggle">
          <input type="radio" name="radio" class="conditional-input-2" />
          Option 2
        </label>
        <label class="toggle">
          <input type="radio" name="radio" class="conditional-input-3" />
          Option 3
        </label>

        <hr />

        <div class="conditional conditional-1">
          <p>Content 1.</p>
        </div>
        <div class="conditional conditional-2">
          <p>Content 2.</p>
        </div>
        <div class="conditional conditional-3">
          <p>Content 3.</p>
        </div>
      </div>

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
  </main>
</template>
