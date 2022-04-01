<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Alert</h1>
      <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
    </div>
    <Alert class="visualtest">
      <h2 class="h6">Default inline alert</h2>
      <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
    </Alert>
    <Alert class="alert--fixed" colour="secondary" dismissible="true">
      <h2 class="h6">Dismissible alert</h2>
      <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
    </Alert>
    
    <Alert class="alert--fixed" colour="info" dismissible="true" timeout="6000">
      <h2 class="h6">Self dismissing alert</h2>
      <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
    </Alert>
    
    <div class="container">
      <h2>HTML code examples</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Vue Alert component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Alert from '@/components/Alert/Alert.vue'
import Readme from '@/components/Alert/README.md'

export default {
  components: {
    Alert,
    Readme
  },
  data () {
    return {
      htmlUsage: `<div class="alert--fixed container alert pb-0 alert--dismissible fade show">
   <div role="alert" class="alert__inner bg-secondary">
      <button type="button" data-bs-dismiss="alert" aria-label="Close" class="btn-close"></button>
      <h2 class="h6">Dismissible alert</h2>
      <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
   </div>
</div>`
    }
  }
}
</script>