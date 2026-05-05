<script lang="ts" setup>
import { createApp } from 'vue';

import SearchLearningArticles from './search-learning-articles.vue';

import Nav from '@/components/Nav/Nav.vue';
import STDNav from '@/components/STDNav/STDNav.vue';
import Card from '@/components/Card/Card.vue';
import Content from '@/components/Content/Content.vue';

import Search from '@/components/Search/Search.vue';

import Carousel from '@/components/Carousel/Carousel.vue';

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
    <div class="md-col-end-6">


      
    </div>

    <div class="admin-panel bg-white md-col-end-8">
      <h2>Latest marketing</h2>
      <h3 class="lead pb-2">Featured articles</h3>
      
      <Content data-transform="iam-carousel" data-smcols="2" data-mdcols="2" data-url="http://localhost:8080/wp-json/wp/v2/pages/98"></Content>
      
    </div>

    <div class="admin-panel bg-white md-col-start-9">
      <hr/>
      illustration
      <h2>Help desk</h2>

      <Search data-url="https://iampropertyinternal.zendesk.com/hc/api/internal/instant_search.json?query=" data-suffix="search" class="mb-5">
          <label>
            Search existing transactions
            <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="articles" />
            <span class="hint-text">Enter 3 or more characters</span>
          </label>
          <datalist id="articles">
            <option value="Cirrus - I don’t have the desktop App installed" data-url="https://iampropertyinternal.zendesk.com/hc/en-gb/articles/30187115513873-Cirrus-I-don-t-have-the-desktop-App-installed"></option>
          </datalist>
        </Search>

      <div class="btn__group mb-1">
        <a href="https://iampropertyinternal.zendesk.com/hc/en-gb" target="_blank" class="btn btn-primary">View FAQ articles</a>
        <a href="https://iampropertyinternal.zendesk.com/hc/en-gb/requests/new" target="_blank" class="btn btn-secondary">Submit a request</a>
      </div>
    </div>

  </main>
</template>
