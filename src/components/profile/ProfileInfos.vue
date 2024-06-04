<script setup>
import H2Particle from "../particles/H2Particle.vue"
import InformationsParticle from "../particles/InformationParticle.vue"
import {persosItems} from "@/services/datas"

const copy = () => {
  const emailContent = "contact@orianefrouin.fr"
  navigator.clipboard
    .writeText(emailContent)
    .then(() => {
      toast.add({
        severity: "success",
        // summary: "Copié !",
        detail: "Adresse email copiée",
        life: 3000,
      })
    })
    .catch((error) => {
      console.error("Une erreur est survenue lors de la copie du contenu :", error)
    })
}
</script>

<template>
  <section class="container mt-12">
    <div
      class="flex flex-col lg:flex-row lg:justify-evenly justify-start rounded-xl py-12 px-12 lg:px-8 lg:gap-0 gap-8"
      style="background-color: #f5f0ea"
    >
      <div class="flex flex-col gap-8">
        <H2Particle uptitle="Mes infos" title="Me connaitre" />
        <InformationsParticle v-for="item in persosItems" :infos="item.data" :key="item.title" />
      </div>

      <span class="inline-block border-l-2 my-0 mx-5 lg:h-60 h-0" style="color: #d9cfbf"></span>
      <div class="flex flex-col gap-8">
        <H2Particle uptitle="Contact & réseaux" title="Me contacter" />
        <div class="flex flex-col gap-6 w-full">
          <div class="flex flex-wrap gap-5 justify-start items-center">
            <div class="flex items-center gap-4">
              <i class="icon-mail p-2 rounded-md bg-darkOlive-600" />
              <p class="md:w-52 w-fit subtitle">Email</p>
            </div>
            <div class="flex gap-2 items-center justify-end">
              <p class="w-fit">ori.frouin@gmail.com</p>
              <button @click="copy">
                <i class="icon-copy" />
              </button>
            </div>
          </div>
          <div class="flex flex-wrap gap-5 justify-start md:items-center">
            <div class="flex items-center gap-4">
              <i class="icon-tel p-2 rounded-md bg-darkOlive-600" />
              <p class="md:w-52 w-fit subtitle">Téléphone</p>
            </div>
            <div class="flex gap-2 items-center justify-end">
              <p class="w-full">07 70 35 45 69</p>
              <button @click="copy"><i class="icon-copy" /></button>
            </div>
          </div>
          <div class="flex flex-wrap gap-5 justify-start md:items-center">
            <div class="flex items-center gap-4">
              <i class="icon-linkedin p-1 rounded-md bg-verdigris-900"
                ><span class="path1"></span><span class="path2"></span
              ></i>

              <p class="md:w-52 w-fit subtitle">LinkedIn</p>
            </div>
            <div class="flex gap-2 items-center justify-end">
              <a
                href="https://www.linkedin.com/in/oriane-frouin/"
                target="_blank"
                class="w-full flex items-center gap-2"
                >/in/oriane-frouin<i class="icon-squareout"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon-mail::before,
.icon-tel::before {
  font-size: 24px;
  color: #f1f3f2;
}
</style>
