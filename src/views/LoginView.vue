<template>

  <section>
    <div class="container mt-5">
    <h2 class="mb-4">Login</h2>
    <form @submit.prevent="login">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input type="text" v-model="username" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </section>
  
</template>

<script setup>
import {ref} from  'vue'
const username = ref('');
const password = ref('');

const login = () => {
  console.log('Logging in with:', username.value, password.value);
};
</script>
<style>
body{
    background-image: url('@/assets/background-home.png');
    background-size: cover;
  }
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