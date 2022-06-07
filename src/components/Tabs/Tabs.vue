<template>
  <div class="container tabs__container" ref="wrapper">

    <input type="radio" class="tab__input" v-for="(value,index) in tabLinks()" :key="index" :name="value.name" :id="value.id" :checked="index == 0? 'checked':''" />

    <div class="tabs__links">
      <label v-for="(value,index) in tabLinks()" :key="index" :for="value.id" class="link" v-on:click="openTab(index)">
        {{value.tabTitle}}
      </label>
    </div>
    <div class="tabs">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
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
          
          // Check if the value in the object is actually a tab and has the correct data
          if(value.componentOptions && value.componentOptions.propsData && value.componentOptions.propsData.title){
            
            let tabTitle = value.componentOptions.propsData.title;
            
            let tab = {
              name: this.tabsID,
              id: this.tabsID+"_tab"+i++,
              tabTitle: tabTitle
            }

            tabLinks.push(tab);
          }
        }

        return tabLinks;
      }
    }
  },
  methods: {
    openTab: function (index) {
      
      let i = 0;
      for (const [key, value] of Object.entries(this.$slots.default)) {
          
        if(value.componentOptions && value.componentOptions.propsData && value.componentOptions.propsData.title){
          
          if(i == index){
            value.componentInstance._data.show = true;
          }

          i++;
        }
      }
    }
  }
}
</script>
