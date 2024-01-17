<template>
    <div>
      <div>
        <div class="row justify-content-center">
          <div v-for="(item, index) in dane" :key="index" class="card mb-3 col-md-6 col-lg-4 p-4">
            <div class="row g-4">
              <div :class="['col-md-8', 'order-md-first', 'order-lg-last']">
                <div class="card-body">
                  <h5 class="card-title">
                    <router-link :to="`/education/${item.path}`">{{ item.title.toLocaleUpperCase() }}</router-link>
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
      </div>
    </div>
  </template>
  
  <script setup>
  const dane = [
    { title: 'Matematyka w praktyce', content: 'Rozdział poświęcony jest wykorzystaniem matematyki w praktyce', src: 'images/square.png',path:'1' },
    { title: 'Wprowadzenie do równań', content: 'W tym rozdziale wprowadzamy pojęcie równości i nierówności', src: 'images/square.png',path:'2' },
    { title: 'Pojęcie niewiadomej', content: 'Rozdział poświęcony jest wprowadzeniu niewiadomych do równania', src: 'images/square.png',path:'3' }
  ];
  </script>
  
  <style scoped>
  .card {
    margin: 10px;
    transition: transform 0.3s ease; 
  }
  .card:hover {
    transform: scale(1.01);
  }
  .card-img {
    object-fit: cover;
    height: 100%;
  }
  
  .card-title a {
    color: #007bff;
    text-decoration: none;
  }
  .card-title a:hover {
    text-decoration: underline;
  }
  </style>
  