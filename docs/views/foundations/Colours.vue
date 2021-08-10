<template>
  <main>
    <div class="container">
      <h1>Colours</h1>
      <p class="strapline">Our colour palette will help us create a distinctive identity and plays an important part in building brand recognition. It should be used within all designs and communications.</p>
      <h2>Theme Colours</h2>
      <p>The theme colours are based upon the <a href="https://getbootstrap.com/docs/5.1/utilities/colors/" target="_blank">colours defined in bootstrap</a> and are used to create colour based utility classes. The colours can then by applied as a background colour by using the class <strong>.bg-primary</strong> and change the text colour using <strong>.text-primary</strong>.</p>
    </div>
    <div class="container visualtest">
      <div class="colour-blocks">
        <div class="colour-block" :style="'background: '+colour+';'" v-for="(colour, name) in $shared.themeColours" :key="name">
          <div class="details">
            <h3 class="h5">{{ name }}</h3>
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
            <h3 class="h5">{{ name }}</h3>
            <span>{{ colour }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
$compatible: 'false';
@import "../../../assets/sass/_functions/_func";
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
  .details {
    background: white;
    padding: 0.5rem;
  }
  span {
    display: block;
  }
}
</style>
