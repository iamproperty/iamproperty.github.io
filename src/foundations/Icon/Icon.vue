<template>
  <svg class="icon">
    <title>{{id}}</title>
    <use :xlink:href="'#icon-'+id+'-bg'" class="icon__bg"></use>
    <use :xlink:href="'#icon-'+id+'-fill'" class="icon__fill"></use>
    <use :xlink:href="'#icon-'+id+'-outline'" class="icon__outline"></use>
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
    }
  }
}
</script>
