<template>
  <main>
    <div class="container ">
      <h1>Breakpoints & scaling</h1>
      <p><a href="https://getbootstrap.com/docs/5.1/layout/breakpoints/" rel="nofollow" target="_blank">Bootstrap offers 5 breakpoints</a> as part of its grid system and uses a t-shirt sizing naming convention that are mapped against various device types (extra-small, small, medium, large and extra-large). This seemed a little excessive given the simplicity of our latest design style, so we have adjusted and reduced the default Bootstrap breakpoints to the following:</p>
      <p><strong>Extra Small (xs) – up to 576px</strong> <br>This is the default breakpoint that will be visible on mobile devices.</p>
      <p><strong>Small (sm) – 576px and over</strong> <br>This will be visible on landscape mobile and tablet devices.</p>
      <p><strong>Medium (md) – 992px and over</strong> <br>This will be visible on landscape tablet and desktop devices.</p>
    </div>
    <div class="container ">
      <h2>Scaling</h2>
      <p>To to maintain the composition of the design, responsive scaling has been added to scale the content proportionally based on the base font size (1rem).</p>
      <p><strong>Extra Small (xs) – up to 576px</strong> <br>Scales to/from <strong>375px</strong></p>
      <p><strong>Small (sm) – 576px and over</strong> <br>Scales to/from <strong>768px</strong></p>
      <p><strong>Medium (md) – 992px and over</strong> <br>Scales upto <strong>1440px</strong></p>
    </div>
  </main>
</template>

<style lang="scss">
</style>
