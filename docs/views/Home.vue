<template>
  <main>
    <Header title="Design system <span class='text-nowrap'>& framework</span>" :image="require('../assets/code.jpeg')">
      <p>The single source of truth which groups all the elements that will allow the iam property team to design, realize and develop great products.</p>
    </Header>
    <div class="container pb-5 pt-3">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Foundations</h2>
              <p class="card-text">Core variables and principles that are used through out the framework.</p>
              <router-link to="/foundations" class="btn btn-secondary">Find out more<span class="visually-hidden"> about foundations</span></router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Elements</h2>
              <p class="card-text">Small re-usable parts that are commonly used within components.</p>
              <router-link to="/elements" class="btn btn-secondary">Find out more<span class="visually-hidden"> about elements</span></router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Components</h2>
              <p class="card-text">Configurable re-usable parts that build up a page.</p>
              <router-link to="/components" class="btn btn-secondary">Find out more<span class="visually-hidden"> about components</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
