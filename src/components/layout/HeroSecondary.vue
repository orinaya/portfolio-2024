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
          <img src="/src/assets/img/profile_picture.png" class="hero-img relative" />
          <div class="bubble absolute float-content">
            <img src="../../assets/img/talk-bubble-reverse.svg" class="relative" />
            <p class="bubble-text absolute text-darkOlive-200 z-20">
              “ Ma passion ? Fixer les problèmes de code que j'ai créé ”
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bubble {
  right: 400px;
  top: 140px;
}

.bubble-text {
  top: 14px;
  left: 30px;
  max-width: 300px;
  /* text-align: end; */
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}

.float-content {
  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;
  img {
    width: 100%;
    height: auto;
  }
}

.hero-img {
  /* height: 500px; */
  /* width: 445px; */
  height: 200px;
  width: 200px;
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
