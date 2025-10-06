<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Input from '@/components/Input/Input.vue';
  import Readme from '@/components/Input/README.md';
  import Slider from '@/components/Slider/Slider.vue';

  const message = 'input field value';
  const htmlUsage = `...`;
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Form range fields</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">Form range fields allow users to make selections from a range of values.</p>
    </div>
    <div class="container visualtest">
      <label>Input field label <input type="range" min="0" max="100" value="15" step="5" /></label>
    </div>

    <div class="container">
      <h2>Slider component</h2>
      <p>
        The basic styles and behaviour of the range field can be upgraded by using the design system slider component.
      </p>
      <a href="/components/slider" class="btn btn-primary">Slider component</a>
    </div>
  </main>
</template>
