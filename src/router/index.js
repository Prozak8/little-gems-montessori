import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Staff from "../views/Staff.vue";
import Programs from "../views/Programs.vue";
import Training from "../views/Training.vue";
import Blog from "../views/Blog.vue";
import Admission from "../views/Admission.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/staff",
    name: "Staff",
    component: Staff
  },
  {
    path: "/programs",
    name: "Programs",
    component: Programs
  },
  {
    path: "/training",
    name: "Training",
    component: Training
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/admission",
    name: "Admission",
    component: Admission
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
