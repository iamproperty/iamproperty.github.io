import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import VueHighlightJS from 'vue-highlightjs'

import navbar from '../assets/js/modules/navbar'

navbar()

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import cssVars from './assets/styles.scss'

Vue.use(BootstrapVue)
Vue.use(VueHighlightJS)

// Filters the CSS vars object to pull out the theme colours
const themeColours = Object.keys(cssVars).reduce(function (arr, key) {
  if (key.startsWith('themeColour-')) {
    let updateKey = key.replace('themeColour-', '')
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1)
    arr[updateKey] = cssVars[key]
  }
  return arr
}, {})

// Filters the CSS vars object to pull out the non-theme colours
const nonThemeColours = Object.keys(cssVars).reduce(function (arr, key) {
  if (key.startsWith('nonThemeColour-')) {
    let updateKey = key.replace('nonThemeColour-', '')
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1)
    arr[updateKey] = cssVars[key]
  }
  return arr
}, {})

import audit from '../audit.json';

const shared = {
  themeColours: themeColours,
  nonThemeColours: nonThemeColours,
  cssVars: cssVars,
  audit: audit
}

shared.install = function () {
  Object.defineProperty(Vue.prototype, '$shared', {
    get () { return shared }
  })
}

Vue.use(shared)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
