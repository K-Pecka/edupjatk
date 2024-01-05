<template>
  <section>
    <MainHeader :message="headerMessage" />
    <PrintListButton :buttons="buttons" />
  </section>
</template>

<script setup>
import MainHeader from '@/components/stateless/PrintHeader.vue'
import PrintListButton from '@/components/stateless/PrintListButton.vue'

const headerMessage = {}
const buttons = {}
</script>

<style>
body {
  background-image: url('@/assets/background-home.png');
  background-size: cover;
}
</style>
