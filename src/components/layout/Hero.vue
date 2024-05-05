<script setup>
import LinkParticle from "../particles/LinkParticle.vue"
</script>
<template>
  <section class="bg-darkOlive-200 hero">
    <img src="../../assets/img/waves.svg" class="absolute w-full img-bg" />
    <div class="container">
      <div class="flex justify-between text-darkOlive-980 py-20 items-center">
        <div class="max-w-xl flex flex-col gap-8">
          <div
            class="flex gap-3 bg-darkOlive-230 text-verdigris-700 font-semibold w-fit py-2 px-4 rounded-full relative"
          >
            <div class="bg-white-998 rounded-3xl p-2 absolute top-0 left-0">
              <img class="h-6 w-6" src="../../assets/icons/icon-megaphone.svg" />
            </div>
            <p class="w-full pl-9">Recherche alternance Développement Web</p>
          </div>
          <h1 class="font-neueKaine font-bold text-5xl">
            Hello,
            <br />
            je m'appelle
            <br />
            <span class="text-melon-700 font-black">Oriane Frouin !</span>
          </h1>
          <p class="max-w-lg">
            Embarquez dans mon univers, du <strong>design</strong> au
            <strong>développement web</strong> en passant par le <strong>marketing</strong>, je vous
            livre tous les secrets de mon voyage !
          </p>
          <div class="flex gap-8">
            <LinkParticle
              to="/projets"
              title="Découvrir mes projets"
              color="verdigris"
              level="primary"
            />
            <LinkParticle
              to="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=sharing"
              title="Télécharger mon CV"
              color="melon"
              level="secondary"
            />
          </div>
        </div>
        <div>
          <img src="/src/assets/img/hero-image.png" class="hero-img" />
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
</style>
