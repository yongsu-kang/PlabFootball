import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import StadiumAddView from "../views/StadiumAddView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/stadiums/add",
    component: StadiumAddView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;