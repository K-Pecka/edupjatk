<script setup>
import { useCounterStore } from '@/stores/modules/classes/main'
import { ref, toRefs } from 'vue'

import { Modal } from 'usemodal-vue3';
import { faEdit, faPlus, faTrash, faGears, faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const isClassManagementModalVisible = ref(false)
const addToClassModalVisible = ref(false)

const { rooms, kids } = toRefs(useCounterStore())
const { onDragOver, onDragEnter, onDragLeave, onDragStart, onDrop } = useCounterStore()

const enableClassManagementModal = () => {
  isClassManagementModalVisible.value = true
}

const enableAddToClassModal = () => {
  addToClassModalVisible.value = true
}

</script>

<template>
  <div
      v-for="(room, index) of rooms"
      :key="index"
      class="row mt-3 mx-2 class-container border border-gray shadow rounded justify-content-center class"
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
      <font-awesome-icon
        :icon="faSquare"
        class="p-0 col-6"
        style="height: 75%; width: 75%;"
        :style="{
          color: room.color
        }"
      />
    </div>
    <div
        class="col-12 row justify-content-between h-25"
        draggable="false"
    >
      <span class="h-50 col-6" draggable="false">{{ room.name }}</span>
      <font-awesome-icon :icon="faGears" class="p-0 col-2" style="height: 20px; width: 20px;" @click="enableClassManagementModal" draggable="false" />
    </div>
    <Modal v-model:visible="isClassManagementModalVisible" :title="`Zarządzanie klasą ${room.name}`">
      <div>Zaproś, Usuń</div>
      <div class="row col-12 p-1 justify-content-end">
        <div class="row col-auto px-1" @click="enableAddToClassModal">
          <font-awesome-icon :icon="faPlus" class="p-0 col-2" style="height: 20px; width: 20px;" />
          <span class="col-auto px-1">Add</span>
        </div>
        <div class="row col-auto px-1">
          <font-awesome-icon :icon="faEdit" class="p-0 col-2" style="height: 20px; width: 20px;" />
          <span class="col-auto px-1">Edit</span>
        </div>
      </div>
      <ul class="row w-auto p-0">
        <transition name="slide-fade" v-for="(kid, index) of kids" :key="index">
          <li class="row border border-black align-content-center justify-content-between" v-show="kid.hidden===false">
            <span class="row col-auto align-content-center">imię: {{kid.name}}, klasa: {{kid.class}}</span>
            <div class="row col-auto p-0">
              <div class="row col-auto p-1" @click="kid.hidden=true">
                <font-awesome-icon :icon="faTrash" class="p-0 col-2" style="height: 20px; width: 20px;" />
                <span class="col-auto">Delete</span>
              </div>
            </div>
          </li>
        </transition>
      </ul>
    </Modal>
    <Modal v-model:visible="addToClassModalVisible" :title="`Wybierz kogo zaprosić do klasy`">
      <ul class="row col-12">
        <li class="row">
          <div class="row border border-black align-content-center justify-content-between" v-for="(kid, index) of kids" :key="index" v-show="kid.hidden===true">
            <span class="row col-auto align-content-center">imię: {{kid.name}}, klasa: {{kid.class}}</span>
            <div class="row col-auto px-1" @click="kid.hidden=false">
              <font-awesome-icon :icon="faPlus" class="p-0 col-2" style="height: 20px; width: 20px;" />
              <span class="col-auto px-1">Add</span>
            </div>
          </div>
        </li>
      </ul>
    </Modal>
  </div>
</template>

<style scoped>

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.row {
  margin: 0;
}

.class {
  background: #f5f5f5;
  height: 200px;
  max-width: 280px;
  cursor: pointer;
}

.class:hover {
  background: #f0f0f0;
}

.class:hover {
  border: 2px dashed blue;
}
</style>
