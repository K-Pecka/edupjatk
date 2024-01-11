<script setup>
import { useStore } from '@/stores/userStorage.js'
const store = useStore()
const user = store.getUserInfo()
</script>

<template>
  <div>
    <h2>Your Profile</h2>
    <div class="profile-info">
      <div v-for="(value, name) of user" :key="name">
        <strong>{{ name }}:</strong> {{ value }}
      </div>
    </div>
  </div>
</template>
