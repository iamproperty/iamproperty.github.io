<template>
  <main>
    <div class="container">
      <h1>Illustrations</h1>
      <p class="strapline">Illustrations create an approachable and engaging visual element on comms, aloowing us to present complex services in a simplified and understandable way. They also provide an alternative option to photography when the subject matter makes it difficult to find a stock image.</p>
      <p>Illustrations should also be loaded as SVGs rather than a raster image to maintain the crisp lines and sharpness. The characters and imagery can be composed either before hand as one whole new SVG file or via CSS. Using CSS alongside existing SVG assets while reduce the need for a new asset and encourage re-usability.</p>
      <p>Loading the illustrations as inline SVGs gives greater level of control over the presentation. We can change colours, opacity, positions and even change parts of the illustration.</p>
    </div>
    <div class="container visualtest">
      <div class="example">
        <span class="h1">Reach your <br/>audience <br/>24/7</span>
        <span class="circle"></span>
        <span class="illustration char1"><SVGChar1></SVGChar1></span>
        <span class="illustration char2"><SVGChar2></SVGChar2></span>
        <span class="illustration char3"><SVGChar3></SVGChar3></span>
      </div>
    </div>
  </main>
</template>

<script>
import SVGChar1 from '../../../assets/svg/illustrations/commuter1.svg'
import SVGChar2 from '../../../assets/svg/illustrations/commuter2.svg'
import SVGChar3 from '../../../assets/svg/illustrations/commuter3.svg'

export default {
  components: {
    SVGChar1,
    SVGChar2,
    SVGChar3
  }
}
</script>

<style lang="scss" scoped>
.example {
  position: relative;
  min-height: 20rem;

  .h1 {
    font-size: 3rem;
    line-height: 1;
  }
}
.circle {
  position: absolute;
  font-size: 12rem;
  top: 2rem;
  left: 8rem;
  z-index: -1;
  opacity: 0.4;
}
.char1,
.char2,
.char3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 8rem;
  height: 8rem;
  display: inline-block;

  svg {
    height: 100%;
    width: 100%;
  }
}

.char1 {
  top: 8rem;
  left: 14rem;
  z-index: 2;
}

.char2 {
  top: 7rem;
  left: 12rem;
}
.char3 {
  top: 8rem;
  left: 9rem;
}

@media (min-width: 36em){
  .example {
    margin-top: 3rem;
  }
  .circle {
    top: -2rem;
    left: 12rem;
    font-size: 13rem;
  }
  .char1,
  .char2,
  .char3 {
    width: 9rem;
    height: 9rem;
  }
  .char1 {
    top: 3.5rem;
    left: 18.5rem;
    z-index: 2;
  }
  .char2 {
    top: 2.5rem;
    left: 16rem;
  }
  .char3 {
    top: 3.5rem;
    left: 13rem;
  }
}
@media (min-width: 62em){
  .example {
    transform: scale(2);
    transform-origin: 0 0;
    min-height: 30rem;
  }
}
</style>
