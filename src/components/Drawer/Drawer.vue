<template>
  <div ref="wrapper">
    <input type="checkbox" name="showDrawer" id="showDrawer" class="d-none">
      <div class="drawer__btn pb-0">
        <div class="container text-end pb-0">
          <label for="showDrawer" class="btn btn-secondary me-0">{{label}}</label>
        </div>
      </div>
      <div class="drawer" id="drawer" ref="drawer">
        <div class="container text-end pb-0">
          <label for="showDrawer" class="btn btn-tertiary mb-0 me-0 py-1 px-2"><span class="visually-hidden">Close</span>&#x2715;</label>
        </div>
        <slot></slot>
      </div>
      <hr id="drawer-end" />
  </div>
</template>


<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/drawer.scss";
</style>

<script>
import drawer from '../../../assets/js/modules/drawer.js'

export default {
  name: 'Header',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  mounted(){

    this.$nextTick(function () {
      
      let element = this.$refs.wrapper;
      
      const fragment = document.createDocumentFragment();
      Array.from(element.childNodes).forEach(child => fragment.appendChild(child));
      element.parentNode.insertBefore(fragment, element);
      element.parentNode.removeChild(element);
    
      this.$nextTick(function () {
        
        drawer(this.$refs.drawer);
      })
    })
  },
}
</script>
