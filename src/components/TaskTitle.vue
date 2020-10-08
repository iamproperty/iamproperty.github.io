<template>
  <div class="task-title" :class="variant">
    <h4><slot></slot></h4>
  </div>
</template>

<script>
export default {
  name: 'TaskTitle',
  props: {
    variant: {
      required: false,
      type: String,
      default: 'task-punchy-mustard'
    }
  }
}
</script>
<style lang="scss">
    @import "@/assets/scss/_variables.scss";
    /* Define the Sass Map $brand-colors */
    $brand-colors: (
        punchy-mustard: $punchy-mustard,
        homely-aubergine: $homely-aubergine,
        fresh-blue: $fresh-blue,
        deep-slate: $deep-slate,
        soft-green: $soft-green,
        soft-pink: $soft-pink,
        grey-50: $grey-50,
        grey-70: $grey-70,
    );
    /* For each key in the map, create it's own class */
    @each $name, $value in $brand-colors {
        @if $value == $homely-aubergine or $value == $deep-slate or $value == $grey-70 {
            .task-#{$name} {
                background-color: $value;
                h4 {
                    color: #fff;
                }
            }
        }
        @else {
            .task-#{$name} {
                background-color: $value;
                h4 {
                    color:#000;
                }
            }
        }
    }

    .task-title {
        border-radius: 0.5rem;
        h4 {
            padding: 0.8rem;
            font-weight:normal;
        }
    }
</style>
