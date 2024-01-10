<template>
  <section class="container page">
    <MainHeader :message="headerMessage" />
    <PrintListButton :buttons="buttons" />
  </section>
</template>

<script setup>

import MainHeader from '@/components/stateless/PrintHeader.vue'
import PrintListButton from '@/components/stateless/PrintListButton.vue'
import data from '@/stores/MainPageData.js'
const { headerMessage,buttons } = data
</script>

<style  scoped>
body {
  background-image: url('@/assets/background-home.png');
  background-size: cover;
}
</style>