import { createRouter, createWebHistory } from "vue-router";
import SignInView from "@/views/SignInView.vue";
import HomeView from "@/views/HomeView.vue";
import DashboardView from "@/views/DashboardView.vue";
import ProductPageView from "@/views/ProductPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-view",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "sign-in",
      component: SignInView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/product",
      name: "product-page",
      component: ProductPageView,
    },
  ],
});

export default router;
