<script setup>
import BreadcrumbParticle from "@/components/particles/BreadcrumbParticle.vue"

defineProps({
  uptitle: String,
  profil: Boolean,
  pageName: String,
  previousPages: {
    type: Object,
    required: false,
    path: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
  },
})
</script>
<template>
  <section class="bg-beige-900 hero">
    <img src="../../assets/img/mini_waves.svg" class="absolute w-full img-bg" />
    <div class="container">
      <!-- <BreadcrumbParticle :pageName="pageName" :previousPages="previousPages" class="container" /> -->

      <div class="flex justify-between text-darkOlive-200 py-20 items-center">
        <div class="max-w-2xl flex flex-col gap-6">
          <div>
            <div class="flex gap-2">
              <!-- <img :src="getImageUrl(icon)" /> -->
              <p class="uppercase text-melon-700 text-xl font-medium">{{ uptitle }}</p>
            </div>
            <template v-if="profil">
              <h1 class="font-neueKaine font-extrabold text-4xl">
                Comprendre mon <span>univers</span> et mes <span>valeurs</span>
              </h1>
            </template>
            <template v-else>
              <h1 class="font-neueKaine font-extrabold text-4xl">
                Mes <span>compétences</span> en action
              </h1>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-img {
  /* height: 500px; */
  /* width: 445px; */
  object-fit: contain;
}
.img-bg {
  top: 220px;
}

.hero {
  margin-bottom: 49px;
  /* padding-bottom: 49px; */
}
</style>
