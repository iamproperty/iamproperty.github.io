<script setup lang="ts">
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import InputRange from '@/components/InputRange/InputRange.vue';
  import Integration from '../Integration.vue';

</script>


<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Input range</h1>
    </DSHeader>

    <p class="lead">Creates a range from two input or select fields (can be a mixture), the first input works as the miniumum value and the second its maximum. Logic then prevents either of the inputs to go over or uner the other.</p>
    
    <div class="container visualtest">
      <label>
        Bedrooms
        <InputRange>
          <input type="number" name="input" value="0" min="0"/>
          <input type="number" name="input" value="6" max="6"/>
        </InputRange>
      </label>
      
      
    </div>
    
    <div class="container visualtest">
      <label>
        Price
        <InputRange>
          <select name="starting">
            <option value="50000">£50,000</option>
            <option value="75000">£75,000</option>
            <option value="100000" selected>£100,000</option>
            <option value="150000">£150,000</option>
            <option value="200000">£200,000</option>
          </select>
          <select name="ending">
            <option value="50000">£50,000</option>
            <option value="75000">£75,000</option>
            <option value="100000">£100,000</option>
            <option value="150000">£150,000</option>
            <option value="200000">£200,000</option>
          </select>
        </InputRange>
      </label>
      </div>

    <div class="container visualtest">
      <label>
        Bedrooms
        <InputRange>
          
          <select name="ending2">
            <option value="0" selected>Studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input type="number" name="input2" value="4" max="4"/>
        </InputRange>
      </label>
    </div>

    <Integration component="input-range" componentName="input-range">
      <template #web-component>
        <pre><code>{{`<iam-input-range>
  <input type="number" name="input" value="0" min="0"/>
  <input type="number" name="input" value="6" max="6"/>
</iam-input-range>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Input from '@/components/InputRange/InputRange.vue</script>
        
<InputRange>
  <input type="number" name="input" value="0" min="0"/>
  <input type="number" name="input" value="6" max="6"/>
</InputRange>

`}}</code></pre>
      </template>



    </Integration>

    
  </main>
</template>
