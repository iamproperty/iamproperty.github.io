<template>
  <svg class="icon">
    <title>{{id}}</title>
    <use :xlink:href="path+'#icon-'+id"></use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    id: {
      type: String,
      required: false,
      default: 'email'
    },
    path: {
      type: String,
      required: false,
      default: '/svg/icons.svg'
    }
  }
}
</script>
