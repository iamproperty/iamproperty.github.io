<script setup>
  import Header from '@/components/Header/Header.vue';
  const props = defineProps({
    image: {
      type: String,
      required: false,
    },
    section: {
      type: String,
      default: 'foundations',
      required: false,
    },
    route: {
      type: Object,
      required: true,
    },
  });


  console.log( props.route );
</script>

<template>
  
  <Header>

    <ul class="breadcrumbs">
      <li v-if="props.route && props.route.matched && props.route.matched[0].path === '/foundations' && props.route.matched[1] && props.route.matched[1].path != '/foundations'"><a href="/foundations">Foundations</a></li>
      <li v-if="props.route && props.route.matched && props.route.matched[0].path === '/elements' && props.route.matched[1] && props.route.matched[1].path != '/elements'"><a href="/elements">Elements</a></li>
      <li v-if="props.route && props.route.matched && props.route.matched[0].path === '/components' && props.route.matched[1] && props.route.matched[1].path != '/components'"><a href="/components">Components</a></li>
    </ul>
    
    <h1 v-if="route && props.route.name" class="pb-3">{{ props.route.name }}</h1>
    <span v-if="route && route.meta && route.meta.status" class="badge">{{ route.meta.status }}</span>
    <span v-if="route && route.meta && route.meta.ver" class="badge">{{ route.meta.ver }}</span>
    <hr class="mb-5"/>
    <slot></slot>
    
  </Header>
</template>
