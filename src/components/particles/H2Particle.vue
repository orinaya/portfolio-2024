<script setup>
defineProps({
  title: String,
  uptitle: String,
  darkBg: {
    type: Boolean,
    required: false,
  },
  small: {
    type: Boolean,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div>
    <div class="flex gap-2">
      <p class="uppercase text-melon-700">{{ uptitle }}</p>
    </div>
    <h2 class="text-white-998 font-neueKaine font-extrabold text-3xl" v-if="darkBg">{{ title }}</h2>
    <h2 class="text-darkOlive-200 font-neueKaine font-extrabold text-2xl" v-if="small">
      {{ title }}
    </h2>
    <h2 class="text-darkOlive-200 font-neueKaine font-extrabold text-3xl" v-else>{{ title }}</h2>
  </div>
</template>

<style scoped>
img {
  height: 24px;
  max-width: 24px;
}
</style>
