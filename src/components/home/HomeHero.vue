<script setup>
import ExternalLinkParticle from "../particles/ExternalLinkParticle.vue"
import LinkParticle from "../particles/LinkParticle.vue"
</script>

<template>
  <div class="rounded-b-xl mb-24 bg-beige-900">
    <div class="h-screen flex justify-between w-full">
      <div class="flex flex-1 flex-col">
        <nav class="pl-44 my-8">
          <RouterLink
            to="/"
            class="link font-neueKaine font-extrabold text-4xl text-darkOlive-200 w-fit"
            >ori</RouterLink
          >
        </nav>

        <div class="w-full flex flex-col gap-12 pl-48 py-48">
          <div class="flex flex-col gap-4 relative">
            <div class="bubble absolute float-content">
              <img src="../../assets/img/talk-bubble.svg" class="relative" />
              <p class="bubble-text absolute text-darkOlive-200 z-20">
                Je recherche une alternance en
                <strong class="text-melon-600">Développement Web</strong>
              </p>
            </div>

            <h1
              aria-label="Hello, je m'appelle Oriane Frouin !"
              class="font-neueKaine font-bold text-5xl"
            >
              Hello, <br />je m'appelle&nbsp;<br /><span
                class="typewriter text-melon-700 font-black text-5xl"
              ></span>
            </h1>

            <p class="max-w-lg">
              Embarquez dans mon univers, du <strong>design</strong> au
              <strong>développement web</strong> en passant par le <strong>marketing</strong>, je
              vous livre tous les secrets de mon voyage !
            </p>
          </div>

          <div class="flex gap-8">
            <LinkParticle
              to="/projets"
              title="Découvrir mes projets"
              color="melon"
              level="primary"
              iconAfter="arrowafter"
            />
            <ExternalLinkParticle
              href="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=sharing"
              title="Télécharger mon CV"
              color="beige"
              iconAfter="download"
            />
          </div>
        </div>
      </div>
      <div class="hero-box flex flex-1 flex-col bg-verdigris-300 m-4 rounded-xl items-center">
        <nav class="flex w-fit gap-8 m-4 h-fit justify-between">
          <RouterLink to="/profil" class="link text-verdigris-900">Mon profil</RouterLink>
          <RouterLink to="/projets" class="link text-verdigris-900">Mes projets</RouterLink>
          <ExternalLinkParticle
            href="https://drive.google.com/file/d/1YtXy8X7ukbiTvv4IdtEydArvsIKVRL3A/view?usp=drive_link"
            target="_blank"
            title="Télécharger mon CV"
            color="neutral-verdigris"
            iconAfter="download"
          />
          <LinkParticle
            to="/contact"
            title="Me contacter"
            color="verdigris"
            mailto:orianefrn
            iconAfter="mail"
          />
        </nav>

        <img src="../../assets/img/hero-image.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-box {
  background-image: url("../../assets/img/hero-waves.svg");
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
}

.bubble {
  left: 135px;
  top: -90px;
}

.bubble-text {
  top: 14px;
  left: 30px;
  max-width: 240px;
}

.link {
  padding: 6px 12px;
  border-radius: 4px;
  width: fit-content;
  height: fit-content;
}

@keyframes typing {
  0% {
    content: "";
  }
  1.8182% {
    content: "O";
  }
  3.6364% {
    content: "Or";
  }
  5.4545% {
    content: "Ori";
  }
  7.2727% {
    content: "Oria";
  }
  9.0909% {
    content: "Orian";
  }
  10.9091% {
    content: "Oriane";
  }
  12.7273% {
    content: "Oriane ";
  }
  14.5455% {
    content: "Oriane F";
  }
  16.3636% {
    content: "Oriane Fr";
  }
  18.1818% {
    content: "Oriane Fro";
  }
  20% {
    content: "Oriane Frou";
  }
  21.8182% {
    content: "Oriane Froui";
  }
  23.6364% {
    content: "Oriane Frouin";
  }
  100% {
    content: "Oriane Frouin";
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.typewriter {
  --caret: currentcolor;
}

.typewriter::before {
  content: "";
  animation: typing 5s infinite;
}

.typewriter::after {
  content: "";
  border-right: 1px solid var(--caret);
  animation: blink 0.5s linear infinite;
}

.typewriter.thick::after {
  border-right: 1ch solid var(--caret);
}

.typewriter.nocaret::after {
  border-right: 0;
}

@media (prefers-reduced-motion) {
  .typewriter::after {
    animation: none;
  }

  @keyframes sequencePopup {
    0%,
    100% {
      content: "Oriane Frouin";
    }
  }

  .typewriter::before {
    content: "Oriane Frouin";
    animation: sequencePopup 5s linear infinite;
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}

.float-content {
  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;
  img {
    width: 100%;
    height: auto;
  }
}

/* .ocean {
  z-index: 2;
  height: 20%;
  width: 100%;
  /* position: absolute; 
  bottom: 0;
  left: 0;
   background: #015871; 
}

.wave {
  background: url("../../assets/img/wave-animation-1.svg") repeat-x;
   position: absolute; 
  bottom: 0px;
  width: 6400px;
  height: 200px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0); 
} */

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%,
  100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
}
</style>
