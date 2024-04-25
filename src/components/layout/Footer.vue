<script setup></script>
<template>
  <footer class="relative flex items-end">
    <div class="container">
      <div
        class="w-full flex bg-darkOlive-200 items-center justify-around bottom-0 py-3 px-6 rounded-t-xl text-white-998"
      >
        <RouterLink
          to="/"
          class="font-neueKaine font-extrabold text-darkOlive-980 py-2 px-4 rounded-lg text-4xl h-52 flex flex-col items-center"
          >ori</RouterLink
        >
        <div class="flex flex-col gap-4 h-52">
          <h3 class="text-xl font-semibold text-center">Navigation</h3>
          <div class="flex flex-col gap-2">
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/profil">Mon profil</RouterLink>
            <RouterLink to="/projets">Mes projets</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
          </div>
        </div>
        <div class="flex flex-col gap-2 justify-start h-52">
          <h3 class="text-xl font-semibold">Me contacter</h3>
          <p class="font-semibold">Email</p>
          <p>ori.frouin@gmail.com</p>
          <p class="font-semibold">Linkedin</p>
          <p>/in/oriane-frouin</p>
        </div>

        <div class="bg-verdigris-900 flex flex-col items-center justify-center p-4 rounded-lg">
          <h3 class="text-verdigris-400 text-xl font-semibold text-center">Télécharcher mon CV</h3>
          <img src="../../assets/img/cv.png" />
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
  height: 600px;
}
</style>
