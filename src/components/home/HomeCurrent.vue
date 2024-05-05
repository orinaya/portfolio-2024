<script setup>
import H2Particle from "../particles/H2Particle.vue"
import LinkParticle from "../particles/LinkParticle.vue"

const getImageUrl = (image) => {
  return new URL(`/src/assets/img/${image}`, import.meta.url).href
}

const currentHome = [
  {
    title: "Bachelor Cycle Web et Multimédia",
    text: "Bachelor 1 et Bachelor 2",
    image: "mds-logo.svg",
    date: "Depuis septembre 2022",
  },
  {
    title: "Stage développement Web",
    text: "Bachelor 1 et Bachelor 2",
    image: "floax-logo.svg",
    date: "Depuis avril 2023",
  },
]
</script>

<template>
  <section class="container">
    <div
      class="flex flex-col rounded-xl py-12 justify-center items-center text-center gap-12"
      style="background-color: #f5f0ea"
    >
      <H2Particle
        title="Mes études et poste en cours"
        uptitle="Mon statut"
        icon="icon-skills.svg"
      />
      <div class="w-full flex gap-12 justify-center items-center">
        <div
          v-for="item in currentHome"
          :key="item"
          class="bg-darkOlive-800 h-52 w-80 py-5 px-10 flex flex-col justify-end items-center rounded-xl relative"
        >
          <span
            class="absolute -top-3 z-10 bg-verdigris-700 text-verdigris-100 rounded-full px-3 font-medium"
            >{{ item.date }}</span
          >
          <div
            class="bg-darkOlive-980 w-80 h-24 absolute top-0 rounded-xl flex items-center justify-center"
          >
            <img :src="getImageUrl(item.image)" class="h-full w-full p-6" />
          </div>
          <h3 class="text-verdigris-300 text-xl font-semibold text-center">
            {{ item.title }}
          </h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
      <LinkParticle to="/projets" title="Télécharger mon CV" color="melon" level="secondary" />
    </div>
  </section>
</template>
