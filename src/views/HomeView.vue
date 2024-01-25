<template>
  <section class="container page">
    <component  :is="header.component" :message="header.props" />
    <component  :is="buttonsList.component" :buttons="buttonsList.props" />
  </section>
</template>

<script setup>
import {useStore} from '@/stores/static/pageData/homePage.js'
const {header,buttonsList} = useStore().getMainPage();

</script>

<style  scoped>
section {
  color:#eee;
  padding:4em;
  min-width:50%;
  box-shadow: 1px 1px 5px 1px #131313;
  background: rgba(255, 255, 255, 0.15); 
  backdrop-filter: blur(10px); 
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
</style>@/stores/static/homePage/homePage.js