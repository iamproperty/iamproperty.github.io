<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import DarkMode from '../../../src/components/DarkMode/DarkMode.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg">
      <h1>Dark mode switch</h1>
    </DSHeader>

    <h2>Switch as an element</h2>
    <p>
      This option uses just the pages CSS to swap out the colour variables. The main positive here is the lack of
      JavaScript and quickness to add. This option is good when combined with other logic to maintain the preferences.
    </p>
    <label class="toggle"><input type="checkbox" name="dark-mode" />Dark mode</label>

    <h2 class="mt-5">Upgrade to a component</h2>

    <p>
      The benefits of upgrading to component is the ability to take advantage of local storage to remember the user
      preferences. There is also the chance to add extra CSS and JS to expand the features of the switch.
    </p>

    <div class="visualtest">
      <DarkMode class="d-block mb-4"
        ><label class="toggle"><input type="checkbox" name="dark-mode" />Dark mode</label></DarkMode
      >
    </div>
  </main>
</template>
