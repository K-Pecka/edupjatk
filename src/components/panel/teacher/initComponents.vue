<script setup>
import navBar from '@/components/navBar/initComponents.vue'
import displayPanel from '@/components/stateless/DisplayPanel.vue'
</script>

<template>
    <navBar />
    <displayPanel />
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
