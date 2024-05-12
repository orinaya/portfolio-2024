<script setup>
import {useRouter} from "vue-router"
import {worksItems} from "@/services/datas"
import H1Particle from "@/components/particles/H1Particle.vue"
import ExternalLinkParticle from "@/components/particles/ExternalLinkParticle.vue"
import FirstMedia from "@/components/projects/FirstMedia.vue"
import PdfFrame from "@/components/projects/PdfFrame.vue"
import Poster from "@/components/projects/Poster.vue"
import BreadcrumbParticle from "@/components/particles/BreadcrumbParticle.vue"

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

const previousPages = [
  {
    path: "/",
    name: "Accueil",
  },
  {
    path: "/projets",
    name: "Projets",
  },
]

const getNextProjectRoute = () => {
  const nextRoute = parseInt(userRoute) + 1
  return nextRoute < worksItems.length ? `${nextRoute}` : null
}

const getPreviousProjectRoute = () => {
  const previousRoute = parseInt(userRoute) - 1
  return previousRoute >= 0 ? `${previousRoute}` : null
}
</script>

<template>
  <BreadcrumbParticle :pageName="works.title" :previousPages="previousPages" class="container" />
  <div class="container mt-18" relative>
    <img
      src="../assets/works/equinox/nox-angel-jump.gif"
      class="absolute h-36 left-96 top-32"
      v-if="userRoute === '0'"
    />
    <img
      src="../assets/works/equinox/arbre_en_feu.gif"
      class="absolute h-40 right-96 top-32"
      v-if="userRoute === '0'"
    />

    <H1Particle :title="works.title" center />

    <p class="text-verdigris-200 text-2xl text-center -mt-3">
      {{ works.description }}
    </p>
    <div class="container mt-4">
      <div
        :class="{
          'flex justify-end': !getPreviousProjectRoute(),
          'flex justify-between': getPreviousProjectRoute() && getNextProjectRoute(),
          'flex justify-start': !getNextProjectRoute(),
        }"
      >
        <ExternalLinkParticle
          v-if="getPreviousProjectRoute()"
          :href="getPreviousProjectRoute()"
          title="Projet précedent"
          color="melon"
        />
        <ExternalLinkParticle
          v-if="getNextProjectRoute()"
          :href="getNextProjectRoute()"
          title="Projet suivant"
          color="melon"
        />
      </div>
    </div>
    <div
      class="banner w-full bg-bottom bg-no-repeat rounded-xl my-16 mx-auto relative"
      :style="'background-image: url(' + getImageUrl(works.banner) + ')'"
    >
      <span class="rounded-md py-1 px-2 absolute top-4 left-4 font-semibold">{{
        works.hashtag
      }}</span>
      <div class="flex gap-8 absolute bottom-12 left-12">
        <ExternalLinkParticle
          v-for="item in works.buttons"
          :href="item.href"
          target="_blank"
          :title="item.title"
          :color="item.color"
        />
      </div>
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
      <FirstMedia>
        <template v-slot:equinox v-if="userRoute === '0'">
          <div
            class="bg-white-998 flex flex-col gap-2 justify-center items-center h-96 image rounded-xl"
          >
            <video
              controls
              autoplay
              loop
              muted
              poster="../assets/works/equinox/equinox-trailer-cover.jpg"
              class="w-11/12 rounded-md"
            >
              <source src="../assets/works/equinox/Equinox_trailer.mp4" type="video/mp4" />
            </video>
          </div>
        </template>
        <template v-slot:mapeach v-if="userRoute === '1'">
          <div
            class="bg-white-998 flex flex-col gap-2 justify-center items-center h-96 image rounded-xl"
          >
            <video
              controls
              autoplay
              loop
              muted
              poster="../assets/works/mapeach/mapeach-trailer-cover.jpg"
              class="w-11/12 rounded-md"
            >
              <source src="../assets/works/mapeach/MaPeach-trailer.mp4" type="video/mp4" />
            </video>
          </div>
        </template>
        <template v-slot:simple v-if="userRoute !== '1' && userRoute !== '0'">
          <div
            class="image h-96 bg-cover bg-no-repeat rounded-xl"
            :style="{backgroundImage: 'url(' + getImageUrl(works.first_image) + ')'}"
          ></div>
        </template>
      </FirstMedia>
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

    <Poster class="my-16" v-if="userRoute === '1'">
      <template v-slot:mapeach>
        <img src="../assets/works/mapeach/mapeach-poster-2.jpg" class="h-full" />
        <img src="../assets/works/mapeach/mapeach-poster-3.jpg" class="h-full" />
        <img src="../assets/works/mapeach/mapeach-poster-1.jpg" class="h-full" />
        <img src="../assets/works/mapeach/mapeach-poster-4.jpg" class="h-full" />
      </template>
    </Poster>
    <PdfFrame class="my-16">
      <template v-slot:equinox v-if="userRoute === '0'">
        <iframe
          src="/src/assets/works/equinox/Equinox_Pitch_Deck_Nantes.pdf"
          width="100%"
          height="700px"
        >
        </iframe>
      </template>
      <template v-slot:mapeach v-if="userRoute === '1'">
        <iframe src="/src/assets/works/mapeach/MaPeach_Pitch.pdf" width="100%" height="700px">
        </iframe>
      </template>
    </PdfFrame>
  </div>

  <div class="container mt-4">
    <div
      :class="{
        'flex justify-end': !getPreviousProjectRoute(),
        'flex justify-between': getPreviousProjectRoute() && getNextProjectRoute(),
        'flex justify-start': !getNextProjectRoute(),
      }"
    >
      <ExternalLinkParticle
        v-if="getPreviousProjectRoute()"
        :href="getPreviousProjectRoute()"
        title="Projet précedent"
        color="melon"
      />
      <ExternalLinkParticle
        v-if="getNextProjectRoute()"
        :href="getNextProjectRoute()"
        title="Projet suivant"
        color="melon"
      />
    </div>
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
</style>
