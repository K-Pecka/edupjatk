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
section {
  color:#eee;
  padding:4em;
  box-shadow: 1px 1px 5px 1px #999;
  background: rgba(255, 255, 255, 0.15); 
  backdrop-filter: blur(10px); 
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
</style>