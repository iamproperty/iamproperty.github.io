import { createApp } from 'vue';
import App from './App.vue';
import Standalone from './Standalone.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import audit from '../audit.json';
import benchmark from '../benchmark.json';

if (import.meta.env.DEV) document.body.setAttribute('data-ext-location', '');

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle && typeof nearestWithTitle.meta.title === 'string') {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = 'IAM Key Design system and framework';
  }

  next();
});

router.afterEach((to, from) => {
  let navbar = document.querySelector('iam-nav');
  if (navbar) {
    const closeRequest = new CustomEvent('request-close');
    navbar.dispatchEvent(closeRequest);
  }
  setTimeout(function () {
    document.querySelectorAll('pre code:not(.hljs)').forEach((el) => {
      if (typeof hljs === 'object') hljs.highlightElement(el);
    });
  }, 1000);
});

import cssVars from './assets/data.module.scss';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

// Filters the CSS vars object to pull out the theme colours
const themeColours = Object.keys(cssVars).reduce((arr, key) => {
  if (key.startsWith('themeColour_')) {
    let updateKey = key.replace('themeColour_', '');
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1);
    arr[updateKey] = cssVars[key];
  }
  return arr;
}, {});

const secondaryColours = { ...themeColours };
delete secondaryColours['Primary'];
delete secondaryColours['Secondary'];
delete secondaryColours['Warning'];
delete secondaryColours['Canvas'];
delete secondaryColours['Light'];
delete secondaryColours['White'];

// Filters the CSS vars object to pull out the non-theme colours
const nonThemeColours = Object.keys(cssVars).reduce(function (arr, key) {
  if (key.startsWith('nonThemeColour_')) {
    let updateKey = key.replace('nonThemeColour_', '');
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1);
    arr[updateKey] = cssVars[key];
  }
  return arr;
}, {});

const extendedColours = { ...nonThemeColours };
delete extendedColours['Muted'];
delete extendedColours['Body'];

// Filters the CSS vars object to pull out the non-theme colours
const darkModeColours = Object.keys(cssVars).reduce(function (arr, key) {
  if (key.startsWith('darkModeColour_') || key.startsWith('darkModeFunctionalColour_')) {
    let updateKey = key.replace('darkModeColour_', '').replace('darkModeFunctionalColour_', '');
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1);
    arr[updateKey] = cssVars[key];
  }
  return arr;
}, {});

// Wider colours
const widerColours = Object.keys(cssVars).reduce(function (arr, key) {
  if (key.startsWith('widerColour_')) {
    let updateKey = key.replace('widerColour_', '');
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1);
    arr[updateKey] = cssVars[key];
  }
  return arr;
}, {});
const widerColoursHover = Object.keys(cssVars).reduce(function (arr, key) {
  if (key.startsWith('widerColourHover_')) {
    let updateKey = key.replace('widerColourHover_', '');
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1);
    arr[updateKey] = cssVars[key];
  }
  return arr;
}, {});
const widerColoursActive = Object.keys(cssVars).reduce(function (arr, key) {
  if (key.startsWith('widerColourActive_')) {
    let updateKey = key.replace('widerColourActive_', '');
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1);
    arr[updateKey] = cssVars[key];
  }
  return arr;
}, {});
//const widerColours = {...widerColours};

// Filters the CSS vars object to pull out the aspect ratios
const aspectRatios = Object.keys(cssVars).reduce(function (arr, key) {
  if (key.startsWith('aspect-ratio_')) {
    let updateKey = key.replace('aspect-ratio_', '');
    updateKey = updateKey.charAt(0).toUpperCase() + updateKey.slice(1);
    arr[updateKey] = cssVars[key];
  }
  return arr;
}, {});

// Global vars
export const shared = {
  themeColours: themeColours,
  secondaryColours: secondaryColours,
  nonThemeColours: nonThemeColours,
  extendedColours: extendedColours,
  darkModeColours: darkModeColours,
  widerColours: widerColours,
  widerColoursHover: widerColoursHover,
  widerColoursActive: widerColoursActive,
  aspectRatios: aspectRatios,
  cssVars: cssVars,
  audit: audit,
  benchmark: benchmark,
};

let template =
  window.location.pathname.startsWith('/standalone') || window.location.pathname.startsWith('/prototype')
    ? Standalone
    : App;

// Create app
let app = createApp(template);
app.config.globalProperties.$shared = shared;
app.use(router).mount('#app');

const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (hasDarkPreference) {
  document.documentElement.className = 'dark-theme';
} else {
  document.documentElement.className = 'light-theme';
}
