<script setup>
import { useCounterStore } from '@/stores/modules/classes/main'
import { ref, toRefs } from 'vue'
import { Modal } from 'usemodal-vue3'

const { currentComponent, choosenOption, options, side_panel } = toRefs(useCounterStore())

const isJoinCreateClassModalVisible = ref(false)

function joinClass() {

}

const chooseOption = (choice) => {
  if (choice) {
    console.log(choice)
    choosenOption.value = choice
  }
}

function enableJoinCreateClassModal() {
  isJoinCreateClassModalVisible.value = true
}
</script>

<template>
  <div id="page-container" class="w-100 h-100">
    <div id="top-panel" class="col-12 row border-bottom border-gray p-0 justify-content-between">
      <div id="logo-container" class="col-1 p-0 row h-100 justify-content-center align-content-center">
        <img class="p-0" src="@/assets/icons/more_horiz.svg" alt="Logo" height="80" width="50" />
      </div>
      <nav id="settings-container" class="row col-8 justify-content-end align-self-center">
        <ul class="row justify-content-end">
          <li
            class="col-2 row list-unstyled py-4 align-content-center top-bar-buttons"
            v-for="option of options"
            :key="option"
          >
              <span class="row">{{ option }}</span>
          </li>
        </ul>
      </nav>
    </div>
    <div id="page-content" class="row">
      <nav id="side-panel">
        <ul class="row col-12 p-0">
          <li
            v-for="(side_panel_option, index) of side_panel"
            :key="index"
            :style="{
              borderLeft: side_panel_option.routing === choosenOption ? '#d9d9d9 2px solid' : ''
            }"
            class="col-12 row mt-1 justify-content-center align-content-center side-bar-option"
            @click="chooseOption(side_panel_option.routing)"
          >
            <img src="@/assets/icons/more_horiz.svg" alt="side_panel_header" height="40" />
            <span class="row justify-content-center">{{ side_panel_option.text }}</span>
          </li>
        </ul>
      </nav>
      <div id="current-component-container">
        <div class="row p-3 border-bottom border-gray justify-content-between">
          <span class="row col-2 font-weight-bold align-content-center">Klasy</span>
          <div id="join-create-class-button" class="row col-2 py-1 px-3 rounded border border-gray"
               @click="enableJoinCreateClassModal">
            <img class="row h-100 p-0 w-auto" src="@/assets/icons/more_horiz.svg" alt="menu">
            <span class="row align-content-center w-auto">Dołącz do klasy</span>
          </div>
        </div>
        <div id="component-container" class="row px-0 pb-0 justify-content-start">
          <component :is="currentComponent" />
        </div>
      </div>
    </div>
    {{isJoinCreateClassModalVisible}}
  </div>
  <Modal v-model:visible="isJoinCreateClassModalVisible" class="bg-white" title="Dołącz do klasy lub stwórz swoją własną!"
         :okButton="{text: 'Dołącz', onclick: joinClass}" :cancelButton="{text: 'Powrót'}">
    <div>Podaj kod dostępu do klasy...</div>
    <input class="rounded border-gray text-white w-75" placeholder="Miejsce na kod">
  </Modal>
</template>
<style scoped>

#join-create-class-button {
  cursor: pointer;
}

#top-panel, #side-panel {
  background: rgb(235, 235, 235, 1);
}

#side-panel, #logo-container {
  width: 6%;
}

#current-component-container {
  width: 94%
}

.top-bar-buttons {
  width: 14%;
  border-left: solid #dee2e6 2px;
  cursor: pointer;
}

.top-bar-buttons:hover {
  background: #d9d9d9;
}

.row {
  margin: 0;
}

.side-bar-option {
  cursor: pointer;
  padding: 0;
}

.side-bar-option:hover {
  background: #d9d9d9;
}

</style>
