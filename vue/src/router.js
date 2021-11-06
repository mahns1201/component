import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./views/HomePage.vue";
import NotFound from "./views/NotFound.vue";
import InputTag from "./components/InputTag.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/input-tag",
    name: "InputTag",
    component: InputTag,
  },
  {
    path: "/404",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
