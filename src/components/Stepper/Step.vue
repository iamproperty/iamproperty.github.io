<template>
  <li>
    <a :href="url" :class="`${status?'bg-'+status:''}${typeof current != 'undefined'?'current':''}`" :aria-current="typeof current != 'undefined'?true:false">
      <span><slot></slot></span>
      <em class="visually-hidden" v-if="status"> - status: {{status}}</em>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    url: {
      type: String,
      required: false
    },
    status: {
      type: String,
      required: false
    },
    current: {
      type: String,
      required: false
    }
  }
}
</script>
