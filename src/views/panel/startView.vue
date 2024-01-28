<template>
    <div class="content">
      <div class="quality">
        <h2>Skuteczność:</h2>
        <div>
          <p>
            Bezbłędnie rozwiązane moduły:
            <span>51</span>
            <i></i>
          </p>
        </div>
        <div>
          <p>
            Średni poziom rozwiązania testu:
            <span>78%</span>
            <i></i>
          </p>
        </div>
        <div class="chart">
          <h2>Wykres</h2>
          <div ref="chartContainer"></div>
        </div>
      </div>
      <div class="test">
        <h2>Testy do wykonania:</h2>
        <!-- Tutaj możesz dodać listę testów do wykonania -->
      </div>
    </div>
  </template>
  
  <script setup>
  
  
  </script>
  
  <style scoped>
  .content {
    border-radius: 15px;
    padding: 2em;
    width: 80%;
    background: rgba(255, 255, 255, 0.55);
  }
  
  .quality {
    margin-bottom: 20px;
  }
  
  .chart {
    margin-top: 20px;
  }
  
  .chart canvas {
    width: 100% !important;
    height: auto !important;
  }
  </style>
  