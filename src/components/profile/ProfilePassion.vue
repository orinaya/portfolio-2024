<script setup>
import H2Particle from "../particles/H2Particle.vue"
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-8">
      <H2Particle title="Explorer mon univers" uptitle="Passions & hobbies" />
      <div class="grid grid-cols-7 gap-8">
        <div
          class="col-span-3 flex flex-col bg-melon-900 py-6 px-8 items-center justify-center gap-3 rounded-xl"
        >
          <div class="flex gap-2 items-center justify-center text-2xl font-semibold text-melon-600">
            <img src="../../assets/icons/icon-sportcar.svg" />
            <h3>Automobile</h3>
          </div>
          <p class="font-semibold text-xl text-melon-100">Endurance et Formule 1</p>
          <p class="text-center">
            Je suis passionnée d’automobile en général mais la Formule 1 est ma plus grande passion.
            Depuis 2 ans, je suis également une grande fan d’endurance.
          </p>
        </div>

        <div class="col-span-2">
          <img
            src="../../assets/img/passions/peugeot.jpg"
            class="h-72 w-full object-cover rounded-xl object-center"
          />
        </div>

        <div class="col-span-2">
          <img
            src="../../assets/img/passions/ferrari.jpg"
            class="h-72 w-full object-cover rounded-xl object-center"
          />
        </div>

        <div class="col-span-2">
          <img
            src="../../assets/img/passions/lotr.jpg"
            class="h-72 w-full object-cover rounded-xl"
          />
        </div>

        <div
          class="col-span-3 flex flex-col py-6 px-8 items-center justify-center gap-3 rounded-xl bg-verdigris-900"
        >
          <div
            class="flex gap-2 items-center justify-center text-2xl font-semibold text-verdigris-400"
          >
            <img src="../../assets/icons/icon-tv.svg" />
            <h3>Audiovisuel</h3>
          </div>
          <p class="font-semibold text-xl text-melon-100">Films / Séries / Animes</p>
          <p class="text-center">
            Férue de fantasy et science-fiction, j’aime naturellement le Seigneur des Anneaux, de
            Star Wars et Doctor Who. En terme de Seinen et Shonen, One Piece et Berserk sont mes
            favoris !
          </p>
        </div>

        <div class="col-span-2">
          <img src="../../assets/img/passions/sw.jpg" class="h-72 w-full object-cover rounded-xl" />
        </div>

        <div class="col-span-2">
          <img
            src="../../assets/img/passions/rpg-1.jpg"
            class="h-72 w-full object-cover rounded-xl"
          />
        </div>

        <div class="col-span-2">
          <img
            src="../../assets/img/passions/rpg-2.jpg"
            class="h-72 w-full object-cover rounded-xl"
          />
        </div>

        <div
          class="col-span-3 flex flex-col py-6 px-8 items-center justify-center gap-3 rounded-xl bg-darkOlive-900"
        >
          <div
            class="flex gap-2 items-center justify-center text-2xl font-semibold text-darkOlive-400"
          >
            <img src="../../assets/icons/icon-dice.svg" />
            <h3>Jeux</h3>
          </div>
          <p class="font-semibold text-xl text-melon-100">Jeux de société / Jeux de rôle</p>
          <p class="text-center">
            Voici pour moi le meilleur moyen pour s’évader et surtout passer des moments qualitatifs
            et mémorables entre amis !
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
