<script setup>
import router from "@/router"
import {worksItems} from "../services/datas.js"
import HeroTertiary from "@/components/layout/HeroTertiary.vue"
import CardParticle from "../components/particles/CardParticle.vue"
import {computed, ref} from "vue"

const getImageUrl = (image) => {
  return new URL(`/src/assets/works/${image}`, import.meta.url).href
}

const getProjectDetails = (path) => {
  router.push({path: `/projets/${path}`})
}

const previousPages = [
  {
    path: "/projets",
    name: "Projets",
  },
]

const selectedCategory = ref("all")

const selectedSort = ref("default")
const filteredMovies = computed(() => {
  let filtered = worksItems

  if (selectedCategory.value !== "all") {
    filtered = filtered.filter((item) =>
      item.category.includes(selectedCategory.value.toUpperCase())
    )
  }

  switch (selectedSort.value) {
    case "date_asc":
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
      break
    case "date_desc":
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
      break
  }
  return filtered
})
</script>

<template>
  <HeroTertiary uptitle="Mes projets" pageName="Projets" :previousPages="previousPages" />
  <div class="container">
    <div class="flex lg:flex-row flex-col-reverse justify-between items-center">
      <div class="flex flex-wrap gap-5 py-12 px-0">
        <button
          @click="selectedCategory = 'all'"
          :class="selectedCategory !== 'all' ? 'button' : 'focus'"
        >
          <i class="icon-all"></i>Tous mes projets
        </button>
        <button @click="selectedCategory = 'DEVELOPPEMENT'">
          <i class="icon-dev"></i>Développement
        </button>
        <button @click="selectedCategory = 'WEBDESIGN'">
          <i class="icon-layout"></i>Webdesign
        </button>
        <button @click="selectedCategory = 'DESIGN GRAPHIQUE'">
          <i class="icon-design"></i>Design
        </button>
        <button @click="selectedCategory = 'MARKETING'">
          <i class="icon-marketing"></i>Marketing & Communication
        </button>
      </div>
      <div class="flex gap-2 items-center">
        <span class="bg-verdigris-900 text-verdigris-400 font-semibold w-fit px-3 rounded"
          >{{ worksItems.length }} resultats</span
        >
      </div>
    </div>

    <div class="flex flex-wrap justify-start lg:gap-12 gap-8">
      <CardParticle
        v-for="item in filteredMovies"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :image="getImageUrl(item.image)"
        :softwares="item.softwares"
        :date="item.date"
        @send-project-id="getProjectDetails(item.path)"
      />
    </div>
  </div>
</template>

<style scoped>
button,
.button {
  color: hsl(176, 31%, 20%);
  font-weight: 300;
  font-size: 18px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: hsl(176, 31%, 70%);
  }
}

.focus {
  background-color: hsl(176, 31%, 70%);
}

select,
span {
  padding: 3px 12px;
}
</style>
