import Vue from "vue";
import VueRouter from "vue-router";
import Lockscreen from "../views/Lockscreen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Lock Screen",
    component: Lockscreen,
  },
  {
    path: "/home",
    name: "Desktop",
    component: () =>
      import("../views/Desktop.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
