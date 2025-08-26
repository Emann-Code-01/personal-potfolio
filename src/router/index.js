import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    // {
    //   path: "/project",
    //   name: "project",
    //   component: Project,
    // },
    // {
    //   path: "/contact",
    //   name: "contact",
    //   component: contact,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: About,
    // },
  ],
});

export default router;
