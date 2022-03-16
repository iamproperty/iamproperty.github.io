<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/foundations">Foundations</a></li>
      </ul>
      <h1>Circles</h1>
      <p>Circles are used as little bits of flair to help highlight our brand. Not elements in their own rights but re-used across multiple different elements and components.</p>
      <h2>Basic circle</h2>
      <p>By default circles will have a basic flat secondary colour but can be updated by with other colours using the <strong>.text-{colour}</strong> class. Or transform it to a simple outline by using a border class like <strong>.border-1</strong>.</p>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example text-secondary bg-secondary"></span>
        </div>
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example text-info bg-info"></span>
        </div>
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example text-info border-2"></span>
        </div>
      </div>
    </div>
    <div class="container pb-0">
      <h2>Variants</h2>
      <p>The circles can be upgraded by adding a pattern or a gradient to them. The class <strong>.gradient-secondary</strong> adds a green gradient while the class <strong>.circle--cross</strong> adds a repeated cross pattern. Colours on the patterned circles can be changed by using the <strong>.text-{colour}</strong> classes. The border can also be removed by using the <strong>.border-0</strong> class.</p>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example circle--stripe"></span>
        </div>
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example circle--cross text-primary"></span>
        </div>
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example circle--plus text-danger"></span>
        </div>
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example circle--dots text-info"></span>
        </div>
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example text-info gradient-secondary"></span>
        </div>
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example circle--stripe border-0"></span>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>How to size them</h2>
      <p>The circles are sized at 200px high and wide by default but can easily be updated via CSS by using the font-size property.</p>
      
      <div class="row">
        <div class="col mw-fit-content pb-4">
          <span class="circle circle-example circle--cross text-primary mb-1" style="font-size: 18.75rem;"></span>
          <span class="d-block">font-size: 300px;</span>
          <span class="d-block">height: 1em;</span>
          <span class="d-block">width: 1em;</span>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>
    
  </main>
</template>

<script>

export default {
  data () {
    return {
      htmlUsage: `<span class="circle circle--cross text-primary"></span>`
    }
  }
}
</script>

<style lang="scss" scoped>
.circle-example {
  font-size: 6rem;
}
@media (min-width: 62em){
  .circle-example {
    font-size: 12.5rem;
  }
}
</style>
