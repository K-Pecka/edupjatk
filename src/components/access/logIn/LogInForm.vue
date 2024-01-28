<script setup>
import { reactive } from 'vue'
const props = defineProps(['fields'])
const fields = reactive(props.fields)
</script>

<template>
  <div v-for="field of fields" :key="field.name" class="form-element form-stack">
    <label :for="`form-${field.name}`" class="form-label">{{ field.label }}</label>
    <input
      :id="`form-${field.name}`"
      :type="field.type"
      :name="field.name"
      v-model="field.value"
      required
    />
  </div>
</template>
<style>
input {
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 1em;
  padding: 8px 1px;
  margin-top: 0.1em;
}
.logIn {
  width: 50%;
  height: 100%;
  background: #2c3034;
  left: 0;
  position: absolute;
}
button.login:focus,
button.login:active,
button.login:hover {
  background: #512da8;
}
button.off.login {
  color: c342d0;
}
.logIn label {
  color: #e3e3e3;
}

.logIn input {
  border-bottom: 1px solid #e3e3e3;
  color: #e3e3e3;
}

.logIn input:focus,
.logIn input:active {
  border-color: #50c0bd;
  color: #50c0bd;
}

.logIn a {
  color: #50c0bd;
}
.form-element {
  margin: 1.6em 0;
}
.form-stack {
  display: flex;
  flex-direction: column;
}

button.off.login:focus,
button.off.login:active,
button.off.login:hover {
  color: #512da8;
  background: #e3e3e3;
}
</style>
