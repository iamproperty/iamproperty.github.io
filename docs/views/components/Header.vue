<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Header</h1>
      <p>Introduce the page so a user can decide whether the page is right for their needs.</p>
    </div>
    
    <Header title="Page title" class="visualtest" :image="require('../../assets/shutterstock_1229155495.webp')">
      <template v-slot:breadcrumb>
        <ul class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/top">Top level</a></li>
        </ul>
      </template>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </Header>

    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="language-html">{{htmlUsage}}</code></pre>
    </div>
    
    <div class="container">
      <h2>Vue Header component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Readme from '@/components/Header/README.md'

export default {
  components: {
    Header,
    Readme
  },
  mounted(){
    hljs.highlightAll();
  },
  data () {
    return {
      htmlUsage: `<header class="header">
  <div class="container">
    <ul class="breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a href="/top">Top level</a></li>
    </ul>
    <div class="header__inner">
      <h1>Page title</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  </div>
  <picture>
    <source srcset="/img/shutterstock_1229155495.f3b0401e.webp" media="(min-width: 62em)" />
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
  </picture>
</header>`
    }
  }
}
</script>
