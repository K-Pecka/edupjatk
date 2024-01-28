<template>
  <main>
    <div v-if="uncorrectAnswer" class="overlay" style="background:rgba(205, 0, 0, 0.7)"></div>
    <div v-if="correctAnswer" class="overlay" style="background:rgba(9, 205, 0, 0.7)"></div> <!-- Zmienić -->
    <div class="main">
      <div class="questionContainer">
          <div v-for="(question, index) in questions" :key="index" class="question">
            <img :src="getImageSrc(question.img)" alt="">
            <span v-if="question.id == 0 || question.id == 2 ">+</span>
            <span v-if="question.id == 1">=</span>
            <p v-if="index != correctID">{{ memoryValues[index] }}</p>
            <p v-else>?</p>
          </div>
      </div>
      <div class="answer">
        <img v-if="correctID" :src="getImageSrc(questionID.img)" alt="">
        <input v-model="answer" type="number">
        <button @click="answerButton()">✓</button>
      </div>
    </div>
  
  </main>
</template>

<script setup>
import { ref } from "vue";
import q from "./questions.json"

const correctAnswer = ref(false);
const uncorrectAnswer = ref(false);
const answer = ref(0);
const questions = ref(q);
const correctID = getRandomNumber(1, questions.value.length-1);
const questionID = questions.value.find(question => question.id === correctID);
const memoryValues = ref([]);

// watch(answer, () => {
//   questions.value = q
// })
const getImageSrc =(img) =>{return `${import.meta.env.BASE_URL}src/assets/${img}`};
console.log(getImageSrc(questionID.img))
function getRandomValue(){
  let value = [...questions.value]
  value.map(el => {
  let value = getRandomNumber(el.value[0], el.value[1])
  if(el.id == correctID){
  memoryValues.value.push(null)
}else{
  memoryValues.value.push(value)
}
})
if(!checkPossibility()){
  memoryValues.value = []
  getRandomValue()
}
}
getRandomValue();

function checkPossibility(){
    const left = isNull(memoryValues.value[0]) + isNull(memoryValues.value[1])
    const right = isNull(memoryValues.value[2]) + isNull(memoryValues.value[3])
    if(memoryValues.value[0] == null || memoryValues.value[1] == null){
      if(left < right){
        return true
      }
    }
    else if(memoryValues.value[2] == null || memoryValues.value[3] == null){
      if(left > right){
        return true
      }
    }
    return false
}



function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
function isNull(element){
  return element == null?0:element
}
function answerButton() {
  const left = isNull(memoryValues.value[0]) + isNull(memoryValues.value[1])
  const right = isNull(memoryValues.value[2]) + isNull(memoryValues.value[3])
  const cAnswer = Math.abs(left - right)
  if (answer.value === cAnswer) {
    correctAnswer.value = true;
    uncorrectAnswer.value = false;
  } else {
    correctAnswer.value = false;
    uncorrectAnswer.value = true;
  }
}

</script>

<style scoped>
span,p,input{
  color:#444;
}
  .main{
    width: 80vw;
    height: 80vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.4)
    ),
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    margin: auto;
    border-radius: 30px;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
  }
  .questionContainer{
    /* border: 1px solid black; */
    display: flex;
    width: 98%;
    height: 70%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
  }
  .answer{
    height: 30%;
    width: 98%;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    /* border: 1px solid black; */
    justify-content: center;
    align-items: center;
  }
  .question p{
    font-weight: bold;
    font-size: 20px;
  }
  .questionContainer img{
    width: 150px;
    height: 150px;
    margin: 20px;
    margin-bottom: 0px;
  }

  .answer img{
    width: 150px;
    height: 150px;
    margin: 20px;
  }

  .answer input{
    width: 150px;
    height: 40px;
    margin: 20px;
    border-radius: 15px;
    border: 2px solid black;
    background-color: rgba(0, 0, 0, 0);
  }

  .answer button{
    width: 50px;
    height: 40px;
    margin: 20px;
    border-radius: 15px;
    border: 2px solid black;
    background-color: rgba(0, 255, 98, 0.3);
    cursor:pointer;
  }
  .overlay{
    width: 80vw;
    height: 80vh;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    margin: auto;
    border-radius: 30px;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    position: absolute;
  }
</style>
