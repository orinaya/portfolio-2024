import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import ProfileView from "@/views/ProfileView.vue"
import ProjectsView from "@/views/ProjectsView.vue"
import ProjectsDetailsView from "@/views/ProjectsDetailsView.vue"

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
    {
      path: "/projets",
      name: "projets",
      component: ProjectsView,
    },
    {
      path: "/projets/:path",
      name: "projet-details",
      component: ProjectsDetailsView,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    return {top: 0}
  },
})

export default router
