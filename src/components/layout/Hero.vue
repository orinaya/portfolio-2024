<script setup>
import Navbar from "./Navbar.vue"
</script>
<template>
  <section class="bg-darkOlive-200 rounded-b-2xl container px-10">
    <Navbar />

    <div class="flex justify-between text-darkOlive-980 px-8 py-40">
      <div class="max-w-xl flex flex-col gap-5">
        <h1 class="font-neueKaine font-extrabold text-5xl">
          Hello,
          <br />
          je m'appelle
          <br />
          <span class="text-melon-700">Oriane Frouin !</span>
        </h1>
        <p class="max-w-md">
          Embarquez dans mon univers, du <strong>design</strong> au
          <strong>développement web</strong> en passant par le <strong>marketing</strong>, je vous
          livre tous les secrets de mon voyage !
        </p>
        <div></div>
      </div>
      <div><img src="/src/assets/img/hero-image.png" class="h-96 w-96 object-contain" /></div>
    </div>
  </section>
</template>
