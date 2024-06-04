<script setup>
import H2Particle from "../particles/H2Particle.vue"
import LinkParticle from "../particles/LinkParticle.vue"
import {currentItems} from "@/services/datas"

const getImageUrl = (image) => {
  return new URL(`/src/assets/img/${image}`, import.meta.url).href
}
</script>

<template>
  <section class="container">
    <div
      class="flex flex-col rounded-xl py-12 justify-center items-center text-center gap-12 lg:px-0 px-4"
      style="background-color: #f5f0ea"
    >
      <H2Particle
        title="Mes études et poste en cours"
        uptitle="Mon statut"
        icon="icon-skills.svg"
      />
      <div class="w-full flex flex-wrap gap-12 justify-center items-center">
        <div
          v-for="item in currentItems"
          :key="item"
          class="bg-darkOlive-800 lg:h-52 h-44 w-80 py-5 lg:px-10 px-0 flex flex-col justify-end items-center rounded-xl relative hover:scale-105 transition-transform duration-200 hover:brightness-110 hover:drop-shadow-xl"
        >
          <span
            class="absolute -top-3 z-10 bg-verdigris-700 text-verdigris-100 rounded-full px-3 font-medium w-fit"
            >{{ item.date }}</span
          >
          <div
            class="bg-darkOlive-980 lg:w-80 w-full lg:h-24 h-16 absolute top-0 rounded-xl flex items-center justify-center"
          >
            <img :src="getImageUrl(item.image)" class="h-full w-full lg:p-6 pb-4 pt-5" />
          </div>
          <h3 class="text-verdigris-300 text-xl font-semibold text-center">
            {{ item.title }}
          </h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
      <LinkParticle
        to="/"
        title="Voir mon parcours"
        color="melon"
        level="secondary"
        iconAfter="arrowafter"
      />
    </div>
  </section>
</template>
