<template>
  <div>
    <h2>{{ formattedTime }}</h2>
    <canvas
      ref="clockCanvas"
      :style="{ background: backgroundColor }"
      width="400"
      height="400"
      style="border: 1px solid #000"
    ></canvas>
    <div>
      <button @click="adjustMinutes(-1)">-1 minut</button>
      <button @click="adjustMinutes(1)">+1 minut</button>
      <button @click="adjustMinutes(-5)">-5 minut</button>
      <button @click="adjustMinutes(5)">+5 minut</button>
      <button @click="adjustMinutes(-15)">-15 minut</button>
      <button @click="adjustMinutes(15)">+15 minut</button>
      <button @click="adjustMinutes(-60)">-1 H</button>
      <button @click="adjustMinutes(60)">+1 H</button>
      <button @click="confirmTime">Zatwierdź</button>
    </div>
  </div>
</template>

<script setup>
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
const backgroundColor = ref('#fff')

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
  const radius = 160
  ctx.beginPath()
  ctx.arc(clockCanvas.value.width / 2, clockCanvas.value.height / 2, radius, 0, 2 * Math.PI)
  ctx.fillStyle = backgroundColor.value
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#333'
  ctx.stroke()

  ctx.font = 'bold 20px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  for (let i = 1; i <= 12; i++) {
    const angle = ((i - 3) * (2 * Math.PI)) / 12
    const x = clockCanvas.value.width / 2 + Math.cos(angle) * radius * 0.8
    const y = clockCanvas.value.height / 2 + Math.sin(angle) * radius * 0.8

    ctx.beginPath()
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    const numberColor = i === highlightedNumber.value ? '#f81' : '#fff'
    ctx.fillStyle = numberColor
    ctx.fill()
    ctx.fillStyle = '#000'
    ctx.fillText(i.toString(), x, y)
  }
}

const adjustMinutes = (amount) => {
  minutes += amount
  if (minutes >= 60) {
    minutes -= 60
    hours = (hours + 1) % 24
  } else if (minutes < 0) {
    minutes += 60
    hours = (hours - 1 + 24) % 24
  }

  highlightedNumber.value = hours % 12 || -1
  drawClock()
}

const confirmTime = () => {
  console.log(`${hours} ${minutes} ${correct.hours} ${correct.minutes}`)
  console.log(hours === (correct.hours % 12 || 12))
  console.log(minutes === correct.minutes)
  if ((hours % 12 || 12) === (correct.hours % 12 || 12) && minutes === correct.minutes) {
    console.log('Odpowiedź poprawna!')
    backgroundColor.value = '#8f8'
  } else {
    console.log('Odpowiedź niepoprawna.')
    backgroundColor.value = '#f88'
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
  backgroundColor.value = '#fff'

  drawClock()
})
</script>
