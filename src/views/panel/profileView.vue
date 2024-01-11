<template>
    <div>
      <div class="profile-container mt-5 d-flex">
        <h2 class="text-center mb-4">Twój Profil</h2>
        <div class="card">
          <table class="table table-striped">
            <tbody>
              <tr v-for="userData of user" :key="userData.field">
                <td><strong>{{ capitalizeFirstLetter(userData.field) }}</strong></td>
                <td>{{ userData.value }}</td>
                <td class="edit-icon" @click="showEditModal(userData.field)">
                  <i class="fas fa-pencil-alt" width="30" height="30"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '@/stores/userStorage.js';
  const store = useStore();
  const user = store.getUserInfo();
  
  const showEditModal = (field) => {
    console.log(`Edytuj ${field}`);
  };
  
  const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  </script>
  
  <style scoped>
.profile-container
{
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
  
  .card {
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .table td {
    vertical-align: middle;
  }
  .table
  {
    min-width: 50vw;
    min-height: 40vh;
  }
  
  .edit-icon {
    cursor: pointer;
    color: #28a745;
  }
  </style>
  