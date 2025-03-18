import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StadiumAddView from "../views/StadiumAddView.vue";
import SignUpView from "../views/SignUpView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/stadiums/add",
    component: StadiumAddView,
  },
  {
    path: "/signup",
    component: SignUpView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;