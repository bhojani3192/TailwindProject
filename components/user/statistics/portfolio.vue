
<script setup lang="ts">
import { investRow } from './data';
</script>
<template>
    <div class="w-full lg:w-1/3">
        <div class="card portfolio-card">

            <div class="flex justify-between items-center">
                <div class="investments-number">
                    <span>Net Annual Return</span>
                    <h1> <b>5.87%</b></h1>
                </div>
                <Button class="primary">Invest</Button>
            </div>

            <div class="grid grid-cols-2 gap-3 pt-5 pb-4 md:p-0">
                <div class="card stat-card">
                    <span>Portfolio</span>
                    <h2> <b> 4 </b></h2>
                </div>
                <div class="card stat-card">
                    <span>Loans available</span>
                    <h2> <b> 2 </b></h2>
                </div>
            </div>

            <div class="grid grid-flow-row gap-y-2">
                <div class="stat-card row" v-for="(item, index) in investRow" :key="`investRow_` + index">
                    <span>{{ item.label }}</span>
                    <h2>{{ item.value }}</h2>
                </div>

                <div class="stat-card row total-row">
                    <span>Total</span>
                    <h2>16</h2>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.portfolio-card {
    .investments-number {
        span {
            @apply text-xs sm:text-sm font-normal;
        }

        h1 {
            @apply text-xl md:text-[32px] lg:text-[28px]  xl:text-[32px] font-normal;
        }
    }

    .btn {
        @apply w-[112px] md:w-[178px];
    }

    @apply p-6 md:min-h-[804px] flex flex-col  md:gap-y-8 justify-start;

    .stat-card {
        @apply min-h-16 md:min-h-[112px] bg-brand-transparent-100 border-none flex justify-center items-center flex-col  rounded-lg md:rounded-2xl;

        span {
            @apply text-xs sm:text-sm font-normal text-black-transparent-400;
        }

        h2 {
            @apply text-xs sm:text-base mt-2 text-brand-solid-500;
        }
    }

    .stat-card.row {
        @apply flex-row justify-between items-center px-6 md:px-8 bg-black-transparent-50 min-h-[40px] md:min-h-[56px];

        h2 {
            @apply text-black-solid-500 font-bold;
        }
    }

    .stat-card.total-row {
        @apply bg-black-transparent-100;
    }
}
</style>