<template>
  <nav :class="`nav${hasSecondarySlot?` has-secondary`:''}`" ref="wrapper">

    <input type="checkbox" name="showMenu" id="showMenu" class="d-none" />
    <input type="checkbox" name="showSearch" id="showSearch" class="d-none" />

    <div class="nav__inner" v-if="isMarketplace === false">
      <div class="container">
        <div class="row">
          <div class="col mw-md-fit-content nav__logo" v-if="hasLogoSlot">
            <slot name="logo"></slot>
          </div>
          <div class="col mw-md-fit-content nav__logo" v-else>
            <a href="/" class="text-decoration-none mb-0">
              <Logo :id="logo" :path="logopath" :desc="logotext" class="pb-0"></Logo>
            </a>
          </div>

          <div class="col mw-fit-content nav__search-btn flex-row align-items-center" v-if="hasSearchSlot">
            <label for="showSearch">
              <svg class="icon" viewBox="0 0 32 32">
                <title>Search</title>
                <ellipse cx="14.92" cy="13.81" rx="11.92" ry="11.81" class="icon__outline" />
                <line x1="22.68" y1="22.75" x2="30" y2="30" class="icon__outline" />
              </svg>
            </label>
          </div>

          <div class="col mw-fit-content d-md-none flex-row align-items-center nav__menu-btn">
            <label for="showMenu">Menu</label>
          </div>

          <div class="col-12 col-md nav__menu ms-auto flex-row align-items-center">
            <slot></slot>
          </div>

          <div class="col-12 col-md nav__btn mw-md-fit-content flex-row align-items-center" v-if="btnlink">
            <a :href="btnlink" class="btn me-0" v-html="btntext"></a>
          </div>


        </div>
      </div>
      <div class="nav__menu--secondary" v-if="hasSecondarySlot">
        <div class="container">
          <slot name="secondary"></slot>
        </div>
      </div>
      <div class="nav__menu--search" v-if="hasSearchSlot">
        <div class="bg-gradient pt-4">
          <div class="container">
            <slot name="search"></slot>
          </div>
        </div>
      </div>
    </div>

    <div class="nav__inner" v-else>
      <div class="container">
        <div class="row">
          <div class="col nav__logo">
            <a href="/standalone/marketplace" :class="`text-decoration-none mb-0 ${logo=='property'?'current':''}`">
              <Logo id="property" class="pb-0 pe-0"></Logo>
            </a>

            <a href="/standalone/movebutler" :class="`text-decoration-none mb-0 ${logo=='movebutler'?'current':''}`">
              <Logo id="movebutler" class="pb-0 pe-0"></Logo>
            </a>

            <a href="/standalone/agent" :class="`text-decoration-none mb-0 ${logo=='sold'?'current':''}`">
              <Logo id="sold" class="pb-0 pe-0"></Logo>
            </a>
          </div>

          <div class="col mw-fit-content flex-row align-items-center nav__menu-btn">
            <label for="showMenu">Menu</label>
          </div>
        </div>
      </div>
      <div class="nav__menu--secondary bg-primary" v-if="hasSecondarySlot">
        <div class="container">
          <slot name="secondary"></slot>
        </div>
      </div>
      <div class="nav__menu flex-row">

        
          <slot></slot>



      </div>

    </div>
  </nav>
</template>

<style lang="scss">
@import "../../../assets/sass/components/nav.scss";
</style>

<script>
import nav from '../../../assets/js/modules/nav.js'
import Logo from '../../foundations/Logo/Logo.vue'
import Input from '../../elements/Input/Input.vue'
import Icon from '../../foundations/Icon/Icon.vue'


export default {
  components: {
    Input,
    Logo,
    Icon
  },
  name: 'Nav',
  props: {
    logo: {
      type: String,
      required: false
    },
    logotext: {
      type: String,
      required: false
    },
    logopath: {
      type: String,
      required: false
    },
    search: {
      type: String,
      required: false
    },
    btnlink: {
      type: String,
      required: false
    },
    btntext: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      locationSave: ''
    }
  },
  methods: {
    subIsActive (input) {
      const paths = Array.isArray(input) ? input : [input]
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0 // current path starts with this path string
      })
    }
  },
  computed: {
    hasLogoSlot() {
      return !!this.$slots.logo
    },
    hasSecondarySlot() {
      return !!this.$slots.secondary
    },
    hasSearchSlot() {
      return !!this.$slots.search
    },
    isMarketplace() {
      return this.$vnode.data.staticClass && this.$vnode.data.staticClass.includes('nav--marketplace') ? true : false;
    }
  },
  mounted(){

    this.$nextTick(function () {
      
      nav(this.$refs.wrapper);
    })
  }
}
</script>
