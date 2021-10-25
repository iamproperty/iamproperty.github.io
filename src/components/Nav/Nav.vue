<template>
  <nav :class="`nav${hasSecondarySlot?` has-secondary`:''}`" ref="wrapper">

    <input type="checkbox" name="showMenu" id="showMenu" class="d-none" />
    <input type="checkbox" name="showSearch" id="showSearch" class="d-none" />

    <div class="nav__inner">
      <div class="container">
        <div class="row">
          <div class="col mw-md-fit-content nav__logo">
            <a href="/" class="text-decoration-none mb-0">
              <Logo :id="logo" :path="logopath" :desc="logotext"></Logo>
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
      <div class="nav__menu--secondary bg-primary" v-if="hasSecondarySlot">
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

    
  </nav>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
//@import "../../../node_modules/bootstrap/scss/nav";
@import "../../../assets/sass/components/nav.scss";
</style>

<script>
import nav from '../../../assets/js/modules/nav.js'
import Logo from '../../foundations/Logo/Logo.vue'

export default {
  components: {
    Logo
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
    hasSecondarySlot() {
      return !!this.$slots.secondary
    },
    hasSearchSlot() {
      return !!this.$slots.search
    }
  },
  mounted(){

    this.$nextTick(function () {
      
      nav(this.$refs.wrapper);
    })
  }
}
</script>
