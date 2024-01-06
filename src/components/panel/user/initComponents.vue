<script setup>
import { truncate } from "fs";

//import PrintnavBar from '@/components/stateless/PrintnavBar.vue'
const ListItems = {
  buttons: [
    { label: 'ustawienia', to: { name: 'logIn' }, class: ['btn-primary'] },
    { label: 'profil', to: { name: 'SignUp' }, class: ['btn-secondary'] },
    { label: 'testy', to: { name: 'classes' }, class: ['btn-secondary'] },
    { label: 'Statystyki', to: { name: 'panel' }, class: ['btn-secondary'] },
    { label: 'Wyloguj', to: { name: 'panel' }, class: ['btn-secondary'] }
  ],
  style: {
    button: {
      normal: {
        width: '80%',
        padding: '3%',
        'margin-bottom': '5%',
        background: 'linear-gradient(to left, #50c0bd, #8792da)'
      },
      hover: {
        width: '85%'
      }
    },
    div: {}
  },
  className: {
    button: ['btn', 'animation-1','p-ripple'],
    div: ['d-flex', 'align-items-center', 'justify-content-center', 'flex-column']
  },
  atrribute:{
    'v-ripple':true
  }
}
</script>

<template>
  <section>
    <!-- <Navbar :buttons="ListItems" /> -->
    <nav>
      <!-- <Navbar :buttons="ListItems" /> -->
    </nav>
    <div class="card card-container flex justify-content-center align-items-center">
      <div
        v-ripple
        class="p-ripple bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold"
      >
        Default
      </div>
    </div>
  </section>
</template>

<style>
div{
    width: 100px;
    height: 100px;
}
</style>
