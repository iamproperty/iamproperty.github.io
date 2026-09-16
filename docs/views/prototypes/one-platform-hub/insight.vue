<script lang="ts" setup>
import { createApp, ref, onMounted, watch } from 'vue';


import STDNav from '@/components/STDNav/STDNav.vue';
import Nav from '@/components/Nav/Nav.vue';


import Questions from './components/Questions.vue';
import Properties from './components/Properties.vue';

import { useRoute } from 'vue-router';


const iframeTable = ref();

const panel = ref();
const componentHeight = ref('100vh');

const question = ref('');
const search = ref('');

const questionTitle = ref();


const route = useRoute();
const insight = ref(route.params.insight);

const insightTitle = ref('');
const dashboards = ref([]);



watch(
  () => route.params.insight,
  (newId, oldId) => {
    insight.value = newId;
  }
);

onMounted(async () => {

  window.addEventListener("message", (event) => {

    console.log(event);

    if (event.origin !== "https://iampropertypbl.cloud.looker.com") {
      return;
    }

    const message = event.data;

    console.log(message);
    console.log(iframeTable.value.contentWindow.document.body.querySelector('.json-loader'));
  });

  window.addEventListener("message", (event) => {


    const message = event.data;


    if (message.type == "component-loaded") {

      console.log('set height on admin panel and iframe');
      console.log(`${message.detail.height}px`);


      const panelHeight = questionTitle.value.offsetHeight + message.detail.height + 20 + 30;

      componentHeight.value = `${panelHeight}px`;
    }


  });


  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.has('question')); // true

  if (urlParams.has('question')) {
    question.value = urlParams.get('question');
  }

  window.navigation.addEventListener('navigate', (event) => {
    const urlParams = new URLSearchParams(new URL(event.destination.url).search);

    if (urlParams.has('question')) {
      question.value = urlParams.get('question');
    }
  });

  dashboards.value = await loadDashboards().then(async (data) => {
    if (!data.dashboards) return false;

    return data.dashboards;
  });

  const selectedDashboard = Array.isArray(dashboards.value)
    ? dashboards.value.find((dashboard) => dashboard.slug === insight.value)
    : undefined;
  insightTitle.value = selectedDashboard?.iframeTitle ?? '';
  search.value = selectedDashboard?.suggestionLabel ?? '';
});


const loadDashboards = async (): any => {

  try {
    const response = await fetch('/dashboards.json', {
      method: 'get',
    });

    const json = await response.json();

    const data = json.data ? json.data : json;
    return data;
  } catch (error) {
    if (error?.name === 'AbortError') {
      return true;
    }
    console.log(error);
    return 'There has been a problem. Please try again in a few moments.';
  }
};

</script>
<template>

  <nav>
    <Nav class="nav--btn-compact">

      <a href="/" class="brand brand--property" slot="logo">
        <svg>
          <title>iam key</title>
          <use xlink:href="/svg/logo.svg#logo-property"></use>
        </svg>
      </a>

      <!-- These links will be removed -->
      <a href="/">Lead generation</a>
      <a href="/">Market Appraisals</a>
      <a href="/">Insights</a>
      <a href="/">Onboarding</a>
      <a href="/">CRM</a>
      <a href="/">Action</a>
      <a href="/">Conveyancing</a>

      <STDNav data-sso-subject="one_VzjolCY4CSy2oxaJhmXgmiReJ0sj23gK" data-product="crm"></STDNav>

    </Nav>
  </nav>

  <main>
    <div class="bg-primary full-width questions-container">
      <div class="container">

      </div>

      <Questions v-if="dashboards.length" :insight="insight" :search="search" :dashboards="dashboards" data-sso-subject="one_VzjolCY4CSy2oxaJhmXgmiReJ0sj23gK" data-product="crm"></Questions>
    </div>


    <div v-if="insight" ref="panel" class="admin-panel" :style="`--componentHeight: ${componentHeight};`">
      <h2 id="hub-question-title" ref="questionTitle" class="bg-primary gradient-info">{{ insightTitle }}</h2>

      <!--<Properties></Properties>-->
      <iframe
        id="iframeTable"
        ref="iframeTable"
:title="insightTitle || 'Property insight'"
        src="https://iampropertypbl.cloud.looker.com/embed/dashboards/156?Agent+Name=&Branch+Name=&Property=&theme=hub_embed"
        frameborder="0"
        allowfullscreen
      ></iframe>


      <div class="iframe-backdrop"></div>
    </div>


  </main>


</template>
<style lang="scss" scoped>

.questions-container {
  margin-bottom: 7rem;
  display: grid;
  grid-template-columns: subgrid;
}

.admin-panel {
  height: var(--componentHeight, calc(100vh - 4rem));
  position: relative;
  overflow: hidden;
}

.admin-panel h2 {
  margin-bottom: 0;
}

.admin-panel iframe {
  padding: 0;
  margin-inline: -1.5rem;
  width: calc(100% + 3rem);
  height: 100%;
}

</style>
