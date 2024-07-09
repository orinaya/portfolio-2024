<script setup>
import H2Particle from "../particles/H2Particle.vue"
import {ref, onMounted, onUnmounted} from "vue"
import {timelineItems} from "../../services/datas.js"

const getimageUrl = (name) => {
  return new URL(`../../assets/img/${name}`, import.meta.url).href
}

const lineHeight = ref(0)
const stepsContainerOffsetTop = ref(0)
const stepsContainerHeight = ref(0)
const startScrolling = ref(false)

const handleScroll = () => {
  const scrollTop = window.scrollY

  if (!startScrolling.value) {
    startScrolling.value = true
  }

  if (startScrolling.value) {
    const distanceFromTop = scrollTop - (stepsContainerOffsetTop.value - 200)
    const newHeight = Math.max(distanceFromTop * 1, 0)
    lineHeight.value = Math.min(newHeight, stepsContainerHeight.value - 176)
  }
}

onMounted(() => {
  const stepsContainer = document.querySelector(".steps-container")
  if (stepsContainer) {
    stepsContainerOffsetTop.value = stepsContainer.offsetTop
    stepsContainerHeight.value = stepsContainer.offsetHeight - 160
    window.addEventListener("scroll", handleScroll)
  }
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <section id="parcours" class="steps-container container bg-darkOlive-200 p-8 rounded-xl pb-28">
    <H2Particle
      title="Explorez mes expériences diverses et variées"
      uptitle="Mon parcours"
      icon="icon-skills.svg"
      class="mb-24"
      darkBg
    />
    <div class="flex flex-col relative min-h-60 mt-12 w-full gap-20">
      <div
        class="hidden md:block vertical-line absolute xl:left-1/2 left-0 w-2 bg-melon-800 rounded-full"
        :style="{height: lineHeight + 'px'}"
      ></div>
      <div
        class="hidden md:block top-line absolute xl:left-1/2 left-0 w-2 top-0 bottom-0 rounded-full"
      ></div>

      <div class="flex flex-col xl:gap-5 gap-8">
        <div v-for="item in timelineItems" class="cards flex flex-col gap-2">
          <div
            class="hidden md:flex cards-dot absolute bg-melon-700 w-4 h-4 rounded-full items-center justify-center"
          ></div>
          <div
            class="cards-content bob-on-hover flex flex-col items-center bg-darkOlive-300 border-solid border-darkOlive-500 border-2 rounded-xl text-white-998 cursor-pointer p-5"
          >
            <div class="flex justify-between items-center w-full">
              <h3 class="font-semibold text-verdigris-700">{{ item.title }}</h3>
              <span
                class="py-1 px-2 font-semibold text-sm w-fit text-verdigris-300 bg-verdigris-700 rounded-md"
                >{{ item.date }}</span
              >
            </div>
            <div class="horizontal-line"></div>
            <div class="flex items-center w-full gap-6">
              <div class="flex justify-center items-center w-36 h-16 bg-white-998 rounded-md">
                <img :src="getimageUrl(item.img)" />
              </div>
              <div>
                <p class="w-fit h-full font-regular text-lg">{{ item.school }}</p>
                <p class="w-fit h-full font-extralight text-lg">{{ item.city }}</p>
              </div>
            </div>
            <div class="w-full flex flex-col gap-2">
              <p class="mt-4 text-darkOlive-800">Compétences</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in item.skills"
                  class="rounded-md bg-darkOlive-400 text-white-998 py-1 px-2 font-light hover:brightness-110"
                  >{{ skill }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps-container {
  max-width: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .steps-container {
    max-width: 1280px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

.cards-content {
  width: 100%;
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .cards-content {
    width: 420px;
    margin-bottom: 0;
  }
}

.cards-dot {
  left: -4px;
  top: 146px;
  z-index: 3;
}

@media (min-width: 1280px) {
  .cards-dot {
    left: 49.7%;
    top: 117px;
    z-index: 3;
  }

  .cards-content {
    width: 420px;
    margin-bottom: -80px;
  }
}

.vertical-line {
  z-index: 3;
}

.top-line {
  z-index: 2;
  background-color: #e7dbcf;
}

.horizontal-line {
  border-bottom: 2px solid hsl(150, 9%, 26%);
  margin: 16px;
  width: auto;
}

img {
  width: 92%;
  height: 90%;
  object-fit: contain;
}
.cards:nth-child(even) > .cards-content > h3 {
  text-align: right;
}

.cards:nth-child(1) > .cards-dot {
  top: 150px;
}

.cards:nth-child(2) > .cards-dot {
  top: 410px;
}

.cards:nth-child(3) > .cards-dot {
  top: 682px;
}
.cards:nth-child(4) > .cards-dot {
  top: 980px;
}
.cards:nth-child(5) > .cards-dot {
  top: 1280px;
}
.cards:nth-child(6) > .cards-dot {
  top: 1580px;
}

.cards:nth-child(7) > .cards-dot {
  top: 1827px;
}

.cards:nth-child(odd) {
  margin-left: 0;
}

.cards:nth-child(even) {
  margin-left: 0;
}

@media (min-width: 1280px) {
  .cards:nth-child(odd) {
    align-items: flex-start;
    margin-left: 5rem;
  }

  .cards:nth-child(even) {
    align-items: flex-end;
    margin-right: 5rem;
  }
}
@media (min-width: 768px) {
  .cards:nth-child(odd) {
    margin-left: 5rem;
  }

  .cards:nth-child(even) {
    margin-left: 5rem;
  }
}

/*===================*/
/* BOB
/*===================*/

@-webkit-keyframes bob-on-hover {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes bob-on-hover {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@-webkit-keyframes bob-on-hover-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes bob-on-hover-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
.bob-on-hover {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.bob-on-hover:hover,
.bob-on-hover:focus,
.bob-on-hover:active {
  -webkit-animation-name: bob-on-hover-float, bob-on-hover;
  animation-name: bob-on-hover-float, bob-on-hover;
  -webkit-animation-duration: 0.3s, 1.5s;
  animation-duration: 0.3s, 1.5s;
  -webkit-animation-delay: 0s, 0.3s;
  animation-delay: 0s, 0.3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}
</style>
