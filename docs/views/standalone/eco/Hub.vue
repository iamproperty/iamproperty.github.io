<script lang="ts" setup>
import { createApp, ref, onMounted } from 'vue';

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

const hubEnv = import.meta.env as unknown as {
  VITE_HUB_CONTENT_BANNER_URL: string,
  VITE_HUB_LEARNING_URL: string,
  VITE_HUB_MARKETING_URL: string,
  VITE_HUB_SUPPORT_URL: string,
  VITE_MI_API_KEY: string
};

// todo load from api call
const checkAccount = ref({

  connected: false,
  agreedTerms: false,
  outcodes: false,
  selectedCompetitors: false
})

const outcodes = ref([]);
const competitors = ref();
const charts = ref([]);

onMounted(async() => {

  try {

    const response = await fetch('https://materialinformation.datasystem.co.uk/CompetitorAnalysis/GetDistricts', {
      method: 'POST',
      headers: {
        'x-api-key': hubEnv.VITE_MI_API_KEY,
        'Content-Type': 'application/vnd.api+json'
      },
    });

    const json = await response.json();

    checkAccount.value.connected = true;

  } catch (error) {
    //checkAccount.value.connected = false;
  }

});

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

const getCompetitors = async (outcodes):Promise<void> => {


  if(!outcodes)
    return false;

  try {

    const obj = {
      "data": {
        "type": "competitor-analysis-request",
        "attributes": {
          "postcodeOutwardCodes": outcodes
        }
      }
    };

    const response = await fetch('https://materialinformation.datasystem.co.uk/CompetitorAnalysis/GetCompetitors', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'x-api-key': hubEnv.VITE_MI_API_KEY,
        'Content-Type': 'application/vnd.api+json'
      },
    });

    const json = await response.json();

    if(json.data)
      competitors.value = json.data;

  } catch (error) {
    checkAccount.value.connected = false;
  }

}


const saveCompetitors = (event): void => {

  // #region save outcodes
  const multiselectElement = document.querySelector('#competitor-list iam-multiselect');
  checkAccount.value.outcodes = Array.from(multiselectElement.querySelectorAll('input:checked')).map(x => x.value);
  // #endregion

  // #region save competitiors choice
  const selectedCompetitorsFieldset = document.querySelector('#selected-competitors');
  checkAccount.value.selectedCompetitors = Array.from(selectedCompetitorsFieldset.querySelectorAll('input:checked')).map(x => x.value);
  // #endregion
  charts.value = [];
  ['listed','reductions','cancelled','withdrawn','sstc'].forEach(chartType => {

    charts.value.push({
      "name": chartType == 'sstc' ? 'SSTC': chartType.charAt(0).toUpperCase() + chartType.slice(1),
      "data": Array.from(selectedCompetitorsFieldset.querySelectorAll('input:checked')).map(x => ({
         'name': x.dataset['name'],
         'value': x.dataset[chartType]
        }))
    });
  });


}

function onOutcodeChange(event): void {

  const multiselectElement = event.target.closest('iam-multiselect');
  getCompetitors(Array.from(multiselectElement.querySelectorAll('input:checked')).map(x => x.value));
}

const searchOutcodes = async(event):void => {

  console.log(event);


  if(!event.srcElement.shadowRoot)
    return false;


  const searchTerm = event.srcElement.shadowRoot.querySelector('#search').value;

  if(!searchTerm)
    return false;


  const response = await fetch('https://materialinformation.datasystem.co.uk/CompetitorAnalysis/GetDistricts', {
    method: 'POST',
    headers: {
      'x-api-key': hubEnv.VITE_MI_API_KEY,
      'Content-Type': 'application/vnd.api+json'
    },
  });

  const json = await response.json();


  const filtereOutcodes = json.data.filter((item) => item.title.toLowerCase().startsWith(searchTerm));

  outcodes.value = new Set([...outcodes.value, ...filtereOutcodes]);

  console.log(filtereOutcodes);
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


    <Content :data-url="hubEnv.VITE_HUB_CONTENT_BANNER_URL" data-save-variable="shortname" @loaded="addContactSearch"></Content>

    <div class="md-col-end-6">
      <div class="admin-panel bg-white">
        <Content :data-url="hubEnv.VITE_HUB_LEARNING_URL" data-title-tag="h2" data-title-class="bg-light" @loaded="addLearningSearch">
          <p>Loading..</p>
        </Content>
      </div>
      <div class="admin-panel bg-white">
        <Content :data-url="hubEnv.VITE_HUB_MARKETING_URL" data-title-tag="h2" data-title-class="bg-light">
          <p>Loading..</p>
        </Content>
      </div>

    </div>
    <div class="md-col-start-7">
      <div class="admin-panel bg-white">

        <Content :data-url="hubEnv.VITE_HUB_SUPPORT_URL" data-title-tag="h2" data-title-class="bg-light" @loaded="addProductSearch">
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
          <button id="customise-btn" ref="customiseBtn" class="btn btn-action fa-cog" type="button" command="show-modal" commandfor="competitor-list" :disabled="!checkAccount.connected || !checkAccount.agreedTerms || !checkAccount.outcodes">Customise</button>
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

        <p v-if="checkAccount.connected && checkAccount.agreedTerms && checkAccount.outcodes" id="selected-outcodes">Outcode area: <span v-for="outcode in checkAccount.outcodes" :key="outcode">{{ outcode }}</span></p>

        <span v-for="competitor in checkAccount.selectedCompetitors" :key="competitor.name">{{ competitor.name }}</span>

        <Tabs v-if="checkAccount.connected && checkAccount.agreedTerms && checkAccount.outcodes && charts" class="tabs--toggle-tags">
          <Tab v-for="chart in charts" :key="chart.name" :title="chart.name" >

            <Doughnutchart class="chart--lg chart--horizontal" :data-created="Date.now()">
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

  <Modal>
    <dialog id="competitor-list" aria-labelledby="competitor-list-title">
      <h3 id="competitor-list-title">Customise your competitor list</h3>
      <p>Update the competitors you see within your the sales insights widget.</p>


      <Multiselect data-label="Search outcodes" data-tooltip="Tooltip text" @change="onOutcodeChange" @input="searchOutcodes">

        <label v-for="outcode in outcodes" class="tag dropdown__option"><input type="checkbox" :name="`outcodes[${outcode.title}]`" :value="outcode.value">{{outcode.title}}</label>
      </Multiselect>

      <p class="pt-4">Select up to 10 competitors you want to compare against.</p>
      <div v-if="!competitors" class="text-center" >
        <p class="lead">No competitors available</p>
        <p>Please enter an outcode to display competitor list</p>
      </div>

      <fieldset v-if="competitors" id="selected-competitors">
        <label v-for="competitor in competitors" :key="competitor.id">
          <input type="checkbox"
          :name="`select-competitors[${competitor.id}]`"
          :value="competitor.id"
          :data-name="competitor.attributes.agentName"
          :data-listed="competitor.attributes.counts.listed"
          :data-reductions="competitor.attributes.counts.reductions"
          :data-cancelled="competitor.attributes.counts.cancelled"
          :data-withdrawn="competitor.attributes.counts.withdrawn"
          :data-sstc="competitor.attributes.counts.sstc"
          />
          {{ competitor.attributes.agentName }}
        </label>
      </fieldset>

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
#selected-outcodes span:not(:last-child):after{
  content: ", ";
}
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
