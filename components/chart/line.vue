<script lang="ts" setup>
import type { CHARTDATA } from './types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const props = defineProps<{ data: CHARTDATA }>()

const chartOptions = {
    responsive: true,
    backgroundColor: '#00AC9929',
    borderColor: '#00AC99',
    tension: 0.3,
    pointStyle: false,
    elements: {
        line: {
            fill: 0
        }
    },
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
    <Line id="my-chart-id" :options="chartOptions" :data="props.data" style="height: 90%; min-width: 100%;" />
</template>