<script setup>
import { useUserStore } from '@/stores/user/main.js'
import { useBannerStore } from '@/stores/elementPage/banner/main.js'
import router from '@/router/index.js'
import { onMounted } from 'vue'

const { logOut } = useUserStore()
const { logOutProperty } = useBannerStore()
const { goTo, paths } = router

onMounted(async () => {
  logOut()
  setTimeout(() => goTo(paths.home), logOutProperty.delay)
})
</script>

<template>
  <div class="goodbye-container">
    <div class="goodbye-message">
      <p>{{ logOutProperty.title }}!<span class="emoji">👋</span></p>
    </div>
  </div>
</template>

<style scoped>
.goodbye-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
}

.goodbye-message {
  text-align: center;
  font-size: 24px;
  color: #fff;
  padding: 20px;
  background: linear-gradient(to left, rgb(193 65 206), rgb(134 145 217));
  border-radius: 8px;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeOut 2s ease-in-out forwards;
}

.emoji {
  font-size: 36px;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
@/stores/static/banner/banner.js
