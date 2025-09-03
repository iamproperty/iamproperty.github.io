<script setup>
  import Testimonial from '@/components/Testimonial/Testimonial.vue';
  import Readme from '@/components/Testimonial/README.md';

  const items = [
    {
      cite: 'Name goes here',
      quote: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`,
      image: '/shutterstock_1229155495.webp',
    },
    {
      cite: 'Name goes here 2',
      quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>`,
      image: '/code.jpeg',
    },
    {
      cite: 'Name goes here 3',
      quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>`,
      class: 'largest',
      image: '/shutterstock_1229155495.webp',
    },
  ];

  const htmlUsage = `<div data-show="1" class="container testimonial mb-5">
  <div class="bg-light">
    <div class="row">
      <div class="col-md-5 position-relative">
        <div class="testimonial__images">
          <img src="/img/shutterstock_1229155495.f3b0401e.webp" alt="" class="h-100 w-100 object-cover">
          <img src="/img/code.caeba43b.jpeg" alt="" class="h-100 w-100 object-cover">
          <img src="/img/shutterstock_1229155495.f3b0401e.webp" alt="" class="h-100 w-100 object-cover">
        </div>
        <div class="testimonial__controls">
          <button data-go="0" disabled="disabled" class="testimonial__prev">Previous</button>
          <button data-go="2" class="testimonial__next">Next</button>
        </div>
      </div>
      <div class="col-md-7">
        <h2>What our customers think…</h2>
        <div class="testimonial__content">
          <blockquote><div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div><cite>Name goes here</cite></blockquote>
          <blockquote><div><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p></div><cite>Name goes here 2</cite></blockquote>
          <blockquote class="largest"><div><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p></div><cite>Name goes here 3</cite></blockquote>
        </div>
        <div class="testimonial__after">
          <a href="/buying-stories" class="btn">Buying stories</a>
          <a href="/selling-stories" class="btn">Selling stories</a>
        </div>
      </div>
    </div>
    <span class="circle circle--dots d-none d-md-block"></span>
  </div>
</div>`;
</script>

<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Testimonial</h1>
      <p>
        Customer testimonials help build trust as people tend to trust other consumers over businesses, and for good
        reason.
      </p>
    </div>

    <Testimonial :items="items" class="visualtest">
      <a href="/buying-stories" class="btn d-block d-sm-inline-block">Buying stories</a>
      <a href="/selling-stories" class="btn d-block d-sm-inline-block">Selling stories</a>
    </Testimonial>

    <div class="container">
      <p class="note">
        <strong>Note: </strong>The largest blockquote needs to have the class of 'largest' assigned to it so that on
        desktop we can reserve the correct amount of space. Stopping the testimonial component resizing.
      </p>
      <h2>HTML code example</h2>
      <pre><code class="language-html">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Vue Header component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>
