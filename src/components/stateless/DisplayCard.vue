<script setup>
const props = defineProps(['data']);
const {data,title} = props.data
const subject = 'math'
</script>

<template>
  <div >
    <div class="p-3 mt-5">
      <h2>{{data == [] ? 'no data' : title}}</h2>
      <div class="container">
        <div class="row justify-content-center pt-3" v-if="data">
          <div v-for="(item, index) in data" :key="index" class="card  m-3 col-sm-12 col-lg-5 col-xl-5 p-4">
            <div class="row g-4">
              <div :class="['col-md-6', 'order-md-first', 'order-lg-last']">
                <div class="card-body">
                  <h5 class="card-title">
                    <router-link :to="`/education${item.path}`">{{
                      item.card.title.toLocaleUpperCase()
                    }}</router-link>
                  </h5>
                  <p class="card-text">{{ item.card.content }}</p>
                </div>
              </div>
              <div :class="['col-md-6', 'order-md-last', 'order-lg-first','d-none', 'd-md-block']">
                <img :src="`/src/assets/modulEducation/${subject}${item.imagePath}`" alt="Grafika" class="card-img img-fluid" />
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

<style>

</style>