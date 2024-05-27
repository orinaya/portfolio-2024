<script setup>
import H2Particle from "../particles/H2Particle.vue"
import SkillsParticle from "../particles/SkillsParticle.vue"
import {devItems, designItems, othersItems, languagesItems} from "/src/services/datas.js"

const getImageUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}
</script>

<template>
  <section class="container">
    <H2Particle
      title="Découvrez mon panel de compétences"
      uptitle="Mes skills"
      icon="icon-skills.svg"
      class="mb-12"
    />

    <div class="flex flex-wrap lg:justify-start justify-between w-full gap-6">
      <div
        class="rounded-xl w-full lg:w-2/5 p-6 flex flex-col gap-4"
        style="background-color: #fff"
      >
        <h3 class="text-verdigris-300 text-xl font-regular">Développement</h3>
        <div class="flex flex-wrap lg:gap-2 gap-1">
          <SkillsParticle
            v-for="item in devItems"
            :key="item"
            :color="item.color"
            :image="getImageUrl(item.image)"
            :title="item.title"
            :in-progress="item.inProgress"
          />
        </div>
      </div>

      <div class="rounded-xl lg:w-56 p-6 flex flex-col gap-4" style="background-color: #fff">
        <h3 class="text-verdigris-300 text-xl font-regular">Design</h3>
        <div class="flex flex-wrap lg:gap-2 gap-1">
          <SkillsParticle
            v-for="item in designItems"
            :color="item.color"
            :image="getImageUrl(item.image)"
            :title="item.title"
            :in-progress="item.inProgress"
          />
        </div>
      </div>

      <div class="rounded-xl lg:w-56 p-6 flex flex-col gap-4" style="background-color: #fff">
        <h3 class="text-verdigris-300 text-xl font-regular">Autres</h3>
        <div class="flex flex-wrap lg:gap-2 gap-1">
          <SkillsParticle
            v-for="item in othersItems"
            :color="item.color"
            :image="getImageUrl(item.image)"
            :title="item.title"
            :in-progress="item.inProgress"
          />
        </div>
      </div>

      <div class="rounded-xl w-56 p-6 flex flex-col gap-4" style="background-color: #fff">
        <h3 class="text-verdigris-300 text-xl font-regular">Langues</h3>
        <div class="flex flex-wrap lg:gap-2 gap-1">
          <SkillsParticle
            v-for="item in languagesItems"
            :color="item.color"
            :image="getImageUrl(item.image)"
            :title="item.title"
          />
        </div>
      </div>
    </div>
    <div class="mt-5 flex gap-2 items-center">
      <span class="w-2 h-2 rounded-full" style="background-color: #4ebc6c"></span>
      <p>En cours d'apprentissage</p>
    </div>
  </section>
</template>
