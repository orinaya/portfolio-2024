<script setup>
import router from "@/router"
import {worksItems} from "../services/datas.js"
import HeroSecondary from "@/components/layout/HeroSecondary.vue"
import CardParticle from "../components/particles/CardParticle.vue"

const getImageUrl = (image) => {
  return new URL(`/src/assets/works/${image}`, import.meta.url).href
}

const getProjectDetails = (id) => {
  router.push({path: `/projets/${id}`})
}
</script>

<template>
  <HeroSecondary uptitle="Mes projets" />
  <div class="container">
    <div class="flex justify-between items-center">
      <div class="flex gap-8 py-12 px-0">
        <button><img src="../assets/icons/icon-grid.svg" />Tous mes travaux</button>
        <button><img src="../assets/icons/icon-dev.svg" />Développement</button>
        <button><img src="../assets/icons/icon-design.svg" />Design</button>
        <button><img src="" />Marketing</button>
      </div>
      <div class="flex gap-2 items-center">
        <select class="bg-white-998 rounded-md">
          <option value="default">Trier par</option>
          <option value="default">Date ASC</option>
          <option value="default">Date DESC</option>
        </select>
        <span class="bg-verdigris-900 text-verdigris-400 font-semibold w-fit px-3 rounded"
          >{{ worksItems.length }} resultats</span
        >
      </div>
    </div>

    <div class="flex flex-wrap justify-between gap-12">
      <CardParticle
        v-for="item in worksItems"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :image="getImageUrl(item.image)"
        :softwares="item.softwares"
        :price="item.price"
        @send-project-id="getProjectDetails"
      />
    </div>
  </div>
</template>

<style scoped>
button {
  color: hsl(176, 31%, 20%);
  font-weight: 300;
  font-size: 24px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px;
  border-radius: 5px;

  &:hover {
    background-color: hsl(176, 31%, 70%);
  }
}

select,
span {
  padding: 3px 12px;
}
</style>
