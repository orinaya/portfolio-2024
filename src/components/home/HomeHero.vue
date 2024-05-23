<script setup>
import LinkParticle from "../particles/LinkParticle.vue"
</script>

<template>
  <div class="rounded-b-xl mb-24">
    <div class="h-screen flex justify-between w-full">
      <div class="flex flex-1 flex-col">
        <nav class="pl-44 my-8">
          <RouterLink
            to="/"
            class="link font-neueKaine font-extrabold text-4xl text-darkOlive-200 w-fit"
            >ori</RouterLink
          >
        </nav>

        <div class="w-full flex flex-col gap-12 pl-48 py-48">
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
              color="beige"
            />
          </div>
        </div>
      </div>
      <div class="hero-box flex flex-1 flex-col bg-verdigris-300 m-4 rounded-xl items-center">
        <nav class="flex w-fit gap-8 m-4 h-fit justify-between">
          <RouterLink to="/profil" class="link text-verdigris-900">Mon profil</RouterLink>
          <RouterLink to="/projets" class="link text-verdigris-900">Mes projets</RouterLink>
          <LinkParticle
            to="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
            target="_blank"
            title="Télécharger mon CV"
            color="neutral-verdigris"
          />
          <LinkParticle to="/contact" title="Me contacter" color="verdigris" mailto:orianefrn />
        </nav>

        <img src="../../assets/img/hero-image.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-box {
  background-image: url("../../assets/img/hero-waves.svg");
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
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

.link {
  padding: 6px 12px;
  border-radius: 4px;
  width: fit-content;
  height: fit-content;
}
</style>
