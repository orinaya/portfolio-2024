<script setup>
import HomeSkills from "../components/home/HomeSkills.vue"
import HomeCurrent from "../components/home/HomeCurrent.vue"
import HomeProjects from "@/components/home/HomeProjects.vue"
import Hero from "@/components/layout/Hero.vue"
import HomeTimeline from "@/components/home/HomeTimeline.vue"
</script>

<template>
  <main>
    <Hero />
    <div class="flex flex-col gap-28">
      <HomeCurrent />
      <HomeSkills />
      <HomeTimeline />
      <HomeProjects />
    </div>
  </main>
</template>
