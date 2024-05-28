<script setup>
// import TitleParticle from "./TitleParticle.vue"

defineProps({
  id: String,
  title: String,
  description: String,
  image: String,
  softwares: Array,
  date: Number,
})

const getIconUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}
</script>
<template>
  <div
    class="card-container flex relative rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 hover:brightness-105 hover:drop-shadow-xl"
    @click="$emit('sendProjectId', id)"
  >
    <img class="object-cover rounded-l-lg w-fit" :src="image" />
    <div class="card-content bg-white-998 rounded-r-lg p-4">
      <div class="flex flex-col gap-1 h-full justify-between">
        <div>
          <h3 class="font-semibold text-lg text-darkOlive-200">{{ title }}</h3>
          <p class="text-sm lg:text-base">{{ description }}</p>
        </div>
        <div class="flex justify-between flex-col">
          <p class="font-medium text-base">Outils</p>
          <div>
            <div class="flex gap-1 flex-wrap justify-start">
              <img
                class="icon h-9 w-fit"
                v-for="software in softwares"
                :src="getIconUrl(software)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  height: 13.75rem;
  background-size: cover;
  background-position: top;
}

.card-content {
  width: 8rem;
}

img {
  width: 11.5rem;
}

.icon {
  height: 30px;
  width: fit-content;
}

@media (min-width: 1024px) {
  .card-content {
    width: 11.5rem;
    padding: 1rem;
  }

  img {
    width: 12.8rem;
  }

  .icon {
    width: fit-content;
  }
}
</style>
