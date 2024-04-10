<script setup>
defineProps({
  color: String,
  image: String,
  title: String,
  alt: String,
  inProgress: Boolean,
})
</script>

<template>
  <div class="flex flex-col items-center w-20 h-20">
    <div
      class="flex justify-center items-center rounded-lg w-12 h-12 relative"
      :style="{'background-color': color}"
    >
      <span v-if="inProgress" class="absolute z-10 w-2.5 h-2.5 -top-1 -right-1 rounded-lg"></span>
      <img :src="image" class="w-4/5 h-full rounded-lg" />
    </div>
    <p class="text-sm font-light text-center w-fit">{{ title }}</p>
  </div>
</template>

<style scoped>
span {
  background-color: #4ebc6c;
}
</style>
