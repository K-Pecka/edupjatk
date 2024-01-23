<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['time']);
const time = props.time;

const personsAll = [
  {
    name: 'Ala',
    person_1: 'Ali',
    person_2: 'Alą',
  },
  {
    name: 'Basia',
    person_1: 'Basi',
    person_2: 'Basią',
  },
  {
    name: 'Juzek',
    person_1: 'Juzkowi',
    person_2: 'Juzkiem',
  },
  {
    name: 'Wojtek',
    person_1: 'Wojtkowi',
    person_2: 'Wojtkiem',
  },
];

const toDo = {
  together: {
    morning: {
      timeStart: 7,
      timeEnd: 12,
      tasks: ['uczestniczą w zajęciach', 'mają przerwę', 'jedzą drugie śniadanie'],
    },
    noon: {
      timeStart: 12,
      timeEnd: 16,
      tasks: ['kończą zajęcia', 'odrobiają pracę domową'],
    },
    evening: {
      timeStart: 16,
      timeEnd: 19,
      tasks: ['idą na trening', 'czytają książkę', 'spotykają się z przyjaciółmi'],
    },
    night: {
      timeStart: 22,
      timeEnd: 29,
      tasks: ['przebudzili się'],
    },
  },
  single: {
    morning: {
      timeStart: 7,
      timeEnd: 12,
      tasks: ['uczestniczy w zajęciach', 'ma przerwę', 'je drugie śniadanie'],
    },
    noon: {
      timeStart: 12,
      timeEnd: 16,
      tasks: ['kończy zajęcia', 'odrobia pracę domową'],
    },
    evening: {
      timeStart: 16,
      timeEnd: 19,
      tasks: ['idzie na trening', 'czyta książkę', 'spotyka się z przyjaciółmi'],
    },
    night: {
      timeStart: 22,
      timeEnd: 29,
      tasks: ['obudzi się'],
    },
  },
};

const persons = ref([personsAll[0], personsAll[1]]);
const quest = ref(null);

const randomInt = (min, max) => {
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min) + min);
};

const randomForTable = (table) => {
  return table[randomInt(0, table.length - 1)];
};

const getPerson = () => {
  persons.value = [randomForTable(personsAll), randomForTable(personsAll)];

  if (persons.value[0].name === persons.value[1].name) {
    getPerson();
  }
};

const getQuest = () => {
  const person1 = persons.value[0];
  const person2 = persons.value[1];

  let task = '';
  let isTogether = true;

  if (randomInt(0, 1) === 0) {
    isTogether = false;
    task = randomForTable(toDo.single[getTimePeriod()].tasks);
  } else {
    task = randomForTable(toDo.together[getTimePeriod()].tasks);
  }

  return isTogether
    ? `${person1.name} i ${person2.person_2} ${task}, czy możesz ustawić zegar na ${time} godzinę?`
    : `${person1.name} ${task}, czy możesz ustawić zegar na ${time} godzinę?`;
};

const getTimePeriod = () => {
    let h = time.slice(0,2)
    console.log(h)
  if (toDo.together.morning.timeStart <= h && h <= toDo.together.morning.timeEnd) {
    return 'morning';
  } else if (toDo.together.noon.timeStart <= h && h <= toDo.together.noon.timeEnd) {
    return 'noon';
  } else if (toDo.together.evening.timeStart <= h && h <= toDo.together.evening.timeEnd) {
    return 'evening';
  } else {
    return 'night';
  }
};

onMounted(() => {
  getPerson();
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
