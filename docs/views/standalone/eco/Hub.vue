<script lang="ts" setup>

  import Nav from '@/components/Nav/Nav.vue';
  import STDNav from '@/components/STDNav/STDNav.vue';
  import Card from '@/components/Card/Card.vue';
  import Content from '@/components/Content/Content.vue';
  
  import Search from '@/components/Search/Search.vue';
  import Carousel from '@/components/Carousel/Carousel.vue';
  
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

    <div class="d-md-flex align-items-end pb-2">

      <h1 class="pb-0 me-auto my-1">iamproperty hub</h1>
      <a href="/" class="my-1">Need product support?</a>
    </div>

    <div class="admin-panel bg-white">
      
      <div class="md-col-end-5">

        <Content data-url="http://localhost:8080/wp-json/wp/v2/pages/72" data-title-tag="span" data-title-class="h4 pb-2">
          <h2 class="h4 pb-2">Success hub</h2>
        </Content>
      </div>
      <div class="md-col-start-6">

        <Content data-transform="iam-carousel" data-items-class="card--sm" data-smcols="2" data-mdcols="2" data-url="http://localhost:8080/wp-json/wp/v2/pages/81">
          <Card>
              
            <span>The brand new inspections reveal</span>
            
            <a href="/test" slot="link">View card</a>
          </Card>
          <Card>
            
              
            <span>The brand new inspections reveal</span>
            
          </Card>
        </Content>
      </div>
      
      
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
