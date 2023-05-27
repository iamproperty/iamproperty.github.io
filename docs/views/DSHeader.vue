<template>
  <div class="bg-primary mb-5 ds-header">
    <img v-if="image" :src="image" alt="" class="d-none d-md-block" />
    <div class="container position-relative">
      <ul class="breadcrumb mb-0 d-md-none">
        <li><a :href="`/${section}`" v-html="`${section.toUpperCase()}`"></a></li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.ds-header{
  position: relative;
  overflow: hidden;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (min-width: 62em){
      
    min-height: 19rem;
    padding-top: 7rem;
  }

  img {
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: auto;
    object-fit: cover;
  }
}
</style>

<script>
export default {
  name: 'DSHeader',
  props: {
    image: {
      type: String,
      required: false
    },
    section: {
      type: String,
      default: 'foundations',
      required: false
    }
  }
}
</script>
