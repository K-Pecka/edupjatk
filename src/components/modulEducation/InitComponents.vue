<template>
    <div>
      <div>
        <div class="row justify-content-center">
          <div v-for="(item, index) in dane" :key="index" class="card mb-3 col-md-6 col-lg-4 p-4">
            <div class="row g-4">
              <div :class="['col-md-8', 'order-md-first', 'order-lg-last']">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.content }}</p>
                </div>
              </div>
              <div :class="['col-md-4', 'order-md-last', 'order-lg-first']">
                <img :src="`src/assets/${item.src}`" alt="Grafika" class="card-img img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const dane = [
    { title: 'Matematyka w pratyce', content: 'Rozdział poświęcony jest wykorzystaniem matematyki w praktyce', src: 'images/square.png' },
    { title: 'Wprowadzenie do równań', content: 'W tym rozdzialę wprowadzamy pojęcię równości i nie równości', src: 'images/square.png' },
    { title: 'Pojęcię nie wiadomej', content: 'Rozdział poświęcony jest wprowadzeniu niewiadomowych do równania', src: 'images/square.png' }
  ];
  </script>
  
  <style scoped>
  /* Dostosuj style według potrzeb */
  .card {
    margin: 10px;
  }
  
  .card-img {
    object-fit: cover;
    height: 100%;
  }
  </style>
  