<script setup>

import { useUserStore } from '@/stores/user/main.js'
const store = useUserStore()
const Panel = store.getPanel()
</script>

<template>
    <component :is="Panel" />
</template>
