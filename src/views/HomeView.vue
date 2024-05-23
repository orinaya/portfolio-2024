<script setup>
import HomeSkills from "../components/home/HomeSkills.vue"
import HomeCurrent from "../components/home/HomeCurrent.vue"
import HomeProjects from "@/components/home/HomeProjects.vue"
import HomeTimeline from "@/components/home/HomeTimeline.vue"
import HomeHero from "../components/home/HomeHero.vue"
</script>

<template>
  <main>
    <HomeHero />
    <div class="flex flex-col gap-28">
      <HomeCurrent />
      <HomeSkills />
      <HomeTimeline />
      <HomeProjects />
    </div>
  </main>
</template>
