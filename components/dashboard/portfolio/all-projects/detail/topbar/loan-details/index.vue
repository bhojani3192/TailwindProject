<script setup lang="ts">
import { data } from './data'
</script>
<template>
    <div class="loan-box card">
        <div class="loan-section">
            <h2 class="pb-7 font-bold">Loan Details</h2>
            <div class="text-black-solid-500 xs:text-[14px]" v-for="item, index in data" :key="index">
                <div class="flex justify-between pb-5">
                    <span>{{ item.title }}</span>
                    <span class="font-bold">{{ item.value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .loan-box {
        @apply rounded-2xl xs:mb-4 xs:w-full lg:w-4/12 h-[420px] lg:mr-12 xs:mr-12 md:mr-5 bg-white border border-black-solid-200;
        .loan-section {
            @apply px-10 py-6 xl:w-full lg:w-[304px];
        }
    }
</style>