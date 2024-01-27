<template>
  <div class="container">
    <div class="row">
    <div class="col-md-8 col-sm-12 quest">
      <QuestModul :time='formattedTime'/> 
      <HintModul :bgcolor='backgroundHighlightedNumber'/>
    </div>
    <div class="col-md-4 col-sm-12 clock"> 
      <canvas
      ref="clockCanvas"
      width="400"
      height="400"
    ></canvas>
    <div class="btn-container">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary" @click="adjustMinutes(-5)">-</button>
          <button type="button" class="btn btn-primary">5 min</button>
          <button type="button" class="btn btn-outline-primary" @click="adjustMinutes(5)">+</button>
        </div>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary" @click="adjustMinutes(-15)">-</button>
          <button type="button" class="btn btn-primary">15 min</button>
          <button type="button" class="btn btn-outline-primary" @click="adjustMinutes(15)">+</button>
        </div>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary" @click="adjustMinutes(-60)">-</button>
          <button type="button" class="btn btn-primary">1 h</button>
          <button type="button" class="btn btn-outline-primary" @click="adjustMinutes(60)">+</button>
        </div>
        <div class="mt-4 btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-success" @click="confirmTime">Zatwierdź</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
.clock
{
  display:flex;
  flex-direction: column;
}
.container{
  background-color: #444;
}
.btn-group{
  display: flex;
  margin-top:1%;
  width:70%;
}
.btn-outline-primary{
  background:#c342d0;
  border:1px solid #8792da;
}
.btn-primary{
  width: 40%;
  background:#c342d0ee;
  border:1px solid #8792da;
}
.btn-container
{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script setup>
import HintModul from './HintModul.vue'
import QuestModul from './QuestModul.vue'
import { ref, onMounted, computed } from 'vue'
const clockCanvas = ref(null)
let ctx
let hours = 0
let minutes = 0

const correct = {
  hours: Math.floor(Math.random() * 24),
  minutes: Math.floor(Math.random() * 12) * 5
}
const hands = [
  {
    angle: () => -Math.PI / 2 + (hours + minutes / 60) * ((2 * Math.PI) / 12),
    length: 60,
    width: 6,
    color: '#f81'
  },
  {
    angle: () => -Math.PI / 2 + (minutes / 5) * ((2 * Math.PI) / 12),
    length: 100,
    width: 6,
    color: '#8f1'
  }
]

const formattedTime = computed(() => {
  let { minutes, hours } = correct
  const formattedHours = hours < 10 ? `0${hours}` : hours
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  return `${formattedHours}:${formattedMinutes}`
})

const highlightedNumber = ref(null)
const backgroundColorClock = ref('#fff')
const backgroundHighlightedNumber = ref('#f81')
const drawClock = () => {
  if (!clockCanvas.value) {
    return
  }
  ctx.clearRect(0, 0, clockCanvas.value.width, clockCanvas.value.height)

  drawClockFace()
  for (let hand of hands) {
    drawHand(hand)
  }
}

const drawHand = ({ angle, length, width, color }) => {
  ctx.beginPath()
  ctx.moveTo(clockCanvas.value.width / 2, clockCanvas.value.height / 2)
  const x = clockCanvas.value.width / 2 + length * Math.cos(angle())
  const y = clockCanvas.value.height / 2 + length * Math.sin(angle())
  ctx.lineTo(x, y)
  ctx.lineWidth = width
  ctx.lineCap = 'round'
  ctx.strokeStyle = color
  ctx.stroke()
}

const drawClockFace = () => {
  const radius = 160;
  const markLength = 10;

  ctx.beginPath();
  ctx.arc(clockCanvas.value.width / 2, clockCanvas.value.height / 2, radius, 0, 2 * Math.PI);
  ctx.fillStyle = backgroundColorClock.value;
  ctx.fill();
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#333';
  ctx.stroke();

  ctx.lineWidth = 2;
  for (let i = 0; i < 60; i++) {
    const angle = (i / 60) * (2 * Math.PI);
    const startX = clockCanvas.value.width / 2 + (radius - (i % 5 === 0 ? 1.5 * markLength : markLength)) * Math.cos(angle);
    const startY = clockCanvas.value.height / 2 + (radius - (i % 5 === 0 ? 1.5 * markLength : markLength)) * Math.sin(angle);
    const endX = clockCanvas.value.width / 2 + radius * Math.cos(angle);
    const endY = clockCanvas.value.height / 2 + radius * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  ctx.lineWidth = 2;
  ctx.strokeStyle = '#333';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let i = 1; i <= 12; i++) {
    const angle = ((i - 3) * (2 * Math.PI)) / 12;
    const x = clockCanvas.value.width / 2 + Math.cos(angle) * radius * 0.8;
    const y = clockCanvas.value.height / 2 + Math.sin(angle) * radius * 0.8;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    const numberColor = i === highlightedNumber.value ? backgroundHighlightedNumber.value : '#ffffff00';
    ctx.fillStyle = numberColor;
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.fillText(i.toString(), x, y);
  }
};


const adjustMinutes = (amount) => {
  minutes += amount
  if (minutes >= 60) {
    minutes -= 60
    hours = (hours + 1) % 24
  } else if (minutes < 0) {
    minutes += 60
    hours = (hours - 1 + 24) % 24
  }

  highlightedNumber.value = hours % 12 || 12
  drawClock()
}

const confirmTime = () => {
  console.log(`${hours} ${minutes} ${correct.hours} ${correct.minutes}`)
  console.log(hours === (correct.hours % 12 || 12))
  console.log(minutes === correct.minutes)
  if ((hours % 12 || 12) === (correct.hours % 12 || 12) && minutes === correct.minutes) {
    console.log('Odpowiedź poprawna!')
    backgroundColorClock.value = '#8f8'
    drawClock()
  } else {
    console.log('Odpowiedź niepoprawna.')
    backgroundColorClock.value = '#f88'
    drawClock()
  }
}

onMounted(() => {
  hours = Math.floor(Math.random() * 24)
  minutes = Math.floor(Math.random() * 12) * 5
  ctx = clockCanvas.value.getContext('2d')

  minutes = (minutes + 5) % 60
  if (minutes === 0) {
    hours = (hours + 1) % 24
  }

  highlightedNumber.value = hours % 12 || 12
  drawClockFace()
  //backgroundColor.value = '#fff'

  drawClock()
})
</script>
