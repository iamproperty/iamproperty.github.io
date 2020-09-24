<template>
  <div class="task-title" :class="variant">
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'TaskTitle',
  props: {
    title: {
      required: true,
      type: String,
      default: 'Title text goes here'
    },
    variant: {
      required: true,
      type: String,
      default: 'punchy-mustard-bg'
    }
  }
}
</script>
<style lang="scss">
    @import "@/assets/scss/_variables.scss";

    .task-title {
        border-radius: 0.5rem;

        h4 {
            padding: 0.8rem;
            font-weight:normal;
        }
    }
    .task-punchy-mustard {
        background-color: $punchy-mustard;
        h4 {
            color: #000;
        }
    }
    .task-homely-aubergine {
        background-color: $homely-aubergine;
        h4 {
            color: #fff;
        }
    }
    .task-fresh-blue {
        background-color: $fresh-blue;
        h4 {
            color: #fff;
        }
    }
    .task-deep-slate {
        background-color: $deep-slate;
        h4 {
            color: #fff;
        }
    }
    .task-soft-green {
        background-color: $soft-green;
        h4 {
            color: #000;
        }
    }
    .task-soft-pink {
        background-color: $soft-pink;
        h4 {
            color: #000;
        }
    }
    .task-grey-50 {
        background-color: $grey-50;
        h4 {
            color: #000;
        }
    }
    .task-grey-70 {
        background-color: $grey-70;
        h4 {
            color: #fff;
        }
    }
</style>
