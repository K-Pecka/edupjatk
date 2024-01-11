<script setup>
import navBar from '@/components/navBar/initComponents.vue'
import displayPanel from './displayPanel.vue'
</script>

<template>
  <section>
    <navBar />
    <displayPanel />
  </section>
</template>
<style scoped>
section
{
  height: 100vh;
  width: 100vw;
}
.panel
{
  width: 96%;
  min-height: 85vh;
  transform: translate(2vw, 10vh);
  background-color: #f0f0f0;
}
</style>
