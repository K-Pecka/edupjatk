<template>
  <div class="Page">
    <div v-if="state.level === 0" class="game-area">
      <div>
        <button v-for="lvl in 3" :key="lvl" @click="selectLevel(lvl)" class="level-button">
          Poziom {{ lvl }}
        </button>
      </div>
    </div>
    <div v-else class="game-area">
      <div class="question-counter">
        <p>Pytanie: {{ state.questionNumber }} / 10</p>
      </div>
      <div class="score">
        <p>Poprawne odpowiedzi: {{ state.correctAnswers }}</p>
      </div>
      <div class="question">
        <template v-if="state.level === 1">
          <span v-for="dot in state.number1" :key="dot" class="dot"></span>
          <span class="comparison">[?]</span>
          <span v-for="dot in state.number2" :key="dot" class="dot"></span>
        </template>
        <template v-else-if="state.level === 2">
          <p>{{ state.number1 }}</p>
          <span class="comparison">[?]</span>
          <p>{{ state.number2 }}</p>
        </template>
        <template v-else-if="state.level === 3">
          <p>{{ state.expression1 }}</p>
          <span class="comparison">[?]</span>
          <p>{{ state.expression2 }}</p>
        </template>
      </div>
      <div class="buttons">
        <button @click="checkAnswer(true)">&gt;</button>
        <button @click="checkAnswer('equal')">=</button>
        <button @click="checkAnswer(false)">&lt;</button>
      </div>
      <div v-if="state.showResult" class="result">
        <p>{{ state.resultMessage }}</p>
        <button @click="nextQuestion">Następne pytanie</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'

const state = reactive({
  level: 0,
  number1: 5,
  number2: 2,
  expression1: "",
  expression2: "",
  correctAnswers: 0,
  showResult: false,
  resultMessage: "",
  questionNumber: 0,
  answered: false,
});

const selectLevel = (lvl) => {
  resetState();
  state.level = lvl;
  nextQuestion();
};

const nextQuestion = () => {
  state.answered = false;
  if (state.questionNumber >= 10) {
    resetState();
    return;
  }
  state.questionNumber++;
  const randomNum = (max, min = 1) => Math.floor(Math.random() * max) + min;

  switch (state.level) {
    case 1:
      state.number1 = randomNum(10);
      state.number2 = randomNum(10);
      break;
    case 2:
      state.number1 = randomNum(100);
      state.number2 = randomNum(100);
      break;
    case 3:
      // eslint-disable-next-line no-case-declarations
      const [num1, num2, num3, num4] = [randomNum(10), randomNum(10), randomNum(10), randomNum(10)];
      state.expression1 = `${num1} + ${num2}`;
      state.expression2 = `${num3} + ${num4}`;
      state.number1 = num1 + num2;
      state.number2 = num3 + num4;
      break;
  }
  resetResult();
};

const checkAnswer = (selectedAnswer) => {
  if (state.answered) return;

  state.answered = true;
  state.showResult = true;
  const { number1, number2 } = state;

  let isCorrect = false;
  switch (selectedAnswer) {
    case "equal":
      isCorrect = number1 === number2;
      break;
    case true:
      isCorrect = number1 > number2;
      break;
    case false:
      isCorrect = number1 < number2;
      break;
  }

  state.resultMessage = isCorrect ? "Dobra odpowiedź!" : "Zła odpowiedź.";
  if (isCorrect) state.correctAnswers++;
};

const resetState = () => {
  state.level = 0;
  state.questionNumber = 0;
  resetResult();
};

const resetResult = () => {
  state.showResult = false;
  state.resultMessage = "";
};

</script>

<style scoped>
.Page {
  background-image: url('@/assets/images/backgrounds/background-home.svg');
  background-size: cover;
  height: 98vh;
  width: 98vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-area {
  width: 80%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 20px;
}

.question, .buttons, .result {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.question {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.dot {
  width: 20px;
  height: 20px;
  background-color: #3498db;
  border-radius: 50%;
  margin: 5px;
  display: inline-block;
  min-width: 20px;
}

.comparison, .result p {
  font-size: 24px;
  margin: 0 10px;
}

.buttons button {
  font-size: 16px;
  width: 80px;
  height: 40px;
  padding: 5px;
  flex-grow: 0;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.result button {
  font-size: 18px;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.score p {
  font-size: 18px;
  color: #27ae60;
  font-weight: bold;
  margin: 10px 0;
  background-color: #ebeeef;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.level-button {
  font-size: 20px;
  padding: 15px 30px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #3294d5;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
