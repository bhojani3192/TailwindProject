<script lang="ts" setup>

const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{ data: [30, 20, 12, 13, 7, 10, 19, 15, 32, 24, 28, 22] }]
}

</script>
<template>
    <div class="card mt-6 md:mt-10 p-3 md:p-10  md:h-[482px]">
        <h1 class="section-subtitle font-bold mb-5"> Loans Issued </h1>
        <ChartBar :data="chartData" />
    </div>
</template>