<script setup>
import BackgroundAnimation from '@/components/static/BackgroundAnimation.vue'
import CookieBanner from '@/components/static/CookieBanner.vue'
import { useBannerCookiesStore } from '@/stores/elementPage/bannerCookies/main.js'
const { showCookieBanner } = useBannerCookiesStore().cookies
</script>

<template>
  <RouterView />
  <BackgroundAnimation id="background-animation" />
  <CookieBanner v-if="showCookieBanner" />
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
@/stores/static/banner/banner.js @/stores/elementPage/banner/main.js
