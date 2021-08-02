<template>
  <div class="container">
    <ul class="list-unstyled">
      <li><router-link to="/foundations">Foundations</router-link></li>
      <li><router-link to="/elements">Elements</router-link></li>
      <li><router-link to="/components">Components</router-link></li>
      <li><router-link to="/patterns">Patterns</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
