<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: {
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 1000,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Task Done',
            backgroundColor: '#CEBEB9',
            data: [12, 20, 12, 5, 10, 15, 7],
            borderRadius: Number.MAX_VALUE,
            borderSkipped: true,
            barThickness: 16,
          },
          {
            label: 'Not Done',
            backgroundColor: '#D9D9D9',
            data: [2, 2, 3, 5, 7, 2, 7],
            borderRadius: Number.MAX_VALUE,
            borderSkipped: true,
            barThickness: 16,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            // stacked: true,
            grid: {
              drawBorder: false,
              display: false,
            },
            ticks: {},
          },
          y: {
            // stacked: true,
            grid: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              stepSize: 10,
            },
          },
        },
      },
    };
  },
};
</script>
