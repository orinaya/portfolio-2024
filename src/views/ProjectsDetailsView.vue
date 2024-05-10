<script setup>
import {useRouter} from "vue-router"
import {worksItems} from "@/services/datas"
import H1Particle from "@/components/particles/H1Particle.vue"
import LinkParticle from "@/components/particles/LinkParticle.vue"

const getImageUrl = (image) => {
  return new URL(`/src/assets/works/${image}`, import.meta.url).href
}

const getIconUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}

const router = useRouter()
const userRoute = router.currentRoute.value.params.id.toString()
console.log(router)

const works = worksItems[userRoute]
console.log("works", works.id)
</script>

<template>
  <!-- <BreadcrumbParticle :pageName="works.title" class="container" /> -->
  <div class="container mt-24">
    <H1Particle :title="works.title" center />
    <p class="text-verdigris-200 text-2xl text-center -mt-3">
      {{ works.description }}
    </p>
    <div
      class="banner w-full bg-bottom bg-no-repeat rounded-xl my-16 mx-auto relative"
      :style="'background-image: url(' + getImageUrl(works.banner) + ')'"
    >
      <span class="rounded-md py-1 px-2 absolute top-4 left-4 font-semibold">{{
        works.hashtag
      }}</span>
      <div class="flex gap-8 absolute bottom-12 left-12" v-if="userRoute === '0'">
        <LinkParticle
          to="https://drive.google.com/file/d/19FkXkmaV2Hkk7GgopbbjmTyPvm3tKm9f/view?usp=drive_link"
          target="_blank"
          title="Découvrir le pitchdeck"
          color="melon"
        />
        <LinkParticle
          to="https://drive.google.com/file/d/1mYL3IomDkpCqO149OKBrTT7fnApnJJHR/view?usp=drive_link"
          target="_blank"
          title="Regarder le trailer"
          color="verdigris"
        />
      </div>

      <div class="flex gap-8 absolute bottom-12 left-12" v-if="userRoute === '1'">
        <LinkParticle to="/" title="Regarder le trailer" color="melon" />
        <!-- <LinkParticle to="/" title="Regarder le trailer" color="verdigris" /> -->
      </div>

      <div v-else></div>
    </div>
    <div class="flex justify-between my-16 mx-auto">
      <div class="description rounded-xl p-8 bg-white-998">
        <TitleParticle
          title="Comprendre les enjeux et la finalité"
          uptitle="Description du projet"
          h2
          icon="icon-story.svg"
        />
        <p>{{ works.big_description }}</p>
      </div>

      <video controls class="h-96 image" v-if="userRoute === '0'">
        <source src="../assets/works/Equinox_trailer.mp4" type="video/mp4" />
      </video>
      <video controls class="h-96 image" v-if="userRoute === '1'">
        <source src="../assets/works/MaPeach-trailer.mp4" type="video/mp4" />
      </video>
      <div
        v-else
        class="image h-96 bg-cover bg-no-repeat rounded-xl"
        :style="{backgroundImage: 'url(' + getImageUrl(works.first_image) + ')'}"
      ></div>
    </div>

    <div class="flex justify-between my-16 mx-auto">
      <div
        class="image h-96 bg-cover bg-no-repeat rounded-xl"
        :style="{backgroundImage: 'url(' + getImageUrl(works.second_image) + ')'}"
      ></div>
      <div class="details rounded-xl p-8 bg-white-998">
        <TitleParticle title="Autour du projet" uptitle="Détails" h2 icon="icon-search.svg" />
        <div class="flex flex-col gap-6 mt-5">
          <div class="flex justify-between">
            <div>
              <p class="text-base font-semibold">Logiciels et langages</p>
              <div class="flex gap-2">
                <img v-for="item in works.details.softwares" :key="item" :src="getIconUrl(item)" />
              </div>
            </div>
            <div>
              <p class="text-base font-semibold">Mon rôle</p>
              <p class="w-52" v-for="item in works.details.role" :key="item">{{ item }}</p>
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <p class="text-base font-semibold">Équipe sur le projet</p>
              <p class="w-52" v-for="item in works.details.team" :key="item">{{ item }}</p>
            </div>
            <div>
              <p class="text-base font-semibold">Années d’étude</p>
              <p class="w-52">{{ works.details.school_year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
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
    </div> -->
  </div>
</template>

<style scoped>
span {
  background-color: hsl(0, 0%, 100%, 0.6);
}
.banner {
  height: 425px;
  background-size: 100%;
}

.description,
.details,
.image {
  width: 47%;
}

/* p.chart-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--verdigris-200);
} */

/* 
.chart-logo > img {
  margin-top: 40px;
 
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
} */
</style>
