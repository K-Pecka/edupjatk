<script setup>
import { useCounterStore } from '@/stores/modules/classes/main'
import { computed, ref, toRefs } from 'vue'
import { Modal } from 'usemodal-vue3'

import { useRouter } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesomeLogoFull, faAddressBook } from '@fortawesome/free-solid-svg-icons'

const { currentComponent, choosenOption, options, side_panel } = toRefs(useCounterStore())

const router = useRouter()

const isJoinCreateClassModalVisible = ref(false)

function joinClass() {

}

const chooseOption = (choice) => {
  if (choice) {
    console.log(choice)
    choosenOption.value = choice
  }
}

const side_bar_height = computed(() => {
  return `calc(100vh - 72px)`
})

const current_component_width = computed(() => {
  return `calc(100vw - 111px)`
})

function enableJoinCreateClassModal() {
  isJoinCreateClassModalVisible.value = true
}
</script>

<template>
  <div id="page-container" class="row" style="width: 100vw">
    <div id="top-panel" style="position: fixed; overflow: hidden; height: 72px;" class="col-12 row border-bottom border-gray p-0 justify-content-between">
      <div id="logo-container" class="p-0 row justify-content-center align-content-center">
        <font-awesome-icon :icon="faFontAwesomeLogoFull" class="p-0 col-auto" style="height: 50px; position: fixed; top: 10px; width: 50px;" @click="router.back()" />
      </div>
      <nav id="settings-container" class="row col-8 justify-content-end align-self-center">
        <ul class="row justify-content-end">
          <li
            class="row list-unstyled py-4 align-content-center top-bar-buttons"
            v-for="option of options"
            :key="option"
            style="overflow: hidden;"
          >
              <span class="row ">{{ option }}</span>
          </li>
        </ul>
      </nav>
    </div>
    <div id="page-content" class="row p-0 justify-content-end">
      <nav
        id="side-panel"
        style="position: fixed; left: 0; top: 72px; width: 111px;"
        :style="{
          height: side_bar_height
        }"
      >
        <ul class="row col-12 p-0 justify-content-end">
          <li
            v-for="(side_panel_option, index) of side_panel"
            :key="index"
            :style="{
              borderLeft: side_panel_option.routing === choosenOption ? '#5156a7 3px solid' : ''
            }"
            class="row mt-1 justify-content-center align-content-center side-bar-option"
            @click="chooseOption(side_panel_option.routing)"
          >
            <font-awesome-icon
              :icon="side_panel_option.icon"
              class="p-0 col-2"
              style="height: 20px; width: 20px;"
              :style="{
                color: side_panel_option.routing === choosenOption ? '#5156a7' : ''
              }"
            />
            <span class="row justify-content-center">{{ side_panel_option.text }}</span>
          </li>
        </ul>
      </nav>
      <div
        id="current-component-container"
        class="p-0"
        style="position: fixed; right: 0; top: 72px;"
        :style="{
        width: current_component_width
        }"
      >
        <div class="row p-3 border-bottom border-gray justify-content-between">
          <span class="row col-2 font-weight-bold align-content-center">Klasy</span>
          <div id="join-create-class-button" class="row col-2 py-1 px-3 rounded border border-gray"
               @click="enableJoinCreateClassModal">
            <font-awesome-icon :icon="faAddressBook" class="row w-auto p-0" style="height: 20px; width: 20px;" />
            <span class="row align-content-center w-auto">Dołącz do klasy</span>
          </div>
        </div>
        <div id="component-container" class="row px-0 pb-0 justify-content-start">
          <component :is="currentComponent" />
        </div>
      </div>
    </div>
  </div>
  <Modal v-model:visible="isJoinCreateClassModalVisible" :offsetTop="250" title="Dołącz do klasy lub stwórz swoją własną!"
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
  padding: 0;
  width: 110px;
}

#current-component-container {
  width: 94%
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
#page-container
{
  height: 100vh;
}
</style>
