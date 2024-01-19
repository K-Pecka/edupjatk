<script setup>
import { accessHTMLstore } from '@/stores/static/pageData/accessHTML.js'

const store = accessHTMLstore()
const accessTypePanel = store.getState()

const changeState = () => {
  store.changeState()
}

//const emit = defineEmits(['onSubmit'])
const sendForm = () => {
  /*const formData = fields.reduce((data, field) => {
    data[field.name] = field.value
    return data
  }, {})
  console.log(formData)
  emit('onSubmit', formData)*/
}
</script>

<template>
  <div :class="accessTypePanel.classPanelPage">
    <div class="content">
      <h2>{{ accessTypePanel.title }}</h2>
      <form @submit.prevent="sendForm">
          <component
            :is="accessTypePanel.component"
            :fields="accessTypePanel.fields"
            :key="accessTypePanel.state"
          />
        <div class="form-element form-submit">
          <button id="signUp" class="signup" type="submit" name="signup">
            {{ accessTypePanel.btn?.main.title }}
          </button>
          <button class="signup off" @click="changeState">
            {{ accessTypePanel.btn?.second.title }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>