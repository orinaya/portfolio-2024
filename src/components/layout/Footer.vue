<script setup></script>
<template>
  <footer class="relative">
    <div class="container">
      <div class="w-full bg-darkOlive-200 items-center justify-center absolute bottom-0">
        <RouterLink
          to="/"
          class="font-neueKaine font-extrabold text-darkOlive-980 py-2 px-4 rounded-lg text-4xl"
          >ori</RouterLink
        >

        <div>
          <h3 class="text-darkOlive-100 text-xl font-semibold text-center">Plan du site</h3>
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
