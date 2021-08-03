import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import VueHighlightJS from 'vue-highlightjs'

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../assets/sass/main.scss'
import '@/assets/css/default.css'

Vue.use(BootstrapVue)
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
