<script setup>
import {computed, ref} from "vue"
import {useRouter} from "vue-router"
import {worksItems} from "@/services/datas"
import H1Particle from "@/components/particles/H1Particle.vue"
import ExternalLinkParticle from "@/components/particles/ExternalLinkParticle.vue"
import FirstMedia from "@/components/projects/FirstMedia.vue"
import PdfFrame from "@/components/projects/PdfFrame.vue"
import BreadcrumbParticle from "@/components/particles/BreadcrumbParticle.vue"
import H2Particle from "@/components/particles/H2Particle.vue"
import VueEasyLightbox from "vue-easy-lightbox"

const showBanner = ref(false)
const showFirstImage = ref(false)
const showSecondImage = ref(false)
const showFirstPoster = ref(false)
const showSecondPoster = ref(false)
const showThirdPoster = ref(false)
const showFourthPoster = ref(false)
const firstPoster = "mapeach/mapeach-poster-2.jpg"
const secondPoster = "mapeach/mapeach-poster-3.jpg"
const thirdPoster = "mapeach/mapeach-poster-1.jpg"
const fourthPoster = "mapeach/mapeach-poster-4.jpg"

const getImageUrl = (image) => {
  return new URL(`/src/assets/works/${image}`, import.meta.url).href
}

const getIconUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}

const pdfUrl = (pdf) => {
  return `/pdf/${pdf}.pdf`
}

const router = useRouter()
const userRoute = router.currentRoute.value.params.path

const works = worksItems.find((item) => item.path === userRoute)

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
  const currentIndex = worksItems.findIndex((item) => item.path === userRoute)
  const nextRoute = currentIndex + 1
  return nextRoute < worksItems.length ? `/projets/` + worksItems[nextRoute].path : null
}

const getPreviousProjectRoute = () => {
  const currentIndex = worksItems.findIndex((item) => item.path === userRoute)
  const previousRoute = currentIndex - 1
  return previousRoute >= 0 ? `/projets/` + worksItems[previousRoute].path : null
}

const getNextProject = () => {
  const currentIndex = worksItems.findIndex((item) => item.path === userRoute)
  const nextRoute = currentIndex + 1
  return nextRoute < worksItems.length ? worksItems[nextRoute] : null
}

const getPreviousProject = () => {
  const currentIndex = worksItems.findIndex((item) => item.path === userRoute)
  const previousRoute = currentIndex - 1
  return previousRoute >= 0 ? worksItems[previousRoute] : null
}
</script>

<template>
  <BreadcrumbParticle :pageName="works.title" :previousPages="previousPages" class="container" />
  <div class="container mt-8" relative>
    <img
      src="../assets/works/equinox/nox-angel-jump.gif"
      class="absolute h-36 top-28 md:block hidden right-20 lg:right-60"
      v-if="userRoute === 'equinox'"
    />

    <H1Particle :title="works.title" center class="md:mt-6 mt-0" />

    <p class="text-verdigris-200 md:text-2xl text-lg text-center -mt-1">
      {{ works.description }}
    </p>
    <vue-easy-lightbox
      :visible="showBanner"
      :imgs="getImageUrl(works.banner)"
      @hide="showBanner = false"
    />

    <div
      class="banner w-full bg-bottom bg-no-repeat rounded-xl md:my-16 my-4 md:mt-8 mx-auto relative md:h-96 h-44 cursor-pointer"
      :style="'background-image: url(' + getImageUrl(works.banner) + ')'"
      @click="showBanner = true"
    >
      <span class="rounded-md py-1 px-2 absolute top-4 left-4">
        <strong class="font-semibold">{{ works.hashtag }}</strong>
      </span>
    </div>
    <div class="flex flex-col lg:flex-row justify-between my-16 mx-auto gap-16">
      <div class="bg-white-998 h-96 flex-1 rounded-xl">
        <div class="p-8 flex flex-col gap-4">
          <H2Particle
            title="Comprendre les enjeux et la finalité"
            uptitle="Description du projet"
            small
          />
          <p>{{ works.big_description }}</p>
          <div class="flex gap-8">
            <ExternalLinkParticle
              v-for="item in works.buttons"
              :href="item.href"
              target="_blank"
              :title="item.title"
              :color="item.color"
            />
          </div>
        </div>
      </div>

      <FirstMedia>
        <template v-slot:equinox v-if="userRoute === 'equinox'">
          <div class="rounded-xl flex-1 bg-white-998">
            <div class="flex flex-col gap-2 justify-center items-center md:h-96 h-fit">
              <video
                controls
                autoplay
                loop
                muted
                poster="../assets/works/equinox/equinox-trailer-cover.jpg"
                class="md:w-11/12 rounded-md w-full"
              >
                <source src="../assets/works/equinox/Equinox_trailer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </template>
        <template v-slot:mapeach v-if="userRoute === 'mapeach'">
          <div class="rounded-xl flex-1 bg-white-998">
            <div class="flex flex-col gap-2 justify-center items-center md:h-96 h-fit">
              <video
                controls
                autoplay
                loop
                muted
                poster="../assets/works/mapeach/mapeach-trailer-cover.jpg"
                class="md:w-11/12 rounded-md w-full"
              >
                <source src="../assets/works/mapeach/MaPeach-trailer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </template>
        <template v-slot:simple v-if="userRoute !== 'mapeach' && userRoute !== 'equinox'">
          <img
            :src="getImageUrl(works.first_image)"
            @click="showFirstImage = true"
            class="h-96 rounded-xl flex-1 object-cover cursor-pointer hover:scale-105 hover:drop-shadow-xl transition-transform"
          />
          <vue-easy-lightbox
            :visible="showFirstImage"
            :imgs="getImageUrl(works.first_image)"
            @hide="showFirstImage = false"
          />
        </template>
      </FirstMedia>
    </div>

    <div class="flex flex-col lg:flex-row justify-between my-16 mx-auto gap-16">
      <img
        :src="getImageUrl(works.second_image)"
        @click="showSecondImage = true"
        class="h-96 rounded-xl flex-1 object-cover cursor-pointer hover:scale-105 hover:drop-shadow-xl transition-transform"
      />

      <vue-easy-lightbox
        :visible="showSecondImage"
        :imgs="getImageUrl(works.second_image)"
        @hide="showSecondImage = false"
      />

      <div class="rounded-xl bg-white-998 flex-1">
        <div class="p-8">
          <H2Particle title="Autour du projet" uptitle="Détails" small />
          <div class="flex flex-col gap-6 mt-5 flex-wrap">
            <div class="flex justify-between flex-wrap gap-8">
              <div class="flex md:flex-col flex-wrap" v-show="works.details.team != ''">
                <p class="text-base font-semibold">Équipe sur le projet</p>
                <a
                  :href="works.details.teamLink[index]"
                  target="_blank"
                  class="flex md:w-fit w-max items-center md:gap-2 gap-1"
                  v-for="(item, index) in works.details.team"
                  :key="item"
                  >{{ item }}<i class="icon-squareout"></i
                ></a>
              </div>
              <div>
                <p class="text-base font-semibold">Mon rôle</p>
                <p class="w-52" v-for="item in works.details.role" :key="item">{{ item }}</p>
              </div>
            </div>
            <div class="flex justify-between flex-wrap gap-8">
              <div>
                <p class="text-base font-semibold">Logiciels et langages</p>
                <div class="flex gap-2">
                  <img
                    v-for="item in works.details.softwares"
                    :key="item"
                    :src="getIconUrl(item)"
                  />
                </div>
              </div>
              <div>
                <p class="text-base font-semibold">Année d’étude</p>
                <p class="w-52">{{ works.details.school_year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="userRoute === 'mapeach'">
      <H2Particle title="Booster notre visibilité" uptitle="Nos Affiches" class="mb-12" />
      <div
        class="poster-wrapper bg-white-998 rounded-xl flex justify-between p-8 mb-16 h-96 md:overflow-x-hidden overflow-x-scroll overflow-y-hidden whitespace-nowrap gap-8"
      >
        <vue-easy-lightbox
          :visible="showFirstPoster"
          :imgs="getImageUrl(firstPoster)"
          @hide="showFirstPoster = false"
        />
        <img
          src="../assets/works/mapeach/mapeach-poster-2.jpg"
          class="h-full inline-block cursor-pointer hover:scale-110 transition-transform duration-200"
          @click="showFirstPoster = true"
        />
        <vue-easy-lightbox
          :visible="showSecondPoster"
          :imgs="getImageUrl(secondPoster)"
          @hide="showSecondPoster = false"
        />
        <img
          src="../assets/works/mapeach/mapeach-poster-3.jpg"
          class="h-full inline-block cursor-pointer hover:scale-110 transition-transform duration-200"
          @click="showSecondPoster = true"
        />
        <vue-easy-lightbox
          :visible="showThirdPoster"
          :imgs="getImageUrl(thirdPoster)"
          @hide="showThirdPoster = false"
        />
        <img
          src="../assets/works/mapeach/mapeach-poster-1.jpg"
          class="h-full inline-block cursor-pointer hover:scale-110 transition-transform duration-200"
          @click="showThirdPoster = true"
        />
        <vue-easy-lightbox
          :visible="showFourthPoster"
          :imgs="getImageUrl(fourthPoster)"
          @hide="showFourthPoster = false"
        />
        <img
          src="../assets/works/mapeach/mapeach-poster-4.jpg"
          class="h-full inline-block cursor-pointer hover:scale-110 transition-transform duration-200"
          @click="showFourthPoster = true"
        />
      </div>
    </div>

    <PdfFrame class="my-16">
      <template v-slot:equinox v-if="userRoute === 'equinox'">
        <H2Particle title="Une stratégie pour convaincre" uptitle="Notre PitchDeck" class="mb-12" />
        <iframe :src="pdfUrl('Equinox_Pitch_Deck_Nantes')" width="100%" height="700px"> </iframe>
      </template>
      <template v-slot:mapeach v-if="userRoute === 'mapeach'">
        <H2Particle title="Une stratégie pour convaincre" uptitle="Notre Pitch" class="mb-12" />
        <iframe :src="pdfUrl('MaPeach_Pitch')" width="100%" height="700px"> </iframe>
      </template>
      <template v-slot:bumble v-if="userRoute === 'bumble'">
        <H2Particle title="Une stratégie pour convaincre" uptitle="Notre Pitch" class="mb-12" />
        <iframe :src="pdfUrl('Bumble-presentation')" width="100%" height="700px"> </iframe>
      </template>
    </PdfFrame>
    <div class="container mt-4">
      <div
        :class="{
          'flex justify-end': !getPreviousProjectRoute(),
          'flex justify-between': getPreviousProjectRoute() && getNextProjectRoute(),
          'flex justify-start': !getNextProjectRoute(),
        }"
      >
        <a
          :href="getPreviousProjectRoute()"
          class="color-beige bg-beige-950 rounded-xl p-4"
          v-if="getPreviousProjectRoute() && getPreviousProject()"
        >
          <div class="flex flex-col gap-2 items-start">
            <ExternalLinkParticle
              v-if="getPreviousProjectRoute()"
              :href="getPreviousProjectRoute()"
              title="Projet précédent"
              color="beige"
              iconBefore="arrowbefore"
            />
            <div class="flex justify-between gap-4">
              <img
                :src="getImageUrl(getPreviousProject().image)"
                class="object-cover h-24 w-24 rounded-md"
              />
              <div class="max-w-56 text-left">
                <h3 class="font-semibold text-lg text-beige-200">
                  {{ getPreviousProject().title }}
                </h3>
                <p>{{ getPreviousProject().description }}</p>
              </div>
            </div>
          </div>
        </a>

        <a
          :href="getNextProjectRoute()"
          class="color-beige bg-beige-950 rounded-xl p-4"
          v-if="getNextProjectRoute() && getNextProject()"
        >
          <div class="flex flex-col gap-2 items-end">
            <ExternalLinkParticle
              v-if="getNextProjectRoute()"
              :href="getNextProjectRoute()"
              title="Projet suivant"
              color="beige"
              iconAfter="arrowafter"
            />
            <div class="flex justify-between gap-4">
              <div class="max-w-56 text-right">
                <h3 class="font-semibold text-lg text-beige-200">{{ getNextProject().title }}</h3>
                <p>{{ getNextProject().description }}</p>
              </div>
              <img
                :src="getImageUrl(getNextProject().image)"
                class="object-cover h-24 w-24 rounded-md"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  background-color: hsl(0, 0%, 100%, 0.6);
}

@media (min-width: 1024px) {
  .banner {
    height: 425px;
  }
}

.banner {
  background-size: 100%;
}

.color-beige {
  color: var(--beige-200);
  &:hover {
    color: var(--beige-200);
    background-color: var(--beige-900);
  }
}
</style>
