import { createApp } from 'vue';
import App from './App.vue';
import Standalone from './Standalone.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import audit from '../audit.json';
import benchmark from '../benchmark.json';
import nfrs from '../nfrs-data.json';

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


// Global vars
export const shared = {
  audit: audit,
  benchmark: benchmark,
  nfrs: nfrs
};

let template =
  window.location.pathname.startsWith('/standalone') || window.location.pathname.startsWith('/prototype')
    ? Standalone
    : App;

// Create app
let app = createApp(template);
app.config.globalProperties.$shared = shared;
app.use(router).mount('#app');



/*
const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (hasDarkPreference) {
  document.documentElement.className = 'dark-theme';
} else {
  document.documentElement.className = 'light-theme';
}
*/
