import Vue from "vue";
import App from "./App.vue";

import store from "./store";
import router from "./router";
import VueYoutube from "vue-youtube";
import VueToast from "vue-toast-notification";

import "vue-toast-notification/dist/index.css";
import "vue-awesome/icons/flag";
import "vue-awesome/icons";

Vue.use(VueToast);
Vue.use(VueYoutube);


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
