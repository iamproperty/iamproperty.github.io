<script lang="ts" setup>
import { createApp, ref } from 'vue';

import SearchLearningArticles from './search-learning-articles.vue';

import SearchProductArticles from './search-product-articles.vue';
import SearchContacts from './search-contacts.vue';

import Nav from '@/components/Nav/Nav.vue';
import STDNav from '@/components/STDNav/STDNav.vue';
import Card from '@/components/Card/Card.vue';
import Content from '@/components/Content/Content.vue';

import Search from '@/components/Search/Search.vue';

import Carousel from '@/components/Carousel/Carousel.vue';
import Banner from '@/components/Banner/Banner.vue';
import Tabs from '@/components/Tabs/Tabs.vue';
import Tab from '@/components/Tabs/Tab.vue';
import Modal from '@/components/Modal/Modal.vue';

import Doughnutchart from '@/components/DoughnutChart/DoughnutChart.vue';

import Notification from '@/components/Notification/Notification.vue';
import Multiselect from '@/components/Multiselect/Multiselect.vue';
import BannerImg from './Banner.png';


const checkAccount = ref({

  connected: false,
  agreedTerms: false,
  outcodes: false,
})

const data = ref({
  competitors: null,
  charts: null
});


setTimeout(() => {
  checkAccount.value.connected = true; // TODO: load from an api call
}, 1000);


function addLearningSearch(event): void {

  const find = document.querySelector('[data-shortcode="search-learning-articles"]');

  if(find){
    createApp(SearchLearningArticles).mount(find);
  }
}
function addProductSearch(event): void {

  const find = document.querySelector('[data-shortcode="search-product-articles"]');

  if(find){
    createApp(SearchProductArticles).mount(find);
  }
}
function addContactSearch(event): void {

  const find = document.querySelector('[data-shortcode="search-contacts"]');

  if(find){
    createApp(SearchContacts).mount(find);
  }
}
function agreeTerms(): void {
  checkAccount.value.agreedTerms = true;
}

const getCharts = async ():Promise<void> => {
  
  const ajaxURL = '/competitor-analysis.json';

  // Setup controller vars if not already set
  if (!window.controller) window.controller = [];

  // Abort if controller already present for this url
  if (window.controller[ajaxURL]) window.controller[ajaxURL].abort();

  // Create a new controller so it can be aborted if new fetch made
  window.controller[ajaxURL] = new AbortController();
  const { signal } = window.controller[ajaxURL];

  try {
    const response = await fetch(ajaxURL, {
      signal,
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const json = await response.json();
    data.value = json.data.attributes;

  } catch (error) {
    checkAccount.value.connected = false;
  }

}

function saveCompetitors(): void {
  console.log('hitting save competitors');
  // Save the selected competitors to the user account and update the charts based on the new competitors
  checkAccount.value.outcodes = 'NE1, NE2, NE3';
  getCharts();
}

function onOutcodeChange(event): void {
  console.log('outcode change', event);
  
  // pass through the outcodes and get new competitor data based on the outcodes

  checkAccount.value.outcodes = 'NE1, NE2, NE3';
  getCharts();
}
</script>
<template>
  
  <nav>
    <STDNav data-hub class="nav--btn-compact">
      
      <a href="/" class="brand brand--property" slot="logo">
        <svg>
          <title>iam key</title>
          <use xlink:href="/svg/logo.svg#logo-property"></use>
        </svg>
      </a>

      <a href="/">Onboarding</a>
      
      <div class="nav--menu" data-btn-class="btn-compact" data-title="My account" data-open-title="John Jones" data-icon="fa-user fa-solid" slot="menus"><div><label for="test1">Active branch</label><select class="form-select" name="test1" id="test1"><option selected="" value="1">Newcastle</option><option value="2">Two</option><option value="2">Three</option><option value="2">Four</option></select></div><hr class="mt-3"><a href="/">Agency settings</a><a href="/">Control panel</a><a href="/" class="mb-4">Contact us</a></div>
      
    </STDNav>
  </nav>
  <main class="bg-primary">
    
    <hr/>
    

    <Content data-url="http://localhost:8080/wp-json/wp/v2/pages/122" data-save-variable="shortname" @loaded="addContactSearch"></Content>

    <div class="md-col-end-6">
      <div class="admin-panel bg-white">
        <Content data-url="http://localhost:8080/wp-json/wp/v2/pages?slug=learning" data-title-tag="h2" data-title-class="bg-light" @loaded="addLearningSearch">
          <p>Loading..</p>
        </Content>
      </div>
      <div class="admin-panel bg-white">
        <Content data-url="http://localhost:8080/wp-json/wp/v2/pages?slug=marketing" data-title-tag="h2" data-title-class="bg-light">
          <p>Loading..</p>
        </Content>
      </div>

    </div>
    <div class="md-col-start-7">
      <div class="admin-panel bg-white">

        <Content data-url="http://localhost:8080/wp-json/wp/v2/pages?slug=product-support" data-title-tag="h2" data-title-class="bg-light" @loaded="addProductSearch">
          <p>Loading..</p>
        </Content>
        
        
        
        <div class="btn__group mb-1">
          <a href="https://iampropertyinternal.zendesk.com/hc/en-gb" target="_blank" class="btn btn-primary">View FAQ articles</a>
          <a href="https://iampropertyinternal.zendesk.com/hc/en-gb/requests/new" target="_blank" class="btn btn-secondary">Submit a request</a>
        </div>
      </div>

      <div class="admin-panel bg-white">
        <h2 class="bg-primary gradient-info">Sales insights</h2>
        
        <div class="d-flex">
          <p class="lead me-auto pe-2">Competitor analysis</p>
          <button id="customise-btn" ref="customiseBtn" class="btn btn-action fa-cog" type="button" command="show-modal" commandfor="competitor-list" :disabled="!checkAccount.connected && !checkAccount.agreedTerms">Customise</button>
        </div>

        <div v-if="!checkAccount.connected || !checkAccount.agreedTerms" class="mb-2">
          <button class="tag tag--toggle" disabled>Listed</button>
          <button class="tag tag--toggle" disabled>Reductions</button>
          <button class="tag tag--toggle" disabled>Cancelled</button>
          <button class="tag tag--toggle" disabled>Withdrawal</button>
          <button class="tag tag--toggle" disabled>SSTC</button>
        </div>


        <div v-if="!checkAccount.connected" class="text-center pt-2">
          <img src="/img/illustrations/buyer.png" alt="" loading="lazy" class="d-block illustration--sm mx-auto" />

          <span class="lead">Data unavailable</span>
          <p class="pb-1">This service is temporarily unavailable, please try again later.</p>

        </div>

        <div v-if="checkAccount.connected && !checkAccount.agreedTerms" id="view-terms" class="bg-primary">
          
          <img :src="BannerImg" class="w-100"/>
          <div class="text-center pt-3">
            <i class="fa-solid fa-lock h4 pb-1"></i>
            <span class="h4 px-5 pb-3">Please agree to terms of use to <span class="text-info">unlock</span> this data</span>
            <button class="btn btn-primary colour-warning" command="show-modal" commandfor="agree-terms-modal">View terms</button>

          </div>
        </div>


        <div v-if="checkAccount.connected && checkAccount.agreedTerms && !checkAccount.outcodes" class="text-center pt-2">
          <img src="/img/illustrations/buyer.png" alt="" loading="lazy" class="d-block illustration--sm mx-auto" />

          <span class="lead">No area selected</span>
          <p class="pb-1">Please enter an outcode to display competitor list </p>

          <button class="btn btn-secondary" command="show-modal" commandfor="competitor-list">Enter outcode</button>
        </div>



        <p v-if="checkAccount.connected && checkAccount.agreedTerms && checkAccount.outcodes">Outcode area: {{ checkAccount.outcodes }}</p>
        <Tabs v-if="checkAccount.connected && checkAccount.agreedTerms && checkAccount.outcodes && data.charts" class="tabs--toggle-tags">
          <Tab v-for="chart in data.charts" :key="chart.name" :title="chart.name" >
            
            <Doughnutchart class="chart--lg chart--horizontal">
              <table>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th v-for="segment in chart.data" :key="segment.name">
                      {{ segment.name }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td v-for="segment in chart.data" :key="segment.name">
                      {{ segment.value }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Doughnutchart>

          </Tab>
          
        </Tabs>
        <a v-if="checkAccount.connected && checkAccount.agreedTerms && checkAccount.outcodes" href="/" target="_blank" class="btn btn-primary">Compare against my branch</a>

        <Notification v-if="checkAccount.connected && checkAccount.agreedTerms && checkAccount.outcodes" class="colour-info mb-1">
          <strong>Terms of use for this competitor data</strong>
          <button slot="btns" class="link" command="show-modal" commandfor="view-terms-modal">View terms</button>
        </Notification>

      </div>
    </div>



  </main>
    
  <Modal >
    <dialog id="competitor-list" aria-labelledby="competitor-list-title">
      <h3 id="competitor-list-title">Customise your competitor list</h3>
      <p>Update the competitors you see within your the sales insights widget.</p>

      
      <Multiselect data-label="Search outcodes" data-tooltip="Tooltip text" data-name="users" data-url="/outcodes.json?search=" data-min="1" @change="onOutcodeChange"></Multiselect>

      <p class="pt-4">Select up to 10 competitors you want to compare against.</p>
      <div class="text-center">
        <p class="lead">No competitors available</p>
        <p>Please enter an outcode to display competitor list</p>
      </div>
      <div class="btn__group">
        <button class="btn btn-secondary" command="close" commandfor="competitor-list">Cancel</button>
        <button class="btn btn-primary" command="close" commandfor="competitor-list" @click="saveCompetitors()">Update competitors</button>
      </div>
    </dialog>
  </Modal>
  <Modal data-type="transactional" data-agreed-text="Agree terms" @agreed="agreeTerms()">
    <dialog id="agree-terms-modal" aria-labelledby="agree-terms-title">
      <h3 id="agree-terms-title">Important information about competitor analysis sales data</h3>
      <p>iamproperty provide the sales data on an "as is" basis and makes no representations or warranties, express or implied, as to the accuracy, completeness, or reliability of the data. The Agent acknowledges that the data is supplied for their internal analysis and may not be used for general marketing purposes or shared with anyone outside of the Agent's employment. iamproperty shall not be liable for any claims, damages, losses, or expenses arising from the use or reliance upon the data, and the Agent agrees to indemnify and hold harmless iamproperty from any such claims.</p>
    </dialog>
  </Modal>

  <Modal data-type="acknowledgement" data-agreed-text="Close">
    <dialog id="view-terms-modal" aria-labelledby="view-terms-title">
      <h3 id="view-terms-title">Important information about competitor analysis sales data</h3>
      <p>iamproperty provide the sales data on an "as is" basis and makes no representations or warranties, express or implied, as to the accuracy, completeness, or reliability of the data. The Agent acknowledges that the data is supplied for their internal analysis and may not be used for general marketing purposes or shared with anyone outside of the Agent's employment. iamproperty shall not be liable for any claims, damages, losses, or expenses arising from the use or reliance upon the data, and the Agent agrees to indemnify and hold harmless iamproperty from any such claims.</p>
    </dialog>
  </Modal>

</template>

<style lang="css" scoped>
@layer utilities {
  #view-terms {
    background-color: transparent!important;
    position: relative;
  }

  #view-terms > *:not(img){
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
}
</style>
