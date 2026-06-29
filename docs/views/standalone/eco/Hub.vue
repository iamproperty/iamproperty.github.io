<script lang="ts" setup>
import { createApp, ref, onMounted } from 'vue';

import SearchLearningArticles from './search-learning-articles.vue';

import SearchProductArticles from './search-product-articles.vue';
import SearchContacts from './search-contacts.vue';

import SalesInsights from './sales-insights.vue';

import STDNav from '@/components/STDNav/STDNav.vue';
import Nav from '@/components/Nav/Nav.vue';


import Content from '@/components/Content/Content.vue';
import Skeleton from '@/components/Skeleton/Skeleton.vue';
import Bone from '@/components/Skeleton/Bone.vue';

const hubEnv = import.meta.env as unknown as {
  VITE_HUB_CONTENT_BANNER_URL: string,
  VITE_HUB_LEARNING_URL: string,
  VITE_HUB_MARKETING_URL: string,
  VITE_HUB_SUPPORT_URL: string,
  VITE_MI_API_KEY: string
};

// todo load from api call


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
    <div class="bg-primary full-width mb-4">
      <div class="container">

        <h1 class="pb-2 md-col-end-7 h2">Welcome, <span data-variable="shortname"></span></h1>

        <div class="md-col-start-9"><SearchContacts></SearchContacts></div>
      </div>
    </div>

    <hr/>
    <Content :data-url="hubEnv.VITE_HUB_CONTENT_BANNER_URL" data-save-variable="shortname">
      <Skeleton>
        <Bone class="h2"></Bone><hr/>
        <Bone></Bone><hr/>
      </Skeleton>
    </Content>

    <div class="md-col-end-6">
      <div class="admin-panel bg-white">
        <h2 class="bg-light iam-content--title">Featured learning</h2>
        <Content :data-url="hubEnv.VITE_HUB_LEARNING_URL" data-title-tag="h2" data-title-class="bg-light" @content-loaded="addLearningSearch">
          <Skeleton>
            <Bone class="card"></Bone>
            <Bone class="card"></Bone>
            <Bone class="card"></Bone>
          </Skeleton>
          <Skeleton>
            <Bone class="search"></Bone><hr/>
            <iam-bone class="btn"></iam-bone>
          </Skeleton>
        </Content>
      </div>
      <div class="admin-panel bg-white">
        <h2 class="bg-light iam-content--title">Latest marketing</h2>
        <Content :data-url="hubEnv.VITE_HUB_MARKETING_URL" data-title-tag="h2" data-title-class="bg-light">
          <Skeleton>
            <Bone class="card"></Bone>
            <Bone class="card"></Bone>
            <Bone class="card"></Bone>
          </Skeleton>
          <Skeleton>
            <Bone class="card"></Bone>
            <Bone class="card"></Bone>
            <Bone class="card"></Bone>
          </Skeleton>
          <Skeleton>
            <iam-bone class="btn"></iam-bone>
          </Skeleton>
        </Content>
      </div>

    </div>
    <div class="md-col-start-7">
      <div class="admin-panel bg-white">

        <h2 class="bg-light iam-content--title">Product support</h2>
        <Content :data-url="hubEnv.VITE_HUB_SUPPORT_URL" data-title-tag="h2" data-title-class="bg-light" @content-loaded="addProductSearch">

          <Skeleton>
            <Bone class="search"></Bone><hr/>
          </Skeleton>
          <Skeleton>
            <Bone class="btn"></Bone>
          </Skeleton>

        </Content>

      </div>

      <SalesInsights></SalesInsights>

    </div>



  </main>



</template>
