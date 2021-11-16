<template>
  <div class="container tabs__container" ref="wrapper">

    <input type="radio" class="d-none" v-for="(value,index) in tabLinks()" :key="index" :name="value.name" :id="value.id" :checked="index == 0? 'checked':''" />

    <div class="tabs__links">
      <label v-for="(value,index) in tabLinks()" :key="index" :for="value.id" class="link">
        {{value.tabTitle}}
      </label>
    </div>
    <div class="tabs">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/tabs.scss";
</style>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabsID: 'tabs_'+Math.random().toString(36).substr(2, 9)
    }
  },
  computed: {
    tabLinks (){
      return () => {

        const tabLinks = [];
        let i = 1;

        for (const [key, value] of Object.entries(this.$slots.default)) {
          
          let tabTitle = value.componentOptions.propsData.title;

          let tab = {
            name: this.tabsID,
            id: this.tabsID+"_tab"+i++,
            tabTitle: tabTitle
          }

          tabLinks.push(tab);
        }

        return tabLinks;
      }
    }
  }
}
</script>
