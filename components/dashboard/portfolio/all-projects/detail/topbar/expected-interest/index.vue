<script setup lang="ts">
const chartData = {
    labels: ['Amount of Interest', 'Principal', 'Comissions and Bonuses'],
    datasets: [{
        data: [10, 5, 90],
        backgroundColor: [
            'rgba(0, 172, 153, 0.8)',
            'rgba(241, 155, 56, 0.8)',
            'rgba(57, 119, 212, 0.8)',
        ],
    }]
}
</script>
<template>
    <div class="loan-box card">
        <div class="loan-section">
            <h2 class="pb-5 font-bold">Expected Interest</h2>
            <div class="h-1/2 w-1/2 m-auto">
                <ChartDoughnut :data="chartData" />
            </div>
            <div class="bg-black-solid-50 mt-7 w-full h-full p-4 rounded-3xl">
                <ul class="list-disc pl-8 marker:text-2xl text-black-solid-500">
                    <li class="marker:text-brand-solid-500">Amount of Interest</li>
                    <li class="marker:text-[#3977D4]">Principal</li>
                    <li class="marker:text-[#F19B38]">Comissions and Bonuses</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .loan-box {
        @apply rounded-2xl xs:mb-4 xs:w-full lg:w-4/12 h-[420px] bg-white border border-black-solid-200;
        .loan-section {
            @apply px-10 py-6 xl:w-full lg:w-[304px];
        }
    }
</style>