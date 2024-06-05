<script setup>
import {computed} from "vue"
import {useRouter} from "vue-router"
import {worksItems} from "@/services/datas"
import H1Particle from "@/components/particles/H1Particle.vue"
import ExternalLinkParticle from "@/components/particles/ExternalLinkParticle.vue"
import FirstMedia from "@/components/projects/FirstMedia.vue"
import PdfFrame from "@/components/projects/PdfFrame.vue"
import BreadcrumbParticle from "@/components/particles/BreadcrumbParticle.vue"
import H2Particle from "@/components/particles/H2Particle.vue"

const getImageUrl = (image) => {
  return new URL(`/src/assets/works/${image}`, import.meta.url).href
}

const getIconUrl = (image) => {
  return new URL(`/src/assets/icons/${image}`, import.meta.url).href
}

// const pdfUrl = (pdf) => {
//   return new URL(`/pdf/${pdf}.pdf`, import.meta.url).href
// }

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
  return nextRoute < worksItems.length ? worksItems[nextRoute].path : null
}

const getPreviousProjectRoute = () => {
  const currentIndex = worksItems.findIndex((item) => item.path === userRoute)
  const previousRoute = currentIndex - 1
  return previousRoute >= 0 ? worksItems[previousRoute].path : null
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

    <H1Particle :title="works.title" center class="mt-6" />

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
      ></div>
    </div>
    <div
      class="banner w-full bg-bottom bg-no-repeat rounded-xl md:my-16 my-4 mx-auto relative md:h-96 h-44"
      :style="'background-image: url(' + getImageUrl(works.banner) + ')'"
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
            <div class="flex flex-col gap-2 justify-center items-center h-96">
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
          </div>
        </template>
        <template v-slot:mapeach v-if="userRoute === 'mapeach'">
          <div class="rounded-xl flex-1 bg-white-998 h-96">
            <div class="flex flex-col gap-2 justify-center items-center h-96">
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
          </div>
        </template>
        <template v-slot:simple v-if="userRoute !== 'mapeach' && userRoute !== 'equinox'">
          <div class="rounded-xl flex-1 bg-white-998 h-96">
            <div
              class="bg-cover bg-no-repeat h-96 rounded-xl"
              :style="{backgroundImage: 'url(' + getImageUrl(works.first_image) + ')'}"
            ></div>
          </div>
        </template>
      </FirstMedia>
    </div>

    <div class="flex flex-col lg:flex-row justify-between my-16 mx-auto gap-16">
      <div class="flex-1 h-96">
        <div
          class="h-96 bg-cover bg-no-repeat rounded-xl"
          :style="{backgroundImage: 'url(' + getImageUrl(works.second_image) + ')'}"
        ></div>
      </div>

      <div class="rounded-xl bg-white-998 flex-1">
        <div class="p-8">
          <H2Particle title="Autour du projet" uptitle="Détails" small />
          <div class="flex flex-col gap-6 mt-5">
            <div class="flex justify-between">
              <div class="flex flex-col" v-show="works.details.team != ''">
                <p class="text-base font-semibold">Équipe sur le projet</p>
                <a
                  :href="works.details.teamLink"
                  target="_blank"
                  class="flex w-fit items-center gap-2"
                  v-for="item in works.details.team"
                  :key="item"
                  >{{ item }}<i class="icon-squareout"></i
                ></a>
              </div>
              <div>
                <p class="text-base font-semibold">Mon rôle</p>
                <p class="w-52" v-for="item in works.details.role" :key="item">{{ item }}</p>
              </div>
            </div>
            <div class="flex justify-between">
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
        class="poster-wrapper bg-white-998 rounded-xl flex flex-wrap justify-between p-8 mb-16 h-96"
      >
        <img src="../assets/works/mapeach/mapeach-poster-2.jpg" class="h-full" />
        <img src="../assets/works/mapeach/mapeach-poster-3.jpg" class="h-full" />
        <img src="../assets/works/mapeach/mapeach-poster-1.jpg" class="h-full" />
        <img src="../assets/works/mapeach/mapeach-poster-4.jpg" class="h-full" />
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
          v-if="getPreviousProjectRoute() && getNextProject()"
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
/*  */
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
