<script setup>
import LinkParticle from "../particles/LinkParticle.vue"
</script>
<template>
  <nav class="bg-darkOlive-200 h-16 flex items-center sticky top-0 z-50">
    <div class="container">
      <div class="flex justify-between items-center">
        <RouterLink
          to="/"
          class="font-neueKaine font-extrabold text-darkOlive-980 py-2 px-4 rounded-lg text-4xl"
          >ori</RouterLink
        >
        <div class="flex gap-8">
          <RouterLink to="/profil" class="py-2 px-4 rounded-lg">Mon profil</RouterLink>
          <RouterLink
            to="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
            class="py-2 px-4 rounded-lg"
            target="_blank"
            >Télécharger mon CV</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>
