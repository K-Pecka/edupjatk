<script setup>
import { onMounted } from 'vue'
import anime from 'animejs'

const { title, content, style, class: className, animation } = defineProps(['message']).message

const setAnimationParagraf = () => {
  content.forEach((_, index) => {
    const paragraphElement = document.getElementById(`paragraph-${index}`)
    if (paragraphElement) {
      const customDelay = animation.p.config.delay ?? 0

      const animationConfig = {
        targets: paragraphElement,
        ...animation.p.config,
        delay: customDelay + 1000 * index
      }
      anime(animationConfig)
    }
  })
}

onMounted(() => {
  if (animation?.p.config) setAnimationParagraf()
})
</script>

<template>
  <header>
    <h1 :style="style?.h1" :class="className?.h1" v-html="title" ></h1>

    <div
      v-for="(paragraph, index) in content"
      :key="index"
      :id="`paragraph-${index}`"
      :style="style?.p"
      :class="[className?.p]"
    >
      <p v-html="paragraph"></p>
    </div>
  </header>
</template>