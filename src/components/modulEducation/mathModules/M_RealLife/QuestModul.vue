<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['time']);
const time = props.time;
const quest = ref("brak pytania")
const questions = [
`Ustaw zegar na godzinę ${time}.`
]

const getQuest = () => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

onMounted(() => {
  quest.value = getQuest();
});
</script>

<template>
    <div class="quest">
        {{ quest }} 
    </div>
</template>

<style scoped>
.quest
{
  font-size:1.1em;
}
</style>
