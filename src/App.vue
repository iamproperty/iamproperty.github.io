<template>
  <div id="app">
    <header class="d-flex align-items-center justify-content-between">
        <div class="d-flex logo-section align-items-center">
          <img src="@/assets/img/logo.png" alt="I Am Property" width="" height="120" />
          <span> Style Library</span>
        </div>
        <div id="nav" class="justify-content-between">
          <router-link to="/">Foundations</router-link> |
          <router-link to="/components">Components</router-link>
        </div>
    </header>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">

$deep-slate: #00313C;
$soft-green: /*#b4e6a5*/ #9CCD86;
$homely-aubergine: #46003C;
$soft-pink: #ffd2d2;
$grey-70: #6f6f6f;
$grey-50: #9d9d9d;
$fresh-blue: #1ebee6;
$punchy-mustard: #ffa500;

$body-font: 'qanelasmedium';
$body-font-size: 1.8rem;
$header-font: 'qanelas_softextrabold';
$body-font-color: #111;

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

#nav a.router-link-exact-active {
  color: $punchy-mustard;
}
</style>
