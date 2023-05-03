import { createApp } from 'vue'
import App from './App.vue'
import Standalone from './Standalone.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import audit from '../audit.json';
import * as helpers from '../assets/ts/modules/helpers'


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle && typeof(nearestWithTitle.meta.title) === "string") {
    document.title = nearestWithTitle.meta.title
  } else {
    document.title = "IAM Key Design system and framework"
  }

  next()
})

router.afterEach((to, from) => {

  setTimeout(function(){

    document.querySelectorAll('pre code:not(.hljs)').forEach((el) => {

      if(typeof(hljs) === "object")
        hljs.highlightElement(el);
    });
  }, 1000);
});

import cssVars from './assets/data.module.scss'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

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

// Filters the CSS vars object to pull out the aspect ratios
const aspectRatios = Object.keys(cssVars).reduce(function (arr, key) {
  if (key.startsWith('aspect-ratio-')) {
    let updateKey = key.replace('aspect-ratio-', '')
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1)
    arr[updateKey] = cssVars[key]
  }
  return arr
}, {})

// Global vars
export const shared = {
  themeColours: themeColours,
  nonThemeColours: nonThemeColours,
  aspectRatios: aspectRatios,
  cssVars: cssVars,
  audit: audit
}


let template = window.location.pathname.startsWith('/standalone') || window.location.pathname.startsWith('/prototype') ? Standalone : App;


// Create app
let app = createApp(template)
app.config.globalProperties.$shared = shared;
app.use(router).mount('#app')



// Global stuff
helpers.addBodyClasses(document.body);
helpers.addGlobalEvents(document.body);
helpers.checkElements(document.body);