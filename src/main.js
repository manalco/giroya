import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import BootstrapVue from 'bootstrap-vue'
import VueSession from 'vue-session'
import Vuetify from 'vuetify'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(BootstrapVue);
Vue.use(Vuetify)
Vue.use(VueSession)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})