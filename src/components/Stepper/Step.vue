<template>
  <li><a :href="url" :class="`${status?'bg-'+status:''}${typeof current != 'undefined'?'current':''} ${typeof current}`"><span><slot></slot></span></a></li>
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
