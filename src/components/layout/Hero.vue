<script setup></script>
<template>
  <section class="bg-darkOlive-200 hero">
    <img src="../../assets/img/waves.svg" class="absolute w-full img-bg" />
    <div class="container">
      <div class="flex justify-between text-darkOlive-980 py-20 items-center">
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
  top: 524px;
}

.hero {
  margin-bottom: 350px;
  padding-bottom: 160px;
}
</style>
