<script setup>
import LinkParticle from "../particles/LinkParticle.vue"
import {useRouter} from "vue-router"
const router = useRouter()
</script>
<template>
  <nav
    class="h-16 flex items-center sticky top-0 z-50"
    :class="router.currentRoute.value.name === 'accueil' ? 'bg-darkOlive-200' : 'bg-beige-900'"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <RouterLink
          to="/"
          class="font-neueKaine font-extrabold py-2 px-4 rounded-lg text-4xl"
          :class="
            router.currentRoute.value.name === 'accueil' ? ' text-white-998' : ' text-darkOlive-200'
          "
          >ori</RouterLink
        >
        <div class="flex gap-8">
          <RouterLink
            to="/profil"
            class="py-2 px-4 rounded-lg"
            :class="
              router.currentRoute.value.name === 'accueil'
                ? ' text-white-998'
                : ' text-darkOlive-200'
            "
            >Mon profil</RouterLink
          >
          <RouterLink
            to="/projets"
            class="py-2 px-4 rounded-lg"
            :class="
              router.currentRoute.value.name === 'accueil'
                ? ' text-white-998'
                : ' text-darkOlive-200'
            "
            >Mes projets</RouterLink
          >
          <LinkParticle
            to="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
            target="_blank"
            title="Télécharger mon CV"
            color="darkolive"
          />
          <LinkParticle to="/contact" title="Me contacter" color="verdigris" mailto:orianefrn />
        </div>
      </div>
    </div>
  </nav>
</template>
