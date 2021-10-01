<template>
  <main>
    
    <div class="container pb-0">
      
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>Pill tags</h1>
      <p>Another way to include a multi select option, tags offer a much more visual approach. Essentially they are just another checkbox style. Due to the the inline block properties used and smaller margins its recommened to use a horizontal rule afterwards to help clear any floats and to add extra margins.</p>
    </div>
    <div class="container visualtest ">

      <Input type="checkbox-btn" id="test0" label="Adverse Mortgage Survey" labelClass="btn-tag"></Input>
      <Input type="checkbox-btn" id="test1" label="Buyer Chain Related Delay" labelClass="btn-tag"></Input>
      <Input type="checkbox-btn" id="test2" label="Buyer Process Delay" labelClass="btn-tag"></Input>
      <Input type="checkbox-btn" id="test3" label="Completion Breach" labelClass="btn-tag"></Input>
      <hr class="mb-4" />
      
      <pre><code>&lt;input type="checkbox" autocomplete="off" name="test0" id="test0" class="btn-check">
&lt;label for="test0" class="btn btn-tag">Adverse Mortgage Survey&lt;/label>
&lt;hr class="mb-4" /></code></pre>
    </div>

    <div class="container visualtest">

      <h2>Update the button style</h2>
      <p class="visualtest-hide">By default the label has the class of a tertiary button but this can be overwritten by adding the classes of either <strong>.btn-primary</strong> or <strong>.btn-secondary</strong>. It's recommened to use the same style for of te buttons grouped together.</p>
    
      <Input type="checkbox-btn" id="test-0" label="Adverse Mortgage Survey" labelClass="btn-tag"></Input>
      <Input type="checkbox-btn" id="test-1" label="Buyer Chain Related Delay" labelClass="btn-tag btn-primary"></Input>
      <Input type="checkbox-btn" id="test-2" label="Buyer Process Delay" labelClass="btn-tag btn-secondary"></Input>
    </div>

    <div class="container visualtest">


      <h2>Conditional Reveal of content</h2>
      <p class="visualtest-hide">Sometimes we only want to show some content or input fields if a user has checked a box first.</p>
      

      <Input type="checkbox-btn" id="test20" label="Adverse Mortgage Survey" labelClass="btn-tag" inputClass="conditional-input-0"></Input>
      <Input type="checkbox-btn" id="test21" label="Buyer Chain Related Delay (content 1)" labelClass="btn-tag" inputClass="conditional-input-1" checked="checked"></Input>
      <Input type="checkbox-btn" id="test22" label="Buyer Process Delay" labelClass="btn-tag" inputClass="conditional-input-0"></Input>
      <Input type="checkbox-btn" id="test23" label="Completion Breach (content 2)" labelClass="btn-tag" inputClass="conditional-input-2"></Input>
      <hr class="mb-4" />

      <div class="conditional conditional-1">
        <p>Conditional content 1</p>
      </div>

      <div class="conditional conditional-2">
        <p>Conditional content 2</p>
      </div>
    </div>
    

    <div class="container visualtest pt-2">

      <p class="note visualtest-hide"><strong>Note:</strong> For the conditional reveal to work the checkboxes need to siblings of the wrapper div of the content. This is because we don't use Javascript to show the content instead we take advantage of CSS' cascade. But if we want to put the tags inside a coloured block this will cause the cascade to not be able to pick up the value of the checkbox. In this situation extra JS is needed to toggle the conditional contents class list to add a class of <strong>.d-block</strong>.</p>

      <div class="p-4 pb-3 mb-4 border-1 bg-light">
        <Input type="checkbox-btn" id="test10" label="Adverse Mortgage Survey" labelClass="btn-tag"></Input>
        <Input type="checkbox-btn" id="test11" label="Buyer Chain Related Delay (content 1)" labelClass="btn-tag" checked="checked" @bus="toggle('conditional-1')"></Input>
        <Input type="checkbox-btn" id="test12" label="Buyer Process Delay" labelClass="btn-tag"></Input>
        <Input type="checkbox-btn" id="test13" label="Completion Breach (content 2)" labelClass="btn-tag" @bus="toggle('conditional-2')"></Input>
        <hr class="mb-0" />
      </div>
      
      <div class="conditional  d-block" id="conditional-1">
        <p>Conditional content 1</p>
      </div>

      <div class="conditional" id="conditional-2">
        <p>Conditional content 2</p>
      </div>
    </div>
    
    <div class="container">
      <h2>Vue Input component reference</h2>
      <p>The tag input field uses the same Vue component as the input field, the type just needs to be set to 'checkbox-btn' and given the labelClass of 'btn-tag'.</p>
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
  },
  methods: {
    toggle: function (id) {
      
      let toggleDiv = document.getElementById(id);

      if(toggleDiv)
        toggleDiv.classList.toggle('d-block');
    }
  }
}
</script>