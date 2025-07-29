<script setup>
  import Content from '@/components/Content/Content.vue';
</script>

<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Content (Beta)</h1>
      <p></p>
    </div>
    <div class="visualtest container">
      <Content data-url="http://localhost:8000/wp-json/wp/v2/posts/1">
        <h2>Default content</h2>
      </Content>
    </div>
  </main>
</template>
