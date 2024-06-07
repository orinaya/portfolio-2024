<script setup>
import ExternalLinkParticle from "../particles/ExternalLinkParticle.vue"
</script>

<template>
  <footer class="relative flex items-end">
    <div class="container">
      <div
        class="w-full flex flex-col items-start justify-between bottom-0 py-3 lg:px-6 px-0 text-darkOlive-200"
      >
        <img
          src="../../assets/img/ori-logo.svg"
          class="h-20 w-full flex justify-center lg:mt-12 mb-12"
        />
        <div
          class="w-full flex flex-wrap items-start lg:justify-around justify-between bottom-0 py-3 px-6 rounded-t-xl text-darkOlive-200 lg:h-40 h-fit gap-4 md:gap-0"
        >
          <h2
            class="md:text-4xl text-3xl font-neueKaine font-extrabold lg:w-fit w-full mb-8 lg:mb-0"
          >
            Une opportunité ? <br /><span class="font-normal">Discutons-en !</span>
          </h2>

          <div class="flex flex-col gap-2 justify-start">
            <p class="font-semibold">Email</p>
            <p class="flex items-center gap-2"><i class="icon-mail"></i>ori.frouin@gmail.com</p>

            <p class="font-semibold mt-2">Téléphone</p>
            <p class="flex items-center gap-2"><i class="icon-tel"></i>07 70 35 45 69</p>
          </div>

          <div class="flex flex-col gap-2 justify-start">
            <p class="font-semibold">Réseaux sociaux</p>
            <a
              href="https://www.linkedin.com/in/oriane-frouin/"
              target="_blank"
              class="flex items-center gap-2"
            >
              <i class="icon-linkedin">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              /in/oriane-frouin
              <i class="icon-squareout"></i>
            </a>
            <a href="https://github.com/orinaya" target="_blank" class="flex items-center gap-2">
              <i class="icon-github"></i>
              orinaya
              <i class="icon-squareout"></i>
            </a>
          </div>
        </div>
        <div class="w-full flex justify-center lg:mt-12 mt-4">
          <ExternalLinkParticle
            href="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
            target="_blank"
            title="Télécharger mon CV"
            color="neutral-verdigris"
            iconAfter="download"
          />
        </div>

        <div class="w-full mt-12">
          <p class="text-center">&copy; 2024 Oriane Frouin</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-image: url("../../assets/img/footer-waves.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: 700px;
  margin-top: 110px;
}

@media (min-width: 768px) {
  footer {
    height: 600px;
  }
}
</style>
