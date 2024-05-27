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
    <div class="container">
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
    <img src="../../assets/img/mini_waves.svg" class="absolute w-full img-bg border-box" />
  </section>
</template>

<style scoped>
.img-bg {
  object-fit: cover;
  top: 350px;
  height: 50px;
}

.hero {
  margin-bottom: 64px;
}

@media (min-width: 768px) {
  .img-bg {
    top: 250px;
    height: auto;
  }
}
</style>
