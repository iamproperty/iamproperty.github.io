<script lang="ts" setup>
import { createApp, ref, onMounted } from 'vue';


import STDNav from '@/components/STDNav/STDNav.vue';
import Nav from '@/components/Nav/Nav.vue';


import Questions from './Questions.vue';
import Properties from './Properties.vue';

const iframeTable = ref();
const filtersModal = ref();
const filtersForm = ref();
const panel = ref();
const componentHeight = ref('100vh');


const question = ref('');

onMounted(() => {

console.log('hey')
  console.log(window);

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

    console.log('message');
    if (message.type == "filters-open") {

      panel.value.dataset.filters = true;

      console.log(panel.value)
    }

    if (message.type == "filters-closed") {


      panel.value.dataset.filters = false;

    }

    if (message.type == "component-loaded") {

      console.log('set height on admin panel and iframe');
      console.log(`${message.detail.height}px`);

      componentHeight.value = `${message.detail.height}px`;
    }


  });


  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.has('question')); // true

  if (urlParams.has('question')) {
    question.value = urlParams.get('question');
  }

  window.navigation.addEventListener('navigate', (event) => {


    const urlParams = new URLSearchParams(new URL(event.destination.url).search);


    console.log(urlParams);
    console.log(event.destination.url);


    if (urlParams.has('question')) {
      question.value = urlParams.get('question');

      console.log('hi');
    }


    console.log('hub question updated');

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

      <STDNav data-sso-subject="one_VzjolCY4CSy2oxaJhmXgmiReJ0sj23gK" data-product="crm"></STDNav>

    </Nav>
  </nav>

  <main>
    <div class="bg-primary full-width questions-container">
      <div class="container">

        <h1 class="pb-2 md-col-end-7 h2">AI Insights</h1>

      </div>

      <Questions :question="question"></Questions>
    </div>


    <div v-if="question" ref="panel" class="admin-panel" :style="`--componentHeight: ${componentHeight};`">
      <h2 class="bg-primary gradient-info">{{ question }}</h2>

      <!--<Properties></Properties>-->
      <iframe
        id="iframeTable"
        ref="iframeTable"
        title="Inline Frame Example"
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
}




.admin-panel {
  //padding: 0;

  //height: calc(var(--componentHeight) + 3.5rem + 20px);
  height: var(--componentHeight, calc(100vh - 4rem));
  position: relative;
  overflow: hidden;
}

.admin-panel h2{
  margin-bottom: 0;
}

.admin-panel iframe {
  padding: 0;
  margin-inline: -1.5rem;
  width: calc(100% + 3rem);
  height: 100%;
}


</style>
