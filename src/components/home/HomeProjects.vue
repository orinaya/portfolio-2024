<script setup>
import H2Particle from "../particles/H2Particle.vue"
import CardParticle from "../../components/particles/CardParticle.vue"
import {worksItems} from "@/services/datas"
import router from "@/router"
import LinkParticle from "../particles/LinkParticle.vue"

const getImageUrl = (image) => {
  return new URL(`/src/assets/works/${image}`, import.meta.url).href
}

const getProjectDetails = (path) => {
  router.push({path: `/projets/${path}`})
}
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-12">
      <H2Particle
        title="Des projets multidisciplinaires"
        uptitle="Mes projets"
        icon="icon-skills.svg"
      />

      <div class="flex justify-between flex-wrap gap-8">
        <CardParticle
          v-for="item in worksItems.slice(0, 3)"
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :image="getImageUrl(item.image)"
          :softwares="item.softwares"
          @send-project-title="getProjectDetails(item.path)"
        />
      </div>
      <LinkParticle
        to="/projets"
        title="Découvrir mes projets"
        color="melon"
        iconAfter="arrowafter"
      />
    </div>
  </section>
</template>
