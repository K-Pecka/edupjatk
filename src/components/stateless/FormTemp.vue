<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['onSubmit'])

const props = defineProps(['formFields']);
const { button, className: generalClass,formFields } = props.formFields;
console.log(formFields)

const login = () => {
  const formData = formFields.reduce((data, field) => {
    data[field.label] = field.value;
    return data;
  }, {});
  emit('onSubmit', formData);
};
</script>
<template>
  <form @submit.prevent="login">
    <div v-for="field in formFields" :key="field.label" :class="generalClass">
      <label :class="field?.class.label">{{ field?.label }}</label>
      <input
        :type="field?.type"
        :class="field?.class.input"
        :placeholder="field.placeholder"
        v-bind="field?.attribute"
        v-model="field.value"
      />
    </div>
    <button type="submit" :class="button?.class">{{ button.label }}</button>
  </form>
</template>
