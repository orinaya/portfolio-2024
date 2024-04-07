<script setup>
import H2Particle from "../particles/H2Particle.vue"
import SkillsParticle from "../particles/SkillsParticle.vue"
import {devItems, designItems, othersItems, languagesItems} from "/src/services/datas.js"

const getImageUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}
</script>

<template>
  <H2Particle
    title="Découvrez mon panel de compétences"
    uptitle="Mes skills"
    icon="icon-skills.svg"
  />
  <SkillsParticle
    v-for="item in devItems"
    :key="item"
    :color="item.color"
    :image="getImageUrl(item.image)"
    :title="item.title"
    :in-progress="item.inProgress"
  />

  <SkillsParticle
    v-for="item in designItems"
    :color="item.color"
    :image="getImageUrl(item.image)"
    :title="item.title"
    :in-progress="item.inProgress"
  />

  <SkillsParticle
    v-for="item in othersItems"
    :color="item.color"
    :image="getImageUrl(item.image)"
    :title="item.title"
    :in-progress="item.inProgress"
  />

  <SkillsParticle
    v-for="item in languagesItems"
    :color="item.color"
    :image="getImageUrl(item.image)"
    :title="item.title"
  />
</template>
