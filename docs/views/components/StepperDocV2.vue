<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import anatomy from '../../img/stepper/stepper-anotomy.png';
  import behaviourOne from '../../img/stepper/stepper-behaviour-1.png';
  import behaviourTwo from '../../img/stepper/stepper-behaviour-2.png';
  import horizontalDimensions from '../../img/stepper/stepper-horizontal-dimensions.png';
  import verticalDimensions from '../../img/stepper/stepper-vertical-dimensions.png';
  import mobileAnatomy from '../../img/stepper/mobile-stepper-anatomy.png';
  import mobileBehaviourOne from '../../img/stepper/mobile-stepper-behaviour-1.png';
  import mobileBehaviourTwo from '../../img/stepper/mobile-stepper-behaviour-2.png';
  import mobileDimensions from '../../img/stepper/mobile-stepper-dimensions.png';

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Stepper</h1>
    </DSHeader>
    <div class="container">
      <p>
        Steppers are used in multi stage forms to show the user the number of steps they need to take to complete a
        process, and how far they are through that process.
      </p>
    </div>
    <div class="container">
      <h2>Horizontal stepper</h2>
      <p>The horizontal stepper should be used on desktop, appearing above content.</p>
      <h3>Stepper anatomy</h3>
      <img :src="anatomy" class="mb-3" />
      <div class="container mt-4">
        <ol class="mb-5">
          <li>Step number (Colour coded)</li>
          <li>Join bar</li>
          <li>Step title</li>
        </ol>
      </div>
      <div class="container">
        <h3>Behaviour</h3>
        <p class="mb-3">
          Step number states differ depending on form progress to help users understand where they are in the process of
          completion.
        </p>
        <img :src="behaviourOne" class="mb-3" />
        <p class="mb-3">The current step is show in a solid blue, with proceeding steps shown as an outline.</p>
        <img :src="behaviourTwo" class="mb-3" />
      </div>
    </div>
    <div class="container">
      <p class="mb-3">Once completed a step is shown in green and the current step state moves to the next step.</p>
      <ol class="d-flex gap-5 justify-content-center list-unstyled">
        <li class="pe-4">Step not started</li>
        <li class="px-5">Current Step</li>
        <li class="ps-4">Step Completed</li>
      </ol>
      <ol class="list--steps">
        <li class=""></li>
        <li class="step--current"></li>
        <li class="step--complete"></li>
      </ol>
      <ol class="list--steps">
        <li class="">Form Step Title</li>
        <li class="step--current">Form Step Title</li>
        <li class="step--complete">Form Step Title</li>
      </ol>
    </div>
    <div class="container">
      <p class="mb-3">
        A complete stepper component should have no more than seven steps. If a form comprises of only one step we do
        not use a stepper.
      </p>
      <ol class="list--steps">
        <li class="step--current">Form Step Title</li>
        <li>Form Step Title</li>
      </ol>
      <ol class="list--steps">
        <li class="step--current">Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
      </ol>
      <ol class="list--steps">
        <li class="step--current">Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
      </ol>
      <ol class="list--steps">
        <li class="step--current">Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
      </ol>
      <ol class="list--steps">
        <li class="step--current">Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
      </ol>
      <ol class="list--steps">
        <li class="step--current">Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
        <li>Form Step Title</li>
      </ol>
    </div>
    <div class="container">
      <h4 class="my-4">Dimensions</h4>
      <img :src="horizontalDimensions" class="mb-3" />
    </div>
    <div class="container">
      <h2>Vertical Stepper</h2>
      <p>
        An alternative to the horizontal stepper, the vertical stepper should be used on desktop, appearing to the right
        side of content.
      </p>
      <div class="container">
        <ol class="list--steps-vertical">
          <li class="step--current">Form Step Title</li>
          <li>Form Step Title</li>
          <li>Form Step Title</li>
          <li>Form Step Title</li>
          <li>Form Step Title</li>
          <li>Form Step Title</li>
          <li>Form Step Title</li>
        </ol>
      </div>
      <div class="container">
        <h4 class="my-4">Dimensions</h4>
        <img :src="verticalDimensions" class="mb-3" />
      </div>
    </div>
    <div class="container">
      <h2>Mobile stepper</h2>
      <p>The horizontal stepper should be used on desktop.</p>
      <h3>Mobile stepper anatomy</h3>
      <img :src="mobileAnatomy" class="mb-3" />
      <ol>
        <li>Step number (Colour coded)</li>
        <li>Step title</li>
      </ol>
      <div class="container my-4">
        <h3>Mobile Behaviour</h3>
        <p class="mb-3">
          Mobile behaviour sees modifications to the display of the step title and the removal of the join bar in an
          effort to make more efficient use of available space.
        </p>
        <div class="container d-flex">
          <div class="container">
            <img :src="mobileBehaviourOne" class="mb-3" />
            <p class="mb-3 w-auto" style="max-width: 450px">
              The current step is show in a solid blue, with proceeding steps shown as an outline. Only the title for
              the current step is shown.
            </p>
          </div>
          <div class="container">
            <img :src="mobileBehaviourTwo" class="mb-3" />
            <p class="mb-3" style="max-width: 450px">
              Once completed a step is shown in green and the current step state moves to the next step. Only the title
              for the current step is shown.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <h4 class="mb-2">Dimensions</h4>
        <img :src="mobileDimensions" class="mb-5" />
      </div>
    </div>
    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control:</th>
              <th>Date of design update:</th>
              <th>Notable updates:</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>V1 added</td>
              <td>11.02.2025</td>
              <td>Collation of different stepper variants, creation of Figma components</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

