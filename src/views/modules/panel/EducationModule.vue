<script setup>
import educationModules from '@/components/modules/educationModules/InitComponents.vue'

function getAuthToken() {
  return localStorage.getItem('authToken');
}

async function createClass(name, code) {
  try {
    const authToken = getAuthToken();
    const response = await fetch('https://edupjatk-backend-756c2008b530.herokuapp.com/api/v1/accounts/class/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
        body: JSON.stringify({
            name: name,
            code: code,
        }),
        credentials: 'include',
    })
    if (response.ok) {
        const responseData = await response
        console.log('Response:', responseData)
    } else {
        const errorData = await response
        console.error('Error:', errorData)
    }
  } catch (error) {
      console.error('Error:', error)
  }
}
</script>

<template>
    <educationModules />
</template>