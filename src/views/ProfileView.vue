<script setup>
import HeroSecondary from "../components/layout/HeroSecondary.vue"
import ProfileInfos from "../components/profile/ProfileInfos.vue"
import ProfileDescription from "../components/profile/ProfileDescription.vue"
import ProfilePassion from "../components/profile/ProfilePassion.vue"
</script>

<template>
  <main>
    <HeroSecondary uptitle="Mon profil" profil />

    <div class="flex flex-col gap-28">
      <ProfileInfos />
      <ProfileDescription />
      <ProfilePassion />
    </div>
  </main>
</template>
