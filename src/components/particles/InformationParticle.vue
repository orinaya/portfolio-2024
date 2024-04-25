<script setup>
defineProps({
  infos: Array,
})

const getIconUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}
</script>

<template>
  <div class="flex flex-col gap-6 w-11/12">
    <div v-for="info in infos" :key="info.subtitle" class="flex gap-5 justify-start items-center">
      <img :src="getIconUrl(info.icon)" class="p-2 rounded-md bg-darkOlive-600" />
      <p class="w-52 subtitle">{{ info.subtitle }}</p>
      <p class="w-full">{{ info.content }}</p>
    </div>
  </div>
</template>

<style>
.subtitle {
  color: #838383;
}
</style>
