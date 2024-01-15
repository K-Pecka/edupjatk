<template>
  <RouterView />
  <BackgroundAnimation />
</template>

<script setup>
import BackgroundAnimation from "@/components/static/BackgroundAnimation.vue";
</script>

<style>

body {
  margin: 0;
}

#background-animation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}
</style>