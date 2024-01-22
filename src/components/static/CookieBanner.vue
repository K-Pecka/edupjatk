<script setup>
import { bannerStorage } from '@/stores/static/pageData/banner.js'
import {toRefs} from 'vue'
const { cookiesProperty, showCookieBanner, acceptCookies } = toRefs(bannerStorage().cookies);
</script>

<template>
  <div :class="{ 'hide': !showCookieBanner }">
    <p>
      {{ cookiesProperty.content }}
      <button @click="acceptCookies">{{ cookiesProperty.button.title }}</button>
    </p>
  </div>
</template>

<style scoped>
div {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  transition: transform 0.5s ease-in-out;
}

.hide {
  transform: translateY(100%);
}
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
