<script lang="ts" setup>
import { createApp } from 'vue';

import SearchLearningArticles from './search-learning-articles.vue';

import Nav from '@/components/Nav/Nav.vue';
import STDNav from '@/components/STDNav/STDNav.vue';
import Card from '@/components/Card/Card.vue';
import Content from '@/components/Content/Content.vue';

import Search from '@/components/Search/Search.vue';

import Carousel from '@/components/Carousel/Carousel.vue';
import Banner from '@/components/Banner/Banner.vue';
import Tabs from '@/components/Tabs/Tabs.vue';
import Tab from '@/components/Tabs/Tab.vue';

function addLearningSearch(event): void {

  const find = document.querySelector('[data-shortcode="search-learning-articles"]');

  if(find){
    createApp(SearchLearningArticles).mount(find);
  }
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

    <h1 class="pb-3">Welcome, </h1>
      
    
    <Content data-url="http://localhost:8080/wp-json/wp/v2/pages/122"></Content>

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
        
        <h2 class="bg-light">Product support</h2>
        <label>
        <Search data-url="https://iampropertyinternal.zendesk.com/hc/api/internal/instant_search.json?query=" data-suffix="search" class="search--stylised">
          <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="articles" placeholder="Search all support articles"/>
          <button class="suffix me-0 mb-0 fa-regular fa-search" title="Search" slot="suffix"></button>
          <datalist id="articles">
            <option value="Cirrus - I don’t have the desktop App installed" data-url="https://iampropertyinternal.zendesk.com/hc/en-gb/articles/30187115513873-Cirrus-I-don-t-have-the-desktop-App-installed"></option>
          </datalist>
        </Search>

        </label>
        <div class="btn__group mb-1">
          <a href="https://iampropertyinternal.zendesk.com/hc/en-gb" target="_blank" class="btn btn-primary">View FAQ articles</a>
          <a href="https://iampropertyinternal.zendesk.com/hc/en-gb/requests/new" target="_blank" class="btn btn-secondary">Submit a request</a>
        </div>
      </div>

      <div class="admin-panel bg-white">
        <h2 class="bg-primary gradient-info">Sales insights</h2>
        <p>Outcode area: Ne1, NE61</p>
        <Tabs class="tabs--toggle-tags">
          <Tab title="Listed">
            <p>{chart1}</p>
          </Tab>
          <Tab title="Reductions">
            <p>{chart2}</p>
          </Tab>
          <Tab title="Cancelled">
            <p>{chart3}</p>
          </Tab>
          <Tab title="Withdrawal">
            <p>{chart4}</p>
          </Tab>
          <Tab title="SSTC">
            <p>{chart5}</p>
          </Tab>
          
        </Tabs>
      </div>
    </div>

    

    



  </main>
</template>
