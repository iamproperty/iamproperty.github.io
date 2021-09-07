<template>
  <a :href="link" class="card" :data-type="type">
    <div class="card-body" v-html="cardContent()">
    </div>
    <div class="card-footer">
      <span class="btn btn-secondary mb-0">Find out more<span class="visually-hidden"> about {{title}}</span></span>
    </div>
  </a>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../node_modules/bootstrap/scss/_card";
@import "../../../assets/sass/components/card";
</style>

<script>
export default {
  name: 'Card',
  props: {
    link: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    }
  },
  computed: {
    cardContent () {
      return () => {
        return `<h2 class="card-title">${this.title}</h2>${this.content}`;
      }
    }
  }
}
</script>
