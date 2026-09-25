<script lang="ts" setup>
import { createApp, ref, onMounted, watch } from 'vue';


import STDNav from '@/components/STDNav/STDNav.vue';
import Nav from '@/components/Nav/Nav.vue';
import Modal from '@/components/Modal/Modal.vue';


import Questions from './components/Questions.vue';
import Properties from './components/Properties.vue';

import Notification from '@/components/Notification/Notification.vue';

import Task from './components/Task.vue';

import { useRoute } from 'vue-router';


const iframeTable = ref();
const addTaskDialog = ref();
const panel = ref();
const componentHeight = ref('100vh');

const question = ref('');
const search = ref('');

const questionTitle = ref();


const route = useRoute();
const insight = ref(route.params.insight);

const insightTitle = ref('');
const dashboards = ref([]);

const insightActions = ref([]);
const insightCriteriaMatch = ref('');


const tasks = ref([]);
const currentTaskIndex = ref(0);
const inlineAddedTask = ref({});
const addedTask = ref({});
const addedTaskCTA = ref('');

let insightIframeSource;

const postInsightCompleted = (action) => {
  console.log(action);

  if(insightIframeSource && insightIframeSource.postMessage) {
    insightIframeSource.postMessage(
      {
        type: "insight-action-completed",
        detail: {
          action: action,
          result: {
            success: true,
            message: 'Action completed successfully'
          }
        }
      },
      "*"
    );
  }
};

watch(
  () => route.params.insight,
  (newId, oldId) => {
    insight.value = newId;
  }
);

onMounted(async () => {

  window.addEventListener("message", (event) => {

    console.log(event.source);

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

      const panelHeight = questionTitle.value.offsetHeight + message.detail.height + 20 + 30;
      componentHeight.value = `${panelHeight}px`;

      const insightConfig = {
        actions: insightActions.value,
        criteria: insightCriteriaMatch.value
      };

      if(event && event.source && event.source.postMessage) {
        event.source.postMessage(
          {
            type: "top-window-details",
            detail: {
              class: "inside-hub",
              ...JSON.parse(JSON.stringify(insightConfig))
            }
          },
          "*"
        );
      }
    }

    if (message.type == "insight-action") {

      // Do the action and pass back the result to the iframe
      if(event && event.source && event.source.postMessage) {

        insightIframeSource = event.source; // cache the event source for later use so we can post back the result of the action at a later time i.e. after a fetch request has completed

        if(message.detail.action === 'export-table-data') {
          exportTableData(message.detail.properties);
          setTimeout(() => { // delay the post message to allow the download to complete before the iframe update the UI
            postInsightCompleted(message.detail.action);
          }, 1000);
        }
        else if(message.detail.action === 'create-print-campaign') {

          // TODO: Create print campaign in CRM via API and return the result to the iframe
          postInsightCompleted(message.detail.action);
        }
        else if(message.detail.action === 'create-task') {

          currentTaskIndex.value = 0;
          tasks.value = [...message.detail.properties];
          inlineAddedTask.value = {};
          addedTask.value = {};
          addTaskDialog.value.showModal();
        }

      }




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

  insightActions.value = selectedDashboard?.actions ?? [];

  insightActions.value = checkCRMAccess(insightActions.value);


  insightCriteriaMatch.value = selectedDashboard?.criteria ?? '';
});

const exportTableData = (data) => {

  const csvData = [];

  csvData.push(Object.keys(data[0].columns).join(','));

  data.forEach((row) => {

    csvData.push(Object.values(row.columns).join(','));
  });

  // Combine each row data with new line character
  const csvString = csvData.join('\n');

  // Create CSV file object and feed our csvData into it
  const CSVFile = new Blob([csvString], {
    type: 'text/csv',
  });

  // Create to temporary link to initiate download process
  const tempLink = document.createElement('a');
  tempLink.download = 'export.csv';
  const url = window.URL.createObjectURL(CSVFile);
  tempLink.href = url;

  // This link should not be displayed
  tempLink.style.display = 'none';
  document.body.appendChild(tempLink);

  // Automatically click the link to trigger download
  tempLink.click();
  document.body.removeChild(tempLink);
};

const checkCRMAccess = (actions) => {
/*
  const crmAccess = window?.navigation?.getAttribute('data-product') === 'crm';

  if (!crmAccess) {
    return actions.filter((action) => action.label !== 'Create Task');
  }
*/

  return actions;
};

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

    <div v-if="insight" ref="panel" class="admin-panel" :style="`--componentHeight: ${componentHeight};--componentHeight: 2000px;`">
      <h2 id="hub-question-title" ref="questionTitle" class="bg-primary gradient-info">{{ insightTitle }}</h2>

      <!--<Properties></Properties>-->

      <!--      <iframe
        id="iframeTable"
        ref="iframeTable"
        :title="insightTitle || 'Property insight'"
        src="https://iampropertypbl.cloud.looker.com/embed/dashboards/156?Agent+Name=&Branch+Name=&Property=&theme=hub_embed"
        frameborder="0"
        allowfullscreen
      ></iframe>
      -->
      <iframe
        id="iframeTable"
        ref="iframeTable"
        title="Inline Frame Example"
        src="/properties-insight.html"
        frameborder="0"
        allowfullscreen
      >
      </iframe>


      <div class="iframe-backdrop"></div>
    </div>


    <Notification v-if="addedTask.value" data-type="toast" data-dismiss>
      {{ addedTask.value.columns['Property Short Address'] }}
      <a :href="addedTask.value.cta" target="_blank" rel="noopener noreferrer">View task</a>
    </Notification>

    <dialog id="addTaskDialog" ref="addTaskDialog" aria-labelledby="add-task-title" >
      <Modal data-type="transactional" class="model--md">

        <Notification v-if="inlineAddedTask.value">
          {{ inlineAddedTask.value.columns['Property Short Address'] }}
          <a :href="inlineAddedTask.value.cta" target="_blank" rel="noopener noreferrer">View task</a>
        </Notification>

          <h2 id="add-task-title" class="h3 text-center px-0 mx-auto">Create CRM task <span v-if="tasks.length > 1" class="h4 d-inline">({{ currentTaskIndex + 1 }} of {{ tasks.length }})</span></h2>

          <template v-for="(task, index) in tasks" :key="index">
            <Task
              v-if="index == currentTaskIndex"
              :index="index"
              :total="tasks.length"
              :task="task"
              @previous="currentTaskIndex--"
              @close="() => {addTaskDialog.close(); postInsightCompleted('create-task');}"
              @next="currentTaskIndex++"
              @added="(returnedTask) => {inlineAddedTask.value = returnedTask; console.log(inlineAddedTask.value) }"
              @added-last="(returnedTask) => {addedTask.value = returnedTask; postInsightCompleted('create-task'); console.log(addedTask.value) }"
            />
          </template>

      </Modal>
    </dialog>

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
