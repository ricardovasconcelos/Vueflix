import Vue from "vue";
import Router from "vue-router";
import Preloader from "./pages/Preloader.vue";
import Main from "./pages/Main.vue";
import Detail from "./pages/Detail.vue";
import MyList from "./pages/MyList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Preloader", component: Preloader },
    { path: "/Main", name: "Main", component: Main },
    { path: "/Main/Detail/:id", name: "Detail", component: Detail },
    { path: "/MyList", name: "MyList", component: MyList }
  ]
});
