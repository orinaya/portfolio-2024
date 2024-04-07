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
  <div class="flex flex-col items-center w-16 h-20 relative">
    <span v-if="inProgress" class="absolute z-10 w-2.5 h-2.5 rounded-lg"></span>
    <div
      class="flex justify-center items-center rounded-lg w-14 h-14"
      :style="{'background-color': color}"
    >
      <img :src="image" class="w-4/5 h-auto rounded-lg" />
    </div>
    <p class="text-sm font-light text-center">{{ title }}</p>
  </div>
</template>

<style scoped>
span {
  background-color: #4ebc6c;
  top: -2px;
  right: 0;
}
</style>
