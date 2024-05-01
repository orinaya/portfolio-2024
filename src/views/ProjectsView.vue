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

  <div class="filter-container container">
    <div class="filter">
      <button><img src="../assets/icons/icon-grid.svg" />Tous mes travaux</button>
      <button><img src="../assets/icons/icon-dev.svg" />Développement</button>
      <button><img src="../assets/icons/icon-design.svg" />Design</button>
      <button><img src="" />Marketing</button>
    </div>
    <div>
      <select>
        <option value="default">Trier par</option>
        <option value="default">Date ASC</option>
        <option value="default">Date DESC</option>
      </select>
      <span class="container">{{ worksItems.length }} resultats</span>
    </div>
  </div>
  <div class="all-works container">
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
    <!-- <CardParticle
      v-for="item in worksItems"
      :id="item.id"
      :title="item.title"
      :description="item.description"
      :image="getImageUrl(item.image)"
      :softwares="item.softwares"
      :price="item.price"
      @send-project-id="getProjectDetails"
    /> -->
  </div>
</template>

<style scoped>
.all-works {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px;
}

.filter {
  display: flex;
  gap: 32px;
  padding: 48px 0;
}

.filter-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-container > div:last-child {
  display: flex;
  gap: 8px;
}
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

select {
  height: fit-content;
  width: fit-content;
}

span {
  background-color: var(--mint-700);
  color: var(--mint-300);
  font-weight: 700;
  width: fit-content;
  padding: 2px 10px;
  border-radius: 4px;
}
</style>
