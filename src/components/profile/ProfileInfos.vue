<script setup>
import H2Particle from "../particles/H2Particle.vue"
import InformationsParticle from "../particles/InformationParticle.vue"
import {persosItems, contactItems} from "@/services/datas"
import LinkParticle from "../particles/LinkParticle.vue"
// import {useToast} from "primevue/usetoast"
// import Toast from "primevue/toast"

// const toast = useToast()
// const infos = [
//   {
//     icon: "icon-mail-olive.svg",
//     subtitle: "Email",
//     content: "contact@orianefrouin.fr",
//   },
//   {
//     icon: "icon-tel.svg",
//     subtitle: "Téléphone",
//     content: "07 70 35 45 69",
//   },
// ]

const getIconUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}

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
  <section class="container">
    <div class="flex justify-evenly flex-auto rounded-xl py-12" style="background-color: #f5f0ea">
      <div class="flex flex-col gap-8">
        <H2Particle uptitle="Mes infos" title="Me connaitre" />
        <InformationsParticle v-for="item in persosItems" :infos="item.data" :key="item.title" />
      </div>

      <span class="inline-block border-l-2 h-60 my-0 mx-5" style="color: #d9cfbf"></span>
      <div class="flex flex-col gap-8">
        <H2Particle uptitle="Contact & réseaux" title="Me contacter" />
        <div class="flex flex-col gap-6 w-full">
          <!-- <div class="flex gap-5 justify-start items-center">
            <img :src="getIconUrl(info.icon)" class="p-2 rounded-md bg-darkOlive-600" />
            <p class="w-52 subtitle">{{ info.subtitle }}</p>
            <p class="w-full">{{ info.content }}</p>
          </div> -->

          <div class="flex gap-5 justify-start items-center">
            <img :src="getIconUrl('icon-mail-olive.svg')" class="p-2 rounded-md bg-darkOlive-600" />
            <p class="w-52 subtitle">Email</p>
            <div class="flex gap-2 items-center justify-end">
              <p class="w-full">contact@orianefrouin.fr</p>
              <button @click="copy"><img src="../../assets/icons/icon-copy.svg" /></button>
            </div>
          </div>
        </div>

        <!-- <LinkParticle to="/contact" title="Me contacter" color="melon" /> -->
      </div>
    </div>
  </section>
</template>

<style>
.message {
  background-color: aquamarine;
}
</style>
