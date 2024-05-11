import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import ProfileView from "@/views/ProfileView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: HomeView,
    },
    {
      path: "/profil",
      name: "profil",
      component: ProfileView,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    return {top: 0}
  },
})

export default router
