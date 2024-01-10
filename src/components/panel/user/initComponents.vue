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
  position: relative;
  overflow: hidden;
}

/* Styl dla efektu szkła */
.panel:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  opacity: 0.2; 
  transform: scale(1.5); 
  filter: blur(10px);
  z-index: -1;
}
</style>
