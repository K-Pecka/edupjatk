<template>
  <div>
    <component :is="moduleEducation" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import M_realLife from '@/components/modulEducation/mathModules/M_RealLife/InitComponents.vue'
import M_equls from '@/components/modulEducation/mathModules/M_equles/InitComponents.vue'
import M_quest from '@/components/modulEducation/mathModules/M_quest/InitComponents.vue'
import ErrorPage from '@/components/modulEducation/ErrorPage.vue'

const route = useRoute()
const [chapter, module] = [route.params.chapter, route.params.module]
const nameModule = {
  1: {1: M_realLife},
  2: {1: M_equls},
  3: {1: M_quest}
}
let moduleEducation = nameModule[chapter]?.[module] ?? ErrorPage;

</script>
