<script setup>
const props = defineProps(['fields']);
const fields = reactive(props.fields);
</script>

<template>
  <div v-for="field of fields" :key="field.name" class="form-element form-stack">
    <label :for="`form-${field.name}`" class="form-label">{{ field.label }}</label>
    <input :id="`form-${field.name}`" :type="field.type" :name="field.name" v-model="field.value" required />
  </div>
</template>
<style scoped>
input {
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 1em;
  padding: 8px 1px;
  margin-top: 0.1em;
}
.form-element {
  margin: 1.6em 0;
}
.form-stack {
  display: flex;
  flex-direction: column;
}
.signUp {
  width: 50%;
  height: 100%;
  background: #f9f9f9;
  position: absolute;
}

.signUp label {
  color: #212121;
}

.signUp input {
  border-bottom: 1px solid #212121;
}

.signUp input:focus,
.signUp input:active {
  border-color: #673ab7;
  color:#673ab7;
}
</style>
