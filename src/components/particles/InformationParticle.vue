<script setup>
defineProps({
  infos: Array,
})

const getIconUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}
</script>

<template>
  <div class="flex flex-col gap-6 w-full">
    <div
      v-for="info in infos"
      :key="info.subtitle"
      class="flex md:flex-row flex-col gap-5 justify-start md:items-center items-start"
    >
      <div class="flex items-center gap-4">
        <i :class="info.icon" class="p-2 rounded-md bg-darkOlive-600" />
        <p class="md:w-52 w-fit subtitle">{{ info.subtitle }}</p>
      </div>
      <p class="w-fit">{{ info.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  color: #838383;
}

.icon-cake::before,
.icon-location::before,
.icon-car::before,
.icon-mail::before {
  font-size: 24px;
  color: #f1f3f2;
}
</style>
