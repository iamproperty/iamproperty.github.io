<script lang="ts" setup>
// #region imports
import { createApp, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
// #endregion

// #region Load design system components
import STDNav from '@/components/STDNav/STDNav.vue';
import Nav from '@/components/Nav/Nav.vue';
import Modal from '@/components/Modal/Modal.vue';

import Notification from '@/components/Notification/Notification.vue';
// #endregion

// #region load vue components

import Questions from './components/Questions.vue';
import Task from './components/Task.vue';
// #endregion

// #region types
type InsightTableRow = { columns: Record<string, unknown> };
// #endregion

// #region user

/*
const checkCRMAccess = () => {

  return true;
};
*/

// #endregion
// #region load the selected dashboard and embed it in the page

const route = useRoute();

const dashboards = ref([]);

const insight = ref(route.params.insight);

const iframeSrc = ref('https://iampropertypbl.cloud.looker.com/embed/dashboards/199?Agent+Name=&Branch+Name=&Property=&theme=hub_embed');

// #endregion

// #region question panel
const question = ref('');
const search = ref('');
// #endregion

// #region insight panel
const componentHeight = ref('100vh');

const insightSlug = ref('');
const insightActions = ref([]);
const insightProperties = ref({});
const insightTitle = ref('');

let insightIframeSource: MessageEventSource | null = null;
const postInsightCompleted = (action: string): void => {

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
      { targetOrigin: '*' }
    );
  }
};

const getInsightActions = (insightSlug: string): Record<string, unknown>[] => {

  console.log(insightSlug);
  return [
    {
      "label": "Create Task",
      "action": "create-task"
    },
    {
      "label": "Create Print Campaign",
      "action": "create-print-campaign"
    },
    {
      "label": "Export table data",
      "action": "export-table-data"
    }
  ];
};

const getInsightProperties = (insightSlug: string): Record<string, unknown> => {

  console.log(insightSlug);
  return {
    "class": "inside-hub",
    "title-column": "Property",
    "branch-column": "Branch"
  };
};
// #endregion

// #region actions
const tasks = ref<Record<string, unknown>[]>([]);
const addTaskDialog = ref<HTMLDialogElement | null>(null);

const currentTaskIndex = ref(0);
const inlineAddedTask = ref({});
const addedTask = ref({});
const actionStatus = ref('danger');
const printCampaignCreated = ref(false);

const exportTableData = (data: InsightTableRow[]): void => {

  if (!data.length) return;

  const csvData = [];

  csvData.push(Object.keys(data[0].columns).filter(key => key !== 'Match criteria').join(','));

  data.forEach((row) => {

    csvData.push(Object.keys(row.columns).filter(key => key !== 'Match criteria').map(key => row.columns[key]).join(','));
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
// #endregion






//const iframeSrc = ref('/properties-insight.html');



watch(
  () => route.params.insight,
  (newId, oldId) => {
    insight.value = newId;
  }
);

onMounted(async () => {

  window.addEventListener("message", (event) => {

    const message = event.data;

    if (message.type == "component-loaded") {

      // To do change depending on the specific insight being loaded
      const insightConfig = {
        "actions": insightActions.value.length ? insightActions.value : getInsightActions(insightSlug.value),
        "properties": insightProperties.value && Object.keys(insightProperties.value).length ? insightProperties.value : getInsightProperties(insightSlug.value)
      };

      if (event && event.source) {
        event.source.postMessage(
          {
            type: "top-window-details",
            detail: {
              class: "inside-hub",
              ...JSON.parse(JSON.stringify(insightConfig))
            }
          },
          { targetOrigin: '*' }
        );
      }
    }

    if (message.type == "update-height") {

      const panelHeight = message.detail.height;
      componentHeight.value = `calc(${panelHeight}px + 3.5rem + 50px)`; // add 3.5rem to account for the question title height
    }

    if (message.type == "insight-action") {

      // Do the action and pass back the result to the iframe
      if(event && event.source) {

        insightIframeSource = event.source; // cache the event source for later use so we can post back the result of the action at a later time i.e. after a fetch request has completed

        if(message.detail.action === 'export-table-data') {
          exportTableData(message.detail.properties);
          setTimeout(() => { // delay the post message to allow the download to complete before the iframe update the UI
            postInsightCompleted(message.detail.action);
          }, 1000);
        }
        else if(message.detail.action === 'create-print-campaign') {

          printCampaignCreated.value = true;
          //actionStatus.value = 'success';
          // TODO: Create print campaign in CRM via API and return the result to the iframe
          // Question: What is the action, open up a new page? in a new tab?
          setTimeout(() => { // delay the post message to allow the download to complete before the iframe update the UI
            postInsightCompleted(message.detail.action);
          }, 1000);

          setTimeout(() => {
            printCampaignCreated.value = false;
            actionStatus.value = 'danger';
          }, 5000); // reset the notification after 5 seconds
        }
        else if(message.detail.action === 'create-task') {

          currentTaskIndex.value = 0;
          tasks.value = [...message.detail.properties];
          inlineAddedTask.value = {};
          addedTask.value = {};
          //actionStatus.value = 'success';
          addTaskDialog.value?.showModal();

          setTimeout(() => {
            addedTask.value = {};
            actionStatus.value = 'danger';
          }, 5000); // reset the notification after 5 seconds
        }

      }

    }

    console.log(message);

    if(message.type == "dashboard:run:complete") {

      const layouts = message.dashboard?.options?.layouts;

      console.log(layouts);
    }
  });


  const iframe = document.querySelector("#looker-dashboard");

  iframe.contentWindow.postMessage(
    JSON.stringify({
      type: "dashboard:options:set",
      layouts: [
        {
          id: "YOUR_LAYOUT_ID",
          dashboard_layout_components: [
            {
              id: "YOUR_LAYOUT_COMPONENT_ID",
              dashboard_element_id: "YOUR_TILE_ID",
              height: 12 // Approximately 600px for newspaper layout
            }
          ]
        }
      ]
    }),
    "https://your-instance.looker.com"
  );

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

  insightSlug.value = selectedDashboard?.slug ?? '';
  insightActions.value = selectedDashboard?.actions ?? [];
  insightProperties.value = selectedDashboard?.properties ?? {};

/*
const dashboardIframe = document.querySelector("#looker-dashboard");

const lookerOrigin = "https://iampropertypbl.cloud.looker.com";

// Set this to the origin that sends your custom visualization messages.
// It may differ from the dashboard's origin.
const visualizationOrigin = "https://your-visualization-origin.com";

// The dashboard element ID of your iam-app-insights tile.
const tileId = "123";

let dashboardLayouts;
let requestedHeightRows;
let lastAppliedHeightRows;

function parseMessage(data) {
  if (typeof data !== "string") {
    return data;
  }

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

function applyTileHeight() {
  if (!dashboardLayouts || requestedHeightRows === undefined) {
    return;
  }

  if (requestedHeightRows === lastAppliedHeightRows) {
    return;
  }

  const layouts = structuredClone(dashboardLayouts);
  let foundTile = false;

  for (const layout of layouts) {
    if (layout.active === false) {
      continue;
    }

    for (const component of layout.dashboard_layout_components ?? []) {
      if (String(component.dashboard_element_id) !== String(tileId)) {
        continue;
      }

      // Looker only accepts properties returned in its layout options.
      if (!Object.prototype.hasOwnProperty.call(component, "height")) {
        continue;
      }

      component.height = requestedHeightRows;
      foundTile = true;
    }
  }

  if (!foundTile) {
    return;
  }

  dashboardIframe.contentWindow.postMessage(
    JSON.stringify({
      type: "dashboard:options:set",
      layouts
    }),
    lookerOrigin
  );

  dashboardLayouts = layouts;
  lastAppliedHeightRows = requestedHeightRows;
}

window.addEventListener("message", event => {
  const message = parseMessage(event.data);

  if (!message || typeof message !== "object") {
    return;
  }

  // Capture Looker's layout once the dashboard has finished running.
  if (
    event.origin === lookerOrigin &&
    event.source === dashboardIframe.contentWindow &&
    message.type === "dashboard:run:complete"
  ) {
    const layouts = message.dashboard?.options?.layouts;

    if (Array.isArray(layouts)) {
      dashboardLayouts = layouts;
      lastAppliedHeightRows = undefined;

      // Apply any height request received before the dashboard was ready.
      applyTileHeight();
    }

    return;
  }

  // Receive the pixel height requested by your visualization.
  if (
    event.origin === visualizationOrigin &&
    message.source === "vis" &&
    message.type === "update-height"
  ) {
    const heightPx = Number(message.detail?.heightPx);

    if (!Number.isFinite(heightPx) || heightPx <= 0) {
      return;
    }

    // For a newspaper dashboard layout: approximately 50px per row.
    requestedHeightRows = Math.max(
      1,
      Math.ceil(heightPx / 50)
    );

    applyTileHeight();
  }
});


*/
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

      <div class="iframe__wrapper">

        <!-- loading state to go here -->

        <iframe
          id="looker-dashboard"
          :title="insightTitle || 'Property insight'"
          :src="iframeSrc"
          src="https://iampropertypbl.cloud.looker.com/embed/dashboards/156?Agent+Name=&Branch+Name=&Property=&theme=hub_embed&embed_domain=http://localhost"
          frameborder="0"
          allowfullscreen
        ></iframe>

      </div>

      <div class="iframe-backdrop"></div>
    </div>

    <Notification :data-status="actionStatus" v-if="printCampaignCreated" data-type="toast">
      There was been an error with creating a new print campaign.
    </Notification>

    <Notification :data-status="actionStatus" v-if="addedTask.value" data-type="toast">
      {{(actionStatus == 'success' ? 'Task has been created for' : 'There has been an error with the creating the task for')}} {{ addedTask.value.actionTitle }}
      <a :href="addedTask.value.cta" target="_blank" rel="noopener noreferrer" v-if="actionStatus == 'success'">View task</a>
    </Notification>

    <dialog id="addTaskDialog" ref="addTaskDialog" aria-labelledby="add-task-title" >
      <Modal data-type="transactional" data-icon="" class="modal--lg" data-hide-buttons>

        <Notification :data-status="actionStatus" v-if="inlineAddedTask.value">
          {{(actionStatus == 'success' ? 'Task has been created for' : 'There has been an error with the creating the task for')}} {{ inlineAddedTask.value.actionTitle }}
          <a :href="inlineAddedTask.value.cta" target="_blank" rel="noopener noreferrer" v-if="actionStatus == 'success'">View task</a>
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
  height: 2200px!important; // This height is needed due to the embedded Looker dashboard content being a fixed height

  position: relative;
  overflow: hidden;
  transition: height 0.1s;
  padding-inline: calc(var(--padding-x) - 10px);
}

.admin-panel h2 {
  margin-bottom: 0;
  padding-inline: calc(var(--padding-x) + 10px);
}


.admin-panel iframe {
  padding: 0;
  //margin-inline: -1.5rem;
  width: 100%;
  height: 100%;
  max-height: var(--componentHeight);
}
.admin-panel .iframe__wrapper {
  position: relative;
  height: 100%;
  max-height: var(--componentHeight);
  overflow: hidden;
}
</style>
