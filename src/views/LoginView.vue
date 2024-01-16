<script setup>
import LogIn from '@/components/login/LogIn.vue'
</script>

<template>

  <section>
    <div class="container mt-5 d-flex">
        <LogIn />
    </div>
  </section>
  
</template>

<style scoped>
section {
  color:#eee;
  padding:4em;
  min-width:50vw;
  box-shadow: 1px 1px 5px 1px #131313;
  background: rgba(255, 255, 255, 0.15); 
  backdrop-filter: blur(10px); 
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
form
{
  max-width: 50%;
}
</style>