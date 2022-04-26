<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/foundations">Foundations</a></li>
      </ul>
      <h1>Colours</h1>
      <p class="strapline">Our colour palette will help us create a distinctive identity and plays an important part in building brand recognition. It should be used within all designs and communications.</p>
      <h2>Theme Colours</h2>
      <p>The theme colours are based upon the <a href="https://getbootstrap.com/docs/5.1/utilities/colors/" target="_blank">colours defined in bootstrap</a> and are used to create colour based utility classes. The colours can then by applied as a background colour by using the class <strong>.bg-primary</strong> and change the text colour using <strong>.text-primary</strong>.</p>
    </div>
    <div class="container visualtest">
      <div class="colour-blocks">
        <div class="colour-block" :style="'background: '+colour+';'" v-for="(colour, name) in $shared.themeColours" :key="name">
          <div class="details">
            <h3 class="h5 mb-0">{{ name }}</h3>
            <span>{{ colour }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Functional Colours</h2>
      <p>These non-theme colours are not to be used for backgrounds or to be used to configure components. But are used for pre-defined functional tasks.</p>
    </div>
    <div class="container visualtest">
      <div class="colour-blocks">
        <div class="colour-block" :style="'background: '+colour+';'" v-for="(colour, name) in $shared.nonThemeColours" :key="name">
          <div class="details">
            <h3 class="h5 mb-0">{{ name }}</h3>
            <span>{{ colour }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Gradients</h2>
      <p>Gradients can be used to help convey technological eepertise and innovation.</p>
    </div>
    <div class="container visualtest">
      <div class="colour-blocks">
        <div class="colour-block bg-info gradient-secondary">
          <div class="details">
            <h3 class="h5 mb-0">Secondary on info</h3>
          </div>
        </div>
        <div class="colour-block bg-info gradient-primary">
          <div class="details">
            <h3 class="h5 mb-0">Primary on info</h3>
          </div>
        </div>
        <div class="colour-block bg-secondary gradient-primary">
          <div class="details">
            <h3 class="h5 mb-0">Primary on secondary</h3>
          </div>
        </div>
        <div class="colour-block gradient-info">
          <div class="details">
            <h3 class="h5 mb-0">Info</h3>
          </div>
        </div>
      </div>
      <h3>Gradient direction</h3>
      <p>The direction of the gradient can be changed by adding another gradient class.</p>
      <div class="colour-blocks">
        <div class="colour-block bg-info gradient-secondary">
          <div class="details">
            <h3 class="h5 mb-0">Default</h3>
          </div>
        </div>
        <div class="colour-block bg-info gradient-secondary gradient-direction-left">
          <div class="details">
            <h3 class="h5 mb-0">Left</h3>
          </div>
        </div>
        <div class="colour-block bg-info gradient-secondary gradient-direction-right">
          <div class="details">
            <h3 class="h5 mb-0">Right</h3>
          </div>
        </div>
        <div class="colour-block bg-info gradient-secondary gradient-direction-up">
          <div class="details">
            <h3 class="h5 mb-0">Up</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="container visualtest">
      <h2>Colour combinations</h2>
      <div class="colour-blocks">
        <div class="colour-block bg-primary p-3">
          <span class="h5 mb-0">Heading</span>
          <p>Paragraph</p>
          <a href="/link" class="mw-fit-content">Basic link</a>
          <button class="btn">Primary button</button>
        </div>
        <div class="colour-block bg-secondary p-3">
          <span class="h5 mb-0">Heading</span>
          <p>Paragraph</p>
          <a href="/link" class="mw-fit-content">Basic link</a>
          <button class="btn">Primary button</button>
        </div>
        <div class="colour-block bg-info p-3">
          <span class="h5 mb-0">Heading</span>
          <p>Paragraph</p>
          <a href="/link" class="mw-fit-content">Basic link</a>
          <button class="btn">Primary button</button>
        </div>
        <div class="colour-block bg-warning p-3">
          <span class="h5 mb-0">Heading</span>
          <p>Paragraph</p>
          <a href="/link" class="mw-fit-content">Basic link</a>
          <button class="btn">Primary button</button>
        </div>
        <div class="colour-block bg-danger p-3">
          <span class="h5 mb-0">Heading</span>
          <p>Paragraph</p>
          <a href="/link" class="mw-fit-content">Basic link</a>
          <button class="btn">Primary button</button>
        </div>
        <div class="colour-block bg-light p-3">
          <span class="h5 mb-0">Heading</span>
          <p>Paragraph</p>
          <a href="/link" class="mw-fit-content">Basic link</a>
          <button class="btn">Primary button</button>
        </div>
        <div class="colour-block bg-dark p-3">
          <span class="h5 mb-0">Heading</span>
          <p>Paragraph</p>
          <a href="/link" class="mw-fit-content">Basic link</a>
          <button class="btn">Primary button</button>
        </div>
        <div class="colour-block bg-admin p-3">
          <span class="h5 mb-0">Heading</span>
          <p>Paragraph</p>
          <a href="/link" class="mw-fit-content">Basic link</a>
          <button class="btn">Primary button</button>
        </div>
        <div class="colour-block bg-white p-3">
          <span class="h5 mb-0">Heading</span>
          <p>Paragraph</p>
          <a href="/link" class="mw-fit-content">Basic link</a>
          <button class="btn">Primary button</button>
        </div>
      </div>
    </div>

  </main>
</template>

<style lang="scss">
$compatible: 'false';
@import "../../../assets/sass/_func";
.colour-blocks {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 2rem;
}
.colour-block {
  width: 9rem;
  padding-top: 8rem;
  @include media-breakpoint-up(sm) {
    width: 13.5rem;
    padding-top: 13.5rem;
  }
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 1px rgba(111,111,111,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .details {
    background: white;
    padding: 0.5rem;

    --colour-body: var(--colour-primary);
    --colour-heading: var(--colour-primary);
    color: var(--colour-body);
  }
  span {
    display: block;
  }
}
</style>
