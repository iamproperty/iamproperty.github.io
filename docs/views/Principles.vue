<script setup>
  import Card from '@/components/Card/Card.vue';
  import cardImg from '../img/cardImg.png';

</script>
<template>
  <main>
    <h1 class="text-center">Design for our Customers</h1>
    <strong class="text-center text-primary pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al.</strong>

    <div class="container visualtest colour-block bg-info gradient-primary">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none g-10">
        <div class="col bg-white p-4 rounded shadow ">
          <span class="pb-3 d-block text-uppercase">Intuitive</span>
          <a href="/client-onbaording">
            <Card>Make it intuitive</Card>
          </a>
        </div>

        <div class="col bg-white p-4 rounded shadow">
          <span class="pb-3 d-block text-uppercase">Empowering</span>
          <a href="/client-onbaording">
            <Card class="hover">Make it empowering</Card>
          </a>
        </div>

        <div class="col bg-white p-4 rounded shadow">
          <span class="pb-3 d-block text-uppercase">Delightful</span>
          <a href="/client-onbaording">
            <Card class="active">Make it Delightful</Card>
          </a>
        </div>
      </div>
    </div>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="hover"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="active"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>
      </div>
    </div>

    

    
    <!-- <ul>
      <li class="pb-3">
        <strong class="text-primary d-block">Relative units:</strong> Keeping units relative means they can react and
        respond to their environment making them more flexibile and durable.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">Variables and components:</strong> Reduce the amount of repetition and
        improve maintainability by using variables whenever something is used more than once.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">'Mobile' first:</strong> Design and build with the smallest standard
        viewport in mind first then introduce complexity to larger viewports.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">HTML first:</strong> Use standard functionality that comes free with modern
        web browsers and only use JavaScript to progressively enhance.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">Accessible for all:</strong> Make sure that we do
        <strong>not</strong> prevent anybody from getting the most out of our systems and sites. Use tools like
        <a href="https://wave.webaim.org/" title="WAVE Web Accessibility Evaluation Tool">WAVE</a>
        and automation testing to evaluate accessibility regularly.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">Server friendly:</strong> Limit the number of calls to the serer of your
        application. Concatenate files where appropriate, only make ajax calls that would produce new valid information
        and lazy load assets.
      </li>
    </ul> -->
  </main>
</template>
