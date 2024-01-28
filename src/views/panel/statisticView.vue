<template>
    <div class="content">
      <h1>Wykresy Edukacyjne</h1>
      <div>
        <h2>Wyniki testu</h2>
        <div ref="pieChart"></div>

        <h2>Postępy ucznia</h2>
        <div ref="lineChart"></div>

        <h2>Średnie ocen</h2>
        <div ref="barChart"></div>

        <h2>Czas nauki vs Wyniki</h2>
        <div ref="scatterPlot"></div>

        <h2>Umiejętności ucznia</h2>
        <div ref="radarChart"></div>
      </div>
    </div>
</template>

  <script setup>
  import * as Highcharts from 'highcharts';
  import { ref, onMounted } from 'vue';

  const pieChart = ref(null);
  const lineChart = ref(null);
  const barChart = ref(null);
  const scatterPlot = ref(null);
  const radarChart = ref(null);

  const renderPieChart = () => {
    Highcharts.chart(pieChart.value, {
      chart: {
        type: 'pie',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
      },
      title: {
        text: 'Wyniki testu',
      },
      series: [
        {
          name: 'Dane',
          data: [
            ['Poprawne odpowiedzi', 75],
            ['Błędne odpowiedzi', 25],
          ],
        },
      ],
    });
  };

  const renderLineChart = () => {
    Highcharts.chart(lineChart.value, {
      chart: {
        type: 'line',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
      },
      title: {
        text: 'Postępy ucznia',
      },
      series: [
        {
          name: 'Postępy',
          data: [20, 40, 60, 80, 100],
        },
      ],
    });
  };

  const renderBarChart = () => {
    Highcharts.chart(barChart.value, {
      chart: {
        type: 'bar',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
      },
      title: {
        text: 'Średnie ocen',
      },
      series: [
        {
          name: 'Oceny',
          data: [4.5, 3.8, 4.2, 4.7, 3.9],
        },
      ],
    });
  };

  const renderScatterPlot = () => {
    Highcharts.chart(scatterPlot.value, {
      chart: {
        type: 'scatter',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
      },
      title: {
        text: 'Czas nauki vs Wyniki',
      },
      series: [
        {
          name: 'Dane',
          data: [
            [30, 70],
            [50, 80],
            [40, 75],
            [60, 90],
            [45, 85],
          ],
        },
      ],
    });
  };

  const renderRadarChart = () => {
    Highcharts.chart(radarChart.value, {
      chart: {
        polar: true,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
      },
      title: {
        text: 'Umiejętności ucznia',
      },
      xAxis: {
        categories: ['Matematyka', 'Nauki przyrodnicze', 'Język obcy', 'Informatyka', 'Historia'],
      },
      series: [
        {
          type: 'area',
          name: 'Umiejętności',
          data: [80, 90, 75, 85, 70],
        },
      ],
    });
  };

  onMounted(() => {
    // Initial rendering
    renderPieChart();
    renderLineChart();
    renderBarChart();
    renderScatterPlot();
    renderRadarChart();
  });
  </script>

  <style scoped>

.content{
    margin-top:10%;
    border-radius:15px;
    padding:2em;
    width: 80%;
    background: rgba(255, 255, 255, 0.55);;
  }
  </style>