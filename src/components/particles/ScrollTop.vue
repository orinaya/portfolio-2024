<script setup>
import {ref, onMounted, onUnmounted} from "vue"
import ButtonParticle from "./ButtonParticle.vue"

const showButton = ref(false)

const scrollFunction = () => {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  showButton.value = scrollPosition > 20
}

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"})
}

onMounted(() => {
  window.addEventListener("scroll", scrollFunction)
})

onUnmounted(() => {
  window.removeEventListener("scroll", scrollFunction)
})
</script>

<template>
  <ButtonParticle iconBefore="doubleup" color="verdigris" v-if="showButton" @click="scrollToTop" />
</template>

<style scoped>
.btn {
  position: fixed;
  bottom: 24px;
  height: 60px;
  width: 60px;
  right: 24px;
  z-index: 100;
}
</style>
