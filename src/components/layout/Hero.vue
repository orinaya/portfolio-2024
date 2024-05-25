<script setup>
import LinkParticle from "../particles/LinkParticle.vue"
</script>
<template>
  <section class="bg-beige-900 hero">
    <!-- <img src="../../assets/img/waves.svg" class="absolute w-full img-bg" /> -->
    <div class="container">
      <div class="flex justify-between text-darkOlive-200 py-20 items-center">
        <div class="max-w-xl flex flex-col gap-12">
          <div class="flex flex-col gap-4 relative">
            <div class="bubble absolute">
              <img src="../../assets/img/talk-bubble.svg" class="relative" />
              <p class="bubble-text absolute text-darkOlive-200 z-20">
                Je recherche une alternance en
                <strong class="text-melon-600">Développement Web</strong>
              </p>
            </div>
            <h1 class="font-neueKaine font-bold text-5xl">
              Hello,
              <br />
              je m'appelle
              <br />
              <span class="text-melon-700 font-black text-5xl">Oriane Frouin !</span>
            </h1>
            <p class="max-w-lg">
              Embarquez dans mon univers, du <strong>design</strong> au
              <strong>développement web</strong> en passant par le <strong>marketing</strong>, je
              vous livre tous les secrets de mon voyage !
            </p>
          </div>

          <div class="flex gap-8">
            <LinkParticle
              to="/projets"
              title="Découvrir mes projets"
              color="melon"
              level="primary"
            />
            <LinkParticle
              to="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=sharing"
              title="Télécharger mon CV"
              color="darkolive"
              iconAfter="download"
            />
          </div>
        </div>
        <div class="image-box flex-1 bg-darkOlive-200 h-full">
          <img src="/src/assets/img/hero-image.svg" class="hero-img relative" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-img {
  height: 500px;
  width: 445px;
  object-fit: contain;
}
.img-bg {
  top: 560px;
}

.hero {
  margin-bottom: 350px;
  padding-bottom: 160px;
}

.bubble {
  left: 135px;
  top: -90px;
}

.bubble-text {
  top: 14px;
  left: 30px;
  max-width: 240px;
}

.image-box {
  background-image: url("../../assets/img/waves.svg");
}
</style>
