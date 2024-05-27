<script setup>
defineProps({
  uptitle: String,
  profil: Boolean,
})
</script>
<template>
  <section class="bg-beige-900 hero relative">
    <div class="container">
      <div class="flex justify-between text-darkOlive-200 py-20 items-center">
        <div class="max-w-xl flex flex-col gap-6">
          <div>
            <div class="flex gap-2">
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

        <div class="lg:block hidden relative mt-10">
          <img src="/src/assets/img/profile_picture.png" class="hero-img" />
          <img
            src="../../assets/img/talk-bubble-reverse.svg"
            class="bubble absolute float-content"
          />
        </div>
      </div>
    </div>
    <img src="../../assets/img/short_waves.svg" class="absolute w-full img-bg border-box" />
  </section>
</template>

width: 100%; box-sizing: border-box; object-fit: cover; height: 127px;
<style scoped>
.bubble {
  right: 150px;
  top: -40px;
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
  max-width: none;
  height: auto;
}

.hero-img {
  height: 200px;
  width: 200px;
  object-fit: contain;
}
.img-bg {
  object-fit: cover;
  height: 127px;
  top: 250px;
}

.hero {
  margin-bottom: 180px;
}

@media (min-width: 768px) {
  .img-bg {
    top: 340px;
    height: auto;
  }

  .hero {
    margin-bottom: 180px;
    padding-bottom: 130px;
  }
}
</style>
