<script setup>
import { computed } from "vue";

const buttons = defineProps({
  title: {
    type: String,
    required: false,
  },
  routeLink: String,
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
});

const colorClass = computed(() => `color-${buttons.color}`);
</script>

<template>
  <button :type="buttons.type" :title="routeLink" class="btn" :class="[colorClass]">
    <i v-if="iconBefore" class="link-icon-before icomoon" :class="`icon-${buttons.iconBefore}`"></i>
    {{ buttons.title }}
    <i v-if="iconAfter" class="link-icon-after icomoon" :class="`icon-${buttons.iconAfter}`"></i>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  text-align: center;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 1s;
  width: fit-content;
  height: fit-content;
  align-items: center;
  /* transform: perspective(1px) translateZ(0); */
  position: relative;
  /* transition: color 0.3s; */
  gap: 8px;
  align-items: center;
  justify-content: center;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.06);
  }
}

.btn > img:last-child {
  margin-left: 8px;
}

.color-melon {
  color: var(--melon-500);
  background-color: var(--melon-900);

  &:hover {
    color: var(--melon-300);
    background-color: var(--melon-800);
  }
}

.color-verdigris {
  color: var(--verdigris-300);
  background-color: var(--verdigris-800);

  &:hover {
    color: var(--verdigris-900);
    background-color: var(--verdigris-400);
  }
}

.color-neutral-verdigris {
  color: var(--verdigris-900);
  background-color: var(--verdigris-400);

  &:hover {
    color: white;
    background-color: var(--verdigris-500);
  }
}

.color-olive {
  color: var(--olive-200);
  background-color: var(--olive-1000);

  &:hover {
    color: white;
  }
}

.color-darkolive {
  color: var(--verdigris-700);
  background-color: var(--olive-230);

  &:hover {
    color: var(--verdigris-300);
  }
}

.color-beige {
  color: var(--beige-400);
  background-color: var(--beige-900);
  &:hover {
    color: var(--beige-200);
    background-color: var(--beige-800);
  }
}
</style>
