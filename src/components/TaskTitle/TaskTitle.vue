<template>
  <div class="task-title" :class="variant">
    <slot></slot>
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

    $deep-slate: #00313C;
    $soft-green: /*#b4e6a5*/ #9CCD86;
    $homely-aubergine: #46003C;
    $soft-pink: #ffd2d2;
    $grey-70: #6f6f6f;
    $grey-50: #9d9d9d;
    $fresh-blue: #1ebee6;
    $punchy-mustard: #ffa500;

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
