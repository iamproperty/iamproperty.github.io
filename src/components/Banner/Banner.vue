<template>
  <div class="container">
    <div :class="'bg-'+background+' mb-4'">
      <div class="row">
        <div class="col-sm-6">
          <div class="pt-5 pb-3 px-4">
            <h2>{{title}}</h2>
            <slot></slot>
          </div>
        </div>
        <div class="col-sm-6 col-md-5 ms-auto">
          <img v-if="image" :src="image" alt="" class="h-100 w-100 object-cover" />
        </div>
      </div>
    </div>
  </div>
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
    },
    background: {
      type: String,
      default: 'light',
      required: false
    }
  }
}
</script>
