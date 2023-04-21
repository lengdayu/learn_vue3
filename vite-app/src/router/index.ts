import { createRouter, createWebHistory } from "vue-router";
import diffComponent from "../views/01diff.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: diffComponent,
    },
  ],
});

export default router;
