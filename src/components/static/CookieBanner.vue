<script setup>
import { userStorage } from '@/stores/static/pageData/banner.js'
import {toRefs} from 'vue'
const { cookies, acceptCookies, showCookieBanner } = toRefs(userStorage())
</script>

<template>
  <div :class="{ 'hide': !showCookieBanner }">
    <p>
      {{ cookies.content }}
      <button @click="acceptCookies">{{ cookies.button.title }}</button>
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
