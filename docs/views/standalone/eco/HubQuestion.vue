<script lang="ts" setup>
import { createApp, ref, onMounted } from 'vue';

import SearchLearningArticles from './search-learning-articles.vue';

import SearchProductArticles from './search-product-articles.vue';
import SearchContacts from './search-contacts.vue';

import SalesInsights from './sales-insights.vue';

import STDNav from '@/components/STDNav/STDNav.vue';
import Nav from '@/components/Nav/Nav.vue';

import Actionbar from '@/components/Actionbar/Actionbar.vue';
import Modal from '@/components/Modal/Modal.vue';


import Questions from './Questions.vue';

const hubEnv = import.meta.env as unknown as {
  VITE_HUB_CONTENT_BANNER_URL: string,
  VITE_HUB_LEARNING_URL: string,
  VITE_HUB_MARKETING_URL: string,
  VITE_HUB_SUPPORT_URL: string,
  VITE_MI_API_KEY: string
};

const iframeTable = ref();
const filtersModal = ref();
const filtersForm = ref();

onMounted(() => {

console.log('hey')
  console.log(window);

  window.addEventListener("message", (event) => {

    iframeTable.value.height = "";
    iframeTable.value.height = iframeTable.value.contentWindow.document.body.scrollHeight + "px";

    console.log(iframeTable.value.contentWindow.document.body.scrollHeight);

  });


/*

  if(iframeTable.value) {
        // Reset the height first, then set it to the content's height


       // console.log(iframeTable.contentWindow.document.body);

    iframeTable.contentWindow.addEventListener('dashboard:loaded', () => {

      var elmnt = iframeTable.contentWindow.document.querySelector('[aria-label="Dashboard Header"]');

      console.log(elmnt);
      elmnt.style.display = "none";
    });

  }

*/

});


const clearFilters = () => {

};

const UpdateResults = () => {
  console.log(iframeTable.value);

  let hrefString = '';

  if(filtersForm.value){
    const formData = new FormData(filtersForm.value);

    // Add in pagination data
    for (const [key, value] of formData) {
      hrefString += `${key}=${value}\n`;
    }
  }

  if(iframeTable.value) {
    iframeTable.value.setAttribute('src',`https://iampropertypbl.cloud.looker.com/embed/looks/23?theme=iamproperty_default&${hrefString}`);

  }

  filtersModal.value.close();
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

      <STDNav data-sso-subject="2692b2f4-f051-70e3-d71e-15a7dffc3f29" data-product="crm"></STDNav>

    </Nav>
  </nav>

  <main>
    <div class="bg-primary full-width questions-container">
      <div class="container">

        <h1 class="pb-2 md-col-end-7 h2">AI Insights</h1>

      </div>

      <Questions></Questions>
    </div>



    <div class="admin-panel">
      <h2 class="bg-primary gradient-info">Show me stock currently on market most likely to switch</h2>

        <Actionbar>
          <button type="button" class="btn btn-primary" command="show-modal" commandfor="filters">Filter results</button>
        </Actionbar>
        <dialog id="filters" ref="filtersModal">
          <Modal class="modal--lg">

            <h2 class="h3">Filter by</h2>

        <form ref="filtersForm">
            <label>Agent & co
              <input type="checkbox" name="agent[123]" value="123" />
            </label>
      </form>
            <div class="btn__group">


              <button type="button" class="btn btn-secondary" @click.prevent="clearFilters()">clear filters</button>
              <button type="button" class="btn btn-primary" @click.prevent="UpdateResults()">Update results</button>
            </div>
          </Modal>
        </dialog>

<!--
      <iframe
        id="iframeTable2"
        ref="iframeTable2"
        title="Inline Frame Example"
        src="https://iampropertypbl.cloud.looker.com/embed/looks/24?theme=iamproperty_default"
  frameborder="0"
  allow="fullscreen"
  referrerpolicy="strict-origin-when-cross-origin"
        style="width: 100%; min-height: 30vh;"
      ></iframe>
      -->
      <iframe
        id="iframeTable"
        ref="iframeTable"
        title="Inline Frame Example"
        src="https://iampropertypbl.cloud.looker.com/embed/looks/23?theme=iamproperty_default&f[stock_switch.current_agent_name]=Wilson Estate Agents"
        style="width: 100%; min-height: 100vh;"
      ></iframe>
    </div>


  </main>



</template>
<style lang="css" scoped>
.questions-container {
  margin-bottom: 7rem;
}
</style>
