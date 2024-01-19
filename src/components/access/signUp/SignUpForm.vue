<script setup>
import { reactive, defineProps } from 'vue';

const props = defineProps(['fields']);
const fields = reactive(props.fields);
console.log(fields)
</script>

<template>
  <div v-for="field of fields" :key="field.name" class="form-element form-stack">
    <label :for="`form-${field.name}`" class="form-label">{{ field.label }}</label>
    <input :id="`form-${field.name}`" :type="field.type" :name="field.name" v-model="field.value" />
  </div>
</template>
