<script setup>

import { useStore } from '@/stores/userStorage.js'
const store = useStore()
const Panel = store.getPanel()
</script>

<template>
    <component :is="Panel" />
</template>
