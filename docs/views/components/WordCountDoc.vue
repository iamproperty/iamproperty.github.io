<script setup>
  import TrackEvents from '../TrackEvents.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Integration from '../Integration.vue';
  import WordCount from '@/components/WordCount/WordCount.vue';

</script>

<template>
  <TrackEvents selector="iam-rank" :events="['update-show']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Word Count (Beta)</h1>
    </DSHeader>

    <p>
      Character or word counters should be used if there is a character or word limit. They display the ratio of
      characters used and the total character limit.
    </p>
    <div class="visualtest">
      <WordCount data-max="10" class="mb-5">
        <label for="input17">Input field label</label>
        <input
          type="text"
          id="input17"
          name="input17"
          placeholder="Optional placeholder text"
          required=""
          value="hey"
        />
        <span data-count="0">Optional helper text</span>
      </WordCount>

      <WordCount data-max="10" class="mb-5">
        <label for="input1">Text area label</label>
        <textarea type="text" id="input1" name="input1"></textarea>
      </WordCount>
    </div>
    <h2>Character count</h2>

    <p>
      Adding <strong>data-characters</strong> attribute to the element turns it into a character counter instead of
      counting full words.
    </p>

<div class="visualtest">
    <WordCount data-max="10" data-character="" class="mb-5">
      <label for="input17">Input field label</label>
      <input type="text" id="input18" name="input18" placeholder="Optional placeholder text" required="" />
      <span data-count="0">Optional helper text</span>
    </WordCount>
</div>
    <Integration component="word-count" componentName="word-count">
      <template #web-component>
        <pre><code>{{`<iam-word-count data-v-7348d146="" data-max="10" class="mb-5" style="--maxlength: 10;">
  <label data-v-7348d146="" for="input17">Input field label</label>
  <input data-v-7348d146="" type="text" id="input17" name="input17" placeholder="Optional placeholder text" required="">
</iam-word-count>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import WordCount from '@/components/WordCount/WordCount.vue</script>
        
<WordCount data-max="10">
  <label for="input17">Input field label</label>
  <input type="text" id="input17" name="input17" placeholder="Optional placeholder text" required="">
</WordCount>
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
              <th>data-max</th>
              <td></td>
              <td>Number</td>
              <td>No</td>
              <td>Sets the max number of words or characters</td>
            </tr>
            <tr>
              <th>data-character</th>
              <td></td>
              <td>Flag</td>
              <td>No</td>
              <td>Gets the component to count chafacters and not full words</td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>
  </main>
</template>

<style lang="scss" scoped>
  .position-backgrounds iam-rank::part(wrapper) {
    display: none;
  }
</style>
