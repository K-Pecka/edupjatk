<template>
    <div :class="{ 'hide': !showCookieBanner }">
      <p>This website uses cookies to ensure you get the best experience.</p>
      <button @click="acceptCookies">TAK</button>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';

    const showCookieBanner = ref(!sessionStorage.getItem('cookiesAccepted'));

    const acceptCookies = () => {
    sessionStorage.setItem('cookiesAccepted', 'true');
    showCookieBanner.value = false;
    };
    </script>
  <style scoped>
  div {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
    transition: transform 0.5s ease-in-out; /* Use transform for smooth slide */
  }
  
  .hide {
    transform: translateY(100%); /* Slide down to hide */
  }
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  