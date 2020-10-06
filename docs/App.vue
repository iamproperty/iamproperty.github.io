<template>
  <div id="app">
    <header class="d-flex align-items-center justify-content-between">
        <div class="d-flex logo-section align-items-center">
          <img src="@/assets/img/logo.png" alt="I Am Property" width="" height="120" />
          <span> Style Library</span>
        </div>
        <div id="nav" class="justify-content-between">
          <router-link to="/">Foundations</router-link> |
          <router-link :class="{'router-link-sub-active': subIsActive('/components')}" to="/components">Components</router-link>
        </div>
    </header>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    subIsActive (input) {
      const paths = Array.isArray(input) ? input : [input]
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0 // current path starts with this path string
      })
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/_variables.scss";

#app {
  font-family: 'qanelasmedium', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000;
}

#nav a.router-link-exact-active, #nav .router-link-sub-active {
  color: $punchy-mustard;
}
</style>
