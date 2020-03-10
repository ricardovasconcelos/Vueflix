import Vue from "vue";
import App from "./App.vue";

import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import router from "./router";
import VueYoutube from "vue-youtube";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/index.css";

Vue.use(VueToast);
Vue.use(VueYoutube);

import Vuex from "vuex";
Vue.use(Vuex);

import store from "./store";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
