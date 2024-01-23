// BannerComponent.vue
<script setup>
import { useBannerStore } from '@/stores/banner/main.js'
const {getInfo} = useBannerStore()
const {message,status} = getInfo();
console.log(message,status)
</script>

<template>
  <div class="banner" :class="status">
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.banner {
  position: fixed;
  top: 10%;
  left: 25%;
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  transition: opacity 0.5s;
  z-index: 1000;
}

.success {
  background-color: #4CAF50;
  color: white;
}

.error {
  background-color: #f44336;
  color: white;
}

button {
  background-color: #333;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 5px;
}
</style>
