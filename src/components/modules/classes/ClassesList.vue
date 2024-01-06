<script setup>
import { useCounterStore } from '@/stores/modules/classes/main'
import { ref, toRefs } from 'vue'

import { Modal } from 'usemodal-vue3';

const isClassManagementModalVisible = ref(false)

const { rooms } = toRefs(useCounterStore())
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
      @click="enableClassManagementModal"
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
          class="h-50 col-1 rounded"
          draggable="false"
          src="@/assets/icons/more_horiz.svg"
          alt="settings"
      >
    </div>
  </div>
  <Modal v-model:visible="isClassManagementModalVisible">
    <div>your content...</div>
  </Modal>
</template>

<style scoped>

.row {
  margin: 0;
}

.class {
  background: #f0f0f0;
  height: 200px;
  width: 280px;
  cursor: pointer;
}

.class:hover {
  border: 2px dashed blue;
}
</style>
