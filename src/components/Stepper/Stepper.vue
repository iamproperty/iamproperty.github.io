<template>
  <div class="container">
    <nav class="stepper" :aria-label="label ? label : 'Progress'">
      <span class="h6 stepper__start" v-if="label">{{ label }}</span>
      <ol class="list-unstyled">
        <slot><!-- Use for titles etc --></slot>
      </ol>
      <span class="h6 stepper__end">{{ endlabel }}</span>
    </nav>
  </div>
</template>

<style lang="scss">
  @import '../../../assets/sass/components/stepper.scss';
</style>

<script>
  export default {
    name: 'Stepper',
    props: {
      label: {
        type: String,
        required: false,
      },
      endlabel: {
        type: String,
        required: false,
        default: 'Complete',
      },
    },
  };
</script>
