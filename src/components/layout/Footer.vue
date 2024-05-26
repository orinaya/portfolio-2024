<script setup>
import ExternalLinkParticle from "../particles/ExternalLinkParticle.vue"
import LinkParticle from "../particles/LinkParticle.vue"
</script>
<template>
  <footer class="relative flex items-end">
    <div class="container">
      <div
        class="w-full flex flex-col items-start justify-between bottom-0 py-3 px-6 text-darkOlive-200"
      >
        <div
          class="w-full flex items-start justify-around bottom-0 py-3 px-6 rounded-t-xl text-darkOlive-200 h-40"
        >
          <h2 class="text-4xl font-neueKaine font-extrabold">
            Une opportunité ? <br /><span class="font-normal">Discutons-en !</span>
          </h2>
          <div class="flex flex-col gap-2 justify-start">
            <!-- <h3 class="text-xl font-semibold">Me contacter</h3> -->
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
            </a>
            <a href="https://github.com/orinaya" target="_blank" class="flex items-center gap-2">
              <i class="icon-linkedin">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              orinaya
            </a>
          </div>

          <!-- <div class="bg-verdigris-900 flex flex-col items-center justify-center p-4 rounded-lg">
          <h3 class="text-verdigris-400 text-xl font-semibold text-center">Télécharcher mon CV</h3>
          <a
            href="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
            target="_blank"
            ><img src="../../assets/img/cv.png" class="h-48"
          /></a>
        </div> -->
        </div>
        <div class="w-full flex justify-center mt-12">
          <ExternalLinkParticle
            href="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
            target="_blank"
            title="Télécharger mon CV"
            color="neutral-verdigris"
            iconAfter="download"
          />
        </div>

        <div class="w-full mt-12">
          <p class="text-center">&copy; 2024 Oriane Frouin.</p>
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
  height: 540px;
  margin-top: 110px;
}
</style>
