<script setup>
defineProps({
  title: String,
  uptitle: String,
  darkBg: {
    type: Boolean,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  center: {
    type: Boolean,
    required: false,
  },
})

const getImageUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}
</script>

<template>
  <div>
    <div class="flex gap-2">
      <!-- <img :src="getImageUrl(icon)" /> -->
      <p class="uppercase text-melon-700">{{ uptitle }}</p>
    </div>
    <h1 v-if="center" class="text-darkOlive-200 font-neueKaine font-extrabold text-4xl text-center">
      {{ title }}
    </h1>
    <h1 v-else class="text-darkOlive-200 font-neueKaine font-extrabold text-4xl">{{ title }}</h1>
  </div>
</template>

<style scoped>
img {
  height: 24px;
  max-width: 24px;
}
</style>
