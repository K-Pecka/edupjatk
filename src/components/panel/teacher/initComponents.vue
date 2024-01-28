<script setup>
import navBar from '@/components/navBar/initComponents.vue'
import TestPage from '@/pages/TestPage.vue'
</script>

<template>
  <section>
    <navBar />
    <TestPage/>
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
