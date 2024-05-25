<script setup>
import LinkParticle from "../particles/LinkParticle.vue"
import {useRouter} from "vue-router"
const router = useRouter()
</script>
<template>
  <nav class="h-16 flex items-center sticky top-0 z-50 bg-beige-900">
    <div class="flex flex-1">
      <RouterLink
        to="/"
        class="link font-neueKaine font-extrabold text-4xl text-darkOlive-200 w-fit ml-48"
        >ori</RouterLink
      >
    </div>

    <div class="flex flex-1 justify-center items-center m-4">
      <div class="flex gap-8">
        <RouterLink to="/profil" class="link text-darkOlive-200">Mon profil</RouterLink>
        <RouterLink to="/projets" class="link text-darkOlive-200">Mes projets</RouterLink>
        <LinkParticle
          to="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
          target="_blank"
          title="Télécharger mon CV"
          color="beige"
          iconAfter="download"
        />
        <LinkParticle
          to="/contact"
          title="Me contacter"
          color="melon"
          mailto:orianefrn
          iconAfter="tel"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.link {
  padding: 6px 12px;
  border-radius: 4px;
  width: fit-content;
  height: fit-content;
}
</style>
