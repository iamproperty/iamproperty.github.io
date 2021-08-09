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
    <div class="container pb-5 pt-3">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Foundations</h2>
              <p class="card-text">Core variables and principles that are used through out the framework.</p>
              <router-link to="/foundations" class="btn btn-secondary">Foundations</router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Elements</h2>
              <p class="card-text">Small re-usable parts that are commonly used within components.</p>
              <router-link to="/elements" class="btn btn-secondary">Elements</router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Components</h2>
              <p class="card-text">Configurable re-usable parts that build up a page.</p>
              <router-link to="/components" class="btn btn-secondary">Components</router-link>
            </div>
          </div>
        </div>
      </div>
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
