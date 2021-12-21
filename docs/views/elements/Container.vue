<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/elements">Elements</a></li>
      </ul>
      <h1>Container</h1>
      <p>Containers are a fundamental building block that contain, pad, and align your content within a given device or viewport.</p>
    </div>
    <div class="container visualtest">
      <h2>Basic container</h2>
      <p>Our containers are simpler than the standard <a href="https://getbootstrap.com/docs/5.0/layout/containers/">bootstrap container</a> with less breakpoints. Padding is uniformed with a small bit of padding bottom added to help with the vertical rythm of the site. It's recommended to break up the content of the site into relevant containers and not to use a single page container.</p>
      <span class="h5 mb-0 pb-0">Outer container</span>
      <div class="container-example mb-5">
        <div class="contents d-flex justify-content-center align-items-center"><span class="h5 mb-0 pb-0">Content</span></div>
      </div>
      <h3>Container inside of a container</h3>
      <p>CSS rules have been created to prevent layouts to break when adding a container into another container; stopping too much padding being applied.</p>
      <h3>Backgrounds</h3>
      <p>Our theme colours can be applied the containers using a class looking like <strong>.bg-primary</strong>, making the container stand out more. Extra padding is then applied to container so the the content isn't squashed into the background. We also need to add some extra padding to the container that follows it so that there isn't any overlap and its clear that the next bit of content is seperate.</p>
      <span class="h5 mb-0 pb-0">Outer container</span>
      <div class="container container-example bg-secondary">
        <div class="contents d-flex justify-content-center align-items-center"><span class="h5 mb-0 pb-0">Content</span></div>
      </div>
      <div class="container container-example mb-5">
        <div class="contents d-flex justify-content-center align-items-center"><span class="h5 mb-0 pb-0">Content of the next div</span></div>
      </div>
      
    </div>

    <div class="container">
      <h2>Circle patterns</h2>
      <p>Circles can be added to the container element and they will automatically be positioned depending upon the container class.</p>
    </div>
    <div class="container circle-pattern bg-dark visualtest overflow-hidden">
      <span class="h2 text-center mx-auto">Default pattern</span>
      <span class="circle circle--stripe text-light opacity-50"></span>
      <span class="circle circle--cross text-white opacity-75"></span>
    </div>
    <div class="container circle-pattern-2 bg-light visualtest overflow-hidden">
      <span class="h2 text-center mx-auto">Pattern 2</span>
      <p class="text-center mx-auto">Add <strong>.circle-pattern-2</strong> class to the container.</p>
      <span class="circle circle--stripe text-dark"></span>
      <span class="circle circle--cross text-white"></span>
    </div>

    <div class="container visualtest">
      <h2>Curved backgrounds</h2>
      <p>A curve can be added to the <strong>top</strong> of a container by adding a modfiying class like <strong>.container--curve</strong>. The container above will need to have enough padding added to the bottom to deal with the overlap, a <strong>.container--curve-below</strong> class can be used in this case.</p>

      <p>The curve is created via a clip-path meaning that any background colours, gradients and even background images can still be used.</p>

    </div>

    <div class="container container--curve-below bg-light visualtest">
      <span class="h2 text-center mx-auto">No curve</span>
      <p class="text-center mx-auto">No curve but has <strong>.container--curve-below</strong> class to make sure it has enough padding at the bottom to prevent overlap.</p>
    </div>


    <div class="container container--curve-below bg-info gradient-secondary gradient-direction-left visualtest container--curve">
      <span class="h2 text-center mx-auto">.container--curve</span>
      <p class="text-center mx-auto">Default curve</p>
    </div>

    <div class="container container--curve-below bg-warning gradient-direction-left visualtest container--curve--right">
      <span class="h2 text-center mx-auto">.container--curve--right</span>
      <p class="text-center mx-auto">Curve up on the right</p>
    </div>

    <div class="container container--curve-below bg-danger visualtest container--curve--up">
      <span class="h2 text-center mx-auto">.container--curve--up</span>
      <p class="text-center mx-auto">Curve up in the middle</p>
    </div>
    <div class="container container--curve-below bg-primary visualtest container--curve--down">
      <span class="h2 text-center mx-auto">.container--down</span>
      <p class="text-center mx-auto">Curve down in the middle</p>
    </div>


  </main>
</template>

<style lang="scss" scoped>
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/accordion.scss";


.container-example {
  width: calc(100% + #{rem($container-padding-x)} + #{rem($container-padding-x)});
  margin-left: -#{rem($container-padding-x)};
  margin-right: -#{rem($container-padding-x)};
  aspect-ratio: 3 / 1;
  background: rgba(0,0,0,0.2);
  display: flex;padding: var(--container-padding-top) var(--container-padding-x) var(--container-padding-bottom) var(--container-padding-x);

  border: 1px dashed black;

  @include media-breakpoint-up(md) {
    width: calc(100% + #{rem($container-padding-x-md)} + #{rem($container-padding-x-md)});
    margin-left: -#{rem($container-padding-x-md)};
    margin-right: -#{rem($container-padding-x-md)};
  }
  

  .contents {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    border: 1px dashed black;
  }
}


[class*="circle-pattern"] {
  min-height: 40rem;
}

</style>