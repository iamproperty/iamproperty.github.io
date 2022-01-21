<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Progress steps</h1>
      <p>Orientate the user with their progress through a form journey with multiple steps.</p>
    </div>

    <Stepper label="Client progress" endlabel="Onboarding complete" class="visualtest">
      <Step status="success">Customer due diligence</Step>
      <Step url="/step" status="success">Legal Preperation</Step>
      <Step url="/step" current>Financial Preparation</Step>
      <Step url="/step">Surveys</Step>
    </Stepper>
    <div class="container pb-0">
      <p class="note"><strong>Note: </strong>The number of steps is not restricted but it is recommended to keep it less than 5. If there is a large amount of steps or long titles the step progress bar may become scrollable.</p>
      <h2>Step status</h2>
      <p>Each step can have a status to highlight to the user whether the step was completed correctly.</p>
    </div>
    
    <Stepper class="visualtest">
      <Step status="warning">Warning status</Step>
      <Step url="/step" status="danger">Danger status</Step>
      <Step url="/step" status="success">Success status</Step>
      <Step url="/step" current>Current step</Step>
      <Step url="/step">Future step</Step>
    </Stepper>

    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="language-html">{{htmlUsage}}</code></pre>
    </div>
    
    <div class="container">
      <h2>Vue Stepper component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Step from '@/components/Stepper/Step.vue'
import Stepper from '@/components/Stepper/Stepper.vue'
import Readme from '@/components/Stepper/README.md'

export default {
  components: {
    Step,
    Stepper,
    Readme
  },
  data () {
    return {
      htmlUsage: `<div class="container">
   <div class="stepper">
      <span class="h6">Client progress</span>
      <ol class="list-unstyled">
         <li><a class="bg-success undefined"><span>Customer due diligence</span></a></li>
         <li><a href="/step" class="bg-success undefined"><span>Legal Preparation</span></a></li>
         <li><a href="/step" class="current string"><span>Financial Preparation</span></a></li>
         <li href="/step"><a class=" undefined"><span>Surveys</span></a></li>
      </ol>
      <span class="h6 stepper__end">Onboarding complete</span>
   </div>
</div>`
    }
  }
}
</script>