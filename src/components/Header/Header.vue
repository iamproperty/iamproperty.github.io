<template>
  <header class="header">
    <div class="container">
      <!-- Space for a breadcrumb trail -->
      <slot name="breadcrumb"></slot>
      <div class="header__inner">
        <h1 v-html="title"></h1>
        <slot></slot>
      </div>
    </div>
    <picture v-if="image">
      <!-- Actual image only loaded on desktops -->
      <source :srcset="image" media="(min-width: 62em)">
      <!-- Placeholder image -->
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
    </picture>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  }
}
</script>
