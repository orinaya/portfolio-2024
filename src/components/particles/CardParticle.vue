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
  <div class="caca-container" @click="$emit('sendProjectId', id)">
    <img :src="image" />
    <!-- <span><img src="" />{{ price }}</span>-->

    <div class="caca-whitebox">
      <div class="caca-content">
        <div>
          <!-- <TitleParticle :title="title" h3 /> -->
          <p>{{ description }}</p>
        </div>
        <div class="caca-software">
          <p>Outils</p>
          <div>
            <div class="flex gap-1">
              <img class="icon" v-for="software in softwares" :src="getIconUrl(software)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  height: 36px;
  width: auto;
}
img {
  width: 200px;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
}
.caca-whitebox {
  background-color: #fff;
  width: 184px;
  border-radius: 0 10px 10px 0;
  padding: 16px;
}
.caca-software > p {
  font-weight: 500;
}
.caca-software {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
}
.caca-container {
  position: relative;
  width: 30%;
  height: 220px;
  border-radius: 10px;
  background-size: cover;
  background-position: top;
  cursor: pointer;
  display: flex;
  /* flex-direction: row-reverse; */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
}
.caca-image > img {
  border-radius: 10px;
  width: 100%;
}

.caca-image {
  width: 100%;
}
.caca {
  position: absolute;
  background-color: #f9f8f6;
  /* border: solid 1px white; */
  width: 100%;
  border-radius: 10px;
  bottom: 0;
  /* padding: 4px; */
}

.caca-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 100%;
  justify-content: space-between;
}
</style>
