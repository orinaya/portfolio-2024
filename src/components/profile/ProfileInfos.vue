<script setup>
import H2Particle from "../particles/H2Particle.vue"
import InformationsParticle from "../particles/InformationParticle.vue"
import {persosItems, contactItems} from "@/services/datas"
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
        <InformationsParticle v-for="item in contactItems" :infos="item.data" :key="item.title" />
      </div>
    </div>
  </section>
</template>
