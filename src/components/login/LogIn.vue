<script setup>

import FormTemp from '@/components/stateless/FormTemp.vue'
import loginData from '@/stores/loginPageData.js'

const handleFormSubmit = (formData) => 
{
  try {
    console.log('Received form data:', formData);
  } catch (error) {
    console.error('Error handling form submit:', error);
  }
};
</script>

<template>
        <FormTemp :formFields="loginData" @onSubmit="handleFormSubmit"/>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>