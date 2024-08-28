<template>
    <section>
        <div class="p-8 card container rounded-2xl border border-black-solid-200">
            <h2>Borrower Information</h2>
            <div class="row" v-for="(item, index) in rows" :key="index">
                <span class="lg:text-sm xs:text-xs font-normal lg:w-full">{{ item.title }}</span>
                <span class="lg:text-sm xs:text-xs font-extrabold lg:w-full xs:w-[130px] xs:text-right" v-html="item.value"></span>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    section {
         @apply lg:my-12 xs:mx-3 lg:mx-3;
         h2 {
            @apply text-black-solid-500 text-[20px] font-bold leading-10 xs:pb-2;
         }
         .row {
            @apply lg:h-16 xs:h-9 lg:px-8 xs:px-0 flex justify-between items-center lg:border-b border-black-transparent-200;
            &:last-of-type {
                @apply border-none;
            }
         }
    }
</style>
<script setup lang="ts">
 import { rows } from './data';
</script>