<script lang="ts" setup>
import type { CHARTDATA } from './types';
import {
    Chart as ChartJS,
    Filler,
    Title,
    Tooltip,
    Legend,
    DoughnutController,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(
    Filler,
    Title,
    Tooltip,
    Legend,
    DoughnutController,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const props = defineProps<{ data: CHARTDATA }>()

const chartOptions = {
    responsive: true,
    cutout: 60,
    plugins: {
        legend: {
            display: false,
        },
    },
    borderWidth: 0,
}
const showText = ref(true);
setTimeout(() => {
    showText.value = !showText.value;
}, 1000)
</script>

<template>
    <div class="grid w-full h-10 absolute top-[31%] left-0 text-center transition-opacity duration-500 delay-0" :class="{ 'opacity-0': showText }">
        <span class="text-xs text-black-solid-400">Expected</span>
        <span class="text-sm font-bold">14,000.50 EUR</span>
    </div>
    <Doughnut :options="chartOptions" :data="props.data" style="height: 90%; min-width: 100%;" />
</template>