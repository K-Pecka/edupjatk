<script setup>
import { useUserStore } from '@/stores/user/main.js';
import { usefunctionStore } from '@/stores/function/main.js'
import {ref} from 'vue'
  const { capitalizeText } = usefunctionStore()
  const store = useUserStore();
  const user = store.getUserInfo();

  const showModal = ref(false);
    const selectedField = ref(null);
  const showEditModal = (field) => {
  selectedField.value = field;
  showModal.value = true;
};

const hideModal = () => {
  selectedField.value = null;
  showModal.value = false;
};
</script>

<template>
    <div class="profile-container mt-5 d-flex">
        <h2 class="text-center mb-4">Twój Profil</h2>
        <div class="card">
          <table class="table table-striped dark">
            <tbody>
              <tr v-for="userData of user" :key="userData.field">
                <td><strong>{{ capitalizeText(userData.field) }}</strong></td>
                <td>{{ userData.value }}</td>
                <td class="edit-icon" @click="showEditModal(userData.field)">
                  <i class="fas fa-pencil-alt" width="30" height="30"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="showModal" class="modal">
      <!-- Dodaj kod modalu do edycji -->
      <div>
        <h3>Edytuj {{ capitalizeText(selectedField) }}</h3>
        <!-- Dodaj pola do edycji, przyciski, itp. -->
        <button @click="hideModal">Zamknij</button>
      </div>
    </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
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
  @/stores/function/function.js