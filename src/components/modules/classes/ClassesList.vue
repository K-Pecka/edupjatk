<script setup>
import { useCounterStore } from '@/stores/modules/classes/main'
import { ref, toRefs } from 'vue'

import { Modal } from 'usemodal-vue3';

const isClassManagementModalVisible = ref(false)

const { rooms, kids } = toRefs(useCounterStore())
const { onDragOver, onDragEnter, onDragLeave, onDragStart, onDrop } = useCounterStore()

const enableClassManagementModal = () => {
  isClassManagementModalVisible.value = true
}

</script>

<template>
  <div
      v-for="(room, index) of rooms"
      :key="index"
      class="row mt-3 mx-2 class-container border border-gray shadow class rounded justify-content-center"
      @dragover.prevent="onDragOver"
      @dragenter="onDragEnter(index)"
      @dragleave="onDragLeave"
      @dragstart="onDragStart(index)"
      @drop="onDrop($event)"
      draggable="true"
      :id="`room_${index}`"
  ><!-- zmień se to na routa router.push({name: 'dsfsdf'})-->
    <div
        class="col-12 row pt-4 justify-content-center h-75"
        draggable="false"
    >
      <img
          class="h-75 rounded col-6"
          draggable="false"
          :src="room.image"
          alt="settings"
      >
    </div>
    <div
        class="col-12 row justify-content-between h-25"
        draggable="false"
    >
      <span class="h-50 col-6" draggable="false">{{ room.name }}</span>
      <img
          class="h-50 col-2 p-0 rounded class-button"
          draggable="false"
          src="@/assets/icons/more_horiz.svg"
          alt="settings"
          @click="enableClassManagementModal"
      >
    </div>
    <Modal v-model:visible="isClassManagementModalVisible" :title="`Zarządzanie klasą ${room.name}`">
      <div>Zaproś, Usuń</div>
      <div class="row col-12 p-1 justify-content-end">
        <div class="row col-auto px-1">
          <img src="@/assets/images/square.png" alt="add_icon" class="col-2 p-0" style="height: 20px; width: 20px;">
          <span class="col-auto px-1">Add</span>
        </div>
        <div class="row col-auto px-1">
          <img src="@/assets/images/square.png" alt="add_icon" class="col-2 p-0" style="height: 20px; width: 20px;">
          <span class="col-auto px-1">Edit</span>
        </div>
      </div>
      <ul class="row w-auto p-0">
        <li class="row border border-black align-content-center justify-content-between" v-for="(kid, index) of kids" :key="index" v-show="kid.hidden===false">
          <span class="row col-auto align-content-center">imię: {{kid.name}} klasa: {{kid.class}}</span>
          <div class="row col-auto p-0">
            <div class="row col-auto p-1">
              <img src="@/assets/images/square.png" alt="delete_icon" class="col-2 ml-2 p-0" style="height: 20px; width: 20px;">
              <span class="col-auto">Delete</span>
            </div>
          </div>
        </li>
      </ul>
    </Modal>
  </div>
</template>

<style scoped>

.row {
  margin: 0;
}

.class {
  background: #f5f5f5;
  height: 200px;
  width: 280px;
  cursor: pointer;
}

.class:hover {
  background: #f0f0f0;
}

.class-button:hover {
  box-shadow: #3294d5;
}

.class:hover {
  border: 2px dashed blue;
}
</style>
