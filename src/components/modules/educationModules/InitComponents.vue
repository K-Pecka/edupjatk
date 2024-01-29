<template>
  <DisplayCard :data="modul" />
</template>

<script setup>
import { useModuleStore } from '@/stores/modules/educationModules/main.js'
import DisplayCard from '@/components/stateless/DisplayCard.vue'

const modul = useModuleStore().getModul()
</script>

<style scoped>
.container {
  width: 95vw;
  display: flex;
  justify-content: center;
  margin-top: 10vh;
}
.row {
  width: 100%;
}
.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.01);
}
.card-img {
  object-fit: cover;
  height: 100%;
}

.card-title a {
  color: #007bff;
  text-decoration: none;
}
.card-title a:hover {
  text-decoration: underline;
}
</style>
