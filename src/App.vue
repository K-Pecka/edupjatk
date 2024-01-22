<script setup>
import BackgroundAnimation from "@/components/static/BackgroundAnimation.vue";
import CookieBanner from "@/components/static/CookieBanner.vue";
import { bannerStorage } from '@/stores/static/pageData/banner.js'
const { showCookieBanner} = bannerStorage().cookies;
</script>

<template>
  <RouterView />
  <BackgroundAnimation id="background-animation"/>
  <CookieBanner v-if="showCookieBanner"/>
</template>

<style scoped>
#background-animation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}
</style>