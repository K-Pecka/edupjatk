<script setup>
const props = defineProps(['bgcolor'])
const bgcolor = props.bgcolor
</script>
<template>
    <div class="hint p-4">
        <h2>Podpowiedź:</h2>
        Kolorem
      <span class="current-time-indicator" :style="{ backgroundColor: bgcolor }"></span>
      oznaczono aktualną godzinę jaką pokazuje zegar
      </div>
</template>
<style scoped>
.current-time-indicator {
  min-width: 1.5em;
  min-height: 1.5em;
  border-radius: 10%;
  margin-top: 0.5em;
  border: 2px solid #333;
  display: inline-block;
  transform: translateY(.4em);
}
</style>