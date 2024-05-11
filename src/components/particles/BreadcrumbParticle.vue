<template>
  <div class="breadcrumb mt-12">
    <RouterLink
      class="breadcrumb-previous text-darkOlive-200"
      v-for="page in previousPages"
      :to="page.path"
      :title="page.name"
      :key="page.name"
    >
      {{ page.name }} /
    </RouterLink>
    <p class="breadcrumb-here">{{ pageName }}</p>
  </div>
</template>

<script lang="ts" setup>
// import { Breadcrumb } from '@/definitions/breadcrumb';
defineProps({
  pageName: {
    type: String,
    required: false,
  },
  previousPages: {
    type: Object,
    required: false,
    path: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
  },
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  font-weight: 300;
  /* font-size: 12px; */
}
.breadcrumb-previous {
  /* color: color(brand, 550); */
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    /* color: color(accent, 500); */
  }
}
.breadcrumb-icon {
  /* color: color(brand, 550); */
  max-width: fit-content;
}

.breadcrumb-here {
  /* color: color(brand, 400); */
  font-weight: 700;
  margin: 0;
  padding-left: 2px;
}
</style>
