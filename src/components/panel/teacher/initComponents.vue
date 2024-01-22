<script setup>
import navBar from '@/components/navBar/initComponents.vue'
import displayPanel from '@/components/stateless/DisplayPanel.vue'
</script>

<template>
  <section>
    <navBar />
    <displayPanel/>
  </section>
</template>
<style scoped>
section
{
  width: 96vw;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}
</style>
