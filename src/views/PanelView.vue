<script setup>
import { useStore } from '@/stores/userStorage.js'
const Panel = useStore.getPanel()
console.log(Panel)
</script>

<template>
    <component :is="Panel" />
</template>
