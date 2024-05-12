<script setup>
import {computed} from "vue"

const buttons = defineProps({
  title: {
    type: String,
    required: false,
  },
  color: String,
  type: String,
  iconBefore: {
    type: String,
    required: false,
  },
  iconAfter: {
    type: String,
    required: false,
  },
})

const colorClass = computed(() => `color-${buttons.color}`)
</script>

<template>
  <button :type="buttons.type" :title="routeLink" class="btn" :class="[colorClass]">
    <i v-if="iconBefore" class="link-icon-before icomoon" :class="`${buttons.iconBefore}`"></i>
    {{ buttons.title }}
    <i v-if="iconAfter" class="link-icon-after icomoon" :class="`${buttons.iconAfter}`"></i>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  text-align: center;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 600;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 1s;
  width: fit-content;
  height: fit-content;
  align-items: center;
  transform: perspective(1px) translateZ(0);
  position: relative;
  transition: color 0.3s;
  /* gap: 8px; */

  &:hover {
    /* transform: scale(1.06); */
  }
}

.color-melon {
  box-shadow: inset 0 0 0 0 var(--melon-900);
  color: var(--melon-500);
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background-color: var(--melon-900);

  &:hover {
    color: white;
    box-shadow: inset 200px 0 0 0 var(--melon-500);
  }
}

.color-verdigris {
  color: var(--verdigris-300);
  box-shadow: inset 0 0 0 0 var(--verdigris-500);
  background-color: var(--verdigris-800);

  &:hover {
    color: white;
    box-shadow: inset 200px 0 0 0 var(--verdigris-300);
  }
}

.color-olive {
  color: var(--olive-200);
  background-color: var(--olive-1000);
  box-shadow: inset 0 0 0 0 var(--olive-1000);

  &:hover {
    color: white;
    box-shadow: inset 200px 0 0 0 var(--olive-500);
  }
}

.color-darkolive {
  color: var(--verdigris-700);
  background-color: var(--olive-230);
  /* box-shadow: inset 0 0 0 0 var(--olive-1000); */

  &:hover {
    color: var(--verdigris-300);
    box-shadow: inset 200px 0 0 0 var(--verdigris-800);
  }
}
</style>
