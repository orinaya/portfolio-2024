<script setup></script>
<template>
  <footer class="relative flex items-end">
    <div class="container">
      <div
        class="w-full flex items-center justify-around bottom-0 py-3 px-6 rounded-t-xl text-darkOlive-980"
      >
        <RouterLink
          to="/"
          class="font-neueKaine font-extrabold text-darkOlive-980 py-2 px-4 rounded-lg text-4xl h-52 flex flex-col items-center"
          >ori</RouterLink
        >

        <div class="flex flex-col gap-2 justify-start h-52">
          <h3 class="text-xl font-semibold">Me contacter</h3>
          <p class="font-semibold">Email</p>
          <a href="mailto:contact@orianefrouin.fr">contact@orianefrouin.fr</a>
          <p class="font-semibold">Linkedin</p>
          <a href="https://www.linkedin.com/in/oriane-frouin/" target="_blank">/in/oriane-frouin</a>
        </div>

        <div class="bg-verdigris-900 flex flex-col items-center justify-center p-4 rounded-lg">
          <h3 class="text-verdigris-400 text-xl font-semibold text-center">Télécharcher mon CV</h3>
          <a
            href="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
            target="_blank"
            ><img src="../../assets/img/cv.png" class="h-48"
          /></a>
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
  height: 460px;
  margin-top: 110px;
}
</style>
