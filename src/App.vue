<script setup>
import {RouterLink, RouterView} from "vue-router"
import Navbar from "./components/layout/Navbar.vue"
import Footer from "./components/layout/Footer.vue"
import {useRouter} from "vue-router"
import {onBeforeUnmount, onMounted, ref} from "vue"
import ScrollTop from "./components/particles/ScrollTop.vue"
const router = useRouter()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > window.innerHeight
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
  <ScrollTop />
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
