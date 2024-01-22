<template>
  <div>
    <div class="p-3">
      <h2>{{dane?.chapterName ?? 'no data'}}</h2>
      <div>
        <div class="row justify-content-center pt-3" v-if="dane.subsection">
          <div v-for="(item, index) in dane.subsection" :key="index" class="card mb-3 col-md-6 col-lg-4 p-4">
            <div class="row g-4">
              <div :class="['col-md-8', 'order-md-first', 'order-lg-last']">
                <div class="card-body">
                  <h5 class="card-title">
                    <router-link :to="`/education/${chapter}/${item.path}`">{{
                      item.title.toLocaleUpperCase()
                    }}</router-link>
                  </h5>
                  <p class="card-text">{{ item.content }}</p>
                </div>
              </div>
              <div :class="['col-md-4', 'order-md-last', 'order-lg-first']">
                <img :src="`/src/assets/${item.src}`" alt="Grafika" class="card-img img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row justify-content-center">
          <div class="col-md-6 text-center">
            <i class="fas fa-exclamation-circle fa-3x text-danger"></i>
            <p class="mt-2">Wybrany rozdziału nie istnieje</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const modul = {
  1: {
    chapterName: "matematyka w pratyce",
    subsection:[
    {
      title: 'zegar',
      content: 'W tym epizodzie nauczysz się jak działa zegar, nauczysz się jak ustawiać zegar nalogiczny, na podstawie cyfrowego',
      src: 'images/square.png',
      path: '1'
    },
  ]},
  2: {chapterName: "Równi i równiejsi",
    subsection:[
    {
      title: 'mniej, więcej',
      content: 'Epizod ten poświęcimy na zrozumienie mojęcią, "większy", "mniejszy" ',
      src: 'images/square.png',
      path: '1'
    }
  ]},
  3: {chapterName: "Wprowadzenie do nie wiadomych",
    subsection:[
    {
      title: 'nie wiem, ale się do wiem',
      content: 'Wyjaśnimy na czym polega nie wiadoma, w matematyce',
      src: 'images/square.png',
      path: '1'
    }
  ]}
}
const route = useRoute()
const chapter = route.params.chapter
const dane = modul[chapter] ?? null
</script>
