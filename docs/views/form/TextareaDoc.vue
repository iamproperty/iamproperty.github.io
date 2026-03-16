<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import Integration from '../Integration.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Textarea</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">
        ..
      </p>
    </div>

    
    <div class="visualtest">
      
        <label>
          Add referral note
          <textarea name="note" rows="2"></textarea>
        </label>

    </div>

    <Integration component="carousel" componentName="iam-carousel">
      <template #html-element>
        <pre><code>{{`<label>
  Add referral note
  <textarea name="note" rows="8"></textarea>
</label>`}}</code></pre>
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
              <th>rows</th>
              <td>3</td>
              <td>Number</td>
              <td>No</td>
              <td>Controls the initial height of the textarea</td>
            </tr>
          </tbody>
        </table>
      </template>

    </Integration>


  </main>
</template>
