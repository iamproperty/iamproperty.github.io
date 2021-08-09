<template>
  <main>
    <div class="header">
      <div class="container">
        <div class="header__inner">
          <h1>Design system <span class="text-nowrap">& framework</span></h1>
          <p>The single source of truth which groups all the elements that will allow the iam property team to design, realize and develop great products.</p>
        </div>
      </div>
      <img src="../assets/code.jpeg" alt="" />
    </div>
    <div class="container">
      <ul class="list-unstyled">
        <li><router-link to="/foundations">Foundations</router-link></li>
        <li><router-link to="/elements">Elements</router-link></li>
        <li><router-link to="/components">Components</router-link></li>
        <li><router-link to="/patterns">Patterns</router-link></li>
      </ul>
    </div>
  </main>
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
