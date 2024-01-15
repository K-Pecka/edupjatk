<script setup>

const emit = defineEmits(['onSubmit'])

const props = defineProps(['formFields']);
const { button, className: generalClass,formFields,style } = props.formFields;

const sendForm = () => {
  const formData = formFields.reduce((data, field) => {
    data[field.name] = field.value;
    return data;
  }, {});
  emit('onSubmit', formData);
};
</script>
<template>
  <form @submit.prevent="sendForm" :style="style?.form">
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
