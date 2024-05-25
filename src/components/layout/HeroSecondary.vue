<script setup>
defineProps({
  uptitle: String,
  profil: Boolean,
})
</script>
<template>
  <section class="bg-beige-900 hero">
    <img src="../../assets/img/short_waves.svg" class="absolute w-full img-bg" />
    <div class="container">
      <div class="flex justify-between text-darkOlive-200 py-20 items-center">
        <div class="max-w-xl flex flex-col gap-6">
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
                Découvrir mes compétences à travers des <span>projets concrets</span>
              </h1>
            </template>
          </div>
        </div>
        <div>
          <img src="/src/assets/img/profile_picture.png" class="hero-img" />
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
  top: 340px;
}

.hero {
  margin-bottom: 180px;
  padding-bottom: 160px;
}
</style>
