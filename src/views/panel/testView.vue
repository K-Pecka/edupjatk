<template>
    <div class="container">
      <h2 class="mb-4">Dostępne testy:</h2>
  
      <div v-if="tests.length > 0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nazwa</th>
              <th scope="col">Start</th>
              <th scope="col">Koniec</th>
              <th scope="col">Status</th>
              <th scope="col">Ocena</th>
              <th scope="col">Czas trwania</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(test, index) in tests" :key="index" :class="{ 'table-success': test.isOpen, 'table-danger': !test.isOpen }">
              <td>{{ test.name }}</td>
              <td>{{ test.startTime }}</td>
              <td>{{ test.endTime }}</td>
              <td>{{ test.status }}</td>
              <td>{{ test?.gradue }}</td>
              <td>{{ test.duration }} min</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p class="text-muted">Brak dostępnych testów.</p>
      </div>
    </div>
  </template>

<script setup>
import { useUserStore } from '@/stores/user/main.js'
import { onMounted, ref } from 'vue'
const { getUserInfo } = useUserStore()
const tests = [
  { name: "Test 1", isOpen: true, startTime: "10:00 AM", endTime: "12:00 PM", duration: 30, status: "ocenione", gradue:3 },
  { name: "Test 2", isOpen: false, startTime: "2:00 PM", endTime: "4:00 PM", duration: 45, status: "brak udziału" },
];

const wcaleNieStatyczneDane = ref('')

onMounted(() => {
  wcaleNieStatyczneDane.value = getUserInfo()
})
</script>
  
  <style scoped>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }
  
  .table th {
    background-color: #f8f9fa;
  }
  
  .table-success td {
    background-color: #d4edda; 
    color: #155724;
  }
  
  .table-danger td {
    background-color: #f8d7da;
    color: #721c24;
  }
  </style>
  