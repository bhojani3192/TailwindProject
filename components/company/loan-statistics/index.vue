<script setup lang="ts">
import statistics from './data';
</script>
<template>
    <section id="loan-statistics">
        <div class="container">
            <h1 class="section-title">Loan Statistics</h1>

            <div class="box-wrap">
                <div class="box" v-for="(item, index) in statistics" :key="index">
                    <span>{{ item.title }}</span>
                    <h2>{{ item.stat }}</h2>
                </div>
            </div>

            <CompanyLoanStatisticsChart />
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    @apply py-10  md:py-16;

    .box-wrap {
        @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 mt-6 md:mt-10;

        .box {
            @apply bg-white-500 border border-black-transparent-200 drop-shadow-lg rounded-2xl py-5 md:py-10 h-[112px] md:h-[unset];
            @apply flex flex-col justify-center items-center;

            span {
                @apply block text-sm sm:text-base font-medium text-center px-2 md:px-0;
            }

            h2 {
                @apply text-sm md:text-xl text-brand-solid-500 font-bold  mt-2 md:mt-3;
            }
        }
    }
}
</style>