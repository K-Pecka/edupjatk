<template>
  <DisplayCard :data="chapter" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useModuleStore } from '@/stores/modulEducation/main.js'
import DisplayCard from '@/components/stateless/DisplayCard.vue'
const route = useRoute()

const { getChapter } = useModuleStore()
const chapterProp = route.params.chapter

const chapter = getChapter(chapterProp) ?? null
</script>
