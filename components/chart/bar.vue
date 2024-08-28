<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import type { CHARTDATA } from './types';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps<{ data: CHARTDATA, barThickness?: number }>()
const { barThickness } = props
const chartOptions = {
    responsive: true,
    backgroundColor: '#00AC99',
    borderRadius: 90,
    barThickness: barThickness || 40,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
    }
}
</script>
<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="props.data" style="height: 90%; min-width: 100%;" />
</template>