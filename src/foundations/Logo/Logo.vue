<template>
  <div :class="className">
    <svg>
      <title>iam {{id}}</title>
      <use :xlink:href="src"></use>
    </svg>
    <span v-if="desc" v-html="desc"></span>
  </div>
</template>
<script>
export default {
  name: 'Logo',
  props: {
    id: {
      type: String,
      required: false,
      default: 'property'
    },
    desc: {
      type: String
    }
  },
  computed: {
    src: function () {
      // `this` points to the vm instance
      return '#logo-' + this.id
    },
    className: function () {
      // `this` points to the vm instance
      return 'brand brand--' + this.id
    }
  }
}
</script>
