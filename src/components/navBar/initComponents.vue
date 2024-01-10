<script setup>
import ListItems from '@/stores/panelButtonData.js'
console.log(ListItems)
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
      <a class="navbar-brand" href="#"><img src="@/assets/logo.svg" width="30" height="30" class="d-inline-block mr-1 align-bottom" alt=""> Edupjatk</a>
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
          <ul class="navbar-nav" :class="ListItems.className.div">
            <li class="nav-item" v-for="item of ListItems.buttons" :key="item.label">
              <router-link class="nav-link" aria-current="page" :to="item.to" :class="[item.class,ListItems.className.button]">{{item.label}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
