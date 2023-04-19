<template>
  <nav :class="`nav${hasSecondarySlot?` has-secondary`:''}`" ref="wrapper">

    <input type="checkbox" name="showMenu" id="showMenu" class="d-none" />
    <input type="checkbox" name="showSearch" id="showSearch" class="d-none" />
    <input type="checkbox" name="showAccount" id="showAccount" class="d-none" />

    <!-- Mobile bar -->
    <div class="nav__mobile-bar">
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

          <div class="col mw-fit-content d-md-none flex-row align-items-center nav__menu-btn">
            <label for="showMenu">Menu</label>
          </div>
        </div>
      </div>
    </div>

    <div class="nav__inner">
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

          <!-- Main menu -->
          <div class="col-12 col-md nav__menu ms-auto flex-row align-items-center">
            <slot></slot>
          </div>

          <div class="col nav__account-btn flex-row align-items-center" v-if="hasAccountSlot">
            <label for="showAccount">

              <svg class="icon" viewBox="0 0 28 28">
                <path d="M14,28a13.861,13.861,0,0,1-9.268-3.533l-.023.047-.721-.738L3.62,23.4l.012-.023a14,14,0,1,1,20.735,0l.012.023-.367.377-.722.738-.024-.045A13.855,13.855,0,0,1,14,28Zm0-9.58a10.5,10.5,0,0,0-1.368.092c-.085.012-.17.03-.252.047-.061.013-.124.026-.187.037l-.077.013c-.266.047-.54.095-.8.165-.108.029-.215.065-.318.1-.063.022-.125.043-.188.063l-.08.026c-.223.071-.454.144-.671.234-.125.05-.245.11-.362.168l-.146.072-.045.021c-.208.1-.423.2-.623.312-.131.074-.257.158-.379.239l-.106.07-.068.044c-.176.114-.359.232-.528.359-.137.1-.267.218-.393.327l-.054.047c-.174.15-.355.306-.519.47-.132.134-.258.277-.38.416l-.018.021c-.16.184-.3.35-.437.527-.12.161-.23.33-.337.494-.076.117-.146.238-.214.356a12.495,12.495,0,0,0,17.109,0l-.022-.037c-.061-.1-.125-.212-.192-.315-.1-.156-.214-.333-.338-.5-.141-.188-.293-.363-.436-.526-.113-.13-.253-.292-.4-.438-.161-.162-.337-.314-.517-.468l-.08-.069c-.118-.1-.24-.209-.368-.307-.183-.137-.379-.264-.568-.387l-.026-.017-.106-.07c-.125-.083-.251-.166-.381-.24-.207-.118-.429-.222-.643-.322l-.024-.011-.152-.074c-.116-.057-.235-.116-.356-.165-.214-.087-.438-.159-.656-.229l-.1-.031c-.066-.021-.132-.043-.2-.066-.1-.035-.2-.07-.309-.1-.264-.07-.538-.118-.8-.165l-.078-.014c-.063-.011-.126-.024-.187-.037-.082-.017-.167-.035-.252-.047A10.483,10.483,0,0,0,14,18.421Zm0-1.473a11.871,11.871,0,0,1,1.54.1c.1.013.192.033.284.052.069.014.139.028.209.04.34.058.672.118,1,.2.14.036.278.082.412.127l.151.05c.309.1.587.188.859.3.148.059.293.127.433.194l.13.061c.306.142.553.266.775.389.188.107.368.22.535.328.26.166.489.322.7.478.156.117.316.244.49.389.209.176.412.361.622.567.156.154.3.293.43.443.209.23.4.472.542.657l.051.066c.1.134.21.272.308.416.021.031.045.061.068.09a1.267,1.267,0,0,1,.085.117,12.525,12.525,0,1,0-19.24,0c.026-.04.056-.078.084-.114s.05-.064.073-.1c.1-.141.2-.278.3-.409l.046-.059c.2-.264.378-.478.555-.672.137-.152.281-.3.417-.43.215-.21.422-.4.635-.578.18-.15.332-.271.479-.381.208-.155.433-.31.709-.486.174-.111.346-.219.526-.319.274-.153.55-.285.783-.393l.112-.053c.144-.069.293-.14.445-.2.282-.113.578-.208.864-.3l.159-.052c.132-.044.265-.088.4-.124.331-.087.675-.148,1-.2.068-.012.137-.026.2-.039.094-.019.191-.039.288-.052A11.827,11.827,0,0,1,14,16.948Z" transform="translate(0 -0.001)" />
  	<path d="M5.2,10.4a5.2,5.2,0,1,1,5.2-5.2A5.206,5.206,0,0,1,5.2,10.4Zm0-8.915A3.714,3.714,0,1,0,8.915,5.2,3.719,3.719,0,0,0,5.2,1.486Z" transform="translate(8.8 4.8)" />

              </svg>
              <span>My account</span>
            </label>
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

    <div class="nav__menu--account" v-if="hasAccountSlot">
      <div class="container">
        <div class="row mb-4">
          <div class="col mw-md-fit-content nav__logo" v-if="hasLogoSlot">
            <slot name="logo"></slot>
          </div>
          <div class="col mw-md-fit-content nav__logo" v-else>
            <a href="/" class="text-decoration-none mb-0">
              <Logo :id="logo" :path="logopath" :desc="logotext" class="pb-0"></Logo>
            </a>
          </div>

          <div class="col mw-fit-content d-md-none flex-row align-items-center nav__menu-btn">
            <label for="showAccount">Account</label>
          </div>

        </div>
      </div>
      <div class="container">
        <slot name="account"></slot>
      </div>

    </div>

    <span class="nav__bg"></span>
  </nav>
</template>

<style lang="scss">
@import "../../../assets/sass/components/nav.scss";
</style>

<script>
import nav from '../../../assets/ts/modules/nav'
import Logo from '../../foundations/Logo/Logo.vue'
import Input from '../../components/Input/Input.vue'
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
    },
    propertylink: {
      type: String,
      required: false
    },
    movebutlerlink: {
      type: String,
      required: false
    },
    iamsoldlink: {
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
    hasAccountSlot() {
      return !!this.$slots.account
    },
    isMarketplace() {
      return false;
    }
  },
  mounted(){

    this.$nextTick(function () {

      nav(this.$refs.wrapper);
    })
  }
}
</script>
