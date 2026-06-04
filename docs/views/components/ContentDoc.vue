
<script setup>
  import DSHeader from '../DSHeader.vue';
  import Content from '@/components/Content/Content.vue';
</script>

<template>
  <main>

    <DSHeader section="components">
      <h1>Content</h1>
    </DSHeader>


    <div class="visualtest container">
      <Content data-url="http://localhost:8000/wp-json/wp/v2/posts/1">
        <h2>Default content</h2>
      </Content>
    </div>
  </main>
</template>
