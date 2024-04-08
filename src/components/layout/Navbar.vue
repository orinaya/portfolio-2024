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
          <RouterLink to="/projets" class="py-2 px-4 rounded-lg">Mes projets</RouterLink>
          <LinkParticle to="/contact" title="Me contacter" color="mint" />
        </div>
      </div>
    </div>
  </nav>
</template>
