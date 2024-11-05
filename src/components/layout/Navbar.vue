<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import ExternalLinkParticle from "../particles/ExternalLinkParticle.vue";
import router from "@/router";
import ButtonParticle from "../particles/ButtonParticle.vue";

const navElement = ref(null);

const handleScroll = () => {
  if (!navElement.value) {
    navElement.value = document.querySelector("nav");
  }
  const scrollTop = window.pageYOffset;
  if (scrollTop > 0) {
    navElement.value.classList.add("nav-shrink");
  } else {
    navElement.value.classList.remove("nav-shrink");
  }
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

const isMenuOpen = ref(false);

const checkScreenSize = () => {
  const screenWidth = window.innerWidth;
  isMenuOpen.value = screenWidth >= 1024;
};

const isMobileOrTablet = () => {
  const screenWidth = window.innerWidth;
  return screenWidth < 1024;
};

const closeMenu = () => {
  if (isMobileOrTablet()) {
    isMenuOpen.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<template>
  <header class="top-0 z-50 sticky h-24">
    <nav
      class="h-full flex items-center"
      :class="router.currentRoute.value.name !== 'accueil' ? 'bg-beige-900' : ''"
    >
      <div class="flex flex-1">
        <RouterLink
          to="/"
          class="link logo font-neueKaine font-extrabold text-4xl text-darkOlive-200 w-fit lg:ml-48 ml-5 md:mt-0 mt-5 hover:bg-verdigris-600 focus:bg-verdigris-600 md:h-fit h-14"
          ><img src="../../assets/img/ori-logo.svg "
        /></RouterLink>
      </div>

      <div class="flex flex-1 justify-center items-center m-4 menu" v-show="isMenuOpen">
        <ul class="flex items-center gap-8 nav-menu">
          <li class="nav-item md:hidden visible" @click="closeMenu">
            <RouterLink
              to="/"
              class="link nav-link"
              :class="
                router.currentRoute.value.name !== 'accueil' ? 'text-darkOlive-200' : 'text-verdigris-900'
              "
              >Accueil</RouterLink
            >
          </li>
          <li class="nav-item" @click="closeMenu">
            <RouterLink
              to="/profil"
              class="link nav-link"
              :class="
                router.currentRoute.value.name !== 'accueil' ? 'text-darkOlive-200' : 'text-verdigris-900'
              "
              >Mon profil</RouterLink
            >
          </li>
          <li class="nav-item" @click="closeMenu">
            <RouterLink
              to="/projets"
              class="link nav-link"
              :class="
                router.currentRoute.value.name !== 'accueil' ? 'text-darkOlive-200' : 'text-verdigris-900'
              "
              >Mes projets</RouterLink
            >
          </li>
          <li class="nav-item" @click="closeMenu">
            <ExternalLinkParticle
              href="https://drive.google.com/file/d/1Q7WK3uSy1N8We5mUMIXeHcWsyHGADH7t/view?usp=sharing"
              target="_blank"
              title="Télécharger mon CV"
              :color="router.currentRoute.value.name !== 'accueil' ? 'beige' : 'neutral-verdigris'"
              iconAfter="download"
              class="nav-link"
            />
          </li>
          <li class="nav-item" @click="closeMenu">
            <ButtonParticle
              @click="scrollToBottom"
              to="/contact"
              title="Me contacter"
              :color="router.currentRoute.value.name !== 'accueil' ? 'melon' : 'verdigris'"
              iconAfter="mail"
              class="nav-link"
            />
          </li>
        </ul>
      </div>

      <div class="menu-toggle" @click="toggleMenu" :class="{ open: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<style scoped>
li {
  list-style: none;
}

.link {
  padding: 6px 12px;
  border-radius: 4px;
  width: fit-content;
  height: fit-content;
}

.link.logo {
  padding: 0 12px;
  padding-left: 10px;
}

img {
  height: 40px;
}

@media (min-width: 768px) {
  img {
    height: 70px;
  }
}
nav[style*="background-color"] {
  display: none;
}

.nav-shrink {
  height: 4rem;
  background-color: var(--beige-900);
  transition: height 0.3s ease;
}

.nav-shrink > div > ul > li:nth-child(-n + 3) > a {
  color: var(--olive-200);
}

.nav-shrink > div > ul > li:nth-child(-n + 2) > a {
  &:active,
  &:focus {
    color: var(--verdigris-900);
  }
}

@media (max-width: 1024px) {
  .nav-shrink > div > ul > li:nth-child(-n + 2) > a {
    color: var(--olive-200);
  }

  .nav-shrink > div > ul > li:nth-child(-n + 2) > a {
    &:active,
    &:focus {
      color: var(--verdigris-900);
    }
  }

  nav {
    display: block;
  }
  .menu-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 1000;
  }

  .menu-toggle span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: var(--olive-200);
    position: absolute;
    left: 0;
    transition: transform 0.3s ease-in-out;
    border-radius: 2px;
  }

  .menu-toggle span:nth-child(1) {
    top: 10px;
  }

  .menu-toggle span:nth-child(2) {
    top: 18px;
  }

  .menu-toggle span:nth-child(3) {
    top: 26px;
  }

  .menu-toggle.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-toggle.open span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  nav > div:nth-child(2) {
    position: fixed;
    top: -16px;
    left: -16px;
    width: 100%;
    height: 100vh;
    background-color: white;
    display: none;
    justify-content: center;
    align-items: center;
    flex: 0;
    z-index: 999;
    display: flex;
  }

  nav > div:nth-child(2) > ul {
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
}
</style>
