<script setup>
import {useRouter} from "vue-router"
import {worksItems} from "@/services/datas"
import H1Particle from "@/components/particles/H1Particle.vue"
// import TitleParticle from "@/components/particles/TitleParticle.vue"
// import BreadcrumbParticle from "@/components/particles/BreadcrumbParticle.vue"

const getImageUrl = (image) => {
  return new URL(`/src/assets/works/${image}`, import.meta.url).href
}

const getIconUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}

const router = useRouter()
const userRoute = router.currentRoute.value.params.id
const works = worksItems[userRoute]
</script>

<template>
  <!-- <BreadcrumbParticle :pageName="works.title" class="container" /> -->
  <div class="container">
    <!-- <TitleParticle :title="works.title" h1 /> -->
    <H1Particle :title="works.title" />
    <p class="project-subtitle">{{ works.description }}</p>
    <div class="project-banner" :style="'background-image: url(' + getImageUrl(works.banner) + ')'">
      <span class="hashtag">{{ works.hashtag }}</span>
    </div>
    <div class="project-first_line">
      <div class="project-description">
        <TitleParticle
          title="Comprendre les enjeux et la finalité"
          uptitle="Description du projet"
          h2
          icon="icon-story.svg"
        />
        <p>{{ works.big_description }}</p>
      </div>
      <div
        class="first-project_image"
        :style="'background-image: url(' + getImageUrl(works.first_image) + ')'"
      ></div>
    </div>

    <div class="project-second_line">
      <div
        class="first-project_image"
        :style="'background-image: url(' + getImageUrl(works.second_image) + ')'"
      ></div>
      <div class="project-details">
        <TitleParticle title="Autour du projet" uptitle="Détails" h2 icon="icon-search.svg" />
        <div class="prout">
          <div>
            <div class="prout-details">
              <p>Logiciels et langages</p>
              <img v-for="item in works.details.softwares" :src="getIconUrl(item)" />
              <!-- <p v-for="item in works.details.softwares">{{ item }}</p> -->
            </div>
            <div class="prout-details">
              <p>Mon rôle</p>
              <p v-for="item in works.details.role">{{ item }}</p>
            </div>
          </div>
          <div>
            <div class="prout-details">
              <p>Équipe sur le projet</p>
              <p v-for="item in works.details.team">{{ item }}</p>
            </div>
            <div class="prout-details">
              <p>Années d’étude</p>
              <p>{{ works.details.school_year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <TitleParticle
        title="L'univers du projet"
        uptitle="Charte graphique"
        h2
        icon="icon-design.svg"
      />
      <div class="chart-group">
        <div class="chart-logo">
          <p class="chart-title">Logo</p>
          <img class="" :src="getImageUrl(works.graphic_chart.logo)" />
        </div>
        <div class="color-group">
          <p class="chart-title">Couleurs</p>
          <span
            v-for="color in works.graphic_chart.colors"
            class="chart_color"
            :style="'background-color:' + color + ';'"
          ></span>
        </div>
      </div>
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<style scoped>
.prout {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
}

.prout > div {
  display: flex;
  justify-content: space-between;
}
.prout-details > p:first-child {
  font-size: 16px;
  font-weight: 600;
}

.prout-details:last-child > p:last-child {
  width: 200px;
}

.chart-logo > img {
  margin-top: 40px;
  /* height: fit-content;
  width: inherit; */
}
.chart-group {
  height: 220px;
  display: flex;
  gap: 32px;
  margin-top: 32px;
}
.chart-logo {
  background-color: #f7f5f2;
  width: 200px;
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: left;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
}
.color-group {
  flex-direction: column;
  gap: 16px;
  background-color: #f7f5f2;
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
}
.chart_color {
  height: 30px;
  width: 80px;
  border-radius: 20px;
  display: flex;
}
span.hashtag {
  background-color: hsl(0, 0%, 100%, 0.6);
  border-radius: 4px;
  padding: 4px 10px;
  position: absolute;
  top: 16px;
  left: 16px;
  font-weight: 600;
}
.project-banner {
  height: 425px;
  width: 100%;
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin: 66px auto;
  position: relative;
}

.project-subtitle {
  color: var(--verdigris-200);
  font-size: 24px;
  text-align: center;
  margin-top: -24px;
}

.first-project_image {
  height: 370px;
  width: 47%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
}

.project-description,
.project-details {
  border-radius: 10px;
  background-color: hsl(40, 20%, 97%, 0.8);
  /* border: solid 2px white; */
  padding: 31px;
  width: 42%;
}

.project-first_line,
.project-second_line {
  display: flex;
  justify-content: space-between;
  margin: 66px auto;
}

p.chart-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--verdigris-200);
}
</style>
