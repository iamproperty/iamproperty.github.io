<template>
  <div class="task-title" :class="variant">
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'TaskTitle',
  props: ['title', 'variant']
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
    .punchy-mustard-bg {
        background-color: $punchy-mustard;
        h4 {
            color: #000;
        }
    }
    .homely-aubergine {
        background-color: $homely-aubergine;
        h4 {
            color: #fff;
        }
    }
    .fresh-blue {
        background-color: $fresh-blue;
        h4 {
            color: #fff;
        }
    }
    .deep-slate {
        background-color: $deep-slate;
        h4 {
            color: #fff;
        }
    }
    .soft-green {
        background-color: $soft-green;
        h4 {
            color: #000;
        }
    }
    .soft-pink {
        background-color: $soft-pink;
        h4 {
            color: #000;
        }
    }
    .grey-50 {
        background-color: $grey-50;
        h4 {
            color: #000;
        }
    }
    .grey-70 {
        background-color: $grey-70;
        h4 {
            color: #fff;
        }
    }
</style>
