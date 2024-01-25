<script setup>
import {useNavigationStore} from '@/stores/elementPage/navigation/main.js'
import router from '@/router/index.js'
const navigation = useNavigationStore().getNavigation('main')
console.log(navigation)
const {goTo} = router

const closeOffcanvas = (path) => {
  goTo(path)
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" :to="{ name: 'start' }"><img src="@/assets/logo.svg" width="30" height="30" class="d-inline-block mr-1 align-bottom" alt=""> Edupjatk</router-link>
      <div
        class="offcanvas offcanvas-start text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">LOGO</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav" :class="navigation.className.div">
            <li :style="navigation.style.button.normal" class="nav-item" v-for="item of navigation.buttons" :key="item.label">
              <router-link @click="closeOffcanvas(item.to)" data-bs-dismiss="offcanvas" class="nav-link" aria-current="page" :to="item.to" :class="[item.class,navigation.className.button]">{{item.label}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
