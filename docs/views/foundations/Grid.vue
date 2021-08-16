<template>
  <main>
    <div class="container ">
      <h1>Grid</h1>


      <h2>8px baseline grid</h2>

      <p>In order to create a consistent UI, all of our sizing and spacing derives from multiples of 8px. This is our baseline grid, which allows us to space our typography and elements out in a uniform manner. </p>
      <p>All dimensions, line heights, margins and padding use this baseline. This helps give the content hierarchy and aids the readability of text as it gives the screen a vertical rhythm. We are using rems as our unit of measurement, which is a relative unit based on the root font size. </p>
      <p>We have set this to 16px by default, meaning we can use increments of 0.5rem to ensure that all elements sit on the 8px baseline.</p>
      <p>Here is a handy conversion chart for pixel and rem values:</p>

      <div class="row">
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 0.5rem;"></span></div>
          <p><span class="strong">0.5rem</span><br/> 8px</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 1rem;"></span></div>
          <p><span class="strong">1rem</span><br/> 16px</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 1.5rem;"></span></div>
          <p><span class="strong">1.5rem</span><br/> 24px</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 2rem;"></span></div>
          <p><span class="strong">2rem</span><br/> 32px</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 2.5rem;"></span></div>
          <p><span class="strong">2.5rem</span><br/> 40px</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 3rem;"></span></div>
          <p><span class="strong">3rem</span><br/> 48px</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 3.5rem;"></span></div>
          <p><span class="strong">3.5rem</span><br/> 56px</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 4rem;"></span></div>
          <p><span class="strong">4rem</span><br/> 64px</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 4.5rem;"></span></div>
          <p><span class="strong">4.5rem</span><br/> 72px</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 5rem;"></span></div>
          <p><span class="strong">5rem</span><br/> 80px</p>
        </div>
      </div>

      <p>In order to aid the vertical rhythm of the screen, spacing is only applied to the bottom of each element (using margin-bottom). This gives us a lot of flexibility when removing or re-ordering elements on the screen, as they will maintain the same vertical rhythm.</p>
      <p>As well as vertical spacing, we also have some horizontal spacing applied to our typography styles, where we apply a max-width of 51.25rem (820px). This is make it more comfortable for users to read the content on the screen as it keeps eye movement to a minimum. This equates to around 8 columns in our 12-column grid on the desktop (md) breakpoint.</p>
    </div>
    <div class="container ">
      <h2>Spacing utilities</h2>
      
      <p>For greater control over the spacing around elements and styles, Bootstrap’s spacing utilites can be used to overwrite the default spacing applied to an element. These values can be applied as both margin or padding, and are written in shorthand format, where the first letter of the direction of which it is used as a suffix (e.g .mr-3 = marginright-3).</p>
      <p>We have adapted the default spacing variables to suit the spacing applied to our designs:</p>


      <div class="row">
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 0.25rem;"></span></div>
          <p><span class="strong">.mb-1</span><br/> 0.25rem (4px)</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 0.5rem;"></span></div>
          <p><span class="strong">.mb-2</span><br/> 0.5rem (8px)</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 1rem;"></span></div>
          <p><span class="strong">.mb-3</span><br/> 1rem (16px)</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 1.5rem;"></span></div>
          <p><span class="strong">.mb-4</span><br/> 1.5rem (24px)</p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example"><span class="before" style="height: 3rem;"></span></div>
          <p><span class="strong">.mb-5</span><br/> 3rem (48px)</p>
        </div>
      </div>

    </div>
    <div class="container ">
      <h2>12 coloumn grid</h2>

      <p>Our grid system is based upon <a href="https://getbootstrap.com/docs/5.1/layout/grid/" rel="nofollow" target="_blank">bootstraps grid system</a> and the majority of documentation is valid including the flexbox utility classes.</p>

      <div class="row d-sm-none">
        <div class="col-12">
          <span class="grid-example">.col-12</span>
        </div>
        <div class="col-6">
          <span class="grid-example">.col-6</span>
        </div>
        <div class="col-6">
          <span class="grid-example">.col-6</span>
        </div>
      </div>


      <div class="row d-none d-sm-flex d-md-none">
        <div class="col-sm-12">
          <span class="grid-example">.col-sm-12</span>
        </div>
        <div class="col-sm-6">
          <span class="grid-example">.col-sm-6</span>
        </div>
        <div class="col-sm-6">
          <span class="grid-example">.col-sm-6</span>
        </div>
        <div class="col-sm-4">
          <span class="grid-example">.col-sm-4</span>
        </div>
        <div class="col-sm-4">
          <span class="grid-example">.col-sm-4</span>
        </div>
        <div class="col-sm-4">
          <span class="grid-example">.col-sm-4</span>
        </div>
        <div class="col-sm-3">
          <span class="grid-example">.col-sm-3</span>
        </div>
        <div class="col-sm-3">
          <span class="grid-example">.col-sm-3</span>
        </div>
        <div class="col-sm-3">
          <span class="grid-example">.col-sm-3</span>
        </div>
        <div class="col-sm-3">
          <span class="grid-example">.col-sm-3</span>
        </div>
      </div>

      <div class="row d-none d-md-flex ">
        <div class="col-md-12">
          <span class="grid-example">.col-md-12</span>
        </div>
        <div class="col-md-6">
          <span class="grid-example">.col-md-6</span>
        </div>
        <div class="col-md-6">
          <span class="grid-example">.col-md-6</span>
        </div>
        <div class="col-md-4">
          <span class="grid-example">.col-md-4</span>
        </div>
        <div class="col-md-4">
          <span class="grid-example">.col-md-4</span>
        </div>
        <div class="col-md-4">
          <span class="grid-example">.col-md-4</span>
        </div>
        <div class="col-md-3">
          <span class="grid-example">.col-md-3</span>
        </div>
        <div class="col-md-3">
          <span class="grid-example">.col-md-3</span>
        </div>
        <div class="col-md-3">
          <span class="grid-example">.col-md-3</span>
        </div>
        <div class="col-md-3">
          <span class="grid-example">.col-md-3</span>
        </div>
        <div class="col-md-2">
          <span class="grid-example">.col-md-2</span>
        </div>
        <div class="col-md-2">
          <span class="grid-example">.col-md-2</span>
        </div>
        <div class="col-md-2">
          <span class="grid-example">.col-md-2</span>
        </div>
        <div class="col-md-2">
          <span class="grid-example">.col-md-2</span>
        </div>
        <div class="col-md-2">
          <span class="grid-example">.col-md-2</span>
        </div>
        <div class="col-md-2">
          <span class="grid-example">.col-md-2</span>
        </div>
      </div>


    </div>
  </main>
</template>

<style lang="scss" scoped>
.spacing-example {
  display: block;
  height: 5rem;
  position: relative;

  .before {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    background: #eeeeee;
  }
}
.grid-example {

  display: block;
  height: 5rem;
  background: #eeeeee;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 1rem;
}
</style>
