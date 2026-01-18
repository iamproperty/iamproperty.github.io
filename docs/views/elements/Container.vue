<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/elements">Elements</a></li>
      </ul>
      <h1>Container</h1>
      <p>
        Containers are a fundamental building block that contain, pad, and align your content within a given device or
        viewport.
      </p>

      <h2>Basic container</h2>
      <p>
        Our containers are simpler than the standard
        <a href="https://getbootstrap.com/docs/5.0/layout/containers/">bootstrap container</a> with less breakpoints.
        Padding is uniformed with a small bit of padding bottom added to help with the vertical rythm of the site. It's
        recommended to break up the content of the site into relevant containers and not to use a single page container.
      </p>
    </div>
    <div class="container container-example mb-5 visualtest">
      <div class="contents d-flex justify-content-center align-items-center">
        <span class="h5 mb-0 pb-0">Content</span>
      </div>
    </div>

    <div class="container">
      <h3>Container inside of a container</h3>
      <p>
        CSS rules have been created to prevent layouts to break when adding a container into another container; stopping
        too much padding being applied.
      </p>
      <h3>Backgrounds</h3>
      <p>
        Our theme colours can be applied the containers using a class looking like
        <strong>.bg-primary</strong>, making the container stand out more. Extra padding is then applied to container so
        the the content isn't squashed into the background. We also need to add some extra padding to the container that
        follows it so that there isn't any overlap and its clear that the next bit of content is seperate.
      </p>
    </div>
    <div class="container container-example bg-secondary visualtest">
      <div class="contents d-flex justify-content-center align-items-center">
        <span class="h5 mb-0 pb-0">Content</span>
      </div>
    </div>
    <div class="container container-example visualtest">
      <div class="contents d-flex justify-content-center align-items-center">
        <span class="h5 mb-0 pb-0">Content of the next div</span>
      </div>
    </div>
    <div class="container bg-primary container-example mb-5 visualtest">
      <div class="contents bg-contents d-flex justify-content-center align-items-center">
        <span class="h5 mb-0 pb-0">Content of the next div</span>
      </div>
    </div>
    
    
  </main>
</template>

<style lang="scss" scoped>
  @use '../../../assets/sass/_func.scss' as *;

  .container-example {

    aspect-ratio: 3 / 1;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    border: 1px dashed black;

    .contents {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      border: 1px dashed black;
    }
  }

</style>
