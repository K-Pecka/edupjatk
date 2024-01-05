<script setup>
import '@/assets/styles/modules/classes/style.css';
import SideBarOptions from '@/components/modules/classes/sidebar/SideBarOptions.vue'

import {useCounterStore} from '@/stores/modules/classes/main'
import {ref, toRefs} from 'vue'
import {Modal} from 'usemodal-vue3'

const {currentComponent, choosenOption} = toRefs(useCounterStore())

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
    <div class="row h-25">
      <div class="col-12 h-50 border-bottom border-gray p-0">
        <div id="first-bar" class="row h-100 justify-content-between">
          <div id="logo-container" class="col-1 row h-100 justify-content-center align-content-center">
            logo
          </div>
          <div class="col-auto">
            <div id="settings-container" class="row">
              <div class="col-auto">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="side-panel-header" class="col-1 p-0">
        <div class="row h-100">
          <div class="col-12 row justify-content-center align-content-center side-bar-option" @click="chooseOption('classes')">
            <img class="h-50" src="@/assets/icons/more_horiz.svg" alt="side_panel_header" />
            <span class="col-12 row justify-content-center">Home</span>
          </div>
          <div class="col-12 row justify-content-center align-content-center side-bar-option" @click="chooseOption('module')">
            <img class="h-50" src="@/assets/icons/more_horiz.svg" alt="side_panel_header" />
            <span class="col-12 row justify-content-center">Module</span>
          </div>
        </div>
      </div>
      <div class="col-11 row h-50 p-3 border-bottom border-gray justify-content-end">
        <span class="row font-weight-bold align-content-center">Klasy</span>
        <div id="join-create-class-button" class="col-auto row border border-gray" style="height: 30px;" @click="enableJoinCreateClassModal">
          <img class="row h-100 p-0 w-auto" src="@/assets/icons/more_horiz.svg" alt="menu">
          <span class="row align-content-center w-auto">
            Dołącz do klasy
          </span>
        </div>
      </div>
    </div>
    <div class="row h-75">
      <div id="side-panel" class="col-md-1 p-0 h-100 border-right border-gray">
        <component :is="SideBarOptions" />
      </div>

      <div id="main-content-container" class="col-md-11 row h-auto py-5 pb-auto mb-auto">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
  <Modal v-model:visible="isJoinCreateClassModalVisible" class="bg-white" title="Dołącz do klasy lub stwórz swoją własną!" :okButton="{text: 'Dołącz', onclick: joinClass}" :cancelButton="{text: 'Powrót'}">
    <div>Podaj kod dostępu do klasy...</div>
    <input class="rounded border-gray text-white w-75" placeholder="Miejsce na kod">
  </Modal>
</template>
