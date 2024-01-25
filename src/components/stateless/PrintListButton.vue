<script setup>
import { ref } from 'vue'

const { className: generalClass, style, list } = defineProps(['buttons']).buttons

const hoveredButtonIndex = ref(null)

const handleMouseEnter = (index) => {
  hoveredButtonIndex.value = index
}

const handleMouseLeave = () => {
  hoveredButtonIndex.value = null
}
</script>

<template>
    <div :class="generalClass?.div" :style="style?.div">
      <transition name="bounce" appear v-for="(buttonItem, index) in list"
        :key="index">
        <router-link
        :to="buttonItem?.to"
        :style="[style?.button?.normal, index === hoveredButtonIndex ? style?.button?.hover : {}]"
        :class="[generalClass?.button, ...buttonItem?.class]"
        @mouseenter="() => handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
      >
        {{ buttonItem.label }}
      </router-link>
      </transition>
      
    </div>
</template>

<style scoped>

.animation-1 {
  transition: 1s all ease-in-out;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
