<script setup>
import {RouterLink, RouterView} from "vue-router"
import Navbar from "./components/layout/Navbar.vue"
import Footer from "./components/layout/Footer.vue"
</script>

<template>
  <Navbar />
  <Toast />
  <RouterView />
  <Footer />
</template>

<style scoped>
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
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
