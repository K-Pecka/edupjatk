<script setup>

import { useStore } from '@/stores/userStorage.js'
const store = useStore()
const Panel = store.getPanel()
console.log(Panel)

</script>

<template>
    <component :is="Panel" />
</template>
