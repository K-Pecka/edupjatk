<script setup>
import { useCounterStore } from '@/stores/modules/classes/main'
import { computed, ref, toRefs } from 'vue'
import { Modal } from 'usemodal-vue3'

const { createClass } = useCounterStore()

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const { currentComponent } = toRefs(useCounterStore())

const isJoinCreateClassModalVisible = ref(false)

const current_component_width = computed(() => {
  return `calc(100vw - 111px)`
})

function enableJoinCreateClassModal() {
  isJoinCreateClassModalVisible.value = true
}
</script>

<template>
  <div id="page-container" class="row" style="width: 100vw">
    <div id="top-panel" class="col-12 row border-bottom border-gray p-0 justify-content-between">
      <div
        id="current-component-container"
        class="p-0"
        :style="{
          width: current_component_width
        }"
      >
        <div class="row p-3 border-bottom border-gray justify-content-between">
          <span class="row col-2 font-weight-bold align-content-center">Klasy</span>
          <div
            id="join-create-class-button"
            class="row col-auto rounded border border-gray"
            @click="enableJoinCreateClassModal"
          >
            <font-awesome-icon
              :icon="faPlus"
              class="row w-auto p-0"
              style="height: 20px; width: 20px"
            />
          </div>
        </div>
        <div id="component-container" class="row px-0 pb-0 justify-content-start">
          <component :is="currentComponent" />
        </div>
      </div>
    </div>
  </div>
  <Modal
    v-model:visible="isJoinCreateClassModalVisible"
    :offsetTop="250"
    title="Tworzenie klasy"
    :okButton="{ text: 'Stwórz', onclick: createClass }"
    :cancelButton="{ text: 'Powrót' }"
  >
    <div class="row">
      <div class="w-25">Nazwa:</div>
      <input class="rounded border-gray text-gray w-50 p-0" placeholder="Nazwa" />
    </div>
  </Modal>
</template>
<style scoped>
#top-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  transform: translateX(3em);
}
#join-create-class-button {
  cursor: pointer;
}

#side-panel,
#logo-container {
  padding: 0;
  width: 110px;
}

#current-component-container {
  width: 94%;
}

#logo-container {
  cursor: pointer;
}

#join-create-class-button:hover {
  background: #f0f0f0;
}

.top-bar-buttons {
  width: auto;
  border-left: solid #dee2e6 2px;
  cursor: pointer;
}

.top-bar-buttons:hover {
  background: #f5f5f5;
  color: #5156a7;
}

.row {
  margin: 0;
}

.side-bar-option {
  cursor: pointer;
  padding: 0;
  width: 97%;
}

.side-bar-option:hover {
  background: #f5f5f5;
  color: #5156a7;
}
#page-container {
  height: 100vh;
}
</style>
