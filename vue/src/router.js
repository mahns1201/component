import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import InputTag from "./components/InputTag.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, // 동적 import
  },
  {
    path: "/input-tag",
    name: "InputTag",
    component: InputTag,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
