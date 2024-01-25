<template>
  <DisplayCard :data="chapter" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { moduleStorage } from '@/stores/modulEducation/modulStorage.js'
import DisplayCard from '@/components/stateless/DisplayCard.vue'
const route = useRoute()

const { getChapter } = moduleStorage()
const chapterProp = route.params.chapter

const chapter = getChapter(chapterProp) ?? null
</script>
@/stores/modulEducation/main.js
